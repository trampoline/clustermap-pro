// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.color_scale');
goog.require('cljs.core');
goog.require('clustermap.formats.color');
goog.require('clustermap.formats.color');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.color_scale.color_scale_component = (function color_scale_component(threshold_colors,owner){var font_size = (function (){var pred__30805 = cljs.core._LT__EQ_;var expr__30806 = cljs.core.count.call(null,threshold_colors);if(cljs.core.truth_(pred__30805.call(null,(12),expr__30806)))
{return "40%";
} else
{if(cljs.core.truth_(pred__30805.call(null,(11),expr__30806)))
{return "50%";
} else
{if(cljs.core.truth_(pred__30805.call(null,(10),expr__30806)))
{return "60%";
} else
{if(cljs.core.truth_(pred__30805.call(null,(9),expr__30806)))
{return "70%";
} else
{if(cljs.core.truth_(pred__30805.call(null,(8),expr__30806)))
{return "80%";
} else
{if(cljs.core.truth_(pred__30805.call(null,(7),expr__30806)))
{return "90%";
} else
{return "100%";
}
}
}
}
}
}
})();if(typeof clustermap.components.color_scale.t30808 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.color_scale.t30808 = (function (font_size,owner,threshold_colors,color_scale_component,meta30809){
this.font_size = font_size;
this.owner = owner;
this.threshold_colors = threshold_colors;
this.color_scale_component = color_scale_component;
this.meta30809 = meta30809;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.color_scale.t30808.cljs$lang$type = true;
clustermap.components.color_scale.t30808.cljs$lang$ctorStr = "clustermap.components.color-scale/t30808";
clustermap.components.color_scale.t30808.cljs$lang$ctorPrWriter = ((function (font_size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.color-scale/t30808");
});})(font_size))
;
clustermap.components.color_scale.t30808.prototype.om$core$IRender$ = true;
clustermap.components.color_scale.t30808.prototype.om$core$IRender$render$arity$1 = ((function (font_size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.table({"className": "table-key"},React.DOM.tbody(null,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,font_size){
return (function iter__30811(s__30812){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,font_size){
return (function (){var s__30812__$1 = s__30812;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30812__$1);if(temp__4126__auto__)
{var s__30812__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30812__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30812__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30814 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30813 = (0);while(true){
if((i__30813 < size__4376__auto__))
{var vec__30817 = cljs.core._nth.call(null,c__4375__auto__,i__30813);var threshold = cljs.core.nth.call(null,vec__30817,(0),null);var color = cljs.core.nth.call(null,vec__30817,(1),null);cljs.core.chunk_append.call(null,b__30814,React.DOM.td({"style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color.call(null,color), "fontSize": self__.font_size}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(threshold)?clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""):null))));
{
var G__30819 = (i__30813 + (1));
i__30813 = G__30819;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30814),iter__30811.call(null,cljs.core.chunk_rest.call(null,s__30812__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30814),null);
}
} else
{var vec__30818 = cljs.core.first.call(null,s__30812__$2);var threshold = cljs.core.nth.call(null,vec__30818,(0),null);var color = cljs.core.nth.call(null,vec__30818,(1),null);return cljs.core.cons.call(null,React.DOM.td({"style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color.call(null,color), "fontSize": self__.font_size}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(threshold)?clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""):null))),iter__30811.call(null,cljs.core.rest.call(null,s__30812__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,font_size))
,null,null));
});})(this__7096__auto____$1,font_size))
;return iter__4377__auto__.call(null,self__.threshold_colors);
})()))));
});})(font_size))
;
clustermap.components.color_scale.t30808.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (font_size){
return (function (_30810){var self__ = this;
var _30810__$1 = this;return self__.meta30809;
});})(font_size))
;
clustermap.components.color_scale.t30808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (font_size){
return (function (_30810,meta30809__$1){var self__ = this;
var _30810__$1 = this;return (new clustermap.components.color_scale.t30808(self__.font_size,self__.owner,self__.threshold_colors,self__.color_scale_component,meta30809__$1));
});})(font_size))
;
clustermap.components.color_scale.__GT_t30808 = ((function (font_size){
return (function __GT_t30808(font_size__$1,owner__$1,threshold_colors__$1,color_scale_component__$1,meta30809){return (new clustermap.components.color_scale.t30808(font_size__$1,owner__$1,threshold_colors__$1,color_scale_component__$1,meta30809));
});})(font_size))
;
}
return (new clustermap.components.color_scale.t30808(font_size,owner,threshold_colors,color_scale_component,null));
});
