// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.count_matching');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.html');
goog.require('clustermap.formats.html');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
clustermap.components.count_matching.render_count = (function render_count(p__28516,owner,opts){var map__28522 = p__28516;var map__28522__$1 = ((cljs.core.seq_QMARK_.call(null,map__28522))?cljs.core.apply.call(null,cljs.core.hash_map,map__28522):map__28522);var map__28523 = cljs.core.get.call(null,map__28522__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__28523__$1 = ((cljs.core.seq_QMARK_.call(null,map__28523))?cljs.core.apply.call(null,cljs.core.hash_map,map__28523):map__28523);var data = map__28523__$1;var query = cljs.core.get.call(null,map__28523__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__28524 = cljs.core.get.call(null,map__28523__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28524__$1 = ((cljs.core.seq_QMARK_.call(null,map__28524))?cljs.core.apply.call(null,cljs.core.hash_map,map__28524):map__28524);var results = map__28524__$1;var cnt = cljs.core.get.call(null,map__28524__$1,new cljs.core.Keyword(null,"count","count",2139924085));var map__28525 = cljs.core.get.call(null,map__28522__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28525__$1 = ((cljs.core.seq_QMARK_.call(null,map__28525))?cljs.core.apply.call(null,cljs.core.hash_map,map__28525):map__28525);var controls = map__28525__$1;var render_fn = cljs.core.get.call(null,map__28525__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var render_fn__$1 = (function (){var or__11552__auto__ = render_fn;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28526 = render_fn__$1.call(null,cnt);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28526))?sablono.interpreter.attributes.call(null,attrs28526):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28526))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28526)], null))));
});
clustermap.components.count_matching.count_matching_component = (function count_matching_component(p__28527,owner){var map__28572 = p__28527;var map__28572__$1 = ((cljs.core.seq_QMARK_.call(null,map__28572))?cljs.core.apply.call(null,cljs.core.hash_map,map__28572):map__28572);var map__28573 = cljs.core.get.call(null,map__28572__$1,new cljs.core.Keyword(null,"props","props",453281727));var map__28573__$1 = ((cljs.core.seq_QMARK_.call(null,map__28573))?cljs.core.apply.call(null,cljs.core.hash_map,map__28573):map__28573);var props = map__28573__$1;var data = cljs.core.get.call(null,map__28573__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__28574 = cljs.core.get.call(null,map__28573__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28574__$1 = ((cljs.core.seq_QMARK_.call(null,map__28574))?cljs.core.apply.call(null,cljs.core.hash_map,map__28574):map__28574);var controls = map__28574__$1;var filter_spec = cljs.core.get.call(null,map__28572__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.count_matching.t28575 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.count_matching.t28575 = (function (owner,data,props,count_matching_component,map__28572,filter_spec,controls,p__28527,map__28573,map__28574,meta28576){
this.owner = owner;
this.data = data;
this.props = props;
this.count_matching_component = count_matching_component;
this.map__28572 = map__28572;
this.filter_spec = filter_spec;
this.controls = controls;
this.p__28527 = p__28527;
this.map__28573 = map__28573;
this.map__28574 = map__28574;
this.meta28576 = meta28576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.count_matching.t28575.cljs$lang$type = true;
clustermap.components.count_matching.t28575.cljs$lang$ctorStr = "clustermap.components.count-matching/t28575";
clustermap.components.count_matching.t28575.cljs$lang$ctorPrWriter = ((function (map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.count-matching/t28575");
});})(map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec))
;
clustermap.components.count_matching.t28575.prototype.om$core$IWillUpdate$ = true;
clustermap.components.count_matching.t28575.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec){
return (function (_,p__28578,p__28579){var self__ = this;
var map__28580 = p__28578;var map__28580__$1 = ((cljs.core.seq_QMARK_.call(null,map__28580))?cljs.core.apply.call(null,cljs.core.hash_map,map__28580):map__28580);var map__28581 = cljs.core.get.call(null,map__28580__$1,new cljs.core.Keyword(null,"props","props",453281727));var map__28581__$1 = ((cljs.core.seq_QMARK_.call(null,map__28581))?cljs.core.apply.call(null,cljs.core.hash_map,map__28581):map__28581);var next_data = cljs.core.get.call(null,map__28581__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__28582 = cljs.core.get.call(null,map__28581__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28582__$1 = ((cljs.core.seq_QMARK_.call(null,map__28582))?cljs.core.apply.call(null,cljs.core.hash_map,map__28582):map__28582);var next_controls = map__28582__$1;var next_index = cljs.core.get.call(null,map__28582__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28582__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28580__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28583 = p__28579;var map__28583__$1 = ((cljs.core.seq_QMARK_.call(null,map__28583))?cljs.core.apply.call(null,cljs.core.hash_map,map__28583):map__28583);var fetch_count_data_fn = cljs.core.get.call(null,map__28583__$1,new cljs.core.Keyword(null,"fetch-count-data-fn","fetch-count-data-fn",2031119670));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_data,self__.data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,map__28580,map__28580__$1,map__28581,map__28581__$1,next_data,map__28582,map__28582__$1,next_controls,next_index,next_index_type,next_filter_spec,map__28583,map__28583__$1,fetch_count_data_fn,map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,map__28580,map__28580__$1,map__28581,map__28581__$1,next_data,map__28582,map__28582__$1,next_controls,next_index,next_index_type,next_filter_spec,map__28583,map__28583__$1,fetch_count_data_fn,map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec){
return (function (state_28601){var state_val_28602 = (state_28601[(1)]);if((state_val_28602 === (5)))
{var inst_28599 = (state_28601[(2)]);var state_28601__$1 = state_28601;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28601__$1,inst_28599);
} else
{if((state_val_28602 === (4)))
{var state_28601__$1 = state_28601;var statearr_28603_28616 = state_28601__$1;(statearr_28603_28616[(2)] = null);
(statearr_28603_28616[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28602 === (3)))
{var inst_28586 = (state_28601[(7)]);var inst_28588 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28589 = ["COUNT-MATCHING-DATA",self__.data];var inst_28590 = (new cljs.core.PersistentVector(null,2,(5),inst_28588,inst_28589,null));var inst_28591 = cljs.core.clj__GT_js.call(null,inst_28590);var inst_28592 = console.log(inst_28591);var inst_28593 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28594 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_28595 = (new cljs.core.PersistentVector(null,1,(5),inst_28593,inst_28594,null));var inst_28596 = om.core.update_BANG_.call(null,self__.props,inst_28595,inst_28586);var state_28601__$1 = (function (){var statearr_28604 = state_28601;(statearr_28604[(8)] = inst_28592);
return statearr_28604;
})();var statearr_28605_28617 = state_28601__$1;(statearr_28605_28617[(2)] = inst_28596);
(statearr_28605_28617[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28602 === (2)))
{var inst_28586 = (state_28601[(7)]);var inst_28586__$1 = (state_28601[(2)]);var state_28601__$1 = (function (){var statearr_28606 = state_28601;(statearr_28606[(7)] = inst_28586__$1);
return statearr_28606;
})();if(cljs.core.truth_(inst_28586__$1))
{var statearr_28607_28618 = state_28601__$1;(statearr_28607_28618[(1)] = (3));
} else
{var statearr_28608_28619 = state_28601__$1;(statearr_28608_28619[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28602 === (1)))
{var inst_28584 = fetch_count_data_fn.call(null,next_index,next_index_type,next_filter_spec);var state_28601__$1 = state_28601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28601__$1,(2),inst_28584);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto__,___$1,map__28580,map__28580__$1,map__28581,map__28581__$1,next_data,map__28582,map__28582__$1,next_controls,next_index,next_index_type,next_filter_spec,map__28583,map__28583__$1,fetch_count_data_fn,map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,map__28580,map__28580__$1,map__28581,map__28581__$1,next_data,map__28582,map__28582__$1,next_controls,next_index,next_index_type,next_filter_spec,map__28583,map__28583__$1,fetch_count_data_fn,map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_28612 = [null,null,null,null,null,null,null,null,null];(statearr_28612[(0)] = state_machine__16719__auto__);
(statearr_28612[(1)] = (1));
return statearr_28612;
});
var state_machine__16719__auto____1 = (function (state_28601){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_28601);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e28613){if((e28613 instanceof Object))
{var ex__16722__auto__ = e28613;var statearr_28614_28620 = state_28601;(statearr_28614_28620[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28601);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28613;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28621 = state_28601;
state_28601 = G__28621;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_28601){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_28601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,map__28580,map__28580__$1,map__28581,map__28581__$1,next_data,map__28582,map__28582__$1,next_controls,next_index,next_index_type,next_filter_spec,map__28583,map__28583__$1,fetch_count_data_fn,map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec))
})();var state__16735__auto__ = (function (){var statearr_28615 = f__16734__auto__.call(null);(statearr_28615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_28615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,map__28580,map__28580__$1,map__28581,map__28581__$1,next_data,map__28582,map__28582__$1,next_controls,next_index,next_index_type,next_filter_spec,map__28583,map__28583__$1,fetch_count_data_fn,map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec))
);
return c__16733__auto__;
} else
{return null;
}
});})(map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec))
;
clustermap.components.count_matching.t28575.prototype.om$core$IRender$ = true;
clustermap.components.count_matching.t28575.prototype.om$core$IRender$render$arity$1 = ((function (map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.count_matching.render_count.call(null,self__.props,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec))
;
clustermap.components.count_matching.t28575.prototype.om$core$IDidMount$ = true;
clustermap.components.count_matching.t28575.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-count-data-fn","fetch-count-data-fn",2031119670),clustermap.api.count_matching_factory.call(null));
});})(map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec))
;
clustermap.components.count_matching.t28575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec){
return (function (_28577){var self__ = this;
var _28577__$1 = this;return self__.meta28576;
});})(map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec))
;
clustermap.components.count_matching.t28575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec){
return (function (_28577,meta28576__$1){var self__ = this;
var _28577__$1 = this;return (new clustermap.components.count_matching.t28575(self__.owner,self__.data,self__.props,self__.count_matching_component,self__.map__28572,self__.filter_spec,self__.controls,self__.p__28527,self__.map__28573,self__.map__28574,meta28576__$1));
});})(map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec))
;
clustermap.components.count_matching.__GT_t28575 = ((function (map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec){
return (function __GT_t28575(owner__$1,data__$1,props__$1,count_matching_component__$1,map__28572__$2,filter_spec__$1,controls__$1,p__28527__$1,map__28573__$2,map__28574__$2,meta28576){return (new clustermap.components.count_matching.t28575(owner__$1,data__$1,props__$1,count_matching_component__$1,map__28572__$2,filter_spec__$1,controls__$1,p__28527__$1,map__28573__$2,map__28574__$2,meta28576));
});})(map__28572,map__28572__$1,map__28573,map__28573__$1,props,data,map__28574,map__28574__$1,controls,filter_spec))
;
}
return (new clustermap.components.count_matching.t28575(owner,data,props,count_matching_component,map__28572__$1,filter_spec,controls,p__28527,map__28573__$1,map__28574__$1,null));
});

//# sourceMappingURL=count_matching.js.map