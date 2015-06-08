// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clojure.set');
goog.require('hiccups.runtime');
goog.require('sablono.core');
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
clustermap.components.map.default_api_key = (function (){var or__3639__auto__ = (function (){var G__31956 = config;var G__31956__$1 = (((G__31956 == null))?null:G__31956.components);var G__31956__$2 = (((G__31956__$1 == null))?null:G__31956__$1.map);var G__31956__$3 = (((G__31956__$2 == null))?null:G__31956__$2.api_key);return G__31956__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__31957){var map__31959 = p__31957;var map__31959__$1 = ((cljs.core.seq_QMARK_.call(null,map__31959))?cljs.core.apply.call(null,cljs.core.hash_map,map__31959):map__31959);var api_key = cljs.core.get.call(null,map__31959__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__31959__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__31959__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__31959__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
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
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747),m,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671),lmcg,new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"paths","paths",-1807389588),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__31960){
var m = cljs.core.first(arglist__31960);
var all_bounds = cljs.core.rest(arglist__31960);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__31965(s__31966){return (new cljs.core.LazySeq(null,(function (){var s__31966__$1 = s__31966;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31966__$1);if(temp__4126__auto__)
{var s__31966__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31966__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31966__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31968 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31967 = (0);while(true){
if((i__31967 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__31967);cljs.core.chunk_append.call(null,b__31968,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);var content = (cljs.core.truth_(path_fn)?path_fn.call(null,site):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(click_handler_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key], null),content], null):content)], null);
})()))));
{
var G__31969 = (i__31967 + (1));
i__31967 = G__31969;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31968),iter__31965.call(null,cljs.core.chunk_rest.call(null,s__31966__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31968),null);
}
} else
{var site = cljs.core.first.call(null,s__31966__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);var content = (cljs.core.truth_(path_fn)?path_fn.call(null,site):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(click_handler_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key], null),content], null):content)], null);
})()))),iter__31965.call(null,cljs.core.rest.call(null,s__31966__$2)));
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
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__31970){var map__31974 = p__31970;var map__31974__$1 = ((cljs.core.seq_QMARK_.call(null,map__31974))?cljs.core.apply.call(null,cljs.core.hash_map,map__31974):map__31974);var marker_click_fn = cljs.core.get.call(null,map__31974__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var temp__4124__auto__ = (function (){var G__31975 = location_sites;var G__31975__$1 = (((G__31975 == null))?null:cljs.core.first.call(null,G__31975));var G__31975__$2 = (((G__31975__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__31975__$1));var G__31975__$3 = (((G__31975__$2 == null))?null:cljs.core.reverse.call(null,G__31975__$2));var G__31975__$4 = (((G__31975__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__31975__$3));return G__31975__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(marker_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__31974,map__31974__$1,marker_click_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,marker_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__31974,map__31974__$1,marker_click_fn))
,location_sites)):null);popup.setContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
leaflet_marker_cluster_group.addLayer(leaflet_marker);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys)], null);
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_31976_31977 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31976_31977,sb__4579__auto__,temp__4124__auto__,map__31974,map__31974__$1,marker_click_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_31976_31977,sb__4579__auto__,temp__4124__auto__,map__31974,map__31974__$1,marker_click_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31976_31977;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__31978){var map__31984 = p__31978;var map__31984__$1 = ((cljs.core.seq_QMARK_.call(null,map__31984))?cljs.core.apply.call(null,cljs.core.hash_map,map__31984):map__31984);var marker = map__31984__$1;var click_handler_keys = cljs.core.get.call(null,map__31984__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31984__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__31985 = cljs.core.seq.call(null,click_handler_keys);var chunk__31986 = null;var count__31987 = (0);var i__31988 = (0);while(true){
if((i__31988 < count__31987))
{var chk = cljs.core._nth.call(null,chunk__31986,i__31988);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__31989 = seq__31985;
var G__31990 = chunk__31986;
var G__31991 = count__31987;
var G__31992 = (i__31988 + (1));
seq__31985 = G__31989;
chunk__31986 = G__31990;
count__31987 = G__31991;
i__31988 = G__31992;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31985);if(temp__4126__auto__)
{var seq__31985__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31985__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31985__$1);{
var G__31993 = cljs.core.chunk_rest.call(null,seq__31985__$1);
var G__31994 = c__4408__auto__;
var G__31995 = cljs.core.count.call(null,c__4408__auto__);
var G__31996 = (0);
seq__31985 = G__31993;
chunk__31986 = G__31994;
count__31987 = G__31995;
i__31988 = G__31996;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__31985__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__31997 = cljs.core.next.call(null,seq__31985__$1);
var G__31998 = null;
var G__31999 = (0);
var G__32000 = (0);
seq__31985 = G__31997;
chunk__31986 = G__31998;
count__31987 = G__31999;
i__31988 = G__32000;
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
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__32001,location,p__32002){var map__32005 = p__32001;var map__32005__$1 = ((cljs.core.seq_QMARK_.call(null,map__32005))?cljs.core.apply.call(null,cljs.core.hash_map,map__32005):map__32005);var marker = map__32005__$1;var click_handler_keys = cljs.core.get.call(null,map__32005__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32005__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32005__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__32006 = p__32002;var map__32006__$1 = ((cljs.core.seq_QMARK_.call(null,map__32006))?cljs.core.apply.call(null,cljs.core.hash_map,map__32006):map__32006);var marker_click_fn = cljs.core.get.call(null,map__32006__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(marker_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (popup,map__32005,map__32005__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32006,map__32006__$1,marker_click_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,marker_click_fn,ls))], null);
});})(popup,map__32005,map__32005__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32006,map__32006__$1,marker_click_fn))
,location)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__32007){var map__32009 = p__32007;var map__32009__$1 = ((cljs.core.seq_QMARK_.call(null,map__32009))?cljs.core.apply.call(null,cljs.core.hash_map,map__32009):map__32009);var marker = map__32009__$1;var click_handler_keys = cljs.core.get.call(null,map__32009__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32009__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32009__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
if(cljs.core.truth_(leaflet_marker_cluster_group))
{leaflet_marker_cluster_group.removeLayer(leaflet_marker);
} else
{leaflet_map.removeLayer(leaflet_marker);
}
return null;
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,leaflet_marker_cluster_group,markers_atom,show_points,new_locations,p__32010){var map__32016 = p__32010;var map__32016__$1 = ((cljs.core.seq_QMARK_.call(null,map__32016))?cljs.core.apply.call(null,cljs.core.hash_map,map__32016):map__32016);var opts = map__32016__$1;var marker_click_fn = cljs.core.get.call(null,map__32016__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = (cljs.core.truth_(show_points)?cljs.core.set.call(null,cljs.core.keys.call(null,new_locations)):null);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,location_keys),location_keys], null)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,map__32016,map__32016__$1,opts,marker_click_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,map__32016,map__32016__$1,opts,marker_click_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32016,map__32016__$1,opts,marker_click_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k),cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32016,map__32016__$1,opts,marker_click_fn))
,update_marker_keys));var ___$1 = (function (){var seq__32017 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32018 = null;var count__32019 = (0);var i__32020 = (0);while(true){
if((i__32020 < count__32019))
{var k = cljs.core._nth.call(null,chunk__32018,i__32020);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32021 = seq__32017;
var G__32022 = chunk__32018;
var G__32023 = count__32019;
var G__32024 = (i__32020 + (1));
seq__32017 = G__32021;
chunk__32018 = G__32022;
count__32019 = G__32023;
i__32020 = G__32024;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32017);if(temp__4126__auto__)
{var seq__32017__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32017__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32017__$1);{
var G__32025 = cljs.core.chunk_rest.call(null,seq__32017__$1);
var G__32026 = c__4408__auto__;
var G__32027 = cljs.core.count.call(null,c__4408__auto__);
var G__32028 = (0);
seq__32017 = G__32025;
chunk__32018 = G__32026;
count__32019 = G__32027;
i__32020 = G__32028;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32017__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32029 = cljs.core.next.call(null,seq__32017__$1);
var G__32030 = null;
var G__32031 = (0);
var G__32032 = (0);
seq__32017 = G__32029;
chunk__32018 = G__32030;
count__32019 = G__32031;
i__32020 = G__32032;
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
clustermap.components.map.render_popup_content = (function render_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))))));
});
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__32033,geotag,geotag_agg){var map__32035 = p__32033;var map__32035__$1 = ((cljs.core.seq_QMARK_.call(null,map__32035))?cljs.core.apply.call(null,cljs.core.hash_map,map__32035):map__32035);var geotag_agg_spec = map__32035__$1;var click_fn = cljs.core.get.call(null,map__32035__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32035__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32035__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,icon_render_fn.call(null,geotag,geotag_agg))))], null)));var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);popup.setContent(clustermap.components.map.render_popup_content.call(null,click_handler_key,popup_render_fn.call(null,geotag,geotag_agg)));
leaflet_marker.bindPopup(popup);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__32036,p__32037,geotag,geotag_agg){var map__32040 = p__32036;var map__32040__$1 = ((cljs.core.seq_QMARK_.call(null,map__32040))?cljs.core.apply.call(null,cljs.core.hash_map,map__32040):map__32040);var geotag_aggs = map__32040__$1;var click_fn = cljs.core.get.call(null,map__32040__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32040__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32040__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32041 = p__32037;var map__32041__$1 = ((cljs.core.seq_QMARK_.call(null,map__32041))?cljs.core.apply.call(null,cljs.core.hash_map,map__32041):map__32041);var marker = map__32041__$1;var click_handler_key = cljs.core.get.call(null,map__32041__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32041__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_32042 = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,icon_render_fn.call(null,geotag,geotag_agg))))], null)));var popup_32043 = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var new_click_handler_key_32044 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_32042);
popup_32043.setContent(clustermap.components.map.render_popup_content.call(null,new_click_handler_key_32044,popup_render_fn.call(null,geotag,geotag_agg)));
leaflet_marker.bindPopup(popup_32043);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32044);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__32045,points_showing){var map__32051 = p__32045;var map__32051__$1 = ((cljs.core.seq_QMARK_.call(null,map__32051))?cljs.core.apply.call(null,cljs.core.hash_map,map__32051):map__32051);var geotag_agg_spec = map__32051__$1;var geotag_agg_data = cljs.core.get.call(null,map__32051__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__32051__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__32051__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32051__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var show_at_zoom_fn = cljs.core.get.call(null,map__32051__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var geotags_by_tag = cljs.core.reduce.call(null,((function (map__32051,map__32051__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(map__32051,map__32051__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (geotags_by_tag,map__32051,map__32051__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(geotags_by_tag,map__32051,map__32051__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_agg_data);var markers = cljs.core.deref.call(null,geotag_markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var show_at_zoom_fn__$1 = (function (){var or__3639__auto__ = show_at_zoom_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.constantly.call(null,true);
}
})();var zoom = leaflet_map.getZoom();var latest_marker_keys = (cljs.core.truth_((function (){var or__3639__auto__ = points_showing;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.not.call(null,show_at_zoom_fn__$1.call(null,zoom));
}
})())?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),geotag_agg_spec,new cljs.core.Keyword(null,"latest-marker-keys","latest-marker-keys",-237335362),latest_marker_keys,new cljs.core.Keyword(null,"update-marker-keys","update-marker-keys",-1816039620),update_marker_keys,new cljs.core.Keyword(null,"new-marker-keys","new-marker-keys",-1773621353),new_marker_keys,new cljs.core.Keyword(null,"remove-marker-keys","remove-marker-keys",2038087170),remove_marker_keys], null)));var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,map__32051,map__32051__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,map__32051,map__32051__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,new_markers,map__32051,map__32051__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,new_markers,map__32051,map__32051__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,update_marker_keys));var ___$1 = (function (){var seq__32052 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32053 = null;var count__32054 = (0);var i__32055 = (0);while(true){
if((i__32055 < count__32054))
{var k = cljs.core._nth.call(null,chunk__32053,i__32055);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32056 = seq__32052;
var G__32057 = chunk__32053;
var G__32058 = count__32054;
var G__32059 = (i__32055 + (1));
seq__32052 = G__32056;
chunk__32053 = G__32057;
count__32054 = G__32058;
i__32055 = G__32059;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32052);if(temp__4126__auto__)
{var seq__32052__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32052__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32052__$1);{
var G__32060 = cljs.core.chunk_rest.call(null,seq__32052__$1);
var G__32061 = c__4408__auto__;
var G__32062 = cljs.core.count.call(null,c__4408__auto__);
var G__32063 = (0);
seq__32052 = G__32060;
chunk__32053 = G__32061;
count__32054 = G__32062;
i__32055 = G__32063;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32052__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32064 = cljs.core.next.call(null,seq__32052__$1);
var G__32065 = null;
var G__32066 = (0);
var G__32067 = (0);
seq__32052 = G__32064;
chunk__32053 = G__32065;
count__32054 = G__32066;
i__32055 = G__32067;
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
/**
* turns a PostGIS envelope into leaflet bounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__32076 = cljs.core.js__GT_clj.call(null,envelope);var map__32076__$1 = ((cljs.core.seq_QMARK_.call(null,map__32076))?cljs.core.apply.call(null,cljs.core.hash_map,map__32076):map__32076);var clj_envelope = map__32076__$1;var vec__32077 = cljs.core.get.call(null,map__32076__$1,"coordinates");var vec__32078 = cljs.core.nth.call(null,vec__32077,(0),null);var vec__32079 = cljs.core.nth.call(null,vec__32078,(0),null);var miny0 = cljs.core.nth.call(null,vec__32079,(0),null);var minx0 = cljs.core.nth.call(null,vec__32079,(1),null);var vec__32080 = cljs.core.nth.call(null,vec__32078,(1),null);var maxy1 = cljs.core.nth.call(null,vec__32080,(0),null);var minx1 = cljs.core.nth.call(null,vec__32080,(1),null);var vec__32081 = cljs.core.nth.call(null,vec__32078,(2),null);var maxy2 = cljs.core.nth.call(null,vec__32081,(0),null);var maxx2 = cljs.core.nth.call(null,vec__32081,(1),null);var vec__32082 = cljs.core.nth.call(null,vec__32078,(3),null);var miny3 = cljs.core.nth.call(null,vec__32082,(0),null);var maxx3 = cljs.core.nth.call(null,vec__32082,(1),null);var vec__32083 = cljs.core.nth.call(null,vec__32078,(4),null);var miny4 = cljs.core.nth.call(null,vec__32083,(0),null);var minx4 = cljs.core.nth.call(null,vec__32083,(1),null);var inner = vec__32078;var coords = vec__32077;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__32084){var map__32086 = p__32084;var map__32086__$1 = ((cljs.core.seq_QMARK_.call(null,map__32086))?cljs.core.apply.call(null,cljs.core.hash_map,map__32086):map__32086);var fill_color = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
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
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32087,p__32088){var map__32092 = p__32087;var map__32092__$1 = ((cljs.core.seq_QMARK_.call(null,map__32092))?cljs.core.apply.call(null,cljs.core.hash_map,map__32092):map__32092);var path_attrs = map__32092__$1;var selected = cljs.core.get.call(null,map__32092__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__32093 = p__32088;var map__32094 = cljs.core.nth.call(null,vec__32093,(0),null);var map__32094__$1 = ((cljs.core.seq_QMARK_.call(null,map__32094))?cljs.core.apply.call(null,cljs.core.hash_map,map__32094):map__32094);var opts = map__32094__$1;var filter_spec = cljs.core.get.call(null,map__32094__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,popup_content,map__32092,map__32092__$1,path_attrs,selected,vec__32093,map__32094,map__32094__$1,opts,filter_spec){
return (function (e){if(cljs.core.truth_(filter_spec))
{om.core.update_BANG_.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"boundaryline","boundaryline",95022712)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?boundarylines",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["boundaryline_id",boundaryline_id], null)], null)], null)], null));
} else
{}
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clustermap.components.map","path-click","clustermap.components.map/path-click",-1232736276),new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id], null));
});})(tolerance,bounds,leaflet_path,popup_content,map__32092,map__32092__$1,path_attrs,selected,vec__32093,map__32094,map__32094__$1,opts,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32087,var_args){
var p__32088 = null;if (arguments.length > 5) {
  p__32088 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__32087,p__32088);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__32095){
var comm = cljs.core.first(arglist__32095);
arglist__32095 = cljs.core.next(arglist__32095);
var leaflet_map = cljs.core.first(arglist__32095);
arglist__32095 = cljs.core.next(arglist__32095);
var boundaryline_id = cljs.core.first(arglist__32095);
arglist__32095 = cljs.core.next(arglist__32095);
var js_boundaryline = cljs.core.first(arglist__32095);
arglist__32095 = cljs.core.next(arglist__32095);
var p__32087 = cljs.core.first(arglist__32095);
var p__32088 = cljs.core.rest(arglist__32095);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__32087,p__32088);
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
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32096){var vec__32099 = p__32096;var map__32100 = cljs.core.nth.call(null,vec__32099,(0),null);var map__32100__$1 = ((cljs.core.seq_QMARK_.call(null,map__32100))?cljs.core.apply.call(null,cljs.core.hash_map,map__32100):map__32100);var opts = map__32100__$1;var filter_spec = cljs.core.get.call(null,map__32100__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__32096 = null;if (arguments.length > 6) {
  p__32096 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32096);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__32101){
var comm = cljs.core.first(arglist__32101);
arglist__32101 = cljs.core.next(arglist__32101);
var leaflet_map = cljs.core.first(arglist__32101);
arglist__32101 = cljs.core.next(arglist__32101);
var boundaryline_id = cljs.core.first(arglist__32101);
arglist__32101 = cljs.core.next(arglist__32101);
var tolerance = cljs.core.first(arglist__32101);
arglist__32101 = cljs.core.next(arglist__32101);
var js_boundaryline = cljs.core.first(arglist__32101);
arglist__32101 = cljs.core.next(arglist__32101);
var path_attrs = cljs.core.first(arglist__32101);
var p__32096 = cljs.core.rest(arglist__32101);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32096);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32102){var vec__32105 = p__32102;var map__32106 = cljs.core.nth.call(null,vec__32105,(0),null);var map__32106__$1 = ((cljs.core.seq_QMARK_.call(null,map__32106))?cljs.core.apply.call(null,cljs.core.hash_map,map__32106):map__32106);var opts = map__32106__$1;var filter_spec = cljs.core.get.call(null,map__32106__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__32102 = null;if (arguments.length > 6) {
  p__32102 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32102);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__32107){
var comm = cljs.core.first(arglist__32107);
arglist__32107 = cljs.core.next(arglist__32107);
var leaflet_map = cljs.core.first(arglist__32107);
arglist__32107 = cljs.core.next(arglist__32107);
var boundaryline_id = cljs.core.first(arglist__32107);
arglist__32107 = cljs.core.next(arglist__32107);
var old_path = cljs.core.first(arglist__32107);
arglist__32107 = cljs.core.next(arglist__32107);
var js_boundaryline = cljs.core.first(arglist__32107);
arglist__32107 = cljs.core.next(arglist__32107);
var path_attrs = cljs.core.first(arglist__32107);
var p__32102 = cljs.core.rest(arglist__32107);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32102);
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
var update_path__delegate = function (comm,leaflet_map,p__32108,tolerance,js_boundaryline,path_attrs,p__32109){var map__32113 = p__32108;var map__32113__$1 = ((cljs.core.seq_QMARK_.call(null,map__32113))?cljs.core.apply.call(null,cljs.core.hash_map,map__32113):map__32113);var path = map__32113__$1;var boundaryline_id = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__32114 = p__32109;var map__32115 = cljs.core.nth.call(null,vec__32114,(0),null);var map__32115__$1 = ((cljs.core.seq_QMARK_.call(null,map__32115))?cljs.core.apply.call(null,cljs.core.hash_map,map__32115):map__32115);var opts = map__32115__$1;var filter_spec = cljs.core.get.call(null,map__32115__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
};
var update_path = function (comm,leaflet_map,p__32108,tolerance,js_boundaryline,path_attrs,var_args){
var p__32109 = null;if (arguments.length > 6) {
  p__32109 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__32108,tolerance,js_boundaryline,path_attrs,p__32109);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__32116){
var comm = cljs.core.first(arglist__32116);
arglist__32116 = cljs.core.next(arglist__32116);
var leaflet_map = cljs.core.first(arglist__32116);
arglist__32116 = cljs.core.next(arglist__32116);
var p__32108 = cljs.core.first(arglist__32116);
arglist__32116 = cljs.core.next(arglist__32116);
var tolerance = cljs.core.first(arglist__32116);
arglist__32116 = cljs.core.next(arglist__32116);
var js_boundaryline = cljs.core.first(arglist__32116);
arglist__32116 = cljs.core.next(arglist__32116);
var path_attrs = cljs.core.first(arglist__32116);
var p__32109 = cljs.core.rest(arglist__32116);
return update_path__delegate(comm,leaflet_map,p__32108,tolerance,js_boundaryline,path_attrs,p__32109);
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
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32117){var vec__32133 = p__32117;var map__32134 = cljs.core.nth.call(null,vec__32133,(0),null);var map__32134__$1 = ((cljs.core.seq_QMARK_.call(null,map__32134))?cljs.core.apply.call(null,cljs.core.hash_map,map__32134):map__32134);var opts = map__32134__$1;var filter_spec = cljs.core.get.call(null,map__32134__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__32135 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__32135,(0),null);var notifychan = cljs.core.nth.call(null,vec__32135,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32135,tolerance_paths,notifychan,vec__32133,map__32134,map__32134__$1,opts,filter_spec){
return (function (p__32136){var vec__32137 = p__32136;var k = cljs.core.nth.call(null,vec__32137,(0),null);var tolerance = cljs.core.nth.call(null,vec__32137,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32137,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32135,tolerance_paths,notifychan,vec__32133,map__32134,map__32134__$1,opts,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32135,tolerance_paths,notifychan,vec__32133,map__32134,map__32134__$1,opts,filter_spec){
return (function (k){var vec__32138 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32138,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32138,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32135,tolerance_paths,notifychan,vec__32133,map__32134,map__32134__$1,opts,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32135,tolerance_paths,notifychan,created_paths,vec__32133,map__32134,map__32134__$1,opts,filter_spec){
return (function (p__32139){var vec__32140 = p__32139;var k = cljs.core.nth.call(null,vec__32140,(0),null);var tolerance = cljs.core.nth.call(null,vec__32140,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32140,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32135,tolerance_paths,notifychan,created_paths,vec__32133,map__32134,map__32134__$1,opts,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32135,tolerance_paths,notifychan,created_paths,vec__32133,map__32134,map__32134__$1,opts,filter_spec){
return (function (k){var vec__32141 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32141,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32141,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32135,tolerance_paths,notifychan,created_paths,vec__32133,map__32134,map__32134__$1,opts,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__32142 = cljs.core.seq.call(null,delete_path_keys);var chunk__32143 = null;var count__32144 = (0);var i__32145 = (0);while(true){
if((i__32145 < count__32144))
{var k = cljs.core._nth.call(null,chunk__32143,i__32145);var temp__4124__auto___32148 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32148))
{var path_32149 = temp__4124__auto___32148;clustermap.components.map.delete_path.call(null,leaflet_map,path_32149);
} else
{}
{
var G__32150 = seq__32142;
var G__32151 = chunk__32143;
var G__32152 = count__32144;
var G__32153 = (i__32145 + (1));
seq__32142 = G__32150;
chunk__32143 = G__32151;
count__32144 = G__32152;
i__32145 = G__32153;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32142);if(temp__4126__auto__)
{var seq__32142__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32142__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32142__$1);{
var G__32154 = cljs.core.chunk_rest.call(null,seq__32142__$1);
var G__32155 = c__4408__auto__;
var G__32156 = cljs.core.count.call(null,c__4408__auto__);
var G__32157 = (0);
seq__32142 = G__32154;
chunk__32143 = G__32155;
count__32144 = G__32156;
i__32145 = G__32157;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32142__$1);var temp__4124__auto___32158 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32158))
{var path_32159 = temp__4124__auto___32158;clustermap.components.map.delete_path.call(null,leaflet_map,path_32159);
} else
{}
{
var G__32160 = cljs.core.next.call(null,seq__32142__$1);
var G__32161 = null;
var G__32162 = (0);
var G__32163 = (0);
seq__32142 = G__32160;
chunk__32143 = G__32161;
count__32144 = G__32162;
i__32145 = G__32163;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32135,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32133,map__32134,map__32134__$1,opts,filter_spec){
return (function (m,p__32146){var map__32147 = p__32146;var map__32147__$1 = ((cljs.core.seq_QMARK_.call(null,map__32147))?cljs.core.apply.call(null,cljs.core.hash_map,map__32147):map__32147);var path = map__32147__$1;var id = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32135,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32133,map__32134,map__32134__$1,opts,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__32117 = null;if (arguments.length > 7) {
  p__32117 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32117);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__32164){
var comm = cljs.core.first(arglist__32164);
arglist__32164 = cljs.core.next(arglist__32164);
var fetch_boundarylines_fn = cljs.core.first(arglist__32164);
arglist__32164 = cljs.core.next(arglist__32164);
var leaflet_map = cljs.core.first(arglist__32164);
arglist__32164 = cljs.core.next(arglist__32164);
var paths_atom = cljs.core.first(arglist__32164);
arglist__32164 = cljs.core.next(arglist__32164);
var path_selections_atom = cljs.core.first(arglist__32164);
arglist__32164 = cljs.core.next(arglist__32164);
var new_path_highlights = cljs.core.first(arglist__32164);
arglist__32164 = cljs.core.next(arglist__32164);
var new_selection_paths = cljs.core.first(arglist__32164);
var p__32117 = cljs.core.rest(arglist__32164);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32117);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__32167){var vec__32168 = p__32167;var tz = cljs.core.nth.call(null,vec__32168,(0),null);var collection = cljs.core.nth.call(null,vec__32168,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__32169,owner){var map__32337 = p__32169;var map__32337__$1 = ((cljs.core.seq_QMARK_.call(null,map__32337))?cljs.core.apply.call(null,cljs.core.hash_map,map__32337):map__32337);var cursor_data = map__32337__$1;var map__32338 = cljs.core.get.call(null,map__32337__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32338__$1 = ((cljs.core.seq_QMARK_.call(null,map__32338))?cljs.core.apply.call(null,cljs.core.hash_map,map__32338):map__32338);var cursor = map__32338__$1;var data = cljs.core.get.call(null,map__32338__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__32338__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__32338__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32339 = cljs.core.get.call(null,map__32338__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32339__$1 = ((cljs.core.seq_QMARK_.call(null,map__32339))?cljs.core.apply.call(null,cljs.core.hash_map,map__32339):map__32339);var controls = map__32339__$1;var colorchooser = cljs.core.get.call(null,map__32339__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__32339__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom = cljs.core.get.call(null,map__32339__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__32339__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__32339__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__32339__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__32339__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__32339__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__32339__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__32339__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__32339__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var boundaryline_agg = cljs.core.get.call(null,map__32339__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__32337__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__32337__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t32340 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32340 = (function (colorchooser,initial_bounds,owner,data,p__32169,zoom,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,map__32337,map__32339,point_data,map__32338,boundaryline_agg,meta32341){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.owner = owner;
this.data = data;
this.p__32169 = p__32169;
this.zoom = zoom;
this.map_options = map_options;
this.cursor_data = cursor_data;
this.geotag_aggs = geotag_aggs;
this.filter_spec = filter_spec;
this.map_component = map_component;
this.link_render_fn = link_render_fn;
this.boundaryline_collections = boundaryline_collections;
this.controls = controls;
this.cursor = cursor;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.show_points = show_points;
this.link_click_fn = link_click_fn;
this.filter = filter;
this.map__32337 = map__32337;
this.map__32339 = map__32339;
this.point_data = point_data;
this.map__32338 = map__32338;
this.boundaryline_agg = boundaryline_agg;
this.meta32341 = meta32341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32340.cljs$lang$type = true;
clustermap.components.map.t32340.cljs$lang$ctorStr = "clustermap.components.map/t32340";
clustermap.components.map.t32340.cljs$lang$ctorPrWriter = ((function (map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t32340");
});})(map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32340.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t32340.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__32343 = om.core.get_state.call(null,self__.owner);var map__32343__$1 = ((cljs.core.seq_QMARK_.call(null,map__32343))?cljs.core.apply.call(null,cljs.core.hash_map,map__32343):map__32343);var map__32344 = cljs.core.get.call(null,map__32343__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32344__$1 = ((cljs.core.seq_QMARK_.call(null,map__32344))?cljs.core.apply.call(null,cljs.core.hash_map,map__32344):map__32344);var path_selections = cljs.core.get.call(null,map__32344__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32344__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32344__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32344__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32340.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32340.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$,p__32345,p__32346){var self__ = this;
var map__32347 = p__32345;var map__32347__$1 = ((cljs.core.seq_QMARK_.call(null,map__32347))?cljs.core.apply.call(null,cljs.core.hash_map,map__32347):map__32347);var next_cursor_data = map__32347__$1;var map__32348 = cljs.core.get.call(null,map__32347__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32348__$1 = ((cljs.core.seq_QMARK_.call(null,map__32348))?cljs.core.apply.call(null,cljs.core.hash_map,map__32348):map__32348);var next_cursor = map__32348__$1;var next_data = cljs.core.get.call(null,map__32348__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__32348__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__32348__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32349 = cljs.core.get.call(null,map__32348__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32349__$1 = ((cljs.core.seq_QMARK_.call(null,map__32349))?cljs.core.apply.call(null,cljs.core.hash_map,map__32349):map__32349);var next_colorchooser = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_zoom = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_boundaryline_agg = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_link_click_fn = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var next_link_render_fn = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var next_show_points = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__32347__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__32347__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32350 = p__32346;var map__32350__$1 = ((cljs.core.seq_QMARK_.call(null,map__32350))?cljs.core.apply.call(null,cljs.core.hash_map,map__32350):map__32350);var map__32351 = cljs.core.get.call(null,map__32350__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32351__$1 = ((cljs.core.seq_QMARK_.call(null,map__32351))?cljs.core.apply.call(null,cljs.core.hash_map,map__32351):map__32351);var next_markers = cljs.core.get.call(null,map__32351__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__32351__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_paths = cljs.core.get.call(null,map__32351__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__32351__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__32350__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__32350__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__32350__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__32350__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__32350__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var this$__$1 = this;var map__32352 = om.core.get_shared.call(null,self__.owner);var map__32352__$1 = ((cljs.core.seq_QMARK_.call(null,map__32352))?cljs.core.apply.call(null,cljs.core.hash_map,map__32352):map__32352);var point_in_boundarylines_fn = cljs.core.get.call(null,map__32352__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32352__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32352__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__32353 = om.core.get_state.call(null,self__.owner);var map__32353__$1 = ((cljs.core.seq_QMARK_.call(null,map__32353))?cljs.core.apply.call(null,cljs.core.hash_map,map__32353):map__32353);var map__32354 = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32354__$1 = ((cljs.core.seq_QMARK_.call(null,map__32354))?cljs.core.apply.call(null,cljs.core.hash_map,map__32354):map__32354);var path_selections = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var zoom_changed = cljs.core.not_EQ_.call(null,next_zoom,self__.zoom);if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
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
{var c__9125__auto___32504 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32504,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32504,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_32377){var state_val_32378 = (state_32377[(1)]);if((state_val_32378 === (5)))
{var inst_32375 = (state_32377[(2)]);var state_32377__$1 = state_32377;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32377__$1,inst_32375);
} else
{if((state_val_32378 === (4)))
{var state_32377__$1 = state_32377;var statearr_32379_32505 = state_32377__$1;(statearr_32379_32505[(2)] = null);
(statearr_32379_32505[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32378 === (3)))
{var inst_32367 = (state_32377[(7)]);var inst_32369 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32370 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_32371 = (new cljs.core.PersistentVector(null,1,(5),inst_32369,inst_32370,null));var inst_32372 = om.core.update_BANG_.call(null,self__.cursor,inst_32371,inst_32367);var state_32377__$1 = state_32377;var statearr_32380_32506 = state_32377__$1;(statearr_32380_32506[(2)] = inst_32372);
(statearr_32380_32506[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32378 === (2)))
{var inst_32367 = (state_32377[(7)]);var inst_32367__$1 = (state_32377[(2)]);var state_32377__$1 = (function (){var statearr_32381 = state_32377;(statearr_32381[(7)] = inst_32367__$1);
return statearr_32381;
})();if(cljs.core.truth_(inst_32367__$1))
{var statearr_32382_32507 = state_32377__$1;(statearr_32382_32507[(1)] = (3));
} else
{var statearr_32383_32508 = state_32377__$1;(statearr_32383_32508[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32378 === (1)))
{var inst_32355 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32356 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32357 = leaflet_map.getZoom();var inst_32358 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_32357);var inst_32359 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32360 = om.core._value.call(null,next_filter);var inst_32361 = leaflet_map.getBounds();var inst_32362 = clustermap.components.map.bounds_array.call(null,inst_32361);var inst_32363 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32364 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32365 = fetch_aggregation_data_fn.call(null,inst_32355,inst_32356,inst_32358,inst_32359,inst_32360,inst_32362,inst_32363,inst_32364);var state_32377__$1 = state_32377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32377__$1,(2),inst_32365);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32504,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32504,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32387 = [null,null,null,null,null,null,null,null];(statearr_32387[(0)] = state_machine__9111__auto__);
(statearr_32387[(1)] = (1));
return statearr_32387;
});
var state_machine__9111__auto____1 = (function (state_32377){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32377);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32388){if((e32388 instanceof Object))
{var ex__9114__auto__ = e32388;var statearr_32389_32509 = state_32377;(statearr_32389_32509[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32377);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32388;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32510 = state_32377;
state_32377 = G__32510;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32377){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32504,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32390 = f__9126__auto__.call(null);(statearr_32390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32504);
return statearr_32390;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32504,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
var c__9125__auto___32511 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32511,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32511,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_32411){var state_val_32412 = (state_32411[(1)]);if((state_val_32412 === (5)))
{var inst_32409 = (state_32411[(2)]);var state_32411__$1 = state_32411;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32411__$1,inst_32409);
} else
{if((state_val_32412 === (4)))
{var state_32411__$1 = state_32411;var statearr_32413_32512 = state_32411__$1;(statearr_32413_32512[(2)] = null);
(statearr_32413_32512[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32412 === (3)))
{var inst_32401 = (state_32411[(7)]);var inst_32403 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32404 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_32405 = (new cljs.core.PersistentVector(null,1,(5),inst_32403,inst_32404,null));var inst_32406 = om.core.update_BANG_.call(null,self__.cursor,inst_32405,inst_32401);var state_32411__$1 = state_32411;var statearr_32414_32513 = state_32411__$1;(statearr_32414_32513[(2)] = inst_32406);
(statearr_32414_32513[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32412 === (2)))
{var inst_32401 = (state_32411[(7)]);var inst_32401__$1 = (state_32411[(2)]);var state_32411__$1 = (function (){var statearr_32415 = state_32411;(statearr_32415[(7)] = inst_32401__$1);
return statearr_32415;
})();if(cljs.core.truth_(inst_32401__$1))
{var statearr_32416_32514 = state_32411__$1;(statearr_32416_32514[(1)] = (3));
} else
{var statearr_32417_32515 = state_32411__$1;(statearr_32417_32515[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32412 === (1)))
{var inst_32391 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32392 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32393 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32394 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover"];var inst_32395 = (new cljs.core.PersistentVector(null,5,(5),inst_32393,inst_32394,null));var inst_32396 = om.core._value.call(null,next_filter);var inst_32397 = leaflet_map.getBounds();var inst_32398 = clustermap.components.map.bounds_array.call(null,inst_32397);var inst_32399 = fetch_point_data_fn.call(null,inst_32391,inst_32392,"!postcode",inst_32395,(1000),inst_32396,inst_32398);var state_32411__$1 = state_32411;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32411__$1,(2),inst_32399);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32511,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32511,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32421 = [null,null,null,null,null,null,null,null];(statearr_32421[(0)] = state_machine__9111__auto__);
(statearr_32421[(1)] = (1));
return statearr_32421;
});
var state_machine__9111__auto____1 = (function (state_32411){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32411);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32422){if((e32422 instanceof Object))
{var ex__9114__auto__ = e32422;var statearr_32423_32516 = state_32411;(statearr_32423_32516[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32411);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32422;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32517 = state_32411;
state_32411 = G__32517;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32411){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32511,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32424 = f__9126__auto__.call(null);(statearr_32424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32511);
return statearr_32424;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32511,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32518 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32518,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32518,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_32438){var state_val_32439 = (state_32438[(1)]);if((state_val_32439 === (5)))
{var inst_32436 = (state_32438[(2)]);var state_32438__$1 = state_32438;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32438__$1,inst_32436);
} else
{if((state_val_32439 === (4)))
{var state_32438__$1 = state_32438;var statearr_32440_32519 = state_32438__$1;(statearr_32440_32519[(2)] = null);
(statearr_32440_32519[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32439 === (3)))
{var inst_32428 = (state_32438[(7)]);var inst_32430 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32431 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_32432 = (new cljs.core.PersistentVector(null,3,(5),inst_32430,inst_32431,null));var inst_32433 = om.core.update_BANG_.call(null,self__.cursor,inst_32432,inst_32428);var state_32438__$1 = state_32438;var statearr_32441_32520 = state_32438__$1;(statearr_32441_32520[(2)] = inst_32433);
(statearr_32441_32520[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32439 === (2)))
{var inst_32428 = (state_32438[(7)]);var inst_32428__$1 = (state_32438[(2)]);var state_32438__$1 = (function (){var statearr_32442 = state_32438;(statearr_32442[(7)] = inst_32428__$1);
return statearr_32442;
})();if(cljs.core.truth_(inst_32428__$1))
{var statearr_32443_32521 = state_32438__$1;(statearr_32443_32521[(1)] = (3));
} else
{var statearr_32444_32522 = state_32438__$1;(statearr_32444_32522[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32439 === (1)))
{var inst_32425 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32426 = fetch_geotag_data_fn.call(null,inst_32425);var state_32438__$1 = state_32438;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32438__$1,(2),inst_32426);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32518,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32518,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32448 = [null,null,null,null,null,null,null,null];(statearr_32448[(0)] = state_machine__9111__auto__);
(statearr_32448[(1)] = (1));
return statearr_32448;
});
var state_machine__9111__auto____1 = (function (state_32438){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32438);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32449){if((e32449 instanceof Object))
{var ex__9114__auto__ = e32449;var statearr_32450_32523 = state_32438;(statearr_32450_32523[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32438);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32449;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32524 = state_32438;
state_32438 = G__32524;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32438){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32518,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32451 = f__9126__auto__.call(null);(statearr_32451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32518);
return statearr_32451;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32518,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs))) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32525 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32525,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32525,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_32470){var state_val_32471 = (state_32470[(1)]);if((state_val_32471 === (5)))
{var inst_32468 = (state_32470[(2)]);var state_32470__$1 = state_32470;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32470__$1,inst_32468);
} else
{if((state_val_32471 === (4)))
{var state_32470__$1 = state_32470;var statearr_32472_32526 = state_32470__$1;(statearr_32472_32526[(2)] = null);
(statearr_32472_32526[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32471 === (3)))
{var inst_32459 = (state_32470[(7)]);var inst_32461 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32462 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_32463 = (new cljs.core.PersistentVector(null,3,(5),inst_32461,inst_32462,null));var inst_32464 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32459);var inst_32465 = om.core.update_BANG_.call(null,self__.cursor,inst_32463,inst_32464);var state_32470__$1 = state_32470;var statearr_32473_32527 = state_32470__$1;(statearr_32473_32527[(2)] = inst_32465);
(statearr_32473_32527[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32471 === (2)))
{var inst_32459 = (state_32470[(7)]);var inst_32459__$1 = (state_32470[(2)]);var state_32470__$1 = (function (){var statearr_32474 = state_32470;(statearr_32474[(7)] = inst_32459__$1);
return statearr_32474;
})();if(cljs.core.truth_(inst_32459__$1))
{var statearr_32475_32528 = state_32470__$1;(statearr_32475_32528[(1)] = (3));
} else
{var statearr_32476_32529 = state_32470__$1;(statearr_32476_32529[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32471 === (1)))
{var inst_32452 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32453 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32454 = [next_filter];var inst_32455 = cljs.core.PersistentHashMap.fromArrays(inst_32453,inst_32454);var inst_32456 = cljs.core.merge.call(null,inst_32452,inst_32455);var inst_32457 = fetch_geotag_agg_data_fn.call(null,inst_32456);var state_32470__$1 = state_32470;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32470__$1,(2),inst_32457);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32525,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32525,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32480 = [null,null,null,null,null,null,null,null];(statearr_32480[(0)] = state_machine__9111__auto__);
(statearr_32480[(1)] = (1));
return statearr_32480;
});
var state_machine__9111__auto____1 = (function (state_32470){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32470);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32481){if((e32481 instanceof Object))
{var ex__9114__auto__ = e32481;var statearr_32482_32530 = state_32470;(statearr_32482_32530[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32470);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32481;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32531 = state_32470;
state_32470 = G__32531;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32470){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32525,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32483 = f__9126__auto__.call(null);(statearr_32483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32525);
return statearr_32483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32525,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
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
{var vec__32484_32532 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_32533 = cljs.core.nth.call(null,vec__32484_32532,(0),null);var selection_path_colours_32534 = cljs.core.nth.call(null,vec__32484_32532,(1),null);var update_paths_invocation_32535 = ((function (vec__32484_32532,new_threshold_colors_32533,selection_path_colours_32534,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_32534,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec], null));
});})(vec__32484_32532,new_threshold_colors_32533,selection_path_colours_32534,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_32533,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_32533);
} else
{}
var temp__4126__auto___32536 = update_paths_invocation_32535.call(null);if(cljs.core.truth_(temp__4126__auto___32536))
{var notify_chan_32537 = temp__4126__auto___32536;var c__9125__auto___32538 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32538,notify_chan_32537,temp__4126__auto___32536,vec__32484_32532,new_threshold_colors_32533,selection_path_colours_32534,update_paths_invocation_32535,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32538,notify_chan_32537,temp__4126__auto___32536,vec__32484_32532,new_threshold_colors_32533,selection_path_colours_32534,update_paths_invocation_32535,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_32489){var state_val_32490 = (state_32489[(1)]);if((state_val_32490 === (2)))
{var inst_32486 = (state_32489[(2)]);var inst_32487 = update_paths_invocation_32535.call(null);var state_32489__$1 = (function (){var statearr_32491 = state_32489;(statearr_32491[(7)] = inst_32486);
return statearr_32491;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32489__$1,inst_32487);
} else
{if((state_val_32490 === (1)))
{var state_32489__$1 = state_32489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32489__$1,(2),notify_chan_32537);
} else
{return null;
}
}
});})(c__9125__auto___32538,notify_chan_32537,temp__4126__auto___32536,vec__32484_32532,new_threshold_colors_32533,selection_path_colours_32534,update_paths_invocation_32535,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32538,notify_chan_32537,temp__4126__auto___32536,vec__32484_32532,new_threshold_colors_32533,selection_path_colours_32534,update_paths_invocation_32535,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32495 = [null,null,null,null,null,null,null,null];(statearr_32495[(0)] = state_machine__9111__auto__);
(statearr_32495[(1)] = (1));
return statearr_32495;
});
var state_machine__9111__auto____1 = (function (state_32489){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32489);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32496){if((e32496 instanceof Object))
{var ex__9114__auto__ = e32496;var statearr_32497_32539 = state_32489;(statearr_32497_32539[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32489);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32496;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32540 = state_32489;
state_32489 = G__32540;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32489){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32538,notify_chan_32537,temp__4126__auto___32536,vec__32484_32532,new_threshold_colors_32533,selection_path_colours_32534,update_paths_invocation_32535,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32498 = f__9126__auto__.call(null);(statearr_32498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32538);
return statearr_32498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32538,notify_chan_32537,temp__4126__auto___32536,vec__32484_32532,new_threshold_colors_32533,selection_path_colours_32534,update_paths_invocation_32535,map__32352,map__32352__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32353,map__32353__$1,map__32354,map__32354__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32347,map__32347__$1,next_cursor_data,map__32348,map__32348__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32349,map__32349__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32350,map__32350__$1,map__32351,map__32351__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
} else
{}
} else
{}
if((cljs.core.not_EQ_.call(null,next_show_points,self__.show_points)) || (cljs.core.not_EQ_.call(null,next_point_data,self__.point_data)))
{clustermap.components.map.update_markers.call(null,self__.link_render_fn,leaflet_map,leaflet_marker_cluster_group,next_markers,next_show_points,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030),self__.link_click_fn], null));
} else
{}
if((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(self__.geotag_aggs))) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(self__.geotag_aggs))) || (zoom_changed) || (cljs.core.not_EQ_.call(null,next_point_data,self__.point_data)))
{return clustermap.components.map.update_geotag_markers.call(null,leaflet_map,next_geotag_markers,next_geotag_aggs,cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data)));
} else
{return null;
}
});})(map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32340.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32340.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__32499 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__32499__$1 = ((cljs.core.seq_QMARK_.call(null,map__32499))?cljs.core.apply.call(null,cljs.core.hash_map,map__32499):map__32499);var map = map__32499__$1;var path = cljs.core.get.call(null,map__32499__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__32499__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32499__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__32500 = om.core.get_shared.call(null,self__.owner);var map__32500__$1 = ((cljs.core.seq_QMARK_.call(null,map__32500))?cljs.core.apply.call(null,cljs.core.hash_map,map__32500):map__32500);var path_marker_click_fn = cljs.core.get.call(null,map__32500__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32500__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32500__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32500__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
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
});})(node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
});})(node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__32501 = e;var G__32501__$1 = (((G__32501 == null))?null:G__32501.target);var G__32501__$2 = (((G__32501__$1 == null))?null:domina.attr.call(null,G__32501__$1,"data-boundaryline-id"));var G__32501__$3 = (((G__32501__$2 == null))?null:path_marker_click_fn.call(null,G__32501__$2));return G__32501__$3;
});})(node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__32499,map__32499__$1,map,path,markers,leaflet_map,map__32500,map__32500__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
});})(map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32340.prototype.om$core$IRender$ = true;
clustermap.components.map.t32340.prototype.om$core$IRender$render$arity$1 = ((function (map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (_32342){var self__ = this;
var _32342__$1 = this;return self__.meta32341;
});})(map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (_32342,meta32341__$1){var self__ = this;
var _32342__$1 = this;return (new clustermap.components.map.t32340(self__.colorchooser,self__.initial_bounds,self__.owner,self__.data,self__.p__32169,self__.zoom,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.show_points,self__.link_click_fn,self__.filter,self__.map__32337,self__.map__32339,self__.point_data,self__.map__32338,self__.boundaryline_agg,meta32341__$1));
});})(map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t32340 = ((function (map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function __GT_t32340(colorchooser__$1,initial_bounds__$1,owner__$1,data__$1,p__32169__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,map__32337__$2,map__32339__$2,point_data__$1,map__32338__$2,boundaryline_agg__$1,meta32341){return (new clustermap.components.map.t32340(colorchooser__$1,initial_bounds__$1,owner__$1,data__$1,p__32169__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,map__32337__$2,map__32339__$2,point_data__$1,map__32338__$2,boundaryline_agg__$1,meta32341));
});})(map__32337,map__32337__$1,cursor_data,map__32338,map__32338__$1,cursor,data,point_data,boundaryline_collections,map__32339,map__32339__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t32340(colorchooser,initial_bounds,owner,data,p__32169,zoom,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,map__32337__$1,map__32339__$1,point_data,map__32338__$1,boundaryline_agg,null));
});
