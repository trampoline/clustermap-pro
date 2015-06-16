// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clojure.set');
goog.require('hiccups.runtime');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.api');
goog.require('domina');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clojure.set');
goog.require('domina.events');
goog.require('domina.events');
goog.require('clustermap.boundarylines');
goog.require('jayq.core');
goog.require('clustermap.data.colorchooser');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('clustermap.api');
clustermap.components.map.event_handler_keys = cljs.core.atom.call(null,(0));
clustermap.components.map.event_handlers = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
clustermap.components.map.next_event_handler_key = (function next_event_handler_key(){return cljs.core.swap_BANG_.call(null,clustermap.components.map.event_handler_keys,cljs.core.inc);
});
/**
* register's an event handler function, returns a key
*/
clustermap.components.map.register_event_handler = (function register_event_handler(f){if(cljs.core.fn_QMARK_.call(null,f))
{var k = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.next_event_handler_key.call(null)));cljs.core.swap_BANG_.call(null,clustermap.components.map.event_handlers,cljs.core.assoc,k,f);
return k;
} else
{return null;
}
});
/**
* remove's an event handler with key k
*/
clustermap.components.map.remove_event_handler = (function remove_event_handler(k){if(cljs.core.truth_(k))
{cljs.core.swap_BANG_.call(null,clustermap.components.map.event_handlers,cljs.core.dissoc,k);
} else
{}
return null;
});
/**
* find's an event handler with key k
*/
clustermap.components.map.find_event_handler = (function find_event_handler(k){if(cljs.core.truth_(k))
{return cljs.core.get.call(null,cljs.core.deref.call(null,clustermap.components.map.event_handlers),k);
} else
{return null;
}
});
/**
* convert a Leaflet LatLngBounds object into nested-array form
*/
clustermap.components.map.bounds_array = (function bounds_array(bounds){if((bounds instanceof L.LatLngBounds))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds.getSouth(),bounds.getWest()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds.getNorth(),bounds.getEast()], null)], null);
} else
{return bounds;
}
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.last,longlats));var w = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,longlats));var n = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.last,longlats));var e = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3627__auto__ = s;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = w;if(cljs.core.truth_(and__3627__auto____$1))
{var and__3627__auto____$2 = n;if(cljs.core.truth_(and__3627__auto____$2))
{return e;
} else
{return and__3627__auto____$2;
}
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
clustermap.components.map.locate_map = (function locate_map(m,initial_bounds){return m.fitBounds(cljs.core.clj__GT_js.call(null,initial_bounds),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
});
clustermap.components.map.default_api_key = (function (){var or__3639__auto__ = (function (){var G__31999 = config;var G__31999__$1 = (((G__31999 == null))?null:G__31999.components);var G__31999__$2 = (((G__31999__$1 == null))?null:G__31999__$1.map);var G__31999__$3 = (((G__31999__$2 == null))?null:G__31999__$2.api_key);return G__31999__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__32000){var map__32002 = p__32000;var map__32002__$1 = ((cljs.core.seq_QMARK_.call(null,map__32002))?cljs.core.apply.call(null,cljs.core.hash_map,map__32002):map__32002);var api_key = cljs.core.get.call(null,map__32002__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__32002__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__32002__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__32002__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
m.addLayer(lmcg);
if(zoom_control)
{m.addControl(zoom);
} else
{}
clustermap.components.map.locate_map.call(null,m,(function (){var or__3639__auto__ = bounds;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return initial_bounds;
}
})());
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747),m,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671),lmcg,new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"paths","paths",-1807389588),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY)], null);
});
/**
* @param {...*} var_args
*/
clustermap.components.map.pan_to_show = (function() { 
var pan_to_show__delegate = function (m,all_bounds){if(cljs.core.truth_(cljs.core.not_empty.call(null,all_bounds)))
{var fb = cljs.core.first.call(null,all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.call(null,((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest.call(null,all_bounds));return m.fitBounds(super_bounds);
} else
{return null;
}
};
var pan_to_show = function (m,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,m,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__32003){
var m = cljs.core.first(arglist__32003);
var all_bounds = cljs.core.rest(arglist__32003);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.render_marker_icon = (function render_marker_icon(p__32004,location_sites){var map__32006 = p__32004;var map__32006__$1 = ((cljs.core.seq_QMARK_.call(null,map__32006))?cljs.core.apply.call(null,cljs.core.hash_map,map__32006):map__32006);var location_spec = map__32006__$1;var marker_render_fn = cljs.core.get.call(null,map__32006__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));if((cljs.core.count.call(null,location_sites) > (1)))
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
} else
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
}
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(item_render_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"location-marker-popup-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__32011(s__32012){return (new cljs.core.LazySeq(null,(function (){var s__32012__$1 = s__32012;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32012__$1);if(temp__4126__auto__)
{var s__32012__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32012__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32012__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32014 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32013 = (0);while(true){
if((i__32013 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__32013);cljs.core.chunk_append.call(null,b__32014,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))));
{
var G__32015 = (i__32013 + (1));
i__32013 = G__32015;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32014),iter__32011.call(null,cljs.core.chunk_rest.call(null,s__32012__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32014),null);
}
} else
{var site = cljs.core.first.call(null,s__32012__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))),iter__32011.call(null,cljs.core.rest.call(null,s__32012__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,location_sites);
})()))+"</ul>");
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__32016){var map__32021 = p__32016;var map__32021__$1 = ((cljs.core.seq_QMARK_.call(null,map__32021))?cljs.core.apply.call(null,cljs.core.hash_map,map__32021):map__32021);var map__32022 = cljs.core.get.call(null,map__32021__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32022__$1 = ((cljs.core.seq_QMARK_.call(null,map__32022))?cljs.core.apply.call(null,cljs.core.hash_map,map__32022):map__32022);var location_spec = map__32022__$1;var item_click_fn = cljs.core.get.call(null,map__32022__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32022__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32022__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var temp__4124__auto__ = (function (){var G__32023 = location_sites;var G__32023__$1 = (((G__32023 == null))?null:cljs.core.first.call(null,G__32023));var G__32023__$2 = (((G__32023__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__32023__$1));var G__32023__$3 = (((G__32023__$2 == null))?null:cljs.core.reverse.call(null,G__32023__$2));var G__32023__$4 = (((G__32023__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__32023__$3));return G__32023__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32021,map__32021__$1,map__32022,map__32022__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32021,map__32021__$1,map__32022,map__32022__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);leaflet_marker.on("mouseover",((function (icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32021,map__32021__$1,map__32022,map__32022__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (e){return leaflet_marker.openPopup();
});})(icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32021,map__32021__$1,map__32022,map__32022__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,item_render_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
if(cljs.core.truth_(leaflet_marker_cluster_group))
{leaflet_marker_cluster_group.addLayer(leaflet_marker);
} else
{leaflet_map.addLayer(leaflet_marker);
}
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys)], null);
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_32024_32025 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32024_32025,sb__4579__auto__,temp__4124__auto__,map__32021,map__32021__$1,map__32022,map__32022__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_32024_32025,sb__4579__auto__,temp__4124__auto__,map__32021,map__32021__$1,map__32022,map__32022__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32024_32025;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__32026){var map__32032 = p__32026;var map__32032__$1 = ((cljs.core.seq_QMARK_.call(null,map__32032))?cljs.core.apply.call(null,cljs.core.hash_map,map__32032):map__32032);var marker = map__32032__$1;var click_handler_keys = cljs.core.get.call(null,map__32032__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32032__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__32033 = cljs.core.seq.call(null,click_handler_keys);var chunk__32034 = null;var count__32035 = (0);var i__32036 = (0);while(true){
if((i__32036 < count__32035))
{var chk = cljs.core._nth.call(null,chunk__32034,i__32036);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32037 = seq__32033;
var G__32038 = chunk__32034;
var G__32039 = count__32035;
var G__32040 = (i__32036 + (1));
seq__32033 = G__32037;
chunk__32034 = G__32038;
count__32035 = G__32039;
i__32036 = G__32040;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32033);if(temp__4126__auto__)
{var seq__32033__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32033__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32033__$1);{
var G__32041 = cljs.core.chunk_rest.call(null,seq__32033__$1);
var G__32042 = c__4408__auto__;
var G__32043 = cljs.core.count.call(null,c__4408__auto__);
var G__32044 = (0);
seq__32033 = G__32041;
chunk__32034 = G__32042;
count__32035 = G__32043;
i__32036 = G__32044;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__32033__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32045 = cljs.core.next.call(null,seq__32033__$1);
var G__32046 = null;
var G__32047 = (0);
var G__32048 = (0);
seq__32033 = G__32045;
chunk__32034 = G__32046;
count__32035 = G__32047;
i__32036 = G__32048;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__32049,location_sites,p__32050){var map__32054 = p__32049;var map__32054__$1 = ((cljs.core.seq_QMARK_.call(null,map__32054))?cljs.core.apply.call(null,cljs.core.hash_map,map__32054):map__32054);var marker = map__32054__$1;var click_handler_keys = cljs.core.get.call(null,map__32054__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32054__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32054__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__32055 = p__32050;var map__32055__$1 = ((cljs.core.seq_QMARK_.call(null,map__32055))?cljs.core.apply.call(null,cljs.core.hash_map,map__32055):map__32055);var map__32056 = cljs.core.get.call(null,map__32055__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32056__$1 = ((cljs.core.seq_QMARK_.call(null,map__32056))?cljs.core.apply.call(null,cljs.core.hash_map,map__32056):map__32056);var location_spec = map__32056__$1;var item_click_fn = cljs.core.get.call(null,map__32056__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32056__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32056__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,popup,map__32054,map__32054__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32055,map__32055__$1,map__32056,map__32056__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,popup,map__32054,map__32054__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32055,map__32055__$1,map__32056,map__32056__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
leaflet_marker.setIcon(icon);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,item_render_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__32057){var map__32059 = p__32057;var map__32059__$1 = ((cljs.core.seq_QMARK_.call(null,map__32059))?cljs.core.apply.call(null,cljs.core.hash_map,map__32059):map__32059);var marker = map__32059__$1;var click_handler_keys = cljs.core.get.call(null,map__32059__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32059__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32059__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
if(cljs.core.truth_(leaflet_marker_cluster_group))
{leaflet_marker_cluster_group.removeLayer(leaflet_marker);
} else
{leaflet_map.removeLayer(leaflet_marker);
}
return null;
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,leaflet_marker_cluster_group,markers_atom,show_points,new_locations,opts){var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = (cljs.core.truth_(show_points)?cljs.core.set.call(null,cljs.core.keys.call(null,new_locations)):null);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,location_keys),location_keys], null)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k),cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var ___$1 = (function (){var seq__32064 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32065 = null;var count__32066 = (0);var i__32067 = (0);while(true){
if((i__32067 < count__32066))
{var k = cljs.core._nth.call(null,chunk__32065,i__32067);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32068 = seq__32064;
var G__32069 = chunk__32065;
var G__32070 = count__32066;
var G__32071 = (i__32067 + (1));
seq__32064 = G__32068;
chunk__32065 = G__32069;
count__32066 = G__32070;
i__32067 = G__32071;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32064);if(temp__4126__auto__)
{var seq__32064__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32064__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32064__$1);{
var G__32072 = cljs.core.chunk_rest.call(null,seq__32064__$1);
var G__32073 = c__4408__auto__;
var G__32074 = cljs.core.count.call(null,c__4408__auto__);
var G__32075 = (0);
seq__32064 = G__32072;
chunk__32065 = G__32073;
count__32066 = G__32074;
i__32067 = G__32075;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32064__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32076 = cljs.core.next.call(null,seq__32064__$1);
var G__32077 = null;
var G__32078 = (0);
var G__32079 = (0);
seq__32064 = G__32076;
chunk__32065 = G__32077;
count__32066 = G__32078;
i__32067 = G__32079;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,markers_atom,cljs.core.merge.call(null,updated_markers,new_markers));
});
clustermap.components.map.render_geotag_icon = (function render_geotag_icon(p__32080,geotag,geotag_agg){var map__32083 = p__32080;var map__32083__$1 = ((cljs.core.seq_QMARK_.call(null,map__32083))?cljs.core.apply.call(null,cljs.core.hash_map,map__32083):map__32083);var geotag_agg_spec = map__32083__$1;var icon_render_fn = cljs.core.get.call(null,map__32083__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div class=\"marker-cluster marker-cluster-large\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32084 = icon_render_fn.call(null,geotag,geotag_agg);if(cljs.core.map_QMARK_.call(null,attrs32084))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32084)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32084))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geotag_marker_popup_content = (function render_geotag_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))))));
});
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__32085,geotag,geotag_agg){var map__32087 = p__32085;var map__32087__$1 = ((cljs.core.seq_QMARK_.call(null,map__32087))?cljs.core.apply.call(null,cljs.core.hash_map,map__32087):map__32087);var geotag_agg_spec = map__32087__$1;var click_fn = cljs.core.get.call(null,map__32087__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32087__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32087__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32087,map__32087__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32087,map__32087__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__32088,p__32089,geotag,geotag_agg){var map__32092 = p__32088;var map__32092__$1 = ((cljs.core.seq_QMARK_.call(null,map__32092))?cljs.core.apply.call(null,cljs.core.hash_map,map__32092):map__32092);var geotag_agg_spec = map__32092__$1;var click_fn = cljs.core.get.call(null,map__32092__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32092__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32092__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32093 = p__32089;var map__32093__$1 = ((cljs.core.seq_QMARK_.call(null,map__32093))?cljs.core.apply.call(null,cljs.core.hash_map,map__32093):map__32093);var marker = map__32093__$1;var click_handler_key = cljs.core.get.call(null,map__32093__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32093__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_32094 = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var new_click_handler_key_32095 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_32094);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32095);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__32096,points_showing_QMARK_){var map__32102 = p__32096;var map__32102__$1 = ((cljs.core.seq_QMARK_.call(null,map__32102))?cljs.core.apply.call(null,cljs.core.hash_map,map__32102):map__32102);var geotag_agg_spec = map__32102__$1;var geotag_agg_data = cljs.core.get.call(null,map__32102__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__32102__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__32102__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32102__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var show_at_zoom_fn = cljs.core.get.call(null,map__32102__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var geotags_by_tag = cljs.core.reduce.call(null,((function (map__32102,map__32102__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(map__32102,map__32102__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (geotags_by_tag,map__32102,map__32102__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(geotags_by_tag,map__32102,map__32102__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_agg_data);var markers = cljs.core.deref.call(null,geotag_markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var show_at_zoom_fn__$1 = (function (){var or__3639__auto__ = show_at_zoom_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.constantly.call(null,true);
}
})();var zoom = leaflet_map.getZoom();var latest_marker_keys = (cljs.core.truth_((function (){var or__3639__auto__ = points_showing_QMARK_;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.not.call(null,show_at_zoom_fn__$1.call(null,zoom));
}
})())?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32102,map__32102__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32102,map__32102__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32102,map__32102__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32102,map__32102__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32103 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32104 = null;var count__32105 = (0);var i__32106 = (0);while(true){
if((i__32106 < count__32105))
{var k = cljs.core._nth.call(null,chunk__32104,i__32106);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32107 = seq__32103;
var G__32108 = chunk__32104;
var G__32109 = count__32105;
var G__32110 = (i__32106 + (1));
seq__32103 = G__32107;
chunk__32104 = G__32108;
count__32105 = G__32109;
i__32106 = G__32110;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32103);if(temp__4126__auto__)
{var seq__32103__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32103__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32103__$1);{
var G__32111 = cljs.core.chunk_rest.call(null,seq__32103__$1);
var G__32112 = c__4408__auto__;
var G__32113 = cljs.core.count.call(null,c__4408__auto__);
var G__32114 = (0);
seq__32103 = G__32111;
chunk__32104 = G__32112;
count__32105 = G__32113;
i__32106 = G__32114;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32103__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32115 = cljs.core.next.call(null,seq__32103__$1);
var G__32116 = null;
var G__32117 = (0);
var G__32118 = (0);
seq__32103 = G__32115;
chunk__32104 = G__32116;
count__32105 = G__32117;
i__32106 = G__32118;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,geotag_markers_atom,cljs.core.merge.call(null,updated_markers,new_markers));
});
clustermap.components.map.render_geohash_icon = (function render_geohash_icon(p__32119,geohash_agg){var map__32122 = p__32119;var map__32122__$1 = ((cljs.core.seq_QMARK_.call(null,map__32122))?cljs.core.apply.call(null,cljs.core.hash_map,map__32122):map__32122);var geohash_agg_spec = map__32122__$1;var icon_render_fn = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div class=\"marker-cluster marker-cluster-large\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32123 = icon_render_fn.call(null,geohash_agg);if(cljs.core.map_QMARK_.call(null,attrs32123))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32123)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32123))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geohash_marker_popup_content = (function render_geohash_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32125 = content;if(cljs.core.map_QMARK_.call(null,attrs32125))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32125)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32125))+"</div>");
}
})())))));
});
/**
* we get bounds for the points contained in the geohash area, so take the
* center point as the marker point
*/
clustermap.components.map.geohash_center_point = (function geohash_center_point(p__32126){var map__32131 = p__32126;var map__32131__$1 = ((cljs.core.seq_QMARK_.call(null,map__32131))?cljs.core.apply.call(null,cljs.core.hash_map,map__32131):map__32131);var geohash_agg = map__32131__$1;var bounds = cljs.core.get.call(null,map__32131__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var vec__32132 = bounds;var vec__32133 = cljs.core.nth.call(null,vec__32132,(0),null);var south = cljs.core.nth.call(null,vec__32133,(0),null);var west = cljs.core.nth.call(null,vec__32133,(1),null);var vec__32134 = cljs.core.nth.call(null,vec__32132,(1),null);var north = cljs.core.nth.call(null,vec__32134,(0),null);var east = cljs.core.nth.call(null,vec__32134,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((south + north) / (2)),((west + east) / (2))], null);
});
clustermap.components.map.create_geohash_marker = (function create_geohash_marker(leaflet_map,p__32135,geohash_agg){var map__32137 = p__32135;var map__32137__$1 = ((cljs.core.seq_QMARK_.call(null,map__32137))?cljs.core.apply.call(null,cljs.core.hash_map,map__32137):map__32137);var geohash_agg_spec = map__32137__$1;var click_fn = cljs.core.get.call(null,map__32137__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32137__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32137__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32137,map__32137__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32137,map__32137__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geohash_marker = (function update_geohash_marker(leaflet_map,p__32138,p__32139,geohash_agg){var map__32142 = p__32138;var map__32142__$1 = ((cljs.core.seq_QMARK_.call(null,map__32142))?cljs.core.apply.call(null,cljs.core.hash_map,map__32142):map__32142);var geohash_agg_spec = map__32142__$1;var click_fn = cljs.core.get.call(null,map__32142__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32142__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32142__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32143 = p__32139;var map__32143__$1 = ((cljs.core.seq_QMARK_.call(null,map__32143))?cljs.core.apply.call(null,cljs.core.hash_map,map__32143):map__32143);var marker = map__32143__$1;var click_handler_key = cljs.core.get.call(null,map__32143__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32143__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var latlong_32144 = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon_32145 = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var new_click_handler_key_32146 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setLatLng(latlong_32144);
leaflet_marker.setIcon(icon_32145);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32146);
return marker;
});
clustermap.components.map.update_geohash_markers = (function update_geohash_markers(leaflet_map,geohash_markers_atom,p__32147,points_showing_QMARK_){var map__32153 = p__32147;var map__32153__$1 = ((cljs.core.seq_QMARK_.call(null,map__32153))?cljs.core.apply.call(null,cljs.core.hash_map,map__32153):map__32153);var geohash_agg_spec = map__32153__$1;var geohash_agg_data = cljs.core.get.call(null,map__32153__$1,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620));var icon_render_fn = cljs.core.get.call(null,map__32153__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var show_at_zoom_fn = cljs.core.get.call(null,map__32153__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var geohash_aggs_by_geohash = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__32153,map__32153__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn){
return (function (gha){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geohash-grid","geohash-grid",2001750091).cljs$core$IFn$_invoke$arity$1(gha),gha], null);
});})(map__32153,map__32153__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn))
,geohash_agg_data));var markers = cljs.core.deref.call(null,geohash_markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var show_at_zoom_fn__$1 = (function (){var or__3639__auto__ = show_at_zoom_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.constantly.call(null,true);
}
})();var zoom = leaflet_map.getZoom();var latest_marker_keys = (cljs.core.truth_((function (){var and__3627__auto__ = cljs.core.not.call(null,points_showing_QMARK_);if(and__3627__auto__)
{return show_at_zoom_fn__$1.call(null,zoom);
} else
{return and__3627__auto__;
}
})())?cljs.core.set.call(null,cljs.core.keys.call(null,geohash_aggs_by_geohash)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32153,map__32153__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geohash_marker.call(null,leaflet_map,geohash_agg_spec,cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32153,map__32153__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32153,map__32153__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geohash_marker.call(null,leaflet_map,geohash_agg_spec,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32153,map__32153__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32154 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32155 = null;var count__32156 = (0);var i__32157 = (0);while(true){
if((i__32157 < count__32156))
{var k = cljs.core._nth.call(null,chunk__32155,i__32157);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32158 = seq__32154;
var G__32159 = chunk__32155;
var G__32160 = count__32156;
var G__32161 = (i__32157 + (1));
seq__32154 = G__32158;
chunk__32155 = G__32159;
count__32156 = G__32160;
i__32157 = G__32161;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32154);if(temp__4126__auto__)
{var seq__32154__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32154__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32154__$1);{
var G__32162 = cljs.core.chunk_rest.call(null,seq__32154__$1);
var G__32163 = c__4408__auto__;
var G__32164 = cljs.core.count.call(null,c__4408__auto__);
var G__32165 = (0);
seq__32154 = G__32162;
chunk__32155 = G__32163;
count__32156 = G__32164;
i__32157 = G__32165;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32154__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32166 = cljs.core.next.call(null,seq__32154__$1);
var G__32167 = null;
var G__32168 = (0);
var G__32169 = (0);
seq__32154 = G__32166;
chunk__32155 = G__32167;
count__32156 = G__32168;
i__32157 = G__32169;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,geohash_markers_atom,cljs.core.merge.call(null,updated_markers,new_markers));
});
/**
* turns a PostGIS envelope into leaflet bounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__32178 = cljs.core.js__GT_clj.call(null,envelope);var map__32178__$1 = ((cljs.core.seq_QMARK_.call(null,map__32178))?cljs.core.apply.call(null,cljs.core.hash_map,map__32178):map__32178);var clj_envelope = map__32178__$1;var vec__32179 = cljs.core.get.call(null,map__32178__$1,"coordinates");var vec__32180 = cljs.core.nth.call(null,vec__32179,(0),null);var vec__32181 = cljs.core.nth.call(null,vec__32180,(0),null);var miny0 = cljs.core.nth.call(null,vec__32181,(0),null);var minx0 = cljs.core.nth.call(null,vec__32181,(1),null);var vec__32182 = cljs.core.nth.call(null,vec__32180,(1),null);var maxy1 = cljs.core.nth.call(null,vec__32182,(0),null);var minx1 = cljs.core.nth.call(null,vec__32182,(1),null);var vec__32183 = cljs.core.nth.call(null,vec__32180,(2),null);var maxy2 = cljs.core.nth.call(null,vec__32183,(0),null);var maxx2 = cljs.core.nth.call(null,vec__32183,(1),null);var vec__32184 = cljs.core.nth.call(null,vec__32180,(3),null);var miny3 = cljs.core.nth.call(null,vec__32184,(0),null);var maxx3 = cljs.core.nth.call(null,vec__32184,(1),null);var vec__32185 = cljs.core.nth.call(null,vec__32180,(4),null);var miny4 = cljs.core.nth.call(null,vec__32185,(0),null);var minx4 = cljs.core.nth.call(null,vec__32185,(1),null);var inner = vec__32180;var coords = vec__32179;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__32186){var map__32188 = p__32186;var map__32188__$1 = ((cljs.core.seq_QMARK_.call(null,map__32188))?cljs.core.apply.call(null,cljs.core.hash_map,map__32188):map__32188);var fill_color = cljs.core.get.call(null,map__32188__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__32188__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__32188__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
{return highlighted;
} else
{return and__3627__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#8c2d04",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),false], null)));
} else
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#8c2d04",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"fill","fill",883462889),false,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),(0)], null)));

}
}
}
});
/**
* @param {...*} var_args
*/
clustermap.components.map.create_path = (function() { 
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32189,p__32190){var map__32194 = p__32189;var map__32194__$1 = ((cljs.core.seq_QMARK_.call(null,map__32194))?cljs.core.apply.call(null,cljs.core.hash_map,map__32194):map__32194);var path_attrs = map__32194__$1;var selected = cljs.core.get.call(null,map__32194__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__32195 = p__32190;var map__32196 = cljs.core.nth.call(null,vec__32195,(0),null);var map__32196__$1 = ((cljs.core.seq_QMARK_.call(null,map__32196))?cljs.core.apply.call(null,cljs.core.hash_map,map__32196):map__32196);var opts = map__32196__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32196__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32196__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("dblclick",((function (tolerance,bounds,leaflet_path,popup_content,map__32194,map__32194__$1,path_attrs,selected,vec__32195,map__32196,map__32196__$1,opts,path_marker_click_fn,filter_spec){
return (function (e){leaflet_map.fitBounds(leaflet_path.getBounds());
if(cljs.core.truth_(path_marker_click_fn))
{return path_marker_click_fn.call(null,boundaryline_id);
} else
{return null;
}
});})(tolerance,bounds,leaflet_path,popup_content,map__32194,map__32194__$1,path_attrs,selected,vec__32195,map__32196,map__32196__$1,opts,path_marker_click_fn,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32189,var_args){
var p__32190 = null;if (arguments.length > 5) {
  p__32190 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__32189,p__32190);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__32197){
var comm = cljs.core.first(arglist__32197);
arglist__32197 = cljs.core.next(arglist__32197);
var leaflet_map = cljs.core.first(arglist__32197);
arglist__32197 = cljs.core.next(arglist__32197);
var boundaryline_id = cljs.core.first(arglist__32197);
arglist__32197 = cljs.core.next(arglist__32197);
var js_boundaryline = cljs.core.first(arglist__32197);
arglist__32197 = cljs.core.next(arglist__32197);
var p__32189 = cljs.core.first(arglist__32197);
var p__32190 = cljs.core.rest(arglist__32197);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__32189,p__32190);
});
create_path.cljs$core$IFn$_invoke$arity$variadic = create_path__delegate;
return create_path;
})()
;
/**
* create leaflet paths for every boundaryline in boundaryline-index
* @param {...*} var_args
*/
clustermap.components.map.fetch_create_path = (function() { 
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32198){var vec__32201 = p__32198;var map__32202 = cljs.core.nth.call(null,vec__32201,(0),null);var map__32202__$1 = ((cljs.core.seq_QMARK_.call(null,map__32202))?cljs.core.apply.call(null,cljs.core.hash_map,map__32202):map__32202);var opts = map__32202__$1;var filter_spec = cljs.core.get.call(null,map__32202__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__32198 = null;if (arguments.length > 6) {
  p__32198 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32198);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__32203){
var comm = cljs.core.first(arglist__32203);
arglist__32203 = cljs.core.next(arglist__32203);
var leaflet_map = cljs.core.first(arglist__32203);
arglist__32203 = cljs.core.next(arglist__32203);
var boundaryline_id = cljs.core.first(arglist__32203);
arglist__32203 = cljs.core.next(arglist__32203);
var tolerance = cljs.core.first(arglist__32203);
arglist__32203 = cljs.core.next(arglist__32203);
var js_boundaryline = cljs.core.first(arglist__32203);
arglist__32203 = cljs.core.next(arglist__32203);
var path_attrs = cljs.core.first(arglist__32203);
var p__32198 = cljs.core.rest(arglist__32203);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32198);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32204){var vec__32207 = p__32204;var map__32208 = cljs.core.nth.call(null,vec__32207,(0),null);var map__32208__$1 = ((cljs.core.seq_QMARK_.call(null,map__32208))?cljs.core.apply.call(null,cljs.core.hash_map,map__32208):map__32208);var opts = map__32208__$1;var filter_spec = cljs.core.get.call(null,map__32208__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__32204 = null;if (arguments.length > 6) {
  p__32204 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32204);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__32209){
var comm = cljs.core.first(arglist__32209);
arglist__32209 = cljs.core.next(arglist__32209);
var leaflet_map = cljs.core.first(arglist__32209);
arglist__32209 = cljs.core.next(arglist__32209);
var boundaryline_id = cljs.core.first(arglist__32209);
arglist__32209 = cljs.core.next(arglist__32209);
var old_path = cljs.core.first(arglist__32209);
arglist__32209 = cljs.core.next(arglist__32209);
var js_boundaryline = cljs.core.first(arglist__32209);
arglist__32209 = cljs.core.next(arglist__32209);
var path_attrs = cljs.core.first(arglist__32209);
var p__32204 = cljs.core.rest(arglist__32209);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32204);
});
replace_path.cljs$core$IFn$_invoke$arity$variadic = replace_path__delegate;
return replace_path;
})()
;
/**
* update a Leaflet path for a boundaryline
* @param {...*} var_args
*/
clustermap.components.map.update_path = (function() { 
var update_path__delegate = function (comm,leaflet_map,p__32210,tolerance,js_boundaryline,path_attrs,p__32211){var map__32215 = p__32210;var map__32215__$1 = ((cljs.core.seq_QMARK_.call(null,map__32215))?cljs.core.apply.call(null,cljs.core.hash_map,map__32215):map__32215);var path = map__32215__$1;var boundaryline_id = cljs.core.get.call(null,map__32215__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__32216 = p__32211;var map__32217 = cljs.core.nth.call(null,vec__32216,(0),null);var map__32217__$1 = ((cljs.core.seq_QMARK_.call(null,map__32217))?cljs.core.apply.call(null,cljs.core.hash_map,map__32217):map__32217);var opts = map__32217__$1;var filter_spec = cljs.core.get.call(null,map__32217__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
};
var update_path = function (comm,leaflet_map,p__32210,tolerance,js_boundaryline,path_attrs,var_args){
var p__32211 = null;if (arguments.length > 6) {
  p__32211 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__32210,tolerance,js_boundaryline,path_attrs,p__32211);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__32218){
var comm = cljs.core.first(arglist__32218);
arglist__32218 = cljs.core.next(arglist__32218);
var leaflet_map = cljs.core.first(arglist__32218);
arglist__32218 = cljs.core.next(arglist__32218);
var p__32210 = cljs.core.first(arglist__32218);
arglist__32218 = cljs.core.next(arglist__32218);
var tolerance = cljs.core.first(arglist__32218);
arglist__32218 = cljs.core.next(arglist__32218);
var js_boundaryline = cljs.core.first(arglist__32218);
arglist__32218 = cljs.core.next(arglist__32218);
var path_attrs = cljs.core.first(arglist__32218);
var p__32211 = cljs.core.rest(arglist__32218);
return update_path__delegate(comm,leaflet_map,p__32210,tolerance,js_boundaryline,path_attrs,p__32211);
});
update_path.cljs$core$IFn$_invoke$arity$variadic = update_path__delegate;
return update_path;
})()
;
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path));
});
/**
* @param {...*} var_args
*/
clustermap.components.map.update_paths = (function() { 
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32219){var vec__32235 = p__32219;var map__32236 = cljs.core.nth.call(null,vec__32235,(0),null);var map__32236__$1 = ((cljs.core.seq_QMARK_.call(null,map__32236))?cljs.core.apply.call(null,cljs.core.hash_map,map__32236):map__32236);var opts = map__32236__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__32237 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__32237,(0),null);var notifychan = cljs.core.nth.call(null,vec__32237,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32237,tolerance_paths,notifychan,vec__32235,map__32236,map__32236__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32238){var vec__32239 = p__32238;var k = cljs.core.nth.call(null,vec__32239,(0),null);var tolerance = cljs.core.nth.call(null,vec__32239,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32239,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32237,tolerance_paths,notifychan,vec__32235,map__32236,map__32236__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32237,tolerance_paths,notifychan,vec__32235,map__32236,map__32236__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32240 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32240,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32240,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = tolerance;if(cljs.core.truth_(and__3627__auto____$1))
{return js_boundaryline;
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32237,tolerance_paths,notifychan,vec__32235,map__32236,map__32236__$1,opts,path_marker_click_fn,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32237,tolerance_paths,notifychan,created_paths,vec__32235,map__32236,map__32236__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32241){var vec__32242 = p__32241;var k = cljs.core.nth.call(null,vec__32242,(0),null);var tolerance = cljs.core.nth.call(null,vec__32242,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32242,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32237,tolerance_paths,notifychan,created_paths,vec__32235,map__32236,map__32236__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32237,tolerance_paths,notifychan,created_paths,vec__32235,map__32236,map__32236__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32243 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32243,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32243,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = tolerance;if(cljs.core.truth_(and__3627__auto____$1))
{return js_boundaryline;
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32237,tolerance_paths,notifychan,created_paths,vec__32235,map__32236,map__32236__$1,opts,path_marker_click_fn,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__32244 = cljs.core.seq.call(null,delete_path_keys);var chunk__32245 = null;var count__32246 = (0);var i__32247 = (0);while(true){
if((i__32247 < count__32246))
{var k = cljs.core._nth.call(null,chunk__32245,i__32247);var temp__4124__auto___32250 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32250))
{var path_32251 = temp__4124__auto___32250;clustermap.components.map.delete_path.call(null,leaflet_map,path_32251);
} else
{}
{
var G__32252 = seq__32244;
var G__32253 = chunk__32245;
var G__32254 = count__32246;
var G__32255 = (i__32247 + (1));
seq__32244 = G__32252;
chunk__32245 = G__32253;
count__32246 = G__32254;
i__32247 = G__32255;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32244);if(temp__4126__auto__)
{var seq__32244__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32244__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32244__$1);{
var G__32256 = cljs.core.chunk_rest.call(null,seq__32244__$1);
var G__32257 = c__4408__auto__;
var G__32258 = cljs.core.count.call(null,c__4408__auto__);
var G__32259 = (0);
seq__32244 = G__32256;
chunk__32245 = G__32257;
count__32246 = G__32258;
i__32247 = G__32259;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32244__$1);var temp__4124__auto___32260 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32260))
{var path_32261 = temp__4124__auto___32260;clustermap.components.map.delete_path.call(null,leaflet_map,path_32261);
} else
{}
{
var G__32262 = cljs.core.next.call(null,seq__32244__$1);
var G__32263 = null;
var G__32264 = (0);
var G__32265 = (0);
seq__32244 = G__32262;
chunk__32245 = G__32263;
count__32246 = G__32264;
i__32247 = G__32265;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32237,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32235,map__32236,map__32236__$1,opts,path_marker_click_fn,filter_spec){
return (function (m,p__32248){var map__32249 = p__32248;var map__32249__$1 = ((cljs.core.seq_QMARK_.call(null,map__32249))?cljs.core.apply.call(null,cljs.core.hash_map,map__32249):map__32249);var path = map__32249__$1;var id = cljs.core.get.call(null,map__32249__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32237,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32235,map__32236,map__32236__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__32219 = null;if (arguments.length > 7) {
  p__32219 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32219);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__32266){
var comm = cljs.core.first(arglist__32266);
arglist__32266 = cljs.core.next(arglist__32266);
var fetch_boundarylines_fn = cljs.core.first(arglist__32266);
arglist__32266 = cljs.core.next(arglist__32266);
var leaflet_map = cljs.core.first(arglist__32266);
arglist__32266 = cljs.core.next(arglist__32266);
var paths_atom = cljs.core.first(arglist__32266);
arglist__32266 = cljs.core.next(arglist__32266);
var path_selections_atom = cljs.core.first(arglist__32266);
arglist__32266 = cljs.core.next(arglist__32266);
var new_path_highlights = cljs.core.first(arglist__32266);
arglist__32266 = cljs.core.next(arglist__32266);
var new_selection_paths = cljs.core.first(arglist__32266);
var p__32219 = cljs.core.rest(arglist__32266);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32219);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__32269){var vec__32270 = p__32269;var tz = cljs.core.nth.call(null,vec__32270,(0),null);var collection = cljs.core.nth.call(null,vec__32270,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__32271,owner){var map__32473 = p__32271;var map__32473__$1 = ((cljs.core.seq_QMARK_.call(null,map__32473))?cljs.core.apply.call(null,cljs.core.hash_map,map__32473):map__32473);var cursor_data = map__32473__$1;var map__32474 = cljs.core.get.call(null,map__32473__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32474__$1 = ((cljs.core.seq_QMARK_.call(null,map__32474))?cljs.core.apply.call(null,cljs.core.hash_map,map__32474):map__32474);var cursor = map__32474__$1;var data = cljs.core.get.call(null,map__32474__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__32474__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__32474__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32475 = cljs.core.get.call(null,map__32474__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32475__$1 = ((cljs.core.seq_QMARK_.call(null,map__32475))?cljs.core.apply.call(null,cljs.core.hash_map,map__32475):map__32475);var controls = map__32475__$1;var colorchooser = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var location = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"location","location",1815599388));var zoom = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var geohash_aggs = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var boundaryline_agg = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__32473__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__32473__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t32476 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32476 = (function (colorchooser,initial_bounds,location,owner,map__32473,data,zoom,map_options,cursor_data,geotag_aggs,filter_spec,p__32271,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,map__32474,link_click_fn,map__32475,filter,geohash_aggs,point_data,boundaryline_agg,meta32477){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.location = location;
this.owner = owner;
this.map__32473 = map__32473;
this.data = data;
this.zoom = zoom;
this.map_options = map_options;
this.cursor_data = cursor_data;
this.geotag_aggs = geotag_aggs;
this.filter_spec = filter_spec;
this.p__32271 = p__32271;
this.map_component = map_component;
this.link_render_fn = link_render_fn;
this.boundaryline_collections = boundaryline_collections;
this.controls = controls;
this.cursor = cursor;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.show_points = show_points;
this.map__32474 = map__32474;
this.link_click_fn = link_click_fn;
this.map__32475 = map__32475;
this.filter = filter;
this.geohash_aggs = geohash_aggs;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.meta32477 = meta32477;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32476.cljs$lang$type = true;
clustermap.components.map.t32476.cljs$lang$ctorStr = "clustermap.components.map/t32476";
clustermap.components.map.t32476.cljs$lang$ctorPrWriter = ((function (map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t32476");
});})(map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32476.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t32476.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__32479 = om.core.get_state.call(null,self__.owner);var map__32479__$1 = ((cljs.core.seq_QMARK_.call(null,map__32479))?cljs.core.apply.call(null,cljs.core.hash_map,map__32479):map__32479);var map__32480 = cljs.core.get.call(null,map__32479__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32480__$1 = ((cljs.core.seq_QMARK_.call(null,map__32480))?cljs.core.apply.call(null,cljs.core.hash_map,map__32480):map__32480);var path_selections = cljs.core.get.call(null,map__32480__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32480__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32480__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32480__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32476.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32476.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$,p__32481,p__32482){var self__ = this;
var map__32483 = p__32481;var map__32483__$1 = ((cljs.core.seq_QMARK_.call(null,map__32483))?cljs.core.apply.call(null,cljs.core.hash_map,map__32483):map__32483);var next_cursor_data = map__32483__$1;var map__32484 = cljs.core.get.call(null,map__32483__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32484__$1 = ((cljs.core.seq_QMARK_.call(null,map__32484))?cljs.core.apply.call(null,cljs.core.hash_map,map__32484):map__32484);var next_cursor = map__32484__$1;var next_data = cljs.core.get.call(null,map__32484__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__32484__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__32484__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32485 = cljs.core.get.call(null,map__32484__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32485__$1 = ((cljs.core.seq_QMARK_.call(null,map__32485))?cljs.core.apply.call(null,cljs.core.hash_map,map__32485):map__32485);var next_colorchooser = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_zoom = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_geohash_aggs = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var next_boundaryline_agg = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_location = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"location","location",1815599388));var next_show_points = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__32483__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__32483__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32486 = p__32482;var map__32486__$1 = ((cljs.core.seq_QMARK_.call(null,map__32486))?cljs.core.apply.call(null,cljs.core.hash_map,map__32486):map__32486);var map__32487 = cljs.core.get.call(null,map__32486__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32487__$1 = ((cljs.core.seq_QMARK_.call(null,map__32487))?cljs.core.apply.call(null,cljs.core.hash_map,map__32487):map__32487);var next_markers = cljs.core.get.call(null,map__32487__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__32487__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_geohash_markers = cljs.core.get.call(null,map__32487__$1,new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705));var next_paths = cljs.core.get.call(null,map__32487__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__32487__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__32486__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__32486__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__32486__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__32486__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__32486__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var fetch_geohash_agg_data_fn = cljs.core.get.call(null,map__32486__$1,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986));var this$__$1 = this;var map__32488 = om.core.get_shared.call(null,self__.owner);var map__32488__$1 = ((cljs.core.seq_QMARK_.call(null,map__32488))?cljs.core.apply.call(null,cljs.core.hash_map,map__32488):map__32488);var path_marker_click_fn = cljs.core.get.call(null,map__32488__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32488__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32488__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32488__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__32489 = om.core.get_state.call(null,self__.owner);var map__32489__$1 = ((cljs.core.seq_QMARK_.call(null,map__32489))?cljs.core.apply.call(null,cljs.core.hash_map,map__32489):map__32489);var map__32490 = cljs.core.get.call(null,map__32489__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32490__$1 = ((cljs.core.seq_QMARK_.call(null,map__32490))?cljs.core.apply.call(null,cljs.core.hash_map,map__32490):map__32490);var path_selections = cljs.core.get.call(null,map__32490__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32490__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32490__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__32490__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__32490__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__32489__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__32489__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var zoom_changed = cljs.core.not_EQ_.call(null,next_zoom,self__.zoom);if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_zoom;if(cljs.core.truth_(and__3627__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_zoom,self__.zoom)) && (cljs.core.not_EQ_.call(null,next_zoom,leaflet_map.getZoom()));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{leaflet_map.setZoom(next_zoom);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_bounds;if(cljs.core.truth_(and__3627__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)) && (cljs.core.not_EQ_.call(null,next_bounds,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds())));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{leaflet_map.fitBounds(cljs.core.clj__GT_js.call(null,next_bounds));
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = self__.boundaryline_collections;if(cljs.core.truth_(and__3627__auto____$1))
{return cljs.core.not_EQ_.call(null,next_boundaryline_collection,clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-collection",clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom())], null)));
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936)], null),clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()));
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_boundaryline_collection;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3627__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_boundaryline_agg,self__.boundaryline_agg)) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32674 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32674,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32674,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32513){var state_val_32514 = (state_32513[(1)]);if((state_val_32514 === (5)))
{var inst_32511 = (state_32513[(2)]);var state_32513__$1 = state_32513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32513__$1,inst_32511);
} else
{if((state_val_32514 === (4)))
{var state_32513__$1 = state_32513;var statearr_32515_32675 = state_32513__$1;(statearr_32515_32675[(2)] = null);
(statearr_32515_32675[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32514 === (3)))
{var inst_32503 = (state_32513[(7)]);var inst_32505 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32506 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_32507 = (new cljs.core.PersistentVector(null,1,(5),inst_32505,inst_32506,null));var inst_32508 = om.core.update_BANG_.call(null,self__.cursor,inst_32507,inst_32503);var state_32513__$1 = state_32513;var statearr_32516_32676 = state_32513__$1;(statearr_32516_32676[(2)] = inst_32508);
(statearr_32516_32676[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32514 === (2)))
{var inst_32503 = (state_32513[(7)]);var inst_32503__$1 = (state_32513[(2)]);var state_32513__$1 = (function (){var statearr_32517 = state_32513;(statearr_32517[(7)] = inst_32503__$1);
return statearr_32517;
})();if(cljs.core.truth_(inst_32503__$1))
{var statearr_32518_32677 = state_32513__$1;(statearr_32518_32677[(1)] = (3));
} else
{var statearr_32519_32678 = state_32513__$1;(statearr_32519_32678[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32514 === (1)))
{var inst_32491 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32492 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32493 = leaflet_map.getZoom();var inst_32494 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_32493);var inst_32495 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32496 = om.core._value.call(null,next_filter);var inst_32497 = leaflet_map.getBounds();var inst_32498 = clustermap.components.map.bounds_array.call(null,inst_32497);var inst_32499 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32500 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32501 = fetch_aggregation_data_fn.call(null,inst_32491,inst_32492,inst_32494,inst_32495,inst_32496,inst_32498,inst_32499,inst_32500);var state_32513__$1 = state_32513;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32513__$1,(2),inst_32501);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32674,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32674,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32523 = [null,null,null,null,null,null,null,null];(statearr_32523[(0)] = state_machine__9111__auto__);
(statearr_32523[(1)] = (1));
return statearr_32523;
});
var state_machine__9111__auto____1 = (function (state_32513){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32513);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32524){if((e32524 instanceof Object))
{var ex__9114__auto__ = e32524;var statearr_32525_32679 = state_32513;(statearr_32525_32679[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32513);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32524;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32680 = state_32513;
state_32513 = G__32680;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32513){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32674,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32526 = f__9126__auto__.call(null);(statearr_32526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32674);
return statearr_32526;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32674,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
var c__9125__auto___32681 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32681,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32681,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32547){var state_val_32548 = (state_32547[(1)]);if((state_val_32548 === (5)))
{var inst_32545 = (state_32547[(2)]);var state_32547__$1 = state_32547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32547__$1,inst_32545);
} else
{if((state_val_32548 === (4)))
{var state_32547__$1 = state_32547;var statearr_32549_32682 = state_32547__$1;(statearr_32549_32682[(2)] = null);
(statearr_32549_32682[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32548 === (3)))
{var inst_32537 = (state_32547[(7)]);var inst_32539 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32540 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_32541 = (new cljs.core.PersistentVector(null,1,(5),inst_32539,inst_32540,null));var inst_32542 = om.core.update_BANG_.call(null,self__.cursor,inst_32541,inst_32537);var state_32547__$1 = state_32547;var statearr_32550_32683 = state_32547__$1;(statearr_32550_32683[(2)] = inst_32542);
(statearr_32550_32683[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32548 === (2)))
{var inst_32537 = (state_32547[(7)]);var inst_32537__$1 = (state_32547[(2)]);var state_32547__$1 = (function (){var statearr_32551 = state_32547;(statearr_32551[(7)] = inst_32537__$1);
return statearr_32551;
})();if(cljs.core.truth_(inst_32537__$1))
{var statearr_32552_32684 = state_32547__$1;(statearr_32552_32684[(1)] = (3));
} else
{var statearr_32553_32685 = state_32547__$1;(statearr_32553_32685[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32548 === (1)))
{var inst_32527 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32528 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32529 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32530 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover","!total_funding"];var inst_32531 = (new cljs.core.PersistentVector(null,6,(5),inst_32529,inst_32530,null));var inst_32532 = om.core._value.call(null,next_filter);var inst_32533 = leaflet_map.getBounds();var inst_32534 = clustermap.components.map.bounds_array.call(null,inst_32533);var inst_32535 = fetch_point_data_fn.call(null,inst_32527,inst_32528,"!postcode",inst_32531,(1000),inst_32532,inst_32534);var state_32547__$1 = state_32547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32547__$1,(2),inst_32535);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32681,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32681,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32557 = [null,null,null,null,null,null,null,null];(statearr_32557[(0)] = state_machine__9111__auto__);
(statearr_32557[(1)] = (1));
return statearr_32557;
});
var state_machine__9111__auto____1 = (function (state_32547){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32547);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32558){if((e32558 instanceof Object))
{var ex__9114__auto__ = e32558;var statearr_32559_32686 = state_32547;(statearr_32559_32686[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32547);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32558;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32687 = state_32547;
state_32547 = G__32687;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32547){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32681,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32560 = f__9126__auto__.call(null);(statearr_32560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32681);
return statearr_32560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32681,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32688 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32688,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32688,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32574){var state_val_32575 = (state_32574[(1)]);if((state_val_32575 === (5)))
{var inst_32572 = (state_32574[(2)]);var state_32574__$1 = state_32574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32574__$1,inst_32572);
} else
{if((state_val_32575 === (4)))
{var state_32574__$1 = state_32574;var statearr_32576_32689 = state_32574__$1;(statearr_32576_32689[(2)] = null);
(statearr_32576_32689[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32575 === (3)))
{var inst_32564 = (state_32574[(7)]);var inst_32566 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32567 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_32568 = (new cljs.core.PersistentVector(null,3,(5),inst_32566,inst_32567,null));var inst_32569 = om.core.update_BANG_.call(null,self__.cursor,inst_32568,inst_32564);var state_32574__$1 = state_32574;var statearr_32577_32690 = state_32574__$1;(statearr_32577_32690[(2)] = inst_32569);
(statearr_32577_32690[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32575 === (2)))
{var inst_32564 = (state_32574[(7)]);var inst_32564__$1 = (state_32574[(2)]);var state_32574__$1 = (function (){var statearr_32578 = state_32574;(statearr_32578[(7)] = inst_32564__$1);
return statearr_32578;
})();if(cljs.core.truth_(inst_32564__$1))
{var statearr_32579_32691 = state_32574__$1;(statearr_32579_32691[(1)] = (3));
} else
{var statearr_32580_32692 = state_32574__$1;(statearr_32580_32692[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32575 === (1)))
{var inst_32561 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32562 = fetch_geotag_data_fn.call(null,inst_32561);var state_32574__$1 = state_32574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32574__$1,(2),inst_32562);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32688,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32688,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32584 = [null,null,null,null,null,null,null,null];(statearr_32584[(0)] = state_machine__9111__auto__);
(statearr_32584[(1)] = (1));
return statearr_32584;
});
var state_machine__9111__auto____1 = (function (state_32574){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32574);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32585){if((e32585 instanceof Object))
{var ex__9114__auto__ = e32585;var statearr_32586_32693 = state_32574;(statearr_32586_32693[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32585;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32694 = state_32574;
state_32574 = G__32694;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32574){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32688,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32587 = f__9126__auto__.call(null);(statearr_32587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32688);
return statearr_32587;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32688,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);if(cljs.core.truth_(and__3627__auto____$1))
{var and__3627__auto____$2 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs).call(null,next_zoom);if(cljs.core.truth_(and__3627__auto____$2))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs))) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3627__auto____$2;
}
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32695 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32695,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32695,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32606){var state_val_32607 = (state_32606[(1)]);if((state_val_32607 === (5)))
{var inst_32604 = (state_32606[(2)]);var state_32606__$1 = state_32606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32606__$1,inst_32604);
} else
{if((state_val_32607 === (4)))
{var state_32606__$1 = state_32606;var statearr_32608_32696 = state_32606__$1;(statearr_32608_32696[(2)] = null);
(statearr_32608_32696[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32607 === (3)))
{var inst_32595 = (state_32606[(7)]);var inst_32597 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32598 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_32599 = (new cljs.core.PersistentVector(null,3,(5),inst_32597,inst_32598,null));var inst_32600 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32595);var inst_32601 = om.core.update_BANG_.call(null,self__.cursor,inst_32599,inst_32600);var state_32606__$1 = state_32606;var statearr_32609_32697 = state_32606__$1;(statearr_32609_32697[(2)] = inst_32601);
(statearr_32609_32697[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32607 === (2)))
{var inst_32595 = (state_32606[(7)]);var inst_32595__$1 = (state_32606[(2)]);var state_32606__$1 = (function (){var statearr_32610 = state_32606;(statearr_32610[(7)] = inst_32595__$1);
return statearr_32610;
})();if(cljs.core.truth_(inst_32595__$1))
{var statearr_32611_32698 = state_32606__$1;(statearr_32611_32698[(1)] = (3));
} else
{var statearr_32612_32699 = state_32606__$1;(statearr_32612_32699[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32607 === (1)))
{var inst_32588 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32589 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32590 = [next_filter];var inst_32591 = cljs.core.PersistentHashMap.fromArrays(inst_32589,inst_32590);var inst_32592 = cljs.core.merge.call(null,inst_32588,inst_32591);var inst_32593 = fetch_geotag_agg_data_fn.call(null,inst_32592);var state_32606__$1 = state_32606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32606__$1,(2),inst_32593);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32695,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32695,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32616 = [null,null,null,null,null,null,null,null];(statearr_32616[(0)] = state_machine__9111__auto__);
(statearr_32616[(1)] = (1));
return statearr_32616;
});
var state_machine__9111__auto____1 = (function (state_32606){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32606);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32617){if((e32617 instanceof Object))
{var ex__9114__auto__ = e32617;var statearr_32618_32700 = state_32606;(statearr_32618_32700[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32606);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32617;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32701 = state_32606;
state_32606 = G__32701;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32606){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32695,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32619 = f__9126__auto__.call(null);(statearr_32619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32695);
return statearr_32619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32695,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_bounds;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_geohash_aggs;if(cljs.core.truth_(and__3627__auto____$1))
{var and__3627__auto____$2 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);if(cljs.core.truth_(and__3627__auto____$2))
{var and__3627__auto____$3 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs).call(null,next_zoom);if(cljs.core.truth_(and__3627__auto____$3))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs))) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3627__auto____$3;
}
} else
{return and__3627__auto____$2;
}
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32702 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32702,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32702,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32640){var state_val_32641 = (state_32640[(1)]);if((state_val_32641 === (5)))
{var inst_32638 = (state_32640[(2)]);var state_32640__$1 = state_32640;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32640__$1,inst_32638);
} else
{if((state_val_32641 === (4)))
{var state_32640__$1 = state_32640;var statearr_32642_32703 = state_32640__$1;(statearr_32642_32703[(2)] = null);
(statearr_32642_32703[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32641 === (3)))
{var inst_32629 = (state_32640[(7)]);var inst_32631 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32632 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620)];var inst_32633 = (new cljs.core.PersistentVector(null,3,(5),inst_32631,inst_32632,null));var inst_32634 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32629);var inst_32635 = om.core.update_BANG_.call(null,self__.cursor,inst_32633,inst_32634);var state_32640__$1 = state_32640;var statearr_32643_32704 = state_32640__$1;(statearr_32643_32704[(2)] = inst_32635);
(statearr_32643_32704[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32641 === (2)))
{var inst_32629 = (state_32640[(7)]);var inst_32629__$1 = (state_32640[(2)]);var state_32640__$1 = (function (){var statearr_32644 = state_32640;(statearr_32644[(7)] = inst_32629__$1);
return statearr_32644;
})();if(cljs.core.truth_(inst_32629__$1))
{var statearr_32645_32705 = state_32640__$1;(statearr_32645_32705[(1)] = (3));
} else
{var statearr_32646_32706 = state_32640__$1;(statearr_32646_32706[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32641 === (1)))
{var inst_32620 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32621 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"precision","precision",-1175707478)];var inst_32622 = new cljs.core.Keyword(null,"precision-fn","precision-fn",1742300693).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32623 = inst_32622.call(null,next_zoom);var inst_32624 = [next_filter,next_bounds,inst_32623];var inst_32625 = cljs.core.PersistentHashMap.fromArrays(inst_32621,inst_32624);var inst_32626 = cljs.core.merge.call(null,inst_32620,inst_32625);var inst_32627 = fetch_geohash_agg_data_fn.call(null,inst_32626);var state_32640__$1 = state_32640;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32640__$1,(2),inst_32627);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32702,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32702,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32650 = [null,null,null,null,null,null,null,null];(statearr_32650[(0)] = state_machine__9111__auto__);
(statearr_32650[(1)] = (1));
return statearr_32650;
});
var state_machine__9111__auto____1 = (function (state_32640){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32640);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32651){if((e32651 instanceof Object))
{var ex__9114__auto__ = e32651;var statearr_32652_32707 = state_32640;(statearr_32652_32707[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32640);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32651;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32708 = state_32640;
state_32640 = G__32708;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32640){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32702,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32653 = f__9126__auto__.call(null);(statearr_32653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32702);
return statearr_32653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32702,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_colorchooser;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_data;if(cljs.core.truth_(and__3627__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_data,self__.data)) || (cljs.core.not_EQ_.call(null,next_colorchooser,self__.colorchooser));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var vec__32654_32709 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_32710 = cljs.core.nth.call(null,vec__32654_32709,(0),null);var selection_path_colours_32711 = cljs.core.nth.call(null,vec__32654_32709,(1),null);var update_paths_invocation_32712 = ((function (vec__32654_32709,new_threshold_colors_32710,selection_path_colours_32711,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_32711,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696),path_marker_click_fn], null));
});})(vec__32654_32709,new_threshold_colors_32710,selection_path_colours_32711,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_32710,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_32710);
} else
{}
var temp__4126__auto___32713 = update_paths_invocation_32712.call(null);if(cljs.core.truth_(temp__4126__auto___32713))
{var notify_chan_32714 = temp__4126__auto___32713;var c__9125__auto___32715 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32715,notify_chan_32714,temp__4126__auto___32713,vec__32654_32709,new_threshold_colors_32710,selection_path_colours_32711,update_paths_invocation_32712,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32715,notify_chan_32714,temp__4126__auto___32713,vec__32654_32709,new_threshold_colors_32710,selection_path_colours_32711,update_paths_invocation_32712,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32659){var state_val_32660 = (state_32659[(1)]);if((state_val_32660 === (2)))
{var inst_32656 = (state_32659[(2)]);var inst_32657 = update_paths_invocation_32712.call(null);var state_32659__$1 = (function (){var statearr_32661 = state_32659;(statearr_32661[(7)] = inst_32656);
return statearr_32661;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32659__$1,inst_32657);
} else
{if((state_val_32660 === (1)))
{var state_32659__$1 = state_32659;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32659__$1,(2),notify_chan_32714);
} else
{return null;
}
}
});})(c__9125__auto___32715,notify_chan_32714,temp__4126__auto___32713,vec__32654_32709,new_threshold_colors_32710,selection_path_colours_32711,update_paths_invocation_32712,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32715,notify_chan_32714,temp__4126__auto___32713,vec__32654_32709,new_threshold_colors_32710,selection_path_colours_32711,update_paths_invocation_32712,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32665 = [null,null,null,null,null,null,null,null];(statearr_32665[(0)] = state_machine__9111__auto__);
(statearr_32665[(1)] = (1));
return statearr_32665;
});
var state_machine__9111__auto____1 = (function (state_32659){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32659);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32666){if((e32666 instanceof Object))
{var ex__9114__auto__ = e32666;var statearr_32667_32716 = state_32659;(statearr_32667_32716[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32659);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32666;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32717 = state_32659;
state_32659 = G__32717;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32659){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32715,notify_chan_32714,temp__4126__auto___32713,vec__32654_32709,new_threshold_colors_32710,selection_path_colours_32711,update_paths_invocation_32712,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32668 = f__9126__auto__.call(null);(statearr_32668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32715);
return statearr_32668;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32715,notify_chan_32714,temp__4126__auto___32713,vec__32654_32709,new_threshold_colors_32710,selection_path_colours_32711,update_paths_invocation_32712,map__32488,map__32488__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32489,map__32489__$1,map__32490,map__32490__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32483,map__32483__$1,next_cursor_data,map__32484,map__32484__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32485,map__32485__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32486,map__32486__$1,map__32487,map__32487__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
} else
{}
if((cljs.core.not_EQ_.call(null,next_show_points,self__.show_points)) || (cljs.core.not_EQ_.call(null,next_point_data,self__.point_data)) || (cljs.core.not_EQ_.call(null,next_location,self__.location)))
{clustermap.components.map.update_markers.call(null,self__.link_render_fn,leaflet_map,(cljs.core.truth_(new cljs.core.Keyword(null,"cluster","cluster",535175621).cljs$core$IFn$_invoke$arity$1(next_location))?leaflet_marker_cluster_group:null),next_markers,next_show_points,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),next_location], null));
} else
{}
if((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(self__.geotag_aggs))) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(self__.geotag_aggs))) || (zoom_changed) || (cljs.core.not_EQ_.call(null,next_point_data,self__.point_data)))
{clustermap.components.map.update_geotag_markers.call(null,leaflet_map,next_geotag_markers,next_geotag_aggs,cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data)));
} else
{}
if((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620).cljs$core$IFn$_invoke$arity$1(self__.geohash_aggs))) || (zoom_changed) || (cljs.core.not_EQ_.call(null,next_point_data,self__.point_data)))
{return clustermap.components.map.update_geohash_markers.call(null,leaflet_map,next_geohash_markers,next_geohash_aggs,cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data)));
} else
{return null;
}
});})(map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32476.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32476.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__32669 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__32669__$1 = ((cljs.core.seq_QMARK_.call(null,map__32669))?cljs.core.apply.call(null,cljs.core.hash_map,map__32669):map__32669);var map = map__32669__$1;var path = cljs.core.get.call(null,map__32669__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__32669__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32669__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__32670 = om.core.get_shared.call(null,self__.owner);var map__32670__$1 = ((cljs.core.seq_QMARK_.call(null,map__32670))?cljs.core.apply.call(null,cljs.core.hash_map,map__32670):map__32670);var path_marker_click_fn = cljs.core.get.call(null,map__32670__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32670__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32670__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32670__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;var current_dims = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null);var props = om.core.get_props.call(null,self__.owner);var use_bounds = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-state","map-state",-1227493550),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542)], null));if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),current_dims)))
{console.log("window size changed !");
leaflet_map.invalidateSize();
if(cljs.core.truth_(cljs.core.deref.call(null,last_dims)))
{} else
{console.log("first map show !");
if(cljs.core.truth_(use_bounds))
{clustermap.components.map.locate_map.call(null,leaflet_map,use_bounds);
} else
{}
}
return cljs.core.reset_BANG_.call(null,last_dims,current_dims);
} else
{return null;
}
});})(node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
});})(node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__32671 = e;var G__32671__$1 = (((G__32671 == null))?null:G__32671.target);var G__32671__$2 = (((G__32671__$1 == null))?null:domina.attr.call(null,G__32671__$1,"data-boundaryline-id"));var G__32671__$3 = (((G__32671__$2 == null))?null:path_marker_click_fn.call(null,G__32671__$2));return G__32671__$3;
});})(node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__32669,map__32669__$1,map,path,markers,leaflet_map,map__32670,map__32670__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986),clustermap.api.geohash_grid_factory.call(null));
});})(map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32476.prototype.om$core$IRender$ = true;
clustermap.components.map.t32476.prototype.om$core$IRender$render$arity$1 = ((function (map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32478){var self__ = this;
var _32478__$1 = this;return self__.meta32477;
});})(map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32478,meta32477__$1){var self__ = this;
var _32478__$1 = this;return (new clustermap.components.map.t32476(self__.colorchooser,self__.initial_bounds,self__.location,self__.owner,self__.map__32473,self__.data,self__.zoom,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.p__32271,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.show_points,self__.map__32474,self__.link_click_fn,self__.map__32475,self__.filter,self__.geohash_aggs,self__.point_data,self__.boundaryline_agg,meta32477__$1));
});})(map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t32476 = ((function (map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function __GT_t32476(colorchooser__$1,initial_bounds__$1,location__$1,owner__$1,map__32473__$2,data__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,p__32271__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,map__32474__$2,link_click_fn__$1,map__32475__$2,filter__$1,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta32477){return (new clustermap.components.map.t32476(colorchooser__$1,initial_bounds__$1,location__$1,owner__$1,map__32473__$2,data__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,p__32271__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,map__32474__$2,link_click_fn__$1,map__32475__$2,filter__$1,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta32477));
});})(map__32473,map__32473__$1,cursor_data,map__32474,map__32474__$1,cursor,data,point_data,boundaryline_collections,map__32475,map__32475__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t32476(colorchooser,initial_bounds,location,owner,map__32473__$1,data,zoom,map_options,cursor_data,geotag_aggs,filter_spec,p__32271,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,map__32474__$1,link_click_fn,map__32475__$1,filter,geohash_aggs,point_data,boundaryline_agg,null));
});
