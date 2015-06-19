// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.metadata');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.api');
clustermap.components.metadata.render_metadata_row = (function render_metadata_row(record,p__31277){var map__31280 = p__31277;var map__31280__$1 = ((cljs.core.seq_QMARK_.call(null,map__31280))?cljs.core.apply.call(null,cljs.core.hash_map,map__31280):map__31280);var field = map__31280__$1;var render_fn = cljs.core.get.call(null,map__31280__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__31280__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__31280__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),(function (){var G__31281 = cljs.core.get.call(null,record,key);var G__31281__$1 = (((G__31281 == null))?null:render_fn.call(null,G__31281));return G__31281__$1;
})()], null)], null);
});
clustermap.components.metadata.render_metadata = (function render_metadata(record,p__31282){var map__31289 = p__31282;var map__31289__$1 = ((cljs.core.seq_QMARK_.call(null,map__31289))?cljs.core.apply.call(null,cljs.core.hash_map,map__31289):map__31289);var controls = map__31289__$1;var fields = cljs.core.get.call(null,map__31289__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var title_field = cljs.core.get.call(null,map__31289__$1,new cljs.core.Keyword(null,"title-field","title-field",402861939));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORD",record], null)));
return React.DOM.div({"className": "box box-first"},(function (){var attrs31290 = cljs.core.get.call(null,record,title_field);return cljs.core.apply.call(null,React.DOM.header,((cljs.core.map_QMARK_.call(null,attrs31290))?sablono.interpreter.attributes.call(null,attrs31290):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31290))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31290)], null))));
})(),React.DOM.div({"className": "tbl"},cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (map__31289,map__31289__$1,controls,fields,title_field){
return (function iter__31291(s__31292){return (new cljs.core.LazySeq(null,((function (map__31289,map__31289__$1,controls,fields,title_field){
return (function (){var s__31292__$1 = s__31292;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31292__$1);if(temp__4126__auto__)
{var s__31292__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31292__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__31292__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__31294 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__31293 = (0);while(true){
if((i__31293 < size__12289__auto__))
{var field = cljs.core._nth.call(null,c__12288__auto__,i__31293);cljs.core.chunk_append.call(null,b__31294,sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-row","div.tbl-row",2102558769)], null),clustermap.components.metadata.render_metadata_row.call(null,record,field))));
{
var G__31295 = (i__31293 + (1));
i__31293 = G__31295;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31294),iter__31291.call(null,cljs.core.chunk_rest.call(null,s__31292__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31294),null);
}
} else
{var field = cljs.core.first.call(null,s__31292__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-row","div.tbl-row",2102558769)], null),clustermap.components.metadata.render_metadata_row.call(null,record,field))),iter__31291.call(null,cljs.core.rest.call(null,s__31292__$2)));
}
} else
{return null;
}
break;
}
});})(map__31289,map__31289__$1,controls,fields,title_field))
,null,null));
});})(map__31289,map__31289__$1,controls,fields,title_field))
;return iter__12290__auto__.call(null,fields);
})())));
});
clustermap.components.metadata.metadata_component = (function metadata_component(p__31296,owner){var map__31363 = p__31296;var map__31363__$1 = ((cljs.core.seq_QMARK_.call(null,map__31363))?cljs.core.apply.call(null,cljs.core.hash_map,map__31363):map__31363);var props = map__31363__$1;var map__31364 = cljs.core.get.call(null,map__31363__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__31364__$1 = ((cljs.core.seq_QMARK_.call(null,map__31364))?cljs.core.apply.call(null,cljs.core.hash_map,map__31364):map__31364);var metadata = map__31364__$1;var record = cljs.core.get.call(null,map__31364__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__31365 = cljs.core.get.call(null,map__31364__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__31365__$1 = ((cljs.core.seq_QMARK_.call(null,map__31365))?cljs.core.apply.call(null,cljs.core.hash_map,map__31365):map__31365);var controls = map__31365__$1;var index = cljs.core.get.call(null,map__31365__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var index_type = cljs.core.get.call(null,map__31365__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var sort_spec = cljs.core.get.call(null,map__31365__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var size = cljs.core.get.call(null,map__31365__$1,new cljs.core.Keyword(null,"size","size",1098693007));var filter_spec = cljs.core.get.call(null,map__31363__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.metadata.t31366 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.metadata.t31366 = (function (sort_spec,index_type,metadata,owner,props,map__31364,index,map__31363,filter_spec,map__31365,controls,size,p__31296,metadata_component,record,meta31367){
this.sort_spec = sort_spec;
this.index_type = index_type;
this.metadata = metadata;
this.owner = owner;
this.props = props;
this.map__31364 = map__31364;
this.index = index;
this.map__31363 = map__31363;
this.filter_spec = filter_spec;
this.map__31365 = map__31365;
this.controls = controls;
this.size = size;
this.p__31296 = p__31296;
this.metadata_component = metadata_component;
this.record = record;
this.meta31367 = meta31367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.metadata.t31366.cljs$lang$type = true;
clustermap.components.metadata.t31366.cljs$lang$ctorStr = "clustermap.components.metadata/t31366";
clustermap.components.metadata.t31366.cljs$lang$ctorPrWriter = ((function (map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.metadata/t31366");
});})(map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.metadata.t31366.prototype.om$core$IWillUpdate$ = true;
clustermap.components.metadata.t31366.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_,p__31369,p__31370){var self__ = this;
var map__31371 = p__31369;var map__31371__$1 = ((cljs.core.seq_QMARK_.call(null,map__31371))?cljs.core.apply.call(null,cljs.core.hash_map,map__31371):map__31371);var map__31372 = cljs.core.get.call(null,map__31371__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__31372__$1 = ((cljs.core.seq_QMARK_.call(null,map__31372))?cljs.core.apply.call(null,cljs.core.hash_map,map__31372):map__31372);var next_metadata = map__31372__$1;var next_record = cljs.core.get.call(null,map__31372__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__31373 = cljs.core.get.call(null,map__31372__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__31373__$1 = ((cljs.core.seq_QMARK_.call(null,map__31373))?cljs.core.apply.call(null,cljs.core.hash_map,map__31373):map__31373);var next_controls = map__31373__$1;var next_index = cljs.core.get.call(null,map__31373__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__31373__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__31373__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_size = cljs.core.get.call(null,map__31373__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__31371__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31374 = p__31370;var map__31374__$1 = ((cljs.core.seq_QMARK_.call(null,map__31374))?cljs.core.apply.call(null,cljs.core.hash_map,map__31374):map__31374);var fetch_metadata_fn = cljs.core.get.call(null,map__31374__$1,new cljs.core.Keyword(null,"metadata-fn","metadata-fn",915781389));var ___$1 = this;if((cljs.core.not.call(null,next_record)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,map__31371,map__31371__$1,map__31372,map__31372__$1,next_metadata,next_record,map__31373,map__31373__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__31374,map__31374__$1,fetch_metadata_fn,map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,map__31371,map__31371__$1,map__31372,map__31372__$1,next_metadata,next_record,map__31373,map__31373__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__31374,map__31374__$1,fetch_metadata_fn,map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (state_31405){var state_val_31406 = (state_31405[(1)]);if((state_val_31406 === (7)))
{var inst_31377 = (state_31405[(7)]);var inst_31391 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_31377);var state_31405__$1 = state_31405;var statearr_31407_31429 = state_31405__$1;(statearr_31407_31429[(2)] = inst_31391);
(statearr_31407_31429[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31406 === (1)))
{var inst_31375 = fetch_metadata_fn.call(null,next_index,next_index_type,next_filter_spec,next_sort_spec,next_size);var state_31405__$1 = state_31405;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31405__$1,(2),inst_31375);
} else
{if((state_val_31406 === (4)))
{var state_31405__$1 = state_31405;var statearr_31408_31430 = state_31405__$1;(statearr_31408_31430[(2)] = null);
(statearr_31408_31430[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31406 === (6)))
{var state_31405__$1 = state_31405;var statearr_31409_31431 = state_31405__$1;(statearr_31409_31431[(2)] = null);
(statearr_31409_31431[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31406 === (3)))
{var inst_31377 = (state_31405[(7)]);var inst_31379 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31380 = ["METADATA-DATA",inst_31377];var inst_31381 = (new cljs.core.PersistentVector(null,2,(5),inst_31379,inst_31380,null));var inst_31382 = cljs.core.clj__GT_js.call(null,inst_31381);var inst_31383 = console.log(inst_31382);var inst_31384 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31385 = [new cljs.core.Keyword(null,"record","record",-779106859)];var inst_31386 = (new cljs.core.PersistentVector(null,1,(5),inst_31384,inst_31385,null));var inst_31388 = (inst_31377 == null);var state_31405__$1 = (function (){var statearr_31410 = state_31405;(statearr_31410[(8)] = inst_31383);
(statearr_31410[(9)] = inst_31386);
return statearr_31410;
})();if(cljs.core.truth_(inst_31388))
{var statearr_31411_31432 = state_31405__$1;(statearr_31411_31432[(1)] = (6));
} else
{var statearr_31412_31433 = state_31405__$1;(statearr_31412_31433[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31406 === (2)))
{var inst_31377 = (state_31405[(7)]);var inst_31377__$1 = (state_31405[(2)]);var state_31405__$1 = (function (){var statearr_31413 = state_31405;(statearr_31413[(7)] = inst_31377__$1);
return statearr_31413;
})();if(cljs.core.truth_(inst_31377__$1))
{var statearr_31414_31434 = state_31405__$1;(statearr_31414_31434[(1)] = (3));
} else
{var statearr_31415_31435 = state_31405__$1;(statearr_31415_31435[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31406 === (11)))
{var inst_31386 = (state_31405[(9)]);var inst_31399 = (state_31405[(2)]);var inst_31400 = om.core.update_BANG_.call(null,self__.metadata,inst_31386,inst_31399);var state_31405__$1 = state_31405;var statearr_31416_31436 = state_31405__$1;(statearr_31416_31436[(2)] = inst_31400);
(statearr_31416_31436[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31406 === (9)))
{var state_31405__$1 = state_31405;var statearr_31417_31437 = state_31405__$1;(statearr_31417_31437[(2)] = null);
(statearr_31417_31437[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31406 === (5)))
{var inst_31403 = (state_31405[(2)]);var state_31405__$1 = state_31405;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31405__$1,inst_31403);
} else
{if((state_val_31406 === (10)))
{var inst_31393 = (state_31405[(10)]);var inst_31397 = cljs.core.first.call(null,inst_31393);var state_31405__$1 = state_31405;var statearr_31418_31438 = state_31405__$1;(statearr_31418_31438[(2)] = inst_31397);
(statearr_31418_31438[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31406 === (8)))
{var inst_31393 = (state_31405[(10)]);var inst_31393__$1 = (state_31405[(2)]);var inst_31394 = (inst_31393__$1 == null);var state_31405__$1 = (function (){var statearr_31419 = state_31405;(statearr_31419[(10)] = inst_31393__$1);
return statearr_31419;
})();if(cljs.core.truth_(inst_31394))
{var statearr_31420_31439 = state_31405__$1;(statearr_31420_31439[(1)] = (9));
} else
{var statearr_31421_31440 = state_31405__$1;(statearr_31421_31440[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16733__auto__,___$1,map__31371,map__31371__$1,map__31372,map__31372__$1,next_metadata,next_record,map__31373,map__31373__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__31374,map__31374__$1,fetch_metadata_fn,map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,map__31371,map__31371__$1,map__31372,map__31372__$1,next_metadata,next_record,map__31373,map__31373__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__31374,map__31374__$1,fetch_metadata_fn,map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_31425 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_31425[(0)] = state_machine__16719__auto__);
(statearr_31425[(1)] = (1));
return statearr_31425;
});
var state_machine__16719__auto____1 = (function (state_31405){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_31405);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e31426){if((e31426 instanceof Object))
{var ex__16722__auto__ = e31426;var statearr_31427_31441 = state_31405;(statearr_31427_31441[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31405);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31426;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31442 = state_31405;
state_31405 = G__31442;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_31405){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_31405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,map__31371,map__31371__$1,map__31372,map__31372__$1,next_metadata,next_record,map__31373,map__31373__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__31374,map__31374__$1,fetch_metadata_fn,map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec))
})();var state__16735__auto__ = (function (){var statearr_31428 = f__16734__auto__.call(null);(statearr_31428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_31428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,map__31371,map__31371__$1,map__31372,map__31372__$1,next_metadata,next_record,map__31373,map__31373__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__31374,map__31374__$1,fetch_metadata_fn,map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec))
);
return c__16733__auto__;
} else
{return null;
}
});})(map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.metadata.t31366.prototype.om$core$IRender$ = true;
clustermap.components.metadata.t31366.prototype.om$core$IRender$render$arity$1 = ((function (map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.metadata.render_metadata.call(null,self__.record,self__.controls);
});})(map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.metadata.t31366.prototype.om$core$IDidMount$ = true;
clustermap.components.metadata.t31366.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-metadata-fn","fetch-metadata-fn",-325758784),clustermap.api.records_factory.call(null));
});})(map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.metadata.t31366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_31368){var self__ = this;
var _31368__$1 = this;return self__.meta31367;
});})(map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.metadata.t31366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_31368,meta31367__$1){var self__ = this;
var _31368__$1 = this;return (new clustermap.components.metadata.t31366(self__.sort_spec,self__.index_type,self__.metadata,self__.owner,self__.props,self__.map__31364,self__.index,self__.map__31363,self__.filter_spec,self__.map__31365,self__.controls,self__.size,self__.p__31296,self__.metadata_component,self__.record,meta31367__$1));
});})(map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.metadata.__GT_t31366 = ((function (map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function __GT_t31366(sort_spec__$1,index_type__$1,metadata__$1,owner__$1,props__$1,map__31364__$2,index__$1,map__31363__$2,filter_spec__$1,map__31365__$2,controls__$1,size__$1,p__31296__$1,metadata_component__$1,record__$1,meta31367){return (new clustermap.components.metadata.t31366(sort_spec__$1,index_type__$1,metadata__$1,owner__$1,props__$1,map__31364__$2,index__$1,map__31363__$2,filter_spec__$1,map__31365__$2,controls__$1,size__$1,p__31296__$1,metadata_component__$1,record__$1,meta31367));
});})(map__31363,map__31363__$1,props,map__31364,map__31364__$1,metadata,record,map__31365,map__31365__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
}
return (new clustermap.components.metadata.t31366(sort_spec,index_type,metadata,owner,props,map__31364__$1,index,map__31363__$1,filter_spec,map__31365__$1,controls,size,p__31296,metadata_component,record,null));
});

//# sourceMappingURL=metadata.js.map