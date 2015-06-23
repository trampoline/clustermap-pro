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
return (function iter__28989(s__28990){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__28990__$1 = s__28990;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28990__$1);if(temp__4126__auto__)
{var s__28990__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28990__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28990__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28992 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28991 = (0);while(true){
if((i__28991 < size__4376__auto__))
{var map__28995 = cljs.core._nth.call(null,c__4375__auto__,i__28991);var map__28995__$1 = ((cljs.core.seq_QMARK_.call(null,map__28995))?cljs.core.apply.call(null,cljs.core.hash_map,map__28995):map__28995);var teaser = cljs.core.get.call(null,map__28995__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28995__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28995__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28995__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__28992,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__28997 = (i__28991 + (1));
i__28991 = G__28997;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28992),iter__28989.call(null,cljs.core.chunk_rest.call(null,s__28990__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28992),null);
}
} else
{var map__28996 = cljs.core.first.call(null,s__28990__$2);var map__28996__$1 = ((cljs.core.seq_QMARK_.call(null,map__28996))?cljs.core.apply.call(null,cljs.core.hash_map,map__28996):map__28996);var teaser = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__28989.call(null,cljs.core.rest.call(null,s__28990__$2)));
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
var component_fnk__7881__auto___29091 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29003 = schema.core.Any;var input_schema29004 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29001","map29001",-1291983176,null))], null);var input_checker29005 = schema.core.checker.call(null,input_schema29004);var output_checker29006 = schema.core.checker.call(null,output_schema29003);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006){
return (function constructor28999(G__29007){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29092 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29007], null);var temp__4126__auto___29093 = input_checker29005.call(null,args__6035__auto___29092);if(cljs.core.truth_(temp__4126__auto___29093))
{var error__6036__auto___29094 = temp__4126__auto___29093;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28999","constructor28999",-1197949556,null),cljs.core.pr_str.call(null,error__6036__auto___29094)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29094,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29092,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29004,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29001 = G__29007;while(true){
if(cljs.core.map_QMARK_.call(null,map29001))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29001)));
}
var map29002 = plumbing.fnk.schema.safe_get.call(null,map29001,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map29002,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map29002,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29001,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t29048 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t29048 = (function (owner,G__29007,input_schema29004,map29002,constructor28999,bounds,map29001,input_checker29005,validate__6034__auto__,output_schema29003,output_checker29006,ufv__,geo_sponsors,meta29049){
this.owner = owner;
this.G__29007 = G__29007;
this.input_schema29004 = input_schema29004;
this.map29002 = map29002;
this.constructor28999 = constructor28999;
this.bounds = bounds;
this.map29001 = map29001;
this.input_checker29005 = input_checker29005;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_schema29003 = output_schema29003;
this.output_checker29006 = output_checker29006;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.meta29049 = meta29049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t29048.cljs$lang$type = true;
clustermap.components.geo_sponsors.t29048.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t29048";
clustermap.components.geo_sponsors.t29048.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t29048");
});})(owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006))
;
clustermap.components.geo_sponsors.t29048.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t29048.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006))
;
clustermap.components.geo_sponsors.t29048.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t29048.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006){
return (function (_,p__29051,p__29052){var self__ = this;
var map__29053 = p__29051;var map__29053__$1 = ((cljs.core.seq_QMARK_.call(null,map__29053))?cljs.core.apply.call(null,cljs.core.hash_map,map__29053):map__29053);var next_bounds = cljs.core.get.call(null,map__29053__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__29054 = cljs.core.get.call(null,map__29053__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__29054__$1 = ((cljs.core.seq_QMARK_.call(null,map__29054))?cljs.core.apply.call(null,cljs.core.hash_map,map__29054):map__29054);var next_geo_sponsors = map__29054__$1;var next_data = cljs.core.get.call(null,map__29054__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__29055 = p__29052;var map__29055__$1 = ((cljs.core.seq_QMARK_.call(null,map__29055))?cljs.core.apply.call(null,cljs.core.hash_map,map__29055):map__29055);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__29055__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29053,map__29053__$1,next_bounds,map__29054,map__29054__$1,next_geo_sponsors,next_data,map__29055,map__29055__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29053,map__29053__$1,next_bounds,map__29054,map__29054__$1,next_geo_sponsors,next_data,map__29055,map__29055__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006){
return (function (state_29073){var state_val_29074 = (state_29073[(1)]);if((state_val_29074 === (5)))
{var inst_29071 = (state_29073[(2)]);var state_29073__$1 = state_29073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29073__$1,inst_29071);
} else
{if((state_val_29074 === (4)))
{var state_29073__$1 = state_29073;var statearr_29075_29095 = state_29073__$1;(statearr_29075_29095[(2)] = null);
(statearr_29075_29095[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29074 === (3)))
{var inst_29058 = (state_29073[(7)]);var inst_29060 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29061 = ["GEO-SPONSORS : ",inst_29058];var inst_29062 = (new cljs.core.PersistentVector(null,2,(5),inst_29060,inst_29061,null));var inst_29063 = cljs.core.clj__GT_js.call(null,inst_29062);var inst_29064 = console.log(inst_29063);var inst_29065 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29066 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_29067 = (new cljs.core.PersistentVector(null,1,(5),inst_29065,inst_29066,null));var inst_29068 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_29067,inst_29058);var state_29073__$1 = (function (){var statearr_29076 = state_29073;(statearr_29076[(8)] = inst_29064);
return statearr_29076;
})();var statearr_29077_29096 = state_29073__$1;(statearr_29077_29096[(2)] = inst_29068);
(statearr_29077_29096[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29074 === (2)))
{var inst_29058 = (state_29073[(7)]);var inst_29058__$1 = (state_29073[(2)]);var state_29073__$1 = (function (){var statearr_29078 = state_29073;(statearr_29078[(7)] = inst_29058__$1);
return statearr_29078;
})();if(cljs.core.truth_(inst_29058__$1))
{var statearr_29079_29097 = state_29073__$1;(statearr_29079_29097[(1)] = (3));
} else
{var statearr_29080_29098 = state_29073__$1;(statearr_29080_29098[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29074 === (1)))
{var inst_29056 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_29073__$1 = state_29073;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29073__$1,(2),inst_29056);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29053,map__29053__$1,next_bounds,map__29054,map__29054__$1,next_geo_sponsors,next_data,map__29055,map__29055__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29053,map__29053__$1,next_bounds,map__29054,map__29054__$1,next_geo_sponsors,next_data,map__29055,map__29055__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29084 = [null,null,null,null,null,null,null,null,null];(statearr_29084[(0)] = state_machine__9111__auto__);
(statearr_29084[(1)] = (1));
return statearr_29084;
});
var state_machine__9111__auto____1 = (function (state_29073){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29073);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29085){if((e29085 instanceof Object))
{var ex__9114__auto__ = e29085;var statearr_29086_29099 = state_29073;(statearr_29086_29099[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29073);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29085;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29100 = state_29073;
state_29073 = G__29100;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29073){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29053,map__29053__$1,next_bounds,map__29054,map__29054__$1,next_geo_sponsors,next_data,map__29055,map__29055__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006))
})();var state__9127__auto__ = (function (){var statearr_29087 = f__9126__auto__.call(null);(statearr_29087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29087;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29053,map__29053__$1,next_bounds,map__29054,map__29054__$1,next_geo_sponsors,next_data,map__29055,map__29055__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006))
);
return c__9125__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006))
;
clustermap.components.geo_sponsors.t29048.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t29048.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006))
;
clustermap.components.geo_sponsors.t29048.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t29048.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006))
;
clustermap.components.geo_sponsors.t29048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006){
return (function (_29050){var self__ = this;
var _29050__$1 = this;return self__.meta29049;
});})(owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006))
;
clustermap.components.geo_sponsors.t29048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006){
return (function (_29050,meta29049__$1){var self__ = this;
var _29050__$1 = this;return (new clustermap.components.geo_sponsors.t29048(self__.owner,self__.G__29007,self__.input_schema29004,self__.map29002,self__.constructor28999,self__.bounds,self__.map29001,self__.input_checker29005,self__.validate__6034__auto__,self__.output_schema29003,self__.output_checker29006,self__.ufv__,self__.geo_sponsors,meta29049__$1));
});})(owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006))
;
clustermap.components.geo_sponsors.__GT_t29048 = ((function (owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006){
return (function __GT_t29048(owner__$1,G__29007__$1,input_schema29004__$1,map29002__$1,constructor28999__$1,bounds__$1,map29001__$1,input_checker29005__$1,validate__6034__auto____$1,output_schema29003__$1,output_checker29006__$1,ufv____$1,geo_sponsors__$1,meta29049){return (new clustermap.components.geo_sponsors.t29048(owner__$1,G__29007__$1,input_schema29004__$1,map29002__$1,constructor28999__$1,bounds__$1,map29001__$1,input_checker29005__$1,validate__6034__auto____$1,output_schema29003__$1,output_checker29006__$1,ufv____$1,geo_sponsors__$1,meta29049));
});})(owner,geo_sponsors,bounds,map29002,validate__6034__auto__,ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006))
;
}
return (new clustermap.components.geo_sponsors.t29048(owner,G__29007,input_schema29004,map29002,constructor28999,bounds,map29001,input_checker29005,validate__6034__auto__,output_schema29003,output_checker29006,ufv__,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29101 = output_checker29006.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29101))
{var error__6036__auto___29102 = temp__4126__auto___29101;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28999","constructor28999",-1197949556,null),cljs.core.pr_str.call(null,error__6036__auto___29102)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29102,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29003,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29003,input_schema29004,input_checker29005,output_checker29006))
,schema.core.make_fn_schema.call(null,output_schema29003,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29004], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___29091){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner28998,p__29088){var vec__29090 = p__29088;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29090,(0),null);return component_fnk__7881__auto___29091.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28998,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner28998,var_args){
var p__29088 = null;if (arguments.length > 2) {
  p__29088 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner28998,p__29088);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__29103){
var data__7882__auto__ = cljs.core.first(arglist__29103);
arglist__29103 = cljs.core.next(arglist__29103);
var owner28998 = cljs.core.first(arglist__29103);
var p__29088 = cljs.core.rest(arglist__29103);
return geo_sponsors_component__delegate(data__7882__auto__,owner28998,p__29088);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___29091))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m29000){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m29000);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m29000){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m29000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
