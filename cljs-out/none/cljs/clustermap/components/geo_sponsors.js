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
clustermap.components.geo_sponsors.render_STAR_ = (function render_STAR_(geo_sponsors_data){var top3 = cljs.core.take.call(null,(3),geo_sponsors_data);return React.DOM.div({"className": "sponsors"},cljs.core.into_array.call(null,(function (){var iter__12252__auto__ = ((function (top3){
return (function iter__29213(s__29214){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__29214__$1 = s__29214;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29214__$1);if(temp__4126__auto__)
{var s__29214__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29214__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__29214__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__29216 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__29215 = (0);while(true){
if((i__29215 < size__12251__auto__))
{var map__29219 = cljs.core._nth.call(null,c__12250__auto__,i__29215);var map__29219__$1 = ((cljs.core.seq_QMARK_.call(null,map__29219))?cljs.core.apply.call(null,cljs.core.hash_map,map__29219):map__29219);var teaser = cljs.core.get.call(null,map__29219__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__29219__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__29219__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__29219__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__29216,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__29221 = (i__29215 + (1));
i__29215 = G__29221;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29216),iter__29213.call(null,cljs.core.chunk_rest.call(null,s__29214__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29216),null);
}
} else
{var map__29220 = cljs.core.first.call(null,s__29214__$2);var map__29220__$1 = ((cljs.core.seq_QMARK_.call(null,map__29220))?cljs.core.apply.call(null,cljs.core.hash_map,map__29220):map__29220);var teaser = cljs.core.get.call(null,map__29220__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__29220__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__29220__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__29220__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__29213.call(null,cljs.core.rest.call(null,s__29214__$2)));
}
} else
{return null;
}
break;
}
});})(top3))
,null,null));
});})(top3))
;return iter__12252__auto__.call(null,top3);
})()));
});
clustermap.components.geo_sponsors.request_geo_sponsors_data = (function request_geo_sponsors_data(resource,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.geo_sponsors,bounds);
});
var component_fnk__15756__auto___29251 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29227 = schema.core.Any;var input_schema29228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29225","map29225",1396180540,null))], null);var input_checker29229 = schema.core.checker.call(null,input_schema29228);var output_checker29230 = schema.core.checker.call(null,output_schema29227);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function constructor29223(G__29231){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___29252 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29231], null);var temp__4126__auto___29253 = input_checker29229.call(null,args__13910__auto___29252);if(cljs.core.truth_(temp__4126__auto___29253))
{var error__13911__auto___29254 = temp__4126__auto___29253;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29223","constructor29223",-959396845,null),cljs.core.pr_str.call(null,error__13911__auto___29254)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___29254,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___29252,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29228,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map29225 = G__29231;while(true){
if(cljs.core.map_QMARK_.call(null,map29225))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29225)));
}
var map29226 = plumbing.fnk.schema.safe_get.call(null,map29225,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map29226,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map29226,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29225,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t29240 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t29240 = (function (G__29231,owner,input_schema29228,validate__13909__auto__,constructor29223,input_checker29229,output_schema29227,bounds,output_checker29230,map29225,map29226,ufv__,geo_sponsors,meta29241){
this.G__29231 = G__29231;
this.owner = owner;
this.input_schema29228 = input_schema29228;
this.validate__13909__auto__ = validate__13909__auto__;
this.constructor29223 = constructor29223;
this.input_checker29229 = input_checker29229;
this.output_schema29227 = output_schema29227;
this.bounds = bounds;
this.output_checker29230 = output_checker29230;
this.map29225 = map29225;
this.map29226 = map29226;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.meta29241 = meta29241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t29240.cljs$lang$type = true;
clustermap.components.geo_sponsors.t29240.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t29240";
clustermap.components.geo_sponsors.t29240.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.geo-sponsors/t29240");
});})(owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;
clustermap.components.geo_sponsors.t29240.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t29240.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;
clustermap.components.geo_sponsors.t29240.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t29240.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (_,p__29243,p__29244){var self__ = this;
var map__29245 = p__29243;var map__29245__$1 = ((cljs.core.seq_QMARK_.call(null,map__29245))?cljs.core.apply.call(null,cljs.core.hash_map,map__29245):map__29245);var next_bounds = cljs.core.get.call(null,map__29245__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__29246 = cljs.core.get.call(null,map__29245__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__29246__$1 = ((cljs.core.seq_QMARK_.call(null,map__29246))?cljs.core.apply.call(null,cljs.core.hash_map,map__29246):map__29246);var next_geo_sponsors = map__29246__$1;var next_data = cljs.core.get.call(null,map__29246__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__29247 = p__29244;var map__29247__$1 = ((cljs.core.seq_QMARK_.call(null,map__29247))?cljs.core.apply.call(null,cljs.core.hash_map,map__29247):map__29247);var next_geo_sponsors_data_resource = cljs.core.get.call(null,map__29247__$1,new cljs.core.Keyword(null,"geo-sponsors-data-resource","geo-sponsors-data-resource",1080846063));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{return clustermap.components.geo_sponsors.request_geo_sponsors_data.call(null,next_geo_sponsors_data_resource,next_bounds);
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;
clustermap.components.geo_sponsors.t29240.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t29240.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (_){var self__ = this;
var ___$1 = this;var gsr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"geo-sponsors-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"geo-sponsors-data-resource","geo-sponsors-data-resource",1080846063),gsr);
return clustermap.ordered_resource.retrieve_responses.call(null,gsr,((function (gsr,___$1,owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (response){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GEO-SPONSORS : ",response], null)));
return om.core.update_BANG_.call(null,self__.geo_sponsors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),response);
});})(gsr,___$1,owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
);
});})(owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;
clustermap.components.geo_sponsors.t29240.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t29240.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;
clustermap.components.geo_sponsors.t29240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (_29242){var self__ = this;
var _29242__$1 = this;return self__.meta29241;
});})(owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;
clustermap.components.geo_sponsors.t29240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (_29242,meta29241__$1){var self__ = this;
var _29242__$1 = this;return (new clustermap.components.geo_sponsors.t29240(self__.G__29231,self__.owner,self__.input_schema29228,self__.validate__13909__auto__,self__.constructor29223,self__.input_checker29229,self__.output_schema29227,self__.bounds,self__.output_checker29230,self__.map29225,self__.map29226,self__.ufv__,self__.geo_sponsors,meta29241__$1));
});})(owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;
clustermap.components.geo_sponsors.__GT_t29240 = ((function (owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function __GT_t29240(G__29231__$1,owner__$1,input_schema29228__$1,validate__13909__auto____$1,constructor29223__$1,input_checker29229__$1,output_schema29227__$1,bounds__$1,output_checker29230__$1,map29225__$1,map29226__$1,ufv____$1,geo_sponsors__$1,meta29241){return (new clustermap.components.geo_sponsors.t29240(G__29231__$1,owner__$1,input_schema29228__$1,validate__13909__auto____$1,constructor29223__$1,input_checker29229__$1,output_schema29227__$1,bounds__$1,output_checker29230__$1,map29225__$1,map29226__$1,ufv____$1,geo_sponsors__$1,meta29241));
});})(owner,geo_sponsors,bounds,map29226,validate__13909__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;
}
return (new clustermap.components.geo_sponsors.t29240(G__29231,owner,input_schema29228,validate__13909__auto__,constructor29223,input_checker29229,output_schema29227,bounds,output_checker29230,map29225,map29226,ufv__,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___29255 = output_checker29230.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___29255))
{var error__13911__auto___29256 = temp__4126__auto___29255;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29223","constructor29223",-959396845,null),cljs.core.pr_str.call(null,error__13911__auto___29256)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___29256,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29227,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
,schema.core.make_fn_schema.call(null,output_schema29227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29228], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__15756__auto___29251){
return (function() { 
var geo_sponsors_component__delegate = function (data__15757__auto__,owner29222,p__29248){var vec__29250 = p__29248;var opts__15758__auto__ = cljs.core.nth.call(null,vec__29250,(0),null);return component_fnk__15756__auto___29251.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15758__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29222,new cljs.core.Keyword(null,"data","data",-232669377),data__15757__auto__], null));
};
var geo_sponsors_component = function (data__15757__auto__,owner29222,var_args){
var p__29248 = null;if (arguments.length > 2) {
  p__29248 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__15757__auto__,owner29222,p__29248);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__29257){
var data__15757__auto__ = cljs.core.first(arglist__29257);
arglist__29257 = cljs.core.next(arglist__29257);
var owner29222 = cljs.core.first(arglist__29257);
var p__29248 = cljs.core.rest(arglist__29257);
return geo_sponsors_component__delegate(data__15757__auto__,owner29222,p__29248);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__15756__auto___29251))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__15725__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__15725__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__15725__auto__,m29224){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__15725__auto__,m29224);
});
__GT_geo_sponsors_component = function(cursor__15725__auto__,m29224){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__15725__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__15725__auto__,m29224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;

//# sourceMappingURL=geo_sponsors.js.map