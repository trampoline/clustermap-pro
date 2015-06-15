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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31600,p__31601){var map__31644 = p__31600;var map__31644__$1 = ((cljs.core.seq_QMARK_.call(null,map__31644))?cljs.core.apply.call(null,cljs.core.hash_map,map__31644):map__31644);var tag_agg_data = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var bar_width = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__31645 = p__31601;var map__31645__$1 = ((cljs.core.seq_QMARK_.call(null,map__31645))?cljs.core.apply.call(null,cljs.core.hash_map,map__31645):map__31645);var opts = map__31645__$1;var y1_title = cljs.core.get.call(null,map__31645__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31645__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title){
return (function iter__31646(s__31647){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title){
return (function (){var s__31647__$1 = s__31647;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31647__$1);if(temp__4126__auto__)
{var s__31647__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31647__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31647__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31649 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31648 = (0);while(true){
if((i__31648 < size__4376__auto__))
{var map__31660 = cljs.core._nth.call(null,c__4375__auto__,i__31648);var map__31660__$1 = ((cljs.core.seq_QMARK_.call(null,map__31660))?cljs.core.apply.call(null,cljs.core.hash_map,map__31660):map__31660);var metric_spec = map__31660__$1;var title = cljs.core.get.call(null,map__31660__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31660__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31649,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31648,map__31660,map__31660__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31649,s__31647__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title){
return (function iter__31661(s__31662){return (new cljs.core.LazySeq(null,((function (i__31648,map__31660,map__31660__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31649,s__31647__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title){
return (function (){var s__31662__$1 = s__31662;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31662__$1);if(temp__4126__auto____$1)
{var s__31662__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31662__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31662__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31664 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31663 = (0);while(true){
if((i__31663 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31663);cljs.core.chunk_append.call(null,b__31664,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31686 = (i__31663 + (1));
i__31663 = G__31686;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31664),iter__31661.call(null,cljs.core.chunk_rest.call(null,s__31662__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31664),null);
}
} else
{var record = cljs.core.first.call(null,s__31662__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31661.call(null,cljs.core.rest.call(null,s__31662__$2)));
}
} else
{return null;
}
break;
}
});})(i__31648,map__31660,map__31660__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31649,s__31647__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31648,map__31660,map__31660__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31649,s__31647__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__31687 = (i__31648 + (1));
i__31648 = G__31687;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31649),iter__31646.call(null,cljs.core.chunk_rest.call(null,s__31647__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31649),null);
}
} else
{var map__31665 = cljs.core.first.call(null,s__31647__$2);var map__31665__$1 = ((cljs.core.seq_QMARK_.call(null,map__31665))?cljs.core.apply.call(null,cljs.core.hash_map,map__31665):map__31665);var metric_spec = map__31665__$1;var title = cljs.core.get.call(null,map__31665__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31665__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31665,map__31665__$1,metric_spec,title,metric,s__31647__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title){
return (function iter__31666(s__31667){return (new cljs.core.LazySeq(null,((function (map__31665,map__31665__$1,metric_spec,title,metric,s__31647__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title){
return (function (){var s__31667__$1 = s__31667;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31667__$1);if(temp__4126__auto____$1)
{var s__31667__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31667__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31667__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31669 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31668 = (0);while(true){
if((i__31668 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31668);cljs.core.chunk_append.call(null,b__31669,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31688 = (i__31668 + (1));
i__31668 = G__31688;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31669),iter__31666.call(null,cljs.core.chunk_rest.call(null,s__31667__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31669),null);
}
} else
{var record = cljs.core.first.call(null,s__31667__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31666.call(null,cljs.core.rest.call(null,s__31667__$2)));
}
} else
{return null;
}
break;
}
});})(map__31665,map__31665__$1,metric_spec,title,metric,s__31647__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31665,map__31665__$1,metric_spec,title,metric,s__31647__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31646.call(null,cljs.core.rest.call(null,s__31647__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title){
return (function iter__31670(s__31671){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title){
return (function (){var s__31671__$1 = s__31671;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31671__$1);if(temp__4126__auto__)
{var s__31671__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31671__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31671__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31673 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31672 = (0);while(true){
if((i__31672 < size__4376__auto__))
{var map__31676 = cljs.core._nth.call(null,c__4375__auto__,i__31672);var map__31676__$1 = ((cljs.core.seq_QMARK_.call(null,map__31676))?cljs.core.apply.call(null,cljs.core.hash_map,map__31676):map__31676);var label_formatter = cljs.core.get.call(null,map__31676__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31676__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31673,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__31689 = (i__31672 + (1));
i__31672 = G__31689;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31673),iter__31670.call(null,cljs.core.chunk_rest.call(null,s__31671__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31673),null);
}
} else
{var map__31677 = cljs.core.first.call(null,s__31671__$2);var map__31677__$1 = ((cljs.core.seq_QMARK_.call(null,map__31677))?cljs.core.apply.call(null,cljs.core.hash_map,map__31677):map__31677);var label_formatter = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31670.call(null,cljs.core.rest.call(null,s__31671__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title){
return (function iter__31678(s__31679){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title){
return (function (){var s__31679__$1 = s__31679;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31679__$1);if(temp__4126__auto__)
{var s__31679__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31679__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31679__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31681 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31680 = (0);while(true){
if((i__31680 < size__4376__auto__))
{var vec__31684 = cljs.core._nth.call(null,c__4375__auto__,i__31680);var y = cljs.core.nth.call(null,vec__31684,(0),null);var i = cljs.core.nth.call(null,vec__31684,(1),null);cljs.core.chunk_append.call(null,b__31681,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__31690 = (i__31680 + (1));
i__31680 = G__31690;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31681),iter__31678.call(null,cljs.core.chunk_rest.call(null,s__31679__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31681),null);
}
} else
{var vec__31685 = cljs.core.first.call(null,s__31679__$2);var y = cljs.core.nth.call(null,vec__31685,(0),null);var i = cljs.core.nth.call(null,vec__31685,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31678.call(null,cljs.core.rest.call(null,s__31679__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31644,map__31644__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__31645,map__31645__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___31883 = schema.utils.use_fn_validation;var output_schema31692_31884 = schema.core.Any;var input_schema31693_31885 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker31694_31886 = schema.core.checker.call(null,input_schema31693_31885);var output_checker31695_31887 = schema.core.checker.call(null,output_schema31692_31884);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function tag_histogram(G__31696,G__31697,G__31698){var validate__6034__auto__ = ufv___31883.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31888 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31696,G__31697,G__31698], null);var temp__4126__auto___31889 = input_checker31694_31886.call(null,args__6035__auto___31888);if(cljs.core.truth_(temp__4126__auto___31889))
{var error__6036__auto___31890 = temp__4126__auto___31889;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31890)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31890,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31888,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31693_31885,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__31794 = G__31696;var map__31796 = G__31794;var map__31796__$1 = ((cljs.core.seq_QMARK_.call(null,map__31796))?cljs.core.apply.call(null,cljs.core.hash_map,map__31796):map__31796);var map__31797 = cljs.core.get.call(null,map__31796__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31797__$1 = ((cljs.core.seq_QMARK_.call(null,map__31797))?cljs.core.apply.call(null,cljs.core.hash_map,map__31797):map__31797);var tag_histogram__$1 = map__31797__$1;var query = cljs.core.get.call(null,map__31797__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__31797__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__31797__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__31797__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__31797__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__31796__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__31697;var G__31795 = G__31698;var map__31798 = G__31795;var map__31798__$1 = ((cljs.core.seq_QMARK_.call(null,map__31798))?cljs.core.apply.call(null,cljs.core.hash_map,map__31798):map__31798);var opts = map__31798__$1;var id = cljs.core.get.call(null,map__31798__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__31794__$1 = G__31794;var owner__$1 = owner;var G__31795__$1 = G__31795;while(true){
var map__31799 = G__31794__$1;var map__31799__$1 = ((cljs.core.seq_QMARK_.call(null,map__31799))?cljs.core.apply.call(null,cljs.core.hash_map,map__31799):map__31799);var map__31800 = cljs.core.get.call(null,map__31799__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31800__$1 = ((cljs.core.seq_QMARK_.call(null,map__31800))?cljs.core.apply.call(null,cljs.core.hash_map,map__31800):map__31800);var tag_histogram__$2 = map__31800__$1;var query__$1 = cljs.core.get.call(null,map__31800__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__31800__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__31800__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__31800__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__31800__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__31799__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__31801 = G__31795__$1;var map__31801__$1 = ((cljs.core.seq_QMARK_.call(null,map__31801))?cljs.core.apply.call(null,cljs.core.hash_map,map__31801):map__31801);var opts__$1 = map__31801__$1;var id__$1 = cljs.core.get.call(null,map__31801__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t31802 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t31802 = (function (map__31796,query,owner,metrics,G__31795,output_schema31692,tag_agg_data,tag_histogram,G__31697,filter_spec,map__31800,G__31698,map__31799,tag_type,G__31794,input_schema31693,map__31801,map__31797,validate__6034__auto__,input_checker31694,map__31798,id,opts,tag_data,ufv__,G__31696,output_checker31695,meta31803){
this.map__31796 = map__31796;
this.query = query;
this.owner = owner;
this.metrics = metrics;
this.G__31795 = G__31795;
this.output_schema31692 = output_schema31692;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.G__31697 = G__31697;
this.filter_spec = filter_spec;
this.map__31800 = map__31800;
this.G__31698 = G__31698;
this.map__31799 = map__31799;
this.tag_type = tag_type;
this.G__31794 = G__31794;
this.input_schema31693 = input_schema31693;
this.map__31801 = map__31801;
this.map__31797 = map__31797;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_checker31694 = input_checker31694;
this.map__31798 = map__31798;
this.id = id;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.G__31696 = G__31696;
this.output_checker31695 = output_checker31695;
this.meta31803 = meta31803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t31802.cljs$lang$type = true;
clustermap.components.tag_histogram.t31802.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t31802";
clustermap.components.tag_histogram.t31802.cljs$lang$ctorPrWriter = ((function (map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t31802");
});})(map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
;
clustermap.components.tag_histogram.t31802.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t31802.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
;
clustermap.components.tag_histogram.t31802.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t31802.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function (_,p__31805,___$1){var self__ = this;
var map__31806 = p__31805;var map__31806__$1 = ((cljs.core.seq_QMARK_.call(null,map__31806))?cljs.core.apply.call(null,cljs.core.hash_map,map__31806):map__31806);var map__31807 = cljs.core.get.call(null,map__31806__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31807__$1 = ((cljs.core.seq_QMARK_.call(null,map__31807))?cljs.core.apply.call(null,cljs.core.hash_map,map__31807):map__31807);var prev_query = cljs.core.get.call(null,map__31807__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__31807__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__31807__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__31807__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__31806__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
;
clustermap.components.tag_histogram.t31802.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t31802.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function (_,p__31808,p__31809){var self__ = this;
var map__31810 = p__31808;var map__31810__$1 = ((cljs.core.seq_QMARK_.call(null,map__31810))?cljs.core.apply.call(null,cljs.core.hash_map,map__31810):map__31810);var map__31811 = cljs.core.get.call(null,map__31810__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31811__$1 = ((cljs.core.seq_QMARK_.call(null,map__31811))?cljs.core.apply.call(null,cljs.core.hash_map,map__31811):map__31811);var next_query = cljs.core.get.call(null,map__31811__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__31811__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__31811__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__31811__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__31811__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__31810__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31812 = p__31809;var map__31812__$1 = ((cljs.core.seq_QMARK_.call(null,map__31812))?cljs.core.apply.call(null,cljs.core.hash_map,map__31812):map__31812);var fetch_tag_data_fn = cljs.core.get.call(null,map__31812__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__31812__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___31891 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___31891,___$1,map__31810,map__31810__$1,map__31811,map__31811__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31812,map__31812__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___31891,___$1,map__31810,map__31810__$1,map__31811,map__31811__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31812,map__31812__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function (state_31830){var state_val_31831 = (state_31830[(1)]);if((state_val_31831 === (5)))
{var inst_31828 = (state_31830[(2)]);var state_31830__$1 = state_31830;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31830__$1,inst_31828);
} else
{if((state_val_31831 === (4)))
{var state_31830__$1 = state_31830;var statearr_31832_31892 = state_31830__$1;(statearr_31832_31892[(2)] = null);
(statearr_31832_31892[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31831 === (3)))
{var inst_31815 = (state_31830[(7)]);var inst_31817 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31818 = ["HISTOGRAM TAGS: ",inst_31815];var inst_31819 = (new cljs.core.PersistentVector(null,2,(5),inst_31817,inst_31818,null));var inst_31820 = cljs.core.clj__GT_js.call(null,inst_31819);var inst_31821 = console.log(inst_31820);var inst_31822 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31823 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_31824 = (new cljs.core.PersistentVector(null,1,(5),inst_31822,inst_31823,null));var inst_31825 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31824,inst_31815);var state_31830__$1 = (function (){var statearr_31833 = state_31830;(statearr_31833[(8)] = inst_31821);
return statearr_31833;
})();var statearr_31834_31893 = state_31830__$1;(statearr_31834_31893[(2)] = inst_31825);
(statearr_31834_31893[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31831 === (2)))
{var inst_31815 = (state_31830[(7)]);var inst_31815__$1 = (state_31830[(2)]);var state_31830__$1 = (function (){var statearr_31835 = state_31830;(statearr_31835[(7)] = inst_31815__$1);
return statearr_31835;
})();if(cljs.core.truth_(inst_31815__$1))
{var statearr_31836_31894 = state_31830__$1;(statearr_31836_31894[(1)] = (3));
} else
{var statearr_31837_31895 = state_31830__$1;(statearr_31837_31895[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31831 === (1)))
{var inst_31813 = fetch_tag_data_fn.call(null,next_tag_type);var state_31830__$1 = state_31830;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31830__$1,(2),inst_31813);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___31891,___$1,map__31810,map__31810__$1,map__31811,map__31811__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31812,map__31812__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
;return ((function (switch__9110__auto__,c__9125__auto___31891,___$1,map__31810,map__31810__$1,map__31811,map__31811__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31812,map__31812__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31841 = [null,null,null,null,null,null,null,null,null];(statearr_31841[(0)] = state_machine__9111__auto__);
(statearr_31841[(1)] = (1));
return statearr_31841;
});
var state_machine__9111__auto____1 = (function (state_31830){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31830);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31842){if((e31842 instanceof Object))
{var ex__9114__auto__ = e31842;var statearr_31843_31896 = state_31830;(statearr_31843_31896[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31830);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31842;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31897 = state_31830;
state_31830 = G__31897;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31830){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___31891,___$1,map__31810,map__31810__$1,map__31811,map__31811__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31812,map__31812__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
})();var state__9127__auto__ = (function (){var statearr_31844 = f__9126__auto__.call(null);(statearr_31844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___31891);
return statearr_31844;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___31891,___$1,map__31810,map__31810__$1,map__31811,map__31811__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31812,map__31812__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__31810,map__31810__$1,map__31811,map__31811__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31812,map__31812__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__31810,map__31810__$1,map__31811,map__31811__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31812,map__31812__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function (state_31867){var state_val_31868 = (state_31867[(1)]);if((state_val_31868 === (5)))
{var inst_31865 = (state_31867[(2)]);var state_31867__$1 = state_31867;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31867__$1,inst_31865);
} else
{if((state_val_31868 === (4)))
{var state_31867__$1 = state_31867;var statearr_31869_31898 = state_31867__$1;(statearr_31869_31898[(2)] = null);
(statearr_31869_31898[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31868 === (3)))
{var inst_31851 = (state_31867[(7)]);var inst_31853 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31854 = ["HISTOGRAM TAG AGGS: ",inst_31851];var inst_31855 = (new cljs.core.PersistentVector(null,2,(5),inst_31853,inst_31854,null));var inst_31856 = cljs.core.clj__GT_js.call(null,inst_31855);var inst_31857 = console.log(inst_31856);var inst_31858 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31859 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_31860 = (new cljs.core.PersistentVector(null,1,(5),inst_31858,inst_31859,null));var inst_31861 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_31851);var inst_31862 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31860,inst_31861);var state_31867__$1 = (function (){var statearr_31870 = state_31867;(statearr_31870[(8)] = inst_31857);
return statearr_31870;
})();var statearr_31871_31899 = state_31867__$1;(statearr_31871_31899[(2)] = inst_31862);
(statearr_31871_31899[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31868 === (2)))
{var inst_31851 = (state_31867[(7)]);var inst_31851__$1 = (state_31867[(2)]);var state_31867__$1 = (function (){var statearr_31872 = state_31867;(statearr_31872[(7)] = inst_31851__$1);
return statearr_31872;
})();if(cljs.core.truth_(inst_31851__$1))
{var statearr_31873_31900 = state_31867__$1;(statearr_31873_31900[(1)] = (3));
} else
{var statearr_31874_31901 = state_31867__$1;(statearr_31874_31901[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31868 === (1)))
{var inst_31845 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_31846 = [next_filter_spec];var inst_31847 = cljs.core.PersistentHashMap.fromArrays(inst_31845,inst_31846);var inst_31848 = cljs.core.merge.call(null,next_query,inst_31847);var inst_31849 = fetch_tag_agg_data_fn.call(null,inst_31848);var state_31867__$1 = state_31867;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31867__$1,(2),inst_31849);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__31810,map__31810__$1,map__31811,map__31811__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31812,map__31812__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__31810,map__31810__$1,map__31811,map__31811__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31812,map__31812__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31878 = [null,null,null,null,null,null,null,null,null];(statearr_31878[(0)] = state_machine__9111__auto__);
(statearr_31878[(1)] = (1));
return statearr_31878;
});
var state_machine__9111__auto____1 = (function (state_31867){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31867);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31879){if((e31879 instanceof Object))
{var ex__9114__auto__ = e31879;var statearr_31880_31902 = state_31867;(statearr_31880_31902[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31867);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31879;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31903 = state_31867;
state_31867 = G__31903;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31867){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__31810,map__31810__$1,map__31811,map__31811__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31812,map__31812__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
})();var state__9127__auto__ = (function (){var statearr_31881 = f__9126__auto__.call(null);(statearr_31881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31881;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__31810,map__31810__$1,map__31811,map__31811__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31812,map__31812__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
;
clustermap.components.tag_histogram.t31802.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t31802.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__31882 = om.core.get_node.call(null,self__.owner,"chart");var G__31882__$1 = (((G__31882 == null))?null:jayq.core.$.call(null,G__31882));var G__31882__$2 = (((G__31882__$1 == null))?null:G__31882__$1.highcharts());var G__31882__$3 = (((G__31882__$2 == null))?null:G__31882__$2.reflow());return G__31882__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
);
});})(map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
;
clustermap.components.tag_histogram.t31802.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t31802.prototype.om$core$IRender$render$arity$1 = ((function (map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
;
clustermap.components.tag_histogram.t31802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function (_31804){var self__ = this;
var _31804__$1 = this;return self__.meta31803;
});})(map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
;
clustermap.components.tag_histogram.t31802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function (_31804,meta31803__$1){var self__ = this;
var _31804__$1 = this;return (new clustermap.components.tag_histogram.t31802(self__.map__31796,self__.query,self__.owner,self__.metrics,self__.G__31795,self__.output_schema31692,self__.tag_agg_data,self__.tag_histogram,self__.G__31697,self__.filter_spec,self__.map__31800,self__.G__31698,self__.map__31799,self__.tag_type,self__.G__31794,self__.input_schema31693,self__.map__31801,self__.map__31797,self__.validate__6034__auto__,self__.input_checker31694,self__.map__31798,self__.id,self__.opts,self__.tag_data,self__.ufv__,self__.G__31696,self__.output_checker31695,meta31803__$1));
});})(map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
;
clustermap.components.tag_histogram.__GT_t31802 = ((function (map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887){
return (function __GT_t31802(map__31796__$2,query__$2,owner__$3,metrics__$2,G__31795__$2,output_schema31692__$1,tag_agg_data__$2,tag_histogram__$3,G__31697__$1,filter_spec__$2,map__31800__$2,G__31698__$1,map__31799__$2,tag_type__$2,G__31794__$2,input_schema31693__$1,map__31801__$2,map__31797__$2,validate__6034__auto____$1,input_checker31694__$1,map__31798__$2,id__$2,opts__$2,tag_data__$2,ufv____$1,G__31696__$1,output_checker31695__$1,meta31803){return (new clustermap.components.tag_histogram.t31802(map__31796__$2,query__$2,owner__$3,metrics__$2,G__31795__$2,output_schema31692__$1,tag_agg_data__$2,tag_histogram__$3,G__31697__$1,filter_spec__$2,map__31800__$2,G__31698__$1,map__31799__$2,tag_type__$2,G__31794__$2,input_schema31693__$1,map__31801__$2,map__31797__$2,validate__6034__auto____$1,input_checker31694__$1,map__31798__$2,id__$2,opts__$2,tag_data__$2,ufv____$1,G__31696__$1,output_checker31695__$1,meta31803));
});})(map__31799,map__31799__$1,map__31800,map__31800__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31801,map__31801__$1,opts__$1,id__$1,G__31794,map__31796,map__31796__$1,map__31797,map__31797__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31795,map__31798,map__31798__$1,opts,id,validate__6034__auto__,ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
;
}
return (new clustermap.components.tag_histogram.t31802(map__31796__$1,query__$1,owner__$2,metrics__$1,G__31795__$1,output_schema31692_31884,tag_agg_data__$1,tag_histogram__$2,G__31697,filter_spec__$1,map__31800__$1,G__31698,map__31799__$1,tag_type__$1,G__31794__$1,input_schema31693_31885,map__31801__$1,map__31797__$1,validate__6034__auto__,input_checker31694_31886,map__31798__$1,id__$1,opts__$1,tag_data__$1,ufv___31883,G__31696,output_checker31695_31887,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31904 = output_checker31695_31887.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31904))
{var error__6036__auto___31905 = temp__4126__auto___31904;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31905)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31905,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31692_31884,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___31883,output_schema31692_31884,input_schema31693_31885,input_checker31694_31886,output_checker31695_31887))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema31692_31884,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31693_31885], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m31691){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m31691);
});
__GT_tag_histogram = function(cursor__7850__auto__,m31691){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m31691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
