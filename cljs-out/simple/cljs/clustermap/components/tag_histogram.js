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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31586,p__31587){var map__31630 = p__31586;var map__31630__$1 = ((cljs.core.seq_QMARK_.call(null,map__31630))?cljs.core.apply.call(null,cljs.core.hash_map,map__31630):map__31630);var tag_agg_data = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var bar_width = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__31631 = p__31587;var map__31631__$1 = ((cljs.core.seq_QMARK_.call(null,map__31631))?cljs.core.apply.call(null,cljs.core.hash_map,map__31631):map__31631);var opts = map__31631__$1;var y1_title = cljs.core.get.call(null,map__31631__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31631__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title){
return (function iter__31632(s__31633){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title){
return (function (){var s__31633__$1 = s__31633;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31633__$1);if(temp__4126__auto__)
{var s__31633__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31633__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31633__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31635 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31634 = (0);while(true){
if((i__31634 < size__4376__auto__))
{var map__31646 = cljs.core._nth.call(null,c__4375__auto__,i__31634);var map__31646__$1 = ((cljs.core.seq_QMARK_.call(null,map__31646))?cljs.core.apply.call(null,cljs.core.hash_map,map__31646):map__31646);var metric_spec = map__31646__$1;var title = cljs.core.get.call(null,map__31646__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31646__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31635,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31634,map__31646,map__31646__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31635,s__31633__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title){
return (function iter__31647(s__31648){return (new cljs.core.LazySeq(null,((function (i__31634,map__31646,map__31646__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31635,s__31633__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title){
return (function (){var s__31648__$1 = s__31648;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31648__$1);if(temp__4126__auto____$1)
{var s__31648__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31648__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31648__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31650 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31649 = (0);while(true){
if((i__31649 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31649);cljs.core.chunk_append.call(null,b__31650,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31672 = (i__31649 + (1));
i__31649 = G__31672;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31650),iter__31647.call(null,cljs.core.chunk_rest.call(null,s__31648__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31650),null);
}
} else
{var record = cljs.core.first.call(null,s__31648__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31647.call(null,cljs.core.rest.call(null,s__31648__$2)));
}
} else
{return null;
}
break;
}
});})(i__31634,map__31646,map__31646__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31635,s__31633__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31634,map__31646,map__31646__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31635,s__31633__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__31673 = (i__31634 + (1));
i__31634 = G__31673;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31635),iter__31632.call(null,cljs.core.chunk_rest.call(null,s__31633__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31635),null);
}
} else
{var map__31651 = cljs.core.first.call(null,s__31633__$2);var map__31651__$1 = ((cljs.core.seq_QMARK_.call(null,map__31651))?cljs.core.apply.call(null,cljs.core.hash_map,map__31651):map__31651);var metric_spec = map__31651__$1;var title = cljs.core.get.call(null,map__31651__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31651__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31651,map__31651__$1,metric_spec,title,metric,s__31633__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title){
return (function iter__31652(s__31653){return (new cljs.core.LazySeq(null,((function (map__31651,map__31651__$1,metric_spec,title,metric,s__31633__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title){
return (function (){var s__31653__$1 = s__31653;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31653__$1);if(temp__4126__auto____$1)
{var s__31653__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31653__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31653__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31655 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31654 = (0);while(true){
if((i__31654 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31654);cljs.core.chunk_append.call(null,b__31655,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31674 = (i__31654 + (1));
i__31654 = G__31674;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31655),iter__31652.call(null,cljs.core.chunk_rest.call(null,s__31653__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31655),null);
}
} else
{var record = cljs.core.first.call(null,s__31653__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31652.call(null,cljs.core.rest.call(null,s__31653__$2)));
}
} else
{return null;
}
break;
}
});})(map__31651,map__31651__$1,metric_spec,title,metric,s__31633__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31651,map__31651__$1,metric_spec,title,metric,s__31633__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31632.call(null,cljs.core.rest.call(null,s__31633__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title){
return (function iter__31656(s__31657){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title){
return (function (){var s__31657__$1 = s__31657;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31657__$1);if(temp__4126__auto__)
{var s__31657__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31657__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31657__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31659 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31658 = (0);while(true){
if((i__31658 < size__4376__auto__))
{var map__31662 = cljs.core._nth.call(null,c__4375__auto__,i__31658);var map__31662__$1 = ((cljs.core.seq_QMARK_.call(null,map__31662))?cljs.core.apply.call(null,cljs.core.hash_map,map__31662):map__31662);var label_formatter = cljs.core.get.call(null,map__31662__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31662__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31659,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__31675 = (i__31658 + (1));
i__31658 = G__31675;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31659),iter__31656.call(null,cljs.core.chunk_rest.call(null,s__31657__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31659),null);
}
} else
{var map__31663 = cljs.core.first.call(null,s__31657__$2);var map__31663__$1 = ((cljs.core.seq_QMARK_.call(null,map__31663))?cljs.core.apply.call(null,cljs.core.hash_map,map__31663):map__31663);var label_formatter = cljs.core.get.call(null,map__31663__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31663__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31656.call(null,cljs.core.rest.call(null,s__31657__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title){
return (function iter__31664(s__31665){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title){
return (function (){var s__31665__$1 = s__31665;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31665__$1);if(temp__4126__auto__)
{var s__31665__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31665__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31665__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31667 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31666 = (0);while(true){
if((i__31666 < size__4376__auto__))
{var vec__31670 = cljs.core._nth.call(null,c__4375__auto__,i__31666);var y = cljs.core.nth.call(null,vec__31670,(0),null);var i = cljs.core.nth.call(null,vec__31670,(1),null);cljs.core.chunk_append.call(null,b__31667,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__31676 = (i__31666 + (1));
i__31666 = G__31676;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31667),iter__31664.call(null,cljs.core.chunk_rest.call(null,s__31665__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31667),null);
}
} else
{var vec__31671 = cljs.core.first.call(null,s__31665__$2);var y = cljs.core.nth.call(null,vec__31671,(0),null);var i = cljs.core.nth.call(null,vec__31671,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31664.call(null,cljs.core.rest.call(null,s__31665__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31630,map__31630__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31631,map__31631__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___31869 = schema.utils.use_fn_validation;var output_schema31678_31870 = schema.core.Any;var input_schema31679_31871 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker31680_31872 = schema.core.checker.call(null,input_schema31679_31871);var output_checker31681_31873 = schema.core.checker.call(null,output_schema31678_31870);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function tag_histogram(G__31682,G__31683,G__31684){var validate__6034__auto__ = ufv___31869.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31874 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31682,G__31683,G__31684], null);var temp__4126__auto___31875 = input_checker31680_31872.call(null,args__6035__auto___31874);if(cljs.core.truth_(temp__4126__auto___31875))
{var error__6036__auto___31876 = temp__4126__auto___31875;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31876)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31876,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31874,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31679_31871,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__31780 = G__31682;var map__31782 = G__31780;var map__31782__$1 = ((cljs.core.seq_QMARK_.call(null,map__31782))?cljs.core.apply.call(null,cljs.core.hash_map,map__31782):map__31782);var map__31783 = cljs.core.get.call(null,map__31782__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31783__$1 = ((cljs.core.seq_QMARK_.call(null,map__31783))?cljs.core.apply.call(null,cljs.core.hash_map,map__31783):map__31783);var tag_histogram__$1 = map__31783__$1;var query = cljs.core.get.call(null,map__31783__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__31783__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__31783__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__31783__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__31783__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__31782__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__31683;var G__31781 = G__31684;var map__31784 = G__31781;var map__31784__$1 = ((cljs.core.seq_QMARK_.call(null,map__31784))?cljs.core.apply.call(null,cljs.core.hash_map,map__31784):map__31784);var opts = map__31784__$1;var id = cljs.core.get.call(null,map__31784__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__31780__$1 = G__31780;var owner__$1 = owner;var G__31781__$1 = G__31781;while(true){
var map__31785 = G__31780__$1;var map__31785__$1 = ((cljs.core.seq_QMARK_.call(null,map__31785))?cljs.core.apply.call(null,cljs.core.hash_map,map__31785):map__31785);var map__31786 = cljs.core.get.call(null,map__31785__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31786__$1 = ((cljs.core.seq_QMARK_.call(null,map__31786))?cljs.core.apply.call(null,cljs.core.hash_map,map__31786):map__31786);var tag_histogram__$2 = map__31786__$1;var query__$1 = cljs.core.get.call(null,map__31786__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__31786__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__31786__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__31786__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__31786__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__31785__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__31787 = G__31781__$1;var map__31787__$1 = ((cljs.core.seq_QMARK_.call(null,map__31787))?cljs.core.apply.call(null,cljs.core.hash_map,map__31787):map__31787);var opts__$1 = map__31787__$1;var id__$1 = cljs.core.get.call(null,map__31787__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t31788 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t31788 = (function (query,G__31781,owner,metrics,G__31684,map__31783,output_schema31678,map__31786,map__31782,output_checker31681,tag_agg_data,tag_histogram,filter_spec,map__31785,G__31780,map__31787,tag_type,input_checker31680,map__31784,G__31683,validate__6034__auto__,id,input_schema31679,opts,tag_data,G__31682,ufv__,meta31789){
this.query = query;
this.G__31781 = G__31781;
this.owner = owner;
this.metrics = metrics;
this.G__31684 = G__31684;
this.map__31783 = map__31783;
this.output_schema31678 = output_schema31678;
this.map__31786 = map__31786;
this.map__31782 = map__31782;
this.output_checker31681 = output_checker31681;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.filter_spec = filter_spec;
this.map__31785 = map__31785;
this.G__31780 = G__31780;
this.map__31787 = map__31787;
this.tag_type = tag_type;
this.input_checker31680 = input_checker31680;
this.map__31784 = map__31784;
this.G__31683 = G__31683;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.input_schema31679 = input_schema31679;
this.opts = opts;
this.tag_data = tag_data;
this.G__31682 = G__31682;
this.ufv__ = ufv__;
this.meta31789 = meta31789;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t31788.cljs$lang$type = true;
clustermap.components.tag_histogram.t31788.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t31788";
clustermap.components.tag_histogram.t31788.cljs$lang$ctorPrWriter = ((function (map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t31788");
});})(map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
;
clustermap.components.tag_histogram.t31788.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t31788.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
;
clustermap.components.tag_histogram.t31788.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t31788.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function (_,p__31791,___$1){var self__ = this;
var map__31792 = p__31791;var map__31792__$1 = ((cljs.core.seq_QMARK_.call(null,map__31792))?cljs.core.apply.call(null,cljs.core.hash_map,map__31792):map__31792);var map__31793 = cljs.core.get.call(null,map__31792__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31793__$1 = ((cljs.core.seq_QMARK_.call(null,map__31793))?cljs.core.apply.call(null,cljs.core.hash_map,map__31793):map__31793);var prev_query = cljs.core.get.call(null,map__31793__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__31793__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__31793__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__31793__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__31792__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
;
clustermap.components.tag_histogram.t31788.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t31788.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function (_,p__31794,p__31795){var self__ = this;
var map__31796 = p__31794;var map__31796__$1 = ((cljs.core.seq_QMARK_.call(null,map__31796))?cljs.core.apply.call(null,cljs.core.hash_map,map__31796):map__31796);var map__31797 = cljs.core.get.call(null,map__31796__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31797__$1 = ((cljs.core.seq_QMARK_.call(null,map__31797))?cljs.core.apply.call(null,cljs.core.hash_map,map__31797):map__31797);var next_query = cljs.core.get.call(null,map__31797__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__31797__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__31797__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__31797__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__31797__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__31796__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31798 = p__31795;var map__31798__$1 = ((cljs.core.seq_QMARK_.call(null,map__31798))?cljs.core.apply.call(null,cljs.core.hash_map,map__31798):map__31798);var fetch_tag_data_fn = cljs.core.get.call(null,map__31798__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__31798__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___31877 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___31877,___$1,map__31796,map__31796__$1,map__31797,map__31797__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31798,map__31798__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___31877,___$1,map__31796,map__31796__$1,map__31797,map__31797__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31798,map__31798__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function (state_31816){var state_val_31817 = (state_31816[(1)]);if((state_val_31817 === (5)))
{var inst_31814 = (state_31816[(2)]);var state_31816__$1 = state_31816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31816__$1,inst_31814);
} else
{if((state_val_31817 === (4)))
{var state_31816__$1 = state_31816;var statearr_31818_31878 = state_31816__$1;(statearr_31818_31878[(2)] = null);
(statearr_31818_31878[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31817 === (3)))
{var inst_31801 = (state_31816[(7)]);var inst_31803 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31804 = ["HISTOGRAM TAGS: ",inst_31801];var inst_31805 = (new cljs.core.PersistentVector(null,2,(5),inst_31803,inst_31804,null));var inst_31806 = cljs.core.clj__GT_js.call(null,inst_31805);var inst_31807 = console.log(inst_31806);var inst_31808 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31809 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_31810 = (new cljs.core.PersistentVector(null,1,(5),inst_31808,inst_31809,null));var inst_31811 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31810,inst_31801);var state_31816__$1 = (function (){var statearr_31819 = state_31816;(statearr_31819[(8)] = inst_31807);
return statearr_31819;
})();var statearr_31820_31879 = state_31816__$1;(statearr_31820_31879[(2)] = inst_31811);
(statearr_31820_31879[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31817 === (2)))
{var inst_31801 = (state_31816[(7)]);var inst_31801__$1 = (state_31816[(2)]);var state_31816__$1 = (function (){var statearr_31821 = state_31816;(statearr_31821[(7)] = inst_31801__$1);
return statearr_31821;
})();if(cljs.core.truth_(inst_31801__$1))
{var statearr_31822_31880 = state_31816__$1;(statearr_31822_31880[(1)] = (3));
} else
{var statearr_31823_31881 = state_31816__$1;(statearr_31823_31881[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31817 === (1)))
{var inst_31799 = fetch_tag_data_fn.call(null,next_tag_type);var state_31816__$1 = state_31816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31816__$1,(2),inst_31799);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___31877,___$1,map__31796,map__31796__$1,map__31797,map__31797__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31798,map__31798__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
;return ((function (switch__9110__auto__,c__9125__auto___31877,___$1,map__31796,map__31796__$1,map__31797,map__31797__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31798,map__31798__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31827 = [null,null,null,null,null,null,null,null,null];(statearr_31827[(0)] = state_machine__9111__auto__);
(statearr_31827[(1)] = (1));
return statearr_31827;
});
var state_machine__9111__auto____1 = (function (state_31816){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31816);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31828){if((e31828 instanceof Object))
{var ex__9114__auto__ = e31828;var statearr_31829_31882 = state_31816;(statearr_31829_31882[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31816);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31828;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31883 = state_31816;
state_31816 = G__31883;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31816){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___31877,___$1,map__31796,map__31796__$1,map__31797,map__31797__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31798,map__31798__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
})();var state__9127__auto__ = (function (){var statearr_31830 = f__9126__auto__.call(null);(statearr_31830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___31877);
return statearr_31830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___31877,___$1,map__31796,map__31796__$1,map__31797,map__31797__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31798,map__31798__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__31796,map__31796__$1,map__31797,map__31797__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31798,map__31798__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__31796,map__31796__$1,map__31797,map__31797__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31798,map__31798__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function (state_31853){var state_val_31854 = (state_31853[(1)]);if((state_val_31854 === (5)))
{var inst_31851 = (state_31853[(2)]);var state_31853__$1 = state_31853;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31853__$1,inst_31851);
} else
{if((state_val_31854 === (4)))
{var state_31853__$1 = state_31853;var statearr_31855_31884 = state_31853__$1;(statearr_31855_31884[(2)] = null);
(statearr_31855_31884[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31854 === (3)))
{var inst_31837 = (state_31853[(7)]);var inst_31839 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31840 = ["HISTOGRAM TAG AGGS: ",inst_31837];var inst_31841 = (new cljs.core.PersistentVector(null,2,(5),inst_31839,inst_31840,null));var inst_31842 = cljs.core.clj__GT_js.call(null,inst_31841);var inst_31843 = console.log(inst_31842);var inst_31844 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31845 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_31846 = (new cljs.core.PersistentVector(null,1,(5),inst_31844,inst_31845,null));var inst_31847 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_31837);var inst_31848 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31846,inst_31847);var state_31853__$1 = (function (){var statearr_31856 = state_31853;(statearr_31856[(8)] = inst_31843);
return statearr_31856;
})();var statearr_31857_31885 = state_31853__$1;(statearr_31857_31885[(2)] = inst_31848);
(statearr_31857_31885[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31854 === (2)))
{var inst_31837 = (state_31853[(7)]);var inst_31837__$1 = (state_31853[(2)]);var state_31853__$1 = (function (){var statearr_31858 = state_31853;(statearr_31858[(7)] = inst_31837__$1);
return statearr_31858;
})();if(cljs.core.truth_(inst_31837__$1))
{var statearr_31859_31886 = state_31853__$1;(statearr_31859_31886[(1)] = (3));
} else
{var statearr_31860_31887 = state_31853__$1;(statearr_31860_31887[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31854 === (1)))
{var inst_31831 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_31832 = [next_filter_spec];var inst_31833 = cljs.core.PersistentHashMap.fromArrays(inst_31831,inst_31832);var inst_31834 = cljs.core.merge.call(null,next_query,inst_31833);var inst_31835 = fetch_tag_agg_data_fn.call(null,inst_31834);var state_31853__$1 = state_31853;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31853__$1,(2),inst_31835);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__31796,map__31796__$1,map__31797,map__31797__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31798,map__31798__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__31796,map__31796__$1,map__31797,map__31797__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31798,map__31798__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31864 = [null,null,null,null,null,null,null,null,null];(statearr_31864[(0)] = state_machine__9111__auto__);
(statearr_31864[(1)] = (1));
return statearr_31864;
});
var state_machine__9111__auto____1 = (function (state_31853){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31853);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31865){if((e31865 instanceof Object))
{var ex__9114__auto__ = e31865;var statearr_31866_31888 = state_31853;(statearr_31866_31888[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31853);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31865;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31889 = state_31853;
state_31853 = G__31889;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31853){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__31796,map__31796__$1,map__31797,map__31797__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31798,map__31798__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
})();var state__9127__auto__ = (function (){var statearr_31867 = f__9126__auto__.call(null);(statearr_31867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__31796,map__31796__$1,map__31797,map__31797__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31798,map__31798__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
;
clustermap.components.tag_histogram.t31788.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t31788.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__31868 = om.core.get_node.call(null,self__.owner,"chart");var G__31868__$1 = (((G__31868 == null))?null:jayq.core.$.call(null,G__31868));var G__31868__$2 = (((G__31868__$1 == null))?null:G__31868__$1.highcharts());var G__31868__$3 = (((G__31868__$2 == null))?null:G__31868__$2.reflow());return G__31868__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
);
});})(map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
;
clustermap.components.tag_histogram.t31788.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t31788.prototype.om$core$IRender$render$arity$1 = ((function (map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
;
clustermap.components.tag_histogram.t31788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function (_31790){var self__ = this;
var _31790__$1 = this;return self__.meta31789;
});})(map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
;
clustermap.components.tag_histogram.t31788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function (_31790,meta31789__$1){var self__ = this;
var _31790__$1 = this;return (new clustermap.components.tag_histogram.t31788(self__.query,self__.G__31781,self__.owner,self__.metrics,self__.G__31684,self__.map__31783,self__.output_schema31678,self__.map__31786,self__.map__31782,self__.output_checker31681,self__.tag_agg_data,self__.tag_histogram,self__.filter_spec,self__.map__31785,self__.G__31780,self__.map__31787,self__.tag_type,self__.input_checker31680,self__.map__31784,self__.G__31683,self__.validate__6034__auto__,self__.id,self__.input_schema31679,self__.opts,self__.tag_data,self__.G__31682,self__.ufv__,meta31789__$1));
});})(map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
;
clustermap.components.tag_histogram.__GT_t31788 = ((function (map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873){
return (function __GT_t31788(query__$2,G__31781__$2,owner__$3,metrics__$2,G__31684__$1,map__31783__$2,output_schema31678__$1,map__31786__$2,map__31782__$2,output_checker31681__$1,tag_agg_data__$2,tag_histogram__$3,filter_spec__$2,map__31785__$2,G__31780__$2,map__31787__$2,tag_type__$2,input_checker31680__$1,map__31784__$2,G__31683__$1,validate__6034__auto____$1,id__$2,input_schema31679__$1,opts__$2,tag_data__$2,G__31682__$1,ufv____$1,meta31789){return (new clustermap.components.tag_histogram.t31788(query__$2,G__31781__$2,owner__$3,metrics__$2,G__31684__$1,map__31783__$2,output_schema31678__$1,map__31786__$2,map__31782__$2,output_checker31681__$1,tag_agg_data__$2,tag_histogram__$3,filter_spec__$2,map__31785__$2,G__31780__$2,map__31787__$2,tag_type__$2,input_checker31680__$1,map__31784__$2,G__31683__$1,validate__6034__auto____$1,id__$2,input_schema31679__$1,opts__$2,tag_data__$2,G__31682__$1,ufv____$1,meta31789));
});})(map__31785,map__31785__$1,map__31786,map__31786__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31787,map__31787__$1,opts__$1,id__$1,G__31780,map__31782,map__31782__$1,map__31783,map__31783__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31781,map__31784,map__31784__$1,opts,id,validate__6034__auto__,ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
;
}
return (new clustermap.components.tag_histogram.t31788(query__$1,G__31781__$1,owner__$2,metrics__$1,G__31684,map__31783__$1,output_schema31678_31870,map__31786__$1,map__31782__$1,output_checker31681_31873,tag_agg_data__$1,tag_histogram__$2,filter_spec__$1,map__31785__$1,G__31780__$1,map__31787__$1,tag_type__$1,input_checker31680_31872,map__31784__$1,G__31683,validate__6034__auto__,id__$1,input_schema31679_31871,opts__$1,tag_data__$1,G__31682,ufv___31869,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31890 = output_checker31681_31873.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31890))
{var error__6036__auto___31891 = temp__4126__auto___31890;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31891)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31891,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31678_31870,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___31869,output_schema31678_31870,input_schema31679_31871,input_checker31680_31872,output_checker31681_31873))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema31678_31870,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31679_31871], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m31677){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m31677);
});
__GT_tag_histogram = function(cursor__7850__auto__,m31677){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m31677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
