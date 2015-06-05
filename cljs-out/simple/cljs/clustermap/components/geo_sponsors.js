// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.geo_sponsors');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('clustermap.ordered_resource');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.geo_sponsors.render_STAR_ = (function render_STAR_(geo_sponsors_data){var top3 = cljs.core.take.call(null,(3),geo_sponsors_data);return React.DOM.div({"className": "sponsors"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (top3){
return (function iter__27905(s__27906){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__27906__$1 = s__27906;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27906__$1);if(temp__4126__auto__)
{var s__27906__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27906__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27906__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27908 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27907 = (0);while(true){
if((i__27907 < size__4376__auto__))
{var map__27911 = cljs.core._nth.call(null,c__4375__auto__,i__27907);var map__27911__$1 = ((cljs.core.seq_QMARK_.call(null,map__27911))?cljs.core.apply.call(null,cljs.core.hash_map,map__27911):map__27911);var teaser = cljs.core.get.call(null,map__27911__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__27911__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__27911__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__27911__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__27908,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__27913 = (i__27907 + (1));
i__27907 = G__27913;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27908),iter__27905.call(null,cljs.core.chunk_rest.call(null,s__27906__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27908),null);
}
} else
{var map__27912 = cljs.core.first.call(null,s__27906__$2);var map__27912__$1 = ((cljs.core.seq_QMARK_.call(null,map__27912))?cljs.core.apply.call(null,cljs.core.hash_map,map__27912):map__27912);var teaser = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__27905.call(null,cljs.core.rest.call(null,s__27906__$2)));
}
} else
{return null;
}
break;
}
});})(top3))
,null,null));
});})(top3))
;return iter__4377__auto__.call(null,top3);
})()));
});
clustermap.components.geo_sponsors.request_geo_sponsors_data = (function request_geo_sponsors_data(resource,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.geo_sponsors,bounds);
});
var component_fnk__7881__auto___27943 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema27919 = schema.core.Any;var input_schema27920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map27917","map27917",-1663386689,null))], null);var input_checker27921 = schema.core.checker.call(null,input_schema27920);var output_checker27922 = schema.core.checker.call(null,output_schema27919);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922){
return (function constructor27915(G__27923){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___27944 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27923], null);var temp__4126__auto___27945 = input_checker27921.call(null,args__6035__auto___27944);if(cljs.core.truth_(temp__4126__auto___27945))
{var error__6036__auto___27946 = temp__4126__auto___27945;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor27915","constructor27915",-1920125703,null),cljs.core.pr_str.call(null,error__6036__auto___27946)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27946,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___27944,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27920,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map27917 = G__27923;while(true){
if(cljs.core.map_QMARK_.call(null,map27917))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map27917)));
}
var map27918 = plumbing.fnk.schema.safe_get.call(null,map27917,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map27918,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map27918,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map27917,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t27932 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t27932 = (function (output_checker27922,input_checker27921,G__27923,owner,output_schema27919,map27918,bounds,input_schema27920,constructor27915,validate__6034__auto__,ufv__,geo_sponsors,map27917,meta27933){
this.output_checker27922 = output_checker27922;
this.input_checker27921 = input_checker27921;
this.G__27923 = G__27923;
this.owner = owner;
this.output_schema27919 = output_schema27919;
this.map27918 = map27918;
this.bounds = bounds;
this.input_schema27920 = input_schema27920;
this.constructor27915 = constructor27915;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.map27917 = map27917;
this.meta27933 = meta27933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t27932.cljs$lang$type = true;
clustermap.components.geo_sponsors.t27932.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t27932";
clustermap.components.geo_sponsors.t27932.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t27932");
});})(owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922))
;
clustermap.components.geo_sponsors.t27932.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t27932.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922))
;
clustermap.components.geo_sponsors.t27932.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t27932.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922){
return (function (_,p__27935,p__27936){var self__ = this;
var map__27937 = p__27935;var map__27937__$1 = ((cljs.core.seq_QMARK_.call(null,map__27937))?cljs.core.apply.call(null,cljs.core.hash_map,map__27937):map__27937);var next_bounds = cljs.core.get.call(null,map__27937__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__27938 = cljs.core.get.call(null,map__27937__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__27938__$1 = ((cljs.core.seq_QMARK_.call(null,map__27938))?cljs.core.apply.call(null,cljs.core.hash_map,map__27938):map__27938);var next_geo_sponsors = map__27938__$1;var next_data = cljs.core.get.call(null,map__27938__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__27939 = p__27936;var map__27939__$1 = ((cljs.core.seq_QMARK_.call(null,map__27939))?cljs.core.apply.call(null,cljs.core.hash_map,map__27939):map__27939);var next_geo_sponsors_data_resource = cljs.core.get.call(null,map__27939__$1,new cljs.core.Keyword(null,"geo-sponsors-data-resource","geo-sponsors-data-resource",1080846063));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{return clustermap.components.geo_sponsors.request_geo_sponsors_data.call(null,next_geo_sponsors_data_resource,next_bounds);
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922))
;
clustermap.components.geo_sponsors.t27932.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t27932.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922){
return (function (_){var self__ = this;
var ___$1 = this;var gsr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"geo-sponsors-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"geo-sponsors-data-resource","geo-sponsors-data-resource",1080846063),gsr);
return clustermap.ordered_resource.retrieve_responses.call(null,gsr,((function (gsr,___$1,owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922){
return (function (response){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GEO-SPONSORS : ",response], null)));
return om.core.update_BANG_.call(null,self__.geo_sponsors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),response);
});})(gsr,___$1,owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922))
);
});})(owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922))
;
clustermap.components.geo_sponsors.t27932.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t27932.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922))
;
clustermap.components.geo_sponsors.t27932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922){
return (function (_27934){var self__ = this;
var _27934__$1 = this;return self__.meta27933;
});})(owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922))
;
clustermap.components.geo_sponsors.t27932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922){
return (function (_27934,meta27933__$1){var self__ = this;
var _27934__$1 = this;return (new clustermap.components.geo_sponsors.t27932(self__.output_checker27922,self__.input_checker27921,self__.G__27923,self__.owner,self__.output_schema27919,self__.map27918,self__.bounds,self__.input_schema27920,self__.constructor27915,self__.validate__6034__auto__,self__.ufv__,self__.geo_sponsors,self__.map27917,meta27933__$1));
});})(owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922))
;
clustermap.components.geo_sponsors.__GT_t27932 = ((function (owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922){
return (function __GT_t27932(output_checker27922__$1,input_checker27921__$1,G__27923__$1,owner__$1,output_schema27919__$1,map27918__$1,bounds__$1,input_schema27920__$1,constructor27915__$1,validate__6034__auto____$1,ufv____$1,geo_sponsors__$1,map27917__$1,meta27933){return (new clustermap.components.geo_sponsors.t27932(output_checker27922__$1,input_checker27921__$1,G__27923__$1,owner__$1,output_schema27919__$1,map27918__$1,bounds__$1,input_schema27920__$1,constructor27915__$1,validate__6034__auto____$1,ufv____$1,geo_sponsors__$1,map27917__$1,meta27933));
});})(owner,geo_sponsors,bounds,map27918,validate__6034__auto__,ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922))
;
}
return (new clustermap.components.geo_sponsors.t27932(output_checker27922,input_checker27921,G__27923,owner,output_schema27919,map27918,bounds,input_schema27920,constructor27915,validate__6034__auto__,ufv__,geo_sponsors,map27917,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___27947 = output_checker27922.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___27947))
{var error__6036__auto___27948 = temp__4126__auto___27947;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor27915","constructor27915",-1920125703,null),cljs.core.pr_str.call(null,error__6036__auto___27948)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27948,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27919,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema27919,input_schema27920,input_checker27921,output_checker27922))
,schema.core.make_fn_schema.call(null,output_schema27919,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27920], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___27943){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner27914,p__27940){var vec__27942 = p__27940;var opts__7883__auto__ = cljs.core.nth.call(null,vec__27942,(0),null);return component_fnk__7881__auto___27943.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner27914,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner27914,var_args){
var p__27940 = null;if (arguments.length > 2) {
  p__27940 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner27914,p__27940);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__27949){
var data__7882__auto__ = cljs.core.first(arglist__27949);
arglist__27949 = cljs.core.next(arglist__27949);
var owner27914 = cljs.core.first(arglist__27949);
var p__27940 = cljs.core.rest(arglist__27949);
return geo_sponsors_component__delegate(data__7882__auto__,owner27914,p__27940);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___27943))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m27916){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m27916);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m27916){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m27916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
