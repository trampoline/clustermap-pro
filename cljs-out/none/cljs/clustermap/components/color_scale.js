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
clustermap.components.color_scale.color_scale_component = (function color_scale_component(threshold_colors,owner){var font_size = (function (){var pred__27606 = cljs.core._LT__EQ_;var expr__27607 = cljs.core.count.call(null,threshold_colors);if(cljs.core.truth_(pred__27606.call(null,(12),expr__27607)))
{return "40%";
} else
{if(cljs.core.truth_(pred__27606.call(null,(11),expr__27607)))
{return "50%";
} else
{if(cljs.core.truth_(pred__27606.call(null,(10),expr__27607)))
{return "60%";
} else
{if(cljs.core.truth_(pred__27606.call(null,(9),expr__27607)))
{return "70%";
} else
{if(cljs.core.truth_(pred__27606.call(null,(8),expr__27607)))
{return "80%";
} else
{if(cljs.core.truth_(pred__27606.call(null,(7),expr__27607)))
{return "90%";
} else
{return "100%";
}
}
}
}
}
}
})();if(typeof clustermap.components.color_scale.t27609 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.color_scale.t27609 = (function (font_size,owner,threshold_colors,color_scale_component,meta27610){
this.font_size = font_size;
this.owner = owner;
this.threshold_colors = threshold_colors;
this.color_scale_component = color_scale_component;
this.meta27610 = meta27610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.color_scale.t27609.cljs$lang$type = true;
clustermap.components.color_scale.t27609.cljs$lang$ctorStr = "clustermap.components.color-scale/t27609";
clustermap.components.color_scale.t27609.cljs$lang$ctorPrWriter = ((function (font_size){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.color-scale/t27609");
});})(font_size))
;
clustermap.components.color_scale.t27609.prototype.om$core$IRender$ = true;
clustermap.components.color_scale.t27609.prototype.om$core$IRender$render$arity$1 = ((function (font_size){
return (function (this__14971__auto__){var self__ = this;
var this__14971__auto____$1 = this;return React.DOM.table({"className": "table-key"},React.DOM.tbody(null,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__12252__auto__ = ((function (this__14971__auto____$1,font_size){
return (function iter__27612(s__27613){return (new cljs.core.LazySeq(null,((function (this__14971__auto____$1,font_size){
return (function (){var s__27613__$1 = s__27613;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27613__$1);if(temp__4126__auto__)
{var s__27613__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27613__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__27613__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__27615 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__27614 = (0);while(true){
if((i__27614 < size__12251__auto__))
{var vec__27618 = cljs.core._nth.call(null,c__12250__auto__,i__27614);var threshold = cljs.core.nth.call(null,vec__27618,(0),null);var color = cljs.core.nth.call(null,vec__27618,(1),null);cljs.core.chunk_append.call(null,b__27615,React.DOM.td({"style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color.call(null,color), "fontSize": self__.font_size}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(threshold)?clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""):null))));
{
var G__27620 = (i__27614 + (1));
i__27614 = G__27620;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27615),iter__27612.call(null,cljs.core.chunk_rest.call(null,s__27613__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27615),null);
}
} else
{var vec__27619 = cljs.core.first.call(null,s__27613__$2);var threshold = cljs.core.nth.call(null,vec__27619,(0),null);var color = cljs.core.nth.call(null,vec__27619,(1),null);return cljs.core.cons.call(null,React.DOM.td({"style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color.call(null,color), "fontSize": self__.font_size}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(threshold)?clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""):null))),iter__27612.call(null,cljs.core.rest.call(null,s__27613__$2)));
}
} else
{return null;
}
break;
}
});})(this__14971__auto____$1,font_size))
,null,null));
});})(this__14971__auto____$1,font_size))
;return iter__12252__auto__.call(null,self__.threshold_colors);
})()))));
});})(font_size))
;
clustermap.components.color_scale.t27609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (font_size){
return (function (_27611){var self__ = this;
var _27611__$1 = this;return self__.meta27610;
});})(font_size))
;
clustermap.components.color_scale.t27609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (font_size){
return (function (_27611,meta27610__$1){var self__ = this;
var _27611__$1 = this;return (new clustermap.components.color_scale.t27609(self__.font_size,self__.owner,self__.threshold_colors,self__.color_scale_component,meta27610__$1));
});})(font_size))
;
clustermap.components.color_scale.__GT_t27609 = ((function (font_size){
return (function __GT_t27609(font_size__$1,owner__$1,threshold_colors__$1,color_scale_component__$1,meta27610){return (new clustermap.components.color_scale.t27609(font_size__$1,owner__$1,threshold_colors__$1,color_scale_component__$1,meta27610));
});})(font_size))
;
}
return (new clustermap.components.color_scale.t27609(font_size,owner,threshold_colors,color_scale_component,null));
});

//# sourceMappingURL=color_scale.js.map