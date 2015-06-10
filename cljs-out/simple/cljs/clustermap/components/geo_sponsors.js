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
return (function iter__28644(s__28645){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__28645__$1 = s__28645;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28645__$1);if(temp__4126__auto__)
{var s__28645__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28645__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28645__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28647 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28646 = (0);while(true){
if((i__28646 < size__4376__auto__))
{var map__28650 = cljs.core._nth.call(null,c__4375__auto__,i__28646);var map__28650__$1 = ((cljs.core.seq_QMARK_.call(null,map__28650))?cljs.core.apply.call(null,cljs.core.hash_map,map__28650):map__28650);var teaser = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__28647,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__28652 = (i__28646 + (1));
i__28646 = G__28652;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28647),iter__28644.call(null,cljs.core.chunk_rest.call(null,s__28645__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28647),null);
}
} else
{var map__28651 = cljs.core.first.call(null,s__28645__$2);var map__28651__$1 = ((cljs.core.seq_QMARK_.call(null,map__28651))?cljs.core.apply.call(null,cljs.core.hash_map,map__28651):map__28651);var teaser = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__28644.call(null,cljs.core.rest.call(null,s__28645__$2)));
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
var component_fnk__7881__auto___28746 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28658 = schema.core.Any;var input_schema28659 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28656","map28656",1835527470,null))], null);var input_checker28660 = schema.core.checker.call(null,input_schema28659);var output_checker28661 = schema.core.checker.call(null,output_schema28658);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661){
return (function constructor28654(G__28662){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28747 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28662], null);var temp__4126__auto___28748 = input_checker28660.call(null,args__6035__auto___28747);if(cljs.core.truth_(temp__4126__auto___28748))
{var error__6036__auto___28749 = temp__4126__auto___28748;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28654","constructor28654",-111763313,null),cljs.core.pr_str.call(null,error__6036__auto___28749)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28749,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28747,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28659,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28656 = G__28662;while(true){
if(cljs.core.map_QMARK_.call(null,map28656))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28656)));
}
var map28657 = plumbing.fnk.schema.safe_get.call(null,map28656,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map28657,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map28657,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28656,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t28703 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t28703 = (function (input_checker28660,owner,output_schema28658,map28656,constructor28654,map28657,output_checker28661,bounds,input_schema28659,validate__6034__auto__,G__28662,ufv__,geo_sponsors,meta28704){
this.input_checker28660 = input_checker28660;
this.owner = owner;
this.output_schema28658 = output_schema28658;
this.map28656 = map28656;
this.constructor28654 = constructor28654;
this.map28657 = map28657;
this.output_checker28661 = output_checker28661;
this.bounds = bounds;
this.input_schema28659 = input_schema28659;
this.validate__6034__auto__ = validate__6034__auto__;
this.G__28662 = G__28662;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.meta28704 = meta28704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t28703.cljs$lang$type = true;
clustermap.components.geo_sponsors.t28703.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t28703";
clustermap.components.geo_sponsors.t28703.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t28703");
});})(owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661))
;
clustermap.components.geo_sponsors.t28703.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t28703.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661))
;
clustermap.components.geo_sponsors.t28703.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t28703.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661){
return (function (_,p__28706,p__28707){var self__ = this;
var map__28708 = p__28706;var map__28708__$1 = ((cljs.core.seq_QMARK_.call(null,map__28708))?cljs.core.apply.call(null,cljs.core.hash_map,map__28708):map__28708);var next_bounds = cljs.core.get.call(null,map__28708__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__28709 = cljs.core.get.call(null,map__28708__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__28709__$1 = ((cljs.core.seq_QMARK_.call(null,map__28709))?cljs.core.apply.call(null,cljs.core.hash_map,map__28709):map__28709);var next_geo_sponsors = map__28709__$1;var next_data = cljs.core.get.call(null,map__28709__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__28710 = p__28707;var map__28710__$1 = ((cljs.core.seq_QMARK_.call(null,map__28710))?cljs.core.apply.call(null,cljs.core.hash_map,map__28710):map__28710);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28708,map__28708__$1,next_bounds,map__28709,map__28709__$1,next_geo_sponsors,next_data,map__28710,map__28710__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28708,map__28708__$1,next_bounds,map__28709,map__28709__$1,next_geo_sponsors,next_data,map__28710,map__28710__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661){
return (function (state_28728){var state_val_28729 = (state_28728[(1)]);if((state_val_28729 === (5)))
{var inst_28726 = (state_28728[(2)]);var state_28728__$1 = state_28728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28728__$1,inst_28726);
} else
{if((state_val_28729 === (4)))
{var state_28728__$1 = state_28728;var statearr_28730_28750 = state_28728__$1;(statearr_28730_28750[(2)] = null);
(statearr_28730_28750[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28729 === (3)))
{var inst_28713 = (state_28728[(7)]);var inst_28715 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28716 = ["GEO-SPONSORS : ",inst_28713];var inst_28717 = (new cljs.core.PersistentVector(null,2,(5),inst_28715,inst_28716,null));var inst_28718 = cljs.core.clj__GT_js.call(null,inst_28717);var inst_28719 = console.log(inst_28718);var inst_28720 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28721 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_28722 = (new cljs.core.PersistentVector(null,1,(5),inst_28720,inst_28721,null));var inst_28723 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_28722,inst_28713);var state_28728__$1 = (function (){var statearr_28731 = state_28728;(statearr_28731[(8)] = inst_28719);
return statearr_28731;
})();var statearr_28732_28751 = state_28728__$1;(statearr_28732_28751[(2)] = inst_28723);
(statearr_28732_28751[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28729 === (2)))
{var inst_28713 = (state_28728[(7)]);var inst_28713__$1 = (state_28728[(2)]);var state_28728__$1 = (function (){var statearr_28733 = state_28728;(statearr_28733[(7)] = inst_28713__$1);
return statearr_28733;
})();if(cljs.core.truth_(inst_28713__$1))
{var statearr_28734_28752 = state_28728__$1;(statearr_28734_28752[(1)] = (3));
} else
{var statearr_28735_28753 = state_28728__$1;(statearr_28735_28753[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28729 === (1)))
{var inst_28711 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_28728__$1 = state_28728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28728__$1,(2),inst_28711);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28708,map__28708__$1,next_bounds,map__28709,map__28709__$1,next_geo_sponsors,next_data,map__28710,map__28710__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28708,map__28708__$1,next_bounds,map__28709,map__28709__$1,next_geo_sponsors,next_data,map__28710,map__28710__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28739 = [null,null,null,null,null,null,null,null,null];(statearr_28739[(0)] = state_machine__9111__auto__);
(statearr_28739[(1)] = (1));
return statearr_28739;
});
var state_machine__9111__auto____1 = (function (state_28728){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28728);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28740){if((e28740 instanceof Object))
{var ex__9114__auto__ = e28740;var statearr_28741_28754 = state_28728;(statearr_28741_28754[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28728);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28740;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28755 = state_28728;
state_28728 = G__28755;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28728){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28708,map__28708__$1,next_bounds,map__28709,map__28709__$1,next_geo_sponsors,next_data,map__28710,map__28710__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661))
})();var state__9127__auto__ = (function (){var statearr_28742 = f__9126__auto__.call(null);(statearr_28742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28708,map__28708__$1,next_bounds,map__28709,map__28709__$1,next_geo_sponsors,next_data,map__28710,map__28710__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661))
);
return c__9125__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661))
;
clustermap.components.geo_sponsors.t28703.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t28703.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661))
;
clustermap.components.geo_sponsors.t28703.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t28703.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661))
;
clustermap.components.geo_sponsors.t28703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661){
return (function (_28705){var self__ = this;
var _28705__$1 = this;return self__.meta28704;
});})(owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661))
;
clustermap.components.geo_sponsors.t28703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661){
return (function (_28705,meta28704__$1){var self__ = this;
var _28705__$1 = this;return (new clustermap.components.geo_sponsors.t28703(self__.input_checker28660,self__.owner,self__.output_schema28658,self__.map28656,self__.constructor28654,self__.map28657,self__.output_checker28661,self__.bounds,self__.input_schema28659,self__.validate__6034__auto__,self__.G__28662,self__.ufv__,self__.geo_sponsors,meta28704__$1));
});})(owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661))
;
clustermap.components.geo_sponsors.__GT_t28703 = ((function (owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661){
return (function __GT_t28703(input_checker28660__$1,owner__$1,output_schema28658__$1,map28656__$1,constructor28654__$1,map28657__$1,output_checker28661__$1,bounds__$1,input_schema28659__$1,validate__6034__auto____$1,G__28662__$1,ufv____$1,geo_sponsors__$1,meta28704){return (new clustermap.components.geo_sponsors.t28703(input_checker28660__$1,owner__$1,output_schema28658__$1,map28656__$1,constructor28654__$1,map28657__$1,output_checker28661__$1,bounds__$1,input_schema28659__$1,validate__6034__auto____$1,G__28662__$1,ufv____$1,geo_sponsors__$1,meta28704));
});})(owner,geo_sponsors,bounds,map28657,validate__6034__auto__,ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661))
;
}
return (new clustermap.components.geo_sponsors.t28703(input_checker28660,owner,output_schema28658,map28656,constructor28654,map28657,output_checker28661,bounds,input_schema28659,validate__6034__auto__,G__28662,ufv__,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28756 = output_checker28661.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28756))
{var error__6036__auto___28757 = temp__4126__auto___28756;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28654","constructor28654",-111763313,null),cljs.core.pr_str.call(null,error__6036__auto___28757)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28757,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28658,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28658,input_schema28659,input_checker28660,output_checker28661))
,schema.core.make_fn_schema.call(null,output_schema28658,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28659], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___28746){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner28653,p__28743){var vec__28745 = p__28743;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28745,(0),null);return component_fnk__7881__auto___28746.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28653,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner28653,var_args){
var p__28743 = null;if (arguments.length > 2) {
  p__28743 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner28653,p__28743);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__28758){
var data__7882__auto__ = cljs.core.first(arglist__28758);
arglist__28758 = cljs.core.next(arglist__28758);
var owner28653 = cljs.core.first(arglist__28758);
var p__28743 = cljs.core.rest(arglist__28758);
return geo_sponsors_component__delegate(data__7882__auto__,owner28653,p__28743);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___28746))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m28655){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m28655);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m28655){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m28655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
