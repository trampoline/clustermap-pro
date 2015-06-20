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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31738,p__31739){var map__31782 = p__31738;var map__31782__$1 = ((cljs.core.seq_QMARK_.call(null,map__31782))?cljs.core.apply.call(null,cljs.core.hash_map,map__31782):map__31782);var tag_agg_data = cljs.core.get.call(null,map__31782__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__31782__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__31782__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__31782__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var bar_width = cljs.core.get.call(null,map__31782__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__31782__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__31782__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__31783 = p__31739;var map__31783__$1 = ((cljs.core.seq_QMARK_.call(null,map__31783))?cljs.core.apply.call(null,cljs.core.hash_map,map__31783):map__31783);var opts = map__31783__$1;var y1_title = cljs.core.get.call(null,map__31783__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31783__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title){
return (function iter__31784(s__31785){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title){
return (function (){var s__31785__$1 = s__31785;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31785__$1);if(temp__4126__auto__)
{var s__31785__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31785__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31785__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31787 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31786 = (0);while(true){
if((i__31786 < size__4376__auto__))
{var map__31798 = cljs.core._nth.call(null,c__4375__auto__,i__31786);var map__31798__$1 = ((cljs.core.seq_QMARK_.call(null,map__31798))?cljs.core.apply.call(null,cljs.core.hash_map,map__31798):map__31798);var metric_spec = map__31798__$1;var title = cljs.core.get.call(null,map__31798__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31798__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31787,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31786,map__31798,map__31798__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31787,s__31785__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title){
return (function iter__31799(s__31800){return (new cljs.core.LazySeq(null,((function (i__31786,map__31798,map__31798__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31787,s__31785__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title){
return (function (){var s__31800__$1 = s__31800;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31800__$1);if(temp__4126__auto____$1)
{var s__31800__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31800__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31800__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31802 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31801 = (0);while(true){
if((i__31801 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31801);cljs.core.chunk_append.call(null,b__31802,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31824 = (i__31801 + (1));
i__31801 = G__31824;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31802),iter__31799.call(null,cljs.core.chunk_rest.call(null,s__31800__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31802),null);
}
} else
{var record = cljs.core.first.call(null,s__31800__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31799.call(null,cljs.core.rest.call(null,s__31800__$2)));
}
} else
{return null;
}
break;
}
});})(i__31786,map__31798,map__31798__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31787,s__31785__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31786,map__31798,map__31798__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31787,s__31785__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__31825 = (i__31786 + (1));
i__31786 = G__31825;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31787),iter__31784.call(null,cljs.core.chunk_rest.call(null,s__31785__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31787),null);
}
} else
{var map__31803 = cljs.core.first.call(null,s__31785__$2);var map__31803__$1 = ((cljs.core.seq_QMARK_.call(null,map__31803))?cljs.core.apply.call(null,cljs.core.hash_map,map__31803):map__31803);var metric_spec = map__31803__$1;var title = cljs.core.get.call(null,map__31803__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31803__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31803,map__31803__$1,metric_spec,title,metric,s__31785__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title){
return (function iter__31804(s__31805){return (new cljs.core.LazySeq(null,((function (map__31803,map__31803__$1,metric_spec,title,metric,s__31785__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title){
return (function (){var s__31805__$1 = s__31805;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31805__$1);if(temp__4126__auto____$1)
{var s__31805__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31805__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31805__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31807 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31806 = (0);while(true){
if((i__31806 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31806);cljs.core.chunk_append.call(null,b__31807,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31826 = (i__31806 + (1));
i__31806 = G__31826;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31807),iter__31804.call(null,cljs.core.chunk_rest.call(null,s__31805__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31807),null);
}
} else
{var record = cljs.core.first.call(null,s__31805__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31804.call(null,cljs.core.rest.call(null,s__31805__$2)));
}
} else
{return null;
}
break;
}
});})(map__31803,map__31803__$1,metric_spec,title,metric,s__31785__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31803,map__31803__$1,metric_spec,title,metric,s__31785__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31784.call(null,cljs.core.rest.call(null,s__31785__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title){
return (function iter__31808(s__31809){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title){
return (function (){var s__31809__$1 = s__31809;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31809__$1);if(temp__4126__auto__)
{var s__31809__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31809__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31809__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31811 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31810 = (0);while(true){
if((i__31810 < size__4376__auto__))
{var map__31814 = cljs.core._nth.call(null,c__4375__auto__,i__31810);var map__31814__$1 = ((cljs.core.seq_QMARK_.call(null,map__31814))?cljs.core.apply.call(null,cljs.core.hash_map,map__31814):map__31814);var label_formatter = cljs.core.get.call(null,map__31814__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31814__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31811,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__31827 = (i__31810 + (1));
i__31810 = G__31827;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31811),iter__31808.call(null,cljs.core.chunk_rest.call(null,s__31809__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31811),null);
}
} else
{var map__31815 = cljs.core.first.call(null,s__31809__$2);var map__31815__$1 = ((cljs.core.seq_QMARK_.call(null,map__31815))?cljs.core.apply.call(null,cljs.core.hash_map,map__31815):map__31815);var label_formatter = cljs.core.get.call(null,map__31815__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31815__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31808.call(null,cljs.core.rest.call(null,s__31809__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title){
return (function iter__31816(s__31817){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title){
return (function (){var s__31817__$1 = s__31817;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31817__$1);if(temp__4126__auto__)
{var s__31817__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31817__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31817__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31819 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31818 = (0);while(true){
if((i__31818 < size__4376__auto__))
{var vec__31822 = cljs.core._nth.call(null,c__4375__auto__,i__31818);var y = cljs.core.nth.call(null,vec__31822,(0),null);var i = cljs.core.nth.call(null,vec__31822,(1),null);cljs.core.chunk_append.call(null,b__31819,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__31828 = (i__31818 + (1));
i__31818 = G__31828;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31819),iter__31816.call(null,cljs.core.chunk_rest.call(null,s__31817__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31819),null);
}
} else
{var vec__31823 = cljs.core.first.call(null,s__31817__$2);var y = cljs.core.nth.call(null,vec__31823,(0),null);var i = cljs.core.nth.call(null,vec__31823,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31816.call(null,cljs.core.rest.call(null,s__31817__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31782,map__31782__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31783,map__31783__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___32021 = schema.utils.use_fn_validation;var output_schema31830_32022 = schema.core.Any;var input_schema31831_32023 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker31832_32024 = schema.core.checker.call(null,input_schema31831_32023);var output_checker31833_32025 = schema.core.checker.call(null,output_schema31830_32022);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function tag_histogram(G__31834,G__31835,G__31836){var validate__6034__auto__ = ufv___32021.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32026 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31834,G__31835,G__31836], null);var temp__4126__auto___32027 = input_checker31832_32024.call(null,args__6035__auto___32026);if(cljs.core.truth_(temp__4126__auto___32027))
{var error__6036__auto___32028 = temp__4126__auto___32027;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32028)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32028,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32026,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31831_32023,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__31932 = G__31834;var map__31934 = G__31932;var map__31934__$1 = ((cljs.core.seq_QMARK_.call(null,map__31934))?cljs.core.apply.call(null,cljs.core.hash_map,map__31934):map__31934);var map__31935 = cljs.core.get.call(null,map__31934__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31935__$1 = ((cljs.core.seq_QMARK_.call(null,map__31935))?cljs.core.apply.call(null,cljs.core.hash_map,map__31935):map__31935);var tag_histogram__$1 = map__31935__$1;var query = cljs.core.get.call(null,map__31935__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__31935__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__31935__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__31935__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__31935__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__31934__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__31835;var G__31933 = G__31836;var map__31936 = G__31933;var map__31936__$1 = ((cljs.core.seq_QMARK_.call(null,map__31936))?cljs.core.apply.call(null,cljs.core.hash_map,map__31936):map__31936);var opts = map__31936__$1;var id = cljs.core.get.call(null,map__31936__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__31932__$1 = G__31932;var owner__$1 = owner;var G__31933__$1 = G__31933;while(true){
var map__31937 = G__31932__$1;var map__31937__$1 = ((cljs.core.seq_QMARK_.call(null,map__31937))?cljs.core.apply.call(null,cljs.core.hash_map,map__31937):map__31937);var map__31938 = cljs.core.get.call(null,map__31937__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31938__$1 = ((cljs.core.seq_QMARK_.call(null,map__31938))?cljs.core.apply.call(null,cljs.core.hash_map,map__31938):map__31938);var tag_histogram__$2 = map__31938__$1;var query__$1 = cljs.core.get.call(null,map__31938__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__31938__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__31938__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__31938__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__31938__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__31937__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__31939 = G__31933__$1;var map__31939__$1 = ((cljs.core.seq_QMARK_.call(null,map__31939))?cljs.core.apply.call(null,cljs.core.hash_map,map__31939):map__31939);var opts__$1 = map__31939__$1;var id__$1 = cljs.core.get.call(null,map__31939__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t31940 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t31940 = (function (input_schema31831,G__31836,query,map__31938,owner,metrics,output_checker31833,G__31932,map__31939,output_schema31830,input_checker31832,map__31934,tag_agg_data,tag_histogram,filter_spec,map__31935,tag_type,validate__6034__auto__,id,G__31834,map__31936,opts,tag_data,G__31835,map__31937,ufv__,G__31933,meta31941){
this.input_schema31831 = input_schema31831;
this.G__31836 = G__31836;
this.query = query;
this.map__31938 = map__31938;
this.owner = owner;
this.metrics = metrics;
this.output_checker31833 = output_checker31833;
this.G__31932 = G__31932;
this.map__31939 = map__31939;
this.output_schema31830 = output_schema31830;
this.input_checker31832 = input_checker31832;
this.map__31934 = map__31934;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.filter_spec = filter_spec;
this.map__31935 = map__31935;
this.tag_type = tag_type;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.G__31834 = G__31834;
this.map__31936 = map__31936;
this.opts = opts;
this.tag_data = tag_data;
this.G__31835 = G__31835;
this.map__31937 = map__31937;
this.ufv__ = ufv__;
this.G__31933 = G__31933;
this.meta31941 = meta31941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t31940.cljs$lang$type = true;
clustermap.components.tag_histogram.t31940.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t31940";
clustermap.components.tag_histogram.t31940.cljs$lang$ctorPrWriter = ((function (map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t31940");
});})(map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
;
clustermap.components.tag_histogram.t31940.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t31940.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
;
clustermap.components.tag_histogram.t31940.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t31940.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function (_,p__31943,___$1){var self__ = this;
var map__31944 = p__31943;var map__31944__$1 = ((cljs.core.seq_QMARK_.call(null,map__31944))?cljs.core.apply.call(null,cljs.core.hash_map,map__31944):map__31944);var map__31945 = cljs.core.get.call(null,map__31944__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31945__$1 = ((cljs.core.seq_QMARK_.call(null,map__31945))?cljs.core.apply.call(null,cljs.core.hash_map,map__31945):map__31945);var prev_query = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__31944__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
;
clustermap.components.tag_histogram.t31940.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t31940.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function (_,p__31946,p__31947){var self__ = this;
var map__31948 = p__31946;var map__31948__$1 = ((cljs.core.seq_QMARK_.call(null,map__31948))?cljs.core.apply.call(null,cljs.core.hash_map,map__31948):map__31948);var map__31949 = cljs.core.get.call(null,map__31948__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31949__$1 = ((cljs.core.seq_QMARK_.call(null,map__31949))?cljs.core.apply.call(null,cljs.core.hash_map,map__31949):map__31949);var next_query = cljs.core.get.call(null,map__31949__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__31949__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__31949__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__31949__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__31949__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__31948__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31950 = p__31947;var map__31950__$1 = ((cljs.core.seq_QMARK_.call(null,map__31950))?cljs.core.apply.call(null,cljs.core.hash_map,map__31950):map__31950);var fetch_tag_data_fn = cljs.core.get.call(null,map__31950__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__31950__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___32029 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32029,___$1,map__31948,map__31948__$1,map__31949,map__31949__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31950,map__31950__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32029,___$1,map__31948,map__31948__$1,map__31949,map__31949__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31950,map__31950__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function (state_31968){var state_val_31969 = (state_31968[(1)]);if((state_val_31969 === (5)))
{var inst_31966 = (state_31968[(2)]);var state_31968__$1 = state_31968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31968__$1,inst_31966);
} else
{if((state_val_31969 === (4)))
{var state_31968__$1 = state_31968;var statearr_31970_32030 = state_31968__$1;(statearr_31970_32030[(2)] = null);
(statearr_31970_32030[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31969 === (3)))
{var inst_31953 = (state_31968[(7)]);var inst_31955 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31956 = ["HISTOGRAM TAGS: ",inst_31953];var inst_31957 = (new cljs.core.PersistentVector(null,2,(5),inst_31955,inst_31956,null));var inst_31958 = cljs.core.clj__GT_js.call(null,inst_31957);var inst_31959 = console.log(inst_31958);var inst_31960 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31961 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_31962 = (new cljs.core.PersistentVector(null,1,(5),inst_31960,inst_31961,null));var inst_31963 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31962,inst_31953);var state_31968__$1 = (function (){var statearr_31971 = state_31968;(statearr_31971[(8)] = inst_31959);
return statearr_31971;
})();var statearr_31972_32031 = state_31968__$1;(statearr_31972_32031[(2)] = inst_31963);
(statearr_31972_32031[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31969 === (2)))
{var inst_31953 = (state_31968[(7)]);var inst_31953__$1 = (state_31968[(2)]);var state_31968__$1 = (function (){var statearr_31973 = state_31968;(statearr_31973[(7)] = inst_31953__$1);
return statearr_31973;
})();if(cljs.core.truth_(inst_31953__$1))
{var statearr_31974_32032 = state_31968__$1;(statearr_31974_32032[(1)] = (3));
} else
{var statearr_31975_32033 = state_31968__$1;(statearr_31975_32033[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31969 === (1)))
{var inst_31951 = fetch_tag_data_fn.call(null,next_tag_type);var state_31968__$1 = state_31968;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31968__$1,(2),inst_31951);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32029,___$1,map__31948,map__31948__$1,map__31949,map__31949__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31950,map__31950__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
;return ((function (switch__9110__auto__,c__9125__auto___32029,___$1,map__31948,map__31948__$1,map__31949,map__31949__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31950,map__31950__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31979 = [null,null,null,null,null,null,null,null,null];(statearr_31979[(0)] = state_machine__9111__auto__);
(statearr_31979[(1)] = (1));
return statearr_31979;
});
var state_machine__9111__auto____1 = (function (state_31968){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31968);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31980){if((e31980 instanceof Object))
{var ex__9114__auto__ = e31980;var statearr_31981_32034 = state_31968;(statearr_31981_32034[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31968);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31980;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32035 = state_31968;
state_31968 = G__32035;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31968){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32029,___$1,map__31948,map__31948__$1,map__31949,map__31949__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31950,map__31950__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
})();var state__9127__auto__ = (function (){var statearr_31982 = f__9126__auto__.call(null);(statearr_31982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32029);
return statearr_31982;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32029,___$1,map__31948,map__31948__$1,map__31949,map__31949__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31950,map__31950__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__31948,map__31948__$1,map__31949,map__31949__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31950,map__31950__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__31948,map__31948__$1,map__31949,map__31949__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31950,map__31950__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function (state_32005){var state_val_32006 = (state_32005[(1)]);if((state_val_32006 === (5)))
{var inst_32003 = (state_32005[(2)]);var state_32005__$1 = state_32005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32005__$1,inst_32003);
} else
{if((state_val_32006 === (4)))
{var state_32005__$1 = state_32005;var statearr_32007_32036 = state_32005__$1;(statearr_32007_32036[(2)] = null);
(statearr_32007_32036[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32006 === (3)))
{var inst_31989 = (state_32005[(7)]);var inst_31991 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31992 = ["HISTOGRAM TAG AGGS: ",inst_31989];var inst_31993 = (new cljs.core.PersistentVector(null,2,(5),inst_31991,inst_31992,null));var inst_31994 = cljs.core.clj__GT_js.call(null,inst_31993);var inst_31995 = console.log(inst_31994);var inst_31996 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31997 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_31998 = (new cljs.core.PersistentVector(null,1,(5),inst_31996,inst_31997,null));var inst_31999 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_31989);var inst_32000 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31998,inst_31999);var state_32005__$1 = (function (){var statearr_32008 = state_32005;(statearr_32008[(8)] = inst_31995);
return statearr_32008;
})();var statearr_32009_32037 = state_32005__$1;(statearr_32009_32037[(2)] = inst_32000);
(statearr_32009_32037[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32006 === (2)))
{var inst_31989 = (state_32005[(7)]);var inst_31989__$1 = (state_32005[(2)]);var state_32005__$1 = (function (){var statearr_32010 = state_32005;(statearr_32010[(7)] = inst_31989__$1);
return statearr_32010;
})();if(cljs.core.truth_(inst_31989__$1))
{var statearr_32011_32038 = state_32005__$1;(statearr_32011_32038[(1)] = (3));
} else
{var statearr_32012_32039 = state_32005__$1;(statearr_32012_32039[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32006 === (1)))
{var inst_31983 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_31984 = [next_filter_spec];var inst_31985 = cljs.core.PersistentHashMap.fromArrays(inst_31983,inst_31984);var inst_31986 = cljs.core.merge.call(null,next_query,inst_31985);var inst_31987 = fetch_tag_agg_data_fn.call(null,inst_31986);var state_32005__$1 = state_32005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32005__$1,(2),inst_31987);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__31948,map__31948__$1,map__31949,map__31949__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31950,map__31950__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__31948,map__31948__$1,map__31949,map__31949__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31950,map__31950__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32016 = [null,null,null,null,null,null,null,null,null];(statearr_32016[(0)] = state_machine__9111__auto__);
(statearr_32016[(1)] = (1));
return statearr_32016;
});
var state_machine__9111__auto____1 = (function (state_32005){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32005);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32017){if((e32017 instanceof Object))
{var ex__9114__auto__ = e32017;var statearr_32018_32040 = state_32005;(statearr_32018_32040[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32005);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32017;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32041 = state_32005;
state_32005 = G__32041;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32005){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__31948,map__31948__$1,map__31949,map__31949__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31950,map__31950__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
})();var state__9127__auto__ = (function (){var statearr_32019 = f__9126__auto__.call(null);(statearr_32019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__31948,map__31948__$1,map__31949,map__31949__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31950,map__31950__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
;
clustermap.components.tag_histogram.t31940.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t31940.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32020 = om.core.get_node.call(null,self__.owner,"chart");var G__32020__$1 = (((G__32020 == null))?null:jayq.core.$.call(null,G__32020));var G__32020__$2 = (((G__32020__$1 == null))?null:G__32020__$1.highcharts());var G__32020__$3 = (((G__32020__$2 == null))?null:G__32020__$2.reflow());return G__32020__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
);
});})(map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
;
clustermap.components.tag_histogram.t31940.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t31940.prototype.om$core$IRender$render$arity$1 = ((function (map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
;
clustermap.components.tag_histogram.t31940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function (_31942){var self__ = this;
var _31942__$1 = this;return self__.meta31941;
});})(map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
;
clustermap.components.tag_histogram.t31940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function (_31942,meta31941__$1){var self__ = this;
var _31942__$1 = this;return (new clustermap.components.tag_histogram.t31940(self__.input_schema31831,self__.G__31836,self__.query,self__.map__31938,self__.owner,self__.metrics,self__.output_checker31833,self__.G__31932,self__.map__31939,self__.output_schema31830,self__.input_checker31832,self__.map__31934,self__.tag_agg_data,self__.tag_histogram,self__.filter_spec,self__.map__31935,self__.tag_type,self__.validate__6034__auto__,self__.id,self__.G__31834,self__.map__31936,self__.opts,self__.tag_data,self__.G__31835,self__.map__31937,self__.ufv__,self__.G__31933,meta31941__$1));
});})(map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
;
clustermap.components.tag_histogram.__GT_t31940 = ((function (map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025){
return (function __GT_t31940(input_schema31831__$1,G__31836__$1,query__$2,map__31938__$2,owner__$3,metrics__$2,output_checker31833__$1,G__31932__$2,map__31939__$2,output_schema31830__$1,input_checker31832__$1,map__31934__$2,tag_agg_data__$2,tag_histogram__$3,filter_spec__$2,map__31935__$2,tag_type__$2,validate__6034__auto____$1,id__$2,G__31834__$1,map__31936__$2,opts__$2,tag_data__$2,G__31835__$1,map__31937__$2,ufv____$1,G__31933__$2,meta31941){return (new clustermap.components.tag_histogram.t31940(input_schema31831__$1,G__31836__$1,query__$2,map__31938__$2,owner__$3,metrics__$2,output_checker31833__$1,G__31932__$2,map__31939__$2,output_schema31830__$1,input_checker31832__$1,map__31934__$2,tag_agg_data__$2,tag_histogram__$3,filter_spec__$2,map__31935__$2,tag_type__$2,validate__6034__auto____$1,id__$2,G__31834__$1,map__31936__$2,opts__$2,tag_data__$2,G__31835__$1,map__31937__$2,ufv____$1,G__31933__$2,meta31941));
});})(map__31937,map__31937__$1,map__31938,map__31938__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31939,map__31939__$1,opts__$1,id__$1,G__31932,map__31934,map__31934__$1,map__31935,map__31935__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31933,map__31936,map__31936__$1,opts,id,validate__6034__auto__,ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
;
}
return (new clustermap.components.tag_histogram.t31940(input_schema31831_32023,G__31836,query__$1,map__31938__$1,owner__$2,metrics__$1,output_checker31833_32025,G__31932__$1,map__31939__$1,output_schema31830_32022,input_checker31832_32024,map__31934__$1,tag_agg_data__$1,tag_histogram__$2,filter_spec__$1,map__31935__$1,tag_type__$1,validate__6034__auto__,id__$1,G__31834,map__31936__$1,opts__$1,tag_data__$1,G__31835,map__31937__$1,ufv___32021,G__31933__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32042 = output_checker31833_32025.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32042))
{var error__6036__auto___32043 = temp__4126__auto___32042;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32043)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32043,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31830_32022,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32021,output_schema31830_32022,input_schema31831_32023,input_checker31832_32024,output_checker31833_32025))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema31830_32022,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31831_32023], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m31829){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m31829);
});
__GT_tag_histogram = function(cursor__7850__auto__,m31829){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m31829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
