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
clustermap.components.map.default_api_key = (function (){var or__3639__auto__ = (function (){var G__31893 = config;var G__31893__$1 = (((G__31893 == null))?null:G__31893.components);var G__31893__$2 = (((G__31893__$1 == null))?null:G__31893__$1.map);var G__31893__$3 = (((G__31893__$2 == null))?null:G__31893__$2.api_key);return G__31893__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__31894){var map__31896 = p__31894;var map__31896__$1 = ((cljs.core.seq_QMARK_.call(null,map__31896))?cljs.core.apply.call(null,cljs.core.hash_map,map__31896):map__31896);var api_key = cljs.core.get.call(null,map__31896__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__31896__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__31896__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__31896__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__31897){
var m = cljs.core.first(arglist__31897);
var all_bounds = cljs.core.rest(arglist__31897);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__31902(s__31903){return (new cljs.core.LazySeq(null,(function (){var s__31903__$1 = s__31903;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31903__$1);if(temp__4126__auto__)
{var s__31903__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31903__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31903__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31905 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31904 = (0);while(true){
if((i__31904 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__31904);cljs.core.chunk_append.call(null,b__31905,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);var content = (cljs.core.truth_(path_fn)?path_fn.call(null,site):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(click_handler_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key], null),content], null):content)], null);
})()))));
{
var G__31906 = (i__31904 + (1));
i__31904 = G__31906;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31905),iter__31902.call(null,cljs.core.chunk_rest.call(null,s__31903__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31905),null);
}
} else
{var site = cljs.core.first.call(null,s__31903__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);var content = (cljs.core.truth_(path_fn)?path_fn.call(null,site):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(click_handler_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key], null),content], null):content)], null);
})()))),iter__31902.call(null,cljs.core.rest.call(null,s__31903__$2)));
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
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__31907){var map__31911 = p__31907;var map__31911__$1 = ((cljs.core.seq_QMARK_.call(null,map__31911))?cljs.core.apply.call(null,cljs.core.hash_map,map__31911):map__31911);var marker_click_fn = cljs.core.get.call(null,map__31911__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var temp__4124__auto__ = (function (){var G__31912 = location_sites;var G__31912__$1 = (((G__31912 == null))?null:cljs.core.first.call(null,G__31912));var G__31912__$2 = (((G__31912__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__31912__$1));var G__31912__$3 = (((G__31912__$2 == null))?null:cljs.core.reverse.call(null,G__31912__$2));var G__31912__$4 = (((G__31912__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__31912__$3));return G__31912__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(marker_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__31911,map__31911__$1,marker_click_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,marker_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__31911,map__31911__$1,marker_click_fn))
,location_sites)):null);popup.setContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
leaflet_marker_cluster_group.addLayer(leaflet_marker);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys)], null);
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_31913_31914 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31913_31914,sb__4579__auto__,temp__4124__auto__,map__31911,map__31911__$1,marker_click_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_31913_31914,sb__4579__auto__,temp__4124__auto__,map__31911,map__31911__$1,marker_click_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31913_31914;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__31915){var map__31921 = p__31915;var map__31921__$1 = ((cljs.core.seq_QMARK_.call(null,map__31921))?cljs.core.apply.call(null,cljs.core.hash_map,map__31921):map__31921);var marker = map__31921__$1;var click_handler_keys = cljs.core.get.call(null,map__31921__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31921__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__31922 = cljs.core.seq.call(null,click_handler_keys);var chunk__31923 = null;var count__31924 = (0);var i__31925 = (0);while(true){
if((i__31925 < count__31924))
{var chk = cljs.core._nth.call(null,chunk__31923,i__31925);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__31926 = seq__31922;
var G__31927 = chunk__31923;
var G__31928 = count__31924;
var G__31929 = (i__31925 + (1));
seq__31922 = G__31926;
chunk__31923 = G__31927;
count__31924 = G__31928;
i__31925 = G__31929;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31922);if(temp__4126__auto__)
{var seq__31922__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31922__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31922__$1);{
var G__31930 = cljs.core.chunk_rest.call(null,seq__31922__$1);
var G__31931 = c__4408__auto__;
var G__31932 = cljs.core.count.call(null,c__4408__auto__);
var G__31933 = (0);
seq__31922 = G__31930;
chunk__31923 = G__31931;
count__31924 = G__31932;
i__31925 = G__31933;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__31922__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__31934 = cljs.core.next.call(null,seq__31922__$1);
var G__31935 = null;
var G__31936 = (0);
var G__31937 = (0);
seq__31922 = G__31934;
chunk__31923 = G__31935;
count__31924 = G__31936;
i__31925 = G__31937;
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
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__31938,location,p__31939){var map__31942 = p__31938;var map__31942__$1 = ((cljs.core.seq_QMARK_.call(null,map__31942))?cljs.core.apply.call(null,cljs.core.hash_map,map__31942):map__31942);var marker = map__31942__$1;var click_handler_keys = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__31943 = p__31939;var map__31943__$1 = ((cljs.core.seq_QMARK_.call(null,map__31943))?cljs.core.apply.call(null,cljs.core.hash_map,map__31943):map__31943);var marker_click_fn = cljs.core.get.call(null,map__31943__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(marker_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (popup,map__31942,map__31942__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__31943,map__31943__$1,marker_click_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,marker_click_fn,ls))], null);
});})(popup,map__31942,map__31942__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__31943,map__31943__$1,marker_click_fn))
,location)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__31944){var map__31946 = p__31944;var map__31946__$1 = ((cljs.core.seq_QMARK_.call(null,map__31946))?cljs.core.apply.call(null,cljs.core.hash_map,map__31946):map__31946);var marker = map__31946__$1;var click_handler_keys = cljs.core.get.call(null,map__31946__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31946__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31946__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
if(cljs.core.truth_(leaflet_marker_cluster_group))
{leaflet_marker_cluster_group.removeLayer(leaflet_marker);
} else
{leaflet_map.removeLayer(leaflet_marker);
}
return null;
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,leaflet_marker_cluster_group,markers_atom,show_points,new_locations,p__31947){var map__31953 = p__31947;var map__31953__$1 = ((cljs.core.seq_QMARK_.call(null,map__31953))?cljs.core.apply.call(null,cljs.core.hash_map,map__31953):map__31953);var opts = map__31953__$1;var marker_click_fn = cljs.core.get.call(null,map__31953__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = (cljs.core.truth_(show_points)?cljs.core.set.call(null,cljs.core.keys.call(null,new_locations)):null);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,location_keys),location_keys], null)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,map__31953,map__31953__$1,opts,marker_click_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,map__31953,map__31953__$1,opts,marker_click_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__31953,map__31953__$1,opts,marker_click_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k),cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__31953,map__31953__$1,opts,marker_click_fn))
,update_marker_keys));var ___$1 = (function (){var seq__31954 = cljs.core.seq.call(null,remove_marker_keys);var chunk__31955 = null;var count__31956 = (0);var i__31957 = (0);while(true){
if((i__31957 < count__31956))
{var k = cljs.core._nth.call(null,chunk__31955,i__31957);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__31958 = seq__31954;
var G__31959 = chunk__31955;
var G__31960 = count__31956;
var G__31961 = (i__31957 + (1));
seq__31954 = G__31958;
chunk__31955 = G__31959;
count__31956 = G__31960;
i__31957 = G__31961;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31954);if(temp__4126__auto__)
{var seq__31954__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31954__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31954__$1);{
var G__31962 = cljs.core.chunk_rest.call(null,seq__31954__$1);
var G__31963 = c__4408__auto__;
var G__31964 = cljs.core.count.call(null,c__4408__auto__);
var G__31965 = (0);
seq__31954 = G__31962;
chunk__31955 = G__31963;
count__31956 = G__31964;
i__31957 = G__31965;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31954__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__31966 = cljs.core.next.call(null,seq__31954__$1);
var G__31967 = null;
var G__31968 = (0);
var G__31969 = (0);
seq__31954 = G__31966;
chunk__31955 = G__31967;
count__31956 = G__31968;
i__31957 = G__31969;
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
clustermap.components.map.render_geotag_marker_popup_content = (function render_geotag_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))))));
});
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__31970,geotag,geotag_agg){var map__31972 = p__31970;var map__31972__$1 = ((cljs.core.seq_QMARK_.call(null,map__31972))?cljs.core.apply.call(null,cljs.core.hash_map,map__31972):map__31972);var geotag_agg_spec = map__31972__$1;var click_fn = cljs.core.get.call(null,map__31972__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__31972__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31972__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,icon_render_fn.call(null,geotag,geotag_agg))))], null)));var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);popup.setContent(clustermap.components.map.render_geotag_marker_popup_content.call(null,click_handler_key,popup_render_fn.call(null,geotag,geotag_agg)));
leaflet_marker.bindPopup(popup);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__31973,p__31974,geotag,geotag_agg){var map__31977 = p__31973;var map__31977__$1 = ((cljs.core.seq_QMARK_.call(null,map__31977))?cljs.core.apply.call(null,cljs.core.hash_map,map__31977):map__31977);var geotag_aggs = map__31977__$1;var click_fn = cljs.core.get.call(null,map__31977__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__31977__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31977__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__31978 = p__31974;var map__31978__$1 = ((cljs.core.seq_QMARK_.call(null,map__31978))?cljs.core.apply.call(null,cljs.core.hash_map,map__31978):map__31978);var marker = map__31978__$1;var click_handler_key = cljs.core.get.call(null,map__31978__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31978__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_31979 = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,icon_render_fn.call(null,geotag,geotag_agg))))], null)));var popup_31980 = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var new_click_handler_key_31981 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_31979);
popup_31980.setContent(clustermap.components.map.render_geotag_marker_popup_content.call(null,new_click_handler_key_31981,popup_render_fn.call(null,geotag,geotag_agg)));
leaflet_marker.bindPopup(popup_31980);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_31981);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__31982,points_showing_QMARK_){var map__31988 = p__31982;var map__31988__$1 = ((cljs.core.seq_QMARK_.call(null,map__31988))?cljs.core.apply.call(null,cljs.core.hash_map,map__31988):map__31988);var geotag_agg_spec = map__31988__$1;var geotag_agg_data = cljs.core.get.call(null,map__31988__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__31988__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__31988__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31988__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var show_at_zoom_fn = cljs.core.get.call(null,map__31988__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var geotags_by_tag = cljs.core.reduce.call(null,((function (map__31988,map__31988__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(map__31988,map__31988__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (geotags_by_tag,map__31988,map__31988__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(geotags_by_tag,map__31988,map__31988__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
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
})())?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__31988,map__31988__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__31988,map__31988__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__31988,map__31988__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__31988,map__31988__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__31989 = cljs.core.seq.call(null,remove_marker_keys);var chunk__31990 = null;var count__31991 = (0);var i__31992 = (0);while(true){
if((i__31992 < count__31991))
{var k = cljs.core._nth.call(null,chunk__31990,i__31992);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__31993 = seq__31989;
var G__31994 = chunk__31990;
var G__31995 = count__31991;
var G__31996 = (i__31992 + (1));
seq__31989 = G__31993;
chunk__31990 = G__31994;
count__31991 = G__31995;
i__31992 = G__31996;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31989);if(temp__4126__auto__)
{var seq__31989__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31989__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31989__$1);{
var G__31997 = cljs.core.chunk_rest.call(null,seq__31989__$1);
var G__31998 = c__4408__auto__;
var G__31999 = cljs.core.count.call(null,c__4408__auto__);
var G__32000 = (0);
seq__31989 = G__31997;
chunk__31990 = G__31998;
count__31991 = G__31999;
i__31992 = G__32000;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31989__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32001 = cljs.core.next.call(null,seq__31989__$1);
var G__32002 = null;
var G__32003 = (0);
var G__32004 = (0);
seq__31989 = G__32001;
chunk__31990 = G__32002;
count__31991 = G__32003;
i__31992 = G__32004;
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
clustermap.components.map.render_geohash_marker_popup_content = (function render_geohash_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))))));
});
/**
* we get bounds for the points contained in the geohash area, so take the
* center point as the marker point
*/
clustermap.components.map.geohash_center_point = (function geohash_center_point(p__32005){var map__32010 = p__32005;var map__32010__$1 = ((cljs.core.seq_QMARK_.call(null,map__32010))?cljs.core.apply.call(null,cljs.core.hash_map,map__32010):map__32010);var geohash_agg = map__32010__$1;var bounds = cljs.core.get.call(null,map__32010__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var vec__32011 = bounds;var vec__32012 = cljs.core.nth.call(null,vec__32011,(0),null);var south = cljs.core.nth.call(null,vec__32012,(0),null);var west = cljs.core.nth.call(null,vec__32012,(1),null);var vec__32013 = cljs.core.nth.call(null,vec__32011,(1),null);var north = cljs.core.nth.call(null,vec__32013,(0),null);var east = cljs.core.nth.call(null,vec__32013,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((south + north) / (2)),((west + east) / (2))], null);
});
clustermap.components.map.create_geohash_marker = (function create_geohash_marker(leaflet_map,p__32014,geohash_agg){var map__32016 = p__32014;var map__32016__$1 = ((cljs.core.seq_QMARK_.call(null,map__32016))?cljs.core.apply.call(null,cljs.core.hash_map,map__32016):map__32016);var geohash_agg_spec = map__32016__$1;var click_fn = cljs.core.get.call(null,map__32016__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32016__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32016__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,icon_render_fn.call(null,geohash_agg))))], null)));var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);popup.setContent(clustermap.components.map.render_geohash_marker_popup_content.call(null,click_handler_key,popup_render_fn.call(null,geohash_agg)));
leaflet_marker.bindPopup(popup);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geohash_marker = (function update_geohash_marker(leaflet_map,p__32017,p__32018,geohash_agg){var map__32021 = p__32017;var map__32021__$1 = ((cljs.core.seq_QMARK_.call(null,map__32021))?cljs.core.apply.call(null,cljs.core.hash_map,map__32021):map__32021);var geohash_agg_spec = map__32021__$1;var click_fn = cljs.core.get.call(null,map__32021__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32021__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32021__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32022 = p__32018;var map__32022__$1 = ((cljs.core.seq_QMARK_.call(null,map__32022))?cljs.core.apply.call(null,cljs.core.hash_map,map__32022):map__32022);var marker = map__32022__$1;var click_handler_key = cljs.core.get.call(null,map__32022__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32022__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_32023 = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,icon_render_fn.call(null,geohash_agg))))], null)));var popup_32024 = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var new_click_handler_key_32025 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_32023);
popup_32024.setContent(clustermap.components.map.render_geohash_marker_popup_content.call(null,new_click_handler_key_32025,popup_render_fn.call(null,geohash_agg)));
leaflet_marker.bindPopup(popup_32024);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32025);
return marker;
});
clustermap.components.map.update_geohash_markers = (function update_geohash_markers(leaflet_map,geohash_markers_atom,p__32026,points_showing_QMARK_){var map__32032 = p__32026;var map__32032__$1 = ((cljs.core.seq_QMARK_.call(null,map__32032))?cljs.core.apply.call(null,cljs.core.hash_map,map__32032):map__32032);var geohash_agg_spec = map__32032__$1;var geohash_agg_data = cljs.core.get.call(null,map__32032__$1,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620));var icon_render_fn = cljs.core.get.call(null,map__32032__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var show_at_zoom_fn = cljs.core.get.call(null,map__32032__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var geohash_aggs_by_geohash = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__32032,map__32032__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn){
return (function (gha){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geohash-grid","geohash-grid",2001750091).cljs$core$IFn$_invoke$arity$1(gha),gha], null);
});})(map__32032,map__32032__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn))
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
})())?cljs.core.set.call(null,cljs.core.keys.call(null,geohash_aggs_by_geohash)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32032,map__32032__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geohash_marker.call(null,leaflet_map,geohash_agg_spec,cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32032,map__32032__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32032,map__32032__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geohash_marker.call(null,leaflet_map,geohash_agg_spec,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32032,map__32032__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32033 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32034 = null;var count__32035 = (0);var i__32036 = (0);while(true){
if((i__32036 < count__32035))
{var k = cljs.core._nth.call(null,chunk__32034,i__32036);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
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
{var k = cljs.core.first.call(null,seq__32033__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
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
})();return cljs.core.reset_BANG_.call(null,geohash_markers_atom,cljs.core.merge.call(null,updated_markers,new_markers));
});
/**
* turns a PostGIS envelope into leaflet bounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__32057 = cljs.core.js__GT_clj.call(null,envelope);var map__32057__$1 = ((cljs.core.seq_QMARK_.call(null,map__32057))?cljs.core.apply.call(null,cljs.core.hash_map,map__32057):map__32057);var clj_envelope = map__32057__$1;var vec__32058 = cljs.core.get.call(null,map__32057__$1,"coordinates");var vec__32059 = cljs.core.nth.call(null,vec__32058,(0),null);var vec__32060 = cljs.core.nth.call(null,vec__32059,(0),null);var miny0 = cljs.core.nth.call(null,vec__32060,(0),null);var minx0 = cljs.core.nth.call(null,vec__32060,(1),null);var vec__32061 = cljs.core.nth.call(null,vec__32059,(1),null);var maxy1 = cljs.core.nth.call(null,vec__32061,(0),null);var minx1 = cljs.core.nth.call(null,vec__32061,(1),null);var vec__32062 = cljs.core.nth.call(null,vec__32059,(2),null);var maxy2 = cljs.core.nth.call(null,vec__32062,(0),null);var maxx2 = cljs.core.nth.call(null,vec__32062,(1),null);var vec__32063 = cljs.core.nth.call(null,vec__32059,(3),null);var miny3 = cljs.core.nth.call(null,vec__32063,(0),null);var maxx3 = cljs.core.nth.call(null,vec__32063,(1),null);var vec__32064 = cljs.core.nth.call(null,vec__32059,(4),null);var miny4 = cljs.core.nth.call(null,vec__32064,(0),null);var minx4 = cljs.core.nth.call(null,vec__32064,(1),null);var inner = vec__32059;var coords = vec__32058;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__32065){var map__32067 = p__32065;var map__32067__$1 = ((cljs.core.seq_QMARK_.call(null,map__32067))?cljs.core.apply.call(null,cljs.core.hash_map,map__32067):map__32067);var fill_color = cljs.core.get.call(null,map__32067__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__32067__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__32067__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
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
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32068,p__32069){var map__32073 = p__32068;var map__32073__$1 = ((cljs.core.seq_QMARK_.call(null,map__32073))?cljs.core.apply.call(null,cljs.core.hash_map,map__32073):map__32073);var path_attrs = map__32073__$1;var selected = cljs.core.get.call(null,map__32073__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__32074 = p__32069;var map__32075 = cljs.core.nth.call(null,vec__32074,(0),null);var map__32075__$1 = ((cljs.core.seq_QMARK_.call(null,map__32075))?cljs.core.apply.call(null,cljs.core.hash_map,map__32075):map__32075);var opts = map__32075__$1;var filter_spec = cljs.core.get.call(null,map__32075__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,popup_content,map__32073,map__32073__$1,path_attrs,selected,vec__32074,map__32075,map__32075__$1,opts,filter_spec){
return (function (e){if(cljs.core.truth_(filter_spec))
{om.core.update_BANG_.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"boundaryline","boundaryline",95022712)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?boundarylines",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["boundaryline_id",boundaryline_id], null)], null)], null)], null));
} else
{}
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clustermap.components.map","path-click","clustermap.components.map/path-click",-1232736276),new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id], null));
});})(tolerance,bounds,leaflet_path,popup_content,map__32073,map__32073__$1,path_attrs,selected,vec__32074,map__32075,map__32075__$1,opts,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32068,var_args){
var p__32069 = null;if (arguments.length > 5) {
  p__32069 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__32068,p__32069);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__32076){
var comm = cljs.core.first(arglist__32076);
arglist__32076 = cljs.core.next(arglist__32076);
var leaflet_map = cljs.core.first(arglist__32076);
arglist__32076 = cljs.core.next(arglist__32076);
var boundaryline_id = cljs.core.first(arglist__32076);
arglist__32076 = cljs.core.next(arglist__32076);
var js_boundaryline = cljs.core.first(arglist__32076);
arglist__32076 = cljs.core.next(arglist__32076);
var p__32068 = cljs.core.first(arglist__32076);
var p__32069 = cljs.core.rest(arglist__32076);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__32068,p__32069);
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
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32077){var vec__32080 = p__32077;var map__32081 = cljs.core.nth.call(null,vec__32080,(0),null);var map__32081__$1 = ((cljs.core.seq_QMARK_.call(null,map__32081))?cljs.core.apply.call(null,cljs.core.hash_map,map__32081):map__32081);var opts = map__32081__$1;var filter_spec = cljs.core.get.call(null,map__32081__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__32077 = null;if (arguments.length > 6) {
  p__32077 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32077);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__32082){
var comm = cljs.core.first(arglist__32082);
arglist__32082 = cljs.core.next(arglist__32082);
var leaflet_map = cljs.core.first(arglist__32082);
arglist__32082 = cljs.core.next(arglist__32082);
var boundaryline_id = cljs.core.first(arglist__32082);
arglist__32082 = cljs.core.next(arglist__32082);
var tolerance = cljs.core.first(arglist__32082);
arglist__32082 = cljs.core.next(arglist__32082);
var js_boundaryline = cljs.core.first(arglist__32082);
arglist__32082 = cljs.core.next(arglist__32082);
var path_attrs = cljs.core.first(arglist__32082);
var p__32077 = cljs.core.rest(arglist__32082);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32077);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32083){var vec__32086 = p__32083;var map__32087 = cljs.core.nth.call(null,vec__32086,(0),null);var map__32087__$1 = ((cljs.core.seq_QMARK_.call(null,map__32087))?cljs.core.apply.call(null,cljs.core.hash_map,map__32087):map__32087);var opts = map__32087__$1;var filter_spec = cljs.core.get.call(null,map__32087__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__32083 = null;if (arguments.length > 6) {
  p__32083 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32083);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__32088){
var comm = cljs.core.first(arglist__32088);
arglist__32088 = cljs.core.next(arglist__32088);
var leaflet_map = cljs.core.first(arglist__32088);
arglist__32088 = cljs.core.next(arglist__32088);
var boundaryline_id = cljs.core.first(arglist__32088);
arglist__32088 = cljs.core.next(arglist__32088);
var old_path = cljs.core.first(arglist__32088);
arglist__32088 = cljs.core.next(arglist__32088);
var js_boundaryline = cljs.core.first(arglist__32088);
arglist__32088 = cljs.core.next(arglist__32088);
var path_attrs = cljs.core.first(arglist__32088);
var p__32083 = cljs.core.rest(arglist__32088);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32083);
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
var update_path__delegate = function (comm,leaflet_map,p__32089,tolerance,js_boundaryline,path_attrs,p__32090){var map__32094 = p__32089;var map__32094__$1 = ((cljs.core.seq_QMARK_.call(null,map__32094))?cljs.core.apply.call(null,cljs.core.hash_map,map__32094):map__32094);var path = map__32094__$1;var boundaryline_id = cljs.core.get.call(null,map__32094__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__32095 = p__32090;var map__32096 = cljs.core.nth.call(null,vec__32095,(0),null);var map__32096__$1 = ((cljs.core.seq_QMARK_.call(null,map__32096))?cljs.core.apply.call(null,cljs.core.hash_map,map__32096):map__32096);var opts = map__32096__$1;var filter_spec = cljs.core.get.call(null,map__32096__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
};
var update_path = function (comm,leaflet_map,p__32089,tolerance,js_boundaryline,path_attrs,var_args){
var p__32090 = null;if (arguments.length > 6) {
  p__32090 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__32089,tolerance,js_boundaryline,path_attrs,p__32090);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__32097){
var comm = cljs.core.first(arglist__32097);
arglist__32097 = cljs.core.next(arglist__32097);
var leaflet_map = cljs.core.first(arglist__32097);
arglist__32097 = cljs.core.next(arglist__32097);
var p__32089 = cljs.core.first(arglist__32097);
arglist__32097 = cljs.core.next(arglist__32097);
var tolerance = cljs.core.first(arglist__32097);
arglist__32097 = cljs.core.next(arglist__32097);
var js_boundaryline = cljs.core.first(arglist__32097);
arglist__32097 = cljs.core.next(arglist__32097);
var path_attrs = cljs.core.first(arglist__32097);
var p__32090 = cljs.core.rest(arglist__32097);
return update_path__delegate(comm,leaflet_map,p__32089,tolerance,js_boundaryline,path_attrs,p__32090);
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
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32098){var vec__32114 = p__32098;var map__32115 = cljs.core.nth.call(null,vec__32114,(0),null);var map__32115__$1 = ((cljs.core.seq_QMARK_.call(null,map__32115))?cljs.core.apply.call(null,cljs.core.hash_map,map__32115):map__32115);var opts = map__32115__$1;var filter_spec = cljs.core.get.call(null,map__32115__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__32116 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__32116,(0),null);var notifychan = cljs.core.nth.call(null,vec__32116,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32116,tolerance_paths,notifychan,vec__32114,map__32115,map__32115__$1,opts,filter_spec){
return (function (p__32117){var vec__32118 = p__32117;var k = cljs.core.nth.call(null,vec__32118,(0),null);var tolerance = cljs.core.nth.call(null,vec__32118,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32118,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32116,tolerance_paths,notifychan,vec__32114,map__32115,map__32115__$1,opts,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32116,tolerance_paths,notifychan,vec__32114,map__32115,map__32115__$1,opts,filter_spec){
return (function (k){var vec__32119 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32119,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32119,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32116,tolerance_paths,notifychan,vec__32114,map__32115,map__32115__$1,opts,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32116,tolerance_paths,notifychan,created_paths,vec__32114,map__32115,map__32115__$1,opts,filter_spec){
return (function (p__32120){var vec__32121 = p__32120;var k = cljs.core.nth.call(null,vec__32121,(0),null);var tolerance = cljs.core.nth.call(null,vec__32121,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32121,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32116,tolerance_paths,notifychan,created_paths,vec__32114,map__32115,map__32115__$1,opts,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32116,tolerance_paths,notifychan,created_paths,vec__32114,map__32115,map__32115__$1,opts,filter_spec){
return (function (k){var vec__32122 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32122,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32122,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32116,tolerance_paths,notifychan,created_paths,vec__32114,map__32115,map__32115__$1,opts,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__32123 = cljs.core.seq.call(null,delete_path_keys);var chunk__32124 = null;var count__32125 = (0);var i__32126 = (0);while(true){
if((i__32126 < count__32125))
{var k = cljs.core._nth.call(null,chunk__32124,i__32126);var temp__4124__auto___32129 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32129))
{var path_32130 = temp__4124__auto___32129;clustermap.components.map.delete_path.call(null,leaflet_map,path_32130);
} else
{}
{
var G__32131 = seq__32123;
var G__32132 = chunk__32124;
var G__32133 = count__32125;
var G__32134 = (i__32126 + (1));
seq__32123 = G__32131;
chunk__32124 = G__32132;
count__32125 = G__32133;
i__32126 = G__32134;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32123);if(temp__4126__auto__)
{var seq__32123__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32123__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32123__$1);{
var G__32135 = cljs.core.chunk_rest.call(null,seq__32123__$1);
var G__32136 = c__4408__auto__;
var G__32137 = cljs.core.count.call(null,c__4408__auto__);
var G__32138 = (0);
seq__32123 = G__32135;
chunk__32124 = G__32136;
count__32125 = G__32137;
i__32126 = G__32138;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32123__$1);var temp__4124__auto___32139 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32139))
{var path_32140 = temp__4124__auto___32139;clustermap.components.map.delete_path.call(null,leaflet_map,path_32140);
} else
{}
{
var G__32141 = cljs.core.next.call(null,seq__32123__$1);
var G__32142 = null;
var G__32143 = (0);
var G__32144 = (0);
seq__32123 = G__32141;
chunk__32124 = G__32142;
count__32125 = G__32143;
i__32126 = G__32144;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32116,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32114,map__32115,map__32115__$1,opts,filter_spec){
return (function (m,p__32127){var map__32128 = p__32127;var map__32128__$1 = ((cljs.core.seq_QMARK_.call(null,map__32128))?cljs.core.apply.call(null,cljs.core.hash_map,map__32128):map__32128);var path = map__32128__$1;var id = cljs.core.get.call(null,map__32128__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32116,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32114,map__32115,map__32115__$1,opts,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__32098 = null;if (arguments.length > 7) {
  p__32098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32098);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__32145){
var comm = cljs.core.first(arglist__32145);
arglist__32145 = cljs.core.next(arglist__32145);
var fetch_boundarylines_fn = cljs.core.first(arglist__32145);
arglist__32145 = cljs.core.next(arglist__32145);
var leaflet_map = cljs.core.first(arglist__32145);
arglist__32145 = cljs.core.next(arglist__32145);
var paths_atom = cljs.core.first(arglist__32145);
arglist__32145 = cljs.core.next(arglist__32145);
var path_selections_atom = cljs.core.first(arglist__32145);
arglist__32145 = cljs.core.next(arglist__32145);
var new_path_highlights = cljs.core.first(arglist__32145);
arglist__32145 = cljs.core.next(arglist__32145);
var new_selection_paths = cljs.core.first(arglist__32145);
var p__32098 = cljs.core.rest(arglist__32145);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32098);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__32148){var vec__32149 = p__32148;var tz = cljs.core.nth.call(null,vec__32149,(0),null);var collection = cljs.core.nth.call(null,vec__32149,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__32150,owner){var map__32352 = p__32150;var map__32352__$1 = ((cljs.core.seq_QMARK_.call(null,map__32352))?cljs.core.apply.call(null,cljs.core.hash_map,map__32352):map__32352);var cursor_data = map__32352__$1;var map__32353 = cljs.core.get.call(null,map__32352__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32353__$1 = ((cljs.core.seq_QMARK_.call(null,map__32353))?cljs.core.apply.call(null,cljs.core.hash_map,map__32353):map__32353);var cursor = map__32353__$1;var data = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32354 = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32354__$1 = ((cljs.core.seq_QMARK_.call(null,map__32354))?cljs.core.apply.call(null,cljs.core.hash_map,map__32354):map__32354);var controls = map__32354__$1;var colorchooser = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var geohash_aggs = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var boundaryline_agg = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__32352__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__32352__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t32355 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32355 = (function (colorchooser,initial_bounds,map__32353,owner,data,zoom,map__32354,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,geohash_aggs,point_data,map__32352,boundaryline_agg,p__32150,meta32356){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.map__32353 = map__32353;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.map__32354 = map__32354;
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
this.geohash_aggs = geohash_aggs;
this.point_data = point_data;
this.map__32352 = map__32352;
this.boundaryline_agg = boundaryline_agg;
this.p__32150 = p__32150;
this.meta32356 = meta32356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32355.cljs$lang$type = true;
clustermap.components.map.t32355.cljs$lang$ctorStr = "clustermap.components.map/t32355";
clustermap.components.map.t32355.cljs$lang$ctorPrWriter = ((function (map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t32355");
});})(map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32355.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t32355.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__32358 = om.core.get_state.call(null,self__.owner);var map__32358__$1 = ((cljs.core.seq_QMARK_.call(null,map__32358))?cljs.core.apply.call(null,cljs.core.hash_map,map__32358):map__32358);var map__32359 = cljs.core.get.call(null,map__32358__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32359__$1 = ((cljs.core.seq_QMARK_.call(null,map__32359))?cljs.core.apply.call(null,cljs.core.hash_map,map__32359):map__32359);var path_selections = cljs.core.get.call(null,map__32359__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32359__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32359__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32359__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32355.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32355.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$,p__32360,p__32361){var self__ = this;
var map__32362 = p__32360;var map__32362__$1 = ((cljs.core.seq_QMARK_.call(null,map__32362))?cljs.core.apply.call(null,cljs.core.hash_map,map__32362):map__32362);var next_cursor_data = map__32362__$1;var map__32363 = cljs.core.get.call(null,map__32362__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32363__$1 = ((cljs.core.seq_QMARK_.call(null,map__32363))?cljs.core.apply.call(null,cljs.core.hash_map,map__32363):map__32363);var next_cursor = map__32363__$1;var next_data = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32364 = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32364__$1 = ((cljs.core.seq_QMARK_.call(null,map__32364))?cljs.core.apply.call(null,cljs.core.hash_map,map__32364):map__32364);var next_colorchooser = cljs.core.get.call(null,map__32364__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__32364__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_zoom = cljs.core.get.call(null,map__32364__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__32364__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__32364__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__32364__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_geohash_aggs = cljs.core.get.call(null,map__32364__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var next_boundaryline_agg = cljs.core.get.call(null,map__32364__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_link_click_fn = cljs.core.get.call(null,map__32364__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var next_link_render_fn = cljs.core.get.call(null,map__32364__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var next_show_points = cljs.core.get.call(null,map__32364__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__32362__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__32362__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32365 = p__32361;var map__32365__$1 = ((cljs.core.seq_QMARK_.call(null,map__32365))?cljs.core.apply.call(null,cljs.core.hash_map,map__32365):map__32365);var map__32366 = cljs.core.get.call(null,map__32365__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32366__$1 = ((cljs.core.seq_QMARK_.call(null,map__32366))?cljs.core.apply.call(null,cljs.core.hash_map,map__32366):map__32366);var next_markers = cljs.core.get.call(null,map__32366__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__32366__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_geohash_markers = cljs.core.get.call(null,map__32366__$1,new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705));var next_paths = cljs.core.get.call(null,map__32366__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__32366__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__32365__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__32365__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__32365__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__32365__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__32365__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var fetch_geohash_agg_data_fn = cljs.core.get.call(null,map__32365__$1,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986));var this$__$1 = this;var map__32367 = om.core.get_shared.call(null,self__.owner);var map__32367__$1 = ((cljs.core.seq_QMARK_.call(null,map__32367))?cljs.core.apply.call(null,cljs.core.hash_map,map__32367):map__32367);var point_in_boundarylines_fn = cljs.core.get.call(null,map__32367__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32367__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32367__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__32368 = om.core.get_state.call(null,self__.owner);var map__32368__$1 = ((cljs.core.seq_QMARK_.call(null,map__32368))?cljs.core.apply.call(null,cljs.core.hash_map,map__32368):map__32368);var map__32369 = cljs.core.get.call(null,map__32368__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32369__$1 = ((cljs.core.seq_QMARK_.call(null,map__32369))?cljs.core.apply.call(null,cljs.core.hash_map,map__32369):map__32369);var path_selections = cljs.core.get.call(null,map__32369__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32369__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32369__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__32369__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__32369__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__32368__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__32368__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var zoom_changed = cljs.core.not_EQ_.call(null,next_zoom,self__.zoom);if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
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
{var c__9125__auto___32553 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32553,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32553,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32392){var state_val_32393 = (state_32392[(1)]);if((state_val_32393 === (5)))
{var inst_32390 = (state_32392[(2)]);var state_32392__$1 = state_32392;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32392__$1,inst_32390);
} else
{if((state_val_32393 === (4)))
{var state_32392__$1 = state_32392;var statearr_32394_32554 = state_32392__$1;(statearr_32394_32554[(2)] = null);
(statearr_32394_32554[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32393 === (3)))
{var inst_32382 = (state_32392[(7)]);var inst_32384 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32385 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_32386 = (new cljs.core.PersistentVector(null,1,(5),inst_32384,inst_32385,null));var inst_32387 = om.core.update_BANG_.call(null,self__.cursor,inst_32386,inst_32382);var state_32392__$1 = state_32392;var statearr_32395_32555 = state_32392__$1;(statearr_32395_32555[(2)] = inst_32387);
(statearr_32395_32555[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32393 === (2)))
{var inst_32382 = (state_32392[(7)]);var inst_32382__$1 = (state_32392[(2)]);var state_32392__$1 = (function (){var statearr_32396 = state_32392;(statearr_32396[(7)] = inst_32382__$1);
return statearr_32396;
})();if(cljs.core.truth_(inst_32382__$1))
{var statearr_32397_32556 = state_32392__$1;(statearr_32397_32556[(1)] = (3));
} else
{var statearr_32398_32557 = state_32392__$1;(statearr_32398_32557[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32393 === (1)))
{var inst_32370 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32371 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32372 = leaflet_map.getZoom();var inst_32373 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_32372);var inst_32374 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32375 = om.core._value.call(null,next_filter);var inst_32376 = leaflet_map.getBounds();var inst_32377 = clustermap.components.map.bounds_array.call(null,inst_32376);var inst_32378 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32379 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32380 = fetch_aggregation_data_fn.call(null,inst_32370,inst_32371,inst_32373,inst_32374,inst_32375,inst_32377,inst_32378,inst_32379);var state_32392__$1 = state_32392;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32392__$1,(2),inst_32380);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32553,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32553,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32402 = [null,null,null,null,null,null,null,null];(statearr_32402[(0)] = state_machine__9111__auto__);
(statearr_32402[(1)] = (1));
return statearr_32402;
});
var state_machine__9111__auto____1 = (function (state_32392){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32392);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32403){if((e32403 instanceof Object))
{var ex__9114__auto__ = e32403;var statearr_32404_32558 = state_32392;(statearr_32404_32558[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32392);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32403;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32559 = state_32392;
state_32392 = G__32559;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32392){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32553,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32405 = f__9126__auto__.call(null);(statearr_32405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32553);
return statearr_32405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32553,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
var c__9125__auto___32560 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32560,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32560,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32426){var state_val_32427 = (state_32426[(1)]);if((state_val_32427 === (5)))
{var inst_32424 = (state_32426[(2)]);var state_32426__$1 = state_32426;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32426__$1,inst_32424);
} else
{if((state_val_32427 === (4)))
{var state_32426__$1 = state_32426;var statearr_32428_32561 = state_32426__$1;(statearr_32428_32561[(2)] = null);
(statearr_32428_32561[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32427 === (3)))
{var inst_32416 = (state_32426[(7)]);var inst_32418 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32419 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_32420 = (new cljs.core.PersistentVector(null,1,(5),inst_32418,inst_32419,null));var inst_32421 = om.core.update_BANG_.call(null,self__.cursor,inst_32420,inst_32416);var state_32426__$1 = state_32426;var statearr_32429_32562 = state_32426__$1;(statearr_32429_32562[(2)] = inst_32421);
(statearr_32429_32562[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32427 === (2)))
{var inst_32416 = (state_32426[(7)]);var inst_32416__$1 = (state_32426[(2)]);var state_32426__$1 = (function (){var statearr_32430 = state_32426;(statearr_32430[(7)] = inst_32416__$1);
return statearr_32430;
})();if(cljs.core.truth_(inst_32416__$1))
{var statearr_32431_32563 = state_32426__$1;(statearr_32431_32563[(1)] = (3));
} else
{var statearr_32432_32564 = state_32426__$1;(statearr_32432_32564[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32427 === (1)))
{var inst_32406 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32407 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32408 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32409 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover"];var inst_32410 = (new cljs.core.PersistentVector(null,5,(5),inst_32408,inst_32409,null));var inst_32411 = om.core._value.call(null,next_filter);var inst_32412 = leaflet_map.getBounds();var inst_32413 = clustermap.components.map.bounds_array.call(null,inst_32412);var inst_32414 = fetch_point_data_fn.call(null,inst_32406,inst_32407,"!postcode",inst_32410,(1000),inst_32411,inst_32413);var state_32426__$1 = state_32426;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32426__$1,(2),inst_32414);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32560,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32560,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32436 = [null,null,null,null,null,null,null,null];(statearr_32436[(0)] = state_machine__9111__auto__);
(statearr_32436[(1)] = (1));
return statearr_32436;
});
var state_machine__9111__auto____1 = (function (state_32426){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32426);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32437){if((e32437 instanceof Object))
{var ex__9114__auto__ = e32437;var statearr_32438_32565 = state_32426;(statearr_32438_32565[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32426);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32437;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32566 = state_32426;
state_32426 = G__32566;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32426){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32560,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32439 = f__9126__auto__.call(null);(statearr_32439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32560);
return statearr_32439;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32560,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32567 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32567,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32567,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32453){var state_val_32454 = (state_32453[(1)]);if((state_val_32454 === (5)))
{var inst_32451 = (state_32453[(2)]);var state_32453__$1 = state_32453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32453__$1,inst_32451);
} else
{if((state_val_32454 === (4)))
{var state_32453__$1 = state_32453;var statearr_32455_32568 = state_32453__$1;(statearr_32455_32568[(2)] = null);
(statearr_32455_32568[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32454 === (3)))
{var inst_32443 = (state_32453[(7)]);var inst_32445 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32446 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_32447 = (new cljs.core.PersistentVector(null,3,(5),inst_32445,inst_32446,null));var inst_32448 = om.core.update_BANG_.call(null,self__.cursor,inst_32447,inst_32443);var state_32453__$1 = state_32453;var statearr_32456_32569 = state_32453__$1;(statearr_32456_32569[(2)] = inst_32448);
(statearr_32456_32569[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32454 === (2)))
{var inst_32443 = (state_32453[(7)]);var inst_32443__$1 = (state_32453[(2)]);var state_32453__$1 = (function (){var statearr_32457 = state_32453;(statearr_32457[(7)] = inst_32443__$1);
return statearr_32457;
})();if(cljs.core.truth_(inst_32443__$1))
{var statearr_32458_32570 = state_32453__$1;(statearr_32458_32570[(1)] = (3));
} else
{var statearr_32459_32571 = state_32453__$1;(statearr_32459_32571[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32454 === (1)))
{var inst_32440 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32441 = fetch_geotag_data_fn.call(null,inst_32440);var state_32453__$1 = state_32453;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32453__$1,(2),inst_32441);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32567,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32567,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32463 = [null,null,null,null,null,null,null,null];(statearr_32463[(0)] = state_machine__9111__auto__);
(statearr_32463[(1)] = (1));
return statearr_32463;
});
var state_machine__9111__auto____1 = (function (state_32453){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32453);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32464){if((e32464 instanceof Object))
{var ex__9114__auto__ = e32464;var statearr_32465_32572 = state_32453;(statearr_32465_32572[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32453);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32464;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32573 = state_32453;
state_32453 = G__32573;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32453){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32567,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32466 = f__9126__auto__.call(null);(statearr_32466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32567);
return statearr_32466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32567,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs))) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32574 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32574,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32574,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32485){var state_val_32486 = (state_32485[(1)]);if((state_val_32486 === (5)))
{var inst_32483 = (state_32485[(2)]);var state_32485__$1 = state_32485;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32485__$1,inst_32483);
} else
{if((state_val_32486 === (4)))
{var state_32485__$1 = state_32485;var statearr_32487_32575 = state_32485__$1;(statearr_32487_32575[(2)] = null);
(statearr_32487_32575[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32486 === (3)))
{var inst_32474 = (state_32485[(7)]);var inst_32476 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32477 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_32478 = (new cljs.core.PersistentVector(null,3,(5),inst_32476,inst_32477,null));var inst_32479 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32474);var inst_32480 = om.core.update_BANG_.call(null,self__.cursor,inst_32478,inst_32479);var state_32485__$1 = state_32485;var statearr_32488_32576 = state_32485__$1;(statearr_32488_32576[(2)] = inst_32480);
(statearr_32488_32576[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32486 === (2)))
{var inst_32474 = (state_32485[(7)]);var inst_32474__$1 = (state_32485[(2)]);var state_32485__$1 = (function (){var statearr_32489 = state_32485;(statearr_32489[(7)] = inst_32474__$1);
return statearr_32489;
})();if(cljs.core.truth_(inst_32474__$1))
{var statearr_32490_32577 = state_32485__$1;(statearr_32490_32577[(1)] = (3));
} else
{var statearr_32491_32578 = state_32485__$1;(statearr_32491_32578[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32486 === (1)))
{var inst_32467 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32468 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32469 = [next_filter];var inst_32470 = cljs.core.PersistentHashMap.fromArrays(inst_32468,inst_32469);var inst_32471 = cljs.core.merge.call(null,inst_32467,inst_32470);var inst_32472 = fetch_geotag_agg_data_fn.call(null,inst_32471);var state_32485__$1 = state_32485;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32485__$1,(2),inst_32472);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32574,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32574,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32495 = [null,null,null,null,null,null,null,null];(statearr_32495[(0)] = state_machine__9111__auto__);
(statearr_32495[(1)] = (1));
return statearr_32495;
});
var state_machine__9111__auto____1 = (function (state_32485){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32485);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32496){if((e32496 instanceof Object))
{var ex__9114__auto__ = e32496;var statearr_32497_32579 = state_32485;(statearr_32497_32579[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32485);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32496;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32580 = state_32485;
state_32485 = G__32580;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32485){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32574,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32498 = f__9126__auto__.call(null);(statearr_32498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32574);
return statearr_32498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32574,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_bounds;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_geohash_aggs;if(cljs.core.truth_(and__3627__auto____$1))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs))) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32581 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32581,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32581,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32519){var state_val_32520 = (state_32519[(1)]);if((state_val_32520 === (5)))
{var inst_32517 = (state_32519[(2)]);var state_32519__$1 = state_32519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32519__$1,inst_32517);
} else
{if((state_val_32520 === (4)))
{var state_32519__$1 = state_32519;var statearr_32521_32582 = state_32519__$1;(statearr_32521_32582[(2)] = null);
(statearr_32521_32582[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32520 === (3)))
{var inst_32508 = (state_32519[(7)]);var inst_32510 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32511 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620)];var inst_32512 = (new cljs.core.PersistentVector(null,3,(5),inst_32510,inst_32511,null));var inst_32513 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32508);var inst_32514 = om.core.update_BANG_.call(null,self__.cursor,inst_32512,inst_32513);var state_32519__$1 = state_32519;var statearr_32522_32583 = state_32519__$1;(statearr_32522_32583[(2)] = inst_32514);
(statearr_32522_32583[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32520 === (2)))
{var inst_32508 = (state_32519[(7)]);var inst_32508__$1 = (state_32519[(2)]);var state_32519__$1 = (function (){var statearr_32523 = state_32519;(statearr_32523[(7)] = inst_32508__$1);
return statearr_32523;
})();if(cljs.core.truth_(inst_32508__$1))
{var statearr_32524_32584 = state_32519__$1;(statearr_32524_32584[(1)] = (3));
} else
{var statearr_32525_32585 = state_32519__$1;(statearr_32525_32585[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32520 === (1)))
{var inst_32499 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32500 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"precision","precision",-1175707478)];var inst_32501 = new cljs.core.Keyword(null,"precision-fn","precision-fn",1742300693).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32502 = inst_32501.call(null,next_zoom);var inst_32503 = [next_filter,next_bounds,inst_32502];var inst_32504 = cljs.core.PersistentHashMap.fromArrays(inst_32500,inst_32503);var inst_32505 = cljs.core.merge.call(null,inst_32499,inst_32504);var inst_32506 = fetch_geohash_agg_data_fn.call(null,inst_32505);var state_32519__$1 = state_32519;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32519__$1,(2),inst_32506);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32581,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32581,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32529 = [null,null,null,null,null,null,null,null];(statearr_32529[(0)] = state_machine__9111__auto__);
(statearr_32529[(1)] = (1));
return statearr_32529;
});
var state_machine__9111__auto____1 = (function (state_32519){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32519);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32530){if((e32530 instanceof Object))
{var ex__9114__auto__ = e32530;var statearr_32531_32586 = state_32519;(statearr_32531_32586[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32519);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32530;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32587 = state_32519;
state_32519 = G__32587;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32519){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32581,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32532 = f__9126__auto__.call(null);(statearr_32532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32581);
return statearr_32532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32581,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var vec__32533_32588 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_32589 = cljs.core.nth.call(null,vec__32533_32588,(0),null);var selection_path_colours_32590 = cljs.core.nth.call(null,vec__32533_32588,(1),null);var update_paths_invocation_32591 = ((function (vec__32533_32588,new_threshold_colors_32589,selection_path_colours_32590,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_32590,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec], null));
});})(vec__32533_32588,new_threshold_colors_32589,selection_path_colours_32590,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_32589,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_32589);
} else
{}
var temp__4126__auto___32592 = update_paths_invocation_32591.call(null);if(cljs.core.truth_(temp__4126__auto___32592))
{var notify_chan_32593 = temp__4126__auto___32592;var c__9125__auto___32594 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32594,notify_chan_32593,temp__4126__auto___32592,vec__32533_32588,new_threshold_colors_32589,selection_path_colours_32590,update_paths_invocation_32591,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32594,notify_chan_32593,temp__4126__auto___32592,vec__32533_32588,new_threshold_colors_32589,selection_path_colours_32590,update_paths_invocation_32591,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32538){var state_val_32539 = (state_32538[(1)]);if((state_val_32539 === (2)))
{var inst_32535 = (state_32538[(2)]);var inst_32536 = update_paths_invocation_32591.call(null);var state_32538__$1 = (function (){var statearr_32540 = state_32538;(statearr_32540[(7)] = inst_32535);
return statearr_32540;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32538__$1,inst_32536);
} else
{if((state_val_32539 === (1)))
{var state_32538__$1 = state_32538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32538__$1,(2),notify_chan_32593);
} else
{return null;
}
}
});})(c__9125__auto___32594,notify_chan_32593,temp__4126__auto___32592,vec__32533_32588,new_threshold_colors_32589,selection_path_colours_32590,update_paths_invocation_32591,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32594,notify_chan_32593,temp__4126__auto___32592,vec__32533_32588,new_threshold_colors_32589,selection_path_colours_32590,update_paths_invocation_32591,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32544 = [null,null,null,null,null,null,null,null];(statearr_32544[(0)] = state_machine__9111__auto__);
(statearr_32544[(1)] = (1));
return statearr_32544;
});
var state_machine__9111__auto____1 = (function (state_32538){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32538);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32545){if((e32545 instanceof Object))
{var ex__9114__auto__ = e32545;var statearr_32546_32595 = state_32538;(statearr_32546_32595[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32538);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32545;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32596 = state_32538;
state_32538 = G__32596;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32538){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32594,notify_chan_32593,temp__4126__auto___32592,vec__32533_32588,new_threshold_colors_32589,selection_path_colours_32590,update_paths_invocation_32591,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32547 = f__9126__auto__.call(null);(statearr_32547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32594);
return statearr_32547;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32594,notify_chan_32593,temp__4126__auto___32592,vec__32533_32588,new_threshold_colors_32589,selection_path_colours_32590,update_paths_invocation_32591,map__32367,map__32367__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32368,map__32368__$1,map__32369,map__32369__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32362,map__32362__$1,next_cursor_data,map__32363,map__32363__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32364,map__32364__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32365,map__32365__$1,map__32366,map__32366__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{clustermap.components.map.update_geotag_markers.call(null,leaflet_map,next_geotag_markers,next_geotag_aggs,cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data)));
} else
{}
if((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620).cljs$core$IFn$_invoke$arity$1(self__.geohash_aggs))) || (zoom_changed) || (cljs.core.not_EQ_.call(null,next_point_data,self__.point_data)))
{return clustermap.components.map.update_geohash_markers.call(null,leaflet_map,next_geohash_markers,next_geohash_aggs,cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data)));
} else
{return null;
}
});})(map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32355.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32355.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__32548 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__32548__$1 = ((cljs.core.seq_QMARK_.call(null,map__32548))?cljs.core.apply.call(null,cljs.core.hash_map,map__32548):map__32548);var map = map__32548__$1;var path = cljs.core.get.call(null,map__32548__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__32548__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32548__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__32549 = om.core.get_shared.call(null,self__.owner);var map__32549__$1 = ((cljs.core.seq_QMARK_.call(null,map__32549))?cljs.core.apply.call(null,cljs.core.hash_map,map__32549):map__32549);var path_marker_click_fn = cljs.core.get.call(null,map__32549__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32549__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32549__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32549__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
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
});})(node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
});})(node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__32550 = e;var G__32550__$1 = (((G__32550 == null))?null:G__32550.target);var G__32550__$2 = (((G__32550__$1 == null))?null:domina.attr.call(null,G__32550__$1,"data-boundaryline-id"));var G__32550__$3 = (((G__32550__$2 == null))?null:path_marker_click_fn.call(null,G__32550__$2));return G__32550__$3;
});})(node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__32548,map__32548__$1,map,path,markers,leaflet_map,map__32549,map__32549__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986),clustermap.api.geohash_grid_factory.call(null));
});})(map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32355.prototype.om$core$IRender$ = true;
clustermap.components.map.t32355.prototype.om$core$IRender$render$arity$1 = ((function (map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32357){var self__ = this;
var _32357__$1 = this;return self__.meta32356;
});})(map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32357,meta32356__$1){var self__ = this;
var _32357__$1 = this;return (new clustermap.components.map.t32355(self__.colorchooser,self__.initial_bounds,self__.map__32353,self__.owner,self__.data,self__.zoom,self__.map__32354,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.show_points,self__.link_click_fn,self__.filter,self__.geohash_aggs,self__.point_data,self__.map__32352,self__.boundaryline_agg,self__.p__32150,meta32356__$1));
});})(map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t32355 = ((function (map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function __GT_t32355(colorchooser__$1,initial_bounds__$1,map__32353__$2,owner__$1,data__$1,zoom__$1,map__32354__$2,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,point_data__$1,map__32352__$2,boundaryline_agg__$1,p__32150__$1,meta32356){return (new clustermap.components.map.t32355(colorchooser__$1,initial_bounds__$1,map__32353__$2,owner__$1,data__$1,zoom__$1,map__32354__$2,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,point_data__$1,map__32352__$2,boundaryline_agg__$1,p__32150__$1,meta32356));
});})(map__32352,map__32352__$1,cursor_data,map__32353,map__32353__$1,cursor,data,point_data,boundaryline_collections,map__32354,map__32354__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t32355(colorchooser,initial_bounds,map__32353__$1,owner,data,zoom,map__32354__$1,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,geohash_aggs,point_data,map__32352__$1,boundaryline_agg,p__32150,null));
});
