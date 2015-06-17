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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31720,p__31721){var map__31764 = p__31720;var map__31764__$1 = ((cljs.core.seq_QMARK_.call(null,map__31764))?cljs.core.apply.call(null,cljs.core.hash_map,map__31764):map__31764);var tag_agg_data = cljs.core.get.call(null,map__31764__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__31764__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__31764__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__31764__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var bar_width = cljs.core.get.call(null,map__31764__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__31764__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__31764__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__31765 = p__31721;var map__31765__$1 = ((cljs.core.seq_QMARK_.call(null,map__31765))?cljs.core.apply.call(null,cljs.core.hash_map,map__31765):map__31765);var opts = map__31765__$1;var y1_title = cljs.core.get.call(null,map__31765__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31765__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title){
return (function iter__31766(s__31767){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title){
return (function (){var s__31767__$1 = s__31767;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31767__$1);if(temp__4126__auto__)
{var s__31767__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31767__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31767__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31769 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31768 = (0);while(true){
if((i__31768 < size__4376__auto__))
{var map__31780 = cljs.core._nth.call(null,c__4375__auto__,i__31768);var map__31780__$1 = ((cljs.core.seq_QMARK_.call(null,map__31780))?cljs.core.apply.call(null,cljs.core.hash_map,map__31780):map__31780);var metric_spec = map__31780__$1;var title = cljs.core.get.call(null,map__31780__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31780__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31769,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31768,map__31780,map__31780__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31769,s__31767__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title){
return (function iter__31781(s__31782){return (new cljs.core.LazySeq(null,((function (i__31768,map__31780,map__31780__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31769,s__31767__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title){
return (function (){var s__31782__$1 = s__31782;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31782__$1);if(temp__4126__auto____$1)
{var s__31782__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31782__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31782__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31784 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31783 = (0);while(true){
if((i__31783 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31783);cljs.core.chunk_append.call(null,b__31784,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31806 = (i__31783 + (1));
i__31783 = G__31806;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31784),iter__31781.call(null,cljs.core.chunk_rest.call(null,s__31782__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31784),null);
}
} else
{var record = cljs.core.first.call(null,s__31782__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31781.call(null,cljs.core.rest.call(null,s__31782__$2)));
}
} else
{return null;
}
break;
}
});})(i__31768,map__31780,map__31780__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31769,s__31767__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31768,map__31780,map__31780__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31769,s__31767__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__31807 = (i__31768 + (1));
i__31768 = G__31807;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31769),iter__31766.call(null,cljs.core.chunk_rest.call(null,s__31767__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31769),null);
}
} else
{var map__31785 = cljs.core.first.call(null,s__31767__$2);var map__31785__$1 = ((cljs.core.seq_QMARK_.call(null,map__31785))?cljs.core.apply.call(null,cljs.core.hash_map,map__31785):map__31785);var metric_spec = map__31785__$1;var title = cljs.core.get.call(null,map__31785__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31785__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31785,map__31785__$1,metric_spec,title,metric,s__31767__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title){
return (function iter__31786(s__31787){return (new cljs.core.LazySeq(null,((function (map__31785,map__31785__$1,metric_spec,title,metric,s__31767__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title){
return (function (){var s__31787__$1 = s__31787;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31787__$1);if(temp__4126__auto____$1)
{var s__31787__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31787__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31787__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31789 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31788 = (0);while(true){
if((i__31788 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31788);cljs.core.chunk_append.call(null,b__31789,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31808 = (i__31788 + (1));
i__31788 = G__31808;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31789),iter__31786.call(null,cljs.core.chunk_rest.call(null,s__31787__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31789),null);
}
} else
{var record = cljs.core.first.call(null,s__31787__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31786.call(null,cljs.core.rest.call(null,s__31787__$2)));
}
} else
{return null;
}
break;
}
});})(map__31785,map__31785__$1,metric_spec,title,metric,s__31767__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31785,map__31785__$1,metric_spec,title,metric,s__31767__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31766.call(null,cljs.core.rest.call(null,s__31767__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title){
return (function iter__31790(s__31791){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title){
return (function (){var s__31791__$1 = s__31791;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31791__$1);if(temp__4126__auto__)
{var s__31791__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31791__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31791__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31793 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31792 = (0);while(true){
if((i__31792 < size__4376__auto__))
{var map__31796 = cljs.core._nth.call(null,c__4375__auto__,i__31792);var map__31796__$1 = ((cljs.core.seq_QMARK_.call(null,map__31796))?cljs.core.apply.call(null,cljs.core.hash_map,map__31796):map__31796);var label_formatter = cljs.core.get.call(null,map__31796__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31796__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31793,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__31809 = (i__31792 + (1));
i__31792 = G__31809;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31793),iter__31790.call(null,cljs.core.chunk_rest.call(null,s__31791__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31793),null);
}
} else
{var map__31797 = cljs.core.first.call(null,s__31791__$2);var map__31797__$1 = ((cljs.core.seq_QMARK_.call(null,map__31797))?cljs.core.apply.call(null,cljs.core.hash_map,map__31797):map__31797);var label_formatter = cljs.core.get.call(null,map__31797__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31797__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31790.call(null,cljs.core.rest.call(null,s__31791__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title){
return (function iter__31798(s__31799){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title){
return (function (){var s__31799__$1 = s__31799;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31799__$1);if(temp__4126__auto__)
{var s__31799__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31799__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31799__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31801 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31800 = (0);while(true){
if((i__31800 < size__4376__auto__))
{var vec__31804 = cljs.core._nth.call(null,c__4375__auto__,i__31800);var y = cljs.core.nth.call(null,vec__31804,(0),null);var i = cljs.core.nth.call(null,vec__31804,(1),null);cljs.core.chunk_append.call(null,b__31801,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__31810 = (i__31800 + (1));
i__31800 = G__31810;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31801),iter__31798.call(null,cljs.core.chunk_rest.call(null,s__31799__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31801),null);
}
} else
{var vec__31805 = cljs.core.first.call(null,s__31799__$2);var y = cljs.core.nth.call(null,vec__31805,(0),null);var i = cljs.core.nth.call(null,vec__31805,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31798.call(null,cljs.core.rest.call(null,s__31799__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31764,map__31764__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31765,map__31765__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___32003 = schema.utils.use_fn_validation;var output_schema31812_32004 = schema.core.Any;var input_schema31813_32005 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker31814_32006 = schema.core.checker.call(null,input_schema31813_32005);var output_checker31815_32007 = schema.core.checker.call(null,output_schema31812_32004);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function tag_histogram(G__31816,G__31817,G__31818){var validate__6034__auto__ = ufv___32003.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32008 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31816,G__31817,G__31818], null);var temp__4126__auto___32009 = input_checker31814_32006.call(null,args__6035__auto___32008);if(cljs.core.truth_(temp__4126__auto___32009))
{var error__6036__auto___32010 = temp__4126__auto___32009;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32010)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32010,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32008,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31813_32005,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__31914 = G__31816;var map__31916 = G__31914;var map__31916__$1 = ((cljs.core.seq_QMARK_.call(null,map__31916))?cljs.core.apply.call(null,cljs.core.hash_map,map__31916):map__31916);var map__31917 = cljs.core.get.call(null,map__31916__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31917__$1 = ((cljs.core.seq_QMARK_.call(null,map__31917))?cljs.core.apply.call(null,cljs.core.hash_map,map__31917):map__31917);var tag_histogram__$1 = map__31917__$1;var query = cljs.core.get.call(null,map__31917__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__31917__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__31917__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__31917__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__31917__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__31916__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__31817;var G__31915 = G__31818;var map__31918 = G__31915;var map__31918__$1 = ((cljs.core.seq_QMARK_.call(null,map__31918))?cljs.core.apply.call(null,cljs.core.hash_map,map__31918):map__31918);var opts = map__31918__$1;var id = cljs.core.get.call(null,map__31918__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__31914__$1 = G__31914;var owner__$1 = owner;var G__31915__$1 = G__31915;while(true){
var map__31919 = G__31914__$1;var map__31919__$1 = ((cljs.core.seq_QMARK_.call(null,map__31919))?cljs.core.apply.call(null,cljs.core.hash_map,map__31919):map__31919);var map__31920 = cljs.core.get.call(null,map__31919__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31920__$1 = ((cljs.core.seq_QMARK_.call(null,map__31920))?cljs.core.apply.call(null,cljs.core.hash_map,map__31920):map__31920);var tag_histogram__$2 = map__31920__$1;var query__$1 = cljs.core.get.call(null,map__31920__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__31920__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__31920__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__31920__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__31920__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__31919__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__31921 = G__31915__$1;var map__31921__$1 = ((cljs.core.seq_QMARK_.call(null,map__31921))?cljs.core.apply.call(null,cljs.core.hash_map,map__31921):map__31921);var opts__$1 = map__31921__$1;var id__$1 = cljs.core.get.call(null,map__31921__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t31922 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t31922 = (function (query,input_checker31814,map__31920,owner,metrics,input_schema31813,output_schema31812,G__31915,tag_agg_data,tag_histogram,filter_spec,map__31921,G__31816,map__31916,map__31918,tag_type,output_checker31815,validate__6034__auto__,G__31818,map__31919,id,map__31917,opts,tag_data,ufv__,G__31914,G__31817,meta31923){
this.query = query;
this.input_checker31814 = input_checker31814;
this.map__31920 = map__31920;
this.owner = owner;
this.metrics = metrics;
this.input_schema31813 = input_schema31813;
this.output_schema31812 = output_schema31812;
this.G__31915 = G__31915;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.filter_spec = filter_spec;
this.map__31921 = map__31921;
this.G__31816 = G__31816;
this.map__31916 = map__31916;
this.map__31918 = map__31918;
this.tag_type = tag_type;
this.output_checker31815 = output_checker31815;
this.validate__6034__auto__ = validate__6034__auto__;
this.G__31818 = G__31818;
this.map__31919 = map__31919;
this.id = id;
this.map__31917 = map__31917;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.G__31914 = G__31914;
this.G__31817 = G__31817;
this.meta31923 = meta31923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t31922.cljs$lang$type = true;
clustermap.components.tag_histogram.t31922.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t31922";
clustermap.components.tag_histogram.t31922.cljs$lang$ctorPrWriter = ((function (map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t31922");
});})(map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
;
clustermap.components.tag_histogram.t31922.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t31922.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
;
clustermap.components.tag_histogram.t31922.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t31922.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function (_,p__31925,___$1){var self__ = this;
var map__31926 = p__31925;var map__31926__$1 = ((cljs.core.seq_QMARK_.call(null,map__31926))?cljs.core.apply.call(null,cljs.core.hash_map,map__31926):map__31926);var map__31927 = cljs.core.get.call(null,map__31926__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31927__$1 = ((cljs.core.seq_QMARK_.call(null,map__31927))?cljs.core.apply.call(null,cljs.core.hash_map,map__31927):map__31927);var prev_query = cljs.core.get.call(null,map__31927__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__31927__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__31927__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__31927__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__31926__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
;
clustermap.components.tag_histogram.t31922.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t31922.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function (_,p__31928,p__31929){var self__ = this;
var map__31930 = p__31928;var map__31930__$1 = ((cljs.core.seq_QMARK_.call(null,map__31930))?cljs.core.apply.call(null,cljs.core.hash_map,map__31930):map__31930);var map__31931 = cljs.core.get.call(null,map__31930__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31931__$1 = ((cljs.core.seq_QMARK_.call(null,map__31931))?cljs.core.apply.call(null,cljs.core.hash_map,map__31931):map__31931);var next_query = cljs.core.get.call(null,map__31931__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__31931__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__31931__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__31931__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__31931__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__31930__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31932 = p__31929;var map__31932__$1 = ((cljs.core.seq_QMARK_.call(null,map__31932))?cljs.core.apply.call(null,cljs.core.hash_map,map__31932):map__31932);var fetch_tag_data_fn = cljs.core.get.call(null,map__31932__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__31932__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___32011 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32011,___$1,map__31930,map__31930__$1,map__31931,map__31931__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31932,map__31932__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32011,___$1,map__31930,map__31930__$1,map__31931,map__31931__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31932,map__31932__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function (state_31950){var state_val_31951 = (state_31950[(1)]);if((state_val_31951 === (5)))
{var inst_31948 = (state_31950[(2)]);var state_31950__$1 = state_31950;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31950__$1,inst_31948);
} else
{if((state_val_31951 === (4)))
{var state_31950__$1 = state_31950;var statearr_31952_32012 = state_31950__$1;(statearr_31952_32012[(2)] = null);
(statearr_31952_32012[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31951 === (3)))
{var inst_31935 = (state_31950[(7)]);var inst_31937 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31938 = ["HISTOGRAM TAGS: ",inst_31935];var inst_31939 = (new cljs.core.PersistentVector(null,2,(5),inst_31937,inst_31938,null));var inst_31940 = cljs.core.clj__GT_js.call(null,inst_31939);var inst_31941 = console.log(inst_31940);var inst_31942 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31943 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_31944 = (new cljs.core.PersistentVector(null,1,(5),inst_31942,inst_31943,null));var inst_31945 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31944,inst_31935);var state_31950__$1 = (function (){var statearr_31953 = state_31950;(statearr_31953[(8)] = inst_31941);
return statearr_31953;
})();var statearr_31954_32013 = state_31950__$1;(statearr_31954_32013[(2)] = inst_31945);
(statearr_31954_32013[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31951 === (2)))
{var inst_31935 = (state_31950[(7)]);var inst_31935__$1 = (state_31950[(2)]);var state_31950__$1 = (function (){var statearr_31955 = state_31950;(statearr_31955[(7)] = inst_31935__$1);
return statearr_31955;
})();if(cljs.core.truth_(inst_31935__$1))
{var statearr_31956_32014 = state_31950__$1;(statearr_31956_32014[(1)] = (3));
} else
{var statearr_31957_32015 = state_31950__$1;(statearr_31957_32015[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31951 === (1)))
{var inst_31933 = fetch_tag_data_fn.call(null,next_tag_type);var state_31950__$1 = state_31950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31950__$1,(2),inst_31933);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32011,___$1,map__31930,map__31930__$1,map__31931,map__31931__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31932,map__31932__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
;return ((function (switch__9110__auto__,c__9125__auto___32011,___$1,map__31930,map__31930__$1,map__31931,map__31931__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31932,map__31932__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31961 = [null,null,null,null,null,null,null,null,null];(statearr_31961[(0)] = state_machine__9111__auto__);
(statearr_31961[(1)] = (1));
return statearr_31961;
});
var state_machine__9111__auto____1 = (function (state_31950){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31950);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31962){if((e31962 instanceof Object))
{var ex__9114__auto__ = e31962;var statearr_31963_32016 = state_31950;(statearr_31963_32016[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31950);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31962;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32017 = state_31950;
state_31950 = G__32017;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31950){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32011,___$1,map__31930,map__31930__$1,map__31931,map__31931__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31932,map__31932__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
})();var state__9127__auto__ = (function (){var statearr_31964 = f__9126__auto__.call(null);(statearr_31964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32011);
return statearr_31964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32011,___$1,map__31930,map__31930__$1,map__31931,map__31931__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31932,map__31932__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__31930,map__31930__$1,map__31931,map__31931__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31932,map__31932__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__31930,map__31930__$1,map__31931,map__31931__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31932,map__31932__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function (state_31987){var state_val_31988 = (state_31987[(1)]);if((state_val_31988 === (5)))
{var inst_31985 = (state_31987[(2)]);var state_31987__$1 = state_31987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31987__$1,inst_31985);
} else
{if((state_val_31988 === (4)))
{var state_31987__$1 = state_31987;var statearr_31989_32018 = state_31987__$1;(statearr_31989_32018[(2)] = null);
(statearr_31989_32018[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31988 === (3)))
{var inst_31971 = (state_31987[(7)]);var inst_31973 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31974 = ["HISTOGRAM TAG AGGS: ",inst_31971];var inst_31975 = (new cljs.core.PersistentVector(null,2,(5),inst_31973,inst_31974,null));var inst_31976 = cljs.core.clj__GT_js.call(null,inst_31975);var inst_31977 = console.log(inst_31976);var inst_31978 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31979 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_31980 = (new cljs.core.PersistentVector(null,1,(5),inst_31978,inst_31979,null));var inst_31981 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_31971);var inst_31982 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31980,inst_31981);var state_31987__$1 = (function (){var statearr_31990 = state_31987;(statearr_31990[(8)] = inst_31977);
return statearr_31990;
})();var statearr_31991_32019 = state_31987__$1;(statearr_31991_32019[(2)] = inst_31982);
(statearr_31991_32019[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31988 === (2)))
{var inst_31971 = (state_31987[(7)]);var inst_31971__$1 = (state_31987[(2)]);var state_31987__$1 = (function (){var statearr_31992 = state_31987;(statearr_31992[(7)] = inst_31971__$1);
return statearr_31992;
})();if(cljs.core.truth_(inst_31971__$1))
{var statearr_31993_32020 = state_31987__$1;(statearr_31993_32020[(1)] = (3));
} else
{var statearr_31994_32021 = state_31987__$1;(statearr_31994_32021[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31988 === (1)))
{var inst_31965 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_31966 = [next_filter_spec];var inst_31967 = cljs.core.PersistentHashMap.fromArrays(inst_31965,inst_31966);var inst_31968 = cljs.core.merge.call(null,next_query,inst_31967);var inst_31969 = fetch_tag_agg_data_fn.call(null,inst_31968);var state_31987__$1 = state_31987;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31987__$1,(2),inst_31969);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__31930,map__31930__$1,map__31931,map__31931__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31932,map__31932__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__31930,map__31930__$1,map__31931,map__31931__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31932,map__31932__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31998 = [null,null,null,null,null,null,null,null,null];(statearr_31998[(0)] = state_machine__9111__auto__);
(statearr_31998[(1)] = (1));
return statearr_31998;
});
var state_machine__9111__auto____1 = (function (state_31987){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31987);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31999){if((e31999 instanceof Object))
{var ex__9114__auto__ = e31999;var statearr_32000_32022 = state_31987;(statearr_32000_32022[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31987);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31999;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32023 = state_31987;
state_31987 = G__32023;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31987){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__31930,map__31930__$1,map__31931,map__31931__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31932,map__31932__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
})();var state__9127__auto__ = (function (){var statearr_32001 = f__9126__auto__.call(null);(statearr_32001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__31930,map__31930__$1,map__31931,map__31931__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31932,map__31932__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
;
clustermap.components.tag_histogram.t31922.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t31922.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32002 = om.core.get_node.call(null,self__.owner,"chart");var G__32002__$1 = (((G__32002 == null))?null:jayq.core.$.call(null,G__32002));var G__32002__$2 = (((G__32002__$1 == null))?null:G__32002__$1.highcharts());var G__32002__$3 = (((G__32002__$2 == null))?null:G__32002__$2.reflow());return G__32002__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
);
});})(map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
;
clustermap.components.tag_histogram.t31922.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t31922.prototype.om$core$IRender$render$arity$1 = ((function (map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
;
clustermap.components.tag_histogram.t31922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function (_31924){var self__ = this;
var _31924__$1 = this;return self__.meta31923;
});})(map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
;
clustermap.components.tag_histogram.t31922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function (_31924,meta31923__$1){var self__ = this;
var _31924__$1 = this;return (new clustermap.components.tag_histogram.t31922(self__.query,self__.input_checker31814,self__.map__31920,self__.owner,self__.metrics,self__.input_schema31813,self__.output_schema31812,self__.G__31915,self__.tag_agg_data,self__.tag_histogram,self__.filter_spec,self__.map__31921,self__.G__31816,self__.map__31916,self__.map__31918,self__.tag_type,self__.output_checker31815,self__.validate__6034__auto__,self__.G__31818,self__.map__31919,self__.id,self__.map__31917,self__.opts,self__.tag_data,self__.ufv__,self__.G__31914,self__.G__31817,meta31923__$1));
});})(map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
;
clustermap.components.tag_histogram.__GT_t31922 = ((function (map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007){
return (function __GT_t31922(query__$2,input_checker31814__$1,map__31920__$2,owner__$3,metrics__$2,input_schema31813__$1,output_schema31812__$1,G__31915__$2,tag_agg_data__$2,tag_histogram__$3,filter_spec__$2,map__31921__$2,G__31816__$1,map__31916__$2,map__31918__$2,tag_type__$2,output_checker31815__$1,validate__6034__auto____$1,G__31818__$1,map__31919__$2,id__$2,map__31917__$2,opts__$2,tag_data__$2,ufv____$1,G__31914__$2,G__31817__$1,meta31923){return (new clustermap.components.tag_histogram.t31922(query__$2,input_checker31814__$1,map__31920__$2,owner__$3,metrics__$2,input_schema31813__$1,output_schema31812__$1,G__31915__$2,tag_agg_data__$2,tag_histogram__$3,filter_spec__$2,map__31921__$2,G__31816__$1,map__31916__$2,map__31918__$2,tag_type__$2,output_checker31815__$1,validate__6034__auto____$1,G__31818__$1,map__31919__$2,id__$2,map__31917__$2,opts__$2,tag_data__$2,ufv____$1,G__31914__$2,G__31817__$1,meta31923));
});})(map__31919,map__31919__$1,map__31920,map__31920__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31921,map__31921__$1,opts__$1,id__$1,G__31914,map__31916,map__31916__$1,map__31917,map__31917__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31915,map__31918,map__31918__$1,opts,id,validate__6034__auto__,ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
;
}
return (new clustermap.components.tag_histogram.t31922(query__$1,input_checker31814_32006,map__31920__$1,owner__$2,metrics__$1,input_schema31813_32005,output_schema31812_32004,G__31915__$1,tag_agg_data__$1,tag_histogram__$2,filter_spec__$1,map__31921__$1,G__31816,map__31916__$1,map__31918__$1,tag_type__$1,output_checker31815_32007,validate__6034__auto__,G__31818,map__31919__$1,id__$1,map__31917__$1,opts__$1,tag_data__$1,ufv___32003,G__31914__$1,G__31817,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32024 = output_checker31815_32007.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32024))
{var error__6036__auto___32025 = temp__4126__auto___32024;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32025)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32025,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31812_32004,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32003,output_schema31812_32004,input_schema31813_32005,input_checker31814_32006,output_checker31815_32007))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema31812_32004,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31813_32005], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m31811){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m31811);
});
__GT_tag_histogram = function(cursor__7850__auto__,m31811){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m31811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
