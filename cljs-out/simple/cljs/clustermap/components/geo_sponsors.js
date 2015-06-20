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
return (function iter__28987(s__28988){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__28988__$1 = s__28988;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28988__$1);if(temp__4126__auto__)
{var s__28988__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28988__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28988__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28990 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28989 = (0);while(true){
if((i__28989 < size__4376__auto__))
{var map__28993 = cljs.core._nth.call(null,c__4375__auto__,i__28989);var map__28993__$1 = ((cljs.core.seq_QMARK_.call(null,map__28993))?cljs.core.apply.call(null,cljs.core.hash_map,map__28993):map__28993);var teaser = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__28990,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__28995 = (i__28989 + (1));
i__28989 = G__28995;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28990),iter__28987.call(null,cljs.core.chunk_rest.call(null,s__28988__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28990),null);
}
} else
{var map__28994 = cljs.core.first.call(null,s__28988__$2);var map__28994__$1 = ((cljs.core.seq_QMARK_.call(null,map__28994))?cljs.core.apply.call(null,cljs.core.hash_map,map__28994):map__28994);var teaser = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__28987.call(null,cljs.core.rest.call(null,s__28988__$2)));
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
var component_fnk__7881__auto___29089 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29001 = schema.core.Any;var input_schema29002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28999","map28999",-1370852480,null))], null);var input_checker29003 = schema.core.checker.call(null,input_schema29002);var output_checker29004 = schema.core.checker.call(null,output_schema29001);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004){
return (function constructor28997(G__29005){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29005], null);var temp__4126__auto___29091 = input_checker29003.call(null,args__6035__auto___29090);if(cljs.core.truth_(temp__4126__auto___29091))
{var error__6036__auto___29092 = temp__4126__auto___29091;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28997","constructor28997",-613804534,null),cljs.core.pr_str.call(null,error__6036__auto___29092)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29092,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29090,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29002,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28999 = G__29005;while(true){
if(cljs.core.map_QMARK_.call(null,map28999))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28999)));
}
var map29000 = plumbing.fnk.schema.safe_get.call(null,map28999,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map29000,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map29000,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28999,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t29046 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t29046 = (function (map28999,owner,input_checker29003,constructor28997,map29000,output_schema29001,bounds,G__29005,validate__6034__auto__,output_checker29004,input_schema29002,ufv__,geo_sponsors,meta29047){
this.map28999 = map28999;
this.owner = owner;
this.input_checker29003 = input_checker29003;
this.constructor28997 = constructor28997;
this.map29000 = map29000;
this.output_schema29001 = output_schema29001;
this.bounds = bounds;
this.G__29005 = G__29005;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_checker29004 = output_checker29004;
this.input_schema29002 = input_schema29002;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.meta29047 = meta29047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t29046.cljs$lang$type = true;
clustermap.components.geo_sponsors.t29046.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t29046";
clustermap.components.geo_sponsors.t29046.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t29046");
});})(owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004))
;
clustermap.components.geo_sponsors.t29046.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t29046.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004))
;
clustermap.components.geo_sponsors.t29046.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t29046.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004){
return (function (_,p__29049,p__29050){var self__ = this;
var map__29051 = p__29049;var map__29051__$1 = ((cljs.core.seq_QMARK_.call(null,map__29051))?cljs.core.apply.call(null,cljs.core.hash_map,map__29051):map__29051);var next_bounds = cljs.core.get.call(null,map__29051__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__29052 = cljs.core.get.call(null,map__29051__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__29052__$1 = ((cljs.core.seq_QMARK_.call(null,map__29052))?cljs.core.apply.call(null,cljs.core.hash_map,map__29052):map__29052);var next_geo_sponsors = map__29052__$1;var next_data = cljs.core.get.call(null,map__29052__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__29053 = p__29050;var map__29053__$1 = ((cljs.core.seq_QMARK_.call(null,map__29053))?cljs.core.apply.call(null,cljs.core.hash_map,map__29053):map__29053);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__29053__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29051,map__29051__$1,next_bounds,map__29052,map__29052__$1,next_geo_sponsors,next_data,map__29053,map__29053__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29051,map__29051__$1,next_bounds,map__29052,map__29052__$1,next_geo_sponsors,next_data,map__29053,map__29053__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004){
return (function (state_29071){var state_val_29072 = (state_29071[(1)]);if((state_val_29072 === (5)))
{var inst_29069 = (state_29071[(2)]);var state_29071__$1 = state_29071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29071__$1,inst_29069);
} else
{if((state_val_29072 === (4)))
{var state_29071__$1 = state_29071;var statearr_29073_29093 = state_29071__$1;(statearr_29073_29093[(2)] = null);
(statearr_29073_29093[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29072 === (3)))
{var inst_29056 = (state_29071[(7)]);var inst_29058 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29059 = ["GEO-SPONSORS : ",inst_29056];var inst_29060 = (new cljs.core.PersistentVector(null,2,(5),inst_29058,inst_29059,null));var inst_29061 = cljs.core.clj__GT_js.call(null,inst_29060);var inst_29062 = console.log(inst_29061);var inst_29063 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29064 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_29065 = (new cljs.core.PersistentVector(null,1,(5),inst_29063,inst_29064,null));var inst_29066 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_29065,inst_29056);var state_29071__$1 = (function (){var statearr_29074 = state_29071;(statearr_29074[(8)] = inst_29062);
return statearr_29074;
})();var statearr_29075_29094 = state_29071__$1;(statearr_29075_29094[(2)] = inst_29066);
(statearr_29075_29094[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29072 === (2)))
{var inst_29056 = (state_29071[(7)]);var inst_29056__$1 = (state_29071[(2)]);var state_29071__$1 = (function (){var statearr_29076 = state_29071;(statearr_29076[(7)] = inst_29056__$1);
return statearr_29076;
})();if(cljs.core.truth_(inst_29056__$1))
{var statearr_29077_29095 = state_29071__$1;(statearr_29077_29095[(1)] = (3));
} else
{var statearr_29078_29096 = state_29071__$1;(statearr_29078_29096[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29072 === (1)))
{var inst_29054 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_29071__$1 = state_29071;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29071__$1,(2),inst_29054);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29051,map__29051__$1,next_bounds,map__29052,map__29052__$1,next_geo_sponsors,next_data,map__29053,map__29053__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29051,map__29051__$1,next_bounds,map__29052,map__29052__$1,next_geo_sponsors,next_data,map__29053,map__29053__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29082 = [null,null,null,null,null,null,null,null,null];(statearr_29082[(0)] = state_machine__9111__auto__);
(statearr_29082[(1)] = (1));
return statearr_29082;
});
var state_machine__9111__auto____1 = (function (state_29071){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29071);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29083){if((e29083 instanceof Object))
{var ex__9114__auto__ = e29083;var statearr_29084_29097 = state_29071;(statearr_29084_29097[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29071);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29083;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29098 = state_29071;
state_29071 = G__29098;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29071){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29051,map__29051__$1,next_bounds,map__29052,map__29052__$1,next_geo_sponsors,next_data,map__29053,map__29053__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004))
})();var state__9127__auto__ = (function (){var statearr_29085 = f__9126__auto__.call(null);(statearr_29085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29085;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29051,map__29051__$1,next_bounds,map__29052,map__29052__$1,next_geo_sponsors,next_data,map__29053,map__29053__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004))
);
return c__9125__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004))
;
clustermap.components.geo_sponsors.t29046.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t29046.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004))
;
clustermap.components.geo_sponsors.t29046.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t29046.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004))
;
clustermap.components.geo_sponsors.t29046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004){
return (function (_29048){var self__ = this;
var _29048__$1 = this;return self__.meta29047;
});})(owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004))
;
clustermap.components.geo_sponsors.t29046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004){
return (function (_29048,meta29047__$1){var self__ = this;
var _29048__$1 = this;return (new clustermap.components.geo_sponsors.t29046(self__.map28999,self__.owner,self__.input_checker29003,self__.constructor28997,self__.map29000,self__.output_schema29001,self__.bounds,self__.G__29005,self__.validate__6034__auto__,self__.output_checker29004,self__.input_schema29002,self__.ufv__,self__.geo_sponsors,meta29047__$1));
});})(owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004))
;
clustermap.components.geo_sponsors.__GT_t29046 = ((function (owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004){
return (function __GT_t29046(map28999__$1,owner__$1,input_checker29003__$1,constructor28997__$1,map29000__$1,output_schema29001__$1,bounds__$1,G__29005__$1,validate__6034__auto____$1,output_checker29004__$1,input_schema29002__$1,ufv____$1,geo_sponsors__$1,meta29047){return (new clustermap.components.geo_sponsors.t29046(map28999__$1,owner__$1,input_checker29003__$1,constructor28997__$1,map29000__$1,output_schema29001__$1,bounds__$1,G__29005__$1,validate__6034__auto____$1,output_checker29004__$1,input_schema29002__$1,ufv____$1,geo_sponsors__$1,meta29047));
});})(owner,geo_sponsors,bounds,map29000,validate__6034__auto__,ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004))
;
}
return (new clustermap.components.geo_sponsors.t29046(map28999,owner,input_checker29003,constructor28997,map29000,output_schema29001,bounds,G__29005,validate__6034__auto__,output_checker29004,input_schema29002,ufv__,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29099 = output_checker29004.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29099))
{var error__6036__auto___29100 = temp__4126__auto___29099;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28997","constructor28997",-613804534,null),cljs.core.pr_str.call(null,error__6036__auto___29100)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29100,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29001,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29001,input_schema29002,input_checker29003,output_checker29004))
,schema.core.make_fn_schema.call(null,output_schema29001,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29002], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___29089){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner28996,p__29086){var vec__29088 = p__29086;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29088,(0),null);return component_fnk__7881__auto___29089.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28996,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner28996,var_args){
var p__29086 = null;if (arguments.length > 2) {
  p__29086 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner28996,p__29086);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__29101){
var data__7882__auto__ = cljs.core.first(arglist__29101);
arglist__29101 = cljs.core.next(arglist__29101);
var owner28996 = cljs.core.first(arglist__29101);
var p__29086 = cljs.core.rest(arglist__29101);
return geo_sponsors_component__delegate(data__7882__auto__,owner28996,p__29086);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___29089))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m28998){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m28998);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m28998){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m28998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
