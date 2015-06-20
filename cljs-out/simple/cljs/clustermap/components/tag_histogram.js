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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31776,p__31777){var map__31820 = p__31776;var map__31820__$1 = ((cljs.core.seq_QMARK_.call(null,map__31820))?cljs.core.apply.call(null,cljs.core.hash_map,map__31820):map__31820);var tag_agg_data = cljs.core.get.call(null,map__31820__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__31820__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__31820__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__31820__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var bar_width = cljs.core.get.call(null,map__31820__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__31820__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__31820__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__31821 = p__31777;var map__31821__$1 = ((cljs.core.seq_QMARK_.call(null,map__31821))?cljs.core.apply.call(null,cljs.core.hash_map,map__31821):map__31821);var opts = map__31821__$1;var y1_title = cljs.core.get.call(null,map__31821__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31821__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title){
return (function iter__31822(s__31823){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title){
return (function (){var s__31823__$1 = s__31823;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31823__$1);if(temp__4126__auto__)
{var s__31823__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31823__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31823__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31825 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31824 = (0);while(true){
if((i__31824 < size__4376__auto__))
{var map__31836 = cljs.core._nth.call(null,c__4375__auto__,i__31824);var map__31836__$1 = ((cljs.core.seq_QMARK_.call(null,map__31836))?cljs.core.apply.call(null,cljs.core.hash_map,map__31836):map__31836);var metric_spec = map__31836__$1;var title = cljs.core.get.call(null,map__31836__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31836__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31825,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31824,map__31836,map__31836__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31825,s__31823__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title){
return (function iter__31837(s__31838){return (new cljs.core.LazySeq(null,((function (i__31824,map__31836,map__31836__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31825,s__31823__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title){
return (function (){var s__31838__$1 = s__31838;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31838__$1);if(temp__4126__auto____$1)
{var s__31838__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31838__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31838__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31840 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31839 = (0);while(true){
if((i__31839 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31839);cljs.core.chunk_append.call(null,b__31840,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31862 = (i__31839 + (1));
i__31839 = G__31862;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31840),iter__31837.call(null,cljs.core.chunk_rest.call(null,s__31838__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31840),null);
}
} else
{var record = cljs.core.first.call(null,s__31838__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31837.call(null,cljs.core.rest.call(null,s__31838__$2)));
}
} else
{return null;
}
break;
}
});})(i__31824,map__31836,map__31836__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31825,s__31823__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31824,map__31836,map__31836__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31825,s__31823__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__31863 = (i__31824 + (1));
i__31824 = G__31863;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31825),iter__31822.call(null,cljs.core.chunk_rest.call(null,s__31823__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31825),null);
}
} else
{var map__31841 = cljs.core.first.call(null,s__31823__$2);var map__31841__$1 = ((cljs.core.seq_QMARK_.call(null,map__31841))?cljs.core.apply.call(null,cljs.core.hash_map,map__31841):map__31841);var metric_spec = map__31841__$1;var title = cljs.core.get.call(null,map__31841__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31841__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31841,map__31841__$1,metric_spec,title,metric,s__31823__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title){
return (function iter__31842(s__31843){return (new cljs.core.LazySeq(null,((function (map__31841,map__31841__$1,metric_spec,title,metric,s__31823__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title){
return (function (){var s__31843__$1 = s__31843;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31843__$1);if(temp__4126__auto____$1)
{var s__31843__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31843__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31843__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31845 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31844 = (0);while(true){
if((i__31844 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31844);cljs.core.chunk_append.call(null,b__31845,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31864 = (i__31844 + (1));
i__31844 = G__31864;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31845),iter__31842.call(null,cljs.core.chunk_rest.call(null,s__31843__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31845),null);
}
} else
{var record = cljs.core.first.call(null,s__31843__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31842.call(null,cljs.core.rest.call(null,s__31843__$2)));
}
} else
{return null;
}
break;
}
});})(map__31841,map__31841__$1,metric_spec,title,metric,s__31823__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31841,map__31841__$1,metric_spec,title,metric,s__31823__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31822.call(null,cljs.core.rest.call(null,s__31823__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title){
return (function iter__31846(s__31847){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title){
return (function (){var s__31847__$1 = s__31847;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31847__$1);if(temp__4126__auto__)
{var s__31847__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31847__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31847__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31849 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31848 = (0);while(true){
if((i__31848 < size__4376__auto__))
{var map__31852 = cljs.core._nth.call(null,c__4375__auto__,i__31848);var map__31852__$1 = ((cljs.core.seq_QMARK_.call(null,map__31852))?cljs.core.apply.call(null,cljs.core.hash_map,map__31852):map__31852);var label_formatter = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31849,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__31865 = (i__31848 + (1));
i__31848 = G__31865;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31849),iter__31846.call(null,cljs.core.chunk_rest.call(null,s__31847__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31849),null);
}
} else
{var map__31853 = cljs.core.first.call(null,s__31847__$2);var map__31853__$1 = ((cljs.core.seq_QMARK_.call(null,map__31853))?cljs.core.apply.call(null,cljs.core.hash_map,map__31853):map__31853);var label_formatter = cljs.core.get.call(null,map__31853__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31853__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31846.call(null,cljs.core.rest.call(null,s__31847__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title){
return (function iter__31854(s__31855){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title){
return (function (){var s__31855__$1 = s__31855;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31855__$1);if(temp__4126__auto__)
{var s__31855__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31855__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31855__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31857 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31856 = (0);while(true){
if((i__31856 < size__4376__auto__))
{var vec__31860 = cljs.core._nth.call(null,c__4375__auto__,i__31856);var y = cljs.core.nth.call(null,vec__31860,(0),null);var i = cljs.core.nth.call(null,vec__31860,(1),null);cljs.core.chunk_append.call(null,b__31857,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__31866 = (i__31856 + (1));
i__31856 = G__31866;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31857),iter__31854.call(null,cljs.core.chunk_rest.call(null,s__31855__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31857),null);
}
} else
{var vec__31861 = cljs.core.first.call(null,s__31855__$2);var y = cljs.core.nth.call(null,vec__31861,(0),null);var i = cljs.core.nth.call(null,vec__31861,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31854.call(null,cljs.core.rest.call(null,s__31855__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31820,map__31820__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31821,map__31821__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___32059 = schema.utils.use_fn_validation;var output_schema31868_32060 = schema.core.Any;var input_schema31869_32061 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker31870_32062 = schema.core.checker.call(null,input_schema31869_32061);var output_checker31871_32063 = schema.core.checker.call(null,output_schema31868_32060);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function tag_histogram(G__31872,G__31873,G__31874){var validate__6034__auto__ = ufv___32059.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32064 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31872,G__31873,G__31874], null);var temp__4126__auto___32065 = input_checker31870_32062.call(null,args__6035__auto___32064);if(cljs.core.truth_(temp__4126__auto___32065))
{var error__6036__auto___32066 = temp__4126__auto___32065;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32066)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32066,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32064,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31869_32061,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__31970 = G__31872;var map__31972 = G__31970;var map__31972__$1 = ((cljs.core.seq_QMARK_.call(null,map__31972))?cljs.core.apply.call(null,cljs.core.hash_map,map__31972):map__31972);var map__31973 = cljs.core.get.call(null,map__31972__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31973__$1 = ((cljs.core.seq_QMARK_.call(null,map__31973))?cljs.core.apply.call(null,cljs.core.hash_map,map__31973):map__31973);var tag_histogram__$1 = map__31973__$1;var query = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__31972__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__31873;var G__31971 = G__31874;var map__31974 = G__31971;var map__31974__$1 = ((cljs.core.seq_QMARK_.call(null,map__31974))?cljs.core.apply.call(null,cljs.core.hash_map,map__31974):map__31974);var opts = map__31974__$1;var id = cljs.core.get.call(null,map__31974__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__31970__$1 = G__31970;var owner__$1 = owner;var G__31971__$1 = G__31971;while(true){
var map__31975 = G__31970__$1;var map__31975__$1 = ((cljs.core.seq_QMARK_.call(null,map__31975))?cljs.core.apply.call(null,cljs.core.hash_map,map__31975):map__31975);var map__31976 = cljs.core.get.call(null,map__31975__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31976__$1 = ((cljs.core.seq_QMARK_.call(null,map__31976))?cljs.core.apply.call(null,cljs.core.hash_map,map__31976):map__31976);var tag_histogram__$2 = map__31976__$1;var query__$1 = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__31975__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__31977 = G__31971__$1;var map__31977__$1 = ((cljs.core.seq_QMARK_.call(null,map__31977))?cljs.core.apply.call(null,cljs.core.hash_map,map__31977):map__31977);var opts__$1 = map__31977__$1;var id__$1 = cljs.core.get.call(null,map__31977__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t31978 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t31978 = (function (map__31977,query,owner,metrics,map__31972,input_checker31870,G__31874,map__31973,G__31971,tag_agg_data,G__31873,tag_histogram,output_schema31868,filter_spec,input_schema31869,G__31970,output_checker31871,map__31974,tag_type,G__31872,map__31975,map__31976,validate__6034__auto__,id,opts,tag_data,ufv__,meta31979){
this.map__31977 = map__31977;
this.query = query;
this.owner = owner;
this.metrics = metrics;
this.map__31972 = map__31972;
this.input_checker31870 = input_checker31870;
this.G__31874 = G__31874;
this.map__31973 = map__31973;
this.G__31971 = G__31971;
this.tag_agg_data = tag_agg_data;
this.G__31873 = G__31873;
this.tag_histogram = tag_histogram;
this.output_schema31868 = output_schema31868;
this.filter_spec = filter_spec;
this.input_schema31869 = input_schema31869;
this.G__31970 = G__31970;
this.output_checker31871 = output_checker31871;
this.map__31974 = map__31974;
this.tag_type = tag_type;
this.G__31872 = G__31872;
this.map__31975 = map__31975;
this.map__31976 = map__31976;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.meta31979 = meta31979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t31978.cljs$lang$type = true;
clustermap.components.tag_histogram.t31978.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t31978";
clustermap.components.tag_histogram.t31978.cljs$lang$ctorPrWriter = ((function (map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t31978");
});})(map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
;
clustermap.components.tag_histogram.t31978.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t31978.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
;
clustermap.components.tag_histogram.t31978.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t31978.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function (_,p__31981,___$1){var self__ = this;
var map__31982 = p__31981;var map__31982__$1 = ((cljs.core.seq_QMARK_.call(null,map__31982))?cljs.core.apply.call(null,cljs.core.hash_map,map__31982):map__31982);var map__31983 = cljs.core.get.call(null,map__31982__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31983__$1 = ((cljs.core.seq_QMARK_.call(null,map__31983))?cljs.core.apply.call(null,cljs.core.hash_map,map__31983):map__31983);var prev_query = cljs.core.get.call(null,map__31983__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__31983__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__31983__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__31983__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__31982__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
;
clustermap.components.tag_histogram.t31978.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t31978.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function (_,p__31984,p__31985){var self__ = this;
var map__31986 = p__31984;var map__31986__$1 = ((cljs.core.seq_QMARK_.call(null,map__31986))?cljs.core.apply.call(null,cljs.core.hash_map,map__31986):map__31986);var map__31987 = cljs.core.get.call(null,map__31986__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31987__$1 = ((cljs.core.seq_QMARK_.call(null,map__31987))?cljs.core.apply.call(null,cljs.core.hash_map,map__31987):map__31987);var next_query = cljs.core.get.call(null,map__31987__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__31987__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__31987__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__31987__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__31987__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__31986__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31988 = p__31985;var map__31988__$1 = ((cljs.core.seq_QMARK_.call(null,map__31988))?cljs.core.apply.call(null,cljs.core.hash_map,map__31988):map__31988);var fetch_tag_data_fn = cljs.core.get.call(null,map__31988__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__31988__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___32067 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32067,___$1,map__31986,map__31986__$1,map__31987,map__31987__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31988,map__31988__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32067,___$1,map__31986,map__31986__$1,map__31987,map__31987__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31988,map__31988__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function (state_32006){var state_val_32007 = (state_32006[(1)]);if((state_val_32007 === (5)))
{var inst_32004 = (state_32006[(2)]);var state_32006__$1 = state_32006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32006__$1,inst_32004);
} else
{if((state_val_32007 === (4)))
{var state_32006__$1 = state_32006;var statearr_32008_32068 = state_32006__$1;(statearr_32008_32068[(2)] = null);
(statearr_32008_32068[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32007 === (3)))
{var inst_31991 = (state_32006[(7)]);var inst_31993 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31994 = ["HISTOGRAM TAGS: ",inst_31991];var inst_31995 = (new cljs.core.PersistentVector(null,2,(5),inst_31993,inst_31994,null));var inst_31996 = cljs.core.clj__GT_js.call(null,inst_31995);var inst_31997 = console.log(inst_31996);var inst_31998 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31999 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_32000 = (new cljs.core.PersistentVector(null,1,(5),inst_31998,inst_31999,null));var inst_32001 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32000,inst_31991);var state_32006__$1 = (function (){var statearr_32009 = state_32006;(statearr_32009[(8)] = inst_31997);
return statearr_32009;
})();var statearr_32010_32069 = state_32006__$1;(statearr_32010_32069[(2)] = inst_32001);
(statearr_32010_32069[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32007 === (2)))
{var inst_31991 = (state_32006[(7)]);var inst_31991__$1 = (state_32006[(2)]);var state_32006__$1 = (function (){var statearr_32011 = state_32006;(statearr_32011[(7)] = inst_31991__$1);
return statearr_32011;
})();if(cljs.core.truth_(inst_31991__$1))
{var statearr_32012_32070 = state_32006__$1;(statearr_32012_32070[(1)] = (3));
} else
{var statearr_32013_32071 = state_32006__$1;(statearr_32013_32071[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32007 === (1)))
{var inst_31989 = fetch_tag_data_fn.call(null,next_tag_type);var state_32006__$1 = state_32006;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32006__$1,(2),inst_31989);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32067,___$1,map__31986,map__31986__$1,map__31987,map__31987__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31988,map__31988__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
;return ((function (switch__9110__auto__,c__9125__auto___32067,___$1,map__31986,map__31986__$1,map__31987,map__31987__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31988,map__31988__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32017 = [null,null,null,null,null,null,null,null,null];(statearr_32017[(0)] = state_machine__9111__auto__);
(statearr_32017[(1)] = (1));
return statearr_32017;
});
var state_machine__9111__auto____1 = (function (state_32006){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32006);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32018){if((e32018 instanceof Object))
{var ex__9114__auto__ = e32018;var statearr_32019_32072 = state_32006;(statearr_32019_32072[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32006);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32018;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32073 = state_32006;
state_32006 = G__32073;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32006){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32067,___$1,map__31986,map__31986__$1,map__31987,map__31987__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31988,map__31988__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
})();var state__9127__auto__ = (function (){var statearr_32020 = f__9126__auto__.call(null);(statearr_32020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32067);
return statearr_32020;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32067,___$1,map__31986,map__31986__$1,map__31987,map__31987__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31988,map__31988__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__31986,map__31986__$1,map__31987,map__31987__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31988,map__31988__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__31986,map__31986__$1,map__31987,map__31987__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31988,map__31988__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function (state_32043){var state_val_32044 = (state_32043[(1)]);if((state_val_32044 === (5)))
{var inst_32041 = (state_32043[(2)]);var state_32043__$1 = state_32043;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32043__$1,inst_32041);
} else
{if((state_val_32044 === (4)))
{var state_32043__$1 = state_32043;var statearr_32045_32074 = state_32043__$1;(statearr_32045_32074[(2)] = null);
(statearr_32045_32074[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32044 === (3)))
{var inst_32027 = (state_32043[(7)]);var inst_32029 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32030 = ["HISTOGRAM TAG AGGS: ",inst_32027];var inst_32031 = (new cljs.core.PersistentVector(null,2,(5),inst_32029,inst_32030,null));var inst_32032 = cljs.core.clj__GT_js.call(null,inst_32031);var inst_32033 = console.log(inst_32032);var inst_32034 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32035 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_32036 = (new cljs.core.PersistentVector(null,1,(5),inst_32034,inst_32035,null));var inst_32037 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32027);var inst_32038 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32036,inst_32037);var state_32043__$1 = (function (){var statearr_32046 = state_32043;(statearr_32046[(8)] = inst_32033);
return statearr_32046;
})();var statearr_32047_32075 = state_32043__$1;(statearr_32047_32075[(2)] = inst_32038);
(statearr_32047_32075[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32044 === (2)))
{var inst_32027 = (state_32043[(7)]);var inst_32027__$1 = (state_32043[(2)]);var state_32043__$1 = (function (){var statearr_32048 = state_32043;(statearr_32048[(7)] = inst_32027__$1);
return statearr_32048;
})();if(cljs.core.truth_(inst_32027__$1))
{var statearr_32049_32076 = state_32043__$1;(statearr_32049_32076[(1)] = (3));
} else
{var statearr_32050_32077 = state_32043__$1;(statearr_32050_32077[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32044 === (1)))
{var inst_32021 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32022 = [next_filter_spec];var inst_32023 = cljs.core.PersistentHashMap.fromArrays(inst_32021,inst_32022);var inst_32024 = cljs.core.merge.call(null,next_query,inst_32023);var inst_32025 = fetch_tag_agg_data_fn.call(null,inst_32024);var state_32043__$1 = state_32043;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32043__$1,(2),inst_32025);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__31986,map__31986__$1,map__31987,map__31987__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31988,map__31988__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__31986,map__31986__$1,map__31987,map__31987__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31988,map__31988__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32054 = [null,null,null,null,null,null,null,null,null];(statearr_32054[(0)] = state_machine__9111__auto__);
(statearr_32054[(1)] = (1));
return statearr_32054;
});
var state_machine__9111__auto____1 = (function (state_32043){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32043);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32055){if((e32055 instanceof Object))
{var ex__9114__auto__ = e32055;var statearr_32056_32078 = state_32043;(statearr_32056_32078[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32043);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32055;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32079 = state_32043;
state_32043 = G__32079;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32043){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__31986,map__31986__$1,map__31987,map__31987__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31988,map__31988__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
})();var state__9127__auto__ = (function (){var statearr_32057 = f__9126__auto__.call(null);(statearr_32057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32057;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__31986,map__31986__$1,map__31987,map__31987__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31988,map__31988__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
;
clustermap.components.tag_histogram.t31978.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t31978.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32058 = om.core.get_node.call(null,self__.owner,"chart");var G__32058__$1 = (((G__32058 == null))?null:jayq.core.$.call(null,G__32058));var G__32058__$2 = (((G__32058__$1 == null))?null:G__32058__$1.highcharts());var G__32058__$3 = (((G__32058__$2 == null))?null:G__32058__$2.reflow());return G__32058__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
);
});})(map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
;
clustermap.components.tag_histogram.t31978.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t31978.prototype.om$core$IRender$render$arity$1 = ((function (map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
;
clustermap.components.tag_histogram.t31978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function (_31980){var self__ = this;
var _31980__$1 = this;return self__.meta31979;
});})(map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
;
clustermap.components.tag_histogram.t31978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function (_31980,meta31979__$1){var self__ = this;
var _31980__$1 = this;return (new clustermap.components.tag_histogram.t31978(self__.map__31977,self__.query,self__.owner,self__.metrics,self__.map__31972,self__.input_checker31870,self__.G__31874,self__.map__31973,self__.G__31971,self__.tag_agg_data,self__.G__31873,self__.tag_histogram,self__.output_schema31868,self__.filter_spec,self__.input_schema31869,self__.G__31970,self__.output_checker31871,self__.map__31974,self__.tag_type,self__.G__31872,self__.map__31975,self__.map__31976,self__.validate__6034__auto__,self__.id,self__.opts,self__.tag_data,self__.ufv__,meta31979__$1));
});})(map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
;
clustermap.components.tag_histogram.__GT_t31978 = ((function (map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063){
return (function __GT_t31978(map__31977__$2,query__$2,owner__$3,metrics__$2,map__31972__$2,input_checker31870__$1,G__31874__$1,map__31973__$2,G__31971__$2,tag_agg_data__$2,G__31873__$1,tag_histogram__$3,output_schema31868__$1,filter_spec__$2,input_schema31869__$1,G__31970__$2,output_checker31871__$1,map__31974__$2,tag_type__$2,G__31872__$1,map__31975__$2,map__31976__$2,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,ufv____$1,meta31979){return (new clustermap.components.tag_histogram.t31978(map__31977__$2,query__$2,owner__$3,metrics__$2,map__31972__$2,input_checker31870__$1,G__31874__$1,map__31973__$2,G__31971__$2,tag_agg_data__$2,G__31873__$1,tag_histogram__$3,output_schema31868__$1,filter_spec__$2,input_schema31869__$1,G__31970__$2,output_checker31871__$1,map__31974__$2,tag_type__$2,G__31872__$1,map__31975__$2,map__31976__$2,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,ufv____$1,meta31979));
});})(map__31975,map__31975__$1,map__31976,map__31976__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31977,map__31977__$1,opts__$1,id__$1,G__31970,map__31972,map__31972__$1,map__31973,map__31973__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31971,map__31974,map__31974__$1,opts,id,validate__6034__auto__,ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
;
}
return (new clustermap.components.tag_histogram.t31978(map__31977__$1,query__$1,owner__$2,metrics__$1,map__31972__$1,input_checker31870_32062,G__31874,map__31973__$1,G__31971__$1,tag_agg_data__$1,G__31873,tag_histogram__$2,output_schema31868_32060,filter_spec__$1,input_schema31869_32061,G__31970__$1,output_checker31871_32063,map__31974__$1,tag_type__$1,G__31872,map__31975__$1,map__31976__$1,validate__6034__auto__,id__$1,opts__$1,tag_data__$1,ufv___32059,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32080 = output_checker31871_32063.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32080))
{var error__6036__auto___32081 = temp__4126__auto___32080;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32081)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32081,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31868_32060,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32059,output_schema31868_32060,input_schema31869_32061,input_checker31870_32062,output_checker31871_32063))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema31868_32060,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31869_32061], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m31867){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m31867);
});
__GT_tag_histogram = function(cursor__7850__auto__,m31867){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m31867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
