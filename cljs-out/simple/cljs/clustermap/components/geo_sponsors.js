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
return (function iter__28629(s__28630){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__28630__$1 = s__28630;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28630__$1);if(temp__4126__auto__)
{var s__28630__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28630__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28630__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28632 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28631 = (0);while(true){
if((i__28631 < size__4376__auto__))
{var map__28635 = cljs.core._nth.call(null,c__4375__auto__,i__28631);var map__28635__$1 = ((cljs.core.seq_QMARK_.call(null,map__28635))?cljs.core.apply.call(null,cljs.core.hash_map,map__28635):map__28635);var teaser = cljs.core.get.call(null,map__28635__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28635__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28635__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28635__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__28632,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__28637 = (i__28631 + (1));
i__28631 = G__28637;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28632),iter__28629.call(null,cljs.core.chunk_rest.call(null,s__28630__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28632),null);
}
} else
{var map__28636 = cljs.core.first.call(null,s__28630__$2);var map__28636__$1 = ((cljs.core.seq_QMARK_.call(null,map__28636))?cljs.core.apply.call(null,cljs.core.hash_map,map__28636):map__28636);var teaser = cljs.core.get.call(null,map__28636__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28636__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28636__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28636__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__28629.call(null,cljs.core.rest.call(null,s__28630__$2)));
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
var component_fnk__7881__auto___28731 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28643 = schema.core.Any;var input_schema28644 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28641","map28641",-1046745400,null))], null);var input_checker28645 = schema.core.checker.call(null,input_schema28644);var output_checker28646 = schema.core.checker.call(null,output_schema28643);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646){
return (function constructor28639(G__28647){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28732 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28647], null);var temp__4126__auto___28733 = input_checker28645.call(null,args__6035__auto___28732);if(cljs.core.truth_(temp__4126__auto___28733))
{var error__6036__auto___28734 = temp__4126__auto___28733;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28639","constructor28639",-820470154,null),cljs.core.pr_str.call(null,error__6036__auto___28734)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28734,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28732,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28644,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28641 = G__28647;while(true){
if(cljs.core.map_QMARK_.call(null,map28641))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28641)));
}
var map28642 = plumbing.fnk.schema.safe_get.call(null,map28641,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map28642,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map28642,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28641,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t28688 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t28688 = (function (input_schema28644,owner,map28641,output_schema28643,constructor28639,bounds,output_checker28646,map28642,input_checker28645,validate__6034__auto__,G__28647,ufv__,geo_sponsors,meta28689){
this.input_schema28644 = input_schema28644;
this.owner = owner;
this.map28641 = map28641;
this.output_schema28643 = output_schema28643;
this.constructor28639 = constructor28639;
this.bounds = bounds;
this.output_checker28646 = output_checker28646;
this.map28642 = map28642;
this.input_checker28645 = input_checker28645;
this.validate__6034__auto__ = validate__6034__auto__;
this.G__28647 = G__28647;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.meta28689 = meta28689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t28688.cljs$lang$type = true;
clustermap.components.geo_sponsors.t28688.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t28688";
clustermap.components.geo_sponsors.t28688.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t28688");
});})(owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646))
;
clustermap.components.geo_sponsors.t28688.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t28688.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646))
;
clustermap.components.geo_sponsors.t28688.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t28688.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646){
return (function (_,p__28691,p__28692){var self__ = this;
var map__28693 = p__28691;var map__28693__$1 = ((cljs.core.seq_QMARK_.call(null,map__28693))?cljs.core.apply.call(null,cljs.core.hash_map,map__28693):map__28693);var next_bounds = cljs.core.get.call(null,map__28693__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__28694 = cljs.core.get.call(null,map__28693__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__28694__$1 = ((cljs.core.seq_QMARK_.call(null,map__28694))?cljs.core.apply.call(null,cljs.core.hash_map,map__28694):map__28694);var next_geo_sponsors = map__28694__$1;var next_data = cljs.core.get.call(null,map__28694__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__28695 = p__28692;var map__28695__$1 = ((cljs.core.seq_QMARK_.call(null,map__28695))?cljs.core.apply.call(null,cljs.core.hash_map,map__28695):map__28695);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__28695__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28693,map__28693__$1,next_bounds,map__28694,map__28694__$1,next_geo_sponsors,next_data,map__28695,map__28695__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28693,map__28693__$1,next_bounds,map__28694,map__28694__$1,next_geo_sponsors,next_data,map__28695,map__28695__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646){
return (function (state_28713){var state_val_28714 = (state_28713[(1)]);if((state_val_28714 === (5)))
{var inst_28711 = (state_28713[(2)]);var state_28713__$1 = state_28713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28713__$1,inst_28711);
} else
{if((state_val_28714 === (4)))
{var state_28713__$1 = state_28713;var statearr_28715_28735 = state_28713__$1;(statearr_28715_28735[(2)] = null);
(statearr_28715_28735[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28714 === (3)))
{var inst_28698 = (state_28713[(7)]);var inst_28700 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28701 = ["GEO-SPONSORS : ",inst_28698];var inst_28702 = (new cljs.core.PersistentVector(null,2,(5),inst_28700,inst_28701,null));var inst_28703 = cljs.core.clj__GT_js.call(null,inst_28702);var inst_28704 = console.log(inst_28703);var inst_28705 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28706 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_28707 = (new cljs.core.PersistentVector(null,1,(5),inst_28705,inst_28706,null));var inst_28708 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_28707,inst_28698);var state_28713__$1 = (function (){var statearr_28716 = state_28713;(statearr_28716[(8)] = inst_28704);
return statearr_28716;
})();var statearr_28717_28736 = state_28713__$1;(statearr_28717_28736[(2)] = inst_28708);
(statearr_28717_28736[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28714 === (2)))
{var inst_28698 = (state_28713[(7)]);var inst_28698__$1 = (state_28713[(2)]);var state_28713__$1 = (function (){var statearr_28718 = state_28713;(statearr_28718[(7)] = inst_28698__$1);
return statearr_28718;
})();if(cljs.core.truth_(inst_28698__$1))
{var statearr_28719_28737 = state_28713__$1;(statearr_28719_28737[(1)] = (3));
} else
{var statearr_28720_28738 = state_28713__$1;(statearr_28720_28738[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28714 === (1)))
{var inst_28696 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_28713__$1 = state_28713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28713__$1,(2),inst_28696);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28693,map__28693__$1,next_bounds,map__28694,map__28694__$1,next_geo_sponsors,next_data,map__28695,map__28695__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28693,map__28693__$1,next_bounds,map__28694,map__28694__$1,next_geo_sponsors,next_data,map__28695,map__28695__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28724 = [null,null,null,null,null,null,null,null,null];(statearr_28724[(0)] = state_machine__9111__auto__);
(statearr_28724[(1)] = (1));
return statearr_28724;
});
var state_machine__9111__auto____1 = (function (state_28713){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28713);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28725){if((e28725 instanceof Object))
{var ex__9114__auto__ = e28725;var statearr_28726_28739 = state_28713;(statearr_28726_28739[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28713);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28725;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28740 = state_28713;
state_28713 = G__28740;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28713){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28693,map__28693__$1,next_bounds,map__28694,map__28694__$1,next_geo_sponsors,next_data,map__28695,map__28695__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646))
})();var state__9127__auto__ = (function (){var statearr_28727 = f__9126__auto__.call(null);(statearr_28727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28693,map__28693__$1,next_bounds,map__28694,map__28694__$1,next_geo_sponsors,next_data,map__28695,map__28695__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646))
);
return c__9125__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646))
;
clustermap.components.geo_sponsors.t28688.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t28688.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646))
;
clustermap.components.geo_sponsors.t28688.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t28688.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646))
;
clustermap.components.geo_sponsors.t28688.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646){
return (function (_28690){var self__ = this;
var _28690__$1 = this;return self__.meta28689;
});})(owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646))
;
clustermap.components.geo_sponsors.t28688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646){
return (function (_28690,meta28689__$1){var self__ = this;
var _28690__$1 = this;return (new clustermap.components.geo_sponsors.t28688(self__.input_schema28644,self__.owner,self__.map28641,self__.output_schema28643,self__.constructor28639,self__.bounds,self__.output_checker28646,self__.map28642,self__.input_checker28645,self__.validate__6034__auto__,self__.G__28647,self__.ufv__,self__.geo_sponsors,meta28689__$1));
});})(owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646))
;
clustermap.components.geo_sponsors.__GT_t28688 = ((function (owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646){
return (function __GT_t28688(input_schema28644__$1,owner__$1,map28641__$1,output_schema28643__$1,constructor28639__$1,bounds__$1,output_checker28646__$1,map28642__$1,input_checker28645__$1,validate__6034__auto____$1,G__28647__$1,ufv____$1,geo_sponsors__$1,meta28689){return (new clustermap.components.geo_sponsors.t28688(input_schema28644__$1,owner__$1,map28641__$1,output_schema28643__$1,constructor28639__$1,bounds__$1,output_checker28646__$1,map28642__$1,input_checker28645__$1,validate__6034__auto____$1,G__28647__$1,ufv____$1,geo_sponsors__$1,meta28689));
});})(owner,geo_sponsors,bounds,map28642,validate__6034__auto__,ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646))
;
}
return (new clustermap.components.geo_sponsors.t28688(input_schema28644,owner,map28641,output_schema28643,constructor28639,bounds,output_checker28646,map28642,input_checker28645,validate__6034__auto__,G__28647,ufv__,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28741 = output_checker28646.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28741))
{var error__6036__auto___28742 = temp__4126__auto___28741;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28639","constructor28639",-820470154,null),cljs.core.pr_str.call(null,error__6036__auto___28742)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28742,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28643,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28643,input_schema28644,input_checker28645,output_checker28646))
,schema.core.make_fn_schema.call(null,output_schema28643,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28644], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___28731){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner28638,p__28728){var vec__28730 = p__28728;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28730,(0),null);return component_fnk__7881__auto___28731.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28638,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner28638,var_args){
var p__28728 = null;if (arguments.length > 2) {
  p__28728 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner28638,p__28728);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__28743){
var data__7882__auto__ = cljs.core.first(arglist__28743);
arglist__28743 = cljs.core.next(arglist__28743);
var owner28638 = cljs.core.first(arglist__28743);
var p__28728 = cljs.core.rest(arglist__28743);
return geo_sponsors_component__delegate(data__7882__auto__,owner28638,p__28728);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___28731))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m28640){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m28640);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m28640){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m28640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
