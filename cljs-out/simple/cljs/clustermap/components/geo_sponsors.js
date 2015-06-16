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
return (function iter__28903(s__28904){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__28904__$1 = s__28904;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28904__$1);if(temp__4126__auto__)
{var s__28904__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28904__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28904__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28906 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28905 = (0);while(true){
if((i__28905 < size__4376__auto__))
{var map__28909 = cljs.core._nth.call(null,c__4375__auto__,i__28905);var map__28909__$1 = ((cljs.core.seq_QMARK_.call(null,map__28909))?cljs.core.apply.call(null,cljs.core.hash_map,map__28909):map__28909);var teaser = cljs.core.get.call(null,map__28909__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28909__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28909__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28909__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__28906,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__28911 = (i__28905 + (1));
i__28905 = G__28911;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28906),iter__28903.call(null,cljs.core.chunk_rest.call(null,s__28904__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28906),null);
}
} else
{var map__28910 = cljs.core.first.call(null,s__28904__$2);var map__28910__$1 = ((cljs.core.seq_QMARK_.call(null,map__28910))?cljs.core.apply.call(null,cljs.core.hash_map,map__28910):map__28910);var teaser = cljs.core.get.call(null,map__28910__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28910__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28910__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28910__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__28903.call(null,cljs.core.rest.call(null,s__28904__$2)));
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
var component_fnk__7881__auto___29005 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28917 = schema.core.Any;var input_schema28918 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28915","map28915",1500157619,null))], null);var input_checker28919 = schema.core.checker.call(null,input_schema28918);var output_checker28920 = schema.core.checker.call(null,output_schema28917);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920){
return (function constructor28913(G__28921){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28921], null);var temp__4126__auto___29007 = input_checker28919.call(null,args__6035__auto___29006);if(cljs.core.truth_(temp__4126__auto___29007))
{var error__6036__auto___29008 = temp__4126__auto___29007;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28913","constructor28913",-1549207244,null),cljs.core.pr_str.call(null,error__6036__auto___29008)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29008,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29006,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28918,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28915 = G__28921;while(true){
if(cljs.core.map_QMARK_.call(null,map28915))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28915)));
}
var map28916 = plumbing.fnk.schema.safe_get.call(null,map28915,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map28916,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map28916,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28915,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t28962 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t28962 = (function (owner,input_schema28918,map28915,constructor28913,G__28921,output_checker28920,bounds,input_checker28919,output_schema28917,validate__6034__auto__,ufv__,map28916,geo_sponsors,meta28963){
this.owner = owner;
this.input_schema28918 = input_schema28918;
this.map28915 = map28915;
this.constructor28913 = constructor28913;
this.G__28921 = G__28921;
this.output_checker28920 = output_checker28920;
this.bounds = bounds;
this.input_checker28919 = input_checker28919;
this.output_schema28917 = output_schema28917;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.map28916 = map28916;
this.geo_sponsors = geo_sponsors;
this.meta28963 = meta28963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t28962.cljs$lang$type = true;
clustermap.components.geo_sponsors.t28962.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t28962";
clustermap.components.geo_sponsors.t28962.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t28962");
});})(owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920))
;
clustermap.components.geo_sponsors.t28962.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t28962.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920))
;
clustermap.components.geo_sponsors.t28962.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t28962.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920){
return (function (_,p__28965,p__28966){var self__ = this;
var map__28967 = p__28965;var map__28967__$1 = ((cljs.core.seq_QMARK_.call(null,map__28967))?cljs.core.apply.call(null,cljs.core.hash_map,map__28967):map__28967);var next_bounds = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__28968 = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__28968__$1 = ((cljs.core.seq_QMARK_.call(null,map__28968))?cljs.core.apply.call(null,cljs.core.hash_map,map__28968):map__28968);var next_geo_sponsors = map__28968__$1;var next_data = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__28969 = p__28966;var map__28969__$1 = ((cljs.core.seq_QMARK_.call(null,map__28969))?cljs.core.apply.call(null,cljs.core.hash_map,map__28969):map__28969);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__28969__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28967,map__28967__$1,next_bounds,map__28968,map__28968__$1,next_geo_sponsors,next_data,map__28969,map__28969__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28967,map__28967__$1,next_bounds,map__28968,map__28968__$1,next_geo_sponsors,next_data,map__28969,map__28969__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920){
return (function (state_28987){var state_val_28988 = (state_28987[(1)]);if((state_val_28988 === (5)))
{var inst_28985 = (state_28987[(2)]);var state_28987__$1 = state_28987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28987__$1,inst_28985);
} else
{if((state_val_28988 === (4)))
{var state_28987__$1 = state_28987;var statearr_28989_29009 = state_28987__$1;(statearr_28989_29009[(2)] = null);
(statearr_28989_29009[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28988 === (3)))
{var inst_28972 = (state_28987[(7)]);var inst_28974 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28975 = ["GEO-SPONSORS : ",inst_28972];var inst_28976 = (new cljs.core.PersistentVector(null,2,(5),inst_28974,inst_28975,null));var inst_28977 = cljs.core.clj__GT_js.call(null,inst_28976);var inst_28978 = console.log(inst_28977);var inst_28979 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28980 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_28981 = (new cljs.core.PersistentVector(null,1,(5),inst_28979,inst_28980,null));var inst_28982 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_28981,inst_28972);var state_28987__$1 = (function (){var statearr_28990 = state_28987;(statearr_28990[(8)] = inst_28978);
return statearr_28990;
})();var statearr_28991_29010 = state_28987__$1;(statearr_28991_29010[(2)] = inst_28982);
(statearr_28991_29010[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28988 === (2)))
{var inst_28972 = (state_28987[(7)]);var inst_28972__$1 = (state_28987[(2)]);var state_28987__$1 = (function (){var statearr_28992 = state_28987;(statearr_28992[(7)] = inst_28972__$1);
return statearr_28992;
})();if(cljs.core.truth_(inst_28972__$1))
{var statearr_28993_29011 = state_28987__$1;(statearr_28993_29011[(1)] = (3));
} else
{var statearr_28994_29012 = state_28987__$1;(statearr_28994_29012[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28988 === (1)))
{var inst_28970 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_28987__$1 = state_28987;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28987__$1,(2),inst_28970);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28967,map__28967__$1,next_bounds,map__28968,map__28968__$1,next_geo_sponsors,next_data,map__28969,map__28969__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28967,map__28967__$1,next_bounds,map__28968,map__28968__$1,next_geo_sponsors,next_data,map__28969,map__28969__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28998 = [null,null,null,null,null,null,null,null,null];(statearr_28998[(0)] = state_machine__9111__auto__);
(statearr_28998[(1)] = (1));
return statearr_28998;
});
var state_machine__9111__auto____1 = (function (state_28987){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28987);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28999){if((e28999 instanceof Object))
{var ex__9114__auto__ = e28999;var statearr_29000_29013 = state_28987;(statearr_29000_29013[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28987);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28999;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29014 = state_28987;
state_28987 = G__29014;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28987){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28967,map__28967__$1,next_bounds,map__28968,map__28968__$1,next_geo_sponsors,next_data,map__28969,map__28969__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920))
})();var state__9127__auto__ = (function (){var statearr_29001 = f__9126__auto__.call(null);(statearr_29001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28967,map__28967__$1,next_bounds,map__28968,map__28968__$1,next_geo_sponsors,next_data,map__28969,map__28969__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920))
);
return c__9125__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920))
;
clustermap.components.geo_sponsors.t28962.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t28962.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920))
;
clustermap.components.geo_sponsors.t28962.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t28962.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920))
;
clustermap.components.geo_sponsors.t28962.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920){
return (function (_28964){var self__ = this;
var _28964__$1 = this;return self__.meta28963;
});})(owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920))
;
clustermap.components.geo_sponsors.t28962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920){
return (function (_28964,meta28963__$1){var self__ = this;
var _28964__$1 = this;return (new clustermap.components.geo_sponsors.t28962(self__.owner,self__.input_schema28918,self__.map28915,self__.constructor28913,self__.G__28921,self__.output_checker28920,self__.bounds,self__.input_checker28919,self__.output_schema28917,self__.validate__6034__auto__,self__.ufv__,self__.map28916,self__.geo_sponsors,meta28963__$1));
});})(owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920))
;
clustermap.components.geo_sponsors.__GT_t28962 = ((function (owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920){
return (function __GT_t28962(owner__$1,input_schema28918__$1,map28915__$1,constructor28913__$1,G__28921__$1,output_checker28920__$1,bounds__$1,input_checker28919__$1,output_schema28917__$1,validate__6034__auto____$1,ufv____$1,map28916__$1,geo_sponsors__$1,meta28963){return (new clustermap.components.geo_sponsors.t28962(owner__$1,input_schema28918__$1,map28915__$1,constructor28913__$1,G__28921__$1,output_checker28920__$1,bounds__$1,input_checker28919__$1,output_schema28917__$1,validate__6034__auto____$1,ufv____$1,map28916__$1,geo_sponsors__$1,meta28963));
});})(owner,geo_sponsors,bounds,map28916,validate__6034__auto__,ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920))
;
}
return (new clustermap.components.geo_sponsors.t28962(owner,input_schema28918,map28915,constructor28913,G__28921,output_checker28920,bounds,input_checker28919,output_schema28917,validate__6034__auto__,ufv__,map28916,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29015 = output_checker28920.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29015))
{var error__6036__auto___29016 = temp__4126__auto___29015;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28913","constructor28913",-1549207244,null),cljs.core.pr_str.call(null,error__6036__auto___29016)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29016,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28917,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28917,input_schema28918,input_checker28919,output_checker28920))
,schema.core.make_fn_schema.call(null,output_schema28917,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28918], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___29005){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner28912,p__29002){var vec__29004 = p__29002;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29004,(0),null);return component_fnk__7881__auto___29005.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28912,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner28912,var_args){
var p__29002 = null;if (arguments.length > 2) {
  p__29002 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner28912,p__29002);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__29017){
var data__7882__auto__ = cljs.core.first(arglist__29017);
arglist__29017 = cljs.core.next(arglist__29017);
var owner28912 = cljs.core.first(arglist__29017);
var p__29002 = cljs.core.rest(arglist__29017);
return geo_sponsors_component__delegate(data__7882__auto__,owner28912,p__29002);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___29005))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m28914){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m28914);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m28914){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m28914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
