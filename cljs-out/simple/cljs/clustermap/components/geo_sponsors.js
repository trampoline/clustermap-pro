// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.geo_sponsors');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.api');
clustermap.components.geo_sponsors.render_STAR_ = (function render_STAR_(geo_sponsors_data){var top3 = cljs.core.take.call(null,(3),geo_sponsors_data);return React.DOM.div({"className": "sponsors"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (top3){
return (function iter__28411(s__28412){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__28412__$1 = s__28412;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28412__$1);if(temp__4126__auto__)
{var s__28412__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28412__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28412__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28414 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28413 = (0);while(true){
if((i__28413 < size__4376__auto__))
{var map__28417 = cljs.core._nth.call(null,c__4375__auto__,i__28413);var map__28417__$1 = ((cljs.core.seq_QMARK_.call(null,map__28417))?cljs.core.apply.call(null,cljs.core.hash_map,map__28417):map__28417);var teaser = cljs.core.get.call(null,map__28417__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28417__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28417__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28417__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__28414,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__28419 = (i__28413 + (1));
i__28413 = G__28419;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28414),iter__28411.call(null,cljs.core.chunk_rest.call(null,s__28412__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28414),null);
}
} else
{var map__28418 = cljs.core.first.call(null,s__28412__$2);var map__28418__$1 = ((cljs.core.seq_QMARK_.call(null,map__28418))?cljs.core.apply.call(null,cljs.core.hash_map,map__28418):map__28418);var teaser = cljs.core.get.call(null,map__28418__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28418__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28418__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28418__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__28411.call(null,cljs.core.rest.call(null,s__28412__$2)));
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
var component_fnk__7881__auto___28513 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28425 = schema.core.Any;var input_schema28426 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28423","map28423",-642256487,null))], null);var input_checker28427 = schema.core.checker.call(null,input_schema28426);var output_checker28428 = schema.core.checker.call(null,output_schema28425);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function constructor28421(G__28429){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28514 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28429], null);var temp__4126__auto___28515 = input_checker28427.call(null,args__6035__auto___28514);if(cljs.core.truth_(temp__4126__auto___28515))
{var error__6036__auto___28516 = temp__4126__auto___28515;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28421","constructor28421",-456845099,null),cljs.core.pr_str.call(null,error__6036__auto___28516)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28516,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28514,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28426,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28423 = G__28429;while(true){
if(cljs.core.map_QMARK_.call(null,map28423))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28423)));
}
var map28424 = plumbing.fnk.schema.safe_get.call(null,map28423,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map28424,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map28424,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28423,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t28470 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t28470 = (function (output_checker28428,owner,input_schema28426,map28424,output_schema28425,constructor28421,bounds,G__28429,map28423,validate__6034__auto__,input_checker28427,ufv__,geo_sponsors,meta28471){
this.output_checker28428 = output_checker28428;
this.owner = owner;
this.input_schema28426 = input_schema28426;
this.map28424 = map28424;
this.output_schema28425 = output_schema28425;
this.constructor28421 = constructor28421;
this.bounds = bounds;
this.G__28429 = G__28429;
this.map28423 = map28423;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_checker28427 = input_checker28427;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.meta28471 = meta28471;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t28470.cljs$lang$type = true;
clustermap.components.geo_sponsors.t28470.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t28470";
clustermap.components.geo_sponsors.t28470.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t28470");
});})(owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
;
clustermap.components.geo_sponsors.t28470.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t28470.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
;
clustermap.components.geo_sponsors.t28470.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t28470.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function (_,p__28473,p__28474){var self__ = this;
var map__28475 = p__28473;var map__28475__$1 = ((cljs.core.seq_QMARK_.call(null,map__28475))?cljs.core.apply.call(null,cljs.core.hash_map,map__28475):map__28475);var next_bounds = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__28476 = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__28476__$1 = ((cljs.core.seq_QMARK_.call(null,map__28476))?cljs.core.apply.call(null,cljs.core.hash_map,map__28476):map__28476);var next_geo_sponsors = map__28476__$1;var next_data = cljs.core.get.call(null,map__28476__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__28477 = p__28474;var map__28477__$1 = ((cljs.core.seq_QMARK_.call(null,map__28477))?cljs.core.apply.call(null,cljs.core.hash_map,map__28477):map__28477);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__28477__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28475,map__28475__$1,next_bounds,map__28476,map__28476__$1,next_geo_sponsors,next_data,map__28477,map__28477__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28475,map__28475__$1,next_bounds,map__28476,map__28476__$1,next_geo_sponsors,next_data,map__28477,map__28477__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function (state_28495){var state_val_28496 = (state_28495[(1)]);if((state_val_28496 === (5)))
{var inst_28493 = (state_28495[(2)]);var state_28495__$1 = state_28495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28495__$1,inst_28493);
} else
{if((state_val_28496 === (4)))
{var state_28495__$1 = state_28495;var statearr_28497_28517 = state_28495__$1;(statearr_28497_28517[(2)] = null);
(statearr_28497_28517[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28496 === (3)))
{var inst_28480 = (state_28495[(7)]);var inst_28482 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28483 = ["GEO-SPONSORS : ",inst_28480];var inst_28484 = (new cljs.core.PersistentVector(null,2,(5),inst_28482,inst_28483,null));var inst_28485 = cljs.core.clj__GT_js.call(null,inst_28484);var inst_28486 = console.log(inst_28485);var inst_28487 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28488 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_28489 = (new cljs.core.PersistentVector(null,1,(5),inst_28487,inst_28488,null));var inst_28490 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_28489,inst_28480);var state_28495__$1 = (function (){var statearr_28498 = state_28495;(statearr_28498[(8)] = inst_28486);
return statearr_28498;
})();var statearr_28499_28518 = state_28495__$1;(statearr_28499_28518[(2)] = inst_28490);
(statearr_28499_28518[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28496 === (2)))
{var inst_28480 = (state_28495[(7)]);var inst_28480__$1 = (state_28495[(2)]);var state_28495__$1 = (function (){var statearr_28500 = state_28495;(statearr_28500[(7)] = inst_28480__$1);
return statearr_28500;
})();if(cljs.core.truth_(inst_28480__$1))
{var statearr_28501_28519 = state_28495__$1;(statearr_28501_28519[(1)] = (3));
} else
{var statearr_28502_28520 = state_28495__$1;(statearr_28502_28520[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28496 === (1)))
{var inst_28478 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_28495__$1 = state_28495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28495__$1,(2),inst_28478);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28475,map__28475__$1,next_bounds,map__28476,map__28476__$1,next_geo_sponsors,next_data,map__28477,map__28477__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28475,map__28475__$1,next_bounds,map__28476,map__28476__$1,next_geo_sponsors,next_data,map__28477,map__28477__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28506 = [null,null,null,null,null,null,null,null,null];(statearr_28506[(0)] = state_machine__9111__auto__);
(statearr_28506[(1)] = (1));
return statearr_28506;
});
var state_machine__9111__auto____1 = (function (state_28495){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28495);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28507){if((e28507 instanceof Object))
{var ex__9114__auto__ = e28507;var statearr_28508_28521 = state_28495;(statearr_28508_28521[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28507;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28522 = state_28495;
state_28495 = G__28522;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28495){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28475,map__28475__$1,next_bounds,map__28476,map__28476__$1,next_geo_sponsors,next_data,map__28477,map__28477__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
})();var state__9127__auto__ = (function (){var statearr_28509 = f__9126__auto__.call(null);(statearr_28509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28509;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28475,map__28475__$1,next_bounds,map__28476,map__28476__$1,next_geo_sponsors,next_data,map__28477,map__28477__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
);
return c__9125__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
;
clustermap.components.geo_sponsors.t28470.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t28470.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
;
clustermap.components.geo_sponsors.t28470.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t28470.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
;
clustermap.components.geo_sponsors.t28470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function (_28472){var self__ = this;
var _28472__$1 = this;return self__.meta28471;
});})(owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
;
clustermap.components.geo_sponsors.t28470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function (_28472,meta28471__$1){var self__ = this;
var _28472__$1 = this;return (new clustermap.components.geo_sponsors.t28470(self__.output_checker28428,self__.owner,self__.input_schema28426,self__.map28424,self__.output_schema28425,self__.constructor28421,self__.bounds,self__.G__28429,self__.map28423,self__.validate__6034__auto__,self__.input_checker28427,self__.ufv__,self__.geo_sponsors,meta28471__$1));
});})(owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
;
clustermap.components.geo_sponsors.__GT_t28470 = ((function (owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function __GT_t28470(output_checker28428__$1,owner__$1,input_schema28426__$1,map28424__$1,output_schema28425__$1,constructor28421__$1,bounds__$1,G__28429__$1,map28423__$1,validate__6034__auto____$1,input_checker28427__$1,ufv____$1,geo_sponsors__$1,meta28471){return (new clustermap.components.geo_sponsors.t28470(output_checker28428__$1,owner__$1,input_schema28426__$1,map28424__$1,output_schema28425__$1,constructor28421__$1,bounds__$1,G__28429__$1,map28423__$1,validate__6034__auto____$1,input_checker28427__$1,ufv____$1,geo_sponsors__$1,meta28471));
});})(owner,geo_sponsors,bounds,map28424,validate__6034__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
;
}
return (new clustermap.components.geo_sponsors.t28470(output_checker28428,owner,input_schema28426,map28424,output_schema28425,constructor28421,bounds,G__28429,map28423,validate__6034__auto__,input_checker28427,ufv__,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28523 = output_checker28428.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28523))
{var error__6036__auto___28524 = temp__4126__auto___28523;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28421","constructor28421",-456845099,null),cljs.core.pr_str.call(null,error__6036__auto___28524)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28524,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28425,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
,schema.core.make_fn_schema.call(null,output_schema28425,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28426], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___28513){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner28420,p__28510){var vec__28512 = p__28510;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28512,(0),null);return component_fnk__7881__auto___28513.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28420,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner28420,var_args){
var p__28510 = null;if (arguments.length > 2) {
  p__28510 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner28420,p__28510);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__28525){
var data__7882__auto__ = cljs.core.first(arglist__28525);
arglist__28525 = cljs.core.next(arglist__28525);
var owner28420 = cljs.core.first(arglist__28525);
var p__28510 = cljs.core.rest(arglist__28525);
return geo_sponsors_component__delegate(data__7882__auto__,owner28420,p__28510);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___28513))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m28422){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m28422);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m28422){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m28422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
