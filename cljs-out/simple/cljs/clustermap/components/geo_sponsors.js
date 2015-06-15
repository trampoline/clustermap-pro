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
return (function iter__28811(s__28812){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__28812__$1 = s__28812;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28812__$1);if(temp__4126__auto__)
{var s__28812__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28812__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28812__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28814 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28813 = (0);while(true){
if((i__28813 < size__4376__auto__))
{var map__28817 = cljs.core._nth.call(null,c__4375__auto__,i__28813);var map__28817__$1 = ((cljs.core.seq_QMARK_.call(null,map__28817))?cljs.core.apply.call(null,cljs.core.hash_map,map__28817):map__28817);var teaser = cljs.core.get.call(null,map__28817__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28817__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28817__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28817__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__28814,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__28819 = (i__28813 + (1));
i__28813 = G__28819;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28814),iter__28811.call(null,cljs.core.chunk_rest.call(null,s__28812__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28814),null);
}
} else
{var map__28818 = cljs.core.first.call(null,s__28812__$2);var map__28818__$1 = ((cljs.core.seq_QMARK_.call(null,map__28818))?cljs.core.apply.call(null,cljs.core.hash_map,map__28818):map__28818);var teaser = cljs.core.get.call(null,map__28818__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28818__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28818__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28818__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__28811.call(null,cljs.core.rest.call(null,s__28812__$2)));
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
var component_fnk__7881__auto___28913 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28825 = schema.core.Any;var input_schema28826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28823","map28823",633724523,null))], null);var input_checker28827 = schema.core.checker.call(null,input_schema28826);var output_checker28828 = schema.core.checker.call(null,output_schema28825);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828){
return (function constructor28821(G__28829){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28914 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28829], null);var temp__4126__auto___28915 = input_checker28827.call(null,args__6035__auto___28914);if(cljs.core.truth_(temp__4126__auto___28915))
{var error__6036__auto___28916 = temp__4126__auto___28915;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28821","constructor28821",1980305715,null),cljs.core.pr_str.call(null,error__6036__auto___28916)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28916,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28914,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28826,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28823 = G__28829;while(true){
if(cljs.core.map_QMARK_.call(null,map28823))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28823)));
}
var map28824 = plumbing.fnk.schema.safe_get.call(null,map28823,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map28824,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map28824,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28823,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t28870 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t28870 = (function (output_checker28828,input_checker28827,owner,map28824,output_schema28825,G__28829,map28823,input_schema28826,constructor28821,bounds,validate__6034__auto__,ufv__,geo_sponsors,meta28871){
this.output_checker28828 = output_checker28828;
this.input_checker28827 = input_checker28827;
this.owner = owner;
this.map28824 = map28824;
this.output_schema28825 = output_schema28825;
this.G__28829 = G__28829;
this.map28823 = map28823;
this.input_schema28826 = input_schema28826;
this.constructor28821 = constructor28821;
this.bounds = bounds;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.meta28871 = meta28871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t28870.cljs$lang$type = true;
clustermap.components.geo_sponsors.t28870.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t28870";
clustermap.components.geo_sponsors.t28870.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t28870");
});})(owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828))
;
clustermap.components.geo_sponsors.t28870.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t28870.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828))
;
clustermap.components.geo_sponsors.t28870.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t28870.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828){
return (function (_,p__28873,p__28874){var self__ = this;
var map__28875 = p__28873;var map__28875__$1 = ((cljs.core.seq_QMARK_.call(null,map__28875))?cljs.core.apply.call(null,cljs.core.hash_map,map__28875):map__28875);var next_bounds = cljs.core.get.call(null,map__28875__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__28876 = cljs.core.get.call(null,map__28875__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__28876__$1 = ((cljs.core.seq_QMARK_.call(null,map__28876))?cljs.core.apply.call(null,cljs.core.hash_map,map__28876):map__28876);var next_geo_sponsors = map__28876__$1;var next_data = cljs.core.get.call(null,map__28876__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__28877 = p__28874;var map__28877__$1 = ((cljs.core.seq_QMARK_.call(null,map__28877))?cljs.core.apply.call(null,cljs.core.hash_map,map__28877):map__28877);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__28877__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28875,map__28875__$1,next_bounds,map__28876,map__28876__$1,next_geo_sponsors,next_data,map__28877,map__28877__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28875,map__28875__$1,next_bounds,map__28876,map__28876__$1,next_geo_sponsors,next_data,map__28877,map__28877__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828){
return (function (state_28895){var state_val_28896 = (state_28895[(1)]);if((state_val_28896 === (5)))
{var inst_28893 = (state_28895[(2)]);var state_28895__$1 = state_28895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28895__$1,inst_28893);
} else
{if((state_val_28896 === (4)))
{var state_28895__$1 = state_28895;var statearr_28897_28917 = state_28895__$1;(statearr_28897_28917[(2)] = null);
(statearr_28897_28917[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28896 === (3)))
{var inst_28880 = (state_28895[(7)]);var inst_28882 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28883 = ["GEO-SPONSORS : ",inst_28880];var inst_28884 = (new cljs.core.PersistentVector(null,2,(5),inst_28882,inst_28883,null));var inst_28885 = cljs.core.clj__GT_js.call(null,inst_28884);var inst_28886 = console.log(inst_28885);var inst_28887 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28888 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_28889 = (new cljs.core.PersistentVector(null,1,(5),inst_28887,inst_28888,null));var inst_28890 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_28889,inst_28880);var state_28895__$1 = (function (){var statearr_28898 = state_28895;(statearr_28898[(8)] = inst_28886);
return statearr_28898;
})();var statearr_28899_28918 = state_28895__$1;(statearr_28899_28918[(2)] = inst_28890);
(statearr_28899_28918[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28896 === (2)))
{var inst_28880 = (state_28895[(7)]);var inst_28880__$1 = (state_28895[(2)]);var state_28895__$1 = (function (){var statearr_28900 = state_28895;(statearr_28900[(7)] = inst_28880__$1);
return statearr_28900;
})();if(cljs.core.truth_(inst_28880__$1))
{var statearr_28901_28919 = state_28895__$1;(statearr_28901_28919[(1)] = (3));
} else
{var statearr_28902_28920 = state_28895__$1;(statearr_28902_28920[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28896 === (1)))
{var inst_28878 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_28895__$1 = state_28895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28895__$1,(2),inst_28878);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28875,map__28875__$1,next_bounds,map__28876,map__28876__$1,next_geo_sponsors,next_data,map__28877,map__28877__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28875,map__28875__$1,next_bounds,map__28876,map__28876__$1,next_geo_sponsors,next_data,map__28877,map__28877__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28906 = [null,null,null,null,null,null,null,null,null];(statearr_28906[(0)] = state_machine__9111__auto__);
(statearr_28906[(1)] = (1));
return statearr_28906;
});
var state_machine__9111__auto____1 = (function (state_28895){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28895);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28907){if((e28907 instanceof Object))
{var ex__9114__auto__ = e28907;var statearr_28908_28921 = state_28895;(statearr_28908_28921[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28895);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28907;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28922 = state_28895;
state_28895 = G__28922;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28895){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28875,map__28875__$1,next_bounds,map__28876,map__28876__$1,next_geo_sponsors,next_data,map__28877,map__28877__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828))
})();var state__9127__auto__ = (function (){var statearr_28909 = f__9126__auto__.call(null);(statearr_28909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28875,map__28875__$1,next_bounds,map__28876,map__28876__$1,next_geo_sponsors,next_data,map__28877,map__28877__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828))
);
return c__9125__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828))
;
clustermap.components.geo_sponsors.t28870.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t28870.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828))
;
clustermap.components.geo_sponsors.t28870.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t28870.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828))
;
clustermap.components.geo_sponsors.t28870.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828){
return (function (_28872){var self__ = this;
var _28872__$1 = this;return self__.meta28871;
});})(owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828))
;
clustermap.components.geo_sponsors.t28870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828){
return (function (_28872,meta28871__$1){var self__ = this;
var _28872__$1 = this;return (new clustermap.components.geo_sponsors.t28870(self__.output_checker28828,self__.input_checker28827,self__.owner,self__.map28824,self__.output_schema28825,self__.G__28829,self__.map28823,self__.input_schema28826,self__.constructor28821,self__.bounds,self__.validate__6034__auto__,self__.ufv__,self__.geo_sponsors,meta28871__$1));
});})(owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828))
;
clustermap.components.geo_sponsors.__GT_t28870 = ((function (owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828){
return (function __GT_t28870(output_checker28828__$1,input_checker28827__$1,owner__$1,map28824__$1,output_schema28825__$1,G__28829__$1,map28823__$1,input_schema28826__$1,constructor28821__$1,bounds__$1,validate__6034__auto____$1,ufv____$1,geo_sponsors__$1,meta28871){return (new clustermap.components.geo_sponsors.t28870(output_checker28828__$1,input_checker28827__$1,owner__$1,map28824__$1,output_schema28825__$1,G__28829__$1,map28823__$1,input_schema28826__$1,constructor28821__$1,bounds__$1,validate__6034__auto____$1,ufv____$1,geo_sponsors__$1,meta28871));
});})(owner,geo_sponsors,bounds,map28824,validate__6034__auto__,ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828))
;
}
return (new clustermap.components.geo_sponsors.t28870(output_checker28828,input_checker28827,owner,map28824,output_schema28825,G__28829,map28823,input_schema28826,constructor28821,bounds,validate__6034__auto__,ufv__,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28923 = output_checker28828.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28923))
{var error__6036__auto___28924 = temp__4126__auto___28923;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28821","constructor28821",1980305715,null),cljs.core.pr_str.call(null,error__6036__auto___28924)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28924,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28825,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28825,input_schema28826,input_checker28827,output_checker28828))
,schema.core.make_fn_schema.call(null,output_schema28825,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28826], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___28913){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner28820,p__28910){var vec__28912 = p__28910;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28912,(0),null);return component_fnk__7881__auto___28913.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28820,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner28820,var_args){
var p__28910 = null;if (arguments.length > 2) {
  p__28910 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner28820,p__28910);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__28925){
var data__7882__auto__ = cljs.core.first(arglist__28925);
arglist__28925 = cljs.core.next(arglist__28925);
var owner28820 = cljs.core.first(arglist__28925);
var p__28910 = cljs.core.rest(arglist__28925);
return geo_sponsors_component__delegate(data__7882__auto__,owner28820,p__28910);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___28913))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m28822){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m28822);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m28822){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m28822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
