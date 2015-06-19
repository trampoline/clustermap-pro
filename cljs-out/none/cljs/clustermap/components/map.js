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
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.last,longlats));var w = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,longlats));var n = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.last,longlats));var e = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__11540__auto__ = s;if(cljs.core.truth_(and__11540__auto__))
{var and__11540__auto____$1 = w;if(cljs.core.truth_(and__11540__auto____$1))
{var and__11540__auto____$2 = n;if(cljs.core.truth_(and__11540__auto____$2))
{return e;
} else
{return and__11540__auto____$2;
}
} else
{return and__11540__auto____$1;
}
} else
{return and__11540__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
clustermap.components.map.locate_map = (function locate_map(m,initial_bounds){return m.fitBounds(cljs.core.clj__GT_js.call(null,initial_bounds),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
});
clustermap.components.map.default_api_key = (function (){var or__11552__auto__ = (function (){var G__30344 = config;var G__30344__$1 = (((G__30344 == null))?null:G__30344.components);var G__30344__$2 = (((G__30344__$1 == null))?null:G__30344__$1.map);var G__30344__$3 = (((G__30344__$2 == null))?null:G__30344__$2.api_key);return G__30344__$3;
})();if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__30345){var map__30347 = p__30345;var map__30347__$1 = ((cljs.core.seq_QMARK_.call(null,map__30347))?cljs.core.apply.call(null,cljs.core.hash_map,map__30347):map__30347);var api_key = cljs.core.get.call(null,map__30347__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__30347__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__30347__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__30347__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
m.addLayer(lmcg);
if(zoom_control)
{m.addControl(zoom);
} else
{}
clustermap.components.map.locate_map.call(null,m,(function (){var or__11552__auto__ = bounds;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
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
pan_to_show.cljs$lang$applyTo = (function (arglist__30348){
var m = cljs.core.first(arglist__30348);
var all_bounds = cljs.core.rest(arglist__30348);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.render_marker_icon = (function render_marker_icon(p__30349,location_sites){var map__30351 = p__30349;var map__30351__$1 = ((cljs.core.seq_QMARK_.call(null,map__30351))?cljs.core.apply.call(null,cljs.core.hash_map,map__30351):map__30351);var location_spec = map__30351__$1;var marker_render_fn = cljs.core.get.call(null,map__30351__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));if((cljs.core.count.call(null,location_sites) > (1)))
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
} else
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
}
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(item_render_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"location-marker-popup-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__12290__auto__ = (function iter__30356(s__30357){return (new cljs.core.LazySeq(null,(function (){var s__30357__$1 = s__30357;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30357__$1);if(temp__4126__auto__)
{var s__30357__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30357__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__30357__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__30359 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__30358 = (0);while(true){
if((i__30358 < size__12289__auto__))
{var site = cljs.core._nth.call(null,c__12288__auto__,i__30358);cljs.core.chunk_append.call(null,b__30359,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))));
{
var G__30360 = (i__30358 + (1));
i__30358 = G__30360;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30359),iter__30356.call(null,cljs.core.chunk_rest.call(null,s__30357__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30359),null);
}
} else
{var site = cljs.core.first.call(null,s__30357__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))),iter__30356.call(null,cljs.core.rest.call(null,s__30357__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12290__auto__.call(null,location_sites);
})()))+"</ul>");
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__30361){var map__30366 = p__30361;var map__30366__$1 = ((cljs.core.seq_QMARK_.call(null,map__30366))?cljs.core.apply.call(null,cljs.core.hash_map,map__30366):map__30366);var map__30367 = cljs.core.get.call(null,map__30366__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__30367__$1 = ((cljs.core.seq_QMARK_.call(null,map__30367))?cljs.core.apply.call(null,cljs.core.hash_map,map__30367):map__30367);var location_spec = map__30367__$1;var item_click_fn = cljs.core.get.call(null,map__30367__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__30367__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__30367__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var temp__4124__auto__ = (function (){var G__30368 = location_sites;var G__30368__$1 = (((G__30368 == null))?null:cljs.core.first.call(null,G__30368));var G__30368__$2 = (((G__30368__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__30368__$1));var G__30368__$3 = (((G__30368__$2 == null))?null:cljs.core.reverse.call(null,G__30368__$2));var G__30368__$4 = (((G__30368__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__30368__$3));return G__30368__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__30366,map__30366__$1,map__30367,map__30367__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__30366,map__30366__$1,map__30367,map__30367__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);leaflet_marker.on("mouseover",((function (icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__30366,map__30366__$1,map__30367,map__30367__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (e){return leaflet_marker.openPopup();
});})(icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__30366,map__30366__$1,map__30367,map__30367__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
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
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__12492__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_30369_30370 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30369_30370,sb__12492__auto__,temp__4124__auto__,map__30366,map__30366__$1,map__30367,map__30367__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (x__12493__auto__){return sb__12492__auto__.append(x__12493__auto__);
});})(_STAR_print_fn_STAR_30369_30370,sb__12492__auto__,temp__4124__auto__,map__30366,map__30366__$1,map__30367,map__30367__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30369_30370;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12492__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__30371){var map__30377 = p__30371;var map__30377__$1 = ((cljs.core.seq_QMARK_.call(null,map__30377))?cljs.core.apply.call(null,cljs.core.hash_map,map__30377):map__30377);var marker = map__30377__$1;var click_handler_keys = cljs.core.get.call(null,map__30377__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__30377__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__30378 = cljs.core.seq.call(null,click_handler_keys);var chunk__30379 = null;var count__30380 = (0);var i__30381 = (0);while(true){
if((i__30381 < count__30380))
{var chk = cljs.core._nth.call(null,chunk__30379,i__30381);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__30382 = seq__30378;
var G__30383 = chunk__30379;
var G__30384 = count__30380;
var G__30385 = (i__30381 + (1));
seq__30378 = G__30382;
chunk__30379 = G__30383;
count__30380 = G__30384;
i__30381 = G__30385;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30378);if(temp__4126__auto__)
{var seq__30378__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30378__$1))
{var c__12321__auto__ = cljs.core.chunk_first.call(null,seq__30378__$1);{
var G__30386 = cljs.core.chunk_rest.call(null,seq__30378__$1);
var G__30387 = c__12321__auto__;
var G__30388 = cljs.core.count.call(null,c__12321__auto__);
var G__30389 = (0);
seq__30378 = G__30386;
chunk__30379 = G__30387;
count__30380 = G__30388;
i__30381 = G__30389;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__30378__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__30390 = cljs.core.next.call(null,seq__30378__$1);
var G__30391 = null;
var G__30392 = (0);
var G__30393 = (0);
seq__30378 = G__30390;
chunk__30379 = G__30391;
count__30380 = G__30392;
i__30381 = G__30393;
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
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__30394,location_sites,p__30395){var map__30399 = p__30394;var map__30399__$1 = ((cljs.core.seq_QMARK_.call(null,map__30399))?cljs.core.apply.call(null,cljs.core.hash_map,map__30399):map__30399);var marker = map__30399__$1;var click_handler_keys = cljs.core.get.call(null,map__30399__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__30399__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__30399__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__30400 = p__30395;var map__30400__$1 = ((cljs.core.seq_QMARK_.call(null,map__30400))?cljs.core.apply.call(null,cljs.core.hash_map,map__30400):map__30400);var map__30401 = cljs.core.get.call(null,map__30400__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__30401__$1 = ((cljs.core.seq_QMARK_.call(null,map__30401))?cljs.core.apply.call(null,cljs.core.hash_map,map__30401):map__30401);var location_spec = map__30401__$1;var item_click_fn = cljs.core.get.call(null,map__30401__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__30401__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__30401__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,popup,map__30399,map__30399__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__30400,map__30400__$1,map__30401,map__30401__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,popup,map__30399,map__30399__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__30400,map__30400__$1,map__30401,map__30401__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
leaflet_marker.setIcon(icon);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,item_render_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__30402){var map__30404 = p__30402;var map__30404__$1 = ((cljs.core.seq_QMARK_.call(null,map__30404))?cljs.core.apply.call(null,cljs.core.hash_map,map__30404):map__30404);var marker = map__30404__$1;var click_handler_keys = cljs.core.get.call(null,map__30404__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__30404__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__30404__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
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
,update_marker_keys));var ___$1 = (function (){var seq__30409 = cljs.core.seq.call(null,remove_marker_keys);var chunk__30410 = null;var count__30411 = (0);var i__30412 = (0);while(true){
if((i__30412 < count__30411))
{var k = cljs.core._nth.call(null,chunk__30410,i__30412);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__30413 = seq__30409;
var G__30414 = chunk__30410;
var G__30415 = count__30411;
var G__30416 = (i__30412 + (1));
seq__30409 = G__30413;
chunk__30410 = G__30414;
count__30411 = G__30415;
i__30412 = G__30416;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30409);if(temp__4126__auto__)
{var seq__30409__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30409__$1))
{var c__12321__auto__ = cljs.core.chunk_first.call(null,seq__30409__$1);{
var G__30417 = cljs.core.chunk_rest.call(null,seq__30409__$1);
var G__30418 = c__12321__auto__;
var G__30419 = cljs.core.count.call(null,c__12321__auto__);
var G__30420 = (0);
seq__30409 = G__30417;
chunk__30410 = G__30418;
count__30411 = G__30419;
i__30412 = G__30420;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__30409__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__30421 = cljs.core.next.call(null,seq__30409__$1);
var G__30422 = null;
var G__30423 = (0);
var G__30424 = (0);
seq__30409 = G__30421;
chunk__30410 = G__30422;
count__30411 = G__30423;
i__30412 = G__30424;
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
clustermap.components.map.marker_color_class = (function marker_color_class(n){var pred__30428 = cljs.core._EQ_;var expr__30429 = n;if(cljs.core.truth_(pred__30428.call(null,(0),expr__30429)))
{return "marker-cluster-small";
} else
{if(cljs.core.truth_(pred__30428.call(null,(1),expr__30429)))
{return "marker-cluster-medium";
} else
{if(cljs.core.truth_(pred__30428.call(null,(2),expr__30429)))
{return "marker-cluster-large";
} else
{return "marker-cluster-small";
}
}
}
});
clustermap.components.map.render_geotag_icon = (function render_geotag_icon(p__30431,geotag,geotag_agg){var map__30434 = p__30431;var map__30434__$1 = ((cljs.core.seq_QMARK_.call(null,map__30434))?cljs.core.apply.call(null,cljs.core.hash_map,map__30434):map__30434);var geotag_agg_spec = map__30434__$1;var colorchooser_fn = cljs.core.get.call(null,map__30434__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__30434__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geotag_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs30435 = icon_render_fn.call(null,geotag,geotag_agg);if(cljs.core.map_QMARK_.call(null,attrs30435))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs30435)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs30435))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geotag_marker_popup_content = (function render_geotag_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))))));
});
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__30436,geotag,geotag_agg){var map__30438 = p__30436;var map__30438__$1 = ((cljs.core.seq_QMARK_.call(null,map__30438))?cljs.core.apply.call(null,cljs.core.hash_map,map__30438):map__30438);var geotag_agg_spec = map__30438__$1;var click_fn = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__30438,map__30438__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__30438,map__30438__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__30439,p__30440,geotag,geotag_agg){var map__30443 = p__30439;var map__30443__$1 = ((cljs.core.seq_QMARK_.call(null,map__30443))?cljs.core.apply.call(null,cljs.core.hash_map,map__30443):map__30443);var geotag_agg_spec = map__30443__$1;var click_fn = cljs.core.get.call(null,map__30443__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__30443__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__30443__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__30444 = p__30440;var map__30444__$1 = ((cljs.core.seq_QMARK_.call(null,map__30444))?cljs.core.apply.call(null,cljs.core.hash_map,map__30444):map__30444);var marker = map__30444__$1;var click_handler_key = cljs.core.get.call(null,map__30444__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__30444__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_30445 = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var new_click_handler_key_30446 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_30445);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_30446);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__30447,points_showing_QMARK_){var map__30453 = p__30447;var map__30453__$1 = ((cljs.core.seq_QMARK_.call(null,map__30453))?cljs.core.apply.call(null,cljs.core.hash_map,map__30453):map__30453);var geotag_agg_spec = map__30453__$1;var geotag_agg_data = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geotag_agg_data):cljs.core.constantly.call(null,(1)));var geotag_agg_spec__$1 = cljs.core.assoc.call(null,geotag_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geotags_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,map__30453,map__30453__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(colorchooser_fn,geotag_agg_spec__$1,map__30453,map__30453__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__30453,map__30453__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__30453,map__30453__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_agg_data);var markers = cljs.core.deref.call(null,geotag_markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var show_at_zoom_fn__$1 = (function (){var or__11552__auto__ = show_at_zoom_fn;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return cljs.core.constantly.call(null,true);
}
})();var zoom = leaflet_map.getZoom();var latest_marker_keys = (cljs.core.truth_((function (){var or__11552__auto__ = points_showing_QMARK_;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return cljs.core.not.call(null,show_at_zoom_fn__$1.call(null,zoom));
}
})())?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__30453,map__30453__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__30453,map__30453__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__30453,map__30453__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__30453,map__30453__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__30454 = cljs.core.seq.call(null,remove_marker_keys);var chunk__30455 = null;var count__30456 = (0);var i__30457 = (0);while(true){
if((i__30457 < count__30456))
{var k = cljs.core._nth.call(null,chunk__30455,i__30457);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__30458 = seq__30454;
var G__30459 = chunk__30455;
var G__30460 = count__30456;
var G__30461 = (i__30457 + (1));
seq__30454 = G__30458;
chunk__30455 = G__30459;
count__30456 = G__30460;
i__30457 = G__30461;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30454);if(temp__4126__auto__)
{var seq__30454__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30454__$1))
{var c__12321__auto__ = cljs.core.chunk_first.call(null,seq__30454__$1);{
var G__30462 = cljs.core.chunk_rest.call(null,seq__30454__$1);
var G__30463 = c__12321__auto__;
var G__30464 = cljs.core.count.call(null,c__12321__auto__);
var G__30465 = (0);
seq__30454 = G__30462;
chunk__30455 = G__30463;
count__30456 = G__30464;
i__30457 = G__30465;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__30454__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__30466 = cljs.core.next.call(null,seq__30454__$1);
var G__30467 = null;
var G__30468 = (0);
var G__30469 = (0);
seq__30454 = G__30466;
chunk__30455 = G__30467;
count__30456 = G__30468;
i__30457 = G__30469;
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
clustermap.components.map.render_geohash_icon = (function render_geohash_icon(p__30470,geohash_agg){var map__30473 = p__30470;var map__30473__$1 = ((cljs.core.seq_QMARK_.call(null,map__30473))?cljs.core.apply.call(null,cljs.core.hash_map,map__30473):map__30473);var geohash_agg_spec = map__30473__$1;var colorchooser_fn = cljs.core.get.call(null,map__30473__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__30473__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geohash_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs30474 = icon_render_fn.call(null,geohash_agg);if(cljs.core.map_QMARK_.call(null,attrs30474))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs30474)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs30474))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geohash_marker_popup_content = (function render_geohash_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs30476 = content;if(cljs.core.map_QMARK_.call(null,attrs30476))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs30476)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs30476))+"</div>");
}
})())))));
});
/**
* we get bounds for the points contained in the geohash area, so take the
* center point as the marker point
*/
clustermap.components.map.geohash_center_point = (function geohash_center_point(p__30477){var map__30482 = p__30477;var map__30482__$1 = ((cljs.core.seq_QMARK_.call(null,map__30482))?cljs.core.apply.call(null,cljs.core.hash_map,map__30482):map__30482);var geohash_agg = map__30482__$1;var bounds = cljs.core.get.call(null,map__30482__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var vec__30483 = bounds;var vec__30484 = cljs.core.nth.call(null,vec__30483,(0),null);var south = cljs.core.nth.call(null,vec__30484,(0),null);var west = cljs.core.nth.call(null,vec__30484,(1),null);var vec__30485 = cljs.core.nth.call(null,vec__30483,(1),null);var north = cljs.core.nth.call(null,vec__30485,(0),null);var east = cljs.core.nth.call(null,vec__30485,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((south + north) / (2)),((west + east) / (2))], null);
});
clustermap.components.map.create_geohash_marker = (function create_geohash_marker(leaflet_map,p__30486,geohash_agg){var map__30488 = p__30486;var map__30488__$1 = ((cljs.core.seq_QMARK_.call(null,map__30488))?cljs.core.apply.call(null,cljs.core.hash_map,map__30488):map__30488);var geohash_agg_spec = map__30488__$1;var click_fn = cljs.core.get.call(null,map__30488__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__30488__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__30488__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__30488,map__30488__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__30488,map__30488__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geohash_marker = (function update_geohash_marker(leaflet_map,p__30489,p__30490,geohash_agg){var map__30493 = p__30489;var map__30493__$1 = ((cljs.core.seq_QMARK_.call(null,map__30493))?cljs.core.apply.call(null,cljs.core.hash_map,map__30493):map__30493);var geohash_agg_spec = map__30493__$1;var click_fn = cljs.core.get.call(null,map__30493__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__30493__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__30493__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__30494 = p__30490;var map__30494__$1 = ((cljs.core.seq_QMARK_.call(null,map__30494))?cljs.core.apply.call(null,cljs.core.hash_map,map__30494):map__30494);var marker = map__30494__$1;var click_handler_key = cljs.core.get.call(null,map__30494__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__30494__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var latlong_30495 = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon_30496 = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var new_click_handler_key_30497 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setLatLng(latlong_30495);
leaflet_marker.setIcon(icon_30496);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_30497);
return marker;
});
clustermap.components.map.update_geohash_markers = (function update_geohash_markers(leaflet_map,geohash_markers_atom,p__30498,points_showing_QMARK_){var map__30504 = p__30498;var map__30504__$1 = ((cljs.core.seq_QMARK_.call(null,map__30504))?cljs.core.apply.call(null,cljs.core.hash_map,map__30504):map__30504);var geohash_agg_spec = map__30504__$1;var geohash_agg_data = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620));var icon_render_fn = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geohash_agg_data):cljs.core.constantly.call(null,(1)));var geohash_agg_spec__$1 = cljs.core.assoc.call(null,geohash_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geohash_aggs_by_geohash = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,map__30504,map__30504__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (gha){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geohash-grid","geohash-grid",2001750091).cljs$core$IFn$_invoke$arity$1(gha),gha], null);
});})(colorchooser_fn,geohash_agg_spec__$1,map__30504,map__30504__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,geohash_agg_data));var markers = cljs.core.deref.call(null,geohash_markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var show_at_zoom_fn__$1 = (function (){var or__11552__auto__ = show_at_zoom_fn;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return cljs.core.constantly.call(null,true);
}
})();var zoom = leaflet_map.getZoom();var latest_marker_keys = (cljs.core.truth_((function (){var and__11540__auto__ = cljs.core.not.call(null,points_showing_QMARK_);if(and__11540__auto__)
{return show_at_zoom_fn__$1.call(null,zoom);
} else
{return and__11540__auto__;
}
})())?cljs.core.set.call(null,cljs.core.keys.call(null,geohash_aggs_by_geohash)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__30504,map__30504__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__30504,map__30504__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__30504,map__30504__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__30504,map__30504__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__30505 = cljs.core.seq.call(null,remove_marker_keys);var chunk__30506 = null;var count__30507 = (0);var i__30508 = (0);while(true){
if((i__30508 < count__30507))
{var k = cljs.core._nth.call(null,chunk__30506,i__30508);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__30509 = seq__30505;
var G__30510 = chunk__30506;
var G__30511 = count__30507;
var G__30512 = (i__30508 + (1));
seq__30505 = G__30509;
chunk__30506 = G__30510;
count__30507 = G__30511;
i__30508 = G__30512;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30505);if(temp__4126__auto__)
{var seq__30505__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30505__$1))
{var c__12321__auto__ = cljs.core.chunk_first.call(null,seq__30505__$1);{
var G__30513 = cljs.core.chunk_rest.call(null,seq__30505__$1);
var G__30514 = c__12321__auto__;
var G__30515 = cljs.core.count.call(null,c__12321__auto__);
var G__30516 = (0);
seq__30505 = G__30513;
chunk__30506 = G__30514;
count__30507 = G__30515;
i__30508 = G__30516;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__30505__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__30517 = cljs.core.next.call(null,seq__30505__$1);
var G__30518 = null;
var G__30519 = (0);
var G__30520 = (0);
seq__30505 = G__30517;
chunk__30506 = G__30518;
count__30507 = G__30519;
i__30508 = G__30520;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__30529 = cljs.core.js__GT_clj.call(null,envelope);var map__30529__$1 = ((cljs.core.seq_QMARK_.call(null,map__30529))?cljs.core.apply.call(null,cljs.core.hash_map,map__30529):map__30529);var clj_envelope = map__30529__$1;var vec__30530 = cljs.core.get.call(null,map__30529__$1,"coordinates");var vec__30531 = cljs.core.nth.call(null,vec__30530,(0),null);var vec__30532 = cljs.core.nth.call(null,vec__30531,(0),null);var miny0 = cljs.core.nth.call(null,vec__30532,(0),null);var minx0 = cljs.core.nth.call(null,vec__30532,(1),null);var vec__30533 = cljs.core.nth.call(null,vec__30531,(1),null);var maxy1 = cljs.core.nth.call(null,vec__30533,(0),null);var minx1 = cljs.core.nth.call(null,vec__30533,(1),null);var vec__30534 = cljs.core.nth.call(null,vec__30531,(2),null);var maxy2 = cljs.core.nth.call(null,vec__30534,(0),null);var maxx2 = cljs.core.nth.call(null,vec__30534,(1),null);var vec__30535 = cljs.core.nth.call(null,vec__30531,(3),null);var miny3 = cljs.core.nth.call(null,vec__30535,(0),null);var maxx3 = cljs.core.nth.call(null,vec__30535,(1),null);var vec__30536 = cljs.core.nth.call(null,vec__30531,(4),null);var miny4 = cljs.core.nth.call(null,vec__30536,(0),null);var minx4 = cljs.core.nth.call(null,vec__30536,(1),null);var inner = vec__30531;var coords = vec__30530;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__30537){var map__30539 = p__30537;var map__30539__$1 = ((cljs.core.seq_QMARK_.call(null,map__30539))?cljs.core.apply.call(null,cljs.core.hash_map,map__30539):map__30539);var fill_color = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__11540__auto__ = selected;if(cljs.core.truth_(and__11540__auto__))
{return highlighted;
} else
{return and__11540__auto__;
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
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__30540,p__30541){var map__30545 = p__30540;var map__30545__$1 = ((cljs.core.seq_QMARK_.call(null,map__30545))?cljs.core.apply.call(null,cljs.core.hash_map,map__30545):map__30545);var path_attrs = map__30545__$1;var selected = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__30546 = p__30541;var map__30547 = cljs.core.nth.call(null,vec__30546,(0),null);var map__30547__$1 = ((cljs.core.seq_QMARK_.call(null,map__30547))?cljs.core.apply.call(null,cljs.core.hash_map,map__30547):map__30547);var opts = map__30547__$1;var path_marker_click_fn = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("dblclick",((function (tolerance,bounds,leaflet_path,popup_content,map__30545,map__30545__$1,path_attrs,selected,vec__30546,map__30547,map__30547__$1,opts,path_marker_click_fn,filter_spec){
return (function (e){leaflet_map.fitBounds(leaflet_path.getBounds());
if(cljs.core.truth_(path_marker_click_fn))
{return path_marker_click_fn.call(null,boundaryline_id);
} else
{return null;
}
});})(tolerance,bounds,leaflet_path,popup_content,map__30545,map__30545__$1,path_attrs,selected,vec__30546,map__30547,map__30547__$1,opts,path_marker_click_fn,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__30540,var_args){
var p__30541 = null;if (arguments.length > 5) {
  p__30541 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__30540,p__30541);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__30548){
var comm = cljs.core.first(arglist__30548);
arglist__30548 = cljs.core.next(arglist__30548);
var leaflet_map = cljs.core.first(arglist__30548);
arglist__30548 = cljs.core.next(arglist__30548);
var boundaryline_id = cljs.core.first(arglist__30548);
arglist__30548 = cljs.core.next(arglist__30548);
var js_boundaryline = cljs.core.first(arglist__30548);
arglist__30548 = cljs.core.next(arglist__30548);
var p__30540 = cljs.core.first(arglist__30548);
var p__30541 = cljs.core.rest(arglist__30548);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__30540,p__30541);
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
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__30549){var vec__30552 = p__30549;var map__30553 = cljs.core.nth.call(null,vec__30552,(0),null);var map__30553__$1 = ((cljs.core.seq_QMARK_.call(null,map__30553))?cljs.core.apply.call(null,cljs.core.hash_map,map__30553):map__30553);var opts = map__30553__$1;var filter_spec = cljs.core.get.call(null,map__30553__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__30549 = null;if (arguments.length > 6) {
  p__30549 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__30549);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__30554){
var comm = cljs.core.first(arglist__30554);
arglist__30554 = cljs.core.next(arglist__30554);
var leaflet_map = cljs.core.first(arglist__30554);
arglist__30554 = cljs.core.next(arglist__30554);
var boundaryline_id = cljs.core.first(arglist__30554);
arglist__30554 = cljs.core.next(arglist__30554);
var tolerance = cljs.core.first(arglist__30554);
arglist__30554 = cljs.core.next(arglist__30554);
var js_boundaryline = cljs.core.first(arglist__30554);
arglist__30554 = cljs.core.next(arglist__30554);
var path_attrs = cljs.core.first(arglist__30554);
var p__30549 = cljs.core.rest(arglist__30554);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__30549);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__30555){var vec__30558 = p__30555;var map__30559 = cljs.core.nth.call(null,vec__30558,(0),null);var map__30559__$1 = ((cljs.core.seq_QMARK_.call(null,map__30559))?cljs.core.apply.call(null,cljs.core.hash_map,map__30559):map__30559);var opts = map__30559__$1;var filter_spec = cljs.core.get.call(null,map__30559__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__30555 = null;if (arguments.length > 6) {
  p__30555 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__30555);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__30560){
var comm = cljs.core.first(arglist__30560);
arglist__30560 = cljs.core.next(arglist__30560);
var leaflet_map = cljs.core.first(arglist__30560);
arglist__30560 = cljs.core.next(arglist__30560);
var boundaryline_id = cljs.core.first(arglist__30560);
arglist__30560 = cljs.core.next(arglist__30560);
var old_path = cljs.core.first(arglist__30560);
arglist__30560 = cljs.core.next(arglist__30560);
var js_boundaryline = cljs.core.first(arglist__30560);
arglist__30560 = cljs.core.next(arglist__30560);
var path_attrs = cljs.core.first(arglist__30560);
var p__30555 = cljs.core.rest(arglist__30560);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__30555);
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
var update_path__delegate = function (comm,leaflet_map,p__30561,tolerance,js_boundaryline,path_attrs,p__30562){var map__30566 = p__30561;var map__30566__$1 = ((cljs.core.seq_QMARK_.call(null,map__30566))?cljs.core.apply.call(null,cljs.core.hash_map,map__30566):map__30566);var path = map__30566__$1;var boundaryline_id = cljs.core.get.call(null,map__30566__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__30567 = p__30562;var map__30568 = cljs.core.nth.call(null,vec__30567,(0),null);var map__30568__$1 = ((cljs.core.seq_QMARK_.call(null,map__30568))?cljs.core.apply.call(null,cljs.core.hash_map,map__30568):map__30568);var opts = map__30568__$1;var filter_spec = cljs.core.get.call(null,map__30568__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
};
var update_path = function (comm,leaflet_map,p__30561,tolerance,js_boundaryline,path_attrs,var_args){
var p__30562 = null;if (arguments.length > 6) {
  p__30562 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__30561,tolerance,js_boundaryline,path_attrs,p__30562);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__30569){
var comm = cljs.core.first(arglist__30569);
arglist__30569 = cljs.core.next(arglist__30569);
var leaflet_map = cljs.core.first(arglist__30569);
arglist__30569 = cljs.core.next(arglist__30569);
var p__30561 = cljs.core.first(arglist__30569);
arglist__30569 = cljs.core.next(arglist__30569);
var tolerance = cljs.core.first(arglist__30569);
arglist__30569 = cljs.core.next(arglist__30569);
var js_boundaryline = cljs.core.first(arglist__30569);
arglist__30569 = cljs.core.next(arglist__30569);
var path_attrs = cljs.core.first(arglist__30569);
var p__30562 = cljs.core.rest(arglist__30569);
return update_path__delegate(comm,leaflet_map,p__30561,tolerance,js_boundaryline,path_attrs,p__30562);
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
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__30570){var vec__30586 = p__30570;var map__30587 = cljs.core.nth.call(null,vec__30586,(0),null);var map__30587__$1 = ((cljs.core.seq_QMARK_.call(null,map__30587))?cljs.core.apply.call(null,cljs.core.hash_map,map__30587):map__30587);var opts = map__30587__$1;var path_marker_click_fn = cljs.core.get.call(null,map__30587__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__30587__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__30588 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__30588,(0),null);var notifychan = cljs.core.nth.call(null,vec__30588,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__30588,tolerance_paths,notifychan,vec__30586,map__30587,map__30587__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__30589){var vec__30590 = p__30589;var k = cljs.core.nth.call(null,vec__30590,(0),null);var tolerance = cljs.core.nth.call(null,vec__30590,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__30590,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__30588,tolerance_paths,notifychan,vec__30586,map__30587,map__30587__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__30588,tolerance_paths,notifychan,vec__30586,map__30587,map__30587__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__30591 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__30591,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__30591,(1),null);if(cljs.core.truth_((function (){var and__11540__auto__ = k;if(cljs.core.truth_(and__11540__auto__))
{var and__11540__auto____$1 = tolerance;if(cljs.core.truth_(and__11540__auto____$1))
{return js_boundaryline;
} else
{return and__11540__auto____$1;
}
} else
{return and__11540__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__30588,tolerance_paths,notifychan,vec__30586,map__30587,map__30587__$1,opts,path_marker_click_fn,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__30588,tolerance_paths,notifychan,created_paths,vec__30586,map__30587,map__30587__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__30592){var vec__30593 = p__30592;var k = cljs.core.nth.call(null,vec__30593,(0),null);var tolerance = cljs.core.nth.call(null,vec__30593,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__30593,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__30588,tolerance_paths,notifychan,created_paths,vec__30586,map__30587,map__30587__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__30588,tolerance_paths,notifychan,created_paths,vec__30586,map__30587,map__30587__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__30594 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__30594,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__30594,(1),null);if(cljs.core.truth_((function (){var and__11540__auto__ = k;if(cljs.core.truth_(and__11540__auto__))
{var and__11540__auto____$1 = tolerance;if(cljs.core.truth_(and__11540__auto____$1))
{return js_boundaryline;
} else
{return and__11540__auto____$1;
}
} else
{return and__11540__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__30588,tolerance_paths,notifychan,created_paths,vec__30586,map__30587,map__30587__$1,opts,path_marker_click_fn,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__30595 = cljs.core.seq.call(null,delete_path_keys);var chunk__30596 = null;var count__30597 = (0);var i__30598 = (0);while(true){
if((i__30598 < count__30597))
{var k = cljs.core._nth.call(null,chunk__30596,i__30598);var temp__4124__auto___30601 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___30601))
{var path_30602 = temp__4124__auto___30601;clustermap.components.map.delete_path.call(null,leaflet_map,path_30602);
} else
{}
{
var G__30603 = seq__30595;
var G__30604 = chunk__30596;
var G__30605 = count__30597;
var G__30606 = (i__30598 + (1));
seq__30595 = G__30603;
chunk__30596 = G__30604;
count__30597 = G__30605;
i__30598 = G__30606;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30595);if(temp__4126__auto__)
{var seq__30595__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30595__$1))
{var c__12321__auto__ = cljs.core.chunk_first.call(null,seq__30595__$1);{
var G__30607 = cljs.core.chunk_rest.call(null,seq__30595__$1);
var G__30608 = c__12321__auto__;
var G__30609 = cljs.core.count.call(null,c__12321__auto__);
var G__30610 = (0);
seq__30595 = G__30607;
chunk__30596 = G__30608;
count__30597 = G__30609;
i__30598 = G__30610;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__30595__$1);var temp__4124__auto___30611 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___30611))
{var path_30612 = temp__4124__auto___30611;clustermap.components.map.delete_path.call(null,leaflet_map,path_30612);
} else
{}
{
var G__30613 = cljs.core.next.call(null,seq__30595__$1);
var G__30614 = null;
var G__30615 = (0);
var G__30616 = (0);
seq__30595 = G__30613;
chunk__30596 = G__30614;
count__30597 = G__30615;
i__30598 = G__30616;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__30588,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__30586,map__30587,map__30587__$1,opts,path_marker_click_fn,filter_spec){
return (function (m,p__30599){var map__30600 = p__30599;var map__30600__$1 = ((cljs.core.seq_QMARK_.call(null,map__30600))?cljs.core.apply.call(null,cljs.core.hash_map,map__30600):map__30600);var path = map__30600__$1;var id = cljs.core.get.call(null,map__30600__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__30588,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__30586,map__30587,map__30587__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__30570 = null;if (arguments.length > 7) {
  p__30570 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__30570);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__30617){
var comm = cljs.core.first(arglist__30617);
arglist__30617 = cljs.core.next(arglist__30617);
var fetch_boundarylines_fn = cljs.core.first(arglist__30617);
arglist__30617 = cljs.core.next(arglist__30617);
var leaflet_map = cljs.core.first(arglist__30617);
arglist__30617 = cljs.core.next(arglist__30617);
var paths_atom = cljs.core.first(arglist__30617);
arglist__30617 = cljs.core.next(arglist__30617);
var path_selections_atom = cljs.core.first(arglist__30617);
arglist__30617 = cljs.core.next(arglist__30617);
var new_path_highlights = cljs.core.first(arglist__30617);
arglist__30617 = cljs.core.next(arglist__30617);
var new_selection_paths = cljs.core.first(arglist__30617);
var p__30570 = cljs.core.rest(arglist__30617);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__30570);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__30620){var vec__30621 = p__30620;var tz = cljs.core.nth.call(null,vec__30621,(0),null);var collection = cljs.core.nth.call(null,vec__30621,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__30622,owner){var map__30824 = p__30622;var map__30824__$1 = ((cljs.core.seq_QMARK_.call(null,map__30824))?cljs.core.apply.call(null,cljs.core.hash_map,map__30824):map__30824);var cursor_data = map__30824__$1;var map__30825 = cljs.core.get.call(null,map__30824__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__30825__$1 = ((cljs.core.seq_QMARK_.call(null,map__30825))?cljs.core.apply.call(null,cljs.core.hash_map,map__30825):map__30825);var cursor = map__30825__$1;var data = cljs.core.get.call(null,map__30825__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__30825__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__30825__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__30826 = cljs.core.get.call(null,map__30825__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30826__$1 = ((cljs.core.seq_QMARK_.call(null,map__30826))?cljs.core.apply.call(null,cljs.core.hash_map,map__30826):map__30826);var controls = map__30826__$1;var colorchooser = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var location = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"location","location",1815599388));var zoom = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var geohash_aggs = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var boundaryline_agg = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__30824__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__30824__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t30827 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t30827 = (function (colorchooser,initial_bounds,location,owner,data,zoom,map__30824,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,p__30622,link_click_fn,map__30825,filter,map__30826,geohash_aggs,point_data,boundaryline_agg,meta30828){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.location = location;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.map__30824 = map__30824;
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
this.p__30622 = p__30622;
this.link_click_fn = link_click_fn;
this.map__30825 = map__30825;
this.filter = filter;
this.map__30826 = map__30826;
this.geohash_aggs = geohash_aggs;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.meta30828 = meta30828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t30827.cljs$lang$type = true;
clustermap.components.map.t30827.cljs$lang$ctorStr = "clustermap.components.map/t30827";
clustermap.components.map.t30827.cljs$lang$ctorPrWriter = ((function (map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.map/t30827");
});})(map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t30827.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t30827.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__30830 = om.core.get_state.call(null,self__.owner);var map__30830__$1 = ((cljs.core.seq_QMARK_.call(null,map__30830))?cljs.core.apply.call(null,cljs.core.hash_map,map__30830):map__30830);var map__30831 = cljs.core.get.call(null,map__30830__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__30831__$1 = ((cljs.core.seq_QMARK_.call(null,map__30831))?cljs.core.apply.call(null,cljs.core.hash_map,map__30831):map__30831);var path_selections = cljs.core.get.call(null,map__30831__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__30831__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__30831__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__30831__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t30827.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t30827.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$,p__30832,p__30833){var self__ = this;
var map__30834 = p__30832;var map__30834__$1 = ((cljs.core.seq_QMARK_.call(null,map__30834))?cljs.core.apply.call(null,cljs.core.hash_map,map__30834):map__30834);var next_cursor_data = map__30834__$1;var map__30835 = cljs.core.get.call(null,map__30834__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__30835__$1 = ((cljs.core.seq_QMARK_.call(null,map__30835))?cljs.core.apply.call(null,cljs.core.hash_map,map__30835):map__30835);var next_cursor = map__30835__$1;var next_data = cljs.core.get.call(null,map__30835__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__30835__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__30835__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__30836 = cljs.core.get.call(null,map__30835__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30836__$1 = ((cljs.core.seq_QMARK_.call(null,map__30836))?cljs.core.apply.call(null,cljs.core.hash_map,map__30836):map__30836);var next_colorchooser = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_zoom = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_geohash_aggs = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var next_boundaryline_agg = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_location = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"location","location",1815599388));var next_show_points = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__30834__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__30834__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30837 = p__30833;var map__30837__$1 = ((cljs.core.seq_QMARK_.call(null,map__30837))?cljs.core.apply.call(null,cljs.core.hash_map,map__30837):map__30837);var map__30838 = cljs.core.get.call(null,map__30837__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__30838__$1 = ((cljs.core.seq_QMARK_.call(null,map__30838))?cljs.core.apply.call(null,cljs.core.hash_map,map__30838):map__30838);var next_markers = cljs.core.get.call(null,map__30838__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__30838__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_geohash_markers = cljs.core.get.call(null,map__30838__$1,new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705));var next_paths = cljs.core.get.call(null,map__30838__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__30838__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__30837__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__30837__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__30837__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__30837__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__30837__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var fetch_geohash_agg_data_fn = cljs.core.get.call(null,map__30837__$1,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986));var this$__$1 = this;var map__30839 = om.core.get_shared.call(null,self__.owner);var map__30839__$1 = ((cljs.core.seq_QMARK_.call(null,map__30839))?cljs.core.apply.call(null,cljs.core.hash_map,map__30839):map__30839);var path_marker_click_fn = cljs.core.get.call(null,map__30839__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__30839__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__30839__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__30839__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__30840 = om.core.get_state.call(null,self__.owner);var map__30840__$1 = ((cljs.core.seq_QMARK_.call(null,map__30840))?cljs.core.apply.call(null,cljs.core.hash_map,map__30840):map__30840);var map__30841 = cljs.core.get.call(null,map__30840__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__30841__$1 = ((cljs.core.seq_QMARK_.call(null,map__30841))?cljs.core.apply.call(null,cljs.core.hash_map,map__30841):map__30841);var path_selections = cljs.core.get.call(null,map__30841__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__30841__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__30841__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__30841__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__30841__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__30840__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__30840__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var zoom_changed = cljs.core.not_EQ_.call(null,next_zoom,self__.zoom);if(cljs.core.truth_((function (){var and__11540__auto__ = leaflet_map;if(cljs.core.truth_(and__11540__auto__))
{var and__11540__auto____$1 = next_zoom;if(cljs.core.truth_(and__11540__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_zoom,self__.zoom)) && (cljs.core.not_EQ_.call(null,next_zoom,leaflet_map.getZoom()));
} else
{return and__11540__auto____$1;
}
} else
{return and__11540__auto__;
}
})()))
{leaflet_map.setZoom(next_zoom);
} else
{}
if(cljs.core.truth_((function (){var and__11540__auto__ = leaflet_map;if(cljs.core.truth_(and__11540__auto__))
{var and__11540__auto____$1 = next_bounds;if(cljs.core.truth_(and__11540__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)) && (cljs.core.not_EQ_.call(null,next_bounds,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds())));
} else
{return and__11540__auto____$1;
}
} else
{return and__11540__auto__;
}
})()))
{leaflet_map.fitBounds(cljs.core.clj__GT_js.call(null,next_bounds));
} else
{}
if(cljs.core.truth_((function (){var and__11540__auto__ = leaflet_map;if(cljs.core.truth_(and__11540__auto__))
{var and__11540__auto____$1 = self__.boundaryline_collections;if(cljs.core.truth_(and__11540__auto____$1))
{return cljs.core.not_EQ_.call(null,next_boundaryline_collection,clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()));
} else
{return and__11540__auto____$1;
}
} else
{return and__11540__auto__;
}
})()))
{console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-collection",clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom())], null)));
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936)], null),clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()));
} else
{}
if(cljs.core.truth_((function (){var and__11540__auto__ = next_boundaryline_collection;if(cljs.core.truth_(and__11540__auto__))
{var and__11540__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__11540__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_boundaryline_agg,self__.boundaryline_agg)) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__11540__auto____$1;
}
} else
{return and__11540__auto__;
}
})()))
{var c__16733__auto___31025 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___31025,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___31025,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_30864){var state_val_30865 = (state_30864[(1)]);if((state_val_30865 === (5)))
{var inst_30862 = (state_30864[(2)]);var state_30864__$1 = state_30864;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30864__$1,inst_30862);
} else
{if((state_val_30865 === (4)))
{var state_30864__$1 = state_30864;var statearr_30866_31026 = state_30864__$1;(statearr_30866_31026[(2)] = null);
(statearr_30866_31026[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30865 === (3)))
{var inst_30854 = (state_30864[(7)]);var inst_30856 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30857 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_30858 = (new cljs.core.PersistentVector(null,1,(5),inst_30856,inst_30857,null));var inst_30859 = om.core.update_BANG_.call(null,self__.cursor,inst_30858,inst_30854);var state_30864__$1 = state_30864;var statearr_30867_31027 = state_30864__$1;(statearr_30867_31027[(2)] = inst_30859);
(statearr_30867_31027[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30865 === (2)))
{var inst_30854 = (state_30864[(7)]);var inst_30854__$1 = (state_30864[(2)]);var state_30864__$1 = (function (){var statearr_30868 = state_30864;(statearr_30868[(7)] = inst_30854__$1);
return statearr_30868;
})();if(cljs.core.truth_(inst_30854__$1))
{var statearr_30869_31028 = state_30864__$1;(statearr_30869_31028[(1)] = (3));
} else
{var statearr_30870_31029 = state_30864__$1;(statearr_30870_31029[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30865 === (1)))
{var inst_30842 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_30843 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_30844 = leaflet_map.getZoom();var inst_30845 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_30844);var inst_30846 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_30847 = om.core._value.call(null,next_filter);var inst_30848 = leaflet_map.getBounds();var inst_30849 = clustermap.components.map.bounds_array.call(null,inst_30848);var inst_30850 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_30851 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_30852 = fetch_aggregation_data_fn.call(null,inst_30842,inst_30843,inst_30845,inst_30846,inst_30847,inst_30849,inst_30850,inst_30851);var state_30864__$1 = state_30864;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30864__$1,(2),inst_30852);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto___31025,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__16718__auto__,c__16733__auto___31025,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_30874 = [null,null,null,null,null,null,null,null];(statearr_30874[(0)] = state_machine__16719__auto__);
(statearr_30874[(1)] = (1));
return statearr_30874;
});
var state_machine__16719__auto____1 = (function (state_30864){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_30864);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e30875){if((e30875 instanceof Object))
{var ex__16722__auto__ = e30875;var statearr_30876_31030 = state_30864;(statearr_30876_31030[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30864);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30875;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31031 = state_30864;
state_30864 = G__31031;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_30864){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_30864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___31025,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__16735__auto__ = (function (){var statearr_30877 = f__16734__auto__.call(null);(statearr_30877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___31025);
return statearr_30877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___31025,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
var c__16733__auto___31032 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___31032,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___31032,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_30898){var state_val_30899 = (state_30898[(1)]);if((state_val_30899 === (5)))
{var inst_30896 = (state_30898[(2)]);var state_30898__$1 = state_30898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30898__$1,inst_30896);
} else
{if((state_val_30899 === (4)))
{var state_30898__$1 = state_30898;var statearr_30900_31033 = state_30898__$1;(statearr_30900_31033[(2)] = null);
(statearr_30900_31033[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30899 === (3)))
{var inst_30888 = (state_30898[(7)]);var inst_30890 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30891 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_30892 = (new cljs.core.PersistentVector(null,1,(5),inst_30890,inst_30891,null));var inst_30893 = om.core.update_BANG_.call(null,self__.cursor,inst_30892,inst_30888);var state_30898__$1 = state_30898;var statearr_30901_31034 = state_30898__$1;(statearr_30901_31034[(2)] = inst_30893);
(statearr_30901_31034[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30899 === (2)))
{var inst_30888 = (state_30898[(7)]);var inst_30888__$1 = (state_30898[(2)]);var state_30898__$1 = (function (){var statearr_30902 = state_30898;(statearr_30902[(7)] = inst_30888__$1);
return statearr_30902;
})();if(cljs.core.truth_(inst_30888__$1))
{var statearr_30903_31035 = state_30898__$1;(statearr_30903_31035[(1)] = (3));
} else
{var statearr_30904_31036 = state_30898__$1;(statearr_30904_31036[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30899 === (1)))
{var inst_30878 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_30879 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_30880 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30881 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover","!total_funding"];var inst_30882 = (new cljs.core.PersistentVector(null,6,(5),inst_30880,inst_30881,null));var inst_30883 = om.core._value.call(null,next_filter);var inst_30884 = leaflet_map.getBounds();var inst_30885 = clustermap.components.map.bounds_array.call(null,inst_30884);var inst_30886 = fetch_point_data_fn.call(null,inst_30878,inst_30879,"!postcode",inst_30882,(1000),inst_30883,inst_30885);var state_30898__$1 = state_30898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30898__$1,(2),inst_30886);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto___31032,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__16718__auto__,c__16733__auto___31032,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_30908 = [null,null,null,null,null,null,null,null];(statearr_30908[(0)] = state_machine__16719__auto__);
(statearr_30908[(1)] = (1));
return statearr_30908;
});
var state_machine__16719__auto____1 = (function (state_30898){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_30898);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e30909){if((e30909 instanceof Object))
{var ex__16722__auto__ = e30909;var statearr_30910_31037 = state_30898;(statearr_30910_31037[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30898);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30909;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31038 = state_30898;
state_30898 = G__31038;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_30898){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_30898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___31032,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__16735__auto__ = (function (){var statearr_30911 = f__16734__auto__.call(null);(statearr_30911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___31032);
return statearr_30911;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___31032,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__11540__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__11540__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__11540__auto__;
}
})()))
{var c__16733__auto___31039 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___31039,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___31039,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_30925){var state_val_30926 = (state_30925[(1)]);if((state_val_30926 === (5)))
{var inst_30923 = (state_30925[(2)]);var state_30925__$1 = state_30925;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30925__$1,inst_30923);
} else
{if((state_val_30926 === (4)))
{var state_30925__$1 = state_30925;var statearr_30927_31040 = state_30925__$1;(statearr_30927_31040[(2)] = null);
(statearr_30927_31040[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30926 === (3)))
{var inst_30915 = (state_30925[(7)]);var inst_30917 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30918 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_30919 = (new cljs.core.PersistentVector(null,3,(5),inst_30917,inst_30918,null));var inst_30920 = om.core.update_BANG_.call(null,self__.cursor,inst_30919,inst_30915);var state_30925__$1 = state_30925;var statearr_30928_31041 = state_30925__$1;(statearr_30928_31041[(2)] = inst_30920);
(statearr_30928_31041[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30926 === (2)))
{var inst_30915 = (state_30925[(7)]);var inst_30915__$1 = (state_30925[(2)]);var state_30925__$1 = (function (){var statearr_30929 = state_30925;(statearr_30929[(7)] = inst_30915__$1);
return statearr_30929;
})();if(cljs.core.truth_(inst_30915__$1))
{var statearr_30930_31042 = state_30925__$1;(statearr_30930_31042[(1)] = (3));
} else
{var statearr_30931_31043 = state_30925__$1;(statearr_30931_31043[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30926 === (1)))
{var inst_30912 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_30913 = fetch_geotag_data_fn.call(null,inst_30912);var state_30925__$1 = state_30925;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30925__$1,(2),inst_30913);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto___31039,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__16718__auto__,c__16733__auto___31039,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_30935 = [null,null,null,null,null,null,null,null];(statearr_30935[(0)] = state_machine__16719__auto__);
(statearr_30935[(1)] = (1));
return statearr_30935;
});
var state_machine__16719__auto____1 = (function (state_30925){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_30925);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e30936){if((e30936 instanceof Object))
{var ex__16722__auto__ = e30936;var statearr_30937_31044 = state_30925;(statearr_30937_31044[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30925);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30936;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31045 = state_30925;
state_30925 = G__31045;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_30925){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_30925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___31039,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__16735__auto__ = (function (){var statearr_30938 = f__16734__auto__.call(null);(statearr_30938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___31039);
return statearr_30938;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___31039,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__11540__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__11540__auto__))
{var and__11540__auto____$1 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);if(cljs.core.truth_(and__11540__auto____$1))
{var and__11540__auto____$2 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs).call(null,next_zoom);if(cljs.core.truth_(and__11540__auto____$2))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs))) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__11540__auto____$2;
}
} else
{return and__11540__auto____$1;
}
} else
{return and__11540__auto__;
}
})()))
{var c__16733__auto___31046 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___31046,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___31046,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_30957){var state_val_30958 = (state_30957[(1)]);if((state_val_30958 === (5)))
{var inst_30955 = (state_30957[(2)]);var state_30957__$1 = state_30957;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30957__$1,inst_30955);
} else
{if((state_val_30958 === (4)))
{var state_30957__$1 = state_30957;var statearr_30959_31047 = state_30957__$1;(statearr_30959_31047[(2)] = null);
(statearr_30959_31047[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30958 === (3)))
{var inst_30946 = (state_30957[(7)]);var inst_30948 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30949 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_30950 = (new cljs.core.PersistentVector(null,3,(5),inst_30948,inst_30949,null));var inst_30951 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_30946);var inst_30952 = om.core.update_BANG_.call(null,self__.cursor,inst_30950,inst_30951);var state_30957__$1 = state_30957;var statearr_30960_31048 = state_30957__$1;(statearr_30960_31048[(2)] = inst_30952);
(statearr_30960_31048[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30958 === (2)))
{var inst_30946 = (state_30957[(7)]);var inst_30946__$1 = (state_30957[(2)]);var state_30957__$1 = (function (){var statearr_30961 = state_30957;(statearr_30961[(7)] = inst_30946__$1);
return statearr_30961;
})();if(cljs.core.truth_(inst_30946__$1))
{var statearr_30962_31049 = state_30957__$1;(statearr_30962_31049[(1)] = (3));
} else
{var statearr_30963_31050 = state_30957__$1;(statearr_30963_31050[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30958 === (1)))
{var inst_30939 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_30940 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_30941 = [next_filter];var inst_30942 = cljs.core.PersistentHashMap.fromArrays(inst_30940,inst_30941);var inst_30943 = cljs.core.merge.call(null,inst_30939,inst_30942);var inst_30944 = fetch_geotag_agg_data_fn.call(null,inst_30943);var state_30957__$1 = state_30957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30957__$1,(2),inst_30944);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto___31046,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__16718__auto__,c__16733__auto___31046,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_30967 = [null,null,null,null,null,null,null,null];(statearr_30967[(0)] = state_machine__16719__auto__);
(statearr_30967[(1)] = (1));
return statearr_30967;
});
var state_machine__16719__auto____1 = (function (state_30957){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_30957);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e30968){if((e30968 instanceof Object))
{var ex__16722__auto__ = e30968;var statearr_30969_31051 = state_30957;(statearr_30969_31051[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30957);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30968;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31052 = state_30957;
state_30957 = G__31052;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_30957){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_30957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___31046,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__16735__auto__ = (function (){var statearr_30970 = f__16734__auto__.call(null);(statearr_30970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___31046);
return statearr_30970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___31046,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__11540__auto__ = next_bounds;if(cljs.core.truth_(and__11540__auto__))
{var and__11540__auto____$1 = next_geohash_aggs;if(cljs.core.truth_(and__11540__auto____$1))
{var and__11540__auto____$2 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);if(cljs.core.truth_(and__11540__auto____$2))
{var and__11540__auto____$3 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs).call(null,next_zoom);if(cljs.core.truth_(and__11540__auto____$3))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs))) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__11540__auto____$3;
}
} else
{return and__11540__auto____$2;
}
} else
{return and__11540__auto____$1;
}
} else
{return and__11540__auto__;
}
})()))
{var c__16733__auto___31053 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___31053,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___31053,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_30991){var state_val_30992 = (state_30991[(1)]);if((state_val_30992 === (5)))
{var inst_30989 = (state_30991[(2)]);var state_30991__$1 = state_30991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30991__$1,inst_30989);
} else
{if((state_val_30992 === (4)))
{var state_30991__$1 = state_30991;var statearr_30993_31054 = state_30991__$1;(statearr_30993_31054[(2)] = null);
(statearr_30993_31054[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30992 === (3)))
{var inst_30980 = (state_30991[(7)]);var inst_30982 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30983 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620)];var inst_30984 = (new cljs.core.PersistentVector(null,3,(5),inst_30982,inst_30983,null));var inst_30985 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_30980);var inst_30986 = om.core.update_BANG_.call(null,self__.cursor,inst_30984,inst_30985);var state_30991__$1 = state_30991;var statearr_30994_31055 = state_30991__$1;(statearr_30994_31055[(2)] = inst_30986);
(statearr_30994_31055[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30992 === (2)))
{var inst_30980 = (state_30991[(7)]);var inst_30980__$1 = (state_30991[(2)]);var state_30991__$1 = (function (){var statearr_30995 = state_30991;(statearr_30995[(7)] = inst_30980__$1);
return statearr_30995;
})();if(cljs.core.truth_(inst_30980__$1))
{var statearr_30996_31056 = state_30991__$1;(statearr_30996_31056[(1)] = (3));
} else
{var statearr_30997_31057 = state_30991__$1;(statearr_30997_31057[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30992 === (1)))
{var inst_30971 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_30972 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"precision","precision",-1175707478)];var inst_30973 = new cljs.core.Keyword(null,"precision-fn","precision-fn",1742300693).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_30974 = inst_30973.call(null,next_zoom);var inst_30975 = [next_filter,next_bounds,inst_30974];var inst_30976 = cljs.core.PersistentHashMap.fromArrays(inst_30972,inst_30975);var inst_30977 = cljs.core.merge.call(null,inst_30971,inst_30976);var inst_30978 = fetch_geohash_agg_data_fn.call(null,inst_30977);var state_30991__$1 = state_30991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30991__$1,(2),inst_30978);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto___31053,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__16718__auto__,c__16733__auto___31053,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_31001 = [null,null,null,null,null,null,null,null];(statearr_31001[(0)] = state_machine__16719__auto__);
(statearr_31001[(1)] = (1));
return statearr_31001;
});
var state_machine__16719__auto____1 = (function (state_30991){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_30991);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e31002){if((e31002 instanceof Object))
{var ex__16722__auto__ = e31002;var statearr_31003_31058 = state_30991;(statearr_31003_31058[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30991);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31002;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31059 = state_30991;
state_30991 = G__31059;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_30991){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_30991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___31053,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__16735__auto__ = (function (){var statearr_31004 = f__16734__auto__.call(null);(statearr_31004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___31053);
return statearr_31004;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___31053,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__11540__auto__ = next_colorchooser;if(cljs.core.truth_(and__11540__auto__))
{var and__11540__auto____$1 = next_data;if(cljs.core.truth_(and__11540__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_data,self__.data)) || (cljs.core.not_EQ_.call(null,next_colorchooser,self__.colorchooser));
} else
{return and__11540__auto____$1;
}
} else
{return and__11540__auto__;
}
})()))
{var vec__31005_31060 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_31061 = cljs.core.nth.call(null,vec__31005_31060,(0),null);var selection_path_colours_31062 = cljs.core.nth.call(null,vec__31005_31060,(1),null);var update_paths_invocation_31063 = ((function (vec__31005_31060,new_threshold_colors_31061,selection_path_colours_31062,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_31062,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696),path_marker_click_fn], null));
});})(vec__31005_31060,new_threshold_colors_31061,selection_path_colours_31062,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_31061,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_31061);
} else
{}
var temp__4126__auto___31064 = update_paths_invocation_31063.call(null);if(cljs.core.truth_(temp__4126__auto___31064))
{var notify_chan_31065 = temp__4126__auto___31064;var c__16733__auto___31066 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___31066,notify_chan_31065,temp__4126__auto___31064,vec__31005_31060,new_threshold_colors_31061,selection_path_colours_31062,update_paths_invocation_31063,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___31066,notify_chan_31065,temp__4126__auto___31064,vec__31005_31060,new_threshold_colors_31061,selection_path_colours_31062,update_paths_invocation_31063,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_31010){var state_val_31011 = (state_31010[(1)]);if((state_val_31011 === (2)))
{var inst_31007 = (state_31010[(2)]);var inst_31008 = update_paths_invocation_31063.call(null);var state_31010__$1 = (function (){var statearr_31012 = state_31010;(statearr_31012[(7)] = inst_31007);
return statearr_31012;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31010__$1,inst_31008);
} else
{if((state_val_31011 === (1)))
{var state_31010__$1 = state_31010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31010__$1,(2),notify_chan_31065);
} else
{return null;
}
}
});})(c__16733__auto___31066,notify_chan_31065,temp__4126__auto___31064,vec__31005_31060,new_threshold_colors_31061,selection_path_colours_31062,update_paths_invocation_31063,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__16718__auto__,c__16733__auto___31066,notify_chan_31065,temp__4126__auto___31064,vec__31005_31060,new_threshold_colors_31061,selection_path_colours_31062,update_paths_invocation_31063,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_31016 = [null,null,null,null,null,null,null,null];(statearr_31016[(0)] = state_machine__16719__auto__);
(statearr_31016[(1)] = (1));
return statearr_31016;
});
var state_machine__16719__auto____1 = (function (state_31010){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_31010);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e31017){if((e31017 instanceof Object))
{var ex__16722__auto__ = e31017;var statearr_31018_31067 = state_31010;(statearr_31018_31067[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31010);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31017;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31068 = state_31010;
state_31010 = G__31068;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_31010){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_31010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___31066,notify_chan_31065,temp__4126__auto___31064,vec__31005_31060,new_threshold_colors_31061,selection_path_colours_31062,update_paths_invocation_31063,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__16735__auto__ = (function (){var statearr_31019 = f__16734__auto__.call(null);(statearr_31019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___31066);
return statearr_31019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___31066,notify_chan_31065,temp__4126__auto___31064,vec__31005_31060,new_threshold_colors_31061,selection_path_colours_31062,update_paths_invocation_31063,map__30839,map__30839__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__30840,map__30840__$1,map__30841,map__30841__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__30834,map__30834__$1,next_cursor_data,map__30835,map__30835__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__30836,map__30836__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__30837,map__30837__$1,map__30838,map__30838__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
});})(map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t30827.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t30827.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__31020 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__31020__$1 = ((cljs.core.seq_QMARK_.call(null,map__31020))?cljs.core.apply.call(null,cljs.core.hash_map,map__31020):map__31020);var map = map__31020__$1;var path = cljs.core.get.call(null,map__31020__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__31020__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__31020__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__31021 = om.core.get_shared.call(null,self__.owner);var map__31021__$1 = ((cljs.core.seq_QMARK_.call(null,map__31021))?cljs.core.apply.call(null,cljs.core.hash_map,map__31021):map__31021);var path_marker_click_fn = cljs.core.get.call(null,map__31021__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__31021__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__31021__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__31021__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
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
});})(node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
});})(node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__31022 = e;var G__31022__$1 = (((G__31022 == null))?null:G__31022.target);var G__31022__$2 = (((G__31022__$1 == null))?null:domina.attr.call(null,G__31022__$1,"data-boundaryline-id"));var G__31022__$3 = (((G__31022__$2 == null))?null:path_marker_click_fn.call(null,G__31022__$2));return G__31022__$3;
});})(node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__31020,map__31020__$1,map,path,markers,leaflet_map,map__31021,map__31021__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986),clustermap.api.geohash_grid_factory.call(null));
});})(map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t30827.prototype.om$core$IRender$ = true;
clustermap.components.map.t30827.prototype.om$core$IRender$render$arity$1 = ((function (map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t30827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_30829){var self__ = this;
var _30829__$1 = this;return self__.meta30828;
});})(map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t30827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_30829,meta30828__$1){var self__ = this;
var _30829__$1 = this;return (new clustermap.components.map.t30827(self__.colorchooser,self__.initial_bounds,self__.location,self__.owner,self__.data,self__.zoom,self__.map__30824,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.show_points,self__.p__30622,self__.link_click_fn,self__.map__30825,self__.filter,self__.map__30826,self__.geohash_aggs,self__.point_data,self__.boundaryline_agg,meta30828__$1));
});})(map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t30827 = ((function (map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function __GT_t30827(colorchooser__$1,initial_bounds__$1,location__$1,owner__$1,data__$1,zoom__$1,map__30824__$2,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,p__30622__$1,link_click_fn__$1,map__30825__$2,filter__$1,map__30826__$2,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta30828){return (new clustermap.components.map.t30827(colorchooser__$1,initial_bounds__$1,location__$1,owner__$1,data__$1,zoom__$1,map__30824__$2,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,p__30622__$1,link_click_fn__$1,map__30825__$2,filter__$1,map__30826__$2,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta30828));
});})(map__30824,map__30824__$1,cursor_data,map__30825,map__30825__$1,cursor,data,point_data,boundaryline_collections,map__30826,map__30826__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t30827(colorchooser,initial_bounds,location,owner,data,zoom,map__30824__$1,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,p__30622,link_click_fn,map__30825__$1,filter,map__30826__$1,geohash_aggs,point_data,boundaryline_agg,null));
});

//# sourceMappingURL=map.js.map