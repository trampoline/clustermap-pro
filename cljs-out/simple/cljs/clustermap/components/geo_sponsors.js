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
return (function iter__28931(s__28932){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__28932__$1 = s__28932;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28932__$1);if(temp__4126__auto__)
{var s__28932__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28932__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28932__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28934 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28933 = (0);while(true){
if((i__28933 < size__4376__auto__))
{var map__28937 = cljs.core._nth.call(null,c__4375__auto__,i__28933);var map__28937__$1 = ((cljs.core.seq_QMARK_.call(null,map__28937))?cljs.core.apply.call(null,cljs.core.hash_map,map__28937):map__28937);var teaser = cljs.core.get.call(null,map__28937__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28937__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28937__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28937__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__28934,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__28939 = (i__28933 + (1));
i__28933 = G__28939;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28934),iter__28931.call(null,cljs.core.chunk_rest.call(null,s__28932__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28934),null);
}
} else
{var map__28938 = cljs.core.first.call(null,s__28932__$2);var map__28938__$1 = ((cljs.core.seq_QMARK_.call(null,map__28938))?cljs.core.apply.call(null,cljs.core.hash_map,map__28938):map__28938);var teaser = cljs.core.get.call(null,map__28938__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28938__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28938__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28938__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__28931.call(null,cljs.core.rest.call(null,s__28932__$2)));
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
var component_fnk__7881__auto___29033 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28945 = schema.core.Any;var input_schema28946 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28943","map28943",1643218594,null))], null);var input_checker28947 = schema.core.checker.call(null,input_schema28946);var output_checker28948 = schema.core.checker.call(null,output_schema28945);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948){
return (function constructor28941(G__28949){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29034 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28949], null);var temp__4126__auto___29035 = input_checker28947.call(null,args__6035__auto___29034);if(cljs.core.truth_(temp__4126__auto___29035))
{var error__6036__auto___29036 = temp__4126__auto___29035;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28941","constructor28941",957453351,null),cljs.core.pr_str.call(null,error__6036__auto___29036)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29036,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29034,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28946,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28943 = G__28949;while(true){
if(cljs.core.map_QMARK_.call(null,map28943))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28943)));
}
var map28944 = plumbing.fnk.schema.safe_get.call(null,map28943,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map28944,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map28944,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28943,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t28990 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t28990 = (function (map28943,owner,constructor28941,output_schema28945,output_checker28948,map28944,bounds,validate__6034__auto__,input_schema28946,input_checker28947,ufv__,G__28949,geo_sponsors,meta28991){
this.map28943 = map28943;
this.owner = owner;
this.constructor28941 = constructor28941;
this.output_schema28945 = output_schema28945;
this.output_checker28948 = output_checker28948;
this.map28944 = map28944;
this.bounds = bounds;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_schema28946 = input_schema28946;
this.input_checker28947 = input_checker28947;
this.ufv__ = ufv__;
this.G__28949 = G__28949;
this.geo_sponsors = geo_sponsors;
this.meta28991 = meta28991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t28990.cljs$lang$type = true;
clustermap.components.geo_sponsors.t28990.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t28990";
clustermap.components.geo_sponsors.t28990.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t28990");
});})(owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948))
;
clustermap.components.geo_sponsors.t28990.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t28990.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948))
;
clustermap.components.geo_sponsors.t28990.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t28990.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948){
return (function (_,p__28993,p__28994){var self__ = this;
var map__28995 = p__28993;var map__28995__$1 = ((cljs.core.seq_QMARK_.call(null,map__28995))?cljs.core.apply.call(null,cljs.core.hash_map,map__28995):map__28995);var next_bounds = cljs.core.get.call(null,map__28995__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__28996 = cljs.core.get.call(null,map__28995__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__28996__$1 = ((cljs.core.seq_QMARK_.call(null,map__28996))?cljs.core.apply.call(null,cljs.core.hash_map,map__28996):map__28996);var next_geo_sponsors = map__28996__$1;var next_data = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__28997 = p__28994;var map__28997__$1 = ((cljs.core.seq_QMARK_.call(null,map__28997))?cljs.core.apply.call(null,cljs.core.hash_map,map__28997):map__28997);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__28997__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28995,map__28995__$1,next_bounds,map__28996,map__28996__$1,next_geo_sponsors,next_data,map__28997,map__28997__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28995,map__28995__$1,next_bounds,map__28996,map__28996__$1,next_geo_sponsors,next_data,map__28997,map__28997__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948){
return (function (state_29015){var state_val_29016 = (state_29015[(1)]);if((state_val_29016 === (5)))
{var inst_29013 = (state_29015[(2)]);var state_29015__$1 = state_29015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29015__$1,inst_29013);
} else
{if((state_val_29016 === (4)))
{var state_29015__$1 = state_29015;var statearr_29017_29037 = state_29015__$1;(statearr_29017_29037[(2)] = null);
(statearr_29017_29037[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29016 === (3)))
{var inst_29000 = (state_29015[(7)]);var inst_29002 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29003 = ["GEO-SPONSORS : ",inst_29000];var inst_29004 = (new cljs.core.PersistentVector(null,2,(5),inst_29002,inst_29003,null));var inst_29005 = cljs.core.clj__GT_js.call(null,inst_29004);var inst_29006 = console.log(inst_29005);var inst_29007 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29008 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_29009 = (new cljs.core.PersistentVector(null,1,(5),inst_29007,inst_29008,null));var inst_29010 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_29009,inst_29000);var state_29015__$1 = (function (){var statearr_29018 = state_29015;(statearr_29018[(8)] = inst_29006);
return statearr_29018;
})();var statearr_29019_29038 = state_29015__$1;(statearr_29019_29038[(2)] = inst_29010);
(statearr_29019_29038[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29016 === (2)))
{var inst_29000 = (state_29015[(7)]);var inst_29000__$1 = (state_29015[(2)]);var state_29015__$1 = (function (){var statearr_29020 = state_29015;(statearr_29020[(7)] = inst_29000__$1);
return statearr_29020;
})();if(cljs.core.truth_(inst_29000__$1))
{var statearr_29021_29039 = state_29015__$1;(statearr_29021_29039[(1)] = (3));
} else
{var statearr_29022_29040 = state_29015__$1;(statearr_29022_29040[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29016 === (1)))
{var inst_28998 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_29015__$1 = state_29015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29015__$1,(2),inst_28998);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28995,map__28995__$1,next_bounds,map__28996,map__28996__$1,next_geo_sponsors,next_data,map__28997,map__28997__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28995,map__28995__$1,next_bounds,map__28996,map__28996__$1,next_geo_sponsors,next_data,map__28997,map__28997__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29026 = [null,null,null,null,null,null,null,null,null];(statearr_29026[(0)] = state_machine__9111__auto__);
(statearr_29026[(1)] = (1));
return statearr_29026;
});
var state_machine__9111__auto____1 = (function (state_29015){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29015);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29027){if((e29027 instanceof Object))
{var ex__9114__auto__ = e29027;var statearr_29028_29041 = state_29015;(statearr_29028_29041[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29015);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29027;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29042 = state_29015;
state_29015 = G__29042;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29015){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28995,map__28995__$1,next_bounds,map__28996,map__28996__$1,next_geo_sponsors,next_data,map__28997,map__28997__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948))
})();var state__9127__auto__ = (function (){var statearr_29029 = f__9126__auto__.call(null);(statearr_29029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29029;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28995,map__28995__$1,next_bounds,map__28996,map__28996__$1,next_geo_sponsors,next_data,map__28997,map__28997__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948))
);
return c__9125__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948))
;
clustermap.components.geo_sponsors.t28990.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t28990.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948))
;
clustermap.components.geo_sponsors.t28990.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t28990.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948))
;
clustermap.components.geo_sponsors.t28990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948){
return (function (_28992){var self__ = this;
var _28992__$1 = this;return self__.meta28991;
});})(owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948))
;
clustermap.components.geo_sponsors.t28990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948){
return (function (_28992,meta28991__$1){var self__ = this;
var _28992__$1 = this;return (new clustermap.components.geo_sponsors.t28990(self__.map28943,self__.owner,self__.constructor28941,self__.output_schema28945,self__.output_checker28948,self__.map28944,self__.bounds,self__.validate__6034__auto__,self__.input_schema28946,self__.input_checker28947,self__.ufv__,self__.G__28949,self__.geo_sponsors,meta28991__$1));
});})(owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948))
;
clustermap.components.geo_sponsors.__GT_t28990 = ((function (owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948){
return (function __GT_t28990(map28943__$1,owner__$1,constructor28941__$1,output_schema28945__$1,output_checker28948__$1,map28944__$1,bounds__$1,validate__6034__auto____$1,input_schema28946__$1,input_checker28947__$1,ufv____$1,G__28949__$1,geo_sponsors__$1,meta28991){return (new clustermap.components.geo_sponsors.t28990(map28943__$1,owner__$1,constructor28941__$1,output_schema28945__$1,output_checker28948__$1,map28944__$1,bounds__$1,validate__6034__auto____$1,input_schema28946__$1,input_checker28947__$1,ufv____$1,G__28949__$1,geo_sponsors__$1,meta28991));
});})(owner,geo_sponsors,bounds,map28944,validate__6034__auto__,ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948))
;
}
return (new clustermap.components.geo_sponsors.t28990(map28943,owner,constructor28941,output_schema28945,output_checker28948,map28944,bounds,validate__6034__auto__,input_schema28946,input_checker28947,ufv__,G__28949,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29043 = output_checker28948.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29043))
{var error__6036__auto___29044 = temp__4126__auto___29043;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28941","constructor28941",957453351,null),cljs.core.pr_str.call(null,error__6036__auto___29044)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29044,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28945,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28945,input_schema28946,input_checker28947,output_checker28948))
,schema.core.make_fn_schema.call(null,output_schema28945,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28946], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___29033){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner28940,p__29030){var vec__29032 = p__29030;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29032,(0),null);return component_fnk__7881__auto___29033.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28940,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner28940,var_args){
var p__29030 = null;if (arguments.length > 2) {
  p__29030 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner28940,p__29030);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__29045){
var data__7882__auto__ = cljs.core.first(arglist__29045);
arglist__29045 = cljs.core.next(arglist__29045);
var owner28940 = cljs.core.first(arglist__29045);
var p__29030 = cljs.core.rest(arglist__29045);
return geo_sponsors_component__delegate(data__7882__auto__,owner28940,p__29030);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___29033))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m28942){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m28942);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m28942){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m28942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
