// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.metadata');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('clustermap.ordered_resource');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.metadata.render_metadata_row = (function render_metadata_row(record,p__29677){var map__29680 = p__29677;var map__29680__$1 = ((cljs.core.seq_QMARK_.call(null,map__29680))?cljs.core.apply.call(null,cljs.core.hash_map,map__29680):map__29680);var field = map__29680__$1;var render_fn = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),(function (){var G__29681 = cljs.core.get.call(null,record,key);var G__29681__$1 = (((G__29681 == null))?null:render_fn.call(null,G__29681));return G__29681__$1;
})()], null)], null);
});
clustermap.components.metadata.render_metadata = (function render_metadata(record,p__29682){var map__29689 = p__29682;var map__29689__$1 = ((cljs.core.seq_QMARK_.call(null,map__29689))?cljs.core.apply.call(null,cljs.core.hash_map,map__29689):map__29689);var controls = map__29689__$1;var fields = cljs.core.get.call(null,map__29689__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var title_field = cljs.core.get.call(null,map__29689__$1,new cljs.core.Keyword(null,"title-field","title-field",402861939));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORD",record], null)));
return React.DOM.div({"className": "box box-first"},(function (){var attrs29690 = cljs.core.get.call(null,record,title_field);return cljs.core.apply.call(null,React.DOM.header,((cljs.core.map_QMARK_.call(null,attrs29690))?sablono.interpreter.attributes.call(null,attrs29690):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29690))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29690)], null))));
})(),React.DOM.div({"className": "tbl"},cljs.core.into_array.call(null,(function (){var iter__12252__auto__ = ((function (map__29689,map__29689__$1,controls,fields,title_field){
return (function iter__29691(s__29692){return (new cljs.core.LazySeq(null,((function (map__29689,map__29689__$1,controls,fields,title_field){
return (function (){var s__29692__$1 = s__29692;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29692__$1);if(temp__4126__auto__)
{var s__29692__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29692__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__29692__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__29694 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__29693 = (0);while(true){
if((i__29693 < size__12251__auto__))
{var field = cljs.core._nth.call(null,c__12250__auto__,i__29693);cljs.core.chunk_append.call(null,b__29694,sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-row","div.tbl-row",2102558769)], null),clustermap.components.metadata.render_metadata_row.call(null,record,field))));
{
var G__29695 = (i__29693 + (1));
i__29693 = G__29695;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29694),iter__29691.call(null,cljs.core.chunk_rest.call(null,s__29692__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29694),null);
}
} else
{var field = cljs.core.first.call(null,s__29692__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-row","div.tbl-row",2102558769)], null),clustermap.components.metadata.render_metadata_row.call(null,record,field))),iter__29691.call(null,cljs.core.rest.call(null,s__29692__$2)));
}
} else
{return null;
}
break;
}
});})(map__29689,map__29689__$1,controls,fields,title_field))
,null,null));
});})(map__29689,map__29689__$1,controls,fields,title_field))
;return iter__12252__auto__.call(null,fields);
})())));
});
clustermap.components.metadata.metadata_component = (function metadata_component(p__29696,owner){var map__29710 = p__29696;var map__29710__$1 = ((cljs.core.seq_QMARK_.call(null,map__29710))?cljs.core.apply.call(null,cljs.core.hash_map,map__29710):map__29710);var props = map__29710__$1;var map__29711 = cljs.core.get.call(null,map__29710__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__29711__$1 = ((cljs.core.seq_QMARK_.call(null,map__29711))?cljs.core.apply.call(null,cljs.core.hash_map,map__29711):map__29711);var metadata = map__29711__$1;var record = cljs.core.get.call(null,map__29711__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__29712 = cljs.core.get.call(null,map__29711__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29712__$1 = ((cljs.core.seq_QMARK_.call(null,map__29712))?cljs.core.apply.call(null,cljs.core.hash_map,map__29712):map__29712);var controls = map__29712__$1;var index = cljs.core.get.call(null,map__29712__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var index_type = cljs.core.get.call(null,map__29712__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var sort_spec = cljs.core.get.call(null,map__29712__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var size = cljs.core.get.call(null,map__29712__$1,new cljs.core.Keyword(null,"size","size",1098693007));var filter_spec = cljs.core.get.call(null,map__29710__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.metadata.t29713 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.metadata.t29713 = (function (sort_spec,index_type,metadata,map__29711,owner,props,index,filter_spec,controls,size,p__29696,metadata_component,record,map__29710,map__29712,meta29714){
this.sort_spec = sort_spec;
this.index_type = index_type;
this.metadata = metadata;
this.map__29711 = map__29711;
this.owner = owner;
this.props = props;
this.index = index;
this.filter_spec = filter_spec;
this.controls = controls;
this.size = size;
this.p__29696 = p__29696;
this.metadata_component = metadata_component;
this.record = record;
this.map__29710 = map__29710;
this.map__29712 = map__29712;
this.meta29714 = meta29714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.metadata.t29713.cljs$lang$type = true;
clustermap.components.metadata.t29713.cljs$lang$ctorStr = "clustermap.components.metadata/t29713";
clustermap.components.metadata.t29713.cljs$lang$ctorPrWriter = ((function (map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.metadata/t29713");
});})(map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.metadata.t29713.prototype.om$core$IWillUpdate$ = true;
clustermap.components.metadata.t29713.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_,p__29716,p__29717){var self__ = this;
var map__29718 = p__29716;var map__29718__$1 = ((cljs.core.seq_QMARK_.call(null,map__29718))?cljs.core.apply.call(null,cljs.core.hash_map,map__29718):map__29718);var map__29719 = cljs.core.get.call(null,map__29718__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__29719__$1 = ((cljs.core.seq_QMARK_.call(null,map__29719))?cljs.core.apply.call(null,cljs.core.hash_map,map__29719):map__29719);var next_metadata = map__29719__$1;var next_record = cljs.core.get.call(null,map__29719__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__29720 = cljs.core.get.call(null,map__29719__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29720__$1 = ((cljs.core.seq_QMARK_.call(null,map__29720))?cljs.core.apply.call(null,cljs.core.hash_map,map__29720):map__29720);var next_controls = map__29720__$1;var next_index = cljs.core.get.call(null,map__29720__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__29720__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__29720__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_size = cljs.core.get.call(null,map__29720__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__29718__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__29721 = p__29717;var map__29721__$1 = ((cljs.core.seq_QMARK_.call(null,map__29721))?cljs.core.apply.call(null,cljs.core.hash_map,map__29721):map__29721);var metadata_resource = cljs.core.get.call(null,map__29721__$1,new cljs.core.Keyword(null,"metadata-resource","metadata-resource",-1836732303));var ___$1 = this;if((cljs.core.not.call(null,next_record)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,metadata_resource,clustermap.api.records,next_index,next_index_type,next_filter_spec,next_sort_spec,next_size);
} else
{return null;
}
});})(map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.metadata.t29713.prototype.om$core$IRender$ = true;
clustermap.components.metadata.t29713.prototype.om$core$IRender$render$arity$1 = ((function (map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.metadata.render_metadata.call(null,self__.record,self__.controls);
});})(map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.metadata.t29713.prototype.om$core$IDidMount$ = true;
clustermap.components.metadata.t29713.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var mdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"metadata-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"metadata-resource","metadata-resource",-1836732303),mdr);
return clustermap.ordered_resource.retrieve_responses.call(null,mdr,((function (mdr,___$1,map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METADATA-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.metadata,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record","record",-779106859)], null),(function (){var G__29722 = data;var G__29722__$1 = (((G__29722 == null))?null:new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(G__29722));var G__29722__$2 = (((G__29722__$1 == null))?null:cljs.core.first.call(null,G__29722__$1));return G__29722__$2;
})());
});})(mdr,___$1,map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec))
);
});})(map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.metadata.t29713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_29715){var self__ = this;
var _29715__$1 = this;return self__.meta29714;
});})(map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.metadata.t29713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_29715,meta29714__$1){var self__ = this;
var _29715__$1 = this;return (new clustermap.components.metadata.t29713(self__.sort_spec,self__.index_type,self__.metadata,self__.map__29711,self__.owner,self__.props,self__.index,self__.filter_spec,self__.controls,self__.size,self__.p__29696,self__.metadata_component,self__.record,self__.map__29710,self__.map__29712,meta29714__$1));
});})(map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.metadata.__GT_t29713 = ((function (map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function __GT_t29713(sort_spec__$1,index_type__$1,metadata__$1,map__29711__$2,owner__$1,props__$1,index__$1,filter_spec__$1,controls__$1,size__$1,p__29696__$1,metadata_component__$1,record__$1,map__29710__$2,map__29712__$2,meta29714){return (new clustermap.components.metadata.t29713(sort_spec__$1,index_type__$1,metadata__$1,map__29711__$2,owner__$1,props__$1,index__$1,filter_spec__$1,controls__$1,size__$1,p__29696__$1,metadata_component__$1,record__$1,map__29710__$2,map__29712__$2,meta29714));
});})(map__29710,map__29710__$1,props,map__29711,map__29711__$1,metadata,record,map__29712,map__29712__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
}
return (new clustermap.components.metadata.t29713(sort_spec,index_type,metadata,map__29711__$1,owner,props,index,filter_spec,controls,size,p__29696,metadata_component,record,map__29710__$1,map__29712__$1,null));
});

//# sourceMappingURL=metadata.js.map