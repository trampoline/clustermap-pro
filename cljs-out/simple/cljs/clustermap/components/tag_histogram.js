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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31692,p__31693){var map__31736 = p__31692;var map__31736__$1 = ((cljs.core.seq_QMARK_.call(null,map__31736))?cljs.core.apply.call(null,cljs.core.hash_map,map__31736):map__31736);var tag_agg_data = cljs.core.get.call(null,map__31736__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__31736__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__31736__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__31736__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var bar_width = cljs.core.get.call(null,map__31736__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__31736__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__31736__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__31737 = p__31693;var map__31737__$1 = ((cljs.core.seq_QMARK_.call(null,map__31737))?cljs.core.apply.call(null,cljs.core.hash_map,map__31737):map__31737);var opts = map__31737__$1;var y1_title = cljs.core.get.call(null,map__31737__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31737__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title){
return (function iter__31738(s__31739){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title){
return (function (){var s__31739__$1 = s__31739;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31739__$1);if(temp__4126__auto__)
{var s__31739__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31739__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31739__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31741 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31740 = (0);while(true){
if((i__31740 < size__4376__auto__))
{var map__31752 = cljs.core._nth.call(null,c__4375__auto__,i__31740);var map__31752__$1 = ((cljs.core.seq_QMARK_.call(null,map__31752))?cljs.core.apply.call(null,cljs.core.hash_map,map__31752):map__31752);var metric_spec = map__31752__$1;var title = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31741,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31740,map__31752,map__31752__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31741,s__31739__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title){
return (function iter__31753(s__31754){return (new cljs.core.LazySeq(null,((function (i__31740,map__31752,map__31752__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31741,s__31739__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title){
return (function (){var s__31754__$1 = s__31754;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31754__$1);if(temp__4126__auto____$1)
{var s__31754__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31754__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31754__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31756 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31755 = (0);while(true){
if((i__31755 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31755);cljs.core.chunk_append.call(null,b__31756,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31778 = (i__31755 + (1));
i__31755 = G__31778;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31756),iter__31753.call(null,cljs.core.chunk_rest.call(null,s__31754__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31756),null);
}
} else
{var record = cljs.core.first.call(null,s__31754__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31753.call(null,cljs.core.rest.call(null,s__31754__$2)));
}
} else
{return null;
}
break;
}
});})(i__31740,map__31752,map__31752__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31741,s__31739__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31740,map__31752,map__31752__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31741,s__31739__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__31779 = (i__31740 + (1));
i__31740 = G__31779;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31741),iter__31738.call(null,cljs.core.chunk_rest.call(null,s__31739__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31741),null);
}
} else
{var map__31757 = cljs.core.first.call(null,s__31739__$2);var map__31757__$1 = ((cljs.core.seq_QMARK_.call(null,map__31757))?cljs.core.apply.call(null,cljs.core.hash_map,map__31757):map__31757);var metric_spec = map__31757__$1;var title = cljs.core.get.call(null,map__31757__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31757__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31757,map__31757__$1,metric_spec,title,metric,s__31739__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title){
return (function iter__31758(s__31759){return (new cljs.core.LazySeq(null,((function (map__31757,map__31757__$1,metric_spec,title,metric,s__31739__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title){
return (function (){var s__31759__$1 = s__31759;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31759__$1);if(temp__4126__auto____$1)
{var s__31759__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31759__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31759__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31761 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31760 = (0);while(true){
if((i__31760 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31760);cljs.core.chunk_append.call(null,b__31761,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31780 = (i__31760 + (1));
i__31760 = G__31780;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31761),iter__31758.call(null,cljs.core.chunk_rest.call(null,s__31759__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31761),null);
}
} else
{var record = cljs.core.first.call(null,s__31759__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31758.call(null,cljs.core.rest.call(null,s__31759__$2)));
}
} else
{return null;
}
break;
}
});})(map__31757,map__31757__$1,metric_spec,title,metric,s__31739__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31757,map__31757__$1,metric_spec,title,metric,s__31739__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31738.call(null,cljs.core.rest.call(null,s__31739__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title){
return (function iter__31762(s__31763){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title){
return (function (){var s__31763__$1 = s__31763;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31763__$1);if(temp__4126__auto__)
{var s__31763__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31763__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31763__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31765 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31764 = (0);while(true){
if((i__31764 < size__4376__auto__))
{var map__31768 = cljs.core._nth.call(null,c__4375__auto__,i__31764);var map__31768__$1 = ((cljs.core.seq_QMARK_.call(null,map__31768))?cljs.core.apply.call(null,cljs.core.hash_map,map__31768):map__31768);var label_formatter = cljs.core.get.call(null,map__31768__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31768__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31765,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__31781 = (i__31764 + (1));
i__31764 = G__31781;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31765),iter__31762.call(null,cljs.core.chunk_rest.call(null,s__31763__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31765),null);
}
} else
{var map__31769 = cljs.core.first.call(null,s__31763__$2);var map__31769__$1 = ((cljs.core.seq_QMARK_.call(null,map__31769))?cljs.core.apply.call(null,cljs.core.hash_map,map__31769):map__31769);var label_formatter = cljs.core.get.call(null,map__31769__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31769__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31762.call(null,cljs.core.rest.call(null,s__31763__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title){
return (function iter__31770(s__31771){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title){
return (function (){var s__31771__$1 = s__31771;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31771__$1);if(temp__4126__auto__)
{var s__31771__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31771__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31771__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31773 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31772 = (0);while(true){
if((i__31772 < size__4376__auto__))
{var vec__31776 = cljs.core._nth.call(null,c__4375__auto__,i__31772);var y = cljs.core.nth.call(null,vec__31776,(0),null);var i = cljs.core.nth.call(null,vec__31776,(1),null);cljs.core.chunk_append.call(null,b__31773,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__31782 = (i__31772 + (1));
i__31772 = G__31782;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31773),iter__31770.call(null,cljs.core.chunk_rest.call(null,s__31771__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31773),null);
}
} else
{var vec__31777 = cljs.core.first.call(null,s__31771__$2);var y = cljs.core.nth.call(null,vec__31777,(0),null);var i = cljs.core.nth.call(null,vec__31777,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31770.call(null,cljs.core.rest.call(null,s__31771__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31736,map__31736__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31737,map__31737__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___31975 = schema.utils.use_fn_validation;var output_schema31784_31976 = schema.core.Any;var input_schema31785_31977 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker31786_31978 = schema.core.checker.call(null,input_schema31785_31977);var output_checker31787_31979 = schema.core.checker.call(null,output_schema31784_31976);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function tag_histogram(G__31788,G__31789,G__31790){var validate__6034__auto__ = ufv___31975.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31980 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31788,G__31789,G__31790], null);var temp__4126__auto___31981 = input_checker31786_31978.call(null,args__6035__auto___31980);if(cljs.core.truth_(temp__4126__auto___31981))
{var error__6036__auto___31982 = temp__4126__auto___31981;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31982)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31982,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31980,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31785_31977,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__31886 = G__31788;var map__31888 = G__31886;var map__31888__$1 = ((cljs.core.seq_QMARK_.call(null,map__31888))?cljs.core.apply.call(null,cljs.core.hash_map,map__31888):map__31888);var map__31889 = cljs.core.get.call(null,map__31888__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31889__$1 = ((cljs.core.seq_QMARK_.call(null,map__31889))?cljs.core.apply.call(null,cljs.core.hash_map,map__31889):map__31889);var tag_histogram__$1 = map__31889__$1;var query = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__31888__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__31789;var G__31887 = G__31790;var map__31890 = G__31887;var map__31890__$1 = ((cljs.core.seq_QMARK_.call(null,map__31890))?cljs.core.apply.call(null,cljs.core.hash_map,map__31890):map__31890);var opts = map__31890__$1;var id = cljs.core.get.call(null,map__31890__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__31886__$1 = G__31886;var owner__$1 = owner;var G__31887__$1 = G__31887;while(true){
var map__31891 = G__31886__$1;var map__31891__$1 = ((cljs.core.seq_QMARK_.call(null,map__31891))?cljs.core.apply.call(null,cljs.core.hash_map,map__31891):map__31891);var map__31892 = cljs.core.get.call(null,map__31891__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31892__$1 = ((cljs.core.seq_QMARK_.call(null,map__31892))?cljs.core.apply.call(null,cljs.core.hash_map,map__31892):map__31892);var tag_histogram__$2 = map__31892__$1;var query__$1 = cljs.core.get.call(null,map__31892__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__31892__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__31892__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__31892__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__31892__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__31891__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__31893 = G__31887__$1;var map__31893__$1 = ((cljs.core.seq_QMARK_.call(null,map__31893))?cljs.core.apply.call(null,cljs.core.hash_map,map__31893):map__31893);var opts__$1 = map__31893__$1;var id__$1 = cljs.core.get.call(null,map__31893__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t31894 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t31894 = (function (query,map__31891,map__31888,map__31890,owner,metrics,map__31889,input_checker31786,G__31887,tag_agg_data,tag_histogram,input_schema31785,G__31788,G__31886,filter_spec,output_checker31787,G__31790,map__31892,tag_type,G__31789,validate__6034__auto__,id,opts,tag_data,ufv__,output_schema31784,map__31893,meta31895){
this.query = query;
this.map__31891 = map__31891;
this.map__31888 = map__31888;
this.map__31890 = map__31890;
this.owner = owner;
this.metrics = metrics;
this.map__31889 = map__31889;
this.input_checker31786 = input_checker31786;
this.G__31887 = G__31887;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.input_schema31785 = input_schema31785;
this.G__31788 = G__31788;
this.G__31886 = G__31886;
this.filter_spec = filter_spec;
this.output_checker31787 = output_checker31787;
this.G__31790 = G__31790;
this.map__31892 = map__31892;
this.tag_type = tag_type;
this.G__31789 = G__31789;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.output_schema31784 = output_schema31784;
this.map__31893 = map__31893;
this.meta31895 = meta31895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t31894.cljs$lang$type = true;
clustermap.components.tag_histogram.t31894.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t31894";
clustermap.components.tag_histogram.t31894.cljs$lang$ctorPrWriter = ((function (map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t31894");
});})(map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
;
clustermap.components.tag_histogram.t31894.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t31894.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
;
clustermap.components.tag_histogram.t31894.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t31894.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function (_,p__31897,___$1){var self__ = this;
var map__31898 = p__31897;var map__31898__$1 = ((cljs.core.seq_QMARK_.call(null,map__31898))?cljs.core.apply.call(null,cljs.core.hash_map,map__31898):map__31898);var map__31899 = cljs.core.get.call(null,map__31898__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31899__$1 = ((cljs.core.seq_QMARK_.call(null,map__31899))?cljs.core.apply.call(null,cljs.core.hash_map,map__31899):map__31899);var prev_query = cljs.core.get.call(null,map__31899__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__31899__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__31899__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__31899__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__31898__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
;
clustermap.components.tag_histogram.t31894.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t31894.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function (_,p__31900,p__31901){var self__ = this;
var map__31902 = p__31900;var map__31902__$1 = ((cljs.core.seq_QMARK_.call(null,map__31902))?cljs.core.apply.call(null,cljs.core.hash_map,map__31902):map__31902);var map__31903 = cljs.core.get.call(null,map__31902__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31903__$1 = ((cljs.core.seq_QMARK_.call(null,map__31903))?cljs.core.apply.call(null,cljs.core.hash_map,map__31903):map__31903);var next_query = cljs.core.get.call(null,map__31903__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__31903__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__31903__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__31903__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__31903__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__31902__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31904 = p__31901;var map__31904__$1 = ((cljs.core.seq_QMARK_.call(null,map__31904))?cljs.core.apply.call(null,cljs.core.hash_map,map__31904):map__31904);var fetch_tag_data_fn = cljs.core.get.call(null,map__31904__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__31904__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___31983 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___31983,___$1,map__31902,map__31902__$1,map__31903,map__31903__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31904,map__31904__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___31983,___$1,map__31902,map__31902__$1,map__31903,map__31903__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31904,map__31904__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function (state_31922){var state_val_31923 = (state_31922[(1)]);if((state_val_31923 === (5)))
{var inst_31920 = (state_31922[(2)]);var state_31922__$1 = state_31922;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31922__$1,inst_31920);
} else
{if((state_val_31923 === (4)))
{var state_31922__$1 = state_31922;var statearr_31924_31984 = state_31922__$1;(statearr_31924_31984[(2)] = null);
(statearr_31924_31984[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31923 === (3)))
{var inst_31907 = (state_31922[(7)]);var inst_31909 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31910 = ["HISTOGRAM TAGS: ",inst_31907];var inst_31911 = (new cljs.core.PersistentVector(null,2,(5),inst_31909,inst_31910,null));var inst_31912 = cljs.core.clj__GT_js.call(null,inst_31911);var inst_31913 = console.log(inst_31912);var inst_31914 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31915 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_31916 = (new cljs.core.PersistentVector(null,1,(5),inst_31914,inst_31915,null));var inst_31917 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31916,inst_31907);var state_31922__$1 = (function (){var statearr_31925 = state_31922;(statearr_31925[(8)] = inst_31913);
return statearr_31925;
})();var statearr_31926_31985 = state_31922__$1;(statearr_31926_31985[(2)] = inst_31917);
(statearr_31926_31985[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31923 === (2)))
{var inst_31907 = (state_31922[(7)]);var inst_31907__$1 = (state_31922[(2)]);var state_31922__$1 = (function (){var statearr_31927 = state_31922;(statearr_31927[(7)] = inst_31907__$1);
return statearr_31927;
})();if(cljs.core.truth_(inst_31907__$1))
{var statearr_31928_31986 = state_31922__$1;(statearr_31928_31986[(1)] = (3));
} else
{var statearr_31929_31987 = state_31922__$1;(statearr_31929_31987[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31923 === (1)))
{var inst_31905 = fetch_tag_data_fn.call(null,next_tag_type);var state_31922__$1 = state_31922;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31922__$1,(2),inst_31905);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___31983,___$1,map__31902,map__31902__$1,map__31903,map__31903__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31904,map__31904__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
;return ((function (switch__9110__auto__,c__9125__auto___31983,___$1,map__31902,map__31902__$1,map__31903,map__31903__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31904,map__31904__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31933 = [null,null,null,null,null,null,null,null,null];(statearr_31933[(0)] = state_machine__9111__auto__);
(statearr_31933[(1)] = (1));
return statearr_31933;
});
var state_machine__9111__auto____1 = (function (state_31922){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31922);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31934){if((e31934 instanceof Object))
{var ex__9114__auto__ = e31934;var statearr_31935_31988 = state_31922;(statearr_31935_31988[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31922);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31934;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31989 = state_31922;
state_31922 = G__31989;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31922){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___31983,___$1,map__31902,map__31902__$1,map__31903,map__31903__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31904,map__31904__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
})();var state__9127__auto__ = (function (){var statearr_31936 = f__9126__auto__.call(null);(statearr_31936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___31983);
return statearr_31936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___31983,___$1,map__31902,map__31902__$1,map__31903,map__31903__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31904,map__31904__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__31902,map__31902__$1,map__31903,map__31903__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31904,map__31904__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__31902,map__31902__$1,map__31903,map__31903__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31904,map__31904__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function (state_31959){var state_val_31960 = (state_31959[(1)]);if((state_val_31960 === (5)))
{var inst_31957 = (state_31959[(2)]);var state_31959__$1 = state_31959;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31959__$1,inst_31957);
} else
{if((state_val_31960 === (4)))
{var state_31959__$1 = state_31959;var statearr_31961_31990 = state_31959__$1;(statearr_31961_31990[(2)] = null);
(statearr_31961_31990[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31960 === (3)))
{var inst_31943 = (state_31959[(7)]);var inst_31945 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31946 = ["HISTOGRAM TAG AGGS: ",inst_31943];var inst_31947 = (new cljs.core.PersistentVector(null,2,(5),inst_31945,inst_31946,null));var inst_31948 = cljs.core.clj__GT_js.call(null,inst_31947);var inst_31949 = console.log(inst_31948);var inst_31950 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31951 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_31952 = (new cljs.core.PersistentVector(null,1,(5),inst_31950,inst_31951,null));var inst_31953 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_31943);var inst_31954 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31952,inst_31953);var state_31959__$1 = (function (){var statearr_31962 = state_31959;(statearr_31962[(8)] = inst_31949);
return statearr_31962;
})();var statearr_31963_31991 = state_31959__$1;(statearr_31963_31991[(2)] = inst_31954);
(statearr_31963_31991[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31960 === (2)))
{var inst_31943 = (state_31959[(7)]);var inst_31943__$1 = (state_31959[(2)]);var state_31959__$1 = (function (){var statearr_31964 = state_31959;(statearr_31964[(7)] = inst_31943__$1);
return statearr_31964;
})();if(cljs.core.truth_(inst_31943__$1))
{var statearr_31965_31992 = state_31959__$1;(statearr_31965_31992[(1)] = (3));
} else
{var statearr_31966_31993 = state_31959__$1;(statearr_31966_31993[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31960 === (1)))
{var inst_31937 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_31938 = [next_filter_spec];var inst_31939 = cljs.core.PersistentHashMap.fromArrays(inst_31937,inst_31938);var inst_31940 = cljs.core.merge.call(null,next_query,inst_31939);var inst_31941 = fetch_tag_agg_data_fn.call(null,inst_31940);var state_31959__$1 = state_31959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31959__$1,(2),inst_31941);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__31902,map__31902__$1,map__31903,map__31903__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31904,map__31904__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__31902,map__31902__$1,map__31903,map__31903__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31904,map__31904__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31970 = [null,null,null,null,null,null,null,null,null];(statearr_31970[(0)] = state_machine__9111__auto__);
(statearr_31970[(1)] = (1));
return statearr_31970;
});
var state_machine__9111__auto____1 = (function (state_31959){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31959);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31971){if((e31971 instanceof Object))
{var ex__9114__auto__ = e31971;var statearr_31972_31994 = state_31959;(statearr_31972_31994[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31959);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31971;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31995 = state_31959;
state_31959 = G__31995;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31959){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__31902,map__31902__$1,map__31903,map__31903__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31904,map__31904__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
})();var state__9127__auto__ = (function (){var statearr_31973 = f__9126__auto__.call(null);(statearr_31973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__31902,map__31902__$1,map__31903,map__31903__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31904,map__31904__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
;
clustermap.components.tag_histogram.t31894.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t31894.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__31974 = om.core.get_node.call(null,self__.owner,"chart");var G__31974__$1 = (((G__31974 == null))?null:jayq.core.$.call(null,G__31974));var G__31974__$2 = (((G__31974__$1 == null))?null:G__31974__$1.highcharts());var G__31974__$3 = (((G__31974__$2 == null))?null:G__31974__$2.reflow());return G__31974__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
);
});})(map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
;
clustermap.components.tag_histogram.t31894.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t31894.prototype.om$core$IRender$render$arity$1 = ((function (map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
;
clustermap.components.tag_histogram.t31894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function (_31896){var self__ = this;
var _31896__$1 = this;return self__.meta31895;
});})(map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
;
clustermap.components.tag_histogram.t31894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function (_31896,meta31895__$1){var self__ = this;
var _31896__$1 = this;return (new clustermap.components.tag_histogram.t31894(self__.query,self__.map__31891,self__.map__31888,self__.map__31890,self__.owner,self__.metrics,self__.map__31889,self__.input_checker31786,self__.G__31887,self__.tag_agg_data,self__.tag_histogram,self__.input_schema31785,self__.G__31788,self__.G__31886,self__.filter_spec,self__.output_checker31787,self__.G__31790,self__.map__31892,self__.tag_type,self__.G__31789,self__.validate__6034__auto__,self__.id,self__.opts,self__.tag_data,self__.ufv__,self__.output_schema31784,self__.map__31893,meta31895__$1));
});})(map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
;
clustermap.components.tag_histogram.__GT_t31894 = ((function (map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979){
return (function __GT_t31894(query__$2,map__31891__$2,map__31888__$2,map__31890__$2,owner__$3,metrics__$2,map__31889__$2,input_checker31786__$1,G__31887__$2,tag_agg_data__$2,tag_histogram__$3,input_schema31785__$1,G__31788__$1,G__31886__$2,filter_spec__$2,output_checker31787__$1,G__31790__$1,map__31892__$2,tag_type__$2,G__31789__$1,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,ufv____$1,output_schema31784__$1,map__31893__$2,meta31895){return (new clustermap.components.tag_histogram.t31894(query__$2,map__31891__$2,map__31888__$2,map__31890__$2,owner__$3,metrics__$2,map__31889__$2,input_checker31786__$1,G__31887__$2,tag_agg_data__$2,tag_histogram__$3,input_schema31785__$1,G__31788__$1,G__31886__$2,filter_spec__$2,output_checker31787__$1,G__31790__$1,map__31892__$2,tag_type__$2,G__31789__$1,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,ufv____$1,output_schema31784__$1,map__31893__$2,meta31895));
});})(map__31891,map__31891__$1,map__31892,map__31892__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31893,map__31893__$1,opts__$1,id__$1,G__31886,map__31888,map__31888__$1,map__31889,map__31889__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31887,map__31890,map__31890__$1,opts,id,validate__6034__auto__,ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
;
}
return (new clustermap.components.tag_histogram.t31894(query__$1,map__31891__$1,map__31888__$1,map__31890__$1,owner__$2,metrics__$1,map__31889__$1,input_checker31786_31978,G__31887__$1,tag_agg_data__$1,tag_histogram__$2,input_schema31785_31977,G__31788,G__31886__$1,filter_spec__$1,output_checker31787_31979,G__31790,map__31892__$1,tag_type__$1,G__31789,validate__6034__auto__,id__$1,opts__$1,tag_data__$1,ufv___31975,output_schema31784_31976,map__31893__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31996 = output_checker31787_31979.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31996))
{var error__6036__auto___31997 = temp__4126__auto___31996;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31997)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31997,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31784_31976,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___31975,output_schema31784_31976,input_schema31785_31977,input_checker31786_31978,output_checker31787_31979))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema31784_31976,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31785_31977], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m31783){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m31783);
});
__GT_tag_histogram = function(cursor__7850__auto__,m31783){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m31783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
