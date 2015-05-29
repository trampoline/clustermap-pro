// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.tag_histogram');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('clustermap.ordered_resource');
goog.require('jayq.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.tag_histogram.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__30474,metrics,tag_data,tag_agg_data,p__30475){var map__30518 = p__30474;var map__30518__$1 = ((cljs.core.seq_QMARK_.call(null,map__30518))?cljs.core.apply.call(null,cljs.core.hash_map,map__30518):map__30518);var query = map__30518__$1;var map__30519 = p__30475;var map__30519__$1 = ((cljs.core.seq_QMARK_.call(null,map__30519))?cljs.core.apply.call(null,cljs.core.hash_map,map__30519):map__30519);var opts = map__30519__$1;var y1_title = cljs.core.get.call(null,map__30519__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__30519__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title){
return (function iter__30520(s__30521){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title){
return (function (){var s__30521__$1 = s__30521;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30521__$1);if(temp__4126__auto__)
{var s__30521__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30521__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30521__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30523 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30522 = (0);while(true){
if((i__30522 < size__4376__auto__))
{var map__30534 = cljs.core._nth.call(null,c__4375__auto__,i__30522);var map__30534__$1 = ((cljs.core.seq_QMARK_.call(null,map__30534))?cljs.core.apply.call(null,cljs.core.hash_map,map__30534):map__30534);var metric_spec = map__30534__$1;var title = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__30523,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__30522,map__30534,map__30534__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30523,s__30521__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title){
return (function iter__30535(s__30536){return (new cljs.core.LazySeq(null,((function (i__30522,map__30534,map__30534__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30523,s__30521__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title){
return (function (){var s__30536__$1 = s__30536;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30536__$1);if(temp__4126__auto____$1)
{var s__30536__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30536__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__30536__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__30538 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__30537 = (0);while(true){
if((i__30537 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__30537);cljs.core.chunk_append.call(null,b__30538,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__30560 = (i__30537 + (1));
i__30537 = G__30560;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30538),iter__30535.call(null,cljs.core.chunk_rest.call(null,s__30536__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30538),null);
}
} else
{var record = cljs.core.first.call(null,s__30536__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__30535.call(null,cljs.core.rest.call(null,s__30536__$2)));
}
} else
{return null;
}
break;
}
});})(i__30522,map__30534,map__30534__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30523,s__30521__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title))
,null,null));
});})(i__30522,map__30534,map__30534__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30523,s__30521__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__30561 = (i__30522 + (1));
i__30522 = G__30561;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30523),iter__30520.call(null,cljs.core.chunk_rest.call(null,s__30521__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30523),null);
}
} else
{var map__30539 = cljs.core.first.call(null,s__30521__$2);var map__30539__$1 = ((cljs.core.seq_QMARK_.call(null,map__30539))?cljs.core.apply.call(null,cljs.core.hash_map,map__30539):map__30539);var metric_spec = map__30539__$1;var title = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__30539,map__30539__$1,metric_spec,title,metric,s__30521__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title){
return (function iter__30540(s__30541){return (new cljs.core.LazySeq(null,((function (map__30539,map__30539__$1,metric_spec,title,metric,s__30521__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title){
return (function (){var s__30541__$1 = s__30541;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30541__$1);if(temp__4126__auto____$1)
{var s__30541__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30541__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30541__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30543 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30542 = (0);while(true){
if((i__30542 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__30542);cljs.core.chunk_append.call(null,b__30543,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__30562 = (i__30542 + (1));
i__30542 = G__30562;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30543),iter__30540.call(null,cljs.core.chunk_rest.call(null,s__30541__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30543),null);
}
} else
{var record = cljs.core.first.call(null,s__30541__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__30540.call(null,cljs.core.rest.call(null,s__30541__$2)));
}
} else
{return null;
}
break;
}
});})(map__30539,map__30539__$1,metric_spec,title,metric,s__30521__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title))
,null,null));
});})(map__30539,map__30539__$1,metric_spec,title,metric,s__30521__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__30520.call(null,cljs.core.rest.call(null,s__30521__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title){
return (function iter__30544(s__30545){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title){
return (function (){var s__30545__$1 = s__30545;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30545__$1);if(temp__4126__auto__)
{var s__30545__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30545__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30545__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30547 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30546 = (0);while(true){
if((i__30546 < size__4376__auto__))
{var map__30550 = cljs.core._nth.call(null,c__4375__auto__,i__30546);var map__30550__$1 = ((cljs.core.seq_QMARK_.call(null,map__30550))?cljs.core.apply.call(null,cljs.core.hash_map,map__30550):map__30550);var label_formatter = cljs.core.get.call(null,map__30550__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__30550__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__30547,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__30563 = (i__30546 + (1));
i__30546 = G__30563;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30547),iter__30544.call(null,cljs.core.chunk_rest.call(null,s__30545__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30547),null);
}
} else
{var map__30551 = cljs.core.first.call(null,s__30545__$2);var map__30551__$1 = ((cljs.core.seq_QMARK_.call(null,map__30551))?cljs.core.apply.call(null,cljs.core.hash_map,map__30551):map__30551);var label_formatter = cljs.core.get.call(null,map__30551__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__30551__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__30544.call(null,cljs.core.rest.call(null,s__30545__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title){
return (function iter__30552(s__30553){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title){
return (function (){var s__30553__$1 = s__30553;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30553__$1);if(temp__4126__auto__)
{var s__30553__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30553__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30553__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30555 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30554 = (0);while(true){
if((i__30554 < size__4376__auto__))
{var vec__30558 = cljs.core._nth.call(null,c__4375__auto__,i__30554);var y = cljs.core.nth.call(null,vec__30558,(0),null);var i = cljs.core.nth.call(null,vec__30558,(1),null);cljs.core.chunk_append.call(null,b__30555,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__30564 = (i__30554 + (1));
i__30554 = G__30564;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30555),iter__30552.call(null,cljs.core.chunk_rest.call(null,s__30553__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30555),null);
}
} else
{var vec__30559 = cljs.core.first.call(null,s__30553__$2);var y = cljs.core.nth.call(null,vec__30559,(0),null);var i = cljs.core.nth.call(null,vec__30559,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__30552.call(null,cljs.core.rest.call(null,s__30553__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30518,map__30518__$1,query,map__30519,map__30519__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
clustermap.components.tag_histogram.request_tag_data = (function request_tag_data(resource,tag_type){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.tags_of_type,tag_type);
});
clustermap.components.tag_histogram.request_tag_agg_data = (function request_tag_agg_data(resource,query){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.nested_aggregation,query);
});
var ufv___30623 = schema.utils.use_fn_validation;var output_schema30566_30624 = schema.core.Any;var input_schema30567_30625 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker30568_30626 = schema.core.checker.call(null,input_schema30567_30625);var output_checker30569_30627 = schema.core.checker.call(null,output_schema30566_30624);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627){
return (function tag_histogram(G__30570,G__30571,G__30572){var validate__6034__auto__ = ufv___30623.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30628 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30570,G__30571,G__30572], null);var temp__4126__auto___30629 = input_checker30568_30626.call(null,args__6035__auto___30628);if(cljs.core.truth_(temp__4126__auto___30629))
{var error__6036__auto___30630 = temp__4126__auto___30629;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___30630)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30630,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30628,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30567_30625,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__30601 = G__30570;var map__30603 = G__30601;var map__30603__$1 = ((cljs.core.seq_QMARK_.call(null,map__30603))?cljs.core.apply.call(null,cljs.core.hash_map,map__30603):map__30603);var map__30604 = cljs.core.get.call(null,map__30603__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30604__$1 = ((cljs.core.seq_QMARK_.call(null,map__30604))?cljs.core.apply.call(null,cljs.core.hash_map,map__30604):map__30604);var tag_histogram__$1 = map__30604__$1;var query = cljs.core.get.call(null,map__30604__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__30604__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__30604__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__30604__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__30604__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__30603__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__30571;var G__30602 = G__30572;var map__30605 = G__30602;var map__30605__$1 = ((cljs.core.seq_QMARK_.call(null,map__30605))?cljs.core.apply.call(null,cljs.core.hash_map,map__30605):map__30605);var opts = map__30605__$1;var id = cljs.core.get.call(null,map__30605__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__30601__$1 = G__30601;var owner__$1 = owner;var G__30602__$1 = G__30602;while(true){
var map__30606 = G__30601__$1;var map__30606__$1 = ((cljs.core.seq_QMARK_.call(null,map__30606))?cljs.core.apply.call(null,cljs.core.hash_map,map__30606):map__30606);var map__30607 = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30607__$1 = ((cljs.core.seq_QMARK_.call(null,map__30607))?cljs.core.apply.call(null,cljs.core.hash_map,map__30607):map__30607);var tag_histogram__$2 = map__30607__$1;var query__$1 = cljs.core.get.call(null,map__30607__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__30607__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__30607__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__30607__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__30607__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__30608 = G__30602__$1;var map__30608__$1 = ((cljs.core.seq_QMARK_.call(null,map__30608))?cljs.core.apply.call(null,cljs.core.hash_map,map__30608):map__30608);var opts__$1 = map__30608__$1;var id__$1 = cljs.core.get.call(null,map__30608__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t30609 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t30609 = (function (query,map__30605,input_checker30568,map__30604,owner,metrics,G__30601,output_checker30569,map__30607,input_schema30567,tag_agg_data,tag_histogram,G__30571,filter_spec,map__30606,tag_type,map__30608,G__30602,map__30603,G__30572,output_schema30566,validate__6034__auto__,id,opts,tag_data,G__30570,ufv__,meta30610){
this.query = query;
this.map__30605 = map__30605;
this.input_checker30568 = input_checker30568;
this.map__30604 = map__30604;
this.owner = owner;
this.metrics = metrics;
this.G__30601 = G__30601;
this.output_checker30569 = output_checker30569;
this.map__30607 = map__30607;
this.input_schema30567 = input_schema30567;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.G__30571 = G__30571;
this.filter_spec = filter_spec;
this.map__30606 = map__30606;
this.tag_type = tag_type;
this.map__30608 = map__30608;
this.G__30602 = G__30602;
this.map__30603 = map__30603;
this.G__30572 = G__30572;
this.output_schema30566 = output_schema30566;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.opts = opts;
this.tag_data = tag_data;
this.G__30570 = G__30570;
this.ufv__ = ufv__;
this.meta30610 = meta30610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t30609.cljs$lang$type = true;
clustermap.components.tag_histogram.t30609.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t30609";
clustermap.components.tag_histogram.t30609.cljs$lang$ctorPrWriter = ((function (map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t30609");
});})(map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627))
;
clustermap.components.tag_histogram.t30609.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t30609.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627))
;
clustermap.components.tag_histogram.t30609.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t30609.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627){
return (function (_,p__30612,___$1){var self__ = this;
var map__30613 = p__30612;var map__30613__$1 = ((cljs.core.seq_QMARK_.call(null,map__30613))?cljs.core.apply.call(null,cljs.core.hash_map,map__30613):map__30613);var map__30614 = cljs.core.get.call(null,map__30613__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30614__$1 = ((cljs.core.seq_QMARK_.call(null,map__30614))?cljs.core.apply.call(null,cljs.core.hash_map,map__30614):map__30614);var prev_query = cljs.core.get.call(null,map__30614__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__30614__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__30614__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__30614__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__30613__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.metrics,self__.tag_data,self__.tag_agg_data,self__.opts);
} else
{return null;
}
});})(map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627))
;
clustermap.components.tag_histogram.t30609.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t30609.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627){
return (function (_,p__30615,p__30616){var self__ = this;
var map__30617 = p__30615;var map__30617__$1 = ((cljs.core.seq_QMARK_.call(null,map__30617))?cljs.core.apply.call(null,cljs.core.hash_map,map__30617):map__30617);var map__30618 = cljs.core.get.call(null,map__30617__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30618__$1 = ((cljs.core.seq_QMARK_.call(null,map__30618))?cljs.core.apply.call(null,cljs.core.hash_map,map__30618):map__30618);var next_query = cljs.core.get.call(null,map__30618__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__30618__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__30618__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__30618__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__30618__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__30617__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30619 = p__30616;var map__30619__$1 = ((cljs.core.seq_QMARK_.call(null,map__30619))?cljs.core.apply.call(null,cljs.core.hash_map,map__30619):map__30619);var next_tag_data_resource = cljs.core.get.call(null,map__30619__$1,new cljs.core.Keyword(null,"tag-data-resource","tag-data-resource",-1996057551));var next_tag_agg_data_resource = cljs.core.get.call(null,map__30619__$1,new cljs.core.Keyword(null,"tag-agg-data-resource","tag-agg-data-resource",-1619650244));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{clustermap.components.tag_histogram.request_tag_data.call(null,next_tag_data_resource,next_tag_type);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.tag_histogram.request_tag_agg_data.call(null,next_tag_agg_data_resource,cljs.core.merge.call(null,next_query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec], null)));
} else
{return null;
}
});})(map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627))
;
clustermap.components.tag_histogram.t30609.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t30609.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"tag-data-resource");var tadr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"tag-agg-data-resource");var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"tag-data-resource","tag-data-resource",-1996057551),tdr);
clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (node,tdr,tadr,last_dims,w,h,___$1,map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627){
return (function (response){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["HISTOGRAM TAGS: ",response], null)));
return om.core.update_BANG_.call(null,self__.tag_histogram,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)], null),response);
});})(node,tdr,tadr,last_dims,w,h,___$1,map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"tag-agg-data-resource","tag-agg-data-resource",-1619650244),tadr);
clustermap.ordered_resource.retrieve_responses.call(null,tadr,((function (node,tdr,tadr,last_dims,w,h,___$1,map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627){
return (function (p__30620){var map__30621 = p__30620;var map__30621__$1 = ((cljs.core.seq_QMARK_.call(null,map__30621))?cljs.core.apply.call(null,cljs.core.hash_map,map__30621):map__30621);var response = map__30621__$1;var records = cljs.core.get.call(null,map__30621__$1,new cljs.core.Keyword(null,"records","records",1326822832));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["HISTOGRAM TAG AGGS: ",response], null)));
return om.core.update_BANG_.call(null,self__.tag_histogram,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)], null),records);
});})(node,tdr,tadr,last_dims,w,h,___$1,map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627))
);
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,tdr,tadr,last_dims,w,h,___$1,map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__30622 = om.core.get_node.call(null,self__.owner,"chart");var G__30622__$1 = (((G__30622 == null))?null:jayq.core.$.call(null,G__30622));var G__30622__$2 = (((G__30622__$1 == null))?null:G__30622__$1.highcharts());var G__30622__$3 = (((G__30622__$2 == null))?null:G__30622__$2.reflow());return G__30622__$3;
} else
{return null;
}
});})(node,tdr,tadr,last_dims,w,h,___$1,map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627))
);
});})(map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627))
;
clustermap.components.tag_histogram.t30609.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t30609.prototype.om$core$IRender$render$arity$1 = ((function (map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627))
;
clustermap.components.tag_histogram.t30609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627){
return (function (_30611){var self__ = this;
var _30611__$1 = this;return self__.meta30610;
});})(map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627))
;
clustermap.components.tag_histogram.t30609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627){
return (function (_30611,meta30610__$1){var self__ = this;
var _30611__$1 = this;return (new clustermap.components.tag_histogram.t30609(self__.query,self__.map__30605,self__.input_checker30568,self__.map__30604,self__.owner,self__.metrics,self__.G__30601,self__.output_checker30569,self__.map__30607,self__.input_schema30567,self__.tag_agg_data,self__.tag_histogram,self__.G__30571,self__.filter_spec,self__.map__30606,self__.tag_type,self__.map__30608,self__.G__30602,self__.map__30603,self__.G__30572,self__.output_schema30566,self__.validate__6034__auto__,self__.id,self__.opts,self__.tag_data,self__.G__30570,self__.ufv__,meta30610__$1));
});})(map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627))
;
clustermap.components.tag_histogram.__GT_t30609 = ((function (map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627){
return (function __GT_t30609(query__$2,map__30605__$2,input_checker30568__$1,map__30604__$2,owner__$3,metrics__$2,G__30601__$2,output_checker30569__$1,map__30607__$2,input_schema30567__$1,tag_agg_data__$2,tag_histogram__$3,G__30571__$1,filter_spec__$2,map__30606__$2,tag_type__$2,map__30608__$2,G__30602__$2,map__30603__$2,G__30572__$1,output_schema30566__$1,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,G__30570__$1,ufv____$1,meta30610){return (new clustermap.components.tag_histogram.t30609(query__$2,map__30605__$2,input_checker30568__$1,map__30604__$2,owner__$3,metrics__$2,G__30601__$2,output_checker30569__$1,map__30607__$2,input_schema30567__$1,tag_agg_data__$2,tag_histogram__$3,G__30571__$1,filter_spec__$2,map__30606__$2,tag_type__$2,map__30608__$2,G__30602__$2,map__30603__$2,G__30572__$1,output_schema30566__$1,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,G__30570__$1,ufv____$1,meta30610));
});})(map__30606,map__30606__$1,map__30607,map__30607__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30608,map__30608__$1,opts__$1,id__$1,G__30601,map__30603,map__30603__$1,map__30604,map__30604__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30602,map__30605,map__30605__$1,opts,id,validate__6034__auto__,ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627))
;
}
return (new clustermap.components.tag_histogram.t30609(query__$1,map__30605__$1,input_checker30568_30626,map__30604__$1,owner__$2,metrics__$1,G__30601__$1,output_checker30569_30627,map__30607__$1,input_schema30567_30625,tag_agg_data__$1,tag_histogram__$2,G__30571,filter_spec__$1,map__30606__$1,tag_type__$1,map__30608__$1,G__30602__$1,map__30603__$1,G__30572,output_schema30566_30624,validate__6034__auto__,id__$1,opts__$1,tag_data__$1,G__30570,ufv___30623,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30631 = output_checker30569_30627.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30631))
{var error__6036__auto___30632 = temp__4126__auto___30631;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___30632)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30632,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30566_30624,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___30623,output_schema30566_30624,input_schema30567_30625,input_checker30568_30626,output_checker30569_30627))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema30566_30624,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30567_30625], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m30565){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m30565);
});
__GT_tag_histogram = function(cursor__7850__auto__,m30565){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m30565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
