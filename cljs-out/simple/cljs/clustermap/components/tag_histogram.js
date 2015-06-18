// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.tag_histogram');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31773,p__31774){var map__31817 = p__31773;var map__31817__$1 = ((cljs.core.seq_QMARK_.call(null,map__31817))?cljs.core.apply.call(null,cljs.core.hash_map,map__31817):map__31817);var tag_agg_data = cljs.core.get.call(null,map__31817__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__31817__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__31817__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__31817__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var bar_width = cljs.core.get.call(null,map__31817__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__31817__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__31817__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__31818 = p__31774;var map__31818__$1 = ((cljs.core.seq_QMARK_.call(null,map__31818))?cljs.core.apply.call(null,cljs.core.hash_map,map__31818):map__31818);var opts = map__31818__$1;var y1_title = cljs.core.get.call(null,map__31818__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31818__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title){
return (function iter__31819(s__31820){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title){
return (function (){var s__31820__$1 = s__31820;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31820__$1);if(temp__4126__auto__)
{var s__31820__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31820__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31820__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31822 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31821 = (0);while(true){
if((i__31821 < size__4376__auto__))
{var map__31833 = cljs.core._nth.call(null,c__4375__auto__,i__31821);var map__31833__$1 = ((cljs.core.seq_QMARK_.call(null,map__31833))?cljs.core.apply.call(null,cljs.core.hash_map,map__31833):map__31833);var metric_spec = map__31833__$1;var title = cljs.core.get.call(null,map__31833__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31833__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31822,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31821,map__31833,map__31833__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31822,s__31820__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title){
return (function iter__31834(s__31835){return (new cljs.core.LazySeq(null,((function (i__31821,map__31833,map__31833__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31822,s__31820__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title){
return (function (){var s__31835__$1 = s__31835;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31835__$1);if(temp__4126__auto____$1)
{var s__31835__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31835__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31835__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31837 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31836 = (0);while(true){
if((i__31836 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31836);cljs.core.chunk_append.call(null,b__31837,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31859 = (i__31836 + (1));
i__31836 = G__31859;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31837),iter__31834.call(null,cljs.core.chunk_rest.call(null,s__31835__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31837),null);
}
} else
{var record = cljs.core.first.call(null,s__31835__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31834.call(null,cljs.core.rest.call(null,s__31835__$2)));
}
} else
{return null;
}
break;
}
});})(i__31821,map__31833,map__31833__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31822,s__31820__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31821,map__31833,map__31833__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31822,s__31820__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__31860 = (i__31821 + (1));
i__31821 = G__31860;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31822),iter__31819.call(null,cljs.core.chunk_rest.call(null,s__31820__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31822),null);
}
} else
{var map__31838 = cljs.core.first.call(null,s__31820__$2);var map__31838__$1 = ((cljs.core.seq_QMARK_.call(null,map__31838))?cljs.core.apply.call(null,cljs.core.hash_map,map__31838):map__31838);var metric_spec = map__31838__$1;var title = cljs.core.get.call(null,map__31838__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31838__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31838,map__31838__$1,metric_spec,title,metric,s__31820__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title){
return (function iter__31839(s__31840){return (new cljs.core.LazySeq(null,((function (map__31838,map__31838__$1,metric_spec,title,metric,s__31820__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title){
return (function (){var s__31840__$1 = s__31840;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31840__$1);if(temp__4126__auto____$1)
{var s__31840__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31840__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31840__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31842 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31841 = (0);while(true){
if((i__31841 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31841);cljs.core.chunk_append.call(null,b__31842,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31861 = (i__31841 + (1));
i__31841 = G__31861;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31842),iter__31839.call(null,cljs.core.chunk_rest.call(null,s__31840__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31842),null);
}
} else
{var record = cljs.core.first.call(null,s__31840__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31839.call(null,cljs.core.rest.call(null,s__31840__$2)));
}
} else
{return null;
}
break;
}
});})(map__31838,map__31838__$1,metric_spec,title,metric,s__31820__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31838,map__31838__$1,metric_spec,title,metric,s__31820__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31819.call(null,cljs.core.rest.call(null,s__31820__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title){
return (function iter__31843(s__31844){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title){
return (function (){var s__31844__$1 = s__31844;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31844__$1);if(temp__4126__auto__)
{var s__31844__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31844__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31844__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31846 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31845 = (0);while(true){
if((i__31845 < size__4376__auto__))
{var map__31849 = cljs.core._nth.call(null,c__4375__auto__,i__31845);var map__31849__$1 = ((cljs.core.seq_QMARK_.call(null,map__31849))?cljs.core.apply.call(null,cljs.core.hash_map,map__31849):map__31849);var label_formatter = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31846,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__31862 = (i__31845 + (1));
i__31845 = G__31862;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31846),iter__31843.call(null,cljs.core.chunk_rest.call(null,s__31844__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31846),null);
}
} else
{var map__31850 = cljs.core.first.call(null,s__31844__$2);var map__31850__$1 = ((cljs.core.seq_QMARK_.call(null,map__31850))?cljs.core.apply.call(null,cljs.core.hash_map,map__31850):map__31850);var label_formatter = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31843.call(null,cljs.core.rest.call(null,s__31844__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title){
return (function iter__31851(s__31852){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title){
return (function (){var s__31852__$1 = s__31852;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31852__$1);if(temp__4126__auto__)
{var s__31852__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31852__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31852__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31854 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31853 = (0);while(true){
if((i__31853 < size__4376__auto__))
{var vec__31857 = cljs.core._nth.call(null,c__4375__auto__,i__31853);var y = cljs.core.nth.call(null,vec__31857,(0),null);var i = cljs.core.nth.call(null,vec__31857,(1),null);cljs.core.chunk_append.call(null,b__31854,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__31863 = (i__31853 + (1));
i__31853 = G__31863;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31854),iter__31851.call(null,cljs.core.chunk_rest.call(null,s__31852__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31854),null);
}
} else
{var vec__31858 = cljs.core.first.call(null,s__31852__$2);var y = cljs.core.nth.call(null,vec__31858,(0),null);var i = cljs.core.nth.call(null,vec__31858,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31851.call(null,cljs.core.rest.call(null,s__31852__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31817,map__31817__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31818,map__31818__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___32056 = schema.utils.use_fn_validation;var output_schema31865_32057 = schema.core.Any;var input_schema31866_32058 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker31867_32059 = schema.core.checker.call(null,input_schema31866_32058);var output_checker31868_32060 = schema.core.checker.call(null,output_schema31865_32057);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function tag_histogram(G__31869,G__31870,G__31871){var validate__6034__auto__ = ufv___32056.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32061 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31869,G__31870,G__31871], null);var temp__4126__auto___32062 = input_checker31867_32059.call(null,args__6035__auto___32061);if(cljs.core.truth_(temp__4126__auto___32062))
{var error__6036__auto___32063 = temp__4126__auto___32062;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32063)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32063,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32061,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31866_32058,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__31967 = G__31869;var map__31969 = G__31967;var map__31969__$1 = ((cljs.core.seq_QMARK_.call(null,map__31969))?cljs.core.apply.call(null,cljs.core.hash_map,map__31969):map__31969);var map__31970 = cljs.core.get.call(null,map__31969__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31970__$1 = ((cljs.core.seq_QMARK_.call(null,map__31970))?cljs.core.apply.call(null,cljs.core.hash_map,map__31970):map__31970);var tag_histogram__$1 = map__31970__$1;var query = cljs.core.get.call(null,map__31970__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__31970__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__31970__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__31970__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__31970__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__31969__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__31870;var G__31968 = G__31871;var map__31971 = G__31968;var map__31971__$1 = ((cljs.core.seq_QMARK_.call(null,map__31971))?cljs.core.apply.call(null,cljs.core.hash_map,map__31971):map__31971);var opts = map__31971__$1;var id = cljs.core.get.call(null,map__31971__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__31967__$1 = G__31967;var owner__$1 = owner;var G__31968__$1 = G__31968;while(true){
var map__31972 = G__31967__$1;var map__31972__$1 = ((cljs.core.seq_QMARK_.call(null,map__31972))?cljs.core.apply.call(null,cljs.core.hash_map,map__31972):map__31972);var map__31973 = cljs.core.get.call(null,map__31972__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31973__$1 = ((cljs.core.seq_QMARK_.call(null,map__31973))?cljs.core.apply.call(null,cljs.core.hash_map,map__31973):map__31973);var tag_histogram__$2 = map__31973__$1;var query__$1 = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__31972__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__31974 = G__31968__$1;var map__31974__$1 = ((cljs.core.seq_QMARK_.call(null,map__31974))?cljs.core.apply.call(null,cljs.core.hash_map,map__31974):map__31974);var opts__$1 = map__31974__$1;var id__$1 = cljs.core.get.call(null,map__31974__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t31975 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t31975 = (function (query,map__31971,owner,metrics,G__31967,map__31972,map__31973,output_schema31865,G__31968,tag_agg_data,tag_histogram,output_checker31868,input_schema31866,filter_spec,map__31974,map__31969,tag_type,input_checker31867,G__31871,validate__6034__auto__,id,G__31869,opts,tag_data,ufv__,map__31970,G__31870,meta31976){
this.query = query;
this.map__31971 = map__31971;
this.owner = owner;
this.metrics = metrics;
this.G__31967 = G__31967;
this.map__31972 = map__31972;
this.map__31973 = map__31973;
this.output_schema31865 = output_schema31865;
this.G__31968 = G__31968;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.output_checker31868 = output_checker31868;
this.input_schema31866 = input_schema31866;
this.filter_spec = filter_spec;
this.map__31974 = map__31974;
this.map__31969 = map__31969;
this.tag_type = tag_type;
this.input_checker31867 = input_checker31867;
this.G__31871 = G__31871;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.G__31869 = G__31869;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.map__31970 = map__31970;
this.G__31870 = G__31870;
this.meta31976 = meta31976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t31975.cljs$lang$type = true;
clustermap.components.tag_histogram.t31975.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t31975";
clustermap.components.tag_histogram.t31975.cljs$lang$ctorPrWriter = ((function (map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t31975");
});})(map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
;
clustermap.components.tag_histogram.t31975.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t31975.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
;
clustermap.components.tag_histogram.t31975.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t31975.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function (_,p__31978,___$1){var self__ = this;
var map__31979 = p__31978;var map__31979__$1 = ((cljs.core.seq_QMARK_.call(null,map__31979))?cljs.core.apply.call(null,cljs.core.hash_map,map__31979):map__31979);var map__31980 = cljs.core.get.call(null,map__31979__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31980__$1 = ((cljs.core.seq_QMARK_.call(null,map__31980))?cljs.core.apply.call(null,cljs.core.hash_map,map__31980):map__31980);var prev_query = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__31979__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
;
clustermap.components.tag_histogram.t31975.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t31975.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function (_,p__31981,p__31982){var self__ = this;
var map__31983 = p__31981;var map__31983__$1 = ((cljs.core.seq_QMARK_.call(null,map__31983))?cljs.core.apply.call(null,cljs.core.hash_map,map__31983):map__31983);var map__31984 = cljs.core.get.call(null,map__31983__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31984__$1 = ((cljs.core.seq_QMARK_.call(null,map__31984))?cljs.core.apply.call(null,cljs.core.hash_map,map__31984):map__31984);var next_query = cljs.core.get.call(null,map__31984__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__31984__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__31984__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__31984__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__31984__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__31983__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31985 = p__31982;var map__31985__$1 = ((cljs.core.seq_QMARK_.call(null,map__31985))?cljs.core.apply.call(null,cljs.core.hash_map,map__31985):map__31985);var fetch_tag_data_fn = cljs.core.get.call(null,map__31985__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__31985__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___32064 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32064,___$1,map__31983,map__31983__$1,map__31984,map__31984__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31985,map__31985__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32064,___$1,map__31983,map__31983__$1,map__31984,map__31984__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31985,map__31985__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function (state_32003){var state_val_32004 = (state_32003[(1)]);if((state_val_32004 === (5)))
{var inst_32001 = (state_32003[(2)]);var state_32003__$1 = state_32003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32003__$1,inst_32001);
} else
{if((state_val_32004 === (4)))
{var state_32003__$1 = state_32003;var statearr_32005_32065 = state_32003__$1;(statearr_32005_32065[(2)] = null);
(statearr_32005_32065[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32004 === (3)))
{var inst_31988 = (state_32003[(7)]);var inst_31990 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31991 = ["HISTOGRAM TAGS: ",inst_31988];var inst_31992 = (new cljs.core.PersistentVector(null,2,(5),inst_31990,inst_31991,null));var inst_31993 = cljs.core.clj__GT_js.call(null,inst_31992);var inst_31994 = console.log(inst_31993);var inst_31995 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31996 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_31997 = (new cljs.core.PersistentVector(null,1,(5),inst_31995,inst_31996,null));var inst_31998 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31997,inst_31988);var state_32003__$1 = (function (){var statearr_32006 = state_32003;(statearr_32006[(8)] = inst_31994);
return statearr_32006;
})();var statearr_32007_32066 = state_32003__$1;(statearr_32007_32066[(2)] = inst_31998);
(statearr_32007_32066[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32004 === (2)))
{var inst_31988 = (state_32003[(7)]);var inst_31988__$1 = (state_32003[(2)]);var state_32003__$1 = (function (){var statearr_32008 = state_32003;(statearr_32008[(7)] = inst_31988__$1);
return statearr_32008;
})();if(cljs.core.truth_(inst_31988__$1))
{var statearr_32009_32067 = state_32003__$1;(statearr_32009_32067[(1)] = (3));
} else
{var statearr_32010_32068 = state_32003__$1;(statearr_32010_32068[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32004 === (1)))
{var inst_31986 = fetch_tag_data_fn.call(null,next_tag_type);var state_32003__$1 = state_32003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32003__$1,(2),inst_31986);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32064,___$1,map__31983,map__31983__$1,map__31984,map__31984__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31985,map__31985__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
;return ((function (switch__9110__auto__,c__9125__auto___32064,___$1,map__31983,map__31983__$1,map__31984,map__31984__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31985,map__31985__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32014 = [null,null,null,null,null,null,null,null,null];(statearr_32014[(0)] = state_machine__9111__auto__);
(statearr_32014[(1)] = (1));
return statearr_32014;
});
var state_machine__9111__auto____1 = (function (state_32003){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32003);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32015){if((e32015 instanceof Object))
{var ex__9114__auto__ = e32015;var statearr_32016_32069 = state_32003;(statearr_32016_32069[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32003);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32015;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32070 = state_32003;
state_32003 = G__32070;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32003){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32064,___$1,map__31983,map__31983__$1,map__31984,map__31984__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31985,map__31985__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
})();var state__9127__auto__ = (function (){var statearr_32017 = f__9126__auto__.call(null);(statearr_32017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32064);
return statearr_32017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32064,___$1,map__31983,map__31983__$1,map__31984,map__31984__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31985,map__31985__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__31983,map__31983__$1,map__31984,map__31984__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31985,map__31985__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__31983,map__31983__$1,map__31984,map__31984__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31985,map__31985__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function (state_32040){var state_val_32041 = (state_32040[(1)]);if((state_val_32041 === (5)))
{var inst_32038 = (state_32040[(2)]);var state_32040__$1 = state_32040;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32040__$1,inst_32038);
} else
{if((state_val_32041 === (4)))
{var state_32040__$1 = state_32040;var statearr_32042_32071 = state_32040__$1;(statearr_32042_32071[(2)] = null);
(statearr_32042_32071[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32041 === (3)))
{var inst_32024 = (state_32040[(7)]);var inst_32026 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32027 = ["HISTOGRAM TAG AGGS: ",inst_32024];var inst_32028 = (new cljs.core.PersistentVector(null,2,(5),inst_32026,inst_32027,null));var inst_32029 = cljs.core.clj__GT_js.call(null,inst_32028);var inst_32030 = console.log(inst_32029);var inst_32031 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32032 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_32033 = (new cljs.core.PersistentVector(null,1,(5),inst_32031,inst_32032,null));var inst_32034 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32024);var inst_32035 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32033,inst_32034);var state_32040__$1 = (function (){var statearr_32043 = state_32040;(statearr_32043[(8)] = inst_32030);
return statearr_32043;
})();var statearr_32044_32072 = state_32040__$1;(statearr_32044_32072[(2)] = inst_32035);
(statearr_32044_32072[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32041 === (2)))
{var inst_32024 = (state_32040[(7)]);var inst_32024__$1 = (state_32040[(2)]);var state_32040__$1 = (function (){var statearr_32045 = state_32040;(statearr_32045[(7)] = inst_32024__$1);
return statearr_32045;
})();if(cljs.core.truth_(inst_32024__$1))
{var statearr_32046_32073 = state_32040__$1;(statearr_32046_32073[(1)] = (3));
} else
{var statearr_32047_32074 = state_32040__$1;(statearr_32047_32074[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32041 === (1)))
{var inst_32018 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32019 = [next_filter_spec];var inst_32020 = cljs.core.PersistentHashMap.fromArrays(inst_32018,inst_32019);var inst_32021 = cljs.core.merge.call(null,next_query,inst_32020);var inst_32022 = fetch_tag_agg_data_fn.call(null,inst_32021);var state_32040__$1 = state_32040;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32040__$1,(2),inst_32022);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__31983,map__31983__$1,map__31984,map__31984__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31985,map__31985__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__31983,map__31983__$1,map__31984,map__31984__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31985,map__31985__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32051 = [null,null,null,null,null,null,null,null,null];(statearr_32051[(0)] = state_machine__9111__auto__);
(statearr_32051[(1)] = (1));
return statearr_32051;
});
var state_machine__9111__auto____1 = (function (state_32040){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32040);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32052){if((e32052 instanceof Object))
{var ex__9114__auto__ = e32052;var statearr_32053_32075 = state_32040;(statearr_32053_32075[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32040);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32052;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32076 = state_32040;
state_32040 = G__32076;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32040){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__31983,map__31983__$1,map__31984,map__31984__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31985,map__31985__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
})();var state__9127__auto__ = (function (){var statearr_32054 = f__9126__auto__.call(null);(statearr_32054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32054;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__31983,map__31983__$1,map__31984,map__31984__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31985,map__31985__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
;
clustermap.components.tag_histogram.t31975.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t31975.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32055 = om.core.get_node.call(null,self__.owner,"chart");var G__32055__$1 = (((G__32055 == null))?null:jayq.core.$.call(null,G__32055));var G__32055__$2 = (((G__32055__$1 == null))?null:G__32055__$1.highcharts());var G__32055__$3 = (((G__32055__$2 == null))?null:G__32055__$2.reflow());return G__32055__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
);
});})(map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
;
clustermap.components.tag_histogram.t31975.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t31975.prototype.om$core$IRender$render$arity$1 = ((function (map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
;
clustermap.components.tag_histogram.t31975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function (_31977){var self__ = this;
var _31977__$1 = this;return self__.meta31976;
});})(map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
;
clustermap.components.tag_histogram.t31975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function (_31977,meta31976__$1){var self__ = this;
var _31977__$1 = this;return (new clustermap.components.tag_histogram.t31975(self__.query,self__.map__31971,self__.owner,self__.metrics,self__.G__31967,self__.map__31972,self__.map__31973,self__.output_schema31865,self__.G__31968,self__.tag_agg_data,self__.tag_histogram,self__.output_checker31868,self__.input_schema31866,self__.filter_spec,self__.map__31974,self__.map__31969,self__.tag_type,self__.input_checker31867,self__.G__31871,self__.validate__6034__auto__,self__.id,self__.G__31869,self__.opts,self__.tag_data,self__.ufv__,self__.map__31970,self__.G__31870,meta31976__$1));
});})(map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
;
clustermap.components.tag_histogram.__GT_t31975 = ((function (map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060){
return (function __GT_t31975(query__$2,map__31971__$2,owner__$3,metrics__$2,G__31967__$2,map__31972__$2,map__31973__$2,output_schema31865__$1,G__31968__$2,tag_agg_data__$2,tag_histogram__$3,output_checker31868__$1,input_schema31866__$1,filter_spec__$2,map__31974__$2,map__31969__$2,tag_type__$2,input_checker31867__$1,G__31871__$1,validate__6034__auto____$1,id__$2,G__31869__$1,opts__$2,tag_data__$2,ufv____$1,map__31970__$2,G__31870__$1,meta31976){return (new clustermap.components.tag_histogram.t31975(query__$2,map__31971__$2,owner__$3,metrics__$2,G__31967__$2,map__31972__$2,map__31973__$2,output_schema31865__$1,G__31968__$2,tag_agg_data__$2,tag_histogram__$3,output_checker31868__$1,input_schema31866__$1,filter_spec__$2,map__31974__$2,map__31969__$2,tag_type__$2,input_checker31867__$1,G__31871__$1,validate__6034__auto____$1,id__$2,G__31869__$1,opts__$2,tag_data__$2,ufv____$1,map__31970__$2,G__31870__$1,meta31976));
});})(map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31974,map__31974__$1,opts__$1,id__$1,G__31967,map__31969,map__31969__$1,map__31970,map__31970__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31968,map__31971,map__31971__$1,opts,id,validate__6034__auto__,ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
;
}
return (new clustermap.components.tag_histogram.t31975(query__$1,map__31971__$1,owner__$2,metrics__$1,G__31967__$1,map__31972__$1,map__31973__$1,output_schema31865_32057,G__31968__$1,tag_agg_data__$1,tag_histogram__$2,output_checker31868_32060,input_schema31866_32058,filter_spec__$1,map__31974__$1,map__31969__$1,tag_type__$1,input_checker31867_32059,G__31871,validate__6034__auto__,id__$1,G__31869,opts__$1,tag_data__$1,ufv___32056,map__31970__$1,G__31870,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32077 = output_checker31868_32060.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32077))
{var error__6036__auto___32078 = temp__4126__auto___32077;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32078)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32078,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31865_32057,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32056,output_schema31865_32057,input_schema31866_32058,input_checker31867_32059,output_checker31868_32060))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema31865_32057,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31866_32058], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m31864){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m31864);
});
__GT_tag_histogram = function(cursor__7850__auto__,m31864){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m31864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
