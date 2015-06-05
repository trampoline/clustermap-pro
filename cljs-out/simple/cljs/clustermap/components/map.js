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
goog.require('clustermap.ordered_resource');
goog.require('clustermap.boundarylines');
goog.require('jayq.core');
goog.require('clustermap.data.colorchooser');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
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
clustermap.components.map.default_api_key = (function (){var or__3639__auto__ = (function (){var G__30986 = config;var G__30986__$1 = (((G__30986 == null))?null:G__30986.components);var G__30986__$2 = (((G__30986__$1 == null))?null:G__30986__$1.map);var G__30986__$3 = (((G__30986__$2 == null))?null:G__30986__$2.api_key);return G__30986__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__30987){var map__30989 = p__30987;var map__30989__$1 = ((cljs.core.seq_QMARK_.call(null,map__30989))?cljs.core.apply.call(null,cljs.core.hash_map,map__30989):map__30989);var api_key = cljs.core.get.call(null,map__30989__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__30989__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__30989__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__30989__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__30990){
var m = cljs.core.first(arglist__30990);
var all_bounds = cljs.core.rest(arglist__30990);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__30995(s__30996){return (new cljs.core.LazySeq(null,(function (){var s__30996__$1 = s__30996;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30996__$1);if(temp__4126__auto__)
{var s__30996__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30996__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30996__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30998 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30997 = (0);while(true){
if((i__30997 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__30997);cljs.core.chunk_append.call(null,b__30998,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);var content = (cljs.core.truth_(path_fn)?path_fn.call(null,site):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(click_handler_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key], null),content], null):content)], null);
})()))));
{
var G__30999 = (i__30997 + (1));
i__30997 = G__30999;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30998),iter__30995.call(null,cljs.core.chunk_rest.call(null,s__30996__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30998),null);
}
} else
{var site = cljs.core.first.call(null,s__30996__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);var content = (cljs.core.truth_(path_fn)?path_fn.call(null,site):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(click_handler_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key], null),content], null):content)], null);
})()))),iter__30995.call(null,cljs.core.rest.call(null,s__30996__$2)));
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
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__31000){var map__31004 = p__31000;var map__31004__$1 = ((cljs.core.seq_QMARK_.call(null,map__31004))?cljs.core.apply.call(null,cljs.core.hash_map,map__31004):map__31004);var marker_click_fn = cljs.core.get.call(null,map__31004__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var temp__4124__auto__ = (function (){var G__31005 = location_sites;var G__31005__$1 = (((G__31005 == null))?null:cljs.core.first.call(null,G__31005));var G__31005__$2 = (((G__31005__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__31005__$1));var G__31005__$3 = (((G__31005__$2 == null))?null:cljs.core.reverse.call(null,G__31005__$2));var G__31005__$4 = (((G__31005__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__31005__$3));return G__31005__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(marker_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__31004,map__31004__$1,marker_click_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,marker_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__31004,map__31004__$1,marker_click_fn))
,location_sites)):null);popup.setContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
leaflet_marker_cluster_group.addLayer(leaflet_marker);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys)], null);
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_31006_31007 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31006_31007,sb__4579__auto__,temp__4124__auto__,map__31004,map__31004__$1,marker_click_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_31006_31007,sb__4579__auto__,temp__4124__auto__,map__31004,map__31004__$1,marker_click_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31006_31007;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__31008){var map__31014 = p__31008;var map__31014__$1 = ((cljs.core.seq_QMARK_.call(null,map__31014))?cljs.core.apply.call(null,cljs.core.hash_map,map__31014):map__31014);var marker = map__31014__$1;var click_handler_keys = cljs.core.get.call(null,map__31014__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31014__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__31015 = cljs.core.seq.call(null,click_handler_keys);var chunk__31016 = null;var count__31017 = (0);var i__31018 = (0);while(true){
if((i__31018 < count__31017))
{var chk = cljs.core._nth.call(null,chunk__31016,i__31018);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__31019 = seq__31015;
var G__31020 = chunk__31016;
var G__31021 = count__31017;
var G__31022 = (i__31018 + (1));
seq__31015 = G__31019;
chunk__31016 = G__31020;
count__31017 = G__31021;
i__31018 = G__31022;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31015);if(temp__4126__auto__)
{var seq__31015__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31015__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31015__$1);{
var G__31023 = cljs.core.chunk_rest.call(null,seq__31015__$1);
var G__31024 = c__4408__auto__;
var G__31025 = cljs.core.count.call(null,c__4408__auto__);
var G__31026 = (0);
seq__31015 = G__31023;
chunk__31016 = G__31024;
count__31017 = G__31025;
i__31018 = G__31026;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__31015__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__31027 = cljs.core.next.call(null,seq__31015__$1);
var G__31028 = null;
var G__31029 = (0);
var G__31030 = (0);
seq__31015 = G__31027;
chunk__31016 = G__31028;
count__31017 = G__31029;
i__31018 = G__31030;
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
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__31031,location,p__31032){var map__31035 = p__31031;var map__31035__$1 = ((cljs.core.seq_QMARK_.call(null,map__31035))?cljs.core.apply.call(null,cljs.core.hash_map,map__31035):map__31035);var marker = map__31035__$1;var click_handler_keys = cljs.core.get.call(null,map__31035__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31035__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31035__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__31036 = p__31032;var map__31036__$1 = ((cljs.core.seq_QMARK_.call(null,map__31036))?cljs.core.apply.call(null,cljs.core.hash_map,map__31036):map__31036);var marker_click_fn = cljs.core.get.call(null,map__31036__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(marker_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (popup,map__31035,map__31035__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__31036,map__31036__$1,marker_click_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,marker_click_fn,ls))], null);
});})(popup,map__31035,map__31035__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__31036,map__31036__$1,marker_click_fn))
,location)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__31037){var map__31039 = p__31037;var map__31039__$1 = ((cljs.core.seq_QMARK_.call(null,map__31039))?cljs.core.apply.call(null,cljs.core.hash_map,map__31039):map__31039);var marker = map__31039__$1;var click_handler_keys = cljs.core.get.call(null,map__31039__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31039__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31039__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
if(cljs.core.truth_(leaflet_marker_cluster_group))
{leaflet_marker_cluster_group.removeLayer(leaflet_marker);
} else
{leaflet_map.removeLayer(leaflet_marker);
}
return null;
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,leaflet_marker_cluster_group,markers_atom,show_points,new_locations,p__31040){var map__31046 = p__31040;var map__31046__$1 = ((cljs.core.seq_QMARK_.call(null,map__31046))?cljs.core.apply.call(null,cljs.core.hash_map,map__31046):map__31046);var opts = map__31046__$1;var marker_click_fn = cljs.core.get.call(null,map__31046__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = (cljs.core.truth_(show_points)?cljs.core.set.call(null,cljs.core.keys.call(null,new_locations)):null);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,location_keys),location_keys], null)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,map__31046,map__31046__$1,opts,marker_click_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,map__31046,map__31046__$1,opts,marker_click_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__31046,map__31046__$1,opts,marker_click_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k),cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__31046,map__31046__$1,opts,marker_click_fn))
,update_marker_keys));var ___$1 = (function (){var seq__31047 = cljs.core.seq.call(null,remove_marker_keys);var chunk__31048 = null;var count__31049 = (0);var i__31050 = (0);while(true){
if((i__31050 < count__31049))
{var k = cljs.core._nth.call(null,chunk__31048,i__31050);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__31051 = seq__31047;
var G__31052 = chunk__31048;
var G__31053 = count__31049;
var G__31054 = (i__31050 + (1));
seq__31047 = G__31051;
chunk__31048 = G__31052;
count__31049 = G__31053;
i__31050 = G__31054;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31047);if(temp__4126__auto__)
{var seq__31047__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31047__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31047__$1);{
var G__31055 = cljs.core.chunk_rest.call(null,seq__31047__$1);
var G__31056 = c__4408__auto__;
var G__31057 = cljs.core.count.call(null,c__4408__auto__);
var G__31058 = (0);
seq__31047 = G__31055;
chunk__31048 = G__31056;
count__31049 = G__31057;
i__31050 = G__31058;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31047__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__31059 = cljs.core.next.call(null,seq__31047__$1);
var G__31060 = null;
var G__31061 = (0);
var G__31062 = (0);
seq__31047 = G__31059;
chunk__31048 = G__31060;
count__31049 = G__31061;
i__31050 = G__31062;
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
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__31063,geotag,geotag_agg){var map__31065 = p__31063;var map__31065__$1 = ((cljs.core.seq_QMARK_.call(null,map__31065))?cljs.core.apply.call(null,cljs.core.hash_map,map__31065):map__31065);var geotag_agg_spec = map__31065__$1;var click_fn = cljs.core.get.call(null,map__31065__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__31065__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31065__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,icon_render_fn.call(null,geotag,geotag_agg))))], null)));var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);popup.setContent(clustermap.components.map.render_popup_content.call(null,click_handler_key,popup_render_fn.call(null,geotag,geotag_agg)));
leaflet_marker.bindPopup(popup);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__31066,p__31067,geotag,geotag_agg){var map__31070 = p__31066;var map__31070__$1 = ((cljs.core.seq_QMARK_.call(null,map__31070))?cljs.core.apply.call(null,cljs.core.hash_map,map__31070):map__31070);var geotag_aggs = map__31070__$1;var click_fn = cljs.core.get.call(null,map__31070__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__31070__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31070__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__31071 = p__31067;var map__31071__$1 = ((cljs.core.seq_QMARK_.call(null,map__31071))?cljs.core.apply.call(null,cljs.core.hash_map,map__31071):map__31071);var marker = map__31071__$1;var click_handler_key = cljs.core.get.call(null,map__31071__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31071__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_31072 = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,icon_render_fn.call(null,geotag,geotag_agg))))], null)));var popup_31073 = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var new_click_handler_key_31074 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_31072);
popup_31073.setContent(clustermap.components.map.render_popup_content.call(null,new_click_handler_key_31074,popup_render_fn.call(null,geotag,geotag_agg)));
leaflet_marker.bindPopup(popup_31073);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_31074);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__31075,points_showing){var map__31081 = p__31075;var map__31081__$1 = ((cljs.core.seq_QMARK_.call(null,map__31081))?cljs.core.apply.call(null,cljs.core.hash_map,map__31081):map__31081);var geotag_agg_spec = map__31081__$1;var geotag_agg_data = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var geotags_by_tag = cljs.core.reduce.call(null,((function (map__31081,map__31081__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(map__31081,map__31081__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (geotags_by_tag,map__31081,map__31081__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(geotags_by_tag,map__31081,map__31081__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_agg_data);var markers = cljs.core.deref.call(null,geotag_markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var latest_marker_keys = (cljs.core.truth_(points_showing)?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),geotag_agg_spec,new cljs.core.Keyword(null,"latest-marker-keys","latest-marker-keys",-237335362),latest_marker_keys,new cljs.core.Keyword(null,"update-marker-keys","update-marker-keys",-1816039620),update_marker_keys,new cljs.core.Keyword(null,"new-marker-keys","new-marker-keys",-1773621353),new_marker_keys,new cljs.core.Keyword(null,"remove-marker-keys","remove-marker-keys",2038087170),remove_marker_keys], null)));var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,map__31081,map__31081__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,map__31081,map__31081__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,new_markers,map__31081,map__31081__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,new_markers,map__31081,map__31081__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn))
,update_marker_keys));var ___$1 = (function (){var seq__31082 = cljs.core.seq.call(null,remove_marker_keys);var chunk__31083 = null;var count__31084 = (0);var i__31085 = (0);while(true){
if((i__31085 < count__31084))
{var k = cljs.core._nth.call(null,chunk__31083,i__31085);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__31086 = seq__31082;
var G__31087 = chunk__31083;
var G__31088 = count__31084;
var G__31089 = (i__31085 + (1));
seq__31082 = G__31086;
chunk__31083 = G__31087;
count__31084 = G__31088;
i__31085 = G__31089;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31082);if(temp__4126__auto__)
{var seq__31082__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31082__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31082__$1);{
var G__31090 = cljs.core.chunk_rest.call(null,seq__31082__$1);
var G__31091 = c__4408__auto__;
var G__31092 = cljs.core.count.call(null,c__4408__auto__);
var G__31093 = (0);
seq__31082 = G__31090;
chunk__31083 = G__31091;
count__31084 = G__31092;
i__31085 = G__31093;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31082__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__31094 = cljs.core.next.call(null,seq__31082__$1);
var G__31095 = null;
var G__31096 = (0);
var G__31097 = (0);
seq__31082 = G__31094;
chunk__31083 = G__31095;
count__31084 = G__31096;
i__31085 = G__31097;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__31106 = cljs.core.js__GT_clj.call(null,envelope);var map__31106__$1 = ((cljs.core.seq_QMARK_.call(null,map__31106))?cljs.core.apply.call(null,cljs.core.hash_map,map__31106):map__31106);var clj_envelope = map__31106__$1;var vec__31107 = cljs.core.get.call(null,map__31106__$1,"coordinates");var vec__31108 = cljs.core.nth.call(null,vec__31107,(0),null);var vec__31109 = cljs.core.nth.call(null,vec__31108,(0),null);var miny0 = cljs.core.nth.call(null,vec__31109,(0),null);var minx0 = cljs.core.nth.call(null,vec__31109,(1),null);var vec__31110 = cljs.core.nth.call(null,vec__31108,(1),null);var maxy1 = cljs.core.nth.call(null,vec__31110,(0),null);var minx1 = cljs.core.nth.call(null,vec__31110,(1),null);var vec__31111 = cljs.core.nth.call(null,vec__31108,(2),null);var maxy2 = cljs.core.nth.call(null,vec__31111,(0),null);var maxx2 = cljs.core.nth.call(null,vec__31111,(1),null);var vec__31112 = cljs.core.nth.call(null,vec__31108,(3),null);var miny3 = cljs.core.nth.call(null,vec__31112,(0),null);var maxx3 = cljs.core.nth.call(null,vec__31112,(1),null);var vec__31113 = cljs.core.nth.call(null,vec__31108,(4),null);var miny4 = cljs.core.nth.call(null,vec__31113,(0),null);var minx4 = cljs.core.nth.call(null,vec__31113,(1),null);var inner = vec__31108;var coords = vec__31107;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__31114){var map__31116 = p__31114;var map__31116__$1 = ((cljs.core.seq_QMARK_.call(null,map__31116))?cljs.core.apply.call(null,cljs.core.hash_map,map__31116):map__31116);var fill_color = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
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
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__31117,p__31118){var map__31122 = p__31117;var map__31122__$1 = ((cljs.core.seq_QMARK_.call(null,map__31122))?cljs.core.apply.call(null,cljs.core.hash_map,map__31122):map__31122);var path_attrs = map__31122__$1;var selected = cljs.core.get.call(null,map__31122__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__31123 = p__31118;var map__31124 = cljs.core.nth.call(null,vec__31123,(0),null);var map__31124__$1 = ((cljs.core.seq_QMARK_.call(null,map__31124))?cljs.core.apply.call(null,cljs.core.hash_map,map__31124):map__31124);var opts = map__31124__$1;var filter_spec = cljs.core.get.call(null,map__31124__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,popup_content,map__31122,map__31122__$1,path_attrs,selected,vec__31123,map__31124,map__31124__$1,opts,filter_spec){
return (function (e){if(cljs.core.truth_(filter_spec))
{om.core.update_BANG_.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"boundaryline","boundaryline",95022712)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?boundarylines",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["boundaryline_id",boundaryline_id], null)], null)], null)], null));
} else
{}
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clustermap.components.map","path-click","clustermap.components.map/path-click",-1232736276),new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id], null));
});})(tolerance,bounds,leaflet_path,popup_content,map__31122,map__31122__$1,path_attrs,selected,vec__31123,map__31124,map__31124__$1,opts,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__31117,var_args){
var p__31118 = null;if (arguments.length > 5) {
  p__31118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__31117,p__31118);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__31125){
var comm = cljs.core.first(arglist__31125);
arglist__31125 = cljs.core.next(arglist__31125);
var leaflet_map = cljs.core.first(arglist__31125);
arglist__31125 = cljs.core.next(arglist__31125);
var boundaryline_id = cljs.core.first(arglist__31125);
arglist__31125 = cljs.core.next(arglist__31125);
var js_boundaryline = cljs.core.first(arglist__31125);
arglist__31125 = cljs.core.next(arglist__31125);
var p__31117 = cljs.core.first(arglist__31125);
var p__31118 = cljs.core.rest(arglist__31125);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__31117,p__31118);
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
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__31126){var vec__31129 = p__31126;var map__31130 = cljs.core.nth.call(null,vec__31129,(0),null);var map__31130__$1 = ((cljs.core.seq_QMARK_.call(null,map__31130))?cljs.core.apply.call(null,cljs.core.hash_map,map__31130):map__31130);var opts = map__31130__$1;var filter_spec = cljs.core.get.call(null,map__31130__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__31126 = null;if (arguments.length > 6) {
  p__31126 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__31126);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__31131){
var comm = cljs.core.first(arglist__31131);
arglist__31131 = cljs.core.next(arglist__31131);
var leaflet_map = cljs.core.first(arglist__31131);
arglist__31131 = cljs.core.next(arglist__31131);
var boundaryline_id = cljs.core.first(arglist__31131);
arglist__31131 = cljs.core.next(arglist__31131);
var tolerance = cljs.core.first(arglist__31131);
arglist__31131 = cljs.core.next(arglist__31131);
var js_boundaryline = cljs.core.first(arglist__31131);
arglist__31131 = cljs.core.next(arglist__31131);
var path_attrs = cljs.core.first(arglist__31131);
var p__31126 = cljs.core.rest(arglist__31131);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__31126);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__31132){var vec__31135 = p__31132;var map__31136 = cljs.core.nth.call(null,vec__31135,(0),null);var map__31136__$1 = ((cljs.core.seq_QMARK_.call(null,map__31136))?cljs.core.apply.call(null,cljs.core.hash_map,map__31136):map__31136);var opts = map__31136__$1;var filter_spec = cljs.core.get.call(null,map__31136__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__31132 = null;if (arguments.length > 6) {
  p__31132 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__31132);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__31137){
var comm = cljs.core.first(arglist__31137);
arglist__31137 = cljs.core.next(arglist__31137);
var leaflet_map = cljs.core.first(arglist__31137);
arglist__31137 = cljs.core.next(arglist__31137);
var boundaryline_id = cljs.core.first(arglist__31137);
arglist__31137 = cljs.core.next(arglist__31137);
var old_path = cljs.core.first(arglist__31137);
arglist__31137 = cljs.core.next(arglist__31137);
var js_boundaryline = cljs.core.first(arglist__31137);
arglist__31137 = cljs.core.next(arglist__31137);
var path_attrs = cljs.core.first(arglist__31137);
var p__31132 = cljs.core.rest(arglist__31137);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__31132);
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
var update_path__delegate = function (comm,leaflet_map,p__31138,tolerance,js_boundaryline,path_attrs,p__31139){var map__31143 = p__31138;var map__31143__$1 = ((cljs.core.seq_QMARK_.call(null,map__31143))?cljs.core.apply.call(null,cljs.core.hash_map,map__31143):map__31143);var path = map__31143__$1;var boundaryline_id = cljs.core.get.call(null,map__31143__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__31144 = p__31139;var map__31145 = cljs.core.nth.call(null,vec__31144,(0),null);var map__31145__$1 = ((cljs.core.seq_QMARK_.call(null,map__31145))?cljs.core.apply.call(null,cljs.core.hash_map,map__31145):map__31145);var opts = map__31145__$1;var filter_spec = cljs.core.get.call(null,map__31145__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
};
var update_path = function (comm,leaflet_map,p__31138,tolerance,js_boundaryline,path_attrs,var_args){
var p__31139 = null;if (arguments.length > 6) {
  p__31139 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__31138,tolerance,js_boundaryline,path_attrs,p__31139);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__31146){
var comm = cljs.core.first(arglist__31146);
arglist__31146 = cljs.core.next(arglist__31146);
var leaflet_map = cljs.core.first(arglist__31146);
arglist__31146 = cljs.core.next(arglist__31146);
var p__31138 = cljs.core.first(arglist__31146);
arglist__31146 = cljs.core.next(arglist__31146);
var tolerance = cljs.core.first(arglist__31146);
arglist__31146 = cljs.core.next(arglist__31146);
var js_boundaryline = cljs.core.first(arglist__31146);
arglist__31146 = cljs.core.next(arglist__31146);
var path_attrs = cljs.core.first(arglist__31146);
var p__31139 = cljs.core.rest(arglist__31146);
return update_path__delegate(comm,leaflet_map,p__31138,tolerance,js_boundaryline,path_attrs,p__31139);
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
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__31147){var vec__31163 = p__31147;var map__31164 = cljs.core.nth.call(null,vec__31163,(0),null);var map__31164__$1 = ((cljs.core.seq_QMARK_.call(null,map__31164))?cljs.core.apply.call(null,cljs.core.hash_map,map__31164):map__31164);var opts = map__31164__$1;var filter_spec = cljs.core.get.call(null,map__31164__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__31165 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__31165,(0),null);var notifychan = cljs.core.nth.call(null,vec__31165,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31165,tolerance_paths,notifychan,vec__31163,map__31164,map__31164__$1,opts,filter_spec){
return (function (p__31166){var vec__31167 = p__31166;var k = cljs.core.nth.call(null,vec__31167,(0),null);var tolerance = cljs.core.nth.call(null,vec__31167,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__31167,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31165,tolerance_paths,notifychan,vec__31163,map__31164,map__31164__$1,opts,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31165,tolerance_paths,notifychan,vec__31163,map__31164,map__31164__$1,opts,filter_spec){
return (function (k){var vec__31168 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__31168,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__31168,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31165,tolerance_paths,notifychan,vec__31163,map__31164,map__31164__$1,opts,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31165,tolerance_paths,notifychan,created_paths,vec__31163,map__31164,map__31164__$1,opts,filter_spec){
return (function (p__31169){var vec__31170 = p__31169;var k = cljs.core.nth.call(null,vec__31170,(0),null);var tolerance = cljs.core.nth.call(null,vec__31170,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__31170,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31165,tolerance_paths,notifychan,created_paths,vec__31163,map__31164,map__31164__$1,opts,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31165,tolerance_paths,notifychan,created_paths,vec__31163,map__31164,map__31164__$1,opts,filter_spec){
return (function (k){var vec__31171 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__31171,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__31171,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31165,tolerance_paths,notifychan,created_paths,vec__31163,map__31164,map__31164__$1,opts,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__31172 = cljs.core.seq.call(null,delete_path_keys);var chunk__31173 = null;var count__31174 = (0);var i__31175 = (0);while(true){
if((i__31175 < count__31174))
{var k = cljs.core._nth.call(null,chunk__31173,i__31175);var temp__4124__auto___31178 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___31178))
{var path_31179 = temp__4124__auto___31178;clustermap.components.map.delete_path.call(null,leaflet_map,path_31179);
} else
{}
{
var G__31180 = seq__31172;
var G__31181 = chunk__31173;
var G__31182 = count__31174;
var G__31183 = (i__31175 + (1));
seq__31172 = G__31180;
chunk__31173 = G__31181;
count__31174 = G__31182;
i__31175 = G__31183;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31172);if(temp__4126__auto__)
{var seq__31172__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31172__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31172__$1);{
var G__31184 = cljs.core.chunk_rest.call(null,seq__31172__$1);
var G__31185 = c__4408__auto__;
var G__31186 = cljs.core.count.call(null,c__4408__auto__);
var G__31187 = (0);
seq__31172 = G__31184;
chunk__31173 = G__31185;
count__31174 = G__31186;
i__31175 = G__31187;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31172__$1);var temp__4124__auto___31188 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___31188))
{var path_31189 = temp__4124__auto___31188;clustermap.components.map.delete_path.call(null,leaflet_map,path_31189);
} else
{}
{
var G__31190 = cljs.core.next.call(null,seq__31172__$1);
var G__31191 = null;
var G__31192 = (0);
var G__31193 = (0);
seq__31172 = G__31190;
chunk__31173 = G__31191;
count__31174 = G__31192;
i__31175 = G__31193;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31165,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__31163,map__31164,map__31164__$1,opts,filter_spec){
return (function (m,p__31176){var map__31177 = p__31176;var map__31177__$1 = ((cljs.core.seq_QMARK_.call(null,map__31177))?cljs.core.apply.call(null,cljs.core.hash_map,map__31177):map__31177);var path = map__31177__$1;var id = cljs.core.get.call(null,map__31177__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31165,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__31163,map__31164,map__31164__$1,opts,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__31147 = null;if (arguments.length > 7) {
  p__31147 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__31147);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__31194){
var comm = cljs.core.first(arglist__31194);
arglist__31194 = cljs.core.next(arglist__31194);
var fetch_boundarylines_fn = cljs.core.first(arglist__31194);
arglist__31194 = cljs.core.next(arglist__31194);
var leaflet_map = cljs.core.first(arglist__31194);
arglist__31194 = cljs.core.next(arglist__31194);
var paths_atom = cljs.core.first(arglist__31194);
arglist__31194 = cljs.core.next(arglist__31194);
var path_selections_atom = cljs.core.first(arglist__31194);
arglist__31194 = cljs.core.next(arglist__31194);
var new_path_highlights = cljs.core.first(arglist__31194);
arglist__31194 = cljs.core.next(arglist__31194);
var new_selection_paths = cljs.core.first(arglist__31194);
var p__31147 = cljs.core.rest(arglist__31194);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__31147);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__31197){var vec__31198 = p__31197;var tz = cljs.core.nth.call(null,vec__31198,(0),null);var collection = cljs.core.nth.call(null,vec__31198,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.request_aggregation_data = (function request_aggregation_data(resource,index,index_type,blcoll,variable,filter,bounds,scale_attr,post_scale_factor){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.boundaryline_aggregation,index,index_type,blcoll,variable,filter,bounds,scale_attr,post_scale_factor);
});
clustermap.components.map.request_point_data = (function request_point_data(resource,index,index_type,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.location_lists,index,index_type,"!postcode",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover"], null),(1000),filter,bounds);
});
clustermap.components.map.request_geotag_data = (function request_geotag_data(resource,tag_type){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.geotags_of_type,tag_type);
});
clustermap.components.map.request_geotag_agg_data = (function request_geotag_agg_data(resource,query){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.nested_aggregation,query);
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__31199,owner){var map__31238 = p__31199;var map__31238__$1 = ((cljs.core.seq_QMARK_.call(null,map__31238))?cljs.core.apply.call(null,cljs.core.hash_map,map__31238):map__31238);var cursor_data = map__31238__$1;var map__31239 = cljs.core.get.call(null,map__31238__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__31239__$1 = ((cljs.core.seq_QMARK_.call(null,map__31239))?cljs.core.apply.call(null,cljs.core.hash_map,map__31239):map__31239);var cursor = map__31239__$1;var data = cljs.core.get.call(null,map__31239__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__31239__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__31239__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__31240 = cljs.core.get.call(null,map__31239__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__31240__$1 = ((cljs.core.seq_QMARK_.call(null,map__31240))?cljs.core.apply.call(null,cljs.core.hash_map,map__31240):map__31240);var controls = map__31240__$1;var colorchooser = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var boundaryline_agg = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__31238__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__31238__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t31241 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t31241 = (function (colorchooser,map__31240,initial_bounds,map__31239,owner,data,zoom,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,p__31199,map__31238,point_data,boundaryline_agg,meta31242){
this.colorchooser = colorchooser;
this.map__31240 = map__31240;
this.initial_bounds = initial_bounds;
this.map__31239 = map__31239;
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
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.show_points = show_points;
this.link_click_fn = link_click_fn;
this.filter = filter;
this.p__31199 = p__31199;
this.map__31238 = map__31238;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.meta31242 = meta31242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t31241.cljs$lang$type = true;
clustermap.components.map.t31241.cljs$lang$ctorStr = "clustermap.components.map/t31241";
clustermap.components.map.t31241.cljs$lang$ctorPrWriter = ((function (map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t31241");
});})(map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t31241.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t31241.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__31244 = om.core.get_state.call(null,self__.owner);var map__31244__$1 = ((cljs.core.seq_QMARK_.call(null,map__31244))?cljs.core.apply.call(null,cljs.core.hash_map,map__31244):map__31244);var point_data_resource = cljs.core.get.call(null,map__31244__$1,new cljs.core.Keyword(null,"point-data-resource","point-data-resource",-64127097));var aggregation_data_resource = cljs.core.get.call(null,map__31244__$1,new cljs.core.Keyword(null,"aggregation-data-resource","aggregation-data-resource",992435689));var map__31245 = cljs.core.get.call(null,map__31244__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__31245__$1 = ((cljs.core.seq_QMARK_.call(null,map__31245))?cljs.core.apply.call(null,cljs.core.hash_map,map__31245):map__31245);var path_selections = cljs.core.get.call(null,map__31245__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__31245__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__31245__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__31245__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));clustermap.ordered_resource.close.call(null,aggregation_data_resource);
clustermap.ordered_resource.close.call(null,point_data_resource);
return leaflet_map.remove();
});})(map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t31241.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t31241.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$,p__31246,p__31247){var self__ = this;
var map__31248 = p__31246;var map__31248__$1 = ((cljs.core.seq_QMARK_.call(null,map__31248))?cljs.core.apply.call(null,cljs.core.hash_map,map__31248):map__31248);var next_cursor_data = map__31248__$1;var map__31249 = cljs.core.get.call(null,map__31248__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__31249__$1 = ((cljs.core.seq_QMARK_.call(null,map__31249))?cljs.core.apply.call(null,cljs.core.hash_map,map__31249):map__31249);var next_cursor = map__31249__$1;var next_data = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__31250 = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__31250__$1 = ((cljs.core.seq_QMARK_.call(null,map__31250))?cljs.core.apply.call(null,cljs.core.hash_map,map__31250):map__31250);var next_colorchooser = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_zoom = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_boundaryline_agg = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_link_click_fn = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var next_link_render_fn = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var next_show_points = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__31248__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__31248__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31251 = p__31247;var map__31251__$1 = ((cljs.core.seq_QMARK_.call(null,map__31251))?cljs.core.apply.call(null,cljs.core.hash_map,map__31251):map__31251);var map__31252 = cljs.core.get.call(null,map__31251__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__31252__$1 = ((cljs.core.seq_QMARK_.call(null,map__31252))?cljs.core.apply.call(null,cljs.core.hash_map,map__31252):map__31252);var next_markers = cljs.core.get.call(null,map__31252__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__31252__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_paths = cljs.core.get.call(null,map__31252__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__31252__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__31251__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var next_aggregation_data_resource = cljs.core.get.call(null,map__31251__$1,new cljs.core.Keyword(null,"aggregation-data-resource","aggregation-data-resource",992435689));var next_point_data_resource = cljs.core.get.call(null,map__31251__$1,new cljs.core.Keyword(null,"point-data-resource","point-data-resource",-64127097));var next_geotag_data_resource = cljs.core.get.call(null,map__31251__$1,new cljs.core.Keyword(null,"geotag-data-resource","geotag-data-resource",1259064062));var next_geotag_agg_data_resource = cljs.core.get.call(null,map__31251__$1,new cljs.core.Keyword(null,"geotag-agg-data-resource","geotag-agg-data-resource",-1663366719));var this$__$1 = this;var map__31253 = om.core.get_shared.call(null,self__.owner);var map__31253__$1 = ((cljs.core.seq_QMARK_.call(null,map__31253))?cljs.core.apply.call(null,cljs.core.hash_map,map__31253):map__31253);var point_in_boundarylines_fn = cljs.core.get.call(null,map__31253__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__31253__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__31253__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__31254 = om.core.get_state.call(null,self__.owner);var map__31254__$1 = ((cljs.core.seq_QMARK_.call(null,map__31254))?cljs.core.apply.call(null,cljs.core.hash_map,map__31254):map__31254);var map__31255 = cljs.core.get.call(null,map__31254__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__31255__$1 = ((cljs.core.seq_QMARK_.call(null,map__31255))?cljs.core.apply.call(null,cljs.core.hash_map,map__31255):map__31255);var path_selections = cljs.core.get.call(null,map__31255__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__31255__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__31255__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__31255__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__31255__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__31254__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__31254__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
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
{clustermap.components.map.request_aggregation_data.call(null,next_aggregation_data_resource,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value.call(null,next_filter),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg));
clustermap.components.map.request_point_data.call(null,next_point_data_resource,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value.call(null,next_filter),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{clustermap.components.map.request_geotag_data.call(null,next_geotag_data_resource,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs))) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3627__auto__;
}
})()))
{clustermap.components.map.request_geotag_agg_data.call(null,next_geotag_agg_data_resource,cljs.core.merge.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter], null)));
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
{var vec__31256_31276 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_31277 = cljs.core.nth.call(null,vec__31256_31276,(0),null);var selection_path_colours_31278 = cljs.core.nth.call(null,vec__31256_31276,(1),null);var update_paths_invocation_31279 = ((function (vec__31256_31276,new_threshold_colors_31277,selection_path_colours_31278,map__31253,map__31253__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31254,map__31254__$1,map__31255,map__31255__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31248,map__31248__$1,next_cursor_data,map__31249,map__31249__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31250,map__31250__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31251,map__31251__$1,map__31252,map__31252__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,next_geotag_data_resource,next_geotag_agg_data_resource,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_31278,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec], null));
});})(vec__31256_31276,new_threshold_colors_31277,selection_path_colours_31278,map__31253,map__31253__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31254,map__31254__$1,map__31255,map__31255__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31248,map__31248__$1,next_cursor_data,map__31249,map__31249__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31250,map__31250__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31251,map__31251__$1,map__31252,map__31252__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,next_geotag_data_resource,next_geotag_agg_data_resource,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_31277,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_31277);
} else
{}
var temp__4126__auto___31280 = update_paths_invocation_31279.call(null);if(cljs.core.truth_(temp__4126__auto___31280))
{var notify_chan_31281 = temp__4126__auto___31280;var c__11517__auto___31282 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___31282,notify_chan_31281,temp__4126__auto___31280,vec__31256_31276,new_threshold_colors_31277,selection_path_colours_31278,update_paths_invocation_31279,map__31253,map__31253__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31254,map__31254__$1,map__31255,map__31255__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31248,map__31248__$1,next_cursor_data,map__31249,map__31249__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31250,map__31250__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31251,map__31251__$1,map__31252,map__31252__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,next_geotag_data_resource,next_geotag_agg_data_resource,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___31282,notify_chan_31281,temp__4126__auto___31280,vec__31256_31276,new_threshold_colors_31277,selection_path_colours_31278,update_paths_invocation_31279,map__31253,map__31253__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31254,map__31254__$1,map__31255,map__31255__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31248,map__31248__$1,next_cursor_data,map__31249,map__31249__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31250,map__31250__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31251,map__31251__$1,map__31252,map__31252__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,next_geotag_data_resource,next_geotag_agg_data_resource,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_31261){var state_val_31262 = (state_31261[(1)]);if((state_val_31262 === (2)))
{var inst_31258 = (state_31261[(2)]);var inst_31259 = update_paths_invocation_31279.call(null);var state_31261__$1 = (function (){var statearr_31263 = state_31261;(statearr_31263[(7)] = inst_31258);
return statearr_31263;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31261__$1,inst_31259);
} else
{if((state_val_31262 === (1)))
{var state_31261__$1 = state_31261;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31261__$1,(2),notify_chan_31281);
} else
{return null;
}
}
});})(c__11517__auto___31282,notify_chan_31281,temp__4126__auto___31280,vec__31256_31276,new_threshold_colors_31277,selection_path_colours_31278,update_paths_invocation_31279,map__31253,map__31253__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31254,map__31254__$1,map__31255,map__31255__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31248,map__31248__$1,next_cursor_data,map__31249,map__31249__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31250,map__31250__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31251,map__31251__$1,map__31252,map__31252__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,next_geotag_data_resource,next_geotag_agg_data_resource,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__11461__auto__,c__11517__auto___31282,notify_chan_31281,temp__4126__auto___31280,vec__31256_31276,new_threshold_colors_31277,selection_path_colours_31278,update_paths_invocation_31279,map__31253,map__31253__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31254,map__31254__$1,map__31255,map__31255__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31248,map__31248__$1,next_cursor_data,map__31249,map__31249__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31250,map__31250__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31251,map__31251__$1,map__31252,map__31252__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,next_geotag_data_resource,next_geotag_agg_data_resource,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_31267 = [null,null,null,null,null,null,null,null];(statearr_31267[(0)] = state_machine__11462__auto__);
(statearr_31267[(1)] = (1));
return statearr_31267;
});
var state_machine__11462__auto____1 = (function (state_31261){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_31261);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e31268){if((e31268 instanceof Object))
{var ex__11465__auto__ = e31268;var statearr_31269_31283 = state_31261;(statearr_31269_31283[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31261);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31268;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31284 = state_31261;
state_31261 = G__31284;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_31261){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_31261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___31282,notify_chan_31281,temp__4126__auto___31280,vec__31256_31276,new_threshold_colors_31277,selection_path_colours_31278,update_paths_invocation_31279,map__31253,map__31253__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31254,map__31254__$1,map__31255,map__31255__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31248,map__31248__$1,next_cursor_data,map__31249,map__31249__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31250,map__31250__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31251,map__31251__$1,map__31252,map__31252__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,next_geotag_data_resource,next_geotag_agg_data_resource,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__11519__auto__ = (function (){var statearr_31270 = f__11518__auto__.call(null);(statearr_31270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___31282);
return statearr_31270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___31282,notify_chan_31281,temp__4126__auto___31280,vec__31256_31276,new_threshold_colors_31277,selection_path_colours_31278,update_paths_invocation_31279,map__31253,map__31253__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31254,map__31254__$1,map__31255,map__31255__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31248,map__31248__$1,next_cursor_data,map__31249,map__31249__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31250,map__31250__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31251,map__31251__$1,map__31252,map__31252__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,next_geotag_data_resource,next_geotag_agg_data_resource,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
} else
{}
} else
{}
if((cljs.core.not_EQ_.call(null,next_show_points,self__.show_points)) || (cljs.core.not_EQ_.call(null,next_point_data,self__.point_data)))
{clustermap.components.map.update_markers.call(null,self__.link_render_fn,leaflet_map,leaflet_marker_cluster_group,next_markers,next_show_points,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030),self__.link_click_fn], null));
} else
{}
if((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(self__.geotag_aggs))) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(self__.geotag_aggs))) || (cljs.core.not_EQ_.call(null,next_point_data,self__.point_data)))
{return clustermap.components.map.update_geotag_markers.call(null,leaflet_map,next_geotag_markers,next_geotag_aggs,cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data)));
} else
{return null;
}
});})(map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t31241.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t31241.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__31271 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__31271__$1 = ((cljs.core.seq_QMARK_.call(null,map__31271))?cljs.core.apply.call(null,cljs.core.hash_map,map__31271):map__31271);var map = map__31271__$1;var path = cljs.core.get.call(null,map__31271__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__31271__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__31271__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__31272 = om.core.get_shared.call(null,self__.owner);var map__31272__$1 = ((cljs.core.seq_QMARK_.call(null,map__31272))?cljs.core.apply.call(null,cljs.core.hash_map,map__31272):map__31272);var path_marker_click_fn = cljs.core.get.call(null,map__31272__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__31272__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__31272__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__31272__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
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
});})(node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
});})(node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__31273 = e;var G__31273__$1 = (((G__31273 == null))?null:G__31273.target);var G__31273__$2 = (((G__31273__$1 == null))?null:domina.attr.call(null,G__31273__$1,"data-boundaryline-id"));var G__31273__$3 = (((G__31273__$2 == null))?null:path_marker_click_fn.call(null,G__31273__$2));return G__31273__$3;
});})(node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
var adr_31285 = clustermap.ordered_resource.make_discard_stale_resource.call(null,"aggregation-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"aggregation-data-resource","aggregation-data-resource",992435689),adr_31285);
clustermap.ordered_resource.retrieve_responses.call(null,adr_31285,((function (adr_31285,node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (data__$2){return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),data__$2);
});})(adr_31285,node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
var pdr_31286 = clustermap.ordered_resource.make_discard_stale_resource.call(null,"point-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"point-data-resource","point-data-resource",-64127097),pdr_31286);
clustermap.ordered_resource.retrieve_responses.call(null,pdr_31286,((function (pdr_31286,node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (point_data__$2){return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)], null),point_data__$2);
});})(pdr_31286,node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
var gtdr_31287 = clustermap.ordered_resource.make_discard_stale_resource.call(null,"geotag-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"geotag-data-resource","geotag-data-resource",1259064062),gtdr_31287);
clustermap.ordered_resource.retrieve_responses.call(null,gtdr_31287,((function (gtdr_31287,node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (geotag_data){return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)], null),geotag_data);
});})(gtdr_31287,node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
var gtadr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"geotag-agg-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"geotag-agg-data-resource","geotag-agg-data-resource",-1663366719),gtadr);
return clustermap.ordered_resource.retrieve_responses.call(null,gtadr,((function (gtadr,node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (geotag_agg_data){return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)], null),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(geotag_agg_data));
});})(gtadr,node,map__31271,map__31271__$1,map,path,markers,leaflet_map,map__31272,map__31272__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
});})(map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t31241.prototype.om$core$IRender$ = true;
clustermap.components.map.t31241.prototype.om$core$IRender$render$arity$1 = ((function (map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t31241.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (_31243){var self__ = this;
var _31243__$1 = this;return self__.meta31242;
});})(map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t31241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (_31243,meta31242__$1){var self__ = this;
var _31243__$1 = this;return (new clustermap.components.map.t31241(self__.colorchooser,self__.map__31240,self__.initial_bounds,self__.map__31239,self__.owner,self__.data,self__.zoom,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.show_points,self__.link_click_fn,self__.filter,self__.p__31199,self__.map__31238,self__.point_data,self__.boundaryline_agg,meta31242__$1));
});})(map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t31241 = ((function (map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function __GT_t31241(colorchooser__$1,map__31240__$2,initial_bounds__$1,map__31239__$2,owner__$1,data__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,p__31199__$1,map__31238__$2,point_data__$1,boundaryline_agg__$1,meta31242){return (new clustermap.components.map.t31241(colorchooser__$1,map__31240__$2,initial_bounds__$1,map__31239__$2,owner__$1,data__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,p__31199__$1,map__31238__$2,point_data__$1,boundaryline_agg__$1,meta31242));
});})(map__31238,map__31238__$1,cursor_data,map__31239,map__31239__$1,cursor,data,point_data,boundaryline_collections,map__31240,map__31240__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t31241(colorchooser,map__31240__$1,initial_bounds,map__31239__$1,owner,data,zoom,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,p__31199,map__31238__$1,point_data,boundaryline_agg,null));
});
