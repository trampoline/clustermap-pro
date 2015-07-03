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
clustermap.components.map.default_api_key = (function (){var or__3639__auto__ = (function (){var G__32213 = config;var G__32213__$1 = (((G__32213 == null))?null:G__32213.components);var G__32213__$2 = (((G__32213__$1 == null))?null:G__32213__$1.map);var G__32213__$3 = (((G__32213__$2 == null))?null:G__32213__$2.api_key);return G__32213__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__32214){var map__32216 = p__32214;var map__32216__$1 = ((cljs.core.seq_QMARK_.call(null,map__32216))?cljs.core.apply.call(null,cljs.core.hash_map,map__32216):map__32216);var api_key = cljs.core.get.call(null,map__32216__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__32216__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__32216__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__32216__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__32217){
var m = cljs.core.first(arglist__32217);
var all_bounds = cljs.core.rest(arglist__32217);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.render_marker_icon = (function render_marker_icon(p__32218,location_sites){var map__32220 = p__32218;var map__32220__$1 = ((cljs.core.seq_QMARK_.call(null,map__32220))?cljs.core.apply.call(null,cljs.core.hash_map,map__32220):map__32220);var location_spec = map__32220__$1;var marker_render_fn = cljs.core.get.call(null,map__32220__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));if((cljs.core.count.call(null,location_sites) > (1)))
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
} else
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
}
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(item_render_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"location-marker-popup-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__32225(s__32226){return (new cljs.core.LazySeq(null,(function (){var s__32226__$1 = s__32226;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32226__$1);if(temp__4126__auto__)
{var s__32226__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32226__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32226__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32228 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32227 = (0);while(true){
if((i__32227 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__32227);cljs.core.chunk_append.call(null,b__32228,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))));
{
var G__32229 = (i__32227 + (1));
i__32227 = G__32229;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32228),iter__32225.call(null,cljs.core.chunk_rest.call(null,s__32226__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32228),null);
}
} else
{var site = cljs.core.first.call(null,s__32226__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))),iter__32225.call(null,cljs.core.rest.call(null,s__32226__$2)));
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
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__32230){var map__32235 = p__32230;var map__32235__$1 = ((cljs.core.seq_QMARK_.call(null,map__32235))?cljs.core.apply.call(null,cljs.core.hash_map,map__32235):map__32235);var map__32236 = cljs.core.get.call(null,map__32235__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32236__$1 = ((cljs.core.seq_QMARK_.call(null,map__32236))?cljs.core.apply.call(null,cljs.core.hash_map,map__32236):map__32236);var location_spec = map__32236__$1;var item_click_fn = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var temp__4124__auto__ = (function (){var G__32237 = location_sites;var G__32237__$1 = (((G__32237 == null))?null:cljs.core.first.call(null,G__32237));var G__32237__$2 = (((G__32237__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__32237__$1));var G__32237__$3 = (((G__32237__$2 == null))?null:cljs.core.reverse.call(null,G__32237__$2));var G__32237__$4 = (((G__32237__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__32237__$3));return G__32237__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32235,map__32235__$1,map__32236,map__32236__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32235,map__32235__$1,map__32236,map__32236__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);leaflet_marker.on("mouseover",((function (icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32235,map__32235__$1,map__32236,map__32236__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (e){return leaflet_marker.openPopup();
});})(icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32235,map__32235__$1,map__32236,map__32236__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
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
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_32238_32239 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32238_32239,sb__4579__auto__,temp__4124__auto__,map__32235,map__32235__$1,map__32236,map__32236__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_32238_32239,sb__4579__auto__,temp__4124__auto__,map__32235,map__32235__$1,map__32236,map__32236__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32238_32239;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__32240){var map__32246 = p__32240;var map__32246__$1 = ((cljs.core.seq_QMARK_.call(null,map__32246))?cljs.core.apply.call(null,cljs.core.hash_map,map__32246):map__32246);var marker = map__32246__$1;var click_handler_keys = cljs.core.get.call(null,map__32246__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32246__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__32247 = cljs.core.seq.call(null,click_handler_keys);var chunk__32248 = null;var count__32249 = (0);var i__32250 = (0);while(true){
if((i__32250 < count__32249))
{var chk = cljs.core._nth.call(null,chunk__32248,i__32250);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32251 = seq__32247;
var G__32252 = chunk__32248;
var G__32253 = count__32249;
var G__32254 = (i__32250 + (1));
seq__32247 = G__32251;
chunk__32248 = G__32252;
count__32249 = G__32253;
i__32250 = G__32254;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32247);if(temp__4126__auto__)
{var seq__32247__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32247__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32247__$1);{
var G__32255 = cljs.core.chunk_rest.call(null,seq__32247__$1);
var G__32256 = c__4408__auto__;
var G__32257 = cljs.core.count.call(null,c__4408__auto__);
var G__32258 = (0);
seq__32247 = G__32255;
chunk__32248 = G__32256;
count__32249 = G__32257;
i__32250 = G__32258;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__32247__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32259 = cljs.core.next.call(null,seq__32247__$1);
var G__32260 = null;
var G__32261 = (0);
var G__32262 = (0);
seq__32247 = G__32259;
chunk__32248 = G__32260;
count__32249 = G__32261;
i__32250 = G__32262;
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
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__32263,location_sites,p__32264){var map__32268 = p__32263;var map__32268__$1 = ((cljs.core.seq_QMARK_.call(null,map__32268))?cljs.core.apply.call(null,cljs.core.hash_map,map__32268):map__32268);var marker = map__32268__$1;var click_handler_keys = cljs.core.get.call(null,map__32268__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32268__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32268__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__32269 = p__32264;var map__32269__$1 = ((cljs.core.seq_QMARK_.call(null,map__32269))?cljs.core.apply.call(null,cljs.core.hash_map,map__32269):map__32269);var map__32270 = cljs.core.get.call(null,map__32269__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32270__$1 = ((cljs.core.seq_QMARK_.call(null,map__32270))?cljs.core.apply.call(null,cljs.core.hash_map,map__32270):map__32270);var location_spec = map__32270__$1;var item_click_fn = cljs.core.get.call(null,map__32270__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32270__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32270__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,popup,map__32268,map__32268__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32269,map__32269__$1,map__32270,map__32270__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,popup,map__32268,map__32268__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32269,map__32269__$1,map__32270,map__32270__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
leaflet_marker.setIcon(icon);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,item_render_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__32271){var map__32273 = p__32271;var map__32273__$1 = ((cljs.core.seq_QMARK_.call(null,map__32273))?cljs.core.apply.call(null,cljs.core.hash_map,map__32273):map__32273);var marker = map__32273__$1;var click_handler_keys = cljs.core.get.call(null,map__32273__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32273__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32273__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
if(cljs.core.truth_(leaflet_marker_cluster_group))
{leaflet_marker_cluster_group.removeLayer(leaflet_marker);
} else
{leaflet_map.removeLayer(leaflet_marker);
}
return null;
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,leaflet_marker_cluster_group,markers_atom,show_points,new_locations,opts){var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = (cljs.core.truth_(show_points)?cljs.core.set.call(null,cljs.core.keys.call(null,new_locations)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k),cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__32278 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32279 = null;var count__32280 = (0);var i__32281 = (0);while(true){
if((i__32281 < count__32280))
{var k = cljs.core._nth.call(null,chunk__32279,i__32281);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32282 = seq__32278;
var G__32283 = chunk__32279;
var G__32284 = count__32280;
var G__32285 = (i__32281 + (1));
seq__32278 = G__32282;
chunk__32279 = G__32283;
count__32280 = G__32284;
i__32281 = G__32285;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32278);if(temp__4126__auto__)
{var seq__32278__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32278__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32278__$1);{
var G__32286 = cljs.core.chunk_rest.call(null,seq__32278__$1);
var G__32287 = c__4408__auto__;
var G__32288 = cljs.core.count.call(null,c__4408__auto__);
var G__32289 = (0);
seq__32278 = G__32286;
chunk__32279 = G__32287;
count__32280 = G__32288;
i__32281 = G__32289;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32278__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32290 = cljs.core.next.call(null,seq__32278__$1);
var G__32291 = null;
var G__32292 = (0);
var G__32293 = (0);
seq__32278 = G__32290;
chunk__32279 = G__32291;
count__32280 = G__32292;
i__32281 = G__32293;
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
clustermap.components.map.marker_color_class = (function marker_color_class(n){var pred__32297 = cljs.core._EQ_;var expr__32298 = n;if(cljs.core.truth_(pred__32297.call(null,(0),expr__32298)))
{return "marker-cluster-small";
} else
{if(cljs.core.truth_(pred__32297.call(null,(1),expr__32298)))
{return "marker-cluster-medium";
} else
{if(cljs.core.truth_(pred__32297.call(null,(2),expr__32298)))
{return "marker-cluster-large";
} else
{return "marker-cluster-small";
}
}
}
});
clustermap.components.map.render_geotag_icon = (function render_geotag_icon(p__32300,geotag,geotag_agg){var map__32303 = p__32300;var map__32303__$1 = ((cljs.core.seq_QMARK_.call(null,map__32303))?cljs.core.apply.call(null,cljs.core.hash_map,map__32303):map__32303);var geotag_agg_spec = map__32303__$1;var colorchooser_fn = cljs.core.get.call(null,map__32303__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32303__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geotag_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32304 = icon_render_fn.call(null,geotag,geotag_agg);if(cljs.core.map_QMARK_.call(null,attrs32304))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32304)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32304))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geotag_marker_popup_content = (function render_geotag_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))))));
});
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__32305,geotag,geotag_agg){var map__32307 = p__32305;var map__32307__$1 = ((cljs.core.seq_QMARK_.call(null,map__32307))?cljs.core.apply.call(null,cljs.core.hash_map,map__32307):map__32307);var geotag_agg_spec = map__32307__$1;var click_fn = cljs.core.get.call(null,map__32307__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32307__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32307__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32307,map__32307__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32307,map__32307__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__32308,p__32309,geotag,geotag_agg){var map__32312 = p__32308;var map__32312__$1 = ((cljs.core.seq_QMARK_.call(null,map__32312))?cljs.core.apply.call(null,cljs.core.hash_map,map__32312):map__32312);var geotag_agg_spec = map__32312__$1;var click_fn = cljs.core.get.call(null,map__32312__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32312__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32312__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32313 = p__32309;var map__32313__$1 = ((cljs.core.seq_QMARK_.call(null,map__32313))?cljs.core.apply.call(null,cljs.core.hash_map,map__32313):map__32313);var marker = map__32313__$1;var click_handler_key = cljs.core.get.call(null,map__32313__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32313__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_32314 = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var new_click_handler_key_32315 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_32314);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32315);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__32316,points_showing_QMARK_){var map__32322 = p__32316;var map__32322__$1 = ((cljs.core.seq_QMARK_.call(null,map__32322))?cljs.core.apply.call(null,cljs.core.hash_map,map__32322):map__32322);var geotag_agg_spec = map__32322__$1;var geotag_agg_data = cljs.core.get.call(null,map__32322__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__32322__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__32322__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32322__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32322__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32322__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geotag_agg_data):cljs.core.constantly.call(null,(1)));var geotag_agg_spec__$1 = cljs.core.assoc.call(null,geotag_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geotags_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,map__32322,map__32322__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(colorchooser_fn,geotag_agg_spec__$1,map__32322,map__32322__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32322,map__32322__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32322,map__32322__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
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
})())?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32322,map__32322__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32322,map__32322__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32322,map__32322__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32322,map__32322__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32323 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32324 = null;var count__32325 = (0);var i__32326 = (0);while(true){
if((i__32326 < count__32325))
{var k = cljs.core._nth.call(null,chunk__32324,i__32326);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32327 = seq__32323;
var G__32328 = chunk__32324;
var G__32329 = count__32325;
var G__32330 = (i__32326 + (1));
seq__32323 = G__32327;
chunk__32324 = G__32328;
count__32325 = G__32329;
i__32326 = G__32330;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32323);if(temp__4126__auto__)
{var seq__32323__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32323__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32323__$1);{
var G__32331 = cljs.core.chunk_rest.call(null,seq__32323__$1);
var G__32332 = c__4408__auto__;
var G__32333 = cljs.core.count.call(null,c__4408__auto__);
var G__32334 = (0);
seq__32323 = G__32331;
chunk__32324 = G__32332;
count__32325 = G__32333;
i__32326 = G__32334;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32323__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32335 = cljs.core.next.call(null,seq__32323__$1);
var G__32336 = null;
var G__32337 = (0);
var G__32338 = (0);
seq__32323 = G__32335;
chunk__32324 = G__32336;
count__32325 = G__32337;
i__32326 = G__32338;
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
clustermap.components.map.render_geohash_icon = (function render_geohash_icon(p__32339,geohash_agg){var map__32342 = p__32339;var map__32342__$1 = ((cljs.core.seq_QMARK_.call(null,map__32342))?cljs.core.apply.call(null,cljs.core.hash_map,map__32342):map__32342);var geohash_agg_spec = map__32342__$1;var colorchooser_fn = cljs.core.get.call(null,map__32342__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32342__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geohash_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32343 = icon_render_fn.call(null,geohash_agg);if(cljs.core.map_QMARK_.call(null,attrs32343))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32343)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32343))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geohash_marker_popup_content = (function render_geohash_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32345 = content;if(cljs.core.map_QMARK_.call(null,attrs32345))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32345)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32345))+"</div>");
}
})())))));
});
/**
* we get bounds for the points contained in the geohash area, so take the
* center point as the marker point
*/
clustermap.components.map.geohash_center_point = (function geohash_center_point(p__32346){var map__32351 = p__32346;var map__32351__$1 = ((cljs.core.seq_QMARK_.call(null,map__32351))?cljs.core.apply.call(null,cljs.core.hash_map,map__32351):map__32351);var geohash_agg = map__32351__$1;var bounds = cljs.core.get.call(null,map__32351__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var vec__32352 = bounds;var vec__32353 = cljs.core.nth.call(null,vec__32352,(0),null);var south = cljs.core.nth.call(null,vec__32353,(0),null);var west = cljs.core.nth.call(null,vec__32353,(1),null);var vec__32354 = cljs.core.nth.call(null,vec__32352,(1),null);var north = cljs.core.nth.call(null,vec__32354,(0),null);var east = cljs.core.nth.call(null,vec__32354,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((south + north) / (2)),((west + east) / (2))], null);
});
clustermap.components.map.create_geohash_marker = (function create_geohash_marker(leaflet_map,p__32355,geohash_agg){var map__32357 = p__32355;var map__32357__$1 = ((cljs.core.seq_QMARK_.call(null,map__32357))?cljs.core.apply.call(null,cljs.core.hash_map,map__32357):map__32357);var geohash_agg_spec = map__32357__$1;var click_fn = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32357,map__32357__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32357,map__32357__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geohash_marker = (function update_geohash_marker(leaflet_map,p__32358,p__32359,geohash_agg){var map__32362 = p__32358;var map__32362__$1 = ((cljs.core.seq_QMARK_.call(null,map__32362))?cljs.core.apply.call(null,cljs.core.hash_map,map__32362):map__32362);var geohash_agg_spec = map__32362__$1;var click_fn = cljs.core.get.call(null,map__32362__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32362__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32362__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32363 = p__32359;var map__32363__$1 = ((cljs.core.seq_QMARK_.call(null,map__32363))?cljs.core.apply.call(null,cljs.core.hash_map,map__32363):map__32363);var marker = map__32363__$1;var click_handler_key = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var latlong_32364 = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon_32365 = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var new_click_handler_key_32366 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setLatLng(latlong_32364);
leaflet_marker.setIcon(icon_32365);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32366);
return marker;
});
clustermap.components.map.update_geohash_markers = (function update_geohash_markers(leaflet_map,geohash_markers_atom,p__32367,points_showing_QMARK_){var map__32373 = p__32367;var map__32373__$1 = ((cljs.core.seq_QMARK_.call(null,map__32373))?cljs.core.apply.call(null,cljs.core.hash_map,map__32373):map__32373);var geohash_agg_spec = map__32373__$1;var geohash_agg_data = cljs.core.get.call(null,map__32373__$1,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620));var icon_render_fn = cljs.core.get.call(null,map__32373__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32373__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32373__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geohash_agg_data):cljs.core.constantly.call(null,(1)));var geohash_agg_spec__$1 = cljs.core.assoc.call(null,geohash_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geohash_aggs_by_geohash = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,map__32373,map__32373__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (gha){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geohash-grid","geohash-grid",2001750091).cljs$core$IFn$_invoke$arity$1(gha),gha], null);
});})(colorchooser_fn,geohash_agg_spec__$1,map__32373,map__32373__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
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
})())?cljs.core.set.call(null,cljs.core.keys.call(null,geohash_aggs_by_geohash)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32373,map__32373__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32373,map__32373__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32373,map__32373__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32373,map__32373__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32374 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32375 = null;var count__32376 = (0);var i__32377 = (0);while(true){
if((i__32377 < count__32376))
{var k = cljs.core._nth.call(null,chunk__32375,i__32377);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32378 = seq__32374;
var G__32379 = chunk__32375;
var G__32380 = count__32376;
var G__32381 = (i__32377 + (1));
seq__32374 = G__32378;
chunk__32375 = G__32379;
count__32376 = G__32380;
i__32377 = G__32381;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32374);if(temp__4126__auto__)
{var seq__32374__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32374__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32374__$1);{
var G__32382 = cljs.core.chunk_rest.call(null,seq__32374__$1);
var G__32383 = c__4408__auto__;
var G__32384 = cljs.core.count.call(null,c__4408__auto__);
var G__32385 = (0);
seq__32374 = G__32382;
chunk__32375 = G__32383;
count__32376 = G__32384;
i__32377 = G__32385;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32374__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32386 = cljs.core.next.call(null,seq__32374__$1);
var G__32387 = null;
var G__32388 = (0);
var G__32389 = (0);
seq__32374 = G__32386;
chunk__32375 = G__32387;
count__32376 = G__32388;
i__32377 = G__32389;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__32398 = cljs.core.js__GT_clj.call(null,envelope);var map__32398__$1 = ((cljs.core.seq_QMARK_.call(null,map__32398))?cljs.core.apply.call(null,cljs.core.hash_map,map__32398):map__32398);var clj_envelope = map__32398__$1;var vec__32399 = cljs.core.get.call(null,map__32398__$1,"coordinates");var vec__32400 = cljs.core.nth.call(null,vec__32399,(0),null);var vec__32401 = cljs.core.nth.call(null,vec__32400,(0),null);var miny0 = cljs.core.nth.call(null,vec__32401,(0),null);var minx0 = cljs.core.nth.call(null,vec__32401,(1),null);var vec__32402 = cljs.core.nth.call(null,vec__32400,(1),null);var maxy1 = cljs.core.nth.call(null,vec__32402,(0),null);var minx1 = cljs.core.nth.call(null,vec__32402,(1),null);var vec__32403 = cljs.core.nth.call(null,vec__32400,(2),null);var maxy2 = cljs.core.nth.call(null,vec__32403,(0),null);var maxx2 = cljs.core.nth.call(null,vec__32403,(1),null);var vec__32404 = cljs.core.nth.call(null,vec__32400,(3),null);var miny3 = cljs.core.nth.call(null,vec__32404,(0),null);var maxx3 = cljs.core.nth.call(null,vec__32404,(1),null);var vec__32405 = cljs.core.nth.call(null,vec__32400,(4),null);var miny4 = cljs.core.nth.call(null,vec__32405,(0),null);var minx4 = cljs.core.nth.call(null,vec__32405,(1),null);var inner = vec__32400;var coords = vec__32399;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__32406,p__32407){var map__32410 = p__32406;var map__32410__$1 = ((cljs.core.seq_QMARK_.call(null,map__32410))?cljs.core.apply.call(null,cljs.core.hash_map,map__32410):map__32410);var fill_color = cljs.core.get.call(null,map__32410__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__32410__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__32410__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var map__32411 = p__32407;var map__32411__$1 = ((cljs.core.seq_QMARK_.call(null,map__32411))?cljs.core.apply.call(null,cljs.core.hash_map,map__32411):map__32411);var boundaryline_fill_opacity = cljs.core.get.call(null,map__32411__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),0.4);if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
{return highlighted;
} else
{return and__3627__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),boundaryline_fill_opacity], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#8c2d04",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),boundaryline_fill_opacity], null)));
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
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32412,p__32413){var map__32417 = p__32412;var map__32417__$1 = ((cljs.core.seq_QMARK_.call(null,map__32417))?cljs.core.apply.call(null,cljs.core.hash_map,map__32417):map__32417);var path_attrs = map__32417__$1;var selected = cljs.core.get.call(null,map__32417__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__32418 = p__32413;var map__32419 = cljs.core.nth.call(null,vec__32418,(0),null);var map__32419__$1 = ((cljs.core.seq_QMARK_.call(null,map__32419))?cljs.core.apply.call(null,cljs.core.hash_map,map__32419):map__32419);var opts = map__32419__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32419__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32419__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs,opts);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("dblclick",((function (tolerance,bounds,leaflet_path,popup_content,map__32417,map__32417__$1,path_attrs,selected,vec__32418,map__32419,map__32419__$1,opts,path_marker_click_fn,filter_spec){
return (function (e){leaflet_map.fitBounds(leaflet_path.getBounds());
if(cljs.core.truth_(path_marker_click_fn))
{return path_marker_click_fn.call(null,boundaryline_id);
} else
{return null;
}
});})(tolerance,bounds,leaflet_path,popup_content,map__32417,map__32417__$1,path_attrs,selected,vec__32418,map__32419,map__32419__$1,opts,path_marker_click_fn,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32412,var_args){
var p__32413 = null;if (arguments.length > 5) {
  p__32413 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__32412,p__32413);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__32420){
var comm = cljs.core.first(arglist__32420);
arglist__32420 = cljs.core.next(arglist__32420);
var leaflet_map = cljs.core.first(arglist__32420);
arglist__32420 = cljs.core.next(arglist__32420);
var boundaryline_id = cljs.core.first(arglist__32420);
arglist__32420 = cljs.core.next(arglist__32420);
var js_boundaryline = cljs.core.first(arglist__32420);
arglist__32420 = cljs.core.next(arglist__32420);
var p__32412 = cljs.core.first(arglist__32420);
var p__32413 = cljs.core.rest(arglist__32420);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__32412,p__32413);
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
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32421){var vec__32424 = p__32421;var map__32425 = cljs.core.nth.call(null,vec__32424,(0),null);var map__32425__$1 = ((cljs.core.seq_QMARK_.call(null,map__32425))?cljs.core.apply.call(null,cljs.core.hash_map,map__32425):map__32425);var opts = map__32425__$1;var filter_spec = cljs.core.get.call(null,map__32425__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__32421 = null;if (arguments.length > 6) {
  p__32421 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32421);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__32426){
var comm = cljs.core.first(arglist__32426);
arglist__32426 = cljs.core.next(arglist__32426);
var leaflet_map = cljs.core.first(arglist__32426);
arglist__32426 = cljs.core.next(arglist__32426);
var boundaryline_id = cljs.core.first(arglist__32426);
arglist__32426 = cljs.core.next(arglist__32426);
var tolerance = cljs.core.first(arglist__32426);
arglist__32426 = cljs.core.next(arglist__32426);
var js_boundaryline = cljs.core.first(arglist__32426);
arglist__32426 = cljs.core.next(arglist__32426);
var path_attrs = cljs.core.first(arglist__32426);
var p__32421 = cljs.core.rest(arglist__32426);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32421);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32427){var vec__32430 = p__32427;var map__32431 = cljs.core.nth.call(null,vec__32430,(0),null);var map__32431__$1 = ((cljs.core.seq_QMARK_.call(null,map__32431))?cljs.core.apply.call(null,cljs.core.hash_map,map__32431):map__32431);var opts = map__32431__$1;var filter_spec = cljs.core.get.call(null,map__32431__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__32427 = null;if (arguments.length > 6) {
  p__32427 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32427);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__32432){
var comm = cljs.core.first(arglist__32432);
arglist__32432 = cljs.core.next(arglist__32432);
var leaflet_map = cljs.core.first(arglist__32432);
arglist__32432 = cljs.core.next(arglist__32432);
var boundaryline_id = cljs.core.first(arglist__32432);
arglist__32432 = cljs.core.next(arglist__32432);
var old_path = cljs.core.first(arglist__32432);
arglist__32432 = cljs.core.next(arglist__32432);
var js_boundaryline = cljs.core.first(arglist__32432);
arglist__32432 = cljs.core.next(arglist__32432);
var path_attrs = cljs.core.first(arglist__32432);
var p__32427 = cljs.core.rest(arglist__32432);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32427);
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
var update_path__delegate = function (comm,leaflet_map,p__32433,tolerance,js_boundaryline,path_attrs,p__32434){var map__32438 = p__32433;var map__32438__$1 = ((cljs.core.seq_QMARK_.call(null,map__32438))?cljs.core.apply.call(null,cljs.core.hash_map,map__32438):map__32438);var path = map__32438__$1;var boundaryline_id = cljs.core.get.call(null,map__32438__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__32439 = p__32434;var map__32440 = cljs.core.nth.call(null,vec__32439,(0),null);var map__32440__$1 = ((cljs.core.seq_QMARK_.call(null,map__32440))?cljs.core.apply.call(null,cljs.core.hash_map,map__32440):map__32440);var opts = map__32440__$1;var filter_spec = cljs.core.get.call(null,map__32440__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs,opts);
return path;
}
};
var update_path = function (comm,leaflet_map,p__32433,tolerance,js_boundaryline,path_attrs,var_args){
var p__32434 = null;if (arguments.length > 6) {
  p__32434 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__32433,tolerance,js_boundaryline,path_attrs,p__32434);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__32441){
var comm = cljs.core.first(arglist__32441);
arglist__32441 = cljs.core.next(arglist__32441);
var leaflet_map = cljs.core.first(arglist__32441);
arglist__32441 = cljs.core.next(arglist__32441);
var p__32433 = cljs.core.first(arglist__32441);
arglist__32441 = cljs.core.next(arglist__32441);
var tolerance = cljs.core.first(arglist__32441);
arglist__32441 = cljs.core.next(arglist__32441);
var js_boundaryline = cljs.core.first(arglist__32441);
arglist__32441 = cljs.core.next(arglist__32441);
var path_attrs = cljs.core.first(arglist__32441);
var p__32434 = cljs.core.rest(arglist__32441);
return update_path__delegate(comm,leaflet_map,p__32433,tolerance,js_boundaryline,path_attrs,p__32434);
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
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32442){var vec__32458 = p__32442;var map__32459 = cljs.core.nth.call(null,vec__32458,(0),null);var map__32459__$1 = ((cljs.core.seq_QMARK_.call(null,map__32459))?cljs.core.apply.call(null,cljs.core.hash_map,map__32459):map__32459);var opts = map__32459__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32459__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32459__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__32460 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__32460,(0),null);var notifychan = cljs.core.nth.call(null,vec__32460,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32460,tolerance_paths,notifychan,vec__32458,map__32459,map__32459__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32461){var vec__32462 = p__32461;var k = cljs.core.nth.call(null,vec__32462,(0),null);var tolerance = cljs.core.nth.call(null,vec__32462,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32462,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32460,tolerance_paths,notifychan,vec__32458,map__32459,map__32459__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32460,tolerance_paths,notifychan,vec__32458,map__32459,map__32459__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32463 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32463,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32463,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32460,tolerance_paths,notifychan,vec__32458,map__32459,map__32459__$1,opts,path_marker_click_fn,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32460,tolerance_paths,notifychan,created_paths,vec__32458,map__32459,map__32459__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32464){var vec__32465 = p__32464;var k = cljs.core.nth.call(null,vec__32465,(0),null);var tolerance = cljs.core.nth.call(null,vec__32465,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32465,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32460,tolerance_paths,notifychan,created_paths,vec__32458,map__32459,map__32459__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32460,tolerance_paths,notifychan,created_paths,vec__32458,map__32459,map__32459__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32466 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32466,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32466,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32460,tolerance_paths,notifychan,created_paths,vec__32458,map__32459,map__32459__$1,opts,path_marker_click_fn,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__32467 = cljs.core.seq.call(null,delete_path_keys);var chunk__32468 = null;var count__32469 = (0);var i__32470 = (0);while(true){
if((i__32470 < count__32469))
{var k = cljs.core._nth.call(null,chunk__32468,i__32470);var temp__4124__auto___32473 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32473))
{var path_32474 = temp__4124__auto___32473;clustermap.components.map.delete_path.call(null,leaflet_map,path_32474);
} else
{}
{
var G__32475 = seq__32467;
var G__32476 = chunk__32468;
var G__32477 = count__32469;
var G__32478 = (i__32470 + (1));
seq__32467 = G__32475;
chunk__32468 = G__32476;
count__32469 = G__32477;
i__32470 = G__32478;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32467);if(temp__4126__auto__)
{var seq__32467__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32467__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32467__$1);{
var G__32479 = cljs.core.chunk_rest.call(null,seq__32467__$1);
var G__32480 = c__4408__auto__;
var G__32481 = cljs.core.count.call(null,c__4408__auto__);
var G__32482 = (0);
seq__32467 = G__32479;
chunk__32468 = G__32480;
count__32469 = G__32481;
i__32470 = G__32482;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32467__$1);var temp__4124__auto___32483 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32483))
{var path_32484 = temp__4124__auto___32483;clustermap.components.map.delete_path.call(null,leaflet_map,path_32484);
} else
{}
{
var G__32485 = cljs.core.next.call(null,seq__32467__$1);
var G__32486 = null;
var G__32487 = (0);
var G__32488 = (0);
seq__32467 = G__32485;
chunk__32468 = G__32486;
count__32469 = G__32487;
i__32470 = G__32488;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32460,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32458,map__32459,map__32459__$1,opts,path_marker_click_fn,filter_spec){
return (function (m,p__32471){var map__32472 = p__32471;var map__32472__$1 = ((cljs.core.seq_QMARK_.call(null,map__32472))?cljs.core.apply.call(null,cljs.core.hash_map,map__32472):map__32472);var path = map__32472__$1;var id = cljs.core.get.call(null,map__32472__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32460,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32458,map__32459,map__32459__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__32442 = null;if (arguments.length > 7) {
  p__32442 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32442);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__32489){
var comm = cljs.core.first(arglist__32489);
arglist__32489 = cljs.core.next(arglist__32489);
var fetch_boundarylines_fn = cljs.core.first(arglist__32489);
arglist__32489 = cljs.core.next(arglist__32489);
var leaflet_map = cljs.core.first(arglist__32489);
arglist__32489 = cljs.core.next(arglist__32489);
var paths_atom = cljs.core.first(arglist__32489);
arglist__32489 = cljs.core.next(arglist__32489);
var path_selections_atom = cljs.core.first(arglist__32489);
arglist__32489 = cljs.core.next(arglist__32489);
var new_path_highlights = cljs.core.first(arglist__32489);
arglist__32489 = cljs.core.next(arglist__32489);
var new_selection_paths = cljs.core.first(arglist__32489);
var p__32442 = cljs.core.rest(arglist__32489);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32442);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__32492){var vec__32493 = p__32492;var tz = cljs.core.nth.call(null,vec__32493,(0),null);var collection = cljs.core.nth.call(null,vec__32493,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__32494,owner){var map__32738 = p__32494;var map__32738__$1 = ((cljs.core.seq_QMARK_.call(null,map__32738))?cljs.core.apply.call(null,cljs.core.hash_map,map__32738):map__32738);var cursor_data = map__32738__$1;var map__32739 = cljs.core.get.call(null,map__32738__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32739__$1 = ((cljs.core.seq_QMARK_.call(null,map__32739))?cljs.core.apply.call(null,cljs.core.hash_map,map__32739):map__32739);var cursor = map__32739__$1;var data = cljs.core.get.call(null,map__32739__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__32739__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__32739__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32740 = cljs.core.get.call(null,map__32739__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32740__$1 = ((cljs.core.seq_QMARK_.call(null,map__32740))?cljs.core.apply.call(null,cljs.core.hash_map,map__32740):map__32740);var controls = map__32740__$1;var colorchooser = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var location = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"location","location",1815599388));var zoom = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var geohash_aggs = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var boundaryline_agg = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__32738__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__32738__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t32741 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32741 = (function (colorchooser,initial_bounds,map__32740,location,owner,data,zoom,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,map__32739,threshold_colors,bounds,map__32738,boundaryline_collection,show_points,link_click_fn,filter,geohash_aggs,point_data,p__32494,boundaryline_agg,meta32742){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.map__32740 = map__32740;
this.location = location;
this.owner = owner;
this.data = data;
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
this.map__32739 = map__32739;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.map__32738 = map__32738;
this.boundaryline_collection = boundaryline_collection;
this.show_points = show_points;
this.link_click_fn = link_click_fn;
this.filter = filter;
this.geohash_aggs = geohash_aggs;
this.point_data = point_data;
this.p__32494 = p__32494;
this.boundaryline_agg = boundaryline_agg;
this.meta32742 = meta32742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32741.cljs$lang$type = true;
clustermap.components.map.t32741.cljs$lang$ctorStr = "clustermap.components.map/t32741";
clustermap.components.map.t32741.cljs$lang$ctorPrWriter = ((function (map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t32741");
});})(map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32741.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t32741.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__32744 = om.core.get_state.call(null,self__.owner);var map__32744__$1 = ((cljs.core.seq_QMARK_.call(null,map__32744))?cljs.core.apply.call(null,cljs.core.hash_map,map__32744):map__32744);var map__32745 = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32745__$1 = ((cljs.core.seq_QMARK_.call(null,map__32745))?cljs.core.apply.call(null,cljs.core.hash_map,map__32745):map__32745);var path_selections = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32741.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32741.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$,p__32746,p__32747){var self__ = this;
var map__32748 = p__32746;var map__32748__$1 = ((cljs.core.seq_QMARK_.call(null,map__32748))?cljs.core.apply.call(null,cljs.core.hash_map,map__32748):map__32748);var next_cursor_data = map__32748__$1;var map__32749 = cljs.core.get.call(null,map__32748__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32749__$1 = ((cljs.core.seq_QMARK_.call(null,map__32749))?cljs.core.apply.call(null,cljs.core.hash_map,map__32749):map__32749);var next_cursor = map__32749__$1;var next_data = cljs.core.get.call(null,map__32749__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__32749__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__32749__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32750 = cljs.core.get.call(null,map__32749__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32750__$1 = ((cljs.core.seq_QMARK_.call(null,map__32750))?cljs.core.apply.call(null,cljs.core.hash_map,map__32750):map__32750);var next_colorchooser = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_boundaryline_fill_opacity = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575));var next_zoom = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_geohash_aggs = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var next_boundaryline_agg = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_location = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"location","location",1815599388));var next_show_points = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__32748__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__32748__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32751 = p__32747;var map__32751__$1 = ((cljs.core.seq_QMARK_.call(null,map__32751))?cljs.core.apply.call(null,cljs.core.hash_map,map__32751):map__32751);var map__32752 = cljs.core.get.call(null,map__32751__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32752__$1 = ((cljs.core.seq_QMARK_.call(null,map__32752))?cljs.core.apply.call(null,cljs.core.hash_map,map__32752):map__32752);var next_markers = cljs.core.get.call(null,map__32752__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__32752__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_geohash_markers = cljs.core.get.call(null,map__32752__$1,new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705));var next_paths = cljs.core.get.call(null,map__32752__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__32752__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__32751__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__32751__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__32751__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__32751__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__32751__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var fetch_geohash_agg_data_fn = cljs.core.get.call(null,map__32751__$1,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986));var this$__$1 = this;var map__32753 = om.core.get_shared.call(null,self__.owner);var map__32753__$1 = ((cljs.core.seq_QMARK_.call(null,map__32753))?cljs.core.apply.call(null,cljs.core.hash_map,map__32753):map__32753);var path_marker_click_fn = cljs.core.get.call(null,map__32753__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32753__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32753__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32753__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__32754 = om.core.get_state.call(null,self__.owner);var map__32754__$1 = ((cljs.core.seq_QMARK_.call(null,map__32754))?cljs.core.apply.call(null,cljs.core.hash_map,map__32754):map__32754);var map__32755 = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32755__$1 = ((cljs.core.seq_QMARK_.call(null,map__32755))?cljs.core.apply.call(null,cljs.core.hash_map,map__32755):map__32755);var path_selections = cljs.core.get.call(null,map__32755__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32755__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32755__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__32755__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__32755__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var zoom_changed = cljs.core.not_EQ_.call(null,next_zoom,self__.zoom);if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
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
{var c__9125__auto___32981 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32981,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32981,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32778){var state_val_32779 = (state_32778[(1)]);if((state_val_32779 === (5)))
{var inst_32776 = (state_32778[(2)]);var state_32778__$1 = state_32778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32778__$1,inst_32776);
} else
{if((state_val_32779 === (4)))
{var state_32778__$1 = state_32778;var statearr_32780_32982 = state_32778__$1;(statearr_32780_32982[(2)] = null);
(statearr_32780_32982[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32779 === (3)))
{var inst_32768 = (state_32778[(7)]);var inst_32770 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32771 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_32772 = (new cljs.core.PersistentVector(null,1,(5),inst_32770,inst_32771,null));var inst_32773 = om.core.update_BANG_.call(null,self__.cursor,inst_32772,inst_32768);var state_32778__$1 = state_32778;var statearr_32781_32983 = state_32778__$1;(statearr_32781_32983[(2)] = inst_32773);
(statearr_32781_32983[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32779 === (2)))
{var inst_32768 = (state_32778[(7)]);var inst_32768__$1 = (state_32778[(2)]);var state_32778__$1 = (function (){var statearr_32782 = state_32778;(statearr_32782[(7)] = inst_32768__$1);
return statearr_32782;
})();if(cljs.core.truth_(inst_32768__$1))
{var statearr_32783_32984 = state_32778__$1;(statearr_32783_32984[(1)] = (3));
} else
{var statearr_32784_32985 = state_32778__$1;(statearr_32784_32985[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32779 === (1)))
{var inst_32756 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32757 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32758 = leaflet_map.getZoom();var inst_32759 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_32758);var inst_32760 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32761 = om.core._value.call(null,next_filter);var inst_32762 = leaflet_map.getBounds();var inst_32763 = clustermap.components.map.bounds_array.call(null,inst_32762);var inst_32764 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32765 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32766 = fetch_aggregation_data_fn.call(null,inst_32756,inst_32757,inst_32759,inst_32760,inst_32761,inst_32763,inst_32764,inst_32765);var state_32778__$1 = state_32778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32778__$1,(2),inst_32766);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32981,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32981,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32788 = [null,null,null,null,null,null,null,null];(statearr_32788[(0)] = state_machine__9111__auto__);
(statearr_32788[(1)] = (1));
return statearr_32788;
});
var state_machine__9111__auto____1 = (function (state_32778){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32778);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32789){if((e32789 instanceof Object))
{var ex__9114__auto__ = e32789;var statearr_32790_32986 = state_32778;(statearr_32790_32986[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32778);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32789;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32987 = state_32778;
state_32778 = G__32987;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32778){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32981,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32791 = f__9126__auto__.call(null);(statearr_32791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32981);
return statearr_32791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32981,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
var c__9125__auto___32988 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32988,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32988,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32839){var state_val_32840 = (state_32839[(1)]);if((state_val_32840 === (7)))
{var inst_32806 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32807 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover","!total_funding"];var inst_32808 = (new cljs.core.PersistentVector(null,6,(5),inst_32806,inst_32807,null));var state_32839__$1 = state_32839;var statearr_32841_32989 = state_32839__$1;(statearr_32841_32989[(2)] = inst_32808);
(statearr_32841_32989[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32840 === (1)))
{var inst_32798 = (state_32839[(7)]);var inst_32792 = [new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.Keyword(null,"max-count","max-count",1539185305)];var inst_32793 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32794 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32795 = om.core._value.call(null,next_filter);var inst_32796 = leaflet_map.getBounds();var inst_32797 = clustermap.components.map.bounds_array.call(null,inst_32796);var inst_32798__$1 = new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971).cljs$core$IFn$_invoke$arity$1(next_location);var state_32839__$1 = (function (){var statearr_32842 = state_32839;(statearr_32842[(8)] = inst_32793);
(statearr_32842[(7)] = inst_32798__$1);
(statearr_32842[(9)] = inst_32794);
(statearr_32842[(10)] = inst_32797);
(statearr_32842[(11)] = inst_32795);
(statearr_32842[(12)] = inst_32792);
return statearr_32842;
})();if(cljs.core.truth_(inst_32798__$1))
{var statearr_32843_32990 = state_32839__$1;(statearr_32843_32990[(1)] = (3));
} else
{var statearr_32844_32991 = state_32839__$1;(statearr_32844_32991[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32840 === (4)))
{var state_32839__$1 = state_32839;var statearr_32845_32992 = state_32839__$1;(statearr_32845_32992[(2)] = "!location");
(statearr_32845_32992[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32840 === (13)))
{var state_32839__$1 = state_32839;var statearr_32846_32993 = state_32839__$1;(statearr_32846_32993[(2)] = null);
(statearr_32846_32993[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32840 === (6)))
{var inst_32803 = (state_32839[(13)]);var state_32839__$1 = state_32839;var statearr_32847_32994 = state_32839__$1;(statearr_32847_32994[(2)] = inst_32803);
(statearr_32847_32994[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32840 === (3)))
{var inst_32798 = (state_32839[(7)]);var state_32839__$1 = state_32839;var statearr_32848_32995 = state_32839__$1;(statearr_32848_32995[(2)] = inst_32798);
(statearr_32848_32995[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32840 === (12)))
{var inst_32829 = (state_32839[(14)]);var inst_32831 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32832 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_32833 = (new cljs.core.PersistentVector(null,1,(5),inst_32831,inst_32832,null));var inst_32834 = om.core.update_BANG_.call(null,self__.cursor,inst_32833,inst_32829);var state_32839__$1 = state_32839;var statearr_32849_32996 = state_32839__$1;(statearr_32849_32996[(2)] = inst_32834);
(statearr_32849_32996[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32840 === (2)))
{var inst_32829 = (state_32839[(14)]);var inst_32829__$1 = (state_32839[(2)]);var state_32839__$1 = (function (){var statearr_32850 = state_32839;(statearr_32850[(14)] = inst_32829__$1);
return statearr_32850;
})();if(cljs.core.truth_(inst_32829__$1))
{var statearr_32851_32997 = state_32839__$1;(statearr_32851_32997[(1)] = (12));
} else
{var statearr_32852_32998 = state_32839__$1;(statearr_32852_32998[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32840 === (11)))
{var inst_32793 = (state_32839[(8)]);var inst_32802 = (state_32839[(15)]);var inst_32810 = (state_32839[(16)]);var inst_32794 = (state_32839[(9)]);var inst_32797 = (state_32839[(10)]);var inst_32795 = (state_32839[(11)]);var inst_32792 = (state_32839[(12)]);var inst_32824 = (state_32839[(2)]);var inst_32825 = [inst_32793,inst_32794,inst_32795,inst_32797,inst_32802,inst_32810,inst_32824,(1000)];var inst_32826 = cljs.core.PersistentHashMap.fromArrays(inst_32792,inst_32825);var inst_32827 = fetch_point_data_fn.call(null,inst_32826);var state_32839__$1 = state_32839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32839__$1,(2),inst_32827);
} else
{if((state_val_32840 === (9)))
{var inst_32811 = (state_32839[(17)]);var state_32839__$1 = state_32839;var statearr_32853_32999 = state_32839__$1;(statearr_32853_32999[(2)] = inst_32811);
(statearr_32853_32999[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32840 === (5)))
{var inst_32803 = (state_32839[(13)]);var inst_32802 = (state_32839[(2)]);var inst_32803__$1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(next_location);var state_32839__$1 = (function (){var statearr_32854 = state_32839;(statearr_32854[(13)] = inst_32803__$1);
(statearr_32854[(15)] = inst_32802);
return statearr_32854;
})();if(cljs.core.truth_(inst_32803__$1))
{var statearr_32855_33000 = state_32839__$1;(statearr_32855_33000[(1)] = (6));
} else
{var statearr_32856_33001 = state_32839__$1;(statearr_32856_33001[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32840 === (14)))
{var inst_32837 = (state_32839[(2)]);var state_32839__$1 = state_32839;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32839__$1,inst_32837);
} else
{if((state_val_32840 === (10)))
{var inst_32814 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32815 = ["!latest_turnvoer"];var inst_32816 = [new cljs.core.Keyword(null,"order","order",-1254677256)];var inst_32817 = ["desc"];var inst_32818 = cljs.core.PersistentHashMap.fromArrays(inst_32816,inst_32817);var inst_32819 = [inst_32818];var inst_32820 = cljs.core.PersistentHashMap.fromArrays(inst_32815,inst_32819);var inst_32821 = [inst_32820];var inst_32822 = (new cljs.core.PersistentVector(null,1,(5),inst_32814,inst_32821,null));var state_32839__$1 = state_32839;var statearr_32857_33002 = state_32839__$1;(statearr_32857_33002[(2)] = inst_32822);
(statearr_32857_33002[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32840 === (8)))
{var inst_32811 = (state_32839[(17)]);var inst_32810 = (state_32839[(2)]);var inst_32811__$1 = new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994).cljs$core$IFn$_invoke$arity$1(next_location);var state_32839__$1 = (function (){var statearr_32858 = state_32839;(statearr_32858[(17)] = inst_32811__$1);
(statearr_32858[(16)] = inst_32810);
return statearr_32858;
})();if(cljs.core.truth_(inst_32811__$1))
{var statearr_32859_33003 = state_32839__$1;(statearr_32859_33003[(1)] = (9));
} else
{var statearr_32860_33004 = state_32839__$1;(statearr_32860_33004[(1)] = (10));
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
}
}
}
});})(c__9125__auto___32988,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32988,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32864[(0)] = state_machine__9111__auto__);
(statearr_32864[(1)] = (1));
return statearr_32864;
});
var state_machine__9111__auto____1 = (function (state_32839){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32839);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32865){if((e32865 instanceof Object))
{var ex__9114__auto__ = e32865;var statearr_32866_33005 = state_32839;(statearr_32866_33005[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32839);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32865;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33006 = state_32839;
state_32839 = G__33006;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32839){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32988,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32867 = f__9126__auto__.call(null);(statearr_32867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32988);
return statearr_32867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32988,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___33007 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33007,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33007,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32881){var state_val_32882 = (state_32881[(1)]);if((state_val_32882 === (5)))
{var inst_32879 = (state_32881[(2)]);var state_32881__$1 = state_32881;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32881__$1,inst_32879);
} else
{if((state_val_32882 === (4)))
{var state_32881__$1 = state_32881;var statearr_32883_33008 = state_32881__$1;(statearr_32883_33008[(2)] = null);
(statearr_32883_33008[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32882 === (3)))
{var inst_32871 = (state_32881[(7)]);var inst_32873 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32874 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_32875 = (new cljs.core.PersistentVector(null,3,(5),inst_32873,inst_32874,null));var inst_32876 = om.core.update_BANG_.call(null,self__.cursor,inst_32875,inst_32871);var state_32881__$1 = state_32881;var statearr_32884_33009 = state_32881__$1;(statearr_32884_33009[(2)] = inst_32876);
(statearr_32884_33009[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32882 === (2)))
{var inst_32871 = (state_32881[(7)]);var inst_32871__$1 = (state_32881[(2)]);var state_32881__$1 = (function (){var statearr_32885 = state_32881;(statearr_32885[(7)] = inst_32871__$1);
return statearr_32885;
})();if(cljs.core.truth_(inst_32871__$1))
{var statearr_32886_33010 = state_32881__$1;(statearr_32886_33010[(1)] = (3));
} else
{var statearr_32887_33011 = state_32881__$1;(statearr_32887_33011[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32882 === (1)))
{var inst_32868 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32869 = fetch_geotag_data_fn.call(null,inst_32868);var state_32881__$1 = state_32881;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32881__$1,(2),inst_32869);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33007,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33007,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32891 = [null,null,null,null,null,null,null,null];(statearr_32891[(0)] = state_machine__9111__auto__);
(statearr_32891[(1)] = (1));
return statearr_32891;
});
var state_machine__9111__auto____1 = (function (state_32881){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32881);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32892){if((e32892 instanceof Object))
{var ex__9114__auto__ = e32892;var statearr_32893_33012 = state_32881;(statearr_32893_33012[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32881);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32892;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33013 = state_32881;
state_32881 = G__33013;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32881){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33007,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32894 = f__9126__auto__.call(null);(statearr_32894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33007);
return statearr_32894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33007,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___33014 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33014,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33014,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32913){var state_val_32914 = (state_32913[(1)]);if((state_val_32914 === (5)))
{var inst_32911 = (state_32913[(2)]);var state_32913__$1 = state_32913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32913__$1,inst_32911);
} else
{if((state_val_32914 === (4)))
{var state_32913__$1 = state_32913;var statearr_32915_33015 = state_32913__$1;(statearr_32915_33015[(2)] = null);
(statearr_32915_33015[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32914 === (3)))
{var inst_32902 = (state_32913[(7)]);var inst_32904 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32905 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_32906 = (new cljs.core.PersistentVector(null,3,(5),inst_32904,inst_32905,null));var inst_32907 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32902);var inst_32908 = om.core.update_BANG_.call(null,self__.cursor,inst_32906,inst_32907);var state_32913__$1 = state_32913;var statearr_32916_33016 = state_32913__$1;(statearr_32916_33016[(2)] = inst_32908);
(statearr_32916_33016[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32914 === (2)))
{var inst_32902 = (state_32913[(7)]);var inst_32902__$1 = (state_32913[(2)]);var state_32913__$1 = (function (){var statearr_32917 = state_32913;(statearr_32917[(7)] = inst_32902__$1);
return statearr_32917;
})();if(cljs.core.truth_(inst_32902__$1))
{var statearr_32918_33017 = state_32913__$1;(statearr_32918_33017[(1)] = (3));
} else
{var statearr_32919_33018 = state_32913__$1;(statearr_32919_33018[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32914 === (1)))
{var inst_32895 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32896 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32897 = [next_filter];var inst_32898 = cljs.core.PersistentHashMap.fromArrays(inst_32896,inst_32897);var inst_32899 = cljs.core.merge.call(null,inst_32895,inst_32898);var inst_32900 = fetch_geotag_agg_data_fn.call(null,inst_32899);var state_32913__$1 = state_32913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32913__$1,(2),inst_32900);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33014,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33014,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32923 = [null,null,null,null,null,null,null,null];(statearr_32923[(0)] = state_machine__9111__auto__);
(statearr_32923[(1)] = (1));
return statearr_32923;
});
var state_machine__9111__auto____1 = (function (state_32913){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32913);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32924){if((e32924 instanceof Object))
{var ex__9114__auto__ = e32924;var statearr_32925_33019 = state_32913;(statearr_32925_33019[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32913);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32924;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33020 = state_32913;
state_32913 = G__33020;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32913){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33014,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32926 = f__9126__auto__.call(null);(statearr_32926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33014);
return statearr_32926;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33014,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___33021 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33021,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33021,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32947){var state_val_32948 = (state_32947[(1)]);if((state_val_32948 === (5)))
{var inst_32945 = (state_32947[(2)]);var state_32947__$1 = state_32947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32947__$1,inst_32945);
} else
{if((state_val_32948 === (4)))
{var state_32947__$1 = state_32947;var statearr_32949_33022 = state_32947__$1;(statearr_32949_33022[(2)] = null);
(statearr_32949_33022[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32948 === (3)))
{var inst_32936 = (state_32947[(7)]);var inst_32938 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32939 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620)];var inst_32940 = (new cljs.core.PersistentVector(null,3,(5),inst_32938,inst_32939,null));var inst_32941 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32936);var inst_32942 = om.core.update_BANG_.call(null,self__.cursor,inst_32940,inst_32941);var state_32947__$1 = state_32947;var statearr_32950_33023 = state_32947__$1;(statearr_32950_33023[(2)] = inst_32942);
(statearr_32950_33023[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32948 === (2)))
{var inst_32936 = (state_32947[(7)]);var inst_32936__$1 = (state_32947[(2)]);var state_32947__$1 = (function (){var statearr_32951 = state_32947;(statearr_32951[(7)] = inst_32936__$1);
return statearr_32951;
})();if(cljs.core.truth_(inst_32936__$1))
{var statearr_32952_33024 = state_32947__$1;(statearr_32952_33024[(1)] = (3));
} else
{var statearr_32953_33025 = state_32947__$1;(statearr_32953_33025[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32948 === (1)))
{var inst_32927 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32928 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"precision","precision",-1175707478)];var inst_32929 = new cljs.core.Keyword(null,"precision-fn","precision-fn",1742300693).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32930 = inst_32929.call(null,next_zoom);var inst_32931 = [next_filter,next_bounds,inst_32930];var inst_32932 = cljs.core.PersistentHashMap.fromArrays(inst_32928,inst_32931);var inst_32933 = cljs.core.merge.call(null,inst_32927,inst_32932);var inst_32934 = fetch_geohash_agg_data_fn.call(null,inst_32933);var state_32947__$1 = state_32947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32947__$1,(2),inst_32934);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33021,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33021,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32957 = [null,null,null,null,null,null,null,null];(statearr_32957[(0)] = state_machine__9111__auto__);
(statearr_32957[(1)] = (1));
return statearr_32957;
});
var state_machine__9111__auto____1 = (function (state_32947){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32947);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32958){if((e32958 instanceof Object))
{var ex__9114__auto__ = e32958;var statearr_32959_33026 = state_32947;(statearr_32959_33026[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32947);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32958;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33027 = state_32947;
state_32947 = G__33027;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32947){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33021,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32960 = f__9126__auto__.call(null);(statearr_32960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33021);
return statearr_32960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33021,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var vec__32961_33028 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_33029 = cljs.core.nth.call(null,vec__32961_33028,(0),null);var selection_path_colours_33030 = cljs.core.nth.call(null,vec__32961_33028,(1),null);var update_paths_invocation_33031 = ((function (vec__32961_33028,new_threshold_colors_33029,selection_path_colours_33030,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_33030,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696),path_marker_click_fn,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),next_boundaryline_fill_opacity], null));
});})(vec__32961_33028,new_threshold_colors_33029,selection_path_colours_33030,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_33029,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_33029);
} else
{}
var temp__4126__auto___33032 = update_paths_invocation_33031.call(null);if(cljs.core.truth_(temp__4126__auto___33032))
{var notify_chan_33033 = temp__4126__auto___33032;var c__9125__auto___33034 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33034,notify_chan_33033,temp__4126__auto___33032,vec__32961_33028,new_threshold_colors_33029,selection_path_colours_33030,update_paths_invocation_33031,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33034,notify_chan_33033,temp__4126__auto___33032,vec__32961_33028,new_threshold_colors_33029,selection_path_colours_33030,update_paths_invocation_33031,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32966){var state_val_32967 = (state_32966[(1)]);if((state_val_32967 === (2)))
{var inst_32963 = (state_32966[(2)]);var inst_32964 = update_paths_invocation_33031.call(null);var state_32966__$1 = (function (){var statearr_32968 = state_32966;(statearr_32968[(7)] = inst_32963);
return statearr_32968;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32966__$1,inst_32964);
} else
{if((state_val_32967 === (1)))
{var state_32966__$1 = state_32966;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32966__$1,(2),notify_chan_33033);
} else
{return null;
}
}
});})(c__9125__auto___33034,notify_chan_33033,temp__4126__auto___33032,vec__32961_33028,new_threshold_colors_33029,selection_path_colours_33030,update_paths_invocation_33031,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33034,notify_chan_33033,temp__4126__auto___33032,vec__32961_33028,new_threshold_colors_33029,selection_path_colours_33030,update_paths_invocation_33031,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32972 = [null,null,null,null,null,null,null,null];(statearr_32972[(0)] = state_machine__9111__auto__);
(statearr_32972[(1)] = (1));
return statearr_32972;
});
var state_machine__9111__auto____1 = (function (state_32966){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32966);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32973){if((e32973 instanceof Object))
{var ex__9114__auto__ = e32973;var statearr_32974_33035 = state_32966;(statearr_32974_33035[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32966);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32973;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33036 = state_32966;
state_32966 = G__33036;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32966){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33034,notify_chan_33033,temp__4126__auto___33032,vec__32961_33028,new_threshold_colors_33029,selection_path_colours_33030,update_paths_invocation_33031,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32975 = f__9126__auto__.call(null);(statearr_32975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33034);
return statearr_32975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33034,notify_chan_33033,temp__4126__auto___33032,vec__32961_33028,new_threshold_colors_33029,selection_path_colours_33030,update_paths_invocation_33031,map__32753,map__32753__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32754,map__32754__$1,map__32755,map__32755__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32748,map__32748__$1,next_cursor_data,map__32749,map__32749__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32750,map__32750__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32751,map__32751__$1,map__32752,map__32752__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
});})(map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32741.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32741.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__32976 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__32976__$1 = ((cljs.core.seq_QMARK_.call(null,map__32976))?cljs.core.apply.call(null,cljs.core.hash_map,map__32976):map__32976);var map = map__32976__$1;var path = cljs.core.get.call(null,map__32976__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__32976__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32976__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__32977 = om.core.get_shared.call(null,self__.owner);var map__32977__$1 = ((cljs.core.seq_QMARK_.call(null,map__32977))?cljs.core.apply.call(null,cljs.core.hash_map,map__32977):map__32977);var path_marker_click_fn = cljs.core.get.call(null,map__32977__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32977__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32977__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32977__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
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
});})(node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
});})(node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__32978 = e;var G__32978__$1 = (((G__32978 == null))?null:G__32978.target);var G__32978__$2 = (((G__32978__$1 == null))?null:domina.attr.call(null,G__32978__$1,"data-boundaryline-id"));var G__32978__$3 = (((G__32978__$2 == null))?null:path_marker_click_fn.call(null,G__32978__$2));return G__32978__$3;
});})(node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__32976,map__32976__$1,map,path,markers,leaflet_map,map__32977,map__32977__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_2_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986),clustermap.api.geohash_grid_factory.call(null));
});})(map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32741.prototype.om$core$IRender$ = true;
clustermap.components.map.t32741.prototype.om$core$IRender$render$arity$1 = ((function (map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32743){var self__ = this;
var _32743__$1 = this;return self__.meta32742;
});})(map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32743,meta32742__$1){var self__ = this;
var _32743__$1 = this;return (new clustermap.components.map.t32741(self__.colorchooser,self__.initial_bounds,self__.map__32740,self__.location,self__.owner,self__.data,self__.zoom,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.cursor,self__.map__32739,self__.threshold_colors,self__.bounds,self__.map__32738,self__.boundaryline_collection,self__.show_points,self__.link_click_fn,self__.filter,self__.geohash_aggs,self__.point_data,self__.p__32494,self__.boundaryline_agg,meta32742__$1));
});})(map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t32741 = ((function (map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function __GT_t32741(colorchooser__$1,initial_bounds__$1,map__32740__$2,location__$1,owner__$1,data__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,map__32739__$2,threshold_colors__$1,bounds__$1,map__32738__$2,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,point_data__$1,p__32494__$1,boundaryline_agg__$1,meta32742){return (new clustermap.components.map.t32741(colorchooser__$1,initial_bounds__$1,map__32740__$2,location__$1,owner__$1,data__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,map__32739__$2,threshold_colors__$1,bounds__$1,map__32738__$2,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,point_data__$1,p__32494__$1,boundaryline_agg__$1,meta32742));
});})(map__32738,map__32738__$1,cursor_data,map__32739,map__32739__$1,cursor,data,point_data,boundaryline_collections,map__32740,map__32740__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t32741(colorchooser,initial_bounds,map__32740__$1,location,owner,data,zoom,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,map__32739__$1,threshold_colors,bounds,map__32738__$1,boundaryline_collection,show_points,link_click_fn,filter,geohash_aggs,point_data,p__32494,boundaryline_agg,null));
});
