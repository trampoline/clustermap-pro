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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__32677,p__32678){var map__32721 = p__32677;var map__32721__$1 = ((cljs.core.seq_QMARK_.call(null,map__32721))?cljs.core.apply.call(null,cljs.core.hash_map,map__32721):map__32721);var tag_agg_data = cljs.core.get.call(null,map__32721__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__32721__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__32721__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__32721__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var bar_width = cljs.core.get.call(null,map__32721__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__32721__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__32721__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__32722 = p__32678;var map__32722__$1 = ((cljs.core.seq_QMARK_.call(null,map__32722))?cljs.core.apply.call(null,cljs.core.hash_map,map__32722):map__32722);var opts = map__32722__$1;var y1_title = cljs.core.get.call(null,map__32722__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__32722__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__12290__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title){
return (function iter__32723(s__32724){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title){
return (function (){var s__32724__$1 = s__32724;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32724__$1);if(temp__4126__auto__)
{var s__32724__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32724__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__32724__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__32726 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__32725 = (0);while(true){
if((i__32725 < size__12289__auto__))
{var map__32737 = cljs.core._nth.call(null,c__12288__auto__,i__32725);var map__32737__$1 = ((cljs.core.seq_QMARK_.call(null,map__32737))?cljs.core.apply.call(null,cljs.core.hash_map,map__32737):map__32737);var metric_spec = map__32737__$1;var title = cljs.core.get.call(null,map__32737__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__32737__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__32726,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__12290__auto__ = ((function (i__32725,map__32737,map__32737__$1,metric_spec,title,metric,c__12288__auto__,size__12289__auto__,b__32726,s__32724__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title){
return (function iter__32738(s__32739){return (new cljs.core.LazySeq(null,((function (i__32725,map__32737,map__32737__$1,metric_spec,title,metric,c__12288__auto__,size__12289__auto__,b__32726,s__32724__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title){
return (function (){var s__32739__$1 = s__32739;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32739__$1);if(temp__4126__auto____$1)
{var s__32739__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32739__$2))
{var c__12288__auto____$1 = cljs.core.chunk_first.call(null,s__32739__$2);var size__12289__auto____$1 = cljs.core.count.call(null,c__12288__auto____$1);var b__32741 = cljs.core.chunk_buffer.call(null,size__12289__auto____$1);if((function (){var i__32740 = (0);while(true){
if((i__32740 < size__12289__auto____$1))
{var record = cljs.core._nth.call(null,c__12288__auto____$1,i__32740);cljs.core.chunk_append.call(null,b__32741,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__32763 = (i__32740 + (1));
i__32740 = G__32763;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32741),iter__32738.call(null,cljs.core.chunk_rest.call(null,s__32739__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32741),null);
}
} else
{var record = cljs.core.first.call(null,s__32739__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__32738.call(null,cljs.core.rest.call(null,s__32739__$2)));
}
} else
{return null;
}
break;
}
});})(i__32725,map__32737,map__32737__$1,metric_spec,title,metric,c__12288__auto__,size__12289__auto__,b__32726,s__32724__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title))
,null,null));
});})(i__32725,map__32737,map__32737__$1,metric_spec,title,metric,c__12288__auto__,size__12289__auto__,b__32726,s__32724__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title))
;return iter__12290__auto__.call(null,records);
})()));
{
var G__32764 = (i__32725 + (1));
i__32725 = G__32764;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32726),iter__32723.call(null,cljs.core.chunk_rest.call(null,s__32724__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32726),null);
}
} else
{var map__32742 = cljs.core.first.call(null,s__32724__$2);var map__32742__$1 = ((cljs.core.seq_QMARK_.call(null,map__32742))?cljs.core.apply.call(null,cljs.core.hash_map,map__32742):map__32742);var metric_spec = map__32742__$1;var title = cljs.core.get.call(null,map__32742__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__32742__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__12290__auto__ = ((function (map__32742,map__32742__$1,metric_spec,title,metric,s__32724__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title){
return (function iter__32743(s__32744){return (new cljs.core.LazySeq(null,((function (map__32742,map__32742__$1,metric_spec,title,metric,s__32724__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title){
return (function (){var s__32744__$1 = s__32744;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32744__$1);if(temp__4126__auto____$1)
{var s__32744__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32744__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__32744__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__32746 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__32745 = (0);while(true){
if((i__32745 < size__12289__auto__))
{var record = cljs.core._nth.call(null,c__12288__auto__,i__32745);cljs.core.chunk_append.call(null,b__32746,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__32765 = (i__32745 + (1));
i__32745 = G__32765;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32746),iter__32743.call(null,cljs.core.chunk_rest.call(null,s__32744__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32746),null);
}
} else
{var record = cljs.core.first.call(null,s__32744__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__32743.call(null,cljs.core.rest.call(null,s__32744__$2)));
}
} else
{return null;
}
break;
}
});})(map__32742,map__32742__$1,metric_spec,title,metric,s__32724__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title))
,null,null));
});})(map__32742,map__32742__$1,metric_spec,title,metric,s__32724__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title))
;return iter__12290__auto__.call(null,records);
})()),iter__32723.call(null,cljs.core.rest.call(null,s__32724__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title))
;return iter__12290__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__12290__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title){
return (function iter__32747(s__32748){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title){
return (function (){var s__32748__$1 = s__32748;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32748__$1);if(temp__4126__auto__)
{var s__32748__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32748__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__32748__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__32750 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__32749 = (0);while(true){
if((i__32749 < size__12289__auto__))
{var map__32753 = cljs.core._nth.call(null,c__12288__auto__,i__32749);var map__32753__$1 = ((cljs.core.seq_QMARK_.call(null,map__32753))?cljs.core.apply.call(null,cljs.core.hash_map,map__32753):map__32753);var label_formatter = cljs.core.get.call(null,map__32753__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__32753__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__32750,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__32766 = (i__32749 + (1));
i__32749 = G__32766;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32750),iter__32747.call(null,cljs.core.chunk_rest.call(null,s__32748__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32750),null);
}
} else
{var map__32754 = cljs.core.first.call(null,s__32748__$2);var map__32754__$1 = ((cljs.core.seq_QMARK_.call(null,map__32754))?cljs.core.apply.call(null,cljs.core.hash_map,map__32754):map__32754);var label_formatter = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__32747.call(null,cljs.core.rest.call(null,s__32748__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title))
;return iter__12290__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__12290__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title){
return (function iter__32755(s__32756){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title){
return (function (){var s__32756__$1 = s__32756;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32756__$1);if(temp__4126__auto__)
{var s__32756__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32756__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__32756__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__32758 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__32757 = (0);while(true){
if((i__32757 < size__12289__auto__))
{var vec__32761 = cljs.core._nth.call(null,c__12288__auto__,i__32757);var y = cljs.core.nth.call(null,vec__32761,(0),null);var i = cljs.core.nth.call(null,vec__32761,(1),null);cljs.core.chunk_append.call(null,b__32758,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__11552__auto__ = bar_width;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__32767 = (i__32757 + (1));
i__32757 = G__32767;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32758),iter__32755.call(null,cljs.core.chunk_rest.call(null,s__32756__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32758),null);
}
} else
{var vec__32762 = cljs.core.first.call(null,s__32756__$2);var y = cljs.core.nth.call(null,vec__32762,(0),null);var i = cljs.core.nth.call(null,vec__32762,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__11552__auto__ = bar_width;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__32755.call(null,cljs.core.rest.call(null,s__32756__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32721,map__32721__$1,tag_agg_data,tag_data,bar_color,point_formatter,bar_width,metrics,query,map__32722,map__32722__$1,opts,y1_title,y0_title))
;return iter__12290__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___32960 = schema.utils.use_fn_validation;var output_schema32769_32961 = schema.core.Any;var input_schema32770_32962 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker32771_32963 = schema.core.checker.call(null,input_schema32770_32962);var output_checker32772_32964 = schema.core.checker.call(null,output_schema32769_32961);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function tag_histogram(G__32773,G__32774,G__32775){var validate__13947__auto__ = ufv___32960.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___32965 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32773,G__32774,G__32775], null);var temp__4126__auto___32966 = input_checker32771_32963.call(null,args__13948__auto___32965);if(cljs.core.truth_(temp__4126__auto___32966))
{var error__13949__auto___32967 = temp__4126__auto___32966;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__13949__auto___32967)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___32967,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___32965,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32770_32962,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var G__32871 = G__32773;var map__32873 = G__32871;var map__32873__$1 = ((cljs.core.seq_QMARK_.call(null,map__32873))?cljs.core.apply.call(null,cljs.core.hash_map,map__32873):map__32873);var map__32874 = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32874__$1 = ((cljs.core.seq_QMARK_.call(null,map__32874))?cljs.core.apply.call(null,cljs.core.hash_map,map__32874):map__32874);var tag_histogram__$1 = map__32874__$1;var query = cljs.core.get.call(null,map__32874__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__32874__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__32874__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__32874__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__32874__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__32774;var G__32872 = G__32775;var map__32875 = G__32872;var map__32875__$1 = ((cljs.core.seq_QMARK_.call(null,map__32875))?cljs.core.apply.call(null,cljs.core.hash_map,map__32875):map__32875);var opts = map__32875__$1;var id = cljs.core.get.call(null,map__32875__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__32871__$1 = G__32871;var owner__$1 = owner;var G__32872__$1 = G__32872;while(true){
var map__32876 = G__32871__$1;var map__32876__$1 = ((cljs.core.seq_QMARK_.call(null,map__32876))?cljs.core.apply.call(null,cljs.core.hash_map,map__32876):map__32876);var map__32877 = cljs.core.get.call(null,map__32876__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32877__$1 = ((cljs.core.seq_QMARK_.call(null,map__32877))?cljs.core.apply.call(null,cljs.core.hash_map,map__32877):map__32877);var tag_histogram__$2 = map__32877__$1;var query__$1 = cljs.core.get.call(null,map__32877__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__32877__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__32877__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__32877__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__32877__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__32876__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__32878 = G__32872__$1;var map__32878__$1 = ((cljs.core.seq_QMARK_.call(null,map__32878))?cljs.core.apply.call(null,cljs.core.hash_map,map__32878):map__32878);var opts__$1 = map__32878__$1;var id__$1 = cljs.core.get.call(null,map__32878__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t32879 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t32879 = (function (query,G__32774,owner,metrics,output_schema32769,input_schema32770,tag_agg_data,tag_histogram,G__32773,map__32874,filter_spec,G__32775,map__32877,tag_type,map__32873,G__32871,map__32878,validate__13947__auto__,map__32876,output_checker32772,map__32875,id,G__32872,opts,tag_data,ufv__,input_checker32771,meta32880){
this.query = query;
this.G__32774 = G__32774;
this.owner = owner;
this.metrics = metrics;
this.output_schema32769 = output_schema32769;
this.input_schema32770 = input_schema32770;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.G__32773 = G__32773;
this.map__32874 = map__32874;
this.filter_spec = filter_spec;
this.G__32775 = G__32775;
this.map__32877 = map__32877;
this.tag_type = tag_type;
this.map__32873 = map__32873;
this.G__32871 = G__32871;
this.map__32878 = map__32878;
this.validate__13947__auto__ = validate__13947__auto__;
this.map__32876 = map__32876;
this.output_checker32772 = output_checker32772;
this.map__32875 = map__32875;
this.id = id;
this.G__32872 = G__32872;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.input_checker32771 = input_checker32771;
this.meta32880 = meta32880;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t32879.cljs$lang$type = true;
clustermap.components.tag_histogram.t32879.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t32879";
clustermap.components.tag_histogram.t32879.cljs$lang$ctorPrWriter = ((function (map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.tag-histogram/t32879");
});})(map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
;
clustermap.components.tag_histogram.t32879.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t32879.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
;
clustermap.components.tag_histogram.t32879.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t32879.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function (_,p__32882,___$1){var self__ = this;
var map__32883 = p__32882;var map__32883__$1 = ((cljs.core.seq_QMARK_.call(null,map__32883))?cljs.core.apply.call(null,cljs.core.hash_map,map__32883):map__32883);var map__32884 = cljs.core.get.call(null,map__32883__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32884__$1 = ((cljs.core.seq_QMARK_.call(null,map__32884))?cljs.core.apply.call(null,cljs.core.hash_map,map__32884):map__32884);var prev_query = cljs.core.get.call(null,map__32884__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__32884__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__32884__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__32884__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__32883__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
;
clustermap.components.tag_histogram.t32879.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t32879.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function (_,p__32885,p__32886){var self__ = this;
var map__32887 = p__32885;var map__32887__$1 = ((cljs.core.seq_QMARK_.call(null,map__32887))?cljs.core.apply.call(null,cljs.core.hash_map,map__32887):map__32887);var map__32888 = cljs.core.get.call(null,map__32887__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32888__$1 = ((cljs.core.seq_QMARK_.call(null,map__32888))?cljs.core.apply.call(null,cljs.core.hash_map,map__32888):map__32888);var next_query = cljs.core.get.call(null,map__32888__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__32888__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__32888__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__32888__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__32888__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__32887__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32889 = p__32886;var map__32889__$1 = ((cljs.core.seq_QMARK_.call(null,map__32889))?cljs.core.apply.call(null,cljs.core.hash_map,map__32889):map__32889);var fetch_tag_data_fn = cljs.core.get.call(null,map__32889__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__32889__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__16733__auto___32968 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___32968,___$1,map__32887,map__32887__$1,map__32888,map__32888__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32889,map__32889__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___32968,___$1,map__32887,map__32887__$1,map__32888,map__32888__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32889,map__32889__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function (state_32907){var state_val_32908 = (state_32907[(1)]);if((state_val_32908 === (5)))
{var inst_32905 = (state_32907[(2)]);var state_32907__$1 = state_32907;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32907__$1,inst_32905);
} else
{if((state_val_32908 === (4)))
{var state_32907__$1 = state_32907;var statearr_32909_32969 = state_32907__$1;(statearr_32909_32969[(2)] = null);
(statearr_32909_32969[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32908 === (3)))
{var inst_32892 = (state_32907[(7)]);var inst_32894 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32895 = ["HISTOGRAM TAGS: ",inst_32892];var inst_32896 = (new cljs.core.PersistentVector(null,2,(5),inst_32894,inst_32895,null));var inst_32897 = cljs.core.clj__GT_js.call(null,inst_32896);var inst_32898 = console.log(inst_32897);var inst_32899 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32900 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_32901 = (new cljs.core.PersistentVector(null,1,(5),inst_32899,inst_32900,null));var inst_32902 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32901,inst_32892);var state_32907__$1 = (function (){var statearr_32910 = state_32907;(statearr_32910[(8)] = inst_32898);
return statearr_32910;
})();var statearr_32911_32970 = state_32907__$1;(statearr_32911_32970[(2)] = inst_32902);
(statearr_32911_32970[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32908 === (2)))
{var inst_32892 = (state_32907[(7)]);var inst_32892__$1 = (state_32907[(2)]);var state_32907__$1 = (function (){var statearr_32912 = state_32907;(statearr_32912[(7)] = inst_32892__$1);
return statearr_32912;
})();if(cljs.core.truth_(inst_32892__$1))
{var statearr_32913_32971 = state_32907__$1;(statearr_32913_32971[(1)] = (3));
} else
{var statearr_32914_32972 = state_32907__$1;(statearr_32914_32972[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32908 === (1)))
{var inst_32890 = fetch_tag_data_fn.call(null,next_tag_type);var state_32907__$1 = state_32907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32907__$1,(2),inst_32890);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto___32968,___$1,map__32887,map__32887__$1,map__32888,map__32888__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32889,map__32889__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
;return ((function (switch__16718__auto__,c__16733__auto___32968,___$1,map__32887,map__32887__$1,map__32888,map__32888__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32889,map__32889__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_32918 = [null,null,null,null,null,null,null,null,null];(statearr_32918[(0)] = state_machine__16719__auto__);
(statearr_32918[(1)] = (1));
return statearr_32918;
});
var state_machine__16719__auto____1 = (function (state_32907){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_32907);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e32919){if((e32919 instanceof Object))
{var ex__16722__auto__ = e32919;var statearr_32920_32973 = state_32907;(statearr_32920_32973[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32907);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32919;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32974 = state_32907;
state_32907 = G__32974;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_32907){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_32907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___32968,___$1,map__32887,map__32887__$1,map__32888,map__32888__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32889,map__32889__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
})();var state__16735__auto__ = (function (){var statearr_32921 = f__16734__auto__.call(null);(statearr_32921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___32968);
return statearr_32921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___32968,___$1,map__32887,map__32887__$1,map__32888,map__32888__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32889,map__32889__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,map__32887,map__32887__$1,map__32888,map__32888__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32889,map__32889__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,map__32887,map__32887__$1,map__32888,map__32888__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32889,map__32889__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function (state_32944){var state_val_32945 = (state_32944[(1)]);if((state_val_32945 === (5)))
{var inst_32942 = (state_32944[(2)]);var state_32944__$1 = state_32944;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32944__$1,inst_32942);
} else
{if((state_val_32945 === (4)))
{var state_32944__$1 = state_32944;var statearr_32946_32975 = state_32944__$1;(statearr_32946_32975[(2)] = null);
(statearr_32946_32975[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32945 === (3)))
{var inst_32928 = (state_32944[(7)]);var inst_32930 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32931 = ["HISTOGRAM TAG AGGS: ",inst_32928];var inst_32932 = (new cljs.core.PersistentVector(null,2,(5),inst_32930,inst_32931,null));var inst_32933 = cljs.core.clj__GT_js.call(null,inst_32932);var inst_32934 = console.log(inst_32933);var inst_32935 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32936 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_32937 = (new cljs.core.PersistentVector(null,1,(5),inst_32935,inst_32936,null));var inst_32938 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32928);var inst_32939 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32937,inst_32938);var state_32944__$1 = (function (){var statearr_32947 = state_32944;(statearr_32947[(8)] = inst_32934);
return statearr_32947;
})();var statearr_32948_32976 = state_32944__$1;(statearr_32948_32976[(2)] = inst_32939);
(statearr_32948_32976[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32945 === (2)))
{var inst_32928 = (state_32944[(7)]);var inst_32928__$1 = (state_32944[(2)]);var state_32944__$1 = (function (){var statearr_32949 = state_32944;(statearr_32949[(7)] = inst_32928__$1);
return statearr_32949;
})();if(cljs.core.truth_(inst_32928__$1))
{var statearr_32950_32977 = state_32944__$1;(statearr_32950_32977[(1)] = (3));
} else
{var statearr_32951_32978 = state_32944__$1;(statearr_32951_32978[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32945 === (1)))
{var inst_32922 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32923 = [next_filter_spec];var inst_32924 = cljs.core.PersistentHashMap.fromArrays(inst_32922,inst_32923);var inst_32925 = cljs.core.merge.call(null,next_query,inst_32924);var inst_32926 = fetch_tag_agg_data_fn.call(null,inst_32925);var state_32944__$1 = state_32944;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32944__$1,(2),inst_32926);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto__,___$1,map__32887,map__32887__$1,map__32888,map__32888__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32889,map__32889__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,map__32887,map__32887__$1,map__32888,map__32888__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32889,map__32889__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_32955 = [null,null,null,null,null,null,null,null,null];(statearr_32955[(0)] = state_machine__16719__auto__);
(statearr_32955[(1)] = (1));
return statearr_32955;
});
var state_machine__16719__auto____1 = (function (state_32944){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_32944);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e32956){if((e32956 instanceof Object))
{var ex__16722__auto__ = e32956;var statearr_32957_32979 = state_32944;(statearr_32957_32979[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32944);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32956;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32980 = state_32944;
state_32944 = G__32980;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_32944){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_32944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,map__32887,map__32887__$1,map__32888,map__32888__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32889,map__32889__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
})();var state__16735__auto__ = (function (){var statearr_32958 = f__16734__auto__.call(null);(statearr_32958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_32958;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,map__32887,map__32887__$1,map__32888,map__32888__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32889,map__32889__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
);
return c__16733__auto__;
} else
{return null;
}
});})(map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
;
clustermap.components.tag_histogram.t32879.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t32879.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32959 = om.core.get_node.call(null,self__.owner,"chart");var G__32959__$1 = (((G__32959 == null))?null:jayq.core.$.call(null,G__32959));var G__32959__$2 = (((G__32959__$1 == null))?null:G__32959__$1.highcharts());var G__32959__$3 = (((G__32959__$2 == null))?null:G__32959__$2.reflow());return G__32959__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
);
});})(map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
;
clustermap.components.tag_histogram.t32879.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t32879.prototype.om$core$IRender$render$arity$1 = ((function (map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
;
clustermap.components.tag_histogram.t32879.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function (_32881){var self__ = this;
var _32881__$1 = this;return self__.meta32880;
});})(map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
;
clustermap.components.tag_histogram.t32879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function (_32881,meta32880__$1){var self__ = this;
var _32881__$1 = this;return (new clustermap.components.tag_histogram.t32879(self__.query,self__.G__32774,self__.owner,self__.metrics,self__.output_schema32769,self__.input_schema32770,self__.tag_agg_data,self__.tag_histogram,self__.G__32773,self__.map__32874,self__.filter_spec,self__.G__32775,self__.map__32877,self__.tag_type,self__.map__32873,self__.G__32871,self__.map__32878,self__.validate__13947__auto__,self__.map__32876,self__.output_checker32772,self__.map__32875,self__.id,self__.G__32872,self__.opts,self__.tag_data,self__.ufv__,self__.input_checker32771,meta32880__$1));
});})(map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
;
clustermap.components.tag_histogram.__GT_t32879 = ((function (map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964){
return (function __GT_t32879(query__$2,G__32774__$1,owner__$3,metrics__$2,output_schema32769__$1,input_schema32770__$1,tag_agg_data__$2,tag_histogram__$3,G__32773__$1,map__32874__$2,filter_spec__$2,G__32775__$1,map__32877__$2,tag_type__$2,map__32873__$2,G__32871__$2,map__32878__$2,validate__13947__auto____$1,map__32876__$2,output_checker32772__$1,map__32875__$2,id__$2,G__32872__$2,opts__$2,tag_data__$2,ufv____$1,input_checker32771__$1,meta32880){return (new clustermap.components.tag_histogram.t32879(query__$2,G__32774__$1,owner__$3,metrics__$2,output_schema32769__$1,input_schema32770__$1,tag_agg_data__$2,tag_histogram__$3,G__32773__$1,map__32874__$2,filter_spec__$2,G__32775__$1,map__32877__$2,tag_type__$2,map__32873__$2,G__32871__$2,map__32878__$2,validate__13947__auto____$1,map__32876__$2,output_checker32772__$1,map__32875__$2,id__$2,G__32872__$2,opts__$2,tag_data__$2,ufv____$1,input_checker32771__$1,meta32880));
});})(map__32876,map__32876__$1,map__32877,map__32877__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32878,map__32878__$1,opts__$1,id__$1,G__32871,map__32873,map__32873__$1,map__32874,map__32874__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32872,map__32875,map__32875__$1,opts,id,validate__13947__auto__,ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
;
}
return (new clustermap.components.tag_histogram.t32879(query__$1,G__32774,owner__$2,metrics__$1,output_schema32769_32961,input_schema32770_32962,tag_agg_data__$1,tag_histogram__$2,G__32773,map__32874__$1,filter_spec__$1,G__32775,map__32877__$1,tag_type__$1,map__32873__$1,G__32871__$1,map__32878__$1,validate__13947__auto__,map__32876__$1,output_checker32772_32964,map__32875__$1,id__$1,G__32872__$1,opts__$1,tag_data__$1,ufv___32960,input_checker32771_32963,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___32981 = output_checker32772_32964.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___32981))
{var error__13949__auto___32982 = temp__4126__auto___32981;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__13949__auto___32982)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___32982,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32769_32961,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv___32960,output_schema32769_32961,input_schema32770_32962,input_checker32771_32963,output_checker32772_32964))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema32769_32961,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32770_32962], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__15763__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__15763__auto__,m32768){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__15763__auto__,m32768);
});
__GT_tag_histogram = function(cursor__15763__auto__,m32768){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__15763__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__15763__auto__,m32768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;

//# sourceMappingURL=tag_histogram.js.map