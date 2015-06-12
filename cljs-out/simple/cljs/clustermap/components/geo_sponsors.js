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
return (function iter__28797(s__28798){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__28798__$1 = s__28798;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28798__$1);if(temp__4126__auto__)
{var s__28798__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28798__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28798__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28800 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28799 = (0);while(true){
if((i__28799 < size__4376__auto__))
{var map__28803 = cljs.core._nth.call(null,c__4375__auto__,i__28799);var map__28803__$1 = ((cljs.core.seq_QMARK_.call(null,map__28803))?cljs.core.apply.call(null,cljs.core.hash_map,map__28803):map__28803);var teaser = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__28800,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__28805 = (i__28799 + (1));
i__28799 = G__28805;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28800),iter__28797.call(null,cljs.core.chunk_rest.call(null,s__28798__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28800),null);
}
} else
{var map__28804 = cljs.core.first.call(null,s__28798__$2);var map__28804__$1 = ((cljs.core.seq_QMARK_.call(null,map__28804))?cljs.core.apply.call(null,cljs.core.hash_map,map__28804):map__28804);var teaser = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__28797.call(null,cljs.core.rest.call(null,s__28798__$2)));
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
var component_fnk__7881__auto___28899 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28811 = schema.core.Any;var input_schema28812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28809","map28809",84839905,null))], null);var input_checker28813 = schema.core.checker.call(null,input_schema28812);var output_checker28814 = schema.core.checker.call(null,output_schema28811);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814){
return (function constructor28807(G__28815){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28815], null);var temp__4126__auto___28901 = input_checker28813.call(null,args__6035__auto___28900);if(cljs.core.truth_(temp__4126__auto___28901))
{var error__6036__auto___28902 = temp__4126__auto___28901;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28807","constructor28807",-574327541,null),cljs.core.pr_str.call(null,error__6036__auto___28902)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28902,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28900,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28812,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28809 = G__28815;while(true){
if(cljs.core.map_QMARK_.call(null,map28809))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28809)));
}
var map28810 = plumbing.fnk.schema.safe_get.call(null,map28809,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map28810,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map28810,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28809,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t28856 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t28856 = (function (map28809,owner,map28810,output_schema28811,constructor28807,G__28815,input_checker28813,output_checker28814,input_schema28812,bounds,validate__6034__auto__,ufv__,geo_sponsors,meta28857){
this.map28809 = map28809;
this.owner = owner;
this.map28810 = map28810;
this.output_schema28811 = output_schema28811;
this.constructor28807 = constructor28807;
this.G__28815 = G__28815;
this.input_checker28813 = input_checker28813;
this.output_checker28814 = output_checker28814;
this.input_schema28812 = input_schema28812;
this.bounds = bounds;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.meta28857 = meta28857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t28856.cljs$lang$type = true;
clustermap.components.geo_sponsors.t28856.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t28856";
clustermap.components.geo_sponsors.t28856.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t28856");
});})(owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814))
;
clustermap.components.geo_sponsors.t28856.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t28856.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814))
;
clustermap.components.geo_sponsors.t28856.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t28856.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814){
return (function (_,p__28859,p__28860){var self__ = this;
var map__28861 = p__28859;var map__28861__$1 = ((cljs.core.seq_QMARK_.call(null,map__28861))?cljs.core.apply.call(null,cljs.core.hash_map,map__28861):map__28861);var next_bounds = cljs.core.get.call(null,map__28861__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__28862 = cljs.core.get.call(null,map__28861__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__28862__$1 = ((cljs.core.seq_QMARK_.call(null,map__28862))?cljs.core.apply.call(null,cljs.core.hash_map,map__28862):map__28862);var next_geo_sponsors = map__28862__$1;var next_data = cljs.core.get.call(null,map__28862__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__28863 = p__28860;var map__28863__$1 = ((cljs.core.seq_QMARK_.call(null,map__28863))?cljs.core.apply.call(null,cljs.core.hash_map,map__28863):map__28863);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__28863__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28861,map__28861__$1,next_bounds,map__28862,map__28862__$1,next_geo_sponsors,next_data,map__28863,map__28863__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28861,map__28861__$1,next_bounds,map__28862,map__28862__$1,next_geo_sponsors,next_data,map__28863,map__28863__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814){
return (function (state_28881){var state_val_28882 = (state_28881[(1)]);if((state_val_28882 === (5)))
{var inst_28879 = (state_28881[(2)]);var state_28881__$1 = state_28881;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28881__$1,inst_28879);
} else
{if((state_val_28882 === (4)))
{var state_28881__$1 = state_28881;var statearr_28883_28903 = state_28881__$1;(statearr_28883_28903[(2)] = null);
(statearr_28883_28903[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28882 === (3)))
{var inst_28866 = (state_28881[(7)]);var inst_28868 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28869 = ["GEO-SPONSORS : ",inst_28866];var inst_28870 = (new cljs.core.PersistentVector(null,2,(5),inst_28868,inst_28869,null));var inst_28871 = cljs.core.clj__GT_js.call(null,inst_28870);var inst_28872 = console.log(inst_28871);var inst_28873 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28874 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_28875 = (new cljs.core.PersistentVector(null,1,(5),inst_28873,inst_28874,null));var inst_28876 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_28875,inst_28866);var state_28881__$1 = (function (){var statearr_28884 = state_28881;(statearr_28884[(8)] = inst_28872);
return statearr_28884;
})();var statearr_28885_28904 = state_28881__$1;(statearr_28885_28904[(2)] = inst_28876);
(statearr_28885_28904[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28882 === (2)))
{var inst_28866 = (state_28881[(7)]);var inst_28866__$1 = (state_28881[(2)]);var state_28881__$1 = (function (){var statearr_28886 = state_28881;(statearr_28886[(7)] = inst_28866__$1);
return statearr_28886;
})();if(cljs.core.truth_(inst_28866__$1))
{var statearr_28887_28905 = state_28881__$1;(statearr_28887_28905[(1)] = (3));
} else
{var statearr_28888_28906 = state_28881__$1;(statearr_28888_28906[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28882 === (1)))
{var inst_28864 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_28881__$1 = state_28881;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28881__$1,(2),inst_28864);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28861,map__28861__$1,next_bounds,map__28862,map__28862__$1,next_geo_sponsors,next_data,map__28863,map__28863__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28861,map__28861__$1,next_bounds,map__28862,map__28862__$1,next_geo_sponsors,next_data,map__28863,map__28863__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28892 = [null,null,null,null,null,null,null,null,null];(statearr_28892[(0)] = state_machine__9111__auto__);
(statearr_28892[(1)] = (1));
return statearr_28892;
});
var state_machine__9111__auto____1 = (function (state_28881){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28881);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28893){if((e28893 instanceof Object))
{var ex__9114__auto__ = e28893;var statearr_28894_28907 = state_28881;(statearr_28894_28907[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28881);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28893;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28908 = state_28881;
state_28881 = G__28908;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28881){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28861,map__28861__$1,next_bounds,map__28862,map__28862__$1,next_geo_sponsors,next_data,map__28863,map__28863__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814))
})();var state__9127__auto__ = (function (){var statearr_28895 = f__9126__auto__.call(null);(statearr_28895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28861,map__28861__$1,next_bounds,map__28862,map__28862__$1,next_geo_sponsors,next_data,map__28863,map__28863__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814))
);
return c__9125__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814))
;
clustermap.components.geo_sponsors.t28856.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t28856.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814))
;
clustermap.components.geo_sponsors.t28856.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t28856.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814))
;
clustermap.components.geo_sponsors.t28856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814){
return (function (_28858){var self__ = this;
var _28858__$1 = this;return self__.meta28857;
});})(owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814))
;
clustermap.components.geo_sponsors.t28856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814){
return (function (_28858,meta28857__$1){var self__ = this;
var _28858__$1 = this;return (new clustermap.components.geo_sponsors.t28856(self__.map28809,self__.owner,self__.map28810,self__.output_schema28811,self__.constructor28807,self__.G__28815,self__.input_checker28813,self__.output_checker28814,self__.input_schema28812,self__.bounds,self__.validate__6034__auto__,self__.ufv__,self__.geo_sponsors,meta28857__$1));
});})(owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814))
;
clustermap.components.geo_sponsors.__GT_t28856 = ((function (owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814){
return (function __GT_t28856(map28809__$1,owner__$1,map28810__$1,output_schema28811__$1,constructor28807__$1,G__28815__$1,input_checker28813__$1,output_checker28814__$1,input_schema28812__$1,bounds__$1,validate__6034__auto____$1,ufv____$1,geo_sponsors__$1,meta28857){return (new clustermap.components.geo_sponsors.t28856(map28809__$1,owner__$1,map28810__$1,output_schema28811__$1,constructor28807__$1,G__28815__$1,input_checker28813__$1,output_checker28814__$1,input_schema28812__$1,bounds__$1,validate__6034__auto____$1,ufv____$1,geo_sponsors__$1,meta28857));
});})(owner,geo_sponsors,bounds,map28810,validate__6034__auto__,ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814))
;
}
return (new clustermap.components.geo_sponsors.t28856(map28809,owner,map28810,output_schema28811,constructor28807,G__28815,input_checker28813,output_checker28814,input_schema28812,bounds,validate__6034__auto__,ufv__,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28909 = output_checker28814.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28909))
{var error__6036__auto___28910 = temp__4126__auto___28909;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28807","constructor28807",-574327541,null),cljs.core.pr_str.call(null,error__6036__auto___28910)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28910,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28811,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28811,input_schema28812,input_checker28813,output_checker28814))
,schema.core.make_fn_schema.call(null,output_schema28811,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28812], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___28899){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner28806,p__28896){var vec__28898 = p__28896;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28898,(0),null);return component_fnk__7881__auto___28899.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28806,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner28806,var_args){
var p__28896 = null;if (arguments.length > 2) {
  p__28896 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner28806,p__28896);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__28911){
var data__7882__auto__ = cljs.core.first(arglist__28911);
arglist__28911 = cljs.core.next(arglist__28911);
var owner28806 = cljs.core.first(arglist__28911);
var p__28896 = cljs.core.rest(arglist__28911);
return geo_sponsors_component__delegate(data__7882__auto__,owner28806,p__28896);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___28899))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m28808){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m28808);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m28808){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m28808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
