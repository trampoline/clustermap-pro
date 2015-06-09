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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31418,p__31419){var map__31462 = p__31418;var map__31462__$1 = ((cljs.core.seq_QMARK_.call(null,map__31462))?cljs.core.apply.call(null,cljs.core.hash_map,map__31462):map__31462);var tag_agg_data = cljs.core.get.call(null,map__31462__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__31462__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__31462__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var bar_width = cljs.core.get.call(null,map__31462__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__31462__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__31462__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__31463 = p__31419;var map__31463__$1 = ((cljs.core.seq_QMARK_.call(null,map__31463))?cljs.core.apply.call(null,cljs.core.hash_map,map__31463):map__31463);var opts = map__31463__$1;var y1_title = cljs.core.get.call(null,map__31463__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31463__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title){
return (function iter__31464(s__31465){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title){
return (function (){var s__31465__$1 = s__31465;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31465__$1);if(temp__4126__auto__)
{var s__31465__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31465__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31465__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31467 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31466 = (0);while(true){
if((i__31466 < size__4376__auto__))
{var map__31478 = cljs.core._nth.call(null,c__4375__auto__,i__31466);var map__31478__$1 = ((cljs.core.seq_QMARK_.call(null,map__31478))?cljs.core.apply.call(null,cljs.core.hash_map,map__31478):map__31478);var metric_spec = map__31478__$1;var title = cljs.core.get.call(null,map__31478__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31478__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31467,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31466,map__31478,map__31478__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31467,s__31465__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title){
return (function iter__31479(s__31480){return (new cljs.core.LazySeq(null,((function (i__31466,map__31478,map__31478__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31467,s__31465__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title){
return (function (){var s__31480__$1 = s__31480;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31480__$1);if(temp__4126__auto____$1)
{var s__31480__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31480__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31480__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31482 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31481 = (0);while(true){
if((i__31481 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31481);cljs.core.chunk_append.call(null,b__31482,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31504 = (i__31481 + (1));
i__31481 = G__31504;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31482),iter__31479.call(null,cljs.core.chunk_rest.call(null,s__31480__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31482),null);
}
} else
{var record = cljs.core.first.call(null,s__31480__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31479.call(null,cljs.core.rest.call(null,s__31480__$2)));
}
} else
{return null;
}
break;
}
});})(i__31466,map__31478,map__31478__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31467,s__31465__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31466,map__31478,map__31478__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31467,s__31465__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__31505 = (i__31466 + (1));
i__31466 = G__31505;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31467),iter__31464.call(null,cljs.core.chunk_rest.call(null,s__31465__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31467),null);
}
} else
{var map__31483 = cljs.core.first.call(null,s__31465__$2);var map__31483__$1 = ((cljs.core.seq_QMARK_.call(null,map__31483))?cljs.core.apply.call(null,cljs.core.hash_map,map__31483):map__31483);var metric_spec = map__31483__$1;var title = cljs.core.get.call(null,map__31483__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31483__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31483,map__31483__$1,metric_spec,title,metric,s__31465__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title){
return (function iter__31484(s__31485){return (new cljs.core.LazySeq(null,((function (map__31483,map__31483__$1,metric_spec,title,metric,s__31465__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title){
return (function (){var s__31485__$1 = s__31485;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31485__$1);if(temp__4126__auto____$1)
{var s__31485__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31485__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31485__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31487 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31486 = (0);while(true){
if((i__31486 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31486);cljs.core.chunk_append.call(null,b__31487,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31506 = (i__31486 + (1));
i__31486 = G__31506;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31487),iter__31484.call(null,cljs.core.chunk_rest.call(null,s__31485__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31487),null);
}
} else
{var record = cljs.core.first.call(null,s__31485__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31484.call(null,cljs.core.rest.call(null,s__31485__$2)));
}
} else
{return null;
}
break;
}
});})(map__31483,map__31483__$1,metric_spec,title,metric,s__31465__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31483,map__31483__$1,metric_spec,title,metric,s__31465__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31464.call(null,cljs.core.rest.call(null,s__31465__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title){
return (function iter__31488(s__31489){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title){
return (function (){var s__31489__$1 = s__31489;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31489__$1);if(temp__4126__auto__)
{var s__31489__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31489__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31489__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31491 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31490 = (0);while(true){
if((i__31490 < size__4376__auto__))
{var map__31494 = cljs.core._nth.call(null,c__4375__auto__,i__31490);var map__31494__$1 = ((cljs.core.seq_QMARK_.call(null,map__31494))?cljs.core.apply.call(null,cljs.core.hash_map,map__31494):map__31494);var label_formatter = cljs.core.get.call(null,map__31494__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31494__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31491,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__31507 = (i__31490 + (1));
i__31490 = G__31507;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31491),iter__31488.call(null,cljs.core.chunk_rest.call(null,s__31489__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31491),null);
}
} else
{var map__31495 = cljs.core.first.call(null,s__31489__$2);var map__31495__$1 = ((cljs.core.seq_QMARK_.call(null,map__31495))?cljs.core.apply.call(null,cljs.core.hash_map,map__31495):map__31495);var label_formatter = cljs.core.get.call(null,map__31495__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31495__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31488.call(null,cljs.core.rest.call(null,s__31489__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title){
return (function iter__31496(s__31497){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title){
return (function (){var s__31497__$1 = s__31497;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31497__$1);if(temp__4126__auto__)
{var s__31497__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31497__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31497__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31499 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31498 = (0);while(true){
if((i__31498 < size__4376__auto__))
{var vec__31502 = cljs.core._nth.call(null,c__4375__auto__,i__31498);var y = cljs.core.nth.call(null,vec__31502,(0),null);var i = cljs.core.nth.call(null,vec__31502,(1),null);cljs.core.chunk_append.call(null,b__31499,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__31508 = (i__31498 + (1));
i__31498 = G__31508;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31499),iter__31496.call(null,cljs.core.chunk_rest.call(null,s__31497__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31499),null);
}
} else
{var vec__31503 = cljs.core.first.call(null,s__31497__$2);var y = cljs.core.nth.call(null,vec__31503,(0),null);var i = cljs.core.nth.call(null,vec__31503,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31496.call(null,cljs.core.rest.call(null,s__31497__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31462,map__31462__$1,tag_agg_data,tag_data,bar_color,bar_width,metrics,query,map__31463,map__31463__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___31701 = schema.utils.use_fn_validation;var output_schema31510_31702 = schema.core.Any;var input_schema31511_31703 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker31512_31704 = schema.core.checker.call(null,input_schema31511_31703);var output_checker31513_31705 = schema.core.checker.call(null,output_schema31510_31702);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function tag_histogram(G__31514,G__31515,G__31516){var validate__6034__auto__ = ufv___31701.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31706 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31514,G__31515,G__31516], null);var temp__4126__auto___31707 = input_checker31512_31704.call(null,args__6035__auto___31706);if(cljs.core.truth_(temp__4126__auto___31707))
{var error__6036__auto___31708 = temp__4126__auto___31707;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31708)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31708,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31706,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31511_31703,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__31612 = G__31514;var map__31614 = G__31612;var map__31614__$1 = ((cljs.core.seq_QMARK_.call(null,map__31614))?cljs.core.apply.call(null,cljs.core.hash_map,map__31614):map__31614);var map__31615 = cljs.core.get.call(null,map__31614__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31615__$1 = ((cljs.core.seq_QMARK_.call(null,map__31615))?cljs.core.apply.call(null,cljs.core.hash_map,map__31615):map__31615);var tag_histogram__$1 = map__31615__$1;var query = cljs.core.get.call(null,map__31615__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__31615__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__31615__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__31615__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__31615__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__31614__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__31515;var G__31613 = G__31516;var map__31616 = G__31613;var map__31616__$1 = ((cljs.core.seq_QMARK_.call(null,map__31616))?cljs.core.apply.call(null,cljs.core.hash_map,map__31616):map__31616);var opts = map__31616__$1;var id = cljs.core.get.call(null,map__31616__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__31612__$1 = G__31612;var owner__$1 = owner;var G__31613__$1 = G__31613;while(true){
var map__31617 = G__31612__$1;var map__31617__$1 = ((cljs.core.seq_QMARK_.call(null,map__31617))?cljs.core.apply.call(null,cljs.core.hash_map,map__31617):map__31617);var map__31618 = cljs.core.get.call(null,map__31617__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31618__$1 = ((cljs.core.seq_QMARK_.call(null,map__31618))?cljs.core.apply.call(null,cljs.core.hash_map,map__31618):map__31618);var tag_histogram__$2 = map__31618__$1;var query__$1 = cljs.core.get.call(null,map__31618__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__31618__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__31618__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__31618__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__31618__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__31617__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__31619 = G__31613__$1;var map__31619__$1 = ((cljs.core.seq_QMARK_.call(null,map__31619))?cljs.core.apply.call(null,cljs.core.hash_map,map__31619):map__31619);var opts__$1 = map__31619__$1;var id__$1 = cljs.core.get.call(null,map__31619__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t31620 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t31620 = (function (query,map__31619,map__31618,owner,metrics,map__31615,output_checker31513,map__31616,G__31515,tag_agg_data,tag_histogram,map__31617,filter_spec,output_schema31510,map__31614,tag_type,G__31613,input_checker31512,G__31612,validate__6034__auto__,G__31516,id,G__31514,opts,tag_data,input_schema31511,ufv__,meta31621){
this.query = query;
this.map__31619 = map__31619;
this.map__31618 = map__31618;
this.owner = owner;
this.metrics = metrics;
this.map__31615 = map__31615;
this.output_checker31513 = output_checker31513;
this.map__31616 = map__31616;
this.G__31515 = G__31515;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.map__31617 = map__31617;
this.filter_spec = filter_spec;
this.output_schema31510 = output_schema31510;
this.map__31614 = map__31614;
this.tag_type = tag_type;
this.G__31613 = G__31613;
this.input_checker31512 = input_checker31512;
this.G__31612 = G__31612;
this.validate__6034__auto__ = validate__6034__auto__;
this.G__31516 = G__31516;
this.id = id;
this.G__31514 = G__31514;
this.opts = opts;
this.tag_data = tag_data;
this.input_schema31511 = input_schema31511;
this.ufv__ = ufv__;
this.meta31621 = meta31621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t31620.cljs$lang$type = true;
clustermap.components.tag_histogram.t31620.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t31620";
clustermap.components.tag_histogram.t31620.cljs$lang$ctorPrWriter = ((function (map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t31620");
});})(map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
;
clustermap.components.tag_histogram.t31620.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t31620.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
;
clustermap.components.tag_histogram.t31620.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t31620.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function (_,p__31623,___$1){var self__ = this;
var map__31624 = p__31623;var map__31624__$1 = ((cljs.core.seq_QMARK_.call(null,map__31624))?cljs.core.apply.call(null,cljs.core.hash_map,map__31624):map__31624);var map__31625 = cljs.core.get.call(null,map__31624__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31625__$1 = ((cljs.core.seq_QMARK_.call(null,map__31625))?cljs.core.apply.call(null,cljs.core.hash_map,map__31625):map__31625);var prev_query = cljs.core.get.call(null,map__31625__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__31625__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__31625__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__31625__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__31624__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
;
clustermap.components.tag_histogram.t31620.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t31620.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function (_,p__31626,p__31627){var self__ = this;
var map__31628 = p__31626;var map__31628__$1 = ((cljs.core.seq_QMARK_.call(null,map__31628))?cljs.core.apply.call(null,cljs.core.hash_map,map__31628):map__31628);var map__31629 = cljs.core.get.call(null,map__31628__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31629__$1 = ((cljs.core.seq_QMARK_.call(null,map__31629))?cljs.core.apply.call(null,cljs.core.hash_map,map__31629):map__31629);var next_query = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__31628__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31630 = p__31627;var map__31630__$1 = ((cljs.core.seq_QMARK_.call(null,map__31630))?cljs.core.apply.call(null,cljs.core.hash_map,map__31630):map__31630);var fetch_tag_data_fn = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___31709 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___31709,___$1,map__31628,map__31628__$1,map__31629,map__31629__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31630,map__31630__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___31709,___$1,map__31628,map__31628__$1,map__31629,map__31629__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31630,map__31630__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function (state_31648){var state_val_31649 = (state_31648[(1)]);if((state_val_31649 === (5)))
{var inst_31646 = (state_31648[(2)]);var state_31648__$1 = state_31648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31648__$1,inst_31646);
} else
{if((state_val_31649 === (4)))
{var state_31648__$1 = state_31648;var statearr_31650_31710 = state_31648__$1;(statearr_31650_31710[(2)] = null);
(statearr_31650_31710[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31649 === (3)))
{var inst_31633 = (state_31648[(7)]);var inst_31635 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31636 = ["HISTOGRAM TAGS: ",inst_31633];var inst_31637 = (new cljs.core.PersistentVector(null,2,(5),inst_31635,inst_31636,null));var inst_31638 = cljs.core.clj__GT_js.call(null,inst_31637);var inst_31639 = console.log(inst_31638);var inst_31640 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31641 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_31642 = (new cljs.core.PersistentVector(null,1,(5),inst_31640,inst_31641,null));var inst_31643 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31642,inst_31633);var state_31648__$1 = (function (){var statearr_31651 = state_31648;(statearr_31651[(8)] = inst_31639);
return statearr_31651;
})();var statearr_31652_31711 = state_31648__$1;(statearr_31652_31711[(2)] = inst_31643);
(statearr_31652_31711[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31649 === (2)))
{var inst_31633 = (state_31648[(7)]);var inst_31633__$1 = (state_31648[(2)]);var state_31648__$1 = (function (){var statearr_31653 = state_31648;(statearr_31653[(7)] = inst_31633__$1);
return statearr_31653;
})();if(cljs.core.truth_(inst_31633__$1))
{var statearr_31654_31712 = state_31648__$1;(statearr_31654_31712[(1)] = (3));
} else
{var statearr_31655_31713 = state_31648__$1;(statearr_31655_31713[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31649 === (1)))
{var inst_31631 = fetch_tag_data_fn.call(null,next_tag_type);var state_31648__$1 = state_31648;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31648__$1,(2),inst_31631);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___31709,___$1,map__31628,map__31628__$1,map__31629,map__31629__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31630,map__31630__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
;return ((function (switch__9110__auto__,c__9125__auto___31709,___$1,map__31628,map__31628__$1,map__31629,map__31629__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31630,map__31630__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31659 = [null,null,null,null,null,null,null,null,null];(statearr_31659[(0)] = state_machine__9111__auto__);
(statearr_31659[(1)] = (1));
return statearr_31659;
});
var state_machine__9111__auto____1 = (function (state_31648){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31648);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31660){if((e31660 instanceof Object))
{var ex__9114__auto__ = e31660;var statearr_31661_31714 = state_31648;(statearr_31661_31714[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31648);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31660;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31715 = state_31648;
state_31648 = G__31715;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31648){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___31709,___$1,map__31628,map__31628__$1,map__31629,map__31629__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31630,map__31630__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
})();var state__9127__auto__ = (function (){var statearr_31662 = f__9126__auto__.call(null);(statearr_31662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___31709);
return statearr_31662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___31709,___$1,map__31628,map__31628__$1,map__31629,map__31629__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31630,map__31630__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__31628,map__31628__$1,map__31629,map__31629__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31630,map__31630__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__31628,map__31628__$1,map__31629,map__31629__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31630,map__31630__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function (state_31685){var state_val_31686 = (state_31685[(1)]);if((state_val_31686 === (5)))
{var inst_31683 = (state_31685[(2)]);var state_31685__$1 = state_31685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31685__$1,inst_31683);
} else
{if((state_val_31686 === (4)))
{var state_31685__$1 = state_31685;var statearr_31687_31716 = state_31685__$1;(statearr_31687_31716[(2)] = null);
(statearr_31687_31716[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31686 === (3)))
{var inst_31669 = (state_31685[(7)]);var inst_31671 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31672 = ["HISTOGRAM TAG AGGS: ",inst_31669];var inst_31673 = (new cljs.core.PersistentVector(null,2,(5),inst_31671,inst_31672,null));var inst_31674 = cljs.core.clj__GT_js.call(null,inst_31673);var inst_31675 = console.log(inst_31674);var inst_31676 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31677 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_31678 = (new cljs.core.PersistentVector(null,1,(5),inst_31676,inst_31677,null));var inst_31679 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_31669);var inst_31680 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31678,inst_31679);var state_31685__$1 = (function (){var statearr_31688 = state_31685;(statearr_31688[(8)] = inst_31675);
return statearr_31688;
})();var statearr_31689_31717 = state_31685__$1;(statearr_31689_31717[(2)] = inst_31680);
(statearr_31689_31717[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31686 === (2)))
{var inst_31669 = (state_31685[(7)]);var inst_31669__$1 = (state_31685[(2)]);var state_31685__$1 = (function (){var statearr_31690 = state_31685;(statearr_31690[(7)] = inst_31669__$1);
return statearr_31690;
})();if(cljs.core.truth_(inst_31669__$1))
{var statearr_31691_31718 = state_31685__$1;(statearr_31691_31718[(1)] = (3));
} else
{var statearr_31692_31719 = state_31685__$1;(statearr_31692_31719[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31686 === (1)))
{var inst_31663 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_31664 = [next_filter_spec];var inst_31665 = cljs.core.PersistentHashMap.fromArrays(inst_31663,inst_31664);var inst_31666 = cljs.core.merge.call(null,next_query,inst_31665);var inst_31667 = fetch_tag_agg_data_fn.call(null,inst_31666);var state_31685__$1 = state_31685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31685__$1,(2),inst_31667);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__31628,map__31628__$1,map__31629,map__31629__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31630,map__31630__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__31628,map__31628__$1,map__31629,map__31629__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31630,map__31630__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31696 = [null,null,null,null,null,null,null,null,null];(statearr_31696[(0)] = state_machine__9111__auto__);
(statearr_31696[(1)] = (1));
return statearr_31696;
});
var state_machine__9111__auto____1 = (function (state_31685){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31685);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31697){if((e31697 instanceof Object))
{var ex__9114__auto__ = e31697;var statearr_31698_31720 = state_31685;(statearr_31698_31720[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31685);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31697;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31721 = state_31685;
state_31685 = G__31721;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31685){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__31628,map__31628__$1,map__31629,map__31629__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31630,map__31630__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
})();var state__9127__auto__ = (function (){var statearr_31699 = f__9126__auto__.call(null);(statearr_31699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__31628,map__31628__$1,map__31629,map__31629__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31630,map__31630__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
;
clustermap.components.tag_histogram.t31620.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t31620.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__31700 = om.core.get_node.call(null,self__.owner,"chart");var G__31700__$1 = (((G__31700 == null))?null:jayq.core.$.call(null,G__31700));var G__31700__$2 = (((G__31700__$1 == null))?null:G__31700__$1.highcharts());var G__31700__$3 = (((G__31700__$2 == null))?null:G__31700__$2.reflow());return G__31700__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
);
});})(map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
;
clustermap.components.tag_histogram.t31620.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t31620.prototype.om$core$IRender$render$arity$1 = ((function (map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
;
clustermap.components.tag_histogram.t31620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function (_31622){var self__ = this;
var _31622__$1 = this;return self__.meta31621;
});})(map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
;
clustermap.components.tag_histogram.t31620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function (_31622,meta31621__$1){var self__ = this;
var _31622__$1 = this;return (new clustermap.components.tag_histogram.t31620(self__.query,self__.map__31619,self__.map__31618,self__.owner,self__.metrics,self__.map__31615,self__.output_checker31513,self__.map__31616,self__.G__31515,self__.tag_agg_data,self__.tag_histogram,self__.map__31617,self__.filter_spec,self__.output_schema31510,self__.map__31614,self__.tag_type,self__.G__31613,self__.input_checker31512,self__.G__31612,self__.validate__6034__auto__,self__.G__31516,self__.id,self__.G__31514,self__.opts,self__.tag_data,self__.input_schema31511,self__.ufv__,meta31621__$1));
});})(map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
;
clustermap.components.tag_histogram.__GT_t31620 = ((function (map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705){
return (function __GT_t31620(query__$2,map__31619__$2,map__31618__$2,owner__$3,metrics__$2,map__31615__$2,output_checker31513__$1,map__31616__$2,G__31515__$1,tag_agg_data__$2,tag_histogram__$3,map__31617__$2,filter_spec__$2,output_schema31510__$1,map__31614__$2,tag_type__$2,G__31613__$2,input_checker31512__$1,G__31612__$2,validate__6034__auto____$1,G__31516__$1,id__$2,G__31514__$1,opts__$2,tag_data__$2,input_schema31511__$1,ufv____$1,meta31621){return (new clustermap.components.tag_histogram.t31620(query__$2,map__31619__$2,map__31618__$2,owner__$3,metrics__$2,map__31615__$2,output_checker31513__$1,map__31616__$2,G__31515__$1,tag_agg_data__$2,tag_histogram__$3,map__31617__$2,filter_spec__$2,output_schema31510__$1,map__31614__$2,tag_type__$2,G__31613__$2,input_checker31512__$1,G__31612__$2,validate__6034__auto____$1,G__31516__$1,id__$2,G__31514__$1,opts__$2,tag_data__$2,input_schema31511__$1,ufv____$1,meta31621));
});})(map__31617,map__31617__$1,map__31618,map__31618__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31619,map__31619__$1,opts__$1,id__$1,G__31612,map__31614,map__31614__$1,map__31615,map__31615__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31613,map__31616,map__31616__$1,opts,id,validate__6034__auto__,ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
;
}
return (new clustermap.components.tag_histogram.t31620(query__$1,map__31619__$1,map__31618__$1,owner__$2,metrics__$1,map__31615__$1,output_checker31513_31705,map__31616__$1,G__31515,tag_agg_data__$1,tag_histogram__$2,map__31617__$1,filter_spec__$1,output_schema31510_31702,map__31614__$1,tag_type__$1,G__31613__$1,input_checker31512_31704,G__31612__$1,validate__6034__auto__,G__31516,id__$1,G__31514,opts__$1,tag_data__$1,input_schema31511_31703,ufv___31701,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31722 = output_checker31513_31705.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31722))
{var error__6036__auto___31723 = temp__4126__auto___31722;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31723)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31723,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31510_31702,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___31701,output_schema31510_31702,input_schema31511_31703,input_checker31512_31704,output_checker31513_31705))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema31510_31702,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31511_31703], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m31509){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m31509);
});
__GT_tag_histogram = function(cursor__7850__auto__,m31509){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m31509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
