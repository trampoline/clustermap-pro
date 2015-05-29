// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.rankings_table');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('clustermap.api');
goog.require('clustermap.components.table_common');
goog.require('sablono.core');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.components.table_common');
goog.require('clustermap.formats.html');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.html');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.rankings_table.render_table_row = (function render_table_row(p__30055){var map__30072 = p__30055;var map__30072__$1 = ((cljs.core.seq_QMARK_.call(null,map__30072))?cljs.core.apply.call(null,cljs.core.hash_map,map__30072):map__30072);var row_i = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"row-i","row-i",-1393499400));var record = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.rankings_table.t30073 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.rankings_table.t30073 = (function (columns,record,row_i,map__30072,p__30055,render_table_row,meta30074){
this.columns = columns;
this.record = record;
this.row_i = row_i;
this.map__30072 = map__30072;
this.p__30055 = p__30055;
this.render_table_row = render_table_row;
this.meta30074 = meta30074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.rankings_table.t30073.cljs$lang$type = true;
clustermap.components.rankings_table.t30073.cljs$lang$ctorStr = "clustermap.components.rankings-table/t30073";
clustermap.components.rankings_table.t30073.cljs$lang$ctorPrWriter = ((function (map__30072,map__30072__$1,row_i,record,columns){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.rankings-table/t30073");
});})(map__30072,map__30072__$1,row_i,record,columns))
;
clustermap.components.rankings_table.t30073.prototype.om$core$IRender$ = true;
clustermap.components.rankings_table.t30073.prototype.om$core$IRender$render$arity$1 = ((function (map__30072,map__30072__$1,row_i,record,columns){
return (function (this__14971__auto__){var self__ = this;
var this__14971__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.row_i))], null)], null),(function (){var iter__12252__auto__ = ((function (this__14971__auto____$1,map__30072,map__30072__$1,row_i,record,columns){
return (function iter__30076(s__30077){return (new cljs.core.LazySeq(null,((function (this__14971__auto____$1,map__30072,map__30072__$1,row_i,record,columns){
return (function (){var s__30077__$1 = s__30077;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30077__$1);if(temp__4126__auto__)
{var s__30077__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30077__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__30077__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__30079 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__30078 = (0);while(true){
if((i__30078 < size__12251__auto__))
{var vec__30084 = cljs.core._nth.call(null,c__12250__auto__,i__30078);var col_i = cljs.core.nth.call(null,vec__30084,(0),null);var col = cljs.core.nth.call(null,vec__30084,(1),null);cljs.core.chunk_append.call(null,b__30079,(function (){var map__30085 = col;var map__30085__$1 = ((cljs.core.seq_QMARK_.call(null,map__30085))?cljs.core.apply.call(null,cljs.core.hash_map,map__30085):map__30085);var render_fn = cljs.core.get.call(null,map__30085__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var name = cljs.core.get.call(null,map__30085__$1,new cljs.core.Keyword(null,"name","name",1843675177));var key = cljs.core.get.call(null,map__30085__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__11514__auto__ = render_fn;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_(key)?render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record):null)], null);
})());
{
var G__30088 = (i__30078 + (1));
i__30078 = G__30088;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30079),iter__30076.call(null,cljs.core.chunk_rest.call(null,s__30077__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30079),null);
}
} else
{var vec__30086 = cljs.core.first.call(null,s__30077__$2);var col_i = cljs.core.nth.call(null,vec__30086,(0),null);var col = cljs.core.nth.call(null,vec__30086,(1),null);return cljs.core.cons.call(null,(function (){var map__30087 = col;var map__30087__$1 = ((cljs.core.seq_QMARK_.call(null,map__30087))?cljs.core.apply.call(null,cljs.core.hash_map,map__30087):map__30087);var render_fn = cljs.core.get.call(null,map__30087__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var name = cljs.core.get.call(null,map__30087__$1,new cljs.core.Keyword(null,"name","name",1843675177));var key = cljs.core.get.call(null,map__30087__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__11514__auto__ = render_fn;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_(key)?render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record):null)], null);
})(),iter__30076.call(null,cljs.core.rest.call(null,s__30077__$2)));
}
} else
{return null;
}
break;
}
});})(this__14971__auto____$1,map__30072,map__30072__$1,row_i,record,columns))
,null,null));
});})(this__14971__auto____$1,map__30072,map__30072__$1,row_i,record,columns))
;return iter__12252__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),self__.columns));
})());return row;
})());
});})(map__30072,map__30072__$1,row_i,record,columns))
;
clustermap.components.rankings_table.t30073.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30072,map__30072__$1,row_i,record,columns){
return (function (_30075){var self__ = this;
var _30075__$1 = this;return self__.meta30074;
});})(map__30072,map__30072__$1,row_i,record,columns))
;
clustermap.components.rankings_table.t30073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30072,map__30072__$1,row_i,record,columns){
return (function (_30075,meta30074__$1){var self__ = this;
var _30075__$1 = this;return (new clustermap.components.rankings_table.t30073(self__.columns,self__.record,self__.row_i,self__.map__30072,self__.p__30055,self__.render_table_row,meta30074__$1));
});})(map__30072,map__30072__$1,row_i,record,columns))
;
clustermap.components.rankings_table.__GT_t30073 = ((function (map__30072,map__30072__$1,row_i,record,columns){
return (function __GT_t30073(columns__$1,record__$1,row_i__$1,map__30072__$2,p__30055__$1,render_table_row__$1,meta30074){return (new clustermap.components.rankings_table.t30073(columns__$1,record__$1,row_i__$1,map__30072__$2,p__30055__$1,render_table_row__$1,meta30074));
});})(map__30072,map__30072__$1,row_i,record,columns))
;
}
return (new clustermap.components.rankings_table.t30073(columns,record,row_i,map__30072__$1,p__30055,render_table_row,null));
});
clustermap.components.rankings_table.render_table = (function render_table(p__30089,owner,opts){var map__30097 = p__30089;var map__30097__$1 = ((cljs.core.seq_QMARK_.call(null,map__30097))?cljs.core.apply.call(null,cljs.core.hash_map,map__30097):map__30097);var props = map__30097__$1;var map__30098 = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__30098__$1 = ((cljs.core.seq_QMARK_.call(null,map__30098))?cljs.core.apply.call(null,cljs.core.hash_map,map__30098):map__30098);var table_data = map__30098__$1;var query = cljs.core.get.call(null,map__30098__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__30098__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__30099 = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30099__$1 = ((cljs.core.seq_QMARK_.call(null,map__30099))?cljs.core.apply.call(null,cljs.core.hash_map,map__30099):map__30099);var controls = map__30099__$1;var merge_key = cljs.core.get.call(null,map__30099__$1,new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261));var columns = cljs.core.get.call(null,map__30099__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var col_value_descriptors = clustermap.components.table_common.column_value_descriptors.call(null,columns);return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs30100 = clustermap.components.table_common.column_header_rows.call(null,columns,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"current-sort-spec","current-sort-spec",302606848),new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(query)], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs30100))?sablono.interpreter.attributes.call(null,attrs30100):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30100))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30100)], null))));
})(),(function (){var attrs30101 = om.core.build_all.call(null,clustermap.components.rankings_table.render_table_row,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),results),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (col_value_descriptors,map__30097,map__30097__$1,props,map__30098,map__30098__$1,table_data,query,results,map__30099,map__30099__$1,controls,merge_key,columns){
return (function (p__30102){var vec__30103 = p__30102;var row_i = cljs.core.nth.call(null,vec__30103,(0),null);var r = cljs.core.nth.call(null,vec__30103,(1),null);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row-i","row-i",-1393499400),row_i,new cljs.core.Keyword(null,"columns","columns",1998437288),col_value_descriptors,new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261),merge_key,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(col_value_descriptors,map__30097,map__30097__$1,props,map__30098,map__30098__$1,table_data,query,results,map__30099,map__30099__$1,controls,merge_key,columns))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs30101))?sablono.interpreter.attributes.call(null,attrs30101):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30101))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30101)], null))));
})())));
});
clustermap.components.rankings_table.rankings_table_component = (function rankings_table_component(p__30104,owner){var map__30117 = p__30104;var map__30117__$1 = ((cljs.core.seq_QMARK_.call(null,map__30117))?cljs.core.apply.call(null,cljs.core.hash_map,map__30117):map__30117);var props = map__30117__$1;var map__30118 = cljs.core.get.call(null,map__30117__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__30118__$1 = ((cljs.core.seq_QMARK_.call(null,map__30118))?cljs.core.apply.call(null,cljs.core.hash_map,map__30118):map__30118);var table_state = map__30118__$1;var table_data = cljs.core.get.call(null,map__30118__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__30119 = cljs.core.get.call(null,map__30118__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30119__$1 = ((cljs.core.seq_QMARK_.call(null,map__30119))?cljs.core.apply.call(null,cljs.core.hash_map,map__30119):map__30119);var controls = map__30119__$1;var sort_spec = cljs.core.get.call(null,map__30119__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var index_type = cljs.core.get.call(null,map__30119__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var periods = cljs.core.get.call(null,map__30119__$1,new cljs.core.Keyword(null,"periods","periods",1695878624));var merge_key = cljs.core.get.call(null,map__30119__$1,new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261));var index = cljs.core.get.call(null,map__30119__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var columns = cljs.core.get.call(null,map__30119__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var fields = cljs.core.get.call(null,map__30119__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var size = cljs.core.get.call(null,map__30119__$1,new cljs.core.Keyword(null,"size","size",1098693007));var metric_variables = cljs.core.get.call(null,map__30119__$1,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594));var filter_spec = cljs.core.get.call(null,map__30117__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.rankings_table.t30120 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.rankings_table.t30120 = (function (sort_spec,index_type,p__30104,rankings_table_component,owner,map__30118,props,periods,merge_key,table_data,index,map__30119,filter_spec,columns,fields,table_state,controls,size,map__30117,metric_variables,meta30121){
this.sort_spec = sort_spec;
this.index_type = index_type;
this.p__30104 = p__30104;
this.rankings_table_component = rankings_table_component;
this.owner = owner;
this.map__30118 = map__30118;
this.props = props;
this.periods = periods;
this.merge_key = merge_key;
this.table_data = table_data;
this.index = index;
this.map__30119 = map__30119;
this.filter_spec = filter_spec;
this.columns = columns;
this.fields = fields;
this.table_state = table_state;
this.controls = controls;
this.size = size;
this.map__30117 = map__30117;
this.metric_variables = metric_variables;
this.meta30121 = meta30121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.rankings_table.t30120.cljs$lang$type = true;
clustermap.components.rankings_table.t30120.cljs$lang$ctorStr = "clustermap.components.rankings-table/t30120";
clustermap.components.rankings_table.t30120.cljs$lang$ctorPrWriter = ((function (map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.rankings-table/t30120");
});})(map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
;
clustermap.components.rankings_table.t30120.prototype.om$core$IWillUpdate$ = true;
clustermap.components.rankings_table.t30120.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function (_,p__30123,p__30124){var self__ = this;
var map__30125 = p__30123;var map__30125__$1 = ((cljs.core.seq_QMARK_.call(null,map__30125))?cljs.core.apply.call(null,cljs.core.hash_map,map__30125):map__30125);var next_props = map__30125__$1;var map__30126 = cljs.core.get.call(null,map__30125__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__30126__$1 = ((cljs.core.seq_QMARK_.call(null,map__30126))?cljs.core.apply.call(null,cljs.core.hash_map,map__30126):map__30126);var next_table_state = map__30126__$1;var next_table_data = cljs.core.get.call(null,map__30126__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__30127 = cljs.core.get.call(null,map__30126__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30127__$1 = ((cljs.core.seq_QMARK_.call(null,map__30127))?cljs.core.apply.call(null,cljs.core.hash_map,map__30127):map__30127);var next_controls = map__30127__$1;var next_metric_variables = cljs.core.get.call(null,map__30127__$1,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594));var next_fields = cljs.core.get.call(null,map__30127__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var next_sort_spec = cljs.core.get.call(null,map__30127__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_columns = cljs.core.get.call(null,map__30127__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var next_periods = cljs.core.get.call(null,map__30127__$1,new cljs.core.Keyword(null,"periods","periods",1695878624));var next_index = cljs.core.get.call(null,map__30127__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_size = cljs.core.get.call(null,map__30127__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_index_type = cljs.core.get.call(null,map__30127__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_merge_key = cljs.core.get.call(null,map__30127__$1,new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261));var next_filter_spec = cljs.core.get.call(null,map__30125__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30128 = p__30124;var map__30128__$1 = ((cljs.core.seq_QMARK_.call(null,map__30128))?cljs.core.apply.call(null,cljs.core.hash_map,map__30128):map__30128);var next_state = map__30128__$1;var table_data_resource = cljs.core.get.call(null,map__30128__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,table_data_resource,clustermap.api.rankings,next_index,next_index_type,next_filter_spec,next_sort_spec,next_periods,next_metric_variables,next_merge_key,next_fields,next_size);
} else
{return null;
}
});})(map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
;
clustermap.components.rankings_table.t30120.prototype.om$core$IRender$ = true;
clustermap.components.rankings_table.t30120.prototype.om$core$IRender$render$arity$1 = ((function (map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.rankings_table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
;
clustermap.components.rankings_table.t30120.prototype.om$core$IDidMount$ = true;
clustermap.components.rankings_table.t30120.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANKINGS-TABLE-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
);
});})(map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
;
clustermap.components.rankings_table.t30120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function (_30122){var self__ = this;
var _30122__$1 = this;return self__.meta30121;
});})(map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
;
clustermap.components.rankings_table.t30120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function (_30122,meta30121__$1){var self__ = this;
var _30122__$1 = this;return (new clustermap.components.rankings_table.t30120(self__.sort_spec,self__.index_type,self__.p__30104,self__.rankings_table_component,self__.owner,self__.map__30118,self__.props,self__.periods,self__.merge_key,self__.table_data,self__.index,self__.map__30119,self__.filter_spec,self__.columns,self__.fields,self__.table_state,self__.controls,self__.size,self__.map__30117,self__.metric_variables,meta30121__$1));
});})(map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
;
clustermap.components.rankings_table.__GT_t30120 = ((function (map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec){
return (function __GT_t30120(sort_spec__$1,index_type__$1,p__30104__$1,rankings_table_component__$1,owner__$1,map__30118__$2,props__$1,periods__$1,merge_key__$1,table_data__$1,index__$1,map__30119__$2,filter_spec__$1,columns__$1,fields__$1,table_state__$1,controls__$1,size__$1,map__30117__$2,metric_variables__$1,meta30121){return (new clustermap.components.rankings_table.t30120(sort_spec__$1,index_type__$1,p__30104__$1,rankings_table_component__$1,owner__$1,map__30118__$2,props__$1,periods__$1,merge_key__$1,table_data__$1,index__$1,map__30119__$2,filter_spec__$1,columns__$1,fields__$1,table_state__$1,controls__$1,size__$1,map__30117__$2,metric_variables__$1,meta30121));
});})(map__30117,map__30117__$1,props,map__30118,map__30118__$1,table_state,table_data,map__30119,map__30119__$1,controls,sort_spec,index_type,periods,merge_key,index,columns,fields,size,metric_variables,filter_spec))
;
}
return (new clustermap.components.rankings_table.t30120(sort_spec,index_type,p__30104,rankings_table_component,owner,map__30118__$1,props,periods,merge_key,table_data,index,map__30119__$1,filter_spec,columns,fields,table_state,controls,size,map__30117__$1,metric_variables,null));
});

//# sourceMappingURL=rankings_table.js.map