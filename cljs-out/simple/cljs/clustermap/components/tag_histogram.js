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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31780,p__31781){var map__31824 = p__31780;var map__31824__$1 = ((cljs.core.seq_QMARK_.call(null,map__31824))?cljs.core.apply.call(null,cljs.core.hash_map,map__31824):map__31824);var tag_agg_data = cljs.core.get.call(null,map__31824__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__31824__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__31824__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__31824__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var bar_width = cljs.core.get.call(null,map__31824__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__31824__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__31824__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__31825 = p__31781;var map__31825__$1 = ((cljs.core.seq_QMARK_.call(null,map__31825))?cljs.core.apply.call(null,cljs.core.hash_map,map__31825):map__31825);var opts = map__31825__$1;var y1_title = cljs.core.get.call(null,map__31825__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31825__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title){
return (function iter__31826(s__31827){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title){
return (function (){var s__31827__$1 = s__31827;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31827__$1);if(temp__4126__auto__)
{var s__31827__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31827__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31827__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31829 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31828 = (0);while(true){
if((i__31828 < size__4376__auto__))
{var map__31840 = cljs.core._nth.call(null,c__4375__auto__,i__31828);var map__31840__$1 = ((cljs.core.seq_QMARK_.call(null,map__31840))?cljs.core.apply.call(null,cljs.core.hash_map,map__31840):map__31840);var metric_spec = map__31840__$1;var title = cljs.core.get.call(null,map__31840__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31840__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31829,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31828,map__31840,map__31840__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31829,s__31827__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title){
return (function iter__31841(s__31842){return (new cljs.core.LazySeq(null,((function (i__31828,map__31840,map__31840__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31829,s__31827__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title){
return (function (){var s__31842__$1 = s__31842;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31842__$1);if(temp__4126__auto____$1)
{var s__31842__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31842__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31842__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31844 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31843 = (0);while(true){
if((i__31843 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31843);cljs.core.chunk_append.call(null,b__31844,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31866 = (i__31843 + (1));
i__31843 = G__31866;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31844),iter__31841.call(null,cljs.core.chunk_rest.call(null,s__31842__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31844),null);
}
} else
{var record = cljs.core.first.call(null,s__31842__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31841.call(null,cljs.core.rest.call(null,s__31842__$2)));
}
} else
{return null;
}
break;
}
});})(i__31828,map__31840,map__31840__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31829,s__31827__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31828,map__31840,map__31840__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31829,s__31827__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__31867 = (i__31828 + (1));
i__31828 = G__31867;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31829),iter__31826.call(null,cljs.core.chunk_rest.call(null,s__31827__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31829),null);
}
} else
{var map__31845 = cljs.core.first.call(null,s__31827__$2);var map__31845__$1 = ((cljs.core.seq_QMARK_.call(null,map__31845))?cljs.core.apply.call(null,cljs.core.hash_map,map__31845):map__31845);var metric_spec = map__31845__$1;var title = cljs.core.get.call(null,map__31845__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31845__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31845,map__31845__$1,metric_spec,title,metric,s__31827__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title){
return (function iter__31846(s__31847){return (new cljs.core.LazySeq(null,((function (map__31845,map__31845__$1,metric_spec,title,metric,s__31827__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title){
return (function (){var s__31847__$1 = s__31847;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31847__$1);if(temp__4126__auto____$1)
{var s__31847__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31847__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31847__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31849 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31848 = (0);while(true){
if((i__31848 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31848);cljs.core.chunk_append.call(null,b__31849,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31868 = (i__31848 + (1));
i__31848 = G__31868;
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
{var record = cljs.core.first.call(null,s__31847__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31846.call(null,cljs.core.rest.call(null,s__31847__$2)));
}
} else
{return null;
}
break;
}
});})(map__31845,map__31845__$1,metric_spec,title,metric,s__31827__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31845,map__31845__$1,metric_spec,title,metric,s__31827__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31826.call(null,cljs.core.rest.call(null,s__31827__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title){
return (function iter__31850(s__31851){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title){
return (function (){var s__31851__$1 = s__31851;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31851__$1);if(temp__4126__auto__)
{var s__31851__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31851__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31851__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31853 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31852 = (0);while(true){
if((i__31852 < size__4376__auto__))
{var map__31856 = cljs.core._nth.call(null,c__4375__auto__,i__31852);var map__31856__$1 = ((cljs.core.seq_QMARK_.call(null,map__31856))?cljs.core.apply.call(null,cljs.core.hash_map,map__31856):map__31856);var label_formatter = cljs.core.get.call(null,map__31856__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31856__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31853,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__31869 = (i__31852 + (1));
i__31852 = G__31869;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31853),iter__31850.call(null,cljs.core.chunk_rest.call(null,s__31851__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31853),null);
}
} else
{var map__31857 = cljs.core.first.call(null,s__31851__$2);var map__31857__$1 = ((cljs.core.seq_QMARK_.call(null,map__31857))?cljs.core.apply.call(null,cljs.core.hash_map,map__31857):map__31857);var label_formatter = cljs.core.get.call(null,map__31857__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31857__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31850.call(null,cljs.core.rest.call(null,s__31851__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title){
return (function iter__31858(s__31859){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title){
return (function (){var s__31859__$1 = s__31859;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31859__$1);if(temp__4126__auto__)
{var s__31859__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31859__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31859__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31861 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31860 = (0);while(true){
if((i__31860 < size__4376__auto__))
{var vec__31864 = cljs.core._nth.call(null,c__4375__auto__,i__31860);var y = cljs.core.nth.call(null,vec__31864,(0),null);var i = cljs.core.nth.call(null,vec__31864,(1),null);cljs.core.chunk_append.call(null,b__31861,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__31870 = (i__31860 + (1));
i__31860 = G__31870;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31861),iter__31858.call(null,cljs.core.chunk_rest.call(null,s__31859__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31861),null);
}
} else
{var vec__31865 = cljs.core.first.call(null,s__31859__$2);var y = cljs.core.nth.call(null,vec__31865,(0),null);var i = cljs.core.nth.call(null,vec__31865,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31858.call(null,cljs.core.rest.call(null,s__31859__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31824,map__31824__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31825,map__31825__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___32063 = schema.utils.use_fn_validation;var output_schema31872_32064 = schema.core.Any;var input_schema31873_32065 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker31874_32066 = schema.core.checker.call(null,input_schema31873_32065);var output_checker31875_32067 = schema.core.checker.call(null,output_schema31872_32064);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function tag_histogram(G__31876,G__31877,G__31878){var validate__6034__auto__ = ufv___32063.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32068 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31876,G__31877,G__31878], null);var temp__4126__auto___32069 = input_checker31874_32066.call(null,args__6035__auto___32068);if(cljs.core.truth_(temp__4126__auto___32069))
{var error__6036__auto___32070 = temp__4126__auto___32069;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32070)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32070,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32068,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31873_32065,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__31974 = G__31876;var map__31976 = G__31974;var map__31976__$1 = ((cljs.core.seq_QMARK_.call(null,map__31976))?cljs.core.apply.call(null,cljs.core.hash_map,map__31976):map__31976);var map__31977 = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31977__$1 = ((cljs.core.seq_QMARK_.call(null,map__31977))?cljs.core.apply.call(null,cljs.core.hash_map,map__31977):map__31977);var tag_histogram__$1 = map__31977__$1;var query = cljs.core.get.call(null,map__31977__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__31977__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__31977__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__31977__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__31977__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__31877;var G__31975 = G__31878;var map__31978 = G__31975;var map__31978__$1 = ((cljs.core.seq_QMARK_.call(null,map__31978))?cljs.core.apply.call(null,cljs.core.hash_map,map__31978):map__31978);var opts = map__31978__$1;var id = cljs.core.get.call(null,map__31978__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__31974__$1 = G__31974;var owner__$1 = owner;var G__31975__$1 = G__31975;while(true){
var map__31979 = G__31974__$1;var map__31979__$1 = ((cljs.core.seq_QMARK_.call(null,map__31979))?cljs.core.apply.call(null,cljs.core.hash_map,map__31979):map__31979);var map__31980 = cljs.core.get.call(null,map__31979__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31980__$1 = ((cljs.core.seq_QMARK_.call(null,map__31980))?cljs.core.apply.call(null,cljs.core.hash_map,map__31980):map__31980);var tag_histogram__$2 = map__31980__$1;var query__$1 = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__31979__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__31981 = G__31975__$1;var map__31981__$1 = ((cljs.core.seq_QMARK_.call(null,map__31981))?cljs.core.apply.call(null,cljs.core.hash_map,map__31981):map__31981);var opts__$1 = map__31981__$1;var id__$1 = cljs.core.get.call(null,map__31981__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t31982 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t31982 = (function (map__31977,query,owner,metrics,map__31981,G__31975,G__31877,tag_agg_data,tag_histogram,map__31978,G__31974,map__31980,filter_spec,map__31979,input_checker31874,tag_type,G__31878,output_schema31872,output_checker31875,G__31876,input_schema31873,map__31976,validate__6034__auto__,id,opts,tag_data,ufv__,meta31983){
this.map__31977 = map__31977;
this.query = query;
this.owner = owner;
this.metrics = metrics;
this.map__31981 = map__31981;
this.G__31975 = G__31975;
this.G__31877 = G__31877;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.map__31978 = map__31978;
this.G__31974 = G__31974;
this.map__31980 = map__31980;
this.filter_spec = filter_spec;
this.map__31979 = map__31979;
this.input_checker31874 = input_checker31874;
this.tag_type = tag_type;
this.G__31878 = G__31878;
this.output_schema31872 = output_schema31872;
this.output_checker31875 = output_checker31875;
this.G__31876 = G__31876;
this.input_schema31873 = input_schema31873;
this.map__31976 = map__31976;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.meta31983 = meta31983;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t31982.cljs$lang$type = true;
clustermap.components.tag_histogram.t31982.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t31982";
clustermap.components.tag_histogram.t31982.cljs$lang$ctorPrWriter = ((function (map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t31982");
});})(map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
;
clustermap.components.tag_histogram.t31982.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t31982.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
;
clustermap.components.tag_histogram.t31982.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t31982.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function (_,p__31985,___$1){var self__ = this;
var map__31986 = p__31985;var map__31986__$1 = ((cljs.core.seq_QMARK_.call(null,map__31986))?cljs.core.apply.call(null,cljs.core.hash_map,map__31986):map__31986);var map__31987 = cljs.core.get.call(null,map__31986__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31987__$1 = ((cljs.core.seq_QMARK_.call(null,map__31987))?cljs.core.apply.call(null,cljs.core.hash_map,map__31987):map__31987);var prev_query = cljs.core.get.call(null,map__31987__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__31987__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__31987__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__31987__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__31986__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
;
clustermap.components.tag_histogram.t31982.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t31982.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function (_,p__31988,p__31989){var self__ = this;
var map__31990 = p__31988;var map__31990__$1 = ((cljs.core.seq_QMARK_.call(null,map__31990))?cljs.core.apply.call(null,cljs.core.hash_map,map__31990):map__31990);var map__31991 = cljs.core.get.call(null,map__31990__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31991__$1 = ((cljs.core.seq_QMARK_.call(null,map__31991))?cljs.core.apply.call(null,cljs.core.hash_map,map__31991):map__31991);var next_query = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__31990__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31992 = p__31989;var map__31992__$1 = ((cljs.core.seq_QMARK_.call(null,map__31992))?cljs.core.apply.call(null,cljs.core.hash_map,map__31992):map__31992);var fetch_tag_data_fn = cljs.core.get.call(null,map__31992__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__31992__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___32071 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32071,___$1,map__31990,map__31990__$1,map__31991,map__31991__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31992,map__31992__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32071,___$1,map__31990,map__31990__$1,map__31991,map__31991__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31992,map__31992__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function (state_32010){var state_val_32011 = (state_32010[(1)]);if((state_val_32011 === (5)))
{var inst_32008 = (state_32010[(2)]);var state_32010__$1 = state_32010;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32010__$1,inst_32008);
} else
{if((state_val_32011 === (4)))
{var state_32010__$1 = state_32010;var statearr_32012_32072 = state_32010__$1;(statearr_32012_32072[(2)] = null);
(statearr_32012_32072[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32011 === (3)))
{var inst_31995 = (state_32010[(7)]);var inst_31997 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31998 = ["HISTOGRAM TAGS: ",inst_31995];var inst_31999 = (new cljs.core.PersistentVector(null,2,(5),inst_31997,inst_31998,null));var inst_32000 = cljs.core.clj__GT_js.call(null,inst_31999);var inst_32001 = console.log(inst_32000);var inst_32002 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32003 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_32004 = (new cljs.core.PersistentVector(null,1,(5),inst_32002,inst_32003,null));var inst_32005 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32004,inst_31995);var state_32010__$1 = (function (){var statearr_32013 = state_32010;(statearr_32013[(8)] = inst_32001);
return statearr_32013;
})();var statearr_32014_32073 = state_32010__$1;(statearr_32014_32073[(2)] = inst_32005);
(statearr_32014_32073[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32011 === (2)))
{var inst_31995 = (state_32010[(7)]);var inst_31995__$1 = (state_32010[(2)]);var state_32010__$1 = (function (){var statearr_32015 = state_32010;(statearr_32015[(7)] = inst_31995__$1);
return statearr_32015;
})();if(cljs.core.truth_(inst_31995__$1))
{var statearr_32016_32074 = state_32010__$1;(statearr_32016_32074[(1)] = (3));
} else
{var statearr_32017_32075 = state_32010__$1;(statearr_32017_32075[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32011 === (1)))
{var inst_31993 = fetch_tag_data_fn.call(null,next_tag_type);var state_32010__$1 = state_32010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32010__$1,(2),inst_31993);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32071,___$1,map__31990,map__31990__$1,map__31991,map__31991__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31992,map__31992__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
;return ((function (switch__9110__auto__,c__9125__auto___32071,___$1,map__31990,map__31990__$1,map__31991,map__31991__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31992,map__31992__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32021 = [null,null,null,null,null,null,null,null,null];(statearr_32021[(0)] = state_machine__9111__auto__);
(statearr_32021[(1)] = (1));
return statearr_32021;
});
var state_machine__9111__auto____1 = (function (state_32010){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32010);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32022){if((e32022 instanceof Object))
{var ex__9114__auto__ = e32022;var statearr_32023_32076 = state_32010;(statearr_32023_32076[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32010);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32022;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32077 = state_32010;
state_32010 = G__32077;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32010){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32071,___$1,map__31990,map__31990__$1,map__31991,map__31991__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31992,map__31992__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
})();var state__9127__auto__ = (function (){var statearr_32024 = f__9126__auto__.call(null);(statearr_32024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32071);
return statearr_32024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32071,___$1,map__31990,map__31990__$1,map__31991,map__31991__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31992,map__31992__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__31990,map__31990__$1,map__31991,map__31991__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31992,map__31992__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__31990,map__31990__$1,map__31991,map__31991__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31992,map__31992__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function (state_32047){var state_val_32048 = (state_32047[(1)]);if((state_val_32048 === (5)))
{var inst_32045 = (state_32047[(2)]);var state_32047__$1 = state_32047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32047__$1,inst_32045);
} else
{if((state_val_32048 === (4)))
{var state_32047__$1 = state_32047;var statearr_32049_32078 = state_32047__$1;(statearr_32049_32078[(2)] = null);
(statearr_32049_32078[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32048 === (3)))
{var inst_32031 = (state_32047[(7)]);var inst_32033 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32034 = ["HISTOGRAM TAG AGGS: ",inst_32031];var inst_32035 = (new cljs.core.PersistentVector(null,2,(5),inst_32033,inst_32034,null));var inst_32036 = cljs.core.clj__GT_js.call(null,inst_32035);var inst_32037 = console.log(inst_32036);var inst_32038 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32039 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_32040 = (new cljs.core.PersistentVector(null,1,(5),inst_32038,inst_32039,null));var inst_32041 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32031);var inst_32042 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32040,inst_32041);var state_32047__$1 = (function (){var statearr_32050 = state_32047;(statearr_32050[(8)] = inst_32037);
return statearr_32050;
})();var statearr_32051_32079 = state_32047__$1;(statearr_32051_32079[(2)] = inst_32042);
(statearr_32051_32079[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32048 === (2)))
{var inst_32031 = (state_32047[(7)]);var inst_32031__$1 = (state_32047[(2)]);var state_32047__$1 = (function (){var statearr_32052 = state_32047;(statearr_32052[(7)] = inst_32031__$1);
return statearr_32052;
})();if(cljs.core.truth_(inst_32031__$1))
{var statearr_32053_32080 = state_32047__$1;(statearr_32053_32080[(1)] = (3));
} else
{var statearr_32054_32081 = state_32047__$1;(statearr_32054_32081[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32048 === (1)))
{var inst_32025 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32026 = [next_filter_spec];var inst_32027 = cljs.core.PersistentHashMap.fromArrays(inst_32025,inst_32026);var inst_32028 = cljs.core.merge.call(null,next_query,inst_32027);var inst_32029 = fetch_tag_agg_data_fn.call(null,inst_32028);var state_32047__$1 = state_32047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32047__$1,(2),inst_32029);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__31990,map__31990__$1,map__31991,map__31991__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31992,map__31992__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__31990,map__31990__$1,map__31991,map__31991__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31992,map__31992__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32058 = [null,null,null,null,null,null,null,null,null];(statearr_32058[(0)] = state_machine__9111__auto__);
(statearr_32058[(1)] = (1));
return statearr_32058;
});
var state_machine__9111__auto____1 = (function (state_32047){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32047);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32059){if((e32059 instanceof Object))
{var ex__9114__auto__ = e32059;var statearr_32060_32082 = state_32047;(statearr_32060_32082[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32047);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32059;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32083 = state_32047;
state_32047 = G__32083;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32047){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__31990,map__31990__$1,map__31991,map__31991__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31992,map__31992__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
})();var state__9127__auto__ = (function (){var statearr_32061 = f__9126__auto__.call(null);(statearr_32061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__31990,map__31990__$1,map__31991,map__31991__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31992,map__31992__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
;
clustermap.components.tag_histogram.t31982.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t31982.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32062 = om.core.get_node.call(null,self__.owner,"chart");var G__32062__$1 = (((G__32062 == null))?null:jayq.core.$.call(null,G__32062));var G__32062__$2 = (((G__32062__$1 == null))?null:G__32062__$1.highcharts());var G__32062__$3 = (((G__32062__$2 == null))?null:G__32062__$2.reflow());return G__32062__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
);
});})(map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
;
clustermap.components.tag_histogram.t31982.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t31982.prototype.om$core$IRender$render$arity$1 = ((function (map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
;
clustermap.components.tag_histogram.t31982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function (_31984){var self__ = this;
var _31984__$1 = this;return self__.meta31983;
});})(map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
;
clustermap.components.tag_histogram.t31982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function (_31984,meta31983__$1){var self__ = this;
var _31984__$1 = this;return (new clustermap.components.tag_histogram.t31982(self__.map__31977,self__.query,self__.owner,self__.metrics,self__.map__31981,self__.G__31975,self__.G__31877,self__.tag_agg_data,self__.tag_histogram,self__.map__31978,self__.G__31974,self__.map__31980,self__.filter_spec,self__.map__31979,self__.input_checker31874,self__.tag_type,self__.G__31878,self__.output_schema31872,self__.output_checker31875,self__.G__31876,self__.input_schema31873,self__.map__31976,self__.validate__6034__auto__,self__.id,self__.opts,self__.tag_data,self__.ufv__,meta31983__$1));
});})(map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
;
clustermap.components.tag_histogram.__GT_t31982 = ((function (map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067){
return (function __GT_t31982(map__31977__$2,query__$2,owner__$3,metrics__$2,map__31981__$2,G__31975__$2,G__31877__$1,tag_agg_data__$2,tag_histogram__$3,map__31978__$2,G__31974__$2,map__31980__$2,filter_spec__$2,map__31979__$2,input_checker31874__$1,tag_type__$2,G__31878__$1,output_schema31872__$1,output_checker31875__$1,G__31876__$1,input_schema31873__$1,map__31976__$2,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,ufv____$1,meta31983){return (new clustermap.components.tag_histogram.t31982(map__31977__$2,query__$2,owner__$3,metrics__$2,map__31981__$2,G__31975__$2,G__31877__$1,tag_agg_data__$2,tag_histogram__$3,map__31978__$2,G__31974__$2,map__31980__$2,filter_spec__$2,map__31979__$2,input_checker31874__$1,tag_type__$2,G__31878__$1,output_schema31872__$1,output_checker31875__$1,G__31876__$1,input_schema31873__$1,map__31976__$2,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,ufv____$1,meta31983));
});})(map__31979,map__31979__$1,map__31980,map__31980__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31981,map__31981__$1,opts__$1,id__$1,G__31974,map__31976,map__31976__$1,map__31977,map__31977__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31975,map__31978,map__31978__$1,opts,id,validate__6034__auto__,ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
;
}
return (new clustermap.components.tag_histogram.t31982(map__31977__$1,query__$1,owner__$2,metrics__$1,map__31981__$1,G__31975__$1,G__31877,tag_agg_data__$1,tag_histogram__$2,map__31978__$1,G__31974__$1,map__31980__$1,filter_spec__$1,map__31979__$1,input_checker31874_32066,tag_type__$1,G__31878,output_schema31872_32064,output_checker31875_32067,G__31876,input_schema31873_32065,map__31976__$1,validate__6034__auto__,id__$1,opts__$1,tag_data__$1,ufv___32063,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32084 = output_checker31875_32067.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32084))
{var error__6036__auto___32085 = temp__4126__auto___32084;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32085)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32085,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31872_32064,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32063,output_schema31872_32064,input_schema31873_32065,input_checker31874_32066,output_checker31875_32067))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema31872_32064,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31873_32065], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m31871){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m31871);
});
__GT_tag_histogram = function(cursor__7850__auto__,m31871){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m31871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
