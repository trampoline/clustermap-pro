// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.rankings_table');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('clustermap.components.table_common');
goog.require('sablono.core');
goog.require('clustermap.components.table_common');
goog.require('clustermap.formats.html');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.html');
goog.require('clustermap.api');
clustermap.components.rankings_table.render_table_row = (function render_table_row(p__32079){var map__32096 = p__32079;var map__32096__$1 = ((cljs.core.seq_QMARK_.call(null,map__32096))?cljs.core.apply.call(null,cljs.core.hash_map,map__32096):map__32096);var row_i = cljs.core.get.call(null,map__32096__$1,new cljs.core.Keyword(null,"row-i","row-i",-1393499400));var record = cljs.core.get.call(null,map__32096__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__32096__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.rankings_table.t32097 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.rankings_table.t32097 = (function (columns,record,row_i,map__32096,p__32079,render_table_row,meta32098){
this.columns = columns;
this.record = record;
this.row_i = row_i;
this.map__32096 = map__32096;
this.p__32079 = p__32079;
this.render_table_row = render_table_row;
this.meta32098 = meta32098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.rankings_table.t32097.cljs$lang$type = true;
clustermap.components.rankings_table.t32097.cljs$lang$ctorStr = "clustermap.components.rankings-table/t32097";
clustermap.components.rankings_table.t32097.cljs$lang$ctorPrWriter = ((function (map__32096,map__32096__$1,row_i,record,columns){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.rankings-table/t32097");
});})(map__32096,map__32096__$1,row_i,record,columns))
;
clustermap.components.rankings_table.t32097.prototype.om$core$IRender$ = true;
clustermap.components.rankings_table.t32097.prototype.om$core$IRender$render$arity$1 = ((function (map__32096,map__32096__$1,row_i,record,columns){
return (function (this__15009__auto__){var self__ = this;
var this__15009__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.row_i))], null)], null),(function (){var iter__12290__auto__ = ((function (this__15009__auto____$1,map__32096,map__32096__$1,row_i,record,columns){
return (function iter__32100(s__32101){return (new cljs.core.LazySeq(null,((function (this__15009__auto____$1,map__32096,map__32096__$1,row_i,record,columns){
return (function (){var s__32101__$1 = s__32101;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32101__$1);if(temp__4126__auto__)
{var s__32101__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32101__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__32101__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__32103 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__32102 = (0);while(true){
if((i__32102 < size__12289__auto__))
{var vec__32108 = cljs.core._nth.call(null,c__12288__auto__,i__32102);var col_i = cljs.core.nth.call(null,vec__32108,(0),null);var col = cljs.core.nth.call(null,vec__32108,(1),null);cljs.core.chunk_append.call(null,b__32103,(function (){var map__32109 = col;var map__32109__$1 = ((cljs.core.seq_QMARK_.call(null,map__32109))?cljs.core.apply.call(null,cljs.core.hash_map,map__32109):map__32109);var render_fn = cljs.core.get.call(null,map__32109__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var name = cljs.core.get.call(null,map__32109__$1,new cljs.core.Keyword(null,"name","name",1843675177));var key = cljs.core.get.call(null,map__32109__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__11552__auto__ = render_fn;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_(key)?render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record):null)], null);
})());
{
var G__32112 = (i__32102 + (1));
i__32102 = G__32112;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32103),iter__32100.call(null,cljs.core.chunk_rest.call(null,s__32101__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32103),null);
}
} else
{var vec__32110 = cljs.core.first.call(null,s__32101__$2);var col_i = cljs.core.nth.call(null,vec__32110,(0),null);var col = cljs.core.nth.call(null,vec__32110,(1),null);return cljs.core.cons.call(null,(function (){var map__32111 = col;var map__32111__$1 = ((cljs.core.seq_QMARK_.call(null,map__32111))?cljs.core.apply.call(null,cljs.core.hash_map,map__32111):map__32111);var render_fn = cljs.core.get.call(null,map__32111__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var name = cljs.core.get.call(null,map__32111__$1,new cljs.core.Keyword(null,"name","name",1843675177));var key = cljs.core.get.call(null,map__32111__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__11552__auto__ = render_fn;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_(key)?render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record):null)], null);
})(),iter__32100.call(null,cljs.core.rest.call(null,s__32101__$2)));
}
} else
{return null;
}
break;
}
});})(this__15009__auto____$1,map__32096,map__32096__$1,row_i,record,columns))
,null,null));
});})(this__15009__auto____$1,map__32096,map__32096__$1,row_i,record,columns))
;return iter__12290__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),self__.columns));
})());return row;
})());
});})(map__32096,map__32096__$1,row_i,record,columns))
;
clustermap.components.rankings_table.t32097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32096,map__32096__$1,row_i,record,columns){
return (function (_32099){var self__ = this;
var _32099__$1 = this;return self__.meta32098;
});})(map__32096,map__32096__$1,row_i,record,columns))
;
clustermap.components.rankings_table.t32097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32096,map__32096__$1,row_i,record,columns){
return (function (_32099,meta32098__$1){var self__ = this;
var _32099__$1 = this;return (new clustermap.components.rankings_table.t32097(self__.columns,self__.record,self__.row_i,self__.map__32096,self__.p__32079,self__.render_table_row,meta32098__$1));
});})(map__32096,map__32096__$1,row_i,record,columns))
;
clustermap.components.rankings_table.__GT_t32097 = ((function (map__32096,map__32096__$1,row_i,record,columns){
return (function __GT_t32097(columns__$1,record__$1,row_i__$1,map__32096__$2,p__32079__$1,render_table_row__$1,meta32098){return (new clustermap.components.rankings_table.t32097(columns__$1,record__$1,row_i__$1,map__32096__$2,p__32079__$1,render_table_row__$1,meta32098));
});})(map__32096,map__32096__$1,row_i,record,columns))
;
}
return (new clustermap.components.rankings_table.t32097(columns,record,row_i,map__32096__$1,p__32079,render_table_row,null));
});
clustermap.components.rankings_table.render_table = (function render_table(p__32113,owner,opts){var map__32121 = p__32113;var map__32121__$1 = ((cljs.core.seq_QMARK_.call(null,map__32121))?cljs.core.apply.call(null,cljs.core.hash_map,map__32121):map__32121);var props = map__32121__$1;var map__32122 = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32122__$1 = ((cljs.core.seq_QMARK_.call(null,map__32122))?cljs.core.apply.call(null,cljs.core.hash_map,map__32122):map__32122);var table_data = map__32122__$1;var query = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__32123 = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32123__$1 = ((cljs.core.seq_QMARK_.call(null,map__32123))?cljs.core.apply.call(null,cljs.core.hash_map,map__32123):map__32123);var controls = map__32123__$1;var merge_key = cljs.core.get.call(null,map__32123__$1,new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261));var columns = cljs.core.get.call(null,map__32123__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var col_value_descriptors = clustermap.components.table_common.column_value_descriptors.call(null,columns);return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs32124 = clustermap.components.table_common.column_header_rows.call(null,columns,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"current-sort-spec","current-sort-spec",302606848),new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(query)], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs32124))?sablono.interpreter.attributes.call(null,attrs32124):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32124))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32124)], null))));
})(),(function (){var attrs32125 = om.core.build_all.call(null,clustermap.components.rankings_table.render_table_row,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),results),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (col_value_descriptors,map__32121,map__32121__$1,props,map__32122,map__32122__$1,table_data,query,results,map__32123,map__32123__$1,controls,merge_key,columns){
return (function (p__32126){var vec__32127 = p__32126;var row_i = cljs.core.nth.call(null,vec__32127,(0),null);var r = cljs.core.nth.call(null,vec__32127,(1),null);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row-i","row-i",-1393499400),row_i,new cljs.core.Keyword(null,"columns","columns",1998437288),col_value_descriptors,new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261),merge_key,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(col_value_descriptors,map__32121,map__32121__$1,props,map__32122,map__32122__$1,table_data,query,results,map__32123,map__32123__$1,controls,merge_key,columns))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs32125))?sablono.interpreter.attributes.call(null,attrs32125):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32125))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32125)], null))));
})())));
});
clustermap.components.rankings_table.rankings_table_component = (function rankings_table_component(p__32128,owner){var map__32173 = p__32128;var map__32173__$1 = ((cljs.core.seq_QMARK_.call(null,map__32173))?cljs.core.apply.call(null,cljs.core.hash_map,map__32173):map__32173);var props = map__32173__$1;var map__32174 = cljs.core.get.call(null,map__32173__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32174__$1 = ((cljs.core.seq_QMARK_.call(null,map__32174))?cljs.core.apply.call(null,cljs.core.hash_map,map__32174):map__32174);var table_state = map__32174__$1;var table_data = cljs.core.get.call(null,map__32174__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32175 = cljs.core.get.call(null,map__32174__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32175__$1 = ((cljs.core.seq_QMARK_.call(null,map__32175))?cljs.core.apply.call(null,cljs.core.hash_map,map__32175):map__32175);var controls = map__32175__$1;var sort_spec = cljs.core.get.call(null,map__32175__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var index_type = cljs.core.get.call(null,map__32175__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var periods = cljs.core.get.call(null,map__32175__$1,new cljs.core.Keyword(null,"periods","periods",1695878624));var merge_key = cljs.core.get.call(null,map__32175__$1,new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261));var index = cljs.core.get.call(null,map__32175__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var columns = cljs.core.get.call(null,map__32175__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var fields = cljs.core.get.call(null,map__32175__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var size = cljs.core.get.call(null,map__32175__$1,new cljs.core.Keyword(null,"size","size",1098693007));var metric_variables = cljs.core.get.call(null,map__32175__$1,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594));var filter_spec = cljs.core.get.call(null,map__32173__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.rankings_table.t32176 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.rankings_table.t32176 = (function (sort_spec,index_type,rankings_table_component,owner,p__32128,props,periods,merge_key,table_data,index,filter_spec,columns,fields,table_state,controls,map__32173,size,map__32175,metric_variables,map__32174,meta32177){
this.sort_spec = sort_spec;
this.index_type = index_type;
this.rankings_table_component = rankings_table_component;
this.owner = owner;
this.p__32128 = p__32128;
this.props = props;
this.periods = periods;
this.merge_key = merge_key;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.fields = fields;
this.table_state = table_state;
this.controls = controls;
this.map__32173 = map__32173;
this.size = size;
this.map__32175 = map__32175;
this.metric_variables = metric_variables;
this.map__32174 = map__32174;
this.meta32177 = meta32177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.rankings_table.t32176.cljs$lang$type = true;
clustermap.components.rankings_table.t32176.cljs$lang$ctorStr = "clustermap.components.rankings-table/t32176";
clustermap.components.rankings_table.t32176.cljs$lang$ctorPrWriter = ((function (map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.rankings-table/t32176");
});})(map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
;
clustermap.components.rankings_table.t32176.prototype.om$core$IWillUpdate$ = true;
clustermap.components.rankings_table.t32176.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function (_,p__32179,p__32180){var self__ = this;
var map__32181 = p__32179;var map__32181__$1 = ((cljs.core.seq_QMARK_.call(null,map__32181))?cljs.core.apply.call(null,cljs.core.hash_map,map__32181):map__32181);var next_props = map__32181__$1;var map__32182 = cljs.core.get.call(null,map__32181__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32182__$1 = ((cljs.core.seq_QMARK_.call(null,map__32182))?cljs.core.apply.call(null,cljs.core.hash_map,map__32182):map__32182);var next_table_state = map__32182__$1;var next_table_data = cljs.core.get.call(null,map__32182__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32183 = cljs.core.get.call(null,map__32182__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32183__$1 = ((cljs.core.seq_QMARK_.call(null,map__32183))?cljs.core.apply.call(null,cljs.core.hash_map,map__32183):map__32183);var next_controls = map__32183__$1;var next_metric_variables = cljs.core.get.call(null,map__32183__$1,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594));var next_fields = cljs.core.get.call(null,map__32183__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var next_sort_spec = cljs.core.get.call(null,map__32183__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_columns = cljs.core.get.call(null,map__32183__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var next_periods = cljs.core.get.call(null,map__32183__$1,new cljs.core.Keyword(null,"periods","periods",1695878624));var next_index = cljs.core.get.call(null,map__32183__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_size = cljs.core.get.call(null,map__32183__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_index_type = cljs.core.get.call(null,map__32183__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_merge_key = cljs.core.get.call(null,map__32183__$1,new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261));var next_filter_spec = cljs.core.get.call(null,map__32181__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32184 = p__32180;var map__32184__$1 = ((cljs.core.seq_QMARK_.call(null,map__32184))?cljs.core.apply.call(null,cljs.core.hash_map,map__32184):map__32184);var fetch_table_data_fn = cljs.core.get.call(null,map__32184__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,map__32181,map__32181__$1,next_props,map__32182,map__32182__$1,next_table_state,next_table_data,map__32183,map__32183__$1,next_controls,next_metric_variables,next_fields,next_sort_spec,next_columns,next_periods,next_index,next_size,next_index_type,next_merge_key,next_filter_spec,map__32184,map__32184__$1,fetch_table_data_fn,map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,map__32181,map__32181__$1,next_props,map__32182,map__32182__$1,next_table_state,next_table_data,map__32183,map__32183__$1,next_controls,next_metric_variables,next_fields,next_sort_spec,next_columns,next_periods,next_index,next_size,next_index_type,next_merge_key,next_filter_spec,map__32184,map__32184__$1,fetch_table_data_fn,map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function (state_32202){var state_val_32203 = (state_32202[(1)]);if((state_val_32203 === (5)))
{var inst_32200 = (state_32202[(2)]);var state_32202__$1 = state_32202;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32202__$1,inst_32200);
} else
{if((state_val_32203 === (4)))
{var state_32202__$1 = state_32202;var statearr_32204_32217 = state_32202__$1;(statearr_32204_32217[(2)] = null);
(statearr_32204_32217[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32203 === (3)))
{var inst_32187 = (state_32202[(7)]);var inst_32189 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32190 = ["RANKINGS-TABLE-DATA",inst_32187];var inst_32191 = (new cljs.core.PersistentVector(null,2,(5),inst_32189,inst_32190,null));var inst_32192 = cljs.core.clj__GT_js.call(null,inst_32191);var inst_32193 = console.log(inst_32192);var inst_32194 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32195 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_32196 = (new cljs.core.PersistentVector(null,1,(5),inst_32194,inst_32195,null));var inst_32197 = om.core.update_BANG_.call(null,self__.table_state,inst_32196,inst_32187);var state_32202__$1 = (function (){var statearr_32205 = state_32202;(statearr_32205[(8)] = inst_32193);
return statearr_32205;
})();var statearr_32206_32218 = state_32202__$1;(statearr_32206_32218[(2)] = inst_32197);
(statearr_32206_32218[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32203 === (2)))
{var inst_32187 = (state_32202[(7)]);var inst_32187__$1 = (state_32202[(2)]);var state_32202__$1 = (function (){var statearr_32207 = state_32202;(statearr_32207[(7)] = inst_32187__$1);
return statearr_32207;
})();if(cljs.core.truth_(inst_32187__$1))
{var statearr_32208_32219 = state_32202__$1;(statearr_32208_32219[(1)] = (3));
} else
{var statearr_32209_32220 = state_32202__$1;(statearr_32209_32220[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32203 === (1)))
{var inst_32185 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_sort_spec,next_periods,next_metric_variables,next_merge_key,next_fields,next_size);var state_32202__$1 = state_32202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32202__$1,(2),inst_32185);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto__,___$1,map__32181,map__32181__$1,next_props,map__32182,map__32182__$1,next_table_state,next_table_data,map__32183,map__32183__$1,next_controls,next_metric_variables,next_fields,next_sort_spec,next_columns,next_periods,next_index,next_size,next_index_type,next_merge_key,next_filter_spec,map__32184,map__32184__$1,fetch_table_data_fn,map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,map__32181,map__32181__$1,next_props,map__32182,map__32182__$1,next_table_state,next_table_data,map__32183,map__32183__$1,next_controls,next_metric_variables,next_fields,next_sort_spec,next_columns,next_periods,next_index,next_size,next_index_type,next_merge_key,next_filter_spec,map__32184,map__32184__$1,fetch_table_data_fn,map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_32213 = [null,null,null,null,null,null,null,null,null];(statearr_32213[(0)] = state_machine__16719__auto__);
(statearr_32213[(1)] = (1));
return statearr_32213;
});
var state_machine__16719__auto____1 = (function (state_32202){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_32202);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e32214){if((e32214 instanceof Object))
{var ex__16722__auto__ = e32214;var statearr_32215_32221 = state_32202;(statearr_32215_32221[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32202);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32214;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32222 = state_32202;
state_32202 = G__32222;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_32202){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_32202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,map__32181,map__32181__$1,next_props,map__32182,map__32182__$1,next_table_state,next_table_data,map__32183,map__32183__$1,next_controls,next_metric_variables,next_fields,next_sort_spec,next_columns,next_periods,next_index,next_size,next_index_type,next_merge_key,next_filter_spec,map__32184,map__32184__$1,fetch_table_data_fn,map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
})();var state__16735__auto__ = (function (){var statearr_32216 = f__16734__auto__.call(null);(statearr_32216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_32216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,map__32181,map__32181__$1,next_props,map__32182,map__32182__$1,next_table_state,next_table_data,map__32183,map__32183__$1,next_controls,next_metric_variables,next_fields,next_sort_spec,next_columns,next_periods,next_index,next_size,next_index_type,next_merge_key,next_filter_spec,map__32184,map__32184__$1,fetch_table_data_fn,map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
);
return c__16733__auto__;
} else
{return null;
}
});})(map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
;
clustermap.components.rankings_table.t32176.prototype.om$core$IRender$ = true;
clustermap.components.rankings_table.t32176.prototype.om$core$IRender$render$arity$1 = ((function (map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.rankings_table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
;
clustermap.components.rankings_table.t32176.prototype.om$core$IDidMount$ = true;
clustermap.components.rankings_table.t32176.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.rankings_factory.call(null));
});})(map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
;
clustermap.components.rankings_table.t32176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function (_32178){var self__ = this;
var _32178__$1 = this;return self__.meta32177;
});})(map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
;
clustermap.components.rankings_table.t32176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function (_32178,meta32177__$1){var self__ = this;
var _32178__$1 = this;return (new clustermap.components.rankings_table.t32176(self__.sort_spec,self__.index_type,self__.rankings_table_component,self__.owner,self__.p__32128,self__.props,self__.periods,self__.merge_key,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.fields,self__.table_state,self__.controls,self__.map__32173,self__.size,self__.map__32175,self__.metric_variables,self__.map__32174,meta32177__$1));
});})(map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
;
clustermap.components.rankings_table.__GT_t32176 = ((function (map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function __GT_t32176(sort_spec__$1,index_type__$1,rankings_table_component__$1,owner__$1,p__32128__$1,props__$1,periods__$1,merge_key__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,fields__$1,table_state__$1,controls__$1,map__32173__$2,size__$1,map__32175__$2,metric_variables__$1,map__32174__$2,meta32177){return (new clustermap.components.rankings_table.t32176(sort_spec__$1,index_type__$1,rankings_table_component__$1,owner__$1,p__32128__$1,props__$1,periods__$1,merge_key__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,fields__$1,table_state__$1,controls__$1,map__32173__$2,size__$1,map__32175__$2,metric_variables__$1,map__32174__$2,meta32177));
});})(map__32173,map__32173__$1,props,map__32174,map__32174__$1,table_state,table_data,map__32175,map__32175__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
;
}
return (new clustermap.components.rankings_table.t32176(sort_spec,index_type,rankings_table_component,owner,p__32128,props,periods,merge_key,table_data,index,filter_spec,columns,fields,table_state,controls,map__32173__$1,size,map__32175__$1,metric_variables,map__32174__$1,null));
});

//# sourceMappingURL=rankings_table.js.map