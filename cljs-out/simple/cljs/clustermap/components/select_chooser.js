// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.select_chooser');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__28828,owner){var map__28842 = p__28828;var map__28842__$1 = ((cljs.core.seq_QMARK_.call(null,map__28842))?cljs.core.apply.call(null,cljs.core.hash_map,map__28842):map__28842);var cursor = map__28842__$1;if(typeof clustermap.components.select_chooser.t28843 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t28843 = (function (cursor,map__28842,owner,p__28828,value_descriptions,key,title,select_chooser_component,meta28844){
this.cursor = cursor;
this.map__28842 = map__28842;
this.owner = owner;
this.p__28828 = p__28828;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta28844 = meta28844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t28843.cljs$lang$type = true;
clustermap.components.select_chooser.t28843.cljs$lang$ctorStr = "clustermap.components.select-chooser/t28843";
clustermap.components.select_chooser.t28843.cljs$lang$ctorPrWriter = ((function (map__28842,map__28842__$1,cursor){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.select-chooser/t28843");
});})(map__28842,map__28842__$1,cursor))
;
clustermap.components.select_chooser.t28843.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t28843.prototype.om$core$IRender$render$arity$1 = ((function (map__28842,map__28842__$1,cursor){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;var current_val = (function (){var G__28846 = self__.cursor;var G__28846__$1 = (((G__28846 == null))?null:cljs.core.get_in.call(null,G__28846,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null)));var G__28846__$2 = (((G__28846__$1 == null))?null:cljs.core.name.call(null,G__28846__$1));return G__28846__$2;
})();return React.DOM.select({"onChange": ((function (current_val,this__7096__auto____$1,map__28842,map__28842__$1,cursor){
return (function (e){var val = cljs.core.not_empty.call(null,e.target.value);console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(current_val,this__7096__auto____$1,map__28842,map__28842__$1,cursor))
, "value": current_val},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (current_val,this__7096__auto____$1,map__28842,map__28842__$1,cursor){
return (function iter__28847(s__28848){return (new cljs.core.LazySeq(null,((function (current_val,this__7096__auto____$1,map__28842,map__28842__$1,cursor){
return (function (){var s__28848__$1 = s__28848;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28848__$1);if(temp__4126__auto__)
{var s__28848__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28848__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28848__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28850 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28849 = (0);while(true){
if((i__28849 < size__4376__auto__))
{var vec__28853 = cljs.core._nth.call(null,c__4375__auto__,i__28849);var value = cljs.core.nth.call(null,vec__28853,(0),null);var description = cljs.core.nth.call(null,vec__28853,(1),null);cljs.core.chunk_append.call(null,b__28850,sablono.interpreter.option.call(null,{"value": cljs.core.name.call(null,value)},sablono.interpreter.interpret.call(null,description)));
{
var G__28855 = (i__28849 + (1));
i__28849 = G__28855;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28850),iter__28847.call(null,cljs.core.chunk_rest.call(null,s__28848__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28850),null);
}
} else
{var vec__28854 = cljs.core.first.call(null,s__28848__$2);var value = cljs.core.nth.call(null,vec__28854,(0),null);var description = cljs.core.nth.call(null,vec__28854,(1),null);return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": cljs.core.name.call(null,value)},sablono.interpreter.interpret.call(null,description)),iter__28847.call(null,cljs.core.rest.call(null,s__28848__$2)));
}
} else
{return null;
}
break;
}
});})(current_val,this__7096__auto____$1,map__28842,map__28842__$1,cursor))
,null,null));
});})(current_val,this__7096__auto____$1,map__28842,map__28842__$1,cursor))
;return iter__4377__auto__.call(null,self__.value_descriptions);
})()));
});})(map__28842,map__28842__$1,cursor))
;
clustermap.components.select_chooser.t28843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28842,map__28842__$1,cursor){
return (function (_28845){var self__ = this;
var _28845__$1 = this;return self__.meta28844;
});})(map__28842,map__28842__$1,cursor))
;
clustermap.components.select_chooser.t28843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28842,map__28842__$1,cursor){
return (function (_28845,meta28844__$1){var self__ = this;
var _28845__$1 = this;return (new clustermap.components.select_chooser.t28843(self__.cursor,self__.map__28842,self__.owner,self__.p__28828,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta28844__$1));
});})(map__28842,map__28842__$1,cursor))
;
clustermap.components.select_chooser.__GT_t28843 = ((function (map__28842,map__28842__$1,cursor){
return (function __GT_t28843(cursor__$1,map__28842__$2,owner__$1,p__28828__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta28844){return (new clustermap.components.select_chooser.t28843(cursor__$1,map__28842__$2,owner__$1,p__28828__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta28844));
});})(map__28842,map__28842__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t28843(cursor,map__28842__$1,owner,p__28828,value_descriptions,key,title,select_chooser_component,null));
});
