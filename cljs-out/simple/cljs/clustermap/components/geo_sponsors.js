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
return (function iter__28949(s__28950){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__28950__$1 = s__28950;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28950__$1);if(temp__4126__auto__)
{var s__28950__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28950__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28950__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28952 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28951 = (0);while(true){
if((i__28951 < size__4376__auto__))
{var map__28955 = cljs.core._nth.call(null,c__4375__auto__,i__28951);var map__28955__$1 = ((cljs.core.seq_QMARK_.call(null,map__28955))?cljs.core.apply.call(null,cljs.core.hash_map,map__28955):map__28955);var teaser = cljs.core.get.call(null,map__28955__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28955__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28955__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28955__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__28952,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__28957 = (i__28951 + (1));
i__28951 = G__28957;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28952),iter__28949.call(null,cljs.core.chunk_rest.call(null,s__28950__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28952),null);
}
} else
{var map__28956 = cljs.core.first.call(null,s__28950__$2);var map__28956__$1 = ((cljs.core.seq_QMARK_.call(null,map__28956))?cljs.core.apply.call(null,cljs.core.hash_map,map__28956):map__28956);var teaser = cljs.core.get.call(null,map__28956__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28956__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28956__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28956__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__28949.call(null,cljs.core.rest.call(null,s__28950__$2)));
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
var component_fnk__7881__auto___29051 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28963 = schema.core.Any;var input_schema28964 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28961","map28961",1753707915,null))], null);var input_checker28965 = schema.core.checker.call(null,input_schema28964);var output_checker28966 = schema.core.checker.call(null,output_schema28963);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966){
return (function constructor28959(G__28967){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28967], null);var temp__4126__auto___29053 = input_checker28965.call(null,args__6035__auto___29052);if(cljs.core.truth_(temp__4126__auto___29053))
{var error__6036__auto___29054 = temp__4126__auto___29053;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28959","constructor28959",1589215481,null),cljs.core.pr_str.call(null,error__6036__auto___29054)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29054,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29052,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28964,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28961 = G__28967;while(true){
if(cljs.core.map_QMARK_.call(null,map28961))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28961)));
}
var map28962 = plumbing.fnk.schema.safe_get.call(null,map28961,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map28962,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map28962,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28961,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t29008 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t29008 = (function (input_checker28965,owner,input_schema28964,G__28967,map28961,output_schema28963,bounds,output_checker28966,constructor28959,validate__6034__auto__,map28962,ufv__,geo_sponsors,meta29009){
this.input_checker28965 = input_checker28965;
this.owner = owner;
this.input_schema28964 = input_schema28964;
this.G__28967 = G__28967;
this.map28961 = map28961;
this.output_schema28963 = output_schema28963;
this.bounds = bounds;
this.output_checker28966 = output_checker28966;
this.constructor28959 = constructor28959;
this.validate__6034__auto__ = validate__6034__auto__;
this.map28962 = map28962;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.meta29009 = meta29009;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t29008.cljs$lang$type = true;
clustermap.components.geo_sponsors.t29008.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t29008";
clustermap.components.geo_sponsors.t29008.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t29008");
});})(owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966))
;
clustermap.components.geo_sponsors.t29008.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t29008.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966))
;
clustermap.components.geo_sponsors.t29008.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t29008.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966){
return (function (_,p__29011,p__29012){var self__ = this;
var map__29013 = p__29011;var map__29013__$1 = ((cljs.core.seq_QMARK_.call(null,map__29013))?cljs.core.apply.call(null,cljs.core.hash_map,map__29013):map__29013);var next_bounds = cljs.core.get.call(null,map__29013__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__29014 = cljs.core.get.call(null,map__29013__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__29014__$1 = ((cljs.core.seq_QMARK_.call(null,map__29014))?cljs.core.apply.call(null,cljs.core.hash_map,map__29014):map__29014);var next_geo_sponsors = map__29014__$1;var next_data = cljs.core.get.call(null,map__29014__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__29015 = p__29012;var map__29015__$1 = ((cljs.core.seq_QMARK_.call(null,map__29015))?cljs.core.apply.call(null,cljs.core.hash_map,map__29015):map__29015);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__29015__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29013,map__29013__$1,next_bounds,map__29014,map__29014__$1,next_geo_sponsors,next_data,map__29015,map__29015__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29013,map__29013__$1,next_bounds,map__29014,map__29014__$1,next_geo_sponsors,next_data,map__29015,map__29015__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966){
return (function (state_29033){var state_val_29034 = (state_29033[(1)]);if((state_val_29034 === (5)))
{var inst_29031 = (state_29033[(2)]);var state_29033__$1 = state_29033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29033__$1,inst_29031);
} else
{if((state_val_29034 === (4)))
{var state_29033__$1 = state_29033;var statearr_29035_29055 = state_29033__$1;(statearr_29035_29055[(2)] = null);
(statearr_29035_29055[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29034 === (3)))
{var inst_29018 = (state_29033[(7)]);var inst_29020 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29021 = ["GEO-SPONSORS : ",inst_29018];var inst_29022 = (new cljs.core.PersistentVector(null,2,(5),inst_29020,inst_29021,null));var inst_29023 = cljs.core.clj__GT_js.call(null,inst_29022);var inst_29024 = console.log(inst_29023);var inst_29025 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29026 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_29027 = (new cljs.core.PersistentVector(null,1,(5),inst_29025,inst_29026,null));var inst_29028 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_29027,inst_29018);var state_29033__$1 = (function (){var statearr_29036 = state_29033;(statearr_29036[(8)] = inst_29024);
return statearr_29036;
})();var statearr_29037_29056 = state_29033__$1;(statearr_29037_29056[(2)] = inst_29028);
(statearr_29037_29056[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29034 === (2)))
{var inst_29018 = (state_29033[(7)]);var inst_29018__$1 = (state_29033[(2)]);var state_29033__$1 = (function (){var statearr_29038 = state_29033;(statearr_29038[(7)] = inst_29018__$1);
return statearr_29038;
})();if(cljs.core.truth_(inst_29018__$1))
{var statearr_29039_29057 = state_29033__$1;(statearr_29039_29057[(1)] = (3));
} else
{var statearr_29040_29058 = state_29033__$1;(statearr_29040_29058[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29034 === (1)))
{var inst_29016 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_29033__$1 = state_29033;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29033__$1,(2),inst_29016);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29013,map__29013__$1,next_bounds,map__29014,map__29014__$1,next_geo_sponsors,next_data,map__29015,map__29015__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29013,map__29013__$1,next_bounds,map__29014,map__29014__$1,next_geo_sponsors,next_data,map__29015,map__29015__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29044 = [null,null,null,null,null,null,null,null,null];(statearr_29044[(0)] = state_machine__9111__auto__);
(statearr_29044[(1)] = (1));
return statearr_29044;
});
var state_machine__9111__auto____1 = (function (state_29033){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29033);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29045){if((e29045 instanceof Object))
{var ex__9114__auto__ = e29045;var statearr_29046_29059 = state_29033;(statearr_29046_29059[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29033);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29045;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29060 = state_29033;
state_29033 = G__29060;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29033){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29013,map__29013__$1,next_bounds,map__29014,map__29014__$1,next_geo_sponsors,next_data,map__29015,map__29015__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966))
})();var state__9127__auto__ = (function (){var statearr_29047 = f__9126__auto__.call(null);(statearr_29047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29047;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29013,map__29013__$1,next_bounds,map__29014,map__29014__$1,next_geo_sponsors,next_data,map__29015,map__29015__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966))
);
return c__9125__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966))
;
clustermap.components.geo_sponsors.t29008.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t29008.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966))
;
clustermap.components.geo_sponsors.t29008.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t29008.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966))
;
clustermap.components.geo_sponsors.t29008.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966){
return (function (_29010){var self__ = this;
var _29010__$1 = this;return self__.meta29009;
});})(owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966))
;
clustermap.components.geo_sponsors.t29008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966){
return (function (_29010,meta29009__$1){var self__ = this;
var _29010__$1 = this;return (new clustermap.components.geo_sponsors.t29008(self__.input_checker28965,self__.owner,self__.input_schema28964,self__.G__28967,self__.map28961,self__.output_schema28963,self__.bounds,self__.output_checker28966,self__.constructor28959,self__.validate__6034__auto__,self__.map28962,self__.ufv__,self__.geo_sponsors,meta29009__$1));
});})(owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966))
;
clustermap.components.geo_sponsors.__GT_t29008 = ((function (owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966){
return (function __GT_t29008(input_checker28965__$1,owner__$1,input_schema28964__$1,G__28967__$1,map28961__$1,output_schema28963__$1,bounds__$1,output_checker28966__$1,constructor28959__$1,validate__6034__auto____$1,map28962__$1,ufv____$1,geo_sponsors__$1,meta29009){return (new clustermap.components.geo_sponsors.t29008(input_checker28965__$1,owner__$1,input_schema28964__$1,G__28967__$1,map28961__$1,output_schema28963__$1,bounds__$1,output_checker28966__$1,constructor28959__$1,validate__6034__auto____$1,map28962__$1,ufv____$1,geo_sponsors__$1,meta29009));
});})(owner,geo_sponsors,bounds,map28962,validate__6034__auto__,ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966))
;
}
return (new clustermap.components.geo_sponsors.t29008(input_checker28965,owner,input_schema28964,G__28967,map28961,output_schema28963,bounds,output_checker28966,constructor28959,validate__6034__auto__,map28962,ufv__,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29061 = output_checker28966.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29061))
{var error__6036__auto___29062 = temp__4126__auto___29061;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28959","constructor28959",1589215481,null),cljs.core.pr_str.call(null,error__6036__auto___29062)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29062,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28963,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28963,input_schema28964,input_checker28965,output_checker28966))
,schema.core.make_fn_schema.call(null,output_schema28963,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28964], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___29051){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner28958,p__29048){var vec__29050 = p__29048;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29050,(0),null);return component_fnk__7881__auto___29051.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28958,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner28958,var_args){
var p__29048 = null;if (arguments.length > 2) {
  p__29048 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner28958,p__29048);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__29063){
var data__7882__auto__ = cljs.core.first(arglist__29063);
arglist__29063 = cljs.core.next(arglist__29063);
var owner28958 = cljs.core.first(arglist__29063);
var p__29048 = cljs.core.rest(arglist__29063);
return geo_sponsors_component__delegate(data__7882__auto__,owner28958,p__29048);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___29051))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m28960){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m28960);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m28960){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m28960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
