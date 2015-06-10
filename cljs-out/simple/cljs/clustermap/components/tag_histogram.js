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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31433,p__31434){var map__31477 = p__31433;var map__31477__$1 = ((cljs.core.seq_QMARK_.call(null,map__31477))?cljs.core.apply.call(null,cljs.core.hash_map,map__31477):map__31477);var tag_agg_data = cljs.core.get.call(null,map__31477__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__31477__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__31477__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__31477__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var bar_width = cljs.core.get.call(null,map__31477__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__31477__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__31477__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__31478 = p__31434;var map__31478__$1 = ((cljs.core.seq_QMARK_.call(null,map__31478))?cljs.core.apply.call(null,cljs.core.hash_map,map__31478):map__31478);var opts = map__31478__$1;var y1_title = cljs.core.get.call(null,map__31478__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31478__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title){
return (function iter__31479(s__31480){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title){
return (function (){var s__31480__$1 = s__31480;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31480__$1);if(temp__4126__auto__)
{var s__31480__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31480__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31480__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31482 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31481 = (0);while(true){
if((i__31481 < size__4376__auto__))
{var map__31493 = cljs.core._nth.call(null,c__4375__auto__,i__31481);var map__31493__$1 = ((cljs.core.seq_QMARK_.call(null,map__31493))?cljs.core.apply.call(null,cljs.core.hash_map,map__31493):map__31493);var metric_spec = map__31493__$1;var title = cljs.core.get.call(null,map__31493__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31493__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31482,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31481,map__31493,map__31493__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31482,s__31480__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title){
return (function iter__31494(s__31495){return (new cljs.core.LazySeq(null,((function (i__31481,map__31493,map__31493__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31482,s__31480__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title){
return (function (){var s__31495__$1 = s__31495;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31495__$1);if(temp__4126__auto____$1)
{var s__31495__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31495__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31495__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31497 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31496 = (0);while(true){
if((i__31496 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31496);cljs.core.chunk_append.call(null,b__31497,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31519 = (i__31496 + (1));
i__31496 = G__31519;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31497),iter__31494.call(null,cljs.core.chunk_rest.call(null,s__31495__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31497),null);
}
} else
{var record = cljs.core.first.call(null,s__31495__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31494.call(null,cljs.core.rest.call(null,s__31495__$2)));
}
} else
{return null;
}
break;
}
});})(i__31481,map__31493,map__31493__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31482,s__31480__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31481,map__31493,map__31493__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31482,s__31480__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__31520 = (i__31481 + (1));
i__31481 = G__31520;
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
{var map__31498 = cljs.core.first.call(null,s__31480__$2);var map__31498__$1 = ((cljs.core.seq_QMARK_.call(null,map__31498))?cljs.core.apply.call(null,cljs.core.hash_map,map__31498):map__31498);var metric_spec = map__31498__$1;var title = cljs.core.get.call(null,map__31498__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31498__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31498,map__31498__$1,metric_spec,title,metric,s__31480__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title){
return (function iter__31499(s__31500){return (new cljs.core.LazySeq(null,((function (map__31498,map__31498__$1,metric_spec,title,metric,s__31480__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title){
return (function (){var s__31500__$1 = s__31500;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31500__$1);if(temp__4126__auto____$1)
{var s__31500__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31500__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31500__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31502 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31501 = (0);while(true){
if((i__31501 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31501);cljs.core.chunk_append.call(null,b__31502,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31521 = (i__31501 + (1));
i__31501 = G__31521;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31502),iter__31499.call(null,cljs.core.chunk_rest.call(null,s__31500__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31502),null);
}
} else
{var record = cljs.core.first.call(null,s__31500__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31499.call(null,cljs.core.rest.call(null,s__31500__$2)));
}
} else
{return null;
}
break;
}
});})(map__31498,map__31498__$1,metric_spec,title,metric,s__31480__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31498,map__31498__$1,metric_spec,title,metric,s__31480__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31479.call(null,cljs.core.rest.call(null,s__31480__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title){
return (function iter__31503(s__31504){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title){
return (function (){var s__31504__$1 = s__31504;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31504__$1);if(temp__4126__auto__)
{var s__31504__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31504__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31504__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31506 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31505 = (0);while(true){
if((i__31505 < size__4376__auto__))
{var map__31509 = cljs.core._nth.call(null,c__4375__auto__,i__31505);var map__31509__$1 = ((cljs.core.seq_QMARK_.call(null,map__31509))?cljs.core.apply.call(null,cljs.core.hash_map,map__31509):map__31509);var label_formatter = cljs.core.get.call(null,map__31509__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31509__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31506,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__31522 = (i__31505 + (1));
i__31505 = G__31522;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31506),iter__31503.call(null,cljs.core.chunk_rest.call(null,s__31504__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31506),null);
}
} else
{var map__31510 = cljs.core.first.call(null,s__31504__$2);var map__31510__$1 = ((cljs.core.seq_QMARK_.call(null,map__31510))?cljs.core.apply.call(null,cljs.core.hash_map,map__31510):map__31510);var label_formatter = cljs.core.get.call(null,map__31510__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31510__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31503.call(null,cljs.core.rest.call(null,s__31504__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title){
return (function iter__31511(s__31512){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title){
return (function (){var s__31512__$1 = s__31512;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31512__$1);if(temp__4126__auto__)
{var s__31512__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31512__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31512__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31514 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31513 = (0);while(true){
if((i__31513 < size__4376__auto__))
{var vec__31517 = cljs.core._nth.call(null,c__4375__auto__,i__31513);var y = cljs.core.nth.call(null,vec__31517,(0),null);var i = cljs.core.nth.call(null,vec__31517,(1),null);cljs.core.chunk_append.call(null,b__31514,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__31523 = (i__31513 + (1));
i__31513 = G__31523;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31514),iter__31511.call(null,cljs.core.chunk_rest.call(null,s__31512__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31514),null);
}
} else
{var vec__31518 = cljs.core.first.call(null,s__31512__$2);var y = cljs.core.nth.call(null,vec__31518,(0),null);var i = cljs.core.nth.call(null,vec__31518,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31511.call(null,cljs.core.rest.call(null,s__31512__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31477,map__31477__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31478,map__31478__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___31716 = schema.utils.use_fn_validation;var output_schema31525_31717 = schema.core.Any;var input_schema31526_31718 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker31527_31719 = schema.core.checker.call(null,input_schema31526_31718);var output_checker31528_31720 = schema.core.checker.call(null,output_schema31525_31717);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function tag_histogram(G__31529,G__31530,G__31531){var validate__6034__auto__ = ufv___31716.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31721 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31529,G__31530,G__31531], null);var temp__4126__auto___31722 = input_checker31527_31719.call(null,args__6035__auto___31721);if(cljs.core.truth_(temp__4126__auto___31722))
{var error__6036__auto___31723 = temp__4126__auto___31722;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31723)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31723,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31721,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31526_31718,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__31627 = G__31529;var map__31629 = G__31627;var map__31629__$1 = ((cljs.core.seq_QMARK_.call(null,map__31629))?cljs.core.apply.call(null,cljs.core.hash_map,map__31629):map__31629);var map__31630 = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31630__$1 = ((cljs.core.seq_QMARK_.call(null,map__31630))?cljs.core.apply.call(null,cljs.core.hash_map,map__31630):map__31630);var tag_histogram__$1 = map__31630__$1;var query = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__31530;var G__31628 = G__31531;var map__31631 = G__31628;var map__31631__$1 = ((cljs.core.seq_QMARK_.call(null,map__31631))?cljs.core.apply.call(null,cljs.core.hash_map,map__31631):map__31631);var opts = map__31631__$1;var id = cljs.core.get.call(null,map__31631__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__31627__$1 = G__31627;var owner__$1 = owner;var G__31628__$1 = G__31628;while(true){
var map__31632 = G__31627__$1;var map__31632__$1 = ((cljs.core.seq_QMARK_.call(null,map__31632))?cljs.core.apply.call(null,cljs.core.hash_map,map__31632):map__31632);var map__31633 = cljs.core.get.call(null,map__31632__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31633__$1 = ((cljs.core.seq_QMARK_.call(null,map__31633))?cljs.core.apply.call(null,cljs.core.hash_map,map__31633):map__31633);var tag_histogram__$2 = map__31633__$1;var query__$1 = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__31632__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__31634 = G__31628__$1;var map__31634__$1 = ((cljs.core.seq_QMARK_.call(null,map__31634))?cljs.core.apply.call(null,cljs.core.hash_map,map__31634):map__31634);var opts__$1 = map__31634__$1;var id__$1 = cljs.core.get.call(null,map__31634__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t31635 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t31635 = (function (query,map__31631,owner,metrics,map__31629,G__31531,G__31529,tag_agg_data,G__31530,tag_histogram,filter_spec,G__31627,map__31634,map__31632,tag_type,input_schema31526,output_schema31525,map__31633,validate__6034__auto__,id,output_checker31528,input_checker31527,opts,tag_data,ufv__,G__31628,map__31630,meta31636){
this.query = query;
this.map__31631 = map__31631;
this.owner = owner;
this.metrics = metrics;
this.map__31629 = map__31629;
this.G__31531 = G__31531;
this.G__31529 = G__31529;
this.tag_agg_data = tag_agg_data;
this.G__31530 = G__31530;
this.tag_histogram = tag_histogram;
this.filter_spec = filter_spec;
this.G__31627 = G__31627;
this.map__31634 = map__31634;
this.map__31632 = map__31632;
this.tag_type = tag_type;
this.input_schema31526 = input_schema31526;
this.output_schema31525 = output_schema31525;
this.map__31633 = map__31633;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.output_checker31528 = output_checker31528;
this.input_checker31527 = input_checker31527;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.G__31628 = G__31628;
this.map__31630 = map__31630;
this.meta31636 = meta31636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t31635.cljs$lang$type = true;
clustermap.components.tag_histogram.t31635.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t31635";
clustermap.components.tag_histogram.t31635.cljs$lang$ctorPrWriter = ((function (map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t31635");
});})(map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
;
clustermap.components.tag_histogram.t31635.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t31635.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
;
clustermap.components.tag_histogram.t31635.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t31635.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function (_,p__31638,___$1){var self__ = this;
var map__31639 = p__31638;var map__31639__$1 = ((cljs.core.seq_QMARK_.call(null,map__31639))?cljs.core.apply.call(null,cljs.core.hash_map,map__31639):map__31639);var map__31640 = cljs.core.get.call(null,map__31639__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31640__$1 = ((cljs.core.seq_QMARK_.call(null,map__31640))?cljs.core.apply.call(null,cljs.core.hash_map,map__31640):map__31640);var prev_query = cljs.core.get.call(null,map__31640__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__31640__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__31640__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__31640__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__31639__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
;
clustermap.components.tag_histogram.t31635.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t31635.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function (_,p__31641,p__31642){var self__ = this;
var map__31643 = p__31641;var map__31643__$1 = ((cljs.core.seq_QMARK_.call(null,map__31643))?cljs.core.apply.call(null,cljs.core.hash_map,map__31643):map__31643);var map__31644 = cljs.core.get.call(null,map__31643__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31644__$1 = ((cljs.core.seq_QMARK_.call(null,map__31644))?cljs.core.apply.call(null,cljs.core.hash_map,map__31644):map__31644);var next_query = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__31643__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31645 = p__31642;var map__31645__$1 = ((cljs.core.seq_QMARK_.call(null,map__31645))?cljs.core.apply.call(null,cljs.core.hash_map,map__31645):map__31645);var fetch_tag_data_fn = cljs.core.get.call(null,map__31645__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__31645__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___31724 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___31724,___$1,map__31643,map__31643__$1,map__31644,map__31644__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31645,map__31645__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___31724,___$1,map__31643,map__31643__$1,map__31644,map__31644__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31645,map__31645__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function (state_31663){var state_val_31664 = (state_31663[(1)]);if((state_val_31664 === (5)))
{var inst_31661 = (state_31663[(2)]);var state_31663__$1 = state_31663;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31663__$1,inst_31661);
} else
{if((state_val_31664 === (4)))
{var state_31663__$1 = state_31663;var statearr_31665_31725 = state_31663__$1;(statearr_31665_31725[(2)] = null);
(statearr_31665_31725[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31664 === (3)))
{var inst_31648 = (state_31663[(7)]);var inst_31650 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31651 = ["HISTOGRAM TAGS: ",inst_31648];var inst_31652 = (new cljs.core.PersistentVector(null,2,(5),inst_31650,inst_31651,null));var inst_31653 = cljs.core.clj__GT_js.call(null,inst_31652);var inst_31654 = console.log(inst_31653);var inst_31655 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31656 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_31657 = (new cljs.core.PersistentVector(null,1,(5),inst_31655,inst_31656,null));var inst_31658 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31657,inst_31648);var state_31663__$1 = (function (){var statearr_31666 = state_31663;(statearr_31666[(8)] = inst_31654);
return statearr_31666;
})();var statearr_31667_31726 = state_31663__$1;(statearr_31667_31726[(2)] = inst_31658);
(statearr_31667_31726[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31664 === (2)))
{var inst_31648 = (state_31663[(7)]);var inst_31648__$1 = (state_31663[(2)]);var state_31663__$1 = (function (){var statearr_31668 = state_31663;(statearr_31668[(7)] = inst_31648__$1);
return statearr_31668;
})();if(cljs.core.truth_(inst_31648__$1))
{var statearr_31669_31727 = state_31663__$1;(statearr_31669_31727[(1)] = (3));
} else
{var statearr_31670_31728 = state_31663__$1;(statearr_31670_31728[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31664 === (1)))
{var inst_31646 = fetch_tag_data_fn.call(null,next_tag_type);var state_31663__$1 = state_31663;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31663__$1,(2),inst_31646);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___31724,___$1,map__31643,map__31643__$1,map__31644,map__31644__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31645,map__31645__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
;return ((function (switch__9110__auto__,c__9125__auto___31724,___$1,map__31643,map__31643__$1,map__31644,map__31644__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31645,map__31645__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31674 = [null,null,null,null,null,null,null,null,null];(statearr_31674[(0)] = state_machine__9111__auto__);
(statearr_31674[(1)] = (1));
return statearr_31674;
});
var state_machine__9111__auto____1 = (function (state_31663){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31663);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31675){if((e31675 instanceof Object))
{var ex__9114__auto__ = e31675;var statearr_31676_31729 = state_31663;(statearr_31676_31729[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31663);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31675;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31730 = state_31663;
state_31663 = G__31730;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31663){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___31724,___$1,map__31643,map__31643__$1,map__31644,map__31644__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31645,map__31645__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
})();var state__9127__auto__ = (function (){var statearr_31677 = f__9126__auto__.call(null);(statearr_31677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___31724);
return statearr_31677;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___31724,___$1,map__31643,map__31643__$1,map__31644,map__31644__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31645,map__31645__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__31643,map__31643__$1,map__31644,map__31644__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31645,map__31645__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__31643,map__31643__$1,map__31644,map__31644__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31645,map__31645__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function (state_31700){var state_val_31701 = (state_31700[(1)]);if((state_val_31701 === (5)))
{var inst_31698 = (state_31700[(2)]);var state_31700__$1 = state_31700;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31700__$1,inst_31698);
} else
{if((state_val_31701 === (4)))
{var state_31700__$1 = state_31700;var statearr_31702_31731 = state_31700__$1;(statearr_31702_31731[(2)] = null);
(statearr_31702_31731[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31701 === (3)))
{var inst_31684 = (state_31700[(7)]);var inst_31686 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31687 = ["HISTOGRAM TAG AGGS: ",inst_31684];var inst_31688 = (new cljs.core.PersistentVector(null,2,(5),inst_31686,inst_31687,null));var inst_31689 = cljs.core.clj__GT_js.call(null,inst_31688);var inst_31690 = console.log(inst_31689);var inst_31691 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31692 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_31693 = (new cljs.core.PersistentVector(null,1,(5),inst_31691,inst_31692,null));var inst_31694 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_31684);var inst_31695 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31693,inst_31694);var state_31700__$1 = (function (){var statearr_31703 = state_31700;(statearr_31703[(8)] = inst_31690);
return statearr_31703;
})();var statearr_31704_31732 = state_31700__$1;(statearr_31704_31732[(2)] = inst_31695);
(statearr_31704_31732[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31701 === (2)))
{var inst_31684 = (state_31700[(7)]);var inst_31684__$1 = (state_31700[(2)]);var state_31700__$1 = (function (){var statearr_31705 = state_31700;(statearr_31705[(7)] = inst_31684__$1);
return statearr_31705;
})();if(cljs.core.truth_(inst_31684__$1))
{var statearr_31706_31733 = state_31700__$1;(statearr_31706_31733[(1)] = (3));
} else
{var statearr_31707_31734 = state_31700__$1;(statearr_31707_31734[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31701 === (1)))
{var inst_31678 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_31679 = [next_filter_spec];var inst_31680 = cljs.core.PersistentHashMap.fromArrays(inst_31678,inst_31679);var inst_31681 = cljs.core.merge.call(null,next_query,inst_31680);var inst_31682 = fetch_tag_agg_data_fn.call(null,inst_31681);var state_31700__$1 = state_31700;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31700__$1,(2),inst_31682);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__31643,map__31643__$1,map__31644,map__31644__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31645,map__31645__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__31643,map__31643__$1,map__31644,map__31644__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31645,map__31645__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31711 = [null,null,null,null,null,null,null,null,null];(statearr_31711[(0)] = state_machine__9111__auto__);
(statearr_31711[(1)] = (1));
return statearr_31711;
});
var state_machine__9111__auto____1 = (function (state_31700){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31700);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31712){if((e31712 instanceof Object))
{var ex__9114__auto__ = e31712;var statearr_31713_31735 = state_31700;(statearr_31713_31735[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31700);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31712;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31736 = state_31700;
state_31700 = G__31736;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31700){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__31643,map__31643__$1,map__31644,map__31644__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31645,map__31645__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
})();var state__9127__auto__ = (function (){var statearr_31714 = f__9126__auto__.call(null);(statearr_31714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31714;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__31643,map__31643__$1,map__31644,map__31644__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31645,map__31645__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
;
clustermap.components.tag_histogram.t31635.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t31635.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__31715 = om.core.get_node.call(null,self__.owner,"chart");var G__31715__$1 = (((G__31715 == null))?null:jayq.core.$.call(null,G__31715));var G__31715__$2 = (((G__31715__$1 == null))?null:G__31715__$1.highcharts());var G__31715__$3 = (((G__31715__$2 == null))?null:G__31715__$2.reflow());return G__31715__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
);
});})(map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
;
clustermap.components.tag_histogram.t31635.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t31635.prototype.om$core$IRender$render$arity$1 = ((function (map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
;
clustermap.components.tag_histogram.t31635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function (_31637){var self__ = this;
var _31637__$1 = this;return self__.meta31636;
});})(map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
;
clustermap.components.tag_histogram.t31635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function (_31637,meta31636__$1){var self__ = this;
var _31637__$1 = this;return (new clustermap.components.tag_histogram.t31635(self__.query,self__.map__31631,self__.owner,self__.metrics,self__.map__31629,self__.G__31531,self__.G__31529,self__.tag_agg_data,self__.G__31530,self__.tag_histogram,self__.filter_spec,self__.G__31627,self__.map__31634,self__.map__31632,self__.tag_type,self__.input_schema31526,self__.output_schema31525,self__.map__31633,self__.validate__6034__auto__,self__.id,self__.output_checker31528,self__.input_checker31527,self__.opts,self__.tag_data,self__.ufv__,self__.G__31628,self__.map__31630,meta31636__$1));
});})(map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
;
clustermap.components.tag_histogram.__GT_t31635 = ((function (map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720){
return (function __GT_t31635(query__$2,map__31631__$2,owner__$3,metrics__$2,map__31629__$2,G__31531__$1,G__31529__$1,tag_agg_data__$2,G__31530__$1,tag_histogram__$3,filter_spec__$2,G__31627__$2,map__31634__$2,map__31632__$2,tag_type__$2,input_schema31526__$1,output_schema31525__$1,map__31633__$2,validate__6034__auto____$1,id__$2,output_checker31528__$1,input_checker31527__$1,opts__$2,tag_data__$2,ufv____$1,G__31628__$2,map__31630__$2,meta31636){return (new clustermap.components.tag_histogram.t31635(query__$2,map__31631__$2,owner__$3,metrics__$2,map__31629__$2,G__31531__$1,G__31529__$1,tag_agg_data__$2,G__31530__$1,tag_histogram__$3,filter_spec__$2,G__31627__$2,map__31634__$2,map__31632__$2,tag_type__$2,input_schema31526__$1,output_schema31525__$1,map__31633__$2,validate__6034__auto____$1,id__$2,output_checker31528__$1,input_checker31527__$1,opts__$2,tag_data__$2,ufv____$1,G__31628__$2,map__31630__$2,meta31636));
});})(map__31632,map__31632__$1,map__31633,map__31633__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31634,map__31634__$1,opts__$1,id__$1,G__31627,map__31629,map__31629__$1,map__31630,map__31630__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31628,map__31631,map__31631__$1,opts,id,validate__6034__auto__,ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
;
}
return (new clustermap.components.tag_histogram.t31635(query__$1,map__31631__$1,owner__$2,metrics__$1,map__31629__$1,G__31531,G__31529,tag_agg_data__$1,G__31530,tag_histogram__$2,filter_spec__$1,G__31627__$1,map__31634__$1,map__31632__$1,tag_type__$1,input_schema31526_31718,output_schema31525_31717,map__31633__$1,validate__6034__auto__,id__$1,output_checker31528_31720,input_checker31527_31719,opts__$1,tag_data__$1,ufv___31716,G__31628__$1,map__31630__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31737 = output_checker31528_31720.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31737))
{var error__6036__auto___31738 = temp__4126__auto___31737;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31738)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31738,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31525_31717,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___31716,output_schema31525_31717,input_schema31526_31718,input_checker31527_31719,output_checker31528_31720))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema31525_31717,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31526_31718], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m31524){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m31524);
});
__GT_tag_histogram = function(cursor__7850__auto__,m31524){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m31524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
