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
return (function iter__27828(s__27829){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__27829__$1 = s__27829;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27829__$1);if(temp__4126__auto__)
{var s__27829__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27829__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27829__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27831 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27830 = (0);while(true){
if((i__27830 < size__4376__auto__))
{var map__27834 = cljs.core._nth.call(null,c__4375__auto__,i__27830);var map__27834__$1 = ((cljs.core.seq_QMARK_.call(null,map__27834))?cljs.core.apply.call(null,cljs.core.hash_map,map__27834):map__27834);var teaser = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__27831,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__27836 = (i__27830 + (1));
i__27830 = G__27836;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27831),iter__27828.call(null,cljs.core.chunk_rest.call(null,s__27829__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27831),null);
}
} else
{var map__27835 = cljs.core.first.call(null,s__27829__$2);var map__27835__$1 = ((cljs.core.seq_QMARK_.call(null,map__27835))?cljs.core.apply.call(null,cljs.core.hash_map,map__27835):map__27835);var teaser = cljs.core.get.call(null,map__27835__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__27835__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__27835__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__27835__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__27828.call(null,cljs.core.rest.call(null,s__27829__$2)));
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
var component_fnk__7881__auto___27866 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema27842 = schema.core.Any;var input_schema27843 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map27840","map27840",-823423025,null))], null);var input_checker27844 = schema.core.checker.call(null,input_schema27843);var output_checker27845 = schema.core.checker.call(null,output_schema27842);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845){
return (function constructor27838(G__27846){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___27867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27846], null);var temp__4126__auto___27868 = input_checker27844.call(null,args__6035__auto___27867);if(cljs.core.truth_(temp__4126__auto___27868))
{var error__6036__auto___27869 = temp__4126__auto___27868;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor27838","constructor27838",-204493496,null),cljs.core.pr_str.call(null,error__6036__auto___27869)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27869,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___27867,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27843,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map27840 = G__27846;while(true){
if(cljs.core.map_QMARK_.call(null,map27840))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map27840)));
}
var map27841 = plumbing.fnk.schema.safe_get.call(null,map27840,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map27841,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map27841,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map27840,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t27855 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t27855 = (function (output_checker27845,input_schema27843,output_schema27842,owner,G__27846,input_checker27844,constructor27838,map27840,bounds,validate__6034__auto__,map27841,ufv__,geo_sponsors,meta27856){
this.output_checker27845 = output_checker27845;
this.input_schema27843 = input_schema27843;
this.output_schema27842 = output_schema27842;
this.owner = owner;
this.G__27846 = G__27846;
this.input_checker27844 = input_checker27844;
this.constructor27838 = constructor27838;
this.map27840 = map27840;
this.bounds = bounds;
this.validate__6034__auto__ = validate__6034__auto__;
this.map27841 = map27841;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.meta27856 = meta27856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t27855.cljs$lang$type = true;
clustermap.components.geo_sponsors.t27855.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t27855";
clustermap.components.geo_sponsors.t27855.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t27855");
});})(owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845))
;
clustermap.components.geo_sponsors.t27855.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t27855.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845))
;
clustermap.components.geo_sponsors.t27855.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t27855.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845){
return (function (_,p__27858,p__27859){var self__ = this;
var map__27860 = p__27858;var map__27860__$1 = ((cljs.core.seq_QMARK_.call(null,map__27860))?cljs.core.apply.call(null,cljs.core.hash_map,map__27860):map__27860);var next_bounds = cljs.core.get.call(null,map__27860__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__27861 = cljs.core.get.call(null,map__27860__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__27861__$1 = ((cljs.core.seq_QMARK_.call(null,map__27861))?cljs.core.apply.call(null,cljs.core.hash_map,map__27861):map__27861);var next_geo_sponsors = map__27861__$1;var next_data = cljs.core.get.call(null,map__27861__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__27862 = p__27859;var map__27862__$1 = ((cljs.core.seq_QMARK_.call(null,map__27862))?cljs.core.apply.call(null,cljs.core.hash_map,map__27862):map__27862);var next_geo_sponsors_data_resource = cljs.core.get.call(null,map__27862__$1,new cljs.core.Keyword(null,"geo-sponsors-data-resource","geo-sponsors-data-resource",1080846063));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{return clustermap.components.geo_sponsors.request_geo_sponsors_data.call(null,next_geo_sponsors_data_resource,next_bounds);
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845))
;
clustermap.components.geo_sponsors.t27855.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t27855.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845){
return (function (_){var self__ = this;
var ___$1 = this;var gsr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"geo-sponsors-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"geo-sponsors-data-resource","geo-sponsors-data-resource",1080846063),gsr);
return clustermap.ordered_resource.retrieve_responses.call(null,gsr,((function (gsr,___$1,owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845){
return (function (response){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GEO-SPONSORS : ",response], null)));
return om.core.update_BANG_.call(null,self__.geo_sponsors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),response);
});})(gsr,___$1,owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845))
);
});})(owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845))
;
clustermap.components.geo_sponsors.t27855.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t27855.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845))
;
clustermap.components.geo_sponsors.t27855.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845){
return (function (_27857){var self__ = this;
var _27857__$1 = this;return self__.meta27856;
});})(owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845))
;
clustermap.components.geo_sponsors.t27855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845){
return (function (_27857,meta27856__$1){var self__ = this;
var _27857__$1 = this;return (new clustermap.components.geo_sponsors.t27855(self__.output_checker27845,self__.input_schema27843,self__.output_schema27842,self__.owner,self__.G__27846,self__.input_checker27844,self__.constructor27838,self__.map27840,self__.bounds,self__.validate__6034__auto__,self__.map27841,self__.ufv__,self__.geo_sponsors,meta27856__$1));
});})(owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845))
;
clustermap.components.geo_sponsors.__GT_t27855 = ((function (owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845){
return (function __GT_t27855(output_checker27845__$1,input_schema27843__$1,output_schema27842__$1,owner__$1,G__27846__$1,input_checker27844__$1,constructor27838__$1,map27840__$1,bounds__$1,validate__6034__auto____$1,map27841__$1,ufv____$1,geo_sponsors__$1,meta27856){return (new clustermap.components.geo_sponsors.t27855(output_checker27845__$1,input_schema27843__$1,output_schema27842__$1,owner__$1,G__27846__$1,input_checker27844__$1,constructor27838__$1,map27840__$1,bounds__$1,validate__6034__auto____$1,map27841__$1,ufv____$1,geo_sponsors__$1,meta27856));
});})(owner,geo_sponsors,bounds,map27841,validate__6034__auto__,ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845))
;
}
return (new clustermap.components.geo_sponsors.t27855(output_checker27845,input_schema27843,output_schema27842,owner,G__27846,input_checker27844,constructor27838,map27840,bounds,validate__6034__auto__,map27841,ufv__,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___27870 = output_checker27845.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___27870))
{var error__6036__auto___27871 = temp__4126__auto___27870;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor27838","constructor27838",-204493496,null),cljs.core.pr_str.call(null,error__6036__auto___27871)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27871,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27842,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema27842,input_schema27843,input_checker27844,output_checker27845))
,schema.core.make_fn_schema.call(null,output_schema27842,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27843], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___27866){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner27837,p__27863){var vec__27865 = p__27863;var opts__7883__auto__ = cljs.core.nth.call(null,vec__27865,(0),null);return component_fnk__7881__auto___27866.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner27837,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner27837,var_args){
var p__27863 = null;if (arguments.length > 2) {
  p__27863 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner27837,p__27863);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__27872){
var data__7882__auto__ = cljs.core.first(arglist__27872);
arglist__27872 = cljs.core.next(arglist__27872);
var owner27837 = cljs.core.first(arglist__27872);
var p__27863 = cljs.core.rest(arglist__27872);
return geo_sponsors_component__delegate(data__7882__auto__,owner27837,p__27863);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___27866))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m27839){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m27839);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m27839){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m27839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
