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
clustermap.components.geo_sponsors.render_STAR_ = (function render_STAR_(geo_sponsors_data){var top3 = cljs.core.take.call(null,(3),geo_sponsors_data);return React.DOM.div({"className": "sponsors"},cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (top3){
return (function iter__30228(s__30229){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__30229__$1 = s__30229;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30229__$1);if(temp__4126__auto__)
{var s__30229__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30229__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__30229__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__30231 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__30230 = (0);while(true){
if((i__30230 < size__12289__auto__))
{var map__30234 = cljs.core._nth.call(null,c__12288__auto__,i__30230);var map__30234__$1 = ((cljs.core.seq_QMARK_.call(null,map__30234))?cljs.core.apply.call(null,cljs.core.hash_map,map__30234):map__30234);var teaser = cljs.core.get.call(null,map__30234__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__30234__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__30234__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__30234__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__30231,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__30236 = (i__30230 + (1));
i__30230 = G__30236;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30231),iter__30228.call(null,cljs.core.chunk_rest.call(null,s__30229__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30231),null);
}
} else
{var map__30235 = cljs.core.first.call(null,s__30229__$2);var map__30235__$1 = ((cljs.core.seq_QMARK_.call(null,map__30235))?cljs.core.apply.call(null,cljs.core.hash_map,map__30235):map__30235);var teaser = cljs.core.get.call(null,map__30235__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__30235__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__30235__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__30235__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__30228.call(null,cljs.core.rest.call(null,s__30229__$2)));
}
} else
{return null;
}
break;
}
});})(top3))
,null,null));
});})(top3))
;return iter__12290__auto__.call(null,top3);
})()));
});
var component_fnk__15794__auto___30330 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30242 = schema.core.Any;var input_schema30243 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30240","map30240",1750524404,null))], null);var input_checker30244 = schema.core.checker.call(null,input_schema30243);var output_checker30245 = schema.core.checker.call(null,output_schema30242);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245){
return (function constructor30238(G__30246){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___30331 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30246], null);var temp__4126__auto___30332 = input_checker30244.call(null,args__13948__auto___30331);if(cljs.core.truth_(temp__4126__auto___30332))
{var error__13949__auto___30333 = temp__4126__auto___30332;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30238","constructor30238",866199999,null),cljs.core.pr_str.call(null,error__13949__auto___30333)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___30333,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___30331,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30243,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map30240 = G__30246;while(true){
if(cljs.core.map_QMARK_.call(null,map30240))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30240)));
}
var map30241 = plumbing.fnk.schema.safe_get.call(null,map30240,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map30241,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map30241,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30240,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t30287 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t30287 = (function (G__30246,map30241,owner,input_checker30244,map30240,input_schema30243,output_schema30242,bounds,output_checker30245,validate__13947__auto__,ufv__,geo_sponsors,constructor30238,meta30288){
this.G__30246 = G__30246;
this.map30241 = map30241;
this.owner = owner;
this.input_checker30244 = input_checker30244;
this.map30240 = map30240;
this.input_schema30243 = input_schema30243;
this.output_schema30242 = output_schema30242;
this.bounds = bounds;
this.output_checker30245 = output_checker30245;
this.validate__13947__auto__ = validate__13947__auto__;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.constructor30238 = constructor30238;
this.meta30288 = meta30288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t30287.cljs$lang$type = true;
clustermap.components.geo_sponsors.t30287.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t30287";
clustermap.components.geo_sponsors.t30287.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.geo-sponsors/t30287");
});})(owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245))
;
clustermap.components.geo_sponsors.t30287.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t30287.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245))
;
clustermap.components.geo_sponsors.t30287.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t30287.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245){
return (function (_,p__30290,p__30291){var self__ = this;
var map__30292 = p__30290;var map__30292__$1 = ((cljs.core.seq_QMARK_.call(null,map__30292))?cljs.core.apply.call(null,cljs.core.hash_map,map__30292):map__30292);var next_bounds = cljs.core.get.call(null,map__30292__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__30293 = cljs.core.get.call(null,map__30292__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__30293__$1 = ((cljs.core.seq_QMARK_.call(null,map__30293))?cljs.core.apply.call(null,cljs.core.hash_map,map__30293):map__30293);var next_geo_sponsors = map__30293__$1;var next_data = cljs.core.get.call(null,map__30293__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__30294 = p__30291;var map__30294__$1 = ((cljs.core.seq_QMARK_.call(null,map__30294))?cljs.core.apply.call(null,cljs.core.hash_map,map__30294):map__30294);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__30294__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,map__30292,map__30292__$1,next_bounds,map__30293,map__30293__$1,next_geo_sponsors,next_data,map__30294,map__30294__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,map__30292,map__30292__$1,next_bounds,map__30293,map__30293__$1,next_geo_sponsors,next_data,map__30294,map__30294__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245){
return (function (state_30312){var state_val_30313 = (state_30312[(1)]);if((state_val_30313 === (5)))
{var inst_30310 = (state_30312[(2)]);var state_30312__$1 = state_30312;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30312__$1,inst_30310);
} else
{if((state_val_30313 === (4)))
{var state_30312__$1 = state_30312;var statearr_30314_30334 = state_30312__$1;(statearr_30314_30334[(2)] = null);
(statearr_30314_30334[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30313 === (3)))
{var inst_30297 = (state_30312[(7)]);var inst_30299 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30300 = ["GEO-SPONSORS : ",inst_30297];var inst_30301 = (new cljs.core.PersistentVector(null,2,(5),inst_30299,inst_30300,null));var inst_30302 = cljs.core.clj__GT_js.call(null,inst_30301);var inst_30303 = console.log(inst_30302);var inst_30304 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30305 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_30306 = (new cljs.core.PersistentVector(null,1,(5),inst_30304,inst_30305,null));var inst_30307 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_30306,inst_30297);var state_30312__$1 = (function (){var statearr_30315 = state_30312;(statearr_30315[(8)] = inst_30303);
return statearr_30315;
})();var statearr_30316_30335 = state_30312__$1;(statearr_30316_30335[(2)] = inst_30307);
(statearr_30316_30335[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30313 === (2)))
{var inst_30297 = (state_30312[(7)]);var inst_30297__$1 = (state_30312[(2)]);var state_30312__$1 = (function (){var statearr_30317 = state_30312;(statearr_30317[(7)] = inst_30297__$1);
return statearr_30317;
})();if(cljs.core.truth_(inst_30297__$1))
{var statearr_30318_30336 = state_30312__$1;(statearr_30318_30336[(1)] = (3));
} else
{var statearr_30319_30337 = state_30312__$1;(statearr_30319_30337[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30313 === (1)))
{var inst_30295 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_30312__$1 = state_30312;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30312__$1,(2),inst_30295);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto__,___$1,map__30292,map__30292__$1,next_bounds,map__30293,map__30293__$1,next_geo_sponsors,next_data,map__30294,map__30294__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,map__30292,map__30292__$1,next_bounds,map__30293,map__30293__$1,next_geo_sponsors,next_data,map__30294,map__30294__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_30323 = [null,null,null,null,null,null,null,null,null];(statearr_30323[(0)] = state_machine__16719__auto__);
(statearr_30323[(1)] = (1));
return statearr_30323;
});
var state_machine__16719__auto____1 = (function (state_30312){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_30312);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e30324){if((e30324 instanceof Object))
{var ex__16722__auto__ = e30324;var statearr_30325_30338 = state_30312;(statearr_30325_30338[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30324;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30339 = state_30312;
state_30312 = G__30339;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_30312){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_30312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,map__30292,map__30292__$1,next_bounds,map__30293,map__30293__$1,next_geo_sponsors,next_data,map__30294,map__30294__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245))
})();var state__16735__auto__ = (function (){var statearr_30326 = f__16734__auto__.call(null);(statearr_30326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_30326;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,map__30292,map__30292__$1,next_bounds,map__30293,map__30293__$1,next_geo_sponsors,next_data,map__30294,map__30294__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245))
);
return c__16733__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245))
;
clustermap.components.geo_sponsors.t30287.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t30287.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245))
;
clustermap.components.geo_sponsors.t30287.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t30287.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245))
;
clustermap.components.geo_sponsors.t30287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245){
return (function (_30289){var self__ = this;
var _30289__$1 = this;return self__.meta30288;
});})(owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245))
;
clustermap.components.geo_sponsors.t30287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245){
return (function (_30289,meta30288__$1){var self__ = this;
var _30289__$1 = this;return (new clustermap.components.geo_sponsors.t30287(self__.G__30246,self__.map30241,self__.owner,self__.input_checker30244,self__.map30240,self__.input_schema30243,self__.output_schema30242,self__.bounds,self__.output_checker30245,self__.validate__13947__auto__,self__.ufv__,self__.geo_sponsors,self__.constructor30238,meta30288__$1));
});})(owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245))
;
clustermap.components.geo_sponsors.__GT_t30287 = ((function (owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245){
return (function __GT_t30287(G__30246__$1,map30241__$1,owner__$1,input_checker30244__$1,map30240__$1,input_schema30243__$1,output_schema30242__$1,bounds__$1,output_checker30245__$1,validate__13947__auto____$1,ufv____$1,geo_sponsors__$1,constructor30238__$1,meta30288){return (new clustermap.components.geo_sponsors.t30287(G__30246__$1,map30241__$1,owner__$1,input_checker30244__$1,map30240__$1,input_schema30243__$1,output_schema30242__$1,bounds__$1,output_checker30245__$1,validate__13947__auto____$1,ufv____$1,geo_sponsors__$1,constructor30238__$1,meta30288));
});})(owner,geo_sponsors,bounds,map30241,validate__13947__auto__,ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245))
;
}
return (new clustermap.components.geo_sponsors.t30287(G__30246,map30241,owner,input_checker30244,map30240,input_schema30243,output_schema30242,bounds,output_checker30245,validate__13947__auto__,ufv__,geo_sponsors,constructor30238,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___30340 = output_checker30245.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___30340))
{var error__13949__auto___30341 = temp__4126__auto___30340;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30238","constructor30238",866199999,null),cljs.core.pr_str.call(null,error__13949__auto___30341)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___30341,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30242,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema30242,input_schema30243,input_checker30244,output_checker30245))
,schema.core.make_fn_schema.call(null,output_schema30242,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30243], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__15794__auto___30330){
return (function() { 
var geo_sponsors_component__delegate = function (data__15795__auto__,owner30237,p__30327){var vec__30329 = p__30327;var opts__15796__auto__ = cljs.core.nth.call(null,vec__30329,(0),null);return component_fnk__15794__auto___30330.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15796__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30237,new cljs.core.Keyword(null,"data","data",-232669377),data__15795__auto__], null));
};
var geo_sponsors_component = function (data__15795__auto__,owner30237,var_args){
var p__30327 = null;if (arguments.length > 2) {
  p__30327 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__15795__auto__,owner30237,p__30327);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__30342){
var data__15795__auto__ = cljs.core.first(arglist__30342);
arglist__30342 = cljs.core.next(arglist__30342);
var owner30237 = cljs.core.first(arglist__30342);
var p__30327 = cljs.core.rest(arglist__30342);
return geo_sponsors_component__delegate(data__15795__auto__,owner30237,p__30327);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__15794__auto___30330))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__15763__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__15763__auto__,m30239){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__15763__auto__,m30239);
});
__GT_geo_sponsors_component = function(cursor__15763__auto__,m30239){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__15763__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__15763__auto__,m30239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;

//# sourceMappingURL=geo_sponsors.js.map