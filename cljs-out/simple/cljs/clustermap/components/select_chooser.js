// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.select_chooser');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__28909,owner){var map__28923 = p__28909;var map__28923__$1 = ((cljs.core.seq_QMARK_.call(null,map__28923))?cljs.core.apply.call(null,cljs.core.hash_map,map__28923):map__28923);var cursor = map__28923__$1;if(typeof clustermap.components.select_chooser.t28924 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t28924 = (function (cursor,map__28923,owner,p__28909,value_descriptions,key,title,select_chooser_component,meta28925){
this.cursor = cursor;
this.map__28923 = map__28923;
this.owner = owner;
this.p__28909 = p__28909;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta28925 = meta28925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t28924.cljs$lang$type = true;
clustermap.components.select_chooser.t28924.cljs$lang$ctorStr = "clustermap.components.select-chooser/t28924";
clustermap.components.select_chooser.t28924.cljs$lang$ctorPrWriter = ((function (map__28923,map__28923__$1,cursor){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.select-chooser/t28924");
});})(map__28923,map__28923__$1,cursor))
;
clustermap.components.select_chooser.t28924.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t28924.prototype.om$core$IRender$render$arity$1 = ((function (map__28923,map__28923__$1,cursor){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;var current_val = (function (){var G__28927 = self__.cursor;var G__28927__$1 = (((G__28927 == null))?null:cljs.core.get_in.call(null,G__28927,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null)));var G__28927__$2 = (((G__28927__$1 == null))?null:cljs.core.name.call(null,G__28927__$1));return G__28927__$2;
})();return React.DOM.select({"onChange": ((function (current_val,this__7096__auto____$1,map__28923,map__28923__$1,cursor){
return (function (e){var val = cljs.core.not_empty.call(null,e.target.value);console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(current_val,this__7096__auto____$1,map__28923,map__28923__$1,cursor))
, "value": current_val},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (current_val,this__7096__auto____$1,map__28923,map__28923__$1,cursor){
return (function iter__28928(s__28929){return (new cljs.core.LazySeq(null,((function (current_val,this__7096__auto____$1,map__28923,map__28923__$1,cursor){
return (function (){var s__28929__$1 = s__28929;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28929__$1);if(temp__4126__auto__)
{var s__28929__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28929__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28929__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28931 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28930 = (0);while(true){
if((i__28930 < size__4376__auto__))
{var vec__28934 = cljs.core._nth.call(null,c__4375__auto__,i__28930);var value = cljs.core.nth.call(null,vec__28934,(0),null);var description = cljs.core.nth.call(null,vec__28934,(1),null);cljs.core.chunk_append.call(null,b__28931,sablono.interpreter.option.call(null,{"value": cljs.core.name.call(null,value)},sablono.interpreter.interpret.call(null,description)));
{
var G__28936 = (i__28930 + (1));
i__28930 = G__28936;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28931),iter__28928.call(null,cljs.core.chunk_rest.call(null,s__28929__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28931),null);
}
} else
{var vec__28935 = cljs.core.first.call(null,s__28929__$2);var value = cljs.core.nth.call(null,vec__28935,(0),null);var description = cljs.core.nth.call(null,vec__28935,(1),null);return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": cljs.core.name.call(null,value)},sablono.interpreter.interpret.call(null,description)),iter__28928.call(null,cljs.core.rest.call(null,s__28929__$2)));
}
} else
{return null;
}
break;
}
});})(current_val,this__7096__auto____$1,map__28923,map__28923__$1,cursor))
,null,null));
});})(current_val,this__7096__auto____$1,map__28923,map__28923__$1,cursor))
;return iter__4377__auto__.call(null,self__.value_descriptions);
})()));
});})(map__28923,map__28923__$1,cursor))
;
clustermap.components.select_chooser.t28924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28923,map__28923__$1,cursor){
return (function (_28926){var self__ = this;
var _28926__$1 = this;return self__.meta28925;
});})(map__28923,map__28923__$1,cursor))
;
clustermap.components.select_chooser.t28924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28923,map__28923__$1,cursor){
return (function (_28926,meta28925__$1){var self__ = this;
var _28926__$1 = this;return (new clustermap.components.select_chooser.t28924(self__.cursor,self__.map__28923,self__.owner,self__.p__28909,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta28925__$1));
});})(map__28923,map__28923__$1,cursor))
;
clustermap.components.select_chooser.__GT_t28924 = ((function (map__28923,map__28923__$1,cursor){
return (function __GT_t28924(cursor__$1,map__28923__$2,owner__$1,p__28909__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta28925){return (new clustermap.components.select_chooser.t28924(cursor__$1,map__28923__$2,owner__$1,p__28909__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta28925));
});})(map__28923,map__28923__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t28924(cursor,map__28923__$1,owner,p__28909,value_descriptions,key,title,select_chooser_component,null));
});
