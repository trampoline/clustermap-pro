// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.company_info');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.formats.time');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.time');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.company_info.render_metadata_row = (function render_metadata_row(record,p__14874){var map__14877 = p__14874;var map__14877__$1 = ((cljs.core.seq_QMARK_.call(null,map__14877))?cljs.core.apply.call(null,cljs.core.hash_map,map__14877):map__14877);var field = map__14877__$1;var render_fn = cljs.core.get.call(null,map__14877__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__14877__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__14877__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),(function (){var G__14878 = cljs.core.get.call(null,record,key);var G__14878__$1 = (((G__14878 == null))?null:render_fn.call(null,G__14878));return G__14878__$1;
})()], null)], null);
});
clustermap.components.company_info.sign_icon = (function sign_icon(n){if((n > (0)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-positive","i.icon-positive",1320612420)], null);
} else
{if((n < (0)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-negative","i.icon-negative",1168365176)], null);
} else
{return null;

}
}
});
clustermap.components.company_info.stat_change = (function stat_change(base,change){if(cljs.core.truth_((function (){var and__3627__auto__ = change;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = base;if(cljs.core.truth_(and__3627__auto____$1))
{return cljs.core.not_EQ_.call(null,(0),base);
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var v = ((100) * (change / base));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-change","div.stat-change",-1654405476),clustermap.components.company_info.sign_icon.call(null,v),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),clustermap.formats.money.readable.call(null,v,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),""),"%"], null)], null);
} else
{return null;
}
});
clustermap.components.company_info.render_STAR_ = (function render_STAR_(record,p__14879){var map__14896 = p__14879;var map__14896__$1 = ((cljs.core.seq_QMARK_.call(null,map__14896))?cljs.core.apply.call(null,cljs.core.hash_map,map__14896):map__14896);var controls = map__14896__$1;var fields = cljs.core.get.call(null,map__14896__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var title_field = cljs.core.get.call(null,map__14896__$1,new cljs.core.Keyword(null,"title-field","title-field",402861939));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORD",record], null)));
return React.DOM.div({"className": "panel-grid-container"},React.DOM.div({"className": "panel-grid"},React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-details"},React.DOM.ul(null,React.DOM.li(null,React.DOM.h4(null,"Description"),(function (){var attrs14899 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(record);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs14899))?sablono.interpreter.attributes.call(null,attrs14899):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14899))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14899)], null))));
})()),React.DOM.li(null,React.DOM.h4(null,"Website",React.DOM.p(null,React.DOM.a({"href": new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record), "target": "_blank"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record)))))))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-address"},React.DOM.div({"className": "row"},(function (){var attrs14900 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Address"], null)], null),(function (){var iter__4377__auto__ = ((function (map__14896,map__14896__$1,controls,fields,title_field){
return (function iter__14908(s__14909){return (new cljs.core.LazySeq(null,((function (map__14896,map__14896__$1,controls,fields,title_field){
return (function (){var s__14909__$1 = s__14909;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14909__$1);if(temp__4126__auto__)
{var s__14909__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14909__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__14909__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__14911 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__14910 = (0);while(true){
if((i__14910 < size__4376__auto__))
{var line = cljs.core._nth.call(null,c__4375__auto__,i__14910);cljs.core.chunk_append.call(null,b__14911,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null));
{
var G__14912 = (i__14910 + (1));
i__14910 = G__14912;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14911),iter__14908.call(null,cljs.core.chunk_rest.call(null,s__14909__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14911),null);
}
} else
{var line = cljs.core.first.call(null,s__14909__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null),iter__14908.call(null,cljs.core.rest.call(null,s__14909__$2)));
}
} else
{return null;
}
break;
}
});})(map__14896,map__14896__$1,controls,fields,title_field))
,null,null));
});})(map__14896,map__14896__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(record),/,|\n/));
})());return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs14900))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6"], null)], null),attrs14900)):{"className": "col-sm-6"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14900))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14900)], null))));
})()))))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Turnover"),React.DOM.div({"className": "stat-amount"},React.DOM.small(null,"\u00A3"),sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),""))),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(record)))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Employment"),(function (){var attrs14907 = clustermap.formats.number.readable.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"sf","sf",-1949491738),(3));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs14907))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stat-amount"], null)], null),attrs14907)):{"className": "stat-amount"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14907))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14907)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",-822587912).cljs$core$IFn$_invoke$arity$1(record)))))))));
});
clustermap.components.company_info.company_info_component = (function company_info_component(p__14913,owner){var map__14927 = p__14913;var map__14927__$1 = ((cljs.core.seq_QMARK_.call(null,map__14927))?cljs.core.apply.call(null,cljs.core.hash_map,map__14927):map__14927);var props = map__14927__$1;var map__14928 = cljs.core.get.call(null,map__14927__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__14928__$1 = ((cljs.core.seq_QMARK_.call(null,map__14928))?cljs.core.apply.call(null,cljs.core.hash_map,map__14928):map__14928);var metadata = map__14928__$1;var record = cljs.core.get.call(null,map__14928__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__14929 = cljs.core.get.call(null,map__14928__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__14929__$1 = ((cljs.core.seq_QMARK_.call(null,map__14929))?cljs.core.apply.call(null,cljs.core.hash_map,map__14929):map__14929);var controls = map__14929__$1;var index = cljs.core.get.call(null,map__14929__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var index_type = cljs.core.get.call(null,map__14929__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var sort_spec = cljs.core.get.call(null,map__14929__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var size = cljs.core.get.call(null,map__14929__$1,new cljs.core.Keyword(null,"size","size",1098693007));var filter_spec = cljs.core.get.call(null,map__14927__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.company_info.t14930 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.company_info.t14930 = (function (sort_spec,index_type,p__14913,metadata,owner,map__14929,props,index,map__14927,filter_spec,controls,size,map__14928,record,company_info_component,meta14931){
this.sort_spec = sort_spec;
this.index_type = index_type;
this.p__14913 = p__14913;
this.metadata = metadata;
this.owner = owner;
this.map__14929 = map__14929;
this.props = props;
this.index = index;
this.map__14927 = map__14927;
this.filter_spec = filter_spec;
this.controls = controls;
this.size = size;
this.map__14928 = map__14928;
this.record = record;
this.company_info_component = company_info_component;
this.meta14931 = meta14931;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.company_info.t14930.cljs$lang$type = true;
clustermap.components.company_info.t14930.cljs$lang$ctorStr = "clustermap.components.company-info/t14930";
clustermap.components.company_info.t14930.cljs$lang$ctorPrWriter = ((function (map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.company-info/t14930");
});})(map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.t14930.prototype.om$core$IWillUpdate$ = true;
clustermap.components.company_info.t14930.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_,p__14933,p__14934){var self__ = this;
var map__14935 = p__14933;var map__14935__$1 = ((cljs.core.seq_QMARK_.call(null,map__14935))?cljs.core.apply.call(null,cljs.core.hash_map,map__14935):map__14935);var map__14936 = cljs.core.get.call(null,map__14935__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__14936__$1 = ((cljs.core.seq_QMARK_.call(null,map__14936))?cljs.core.apply.call(null,cljs.core.hash_map,map__14936):map__14936);var next_metadata = map__14936__$1;var next_record = cljs.core.get.call(null,map__14936__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__14937 = cljs.core.get.call(null,map__14936__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__14937__$1 = ((cljs.core.seq_QMARK_.call(null,map__14937))?cljs.core.apply.call(null,cljs.core.hash_map,map__14937):map__14937);var next_controls = map__14937__$1;var next_index = cljs.core.get.call(null,map__14937__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__14937__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__14937__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_size = cljs.core.get.call(null,map__14937__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__14935__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__14938 = p__14934;var map__14938__$1 = ((cljs.core.seq_QMARK_.call(null,map__14938))?cljs.core.apply.call(null,cljs.core.hash_map,map__14938):map__14938);var metadata_resource = cljs.core.get.call(null,map__14938__$1,new cljs.core.Keyword(null,"metadata-resource","metadata-resource",-1836732303));var ___$1 = this;if((cljs.core.not.call(null,next_record)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,metadata_resource,clustermap.api.records,next_index,next_index_type,next_filter_spec,next_sort_spec,next_size);
} else
{return null;
}
});})(map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.t14930.prototype.om$core$IRender$ = true;
clustermap.components.company_info.t14930.prototype.om$core$IRender$render$arity$1 = ((function (map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.company_info.render_STAR_.call(null,self__.record,self__.controls);
});})(map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.t14930.prototype.om$core$IDidMount$ = true;
clustermap.components.company_info.t14930.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var mdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"metadata-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"metadata-resource","metadata-resource",-1836732303),mdr);
return clustermap.ordered_resource.retrieve_responses.call(null,mdr,((function (mdr,___$1,map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPANY-INFO-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.metadata,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record","record",-779106859)], null),(function (){var G__14939 = data;var G__14939__$1 = (((G__14939 == null))?null:new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(G__14939));var G__14939__$2 = (((G__14939__$1 == null))?null:cljs.core.first.call(null,G__14939__$1));return G__14939__$2;
})());
});})(mdr,___$1,map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec))
);
});})(map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.t14930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_14932){var self__ = this;
var _14932__$1 = this;return self__.meta14931;
});})(map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.t14930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_14932,meta14931__$1){var self__ = this;
var _14932__$1 = this;return (new clustermap.components.company_info.t14930(self__.sort_spec,self__.index_type,self__.p__14913,self__.metadata,self__.owner,self__.map__14929,self__.props,self__.index,self__.map__14927,self__.filter_spec,self__.controls,self__.size,self__.map__14928,self__.record,self__.company_info_component,meta14931__$1));
});})(map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.__GT_t14930 = ((function (map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function __GT_t14930(sort_spec__$1,index_type__$1,p__14913__$1,metadata__$1,owner__$1,map__14929__$2,props__$1,index__$1,map__14927__$2,filter_spec__$1,controls__$1,size__$1,map__14928__$2,record__$1,company_info_component__$1,meta14931){return (new clustermap.components.company_info.t14930(sort_spec__$1,index_type__$1,p__14913__$1,metadata__$1,owner__$1,map__14929__$2,props__$1,index__$1,map__14927__$2,filter_spec__$1,controls__$1,size__$1,map__14928__$2,record__$1,company_info_component__$1,meta14931));
});})(map__14927,map__14927__$1,props,map__14928,map__14928__$1,metadata,record,map__14929,map__14929__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
}
return (new clustermap.components.company_info.t14930(sort_spec,index_type,p__14913,metadata,owner,map__14929__$1,props,index,map__14927__$1,filter_spec,controls,size,map__14928__$1,record,company_info_component,null));
});
