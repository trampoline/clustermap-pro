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
return (function iter__28860(s__28861){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__28861__$1 = s__28861;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28861__$1);if(temp__4126__auto__)
{var s__28861__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28861__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28861__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28863 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28862 = (0);while(true){
if((i__28862 < size__4376__auto__))
{var map__28866 = cljs.core._nth.call(null,c__4375__auto__,i__28862);var map__28866__$1 = ((cljs.core.seq_QMARK_.call(null,map__28866))?cljs.core.apply.call(null,cljs.core.hash_map,map__28866):map__28866);var teaser = cljs.core.get.call(null,map__28866__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28866__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28866__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28866__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__28863,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__28868 = (i__28862 + (1));
i__28862 = G__28868;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28863),iter__28860.call(null,cljs.core.chunk_rest.call(null,s__28861__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28863),null);
}
} else
{var map__28867 = cljs.core.first.call(null,s__28861__$2);var map__28867__$1 = ((cljs.core.seq_QMARK_.call(null,map__28867))?cljs.core.apply.call(null,cljs.core.hash_map,map__28867):map__28867);var teaser = cljs.core.get.call(null,map__28867__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28867__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28867__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28867__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__28860.call(null,cljs.core.rest.call(null,s__28861__$2)));
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
var component_fnk__7881__auto___28962 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28874 = schema.core.Any;var input_schema28875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28872","map28872",807219949,null))], null);var input_checker28876 = schema.core.checker.call(null,input_schema28875);var output_checker28877 = schema.core.checker.call(null,output_schema28874);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877){
return (function constructor28870(G__28878){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28963 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28878], null);var temp__4126__auto___28964 = input_checker28876.call(null,args__6035__auto___28963);if(cljs.core.truth_(temp__4126__auto___28964))
{var error__6036__auto___28965 = temp__4126__auto___28964;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28870","constructor28870",131174676,null),cljs.core.pr_str.call(null,error__6036__auto___28965)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28965,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28963,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28875,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28872 = G__28878;while(true){
if(cljs.core.map_QMARK_.call(null,map28872))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28872)));
}
var map28873 = plumbing.fnk.schema.safe_get.call(null,map28872,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map28873,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map28873,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28872,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t28919 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t28919 = (function (owner,map28873,input_schema28875,output_schema28874,map28872,input_checker28876,constructor28870,bounds,validate__6034__auto__,output_checker28877,ufv__,geo_sponsors,G__28878,meta28920){
this.owner = owner;
this.map28873 = map28873;
this.input_schema28875 = input_schema28875;
this.output_schema28874 = output_schema28874;
this.map28872 = map28872;
this.input_checker28876 = input_checker28876;
this.constructor28870 = constructor28870;
this.bounds = bounds;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_checker28877 = output_checker28877;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.G__28878 = G__28878;
this.meta28920 = meta28920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t28919.cljs$lang$type = true;
clustermap.components.geo_sponsors.t28919.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t28919";
clustermap.components.geo_sponsors.t28919.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t28919");
});})(owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877))
;
clustermap.components.geo_sponsors.t28919.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t28919.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877))
;
clustermap.components.geo_sponsors.t28919.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t28919.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877){
return (function (_,p__28922,p__28923){var self__ = this;
var map__28924 = p__28922;var map__28924__$1 = ((cljs.core.seq_QMARK_.call(null,map__28924))?cljs.core.apply.call(null,cljs.core.hash_map,map__28924):map__28924);var next_bounds = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__28925 = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__28925__$1 = ((cljs.core.seq_QMARK_.call(null,map__28925))?cljs.core.apply.call(null,cljs.core.hash_map,map__28925):map__28925);var next_geo_sponsors = map__28925__$1;var next_data = cljs.core.get.call(null,map__28925__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__28926 = p__28923;var map__28926__$1 = ((cljs.core.seq_QMARK_.call(null,map__28926))?cljs.core.apply.call(null,cljs.core.hash_map,map__28926):map__28926);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__28926__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28924,map__28924__$1,next_bounds,map__28925,map__28925__$1,next_geo_sponsors,next_data,map__28926,map__28926__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28924,map__28924__$1,next_bounds,map__28925,map__28925__$1,next_geo_sponsors,next_data,map__28926,map__28926__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877){
return (function (state_28944){var state_val_28945 = (state_28944[(1)]);if((state_val_28945 === (5)))
{var inst_28942 = (state_28944[(2)]);var state_28944__$1 = state_28944;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28944__$1,inst_28942);
} else
{if((state_val_28945 === (4)))
{var state_28944__$1 = state_28944;var statearr_28946_28966 = state_28944__$1;(statearr_28946_28966[(2)] = null);
(statearr_28946_28966[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28945 === (3)))
{var inst_28929 = (state_28944[(7)]);var inst_28931 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28932 = ["GEO-SPONSORS : ",inst_28929];var inst_28933 = (new cljs.core.PersistentVector(null,2,(5),inst_28931,inst_28932,null));var inst_28934 = cljs.core.clj__GT_js.call(null,inst_28933);var inst_28935 = console.log(inst_28934);var inst_28936 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28937 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_28938 = (new cljs.core.PersistentVector(null,1,(5),inst_28936,inst_28937,null));var inst_28939 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_28938,inst_28929);var state_28944__$1 = (function (){var statearr_28947 = state_28944;(statearr_28947[(8)] = inst_28935);
return statearr_28947;
})();var statearr_28948_28967 = state_28944__$1;(statearr_28948_28967[(2)] = inst_28939);
(statearr_28948_28967[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28945 === (2)))
{var inst_28929 = (state_28944[(7)]);var inst_28929__$1 = (state_28944[(2)]);var state_28944__$1 = (function (){var statearr_28949 = state_28944;(statearr_28949[(7)] = inst_28929__$1);
return statearr_28949;
})();if(cljs.core.truth_(inst_28929__$1))
{var statearr_28950_28968 = state_28944__$1;(statearr_28950_28968[(1)] = (3));
} else
{var statearr_28951_28969 = state_28944__$1;(statearr_28951_28969[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28945 === (1)))
{var inst_28927 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_28944__$1 = state_28944;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28944__$1,(2),inst_28927);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28924,map__28924__$1,next_bounds,map__28925,map__28925__$1,next_geo_sponsors,next_data,map__28926,map__28926__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28924,map__28924__$1,next_bounds,map__28925,map__28925__$1,next_geo_sponsors,next_data,map__28926,map__28926__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28955 = [null,null,null,null,null,null,null,null,null];(statearr_28955[(0)] = state_machine__9111__auto__);
(statearr_28955[(1)] = (1));
return statearr_28955;
});
var state_machine__9111__auto____1 = (function (state_28944){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28944);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28956){if((e28956 instanceof Object))
{var ex__9114__auto__ = e28956;var statearr_28957_28970 = state_28944;(statearr_28957_28970[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28944);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28956;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28971 = state_28944;
state_28944 = G__28971;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28944){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28924,map__28924__$1,next_bounds,map__28925,map__28925__$1,next_geo_sponsors,next_data,map__28926,map__28926__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877))
})();var state__9127__auto__ = (function (){var statearr_28958 = f__9126__auto__.call(null);(statearr_28958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28958;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28924,map__28924__$1,next_bounds,map__28925,map__28925__$1,next_geo_sponsors,next_data,map__28926,map__28926__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877))
);
return c__9125__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877))
;
clustermap.components.geo_sponsors.t28919.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t28919.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877))
;
clustermap.components.geo_sponsors.t28919.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t28919.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877))
;
clustermap.components.geo_sponsors.t28919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877){
return (function (_28921){var self__ = this;
var _28921__$1 = this;return self__.meta28920;
});})(owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877))
;
clustermap.components.geo_sponsors.t28919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877){
return (function (_28921,meta28920__$1){var self__ = this;
var _28921__$1 = this;return (new clustermap.components.geo_sponsors.t28919(self__.owner,self__.map28873,self__.input_schema28875,self__.output_schema28874,self__.map28872,self__.input_checker28876,self__.constructor28870,self__.bounds,self__.validate__6034__auto__,self__.output_checker28877,self__.ufv__,self__.geo_sponsors,self__.G__28878,meta28920__$1));
});})(owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877))
;
clustermap.components.geo_sponsors.__GT_t28919 = ((function (owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877){
return (function __GT_t28919(owner__$1,map28873__$1,input_schema28875__$1,output_schema28874__$1,map28872__$1,input_checker28876__$1,constructor28870__$1,bounds__$1,validate__6034__auto____$1,output_checker28877__$1,ufv____$1,geo_sponsors__$1,G__28878__$1,meta28920){return (new clustermap.components.geo_sponsors.t28919(owner__$1,map28873__$1,input_schema28875__$1,output_schema28874__$1,map28872__$1,input_checker28876__$1,constructor28870__$1,bounds__$1,validate__6034__auto____$1,output_checker28877__$1,ufv____$1,geo_sponsors__$1,G__28878__$1,meta28920));
});})(owner,geo_sponsors,bounds,map28873,validate__6034__auto__,ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877))
;
}
return (new clustermap.components.geo_sponsors.t28919(owner,map28873,input_schema28875,output_schema28874,map28872,input_checker28876,constructor28870,bounds,validate__6034__auto__,output_checker28877,ufv__,geo_sponsors,G__28878,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28972 = output_checker28877.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28972))
{var error__6036__auto___28973 = temp__4126__auto___28972;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28870","constructor28870",131174676,null),cljs.core.pr_str.call(null,error__6036__auto___28973)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28973,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28874,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28874,input_schema28875,input_checker28876,output_checker28877))
,schema.core.make_fn_schema.call(null,output_schema28874,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28875], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___28962){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner28869,p__28959){var vec__28961 = p__28959;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28961,(0),null);return component_fnk__7881__auto___28962.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28869,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner28869,var_args){
var p__28959 = null;if (arguments.length > 2) {
  p__28959 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner28869,p__28959);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__28974){
var data__7882__auto__ = cljs.core.first(arglist__28974);
arglist__28974 = cljs.core.next(arglist__28974);
var owner28869 = cljs.core.first(arglist__28974);
var p__28959 = cljs.core.rest(arglist__28974);
return geo_sponsors_component__delegate(data__7882__auto__,owner28869,p__28959);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___28962))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m28871){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m28871);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m28871){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m28871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
