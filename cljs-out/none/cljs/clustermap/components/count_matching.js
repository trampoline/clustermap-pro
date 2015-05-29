// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.count_matching');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.formats.html');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.html');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.count_matching.render_count = (function render_count(p__27621,owner,opts){var map__27627 = p__27621;var map__27627__$1 = ((cljs.core.seq_QMARK_.call(null,map__27627))?cljs.core.apply.call(null,cljs.core.hash_map,map__27627):map__27627);var map__27628 = cljs.core.get.call(null,map__27627__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__27628__$1 = ((cljs.core.seq_QMARK_.call(null,map__27628))?cljs.core.apply.call(null,cljs.core.hash_map,map__27628):map__27628);var data = map__27628__$1;var query = cljs.core.get.call(null,map__27628__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__27629 = cljs.core.get.call(null,map__27628__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__27629__$1 = ((cljs.core.seq_QMARK_.call(null,map__27629))?cljs.core.apply.call(null,cljs.core.hash_map,map__27629):map__27629);var results = map__27629__$1;var cnt = cljs.core.get.call(null,map__27629__$1,new cljs.core.Keyword(null,"count","count",2139924085));var map__27630 = cljs.core.get.call(null,map__27627__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27630__$1 = ((cljs.core.seq_QMARK_.call(null,map__27630))?cljs.core.apply.call(null,cljs.core.hash_map,map__27630):map__27630);var controls = map__27630__$1;var render_fn = cljs.core.get.call(null,map__27630__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var render_fn__$1 = (function (){var or__11514__auto__ = render_fn;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.identity;
}
})();var attrs27631 = render_fn__$1.call(null,cnt);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs27631))?sablono.interpreter.attributes.call(null,attrs27631):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27631))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27631)], null))));
});
clustermap.components.count_matching.count_matching_component = (function count_matching_component(p__27632,owner){var map__27645 = p__27632;var map__27645__$1 = ((cljs.core.seq_QMARK_.call(null,map__27645))?cljs.core.apply.call(null,cljs.core.hash_map,map__27645):map__27645);var map__27646 = cljs.core.get.call(null,map__27645__$1,new cljs.core.Keyword(null,"props","props",453281727));var map__27646__$1 = ((cljs.core.seq_QMARK_.call(null,map__27646))?cljs.core.apply.call(null,cljs.core.hash_map,map__27646):map__27646);var props = map__27646__$1;var data = cljs.core.get.call(null,map__27646__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__27647 = cljs.core.get.call(null,map__27646__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27647__$1 = ((cljs.core.seq_QMARK_.call(null,map__27647))?cljs.core.apply.call(null,cljs.core.hash_map,map__27647):map__27647);var controls = map__27647__$1;var filter_spec = cljs.core.get.call(null,map__27645__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.count_matching.t27648 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.count_matching.t27648 = (function (map__27645,p__27632,owner,data,props,count_matching_component,filter_spec,controls,map__27646,map__27647,meta27649){
this.map__27645 = map__27645;
this.p__27632 = p__27632;
this.owner = owner;
this.data = data;
this.props = props;
this.count_matching_component = count_matching_component;
this.filter_spec = filter_spec;
this.controls = controls;
this.map__27646 = map__27646;
this.map__27647 = map__27647;
this.meta27649 = meta27649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.count_matching.t27648.cljs$lang$type = true;
clustermap.components.count_matching.t27648.cljs$lang$ctorStr = "clustermap.components.count-matching/t27648";
clustermap.components.count_matching.t27648.cljs$lang$ctorPrWriter = ((function (map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.count-matching/t27648");
});})(map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec))
;
clustermap.components.count_matching.t27648.prototype.om$core$IWillUpdate$ = true;
clustermap.components.count_matching.t27648.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec){
return (function (_,p__27651,p__27652){var self__ = this;
var map__27653 = p__27651;var map__27653__$1 = ((cljs.core.seq_QMARK_.call(null,map__27653))?cljs.core.apply.call(null,cljs.core.hash_map,map__27653):map__27653);var map__27654 = cljs.core.get.call(null,map__27653__$1,new cljs.core.Keyword(null,"props","props",453281727));var map__27654__$1 = ((cljs.core.seq_QMARK_.call(null,map__27654))?cljs.core.apply.call(null,cljs.core.hash_map,map__27654):map__27654);var next_data = cljs.core.get.call(null,map__27654__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__27655 = cljs.core.get.call(null,map__27654__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27655__$1 = ((cljs.core.seq_QMARK_.call(null,map__27655))?cljs.core.apply.call(null,cljs.core.hash_map,map__27655):map__27655);var next_controls = map__27655__$1;var next_index = cljs.core.get.call(null,map__27655__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__27655__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__27653__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__27656 = p__27652;var map__27656__$1 = ((cljs.core.seq_QMARK_.call(null,map__27656))?cljs.core.apply.call(null,cljs.core.hash_map,map__27656):map__27656);var data_resource = cljs.core.get.call(null,map__27656__$1,new cljs.core.Keyword(null,"data-resource","data-resource",-761520011));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_data,self__.data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,data_resource,clustermap.api.count_matching,next_index,next_index_type,next_filter_spec);
} else
{return null;
}
});})(map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec))
;
clustermap.components.count_matching.t27648.prototype.om$core$IRender$ = true;
clustermap.components.count_matching.t27648.prototype.om$core$IRender$render$arity$1 = ((function (map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.count_matching.render_count.call(null,self__.props,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec))
;
clustermap.components.count_matching.t27648.prototype.om$core$IDidMount$ = true;
clustermap.components.count_matching.t27648.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var dr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"data-resource","data-resource",-761520011),dr);
return clustermap.ordered_resource.retrieve_responses.call(null,dr,((function (dr,___$1,map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec){
return (function (data__$2){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COUNT-MATCHING-DATA",data__$2], null)));
return om.core.update_BANG_.call(null,self__.props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),data__$2);
});})(dr,___$1,map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec))
);
});})(map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec))
;
clustermap.components.count_matching.t27648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec){
return (function (_27650){var self__ = this;
var _27650__$1 = this;return self__.meta27649;
});})(map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec))
;
clustermap.components.count_matching.t27648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec){
return (function (_27650,meta27649__$1){var self__ = this;
var _27650__$1 = this;return (new clustermap.components.count_matching.t27648(self__.map__27645,self__.p__27632,self__.owner,self__.data,self__.props,self__.count_matching_component,self__.filter_spec,self__.controls,self__.map__27646,self__.map__27647,meta27649__$1));
});})(map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec))
;
clustermap.components.count_matching.__GT_t27648 = ((function (map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec){
return (function __GT_t27648(map__27645__$2,p__27632__$1,owner__$1,data__$1,props__$1,count_matching_component__$1,filter_spec__$1,controls__$1,map__27646__$2,map__27647__$2,meta27649){return (new clustermap.components.count_matching.t27648(map__27645__$2,p__27632__$1,owner__$1,data__$1,props__$1,count_matching_component__$1,filter_spec__$1,controls__$1,map__27646__$2,map__27647__$2,meta27649));
});})(map__27645,map__27645__$1,map__27646,map__27646__$1,props,data,map__27647,map__27647__$1,controls,filter_spec))
;
}
return (new clustermap.components.count_matching.t27648(map__27645__$1,p__27632,owner,data,props,count_matching_component,filter_spec,controls,map__27646__$1,map__27647__$1,null));
});

//# sourceMappingURL=count_matching.js.map