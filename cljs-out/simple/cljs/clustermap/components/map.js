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
clustermap.components.map.default_api_key = (function (){var or__3639__auto__ = (function (){var G__31507 = config;var G__31507__$1 = (((G__31507 == null))?null:G__31507.components);var G__31507__$2 = (((G__31507__$1 == null))?null:G__31507__$1.map);var G__31507__$3 = (((G__31507__$2 == null))?null:G__31507__$2.api_key);return G__31507__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__31508){var map__31510 = p__31508;var map__31510__$1 = ((cljs.core.seq_QMARK_.call(null,map__31510))?cljs.core.apply.call(null,cljs.core.hash_map,map__31510):map__31510);var api_key = cljs.core.get.call(null,map__31510__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__31510__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__31510__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__31510__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__31511){
var m = cljs.core.first(arglist__31511);
var all_bounds = cljs.core.rest(arglist__31511);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__31516(s__31517){return (new cljs.core.LazySeq(null,(function (){var s__31517__$1 = s__31517;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31517__$1);if(temp__4126__auto__)
{var s__31517__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31517__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31517__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31519 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31518 = (0);while(true){
if((i__31518 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__31518);cljs.core.chunk_append.call(null,b__31519,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);var content = (cljs.core.truth_(path_fn)?path_fn.call(null,site):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(click_handler_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key], null),content], null):content)], null);
})()))));
{
var G__31520 = (i__31518 + (1));
i__31518 = G__31520;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31519),iter__31516.call(null,cljs.core.chunk_rest.call(null,s__31517__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31519),null);
}
} else
{var site = cljs.core.first.call(null,s__31517__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);var content = (cljs.core.truth_(path_fn)?path_fn.call(null,site):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(click_handler_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key], null),content], null):content)], null);
})()))),iter__31516.call(null,cljs.core.rest.call(null,s__31517__$2)));
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
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__31521){var map__31525 = p__31521;var map__31525__$1 = ((cljs.core.seq_QMARK_.call(null,map__31525))?cljs.core.apply.call(null,cljs.core.hash_map,map__31525):map__31525);var marker_click_fn = cljs.core.get.call(null,map__31525__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var temp__4124__auto__ = (function (){var G__31526 = location_sites;var G__31526__$1 = (((G__31526 == null))?null:cljs.core.first.call(null,G__31526));var G__31526__$2 = (((G__31526__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__31526__$1));var G__31526__$3 = (((G__31526__$2 == null))?null:cljs.core.reverse.call(null,G__31526__$2));var G__31526__$4 = (((G__31526__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__31526__$3));return G__31526__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(marker_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__31525,map__31525__$1,marker_click_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,marker_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__31525,map__31525__$1,marker_click_fn))
,location_sites)):null);popup.setContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
leaflet_marker_cluster_group.addLayer(leaflet_marker);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys)], null);
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_31527_31528 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31527_31528,sb__4579__auto__,temp__4124__auto__,map__31525,map__31525__$1,marker_click_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_31527_31528,sb__4579__auto__,temp__4124__auto__,map__31525,map__31525__$1,marker_click_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31527_31528;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__31529){var map__31535 = p__31529;var map__31535__$1 = ((cljs.core.seq_QMARK_.call(null,map__31535))?cljs.core.apply.call(null,cljs.core.hash_map,map__31535):map__31535);var marker = map__31535__$1;var click_handler_keys = cljs.core.get.call(null,map__31535__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31535__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__31536 = cljs.core.seq.call(null,click_handler_keys);var chunk__31537 = null;var count__31538 = (0);var i__31539 = (0);while(true){
if((i__31539 < count__31538))
{var chk = cljs.core._nth.call(null,chunk__31537,i__31539);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__31540 = seq__31536;
var G__31541 = chunk__31537;
var G__31542 = count__31538;
var G__31543 = (i__31539 + (1));
seq__31536 = G__31540;
chunk__31537 = G__31541;
count__31538 = G__31542;
i__31539 = G__31543;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31536);if(temp__4126__auto__)
{var seq__31536__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31536__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31536__$1);{
var G__31544 = cljs.core.chunk_rest.call(null,seq__31536__$1);
var G__31545 = c__4408__auto__;
var G__31546 = cljs.core.count.call(null,c__4408__auto__);
var G__31547 = (0);
seq__31536 = G__31544;
chunk__31537 = G__31545;
count__31538 = G__31546;
i__31539 = G__31547;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__31536__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__31548 = cljs.core.next.call(null,seq__31536__$1);
var G__31549 = null;
var G__31550 = (0);
var G__31551 = (0);
seq__31536 = G__31548;
chunk__31537 = G__31549;
count__31538 = G__31550;
i__31539 = G__31551;
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
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__31552,location,p__31553){var map__31556 = p__31552;var map__31556__$1 = ((cljs.core.seq_QMARK_.call(null,map__31556))?cljs.core.apply.call(null,cljs.core.hash_map,map__31556):map__31556);var marker = map__31556__$1;var click_handler_keys = cljs.core.get.call(null,map__31556__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31556__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31556__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__31557 = p__31553;var map__31557__$1 = ((cljs.core.seq_QMARK_.call(null,map__31557))?cljs.core.apply.call(null,cljs.core.hash_map,map__31557):map__31557);var marker_click_fn = cljs.core.get.call(null,map__31557__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(marker_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (popup,map__31556,map__31556__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__31557,map__31557__$1,marker_click_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,marker_click_fn,ls))], null);
});})(popup,map__31556,map__31556__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__31557,map__31557__$1,marker_click_fn))
,location)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__31558){var map__31560 = p__31558;var map__31560__$1 = ((cljs.core.seq_QMARK_.call(null,map__31560))?cljs.core.apply.call(null,cljs.core.hash_map,map__31560):map__31560);var marker = map__31560__$1;var click_handler_keys = cljs.core.get.call(null,map__31560__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31560__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31560__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
if(cljs.core.truth_(leaflet_marker_cluster_group))
{leaflet_marker_cluster_group.removeLayer(leaflet_marker);
} else
{leaflet_map.removeLayer(leaflet_marker);
}
return null;
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,leaflet_marker_cluster_group,markers_atom,show_points,new_locations,p__31561){var map__31567 = p__31561;var map__31567__$1 = ((cljs.core.seq_QMARK_.call(null,map__31567))?cljs.core.apply.call(null,cljs.core.hash_map,map__31567):map__31567);var opts = map__31567__$1;var marker_click_fn = cljs.core.get.call(null,map__31567__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = (cljs.core.truth_(show_points)?cljs.core.set.call(null,cljs.core.keys.call(null,new_locations)):null);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,location_keys),location_keys], null)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,map__31567,map__31567__$1,opts,marker_click_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,map__31567,map__31567__$1,opts,marker_click_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__31567,map__31567__$1,opts,marker_click_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k),cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__31567,map__31567__$1,opts,marker_click_fn))
,update_marker_keys));var ___$1 = (function (){var seq__31568 = cljs.core.seq.call(null,remove_marker_keys);var chunk__31569 = null;var count__31570 = (0);var i__31571 = (0);while(true){
if((i__31571 < count__31570))
{var k = cljs.core._nth.call(null,chunk__31569,i__31571);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__31572 = seq__31568;
var G__31573 = chunk__31569;
var G__31574 = count__31570;
var G__31575 = (i__31571 + (1));
seq__31568 = G__31572;
chunk__31569 = G__31573;
count__31570 = G__31574;
i__31571 = G__31575;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31568);if(temp__4126__auto__)
{var seq__31568__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31568__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31568__$1);{
var G__31576 = cljs.core.chunk_rest.call(null,seq__31568__$1);
var G__31577 = c__4408__auto__;
var G__31578 = cljs.core.count.call(null,c__4408__auto__);
var G__31579 = (0);
seq__31568 = G__31576;
chunk__31569 = G__31577;
count__31570 = G__31578;
i__31571 = G__31579;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31568__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__31580 = cljs.core.next.call(null,seq__31568__$1);
var G__31581 = null;
var G__31582 = (0);
var G__31583 = (0);
seq__31568 = G__31580;
chunk__31569 = G__31581;
count__31570 = G__31582;
i__31571 = G__31583;
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
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__31584,geotag,geotag_agg){var map__31586 = p__31584;var map__31586__$1 = ((cljs.core.seq_QMARK_.call(null,map__31586))?cljs.core.apply.call(null,cljs.core.hash_map,map__31586):map__31586);var geotag_agg_spec = map__31586__$1;var click_fn = cljs.core.get.call(null,map__31586__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__31586__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31586__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,icon_render_fn.call(null,geotag,geotag_agg))))], null)));var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);popup.setContent(clustermap.components.map.render_popup_content.call(null,click_handler_key,popup_render_fn.call(null,geotag,geotag_agg)));
leaflet_marker.bindPopup(popup);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__31587,p__31588,geotag,geotag_agg){var map__31591 = p__31587;var map__31591__$1 = ((cljs.core.seq_QMARK_.call(null,map__31591))?cljs.core.apply.call(null,cljs.core.hash_map,map__31591):map__31591);var geotag_aggs = map__31591__$1;var click_fn = cljs.core.get.call(null,map__31591__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__31591__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31591__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__31592 = p__31588;var map__31592__$1 = ((cljs.core.seq_QMARK_.call(null,map__31592))?cljs.core.apply.call(null,cljs.core.hash_map,map__31592):map__31592);var marker = map__31592__$1;var click_handler_key = cljs.core.get.call(null,map__31592__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31592__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_31593 = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,icon_render_fn.call(null,geotag,geotag_agg))))], null)));var popup_31594 = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var new_click_handler_key_31595 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_31593);
popup_31594.setContent(clustermap.components.map.render_popup_content.call(null,new_click_handler_key_31595,popup_render_fn.call(null,geotag,geotag_agg)));
leaflet_marker.bindPopup(popup_31594);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_31595);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__31596,points_showing){var map__31602 = p__31596;var map__31602__$1 = ((cljs.core.seq_QMARK_.call(null,map__31602))?cljs.core.apply.call(null,cljs.core.hash_map,map__31602):map__31602);var geotag_agg_spec = map__31602__$1;var geotag_agg_data = cljs.core.get.call(null,map__31602__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__31602__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__31602__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31602__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var geotags_by_tag = cljs.core.reduce.call(null,((function (map__31602,map__31602__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(map__31602,map__31602__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (geotags_by_tag,map__31602,map__31602__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(geotags_by_tag,map__31602,map__31602__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_agg_data);var markers = cljs.core.deref.call(null,geotag_markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var latest_marker_keys = (cljs.core.truth_(points_showing)?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),geotag_agg_spec,new cljs.core.Keyword(null,"latest-marker-keys","latest-marker-keys",-237335362),latest_marker_keys,new cljs.core.Keyword(null,"update-marker-keys","update-marker-keys",-1816039620),update_marker_keys,new cljs.core.Keyword(null,"new-marker-keys","new-marker-keys",-1773621353),new_marker_keys,new cljs.core.Keyword(null,"remove-marker-keys","remove-marker-keys",2038087170),remove_marker_keys], null)));var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,map__31602,map__31602__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,map__31602,map__31602__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,new_markers,map__31602,map__31602__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,new_markers,map__31602,map__31602__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn))
,update_marker_keys));var ___$1 = (function (){var seq__31603 = cljs.core.seq.call(null,remove_marker_keys);var chunk__31604 = null;var count__31605 = (0);var i__31606 = (0);while(true){
if((i__31606 < count__31605))
{var k = cljs.core._nth.call(null,chunk__31604,i__31606);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__31607 = seq__31603;
var G__31608 = chunk__31604;
var G__31609 = count__31605;
var G__31610 = (i__31606 + (1));
seq__31603 = G__31607;
chunk__31604 = G__31608;
count__31605 = G__31609;
i__31606 = G__31610;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31603);if(temp__4126__auto__)
{var seq__31603__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31603__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31603__$1);{
var G__31611 = cljs.core.chunk_rest.call(null,seq__31603__$1);
var G__31612 = c__4408__auto__;
var G__31613 = cljs.core.count.call(null,c__4408__auto__);
var G__31614 = (0);
seq__31603 = G__31611;
chunk__31604 = G__31612;
count__31605 = G__31613;
i__31606 = G__31614;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31603__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__31615 = cljs.core.next.call(null,seq__31603__$1);
var G__31616 = null;
var G__31617 = (0);
var G__31618 = (0);
seq__31603 = G__31615;
chunk__31604 = G__31616;
count__31605 = G__31617;
i__31606 = G__31618;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__31627 = cljs.core.js__GT_clj.call(null,envelope);var map__31627__$1 = ((cljs.core.seq_QMARK_.call(null,map__31627))?cljs.core.apply.call(null,cljs.core.hash_map,map__31627):map__31627);var clj_envelope = map__31627__$1;var vec__31628 = cljs.core.get.call(null,map__31627__$1,"coordinates");var vec__31629 = cljs.core.nth.call(null,vec__31628,(0),null);var vec__31630 = cljs.core.nth.call(null,vec__31629,(0),null);var miny0 = cljs.core.nth.call(null,vec__31630,(0),null);var minx0 = cljs.core.nth.call(null,vec__31630,(1),null);var vec__31631 = cljs.core.nth.call(null,vec__31629,(1),null);var maxy1 = cljs.core.nth.call(null,vec__31631,(0),null);var minx1 = cljs.core.nth.call(null,vec__31631,(1),null);var vec__31632 = cljs.core.nth.call(null,vec__31629,(2),null);var maxy2 = cljs.core.nth.call(null,vec__31632,(0),null);var maxx2 = cljs.core.nth.call(null,vec__31632,(1),null);var vec__31633 = cljs.core.nth.call(null,vec__31629,(3),null);var miny3 = cljs.core.nth.call(null,vec__31633,(0),null);var maxx3 = cljs.core.nth.call(null,vec__31633,(1),null);var vec__31634 = cljs.core.nth.call(null,vec__31629,(4),null);var miny4 = cljs.core.nth.call(null,vec__31634,(0),null);var minx4 = cljs.core.nth.call(null,vec__31634,(1),null);var inner = vec__31629;var coords = vec__31628;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__31635){var map__31637 = p__31635;var map__31637__$1 = ((cljs.core.seq_QMARK_.call(null,map__31637))?cljs.core.apply.call(null,cljs.core.hash_map,map__31637):map__31637);var fill_color = cljs.core.get.call(null,map__31637__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__31637__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__31637__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
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
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__31638,p__31639){var map__31643 = p__31638;var map__31643__$1 = ((cljs.core.seq_QMARK_.call(null,map__31643))?cljs.core.apply.call(null,cljs.core.hash_map,map__31643):map__31643);var path_attrs = map__31643__$1;var selected = cljs.core.get.call(null,map__31643__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__31644 = p__31639;var map__31645 = cljs.core.nth.call(null,vec__31644,(0),null);var map__31645__$1 = ((cljs.core.seq_QMARK_.call(null,map__31645))?cljs.core.apply.call(null,cljs.core.hash_map,map__31645):map__31645);var opts = map__31645__$1;var filter_spec = cljs.core.get.call(null,map__31645__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,popup_content,map__31643,map__31643__$1,path_attrs,selected,vec__31644,map__31645,map__31645__$1,opts,filter_spec){
return (function (e){if(cljs.core.truth_(filter_spec))
{om.core.update_BANG_.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"boundaryline","boundaryline",95022712)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?boundarylines",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["boundaryline_id",boundaryline_id], null)], null)], null)], null));
} else
{}
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clustermap.components.map","path-click","clustermap.components.map/path-click",-1232736276),new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id], null));
});})(tolerance,bounds,leaflet_path,popup_content,map__31643,map__31643__$1,path_attrs,selected,vec__31644,map__31645,map__31645__$1,opts,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__31638,var_args){
var p__31639 = null;if (arguments.length > 5) {
  p__31639 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__31638,p__31639);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__31646){
var comm = cljs.core.first(arglist__31646);
arglist__31646 = cljs.core.next(arglist__31646);
var leaflet_map = cljs.core.first(arglist__31646);
arglist__31646 = cljs.core.next(arglist__31646);
var boundaryline_id = cljs.core.first(arglist__31646);
arglist__31646 = cljs.core.next(arglist__31646);
var js_boundaryline = cljs.core.first(arglist__31646);
arglist__31646 = cljs.core.next(arglist__31646);
var p__31638 = cljs.core.first(arglist__31646);
var p__31639 = cljs.core.rest(arglist__31646);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__31638,p__31639);
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
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__31647){var vec__31650 = p__31647;var map__31651 = cljs.core.nth.call(null,vec__31650,(0),null);var map__31651__$1 = ((cljs.core.seq_QMARK_.call(null,map__31651))?cljs.core.apply.call(null,cljs.core.hash_map,map__31651):map__31651);var opts = map__31651__$1;var filter_spec = cljs.core.get.call(null,map__31651__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__31647 = null;if (arguments.length > 6) {
  p__31647 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__31647);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__31652){
var comm = cljs.core.first(arglist__31652);
arglist__31652 = cljs.core.next(arglist__31652);
var leaflet_map = cljs.core.first(arglist__31652);
arglist__31652 = cljs.core.next(arglist__31652);
var boundaryline_id = cljs.core.first(arglist__31652);
arglist__31652 = cljs.core.next(arglist__31652);
var tolerance = cljs.core.first(arglist__31652);
arglist__31652 = cljs.core.next(arglist__31652);
var js_boundaryline = cljs.core.first(arglist__31652);
arglist__31652 = cljs.core.next(arglist__31652);
var path_attrs = cljs.core.first(arglist__31652);
var p__31647 = cljs.core.rest(arglist__31652);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__31647);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__31653){var vec__31656 = p__31653;var map__31657 = cljs.core.nth.call(null,vec__31656,(0),null);var map__31657__$1 = ((cljs.core.seq_QMARK_.call(null,map__31657))?cljs.core.apply.call(null,cljs.core.hash_map,map__31657):map__31657);var opts = map__31657__$1;var filter_spec = cljs.core.get.call(null,map__31657__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__31653 = null;if (arguments.length > 6) {
  p__31653 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__31653);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__31658){
var comm = cljs.core.first(arglist__31658);
arglist__31658 = cljs.core.next(arglist__31658);
var leaflet_map = cljs.core.first(arglist__31658);
arglist__31658 = cljs.core.next(arglist__31658);
var boundaryline_id = cljs.core.first(arglist__31658);
arglist__31658 = cljs.core.next(arglist__31658);
var old_path = cljs.core.first(arglist__31658);
arglist__31658 = cljs.core.next(arglist__31658);
var js_boundaryline = cljs.core.first(arglist__31658);
arglist__31658 = cljs.core.next(arglist__31658);
var path_attrs = cljs.core.first(arglist__31658);
var p__31653 = cljs.core.rest(arglist__31658);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__31653);
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
var update_path__delegate = function (comm,leaflet_map,p__31659,tolerance,js_boundaryline,path_attrs,p__31660){var map__31664 = p__31659;var map__31664__$1 = ((cljs.core.seq_QMARK_.call(null,map__31664))?cljs.core.apply.call(null,cljs.core.hash_map,map__31664):map__31664);var path = map__31664__$1;var boundaryline_id = cljs.core.get.call(null,map__31664__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__31665 = p__31660;var map__31666 = cljs.core.nth.call(null,vec__31665,(0),null);var map__31666__$1 = ((cljs.core.seq_QMARK_.call(null,map__31666))?cljs.core.apply.call(null,cljs.core.hash_map,map__31666):map__31666);var opts = map__31666__$1;var filter_spec = cljs.core.get.call(null,map__31666__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
};
var update_path = function (comm,leaflet_map,p__31659,tolerance,js_boundaryline,path_attrs,var_args){
var p__31660 = null;if (arguments.length > 6) {
  p__31660 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__31659,tolerance,js_boundaryline,path_attrs,p__31660);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__31667){
var comm = cljs.core.first(arglist__31667);
arglist__31667 = cljs.core.next(arglist__31667);
var leaflet_map = cljs.core.first(arglist__31667);
arglist__31667 = cljs.core.next(arglist__31667);
var p__31659 = cljs.core.first(arglist__31667);
arglist__31667 = cljs.core.next(arglist__31667);
var tolerance = cljs.core.first(arglist__31667);
arglist__31667 = cljs.core.next(arglist__31667);
var js_boundaryline = cljs.core.first(arglist__31667);
arglist__31667 = cljs.core.next(arglist__31667);
var path_attrs = cljs.core.first(arglist__31667);
var p__31660 = cljs.core.rest(arglist__31667);
return update_path__delegate(comm,leaflet_map,p__31659,tolerance,js_boundaryline,path_attrs,p__31660);
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
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__31668){var vec__31684 = p__31668;var map__31685 = cljs.core.nth.call(null,vec__31684,(0),null);var map__31685__$1 = ((cljs.core.seq_QMARK_.call(null,map__31685))?cljs.core.apply.call(null,cljs.core.hash_map,map__31685):map__31685);var opts = map__31685__$1;var filter_spec = cljs.core.get.call(null,map__31685__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__31686 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__31686,(0),null);var notifychan = cljs.core.nth.call(null,vec__31686,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31686,tolerance_paths,notifychan,vec__31684,map__31685,map__31685__$1,opts,filter_spec){
return (function (p__31687){var vec__31688 = p__31687;var k = cljs.core.nth.call(null,vec__31688,(0),null);var tolerance = cljs.core.nth.call(null,vec__31688,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__31688,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31686,tolerance_paths,notifychan,vec__31684,map__31685,map__31685__$1,opts,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31686,tolerance_paths,notifychan,vec__31684,map__31685,map__31685__$1,opts,filter_spec){
return (function (k){var vec__31689 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__31689,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__31689,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31686,tolerance_paths,notifychan,vec__31684,map__31685,map__31685__$1,opts,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31686,tolerance_paths,notifychan,created_paths,vec__31684,map__31685,map__31685__$1,opts,filter_spec){
return (function (p__31690){var vec__31691 = p__31690;var k = cljs.core.nth.call(null,vec__31691,(0),null);var tolerance = cljs.core.nth.call(null,vec__31691,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__31691,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31686,tolerance_paths,notifychan,created_paths,vec__31684,map__31685,map__31685__$1,opts,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31686,tolerance_paths,notifychan,created_paths,vec__31684,map__31685,map__31685__$1,opts,filter_spec){
return (function (k){var vec__31692 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__31692,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__31692,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31686,tolerance_paths,notifychan,created_paths,vec__31684,map__31685,map__31685__$1,opts,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__31693 = cljs.core.seq.call(null,delete_path_keys);var chunk__31694 = null;var count__31695 = (0);var i__31696 = (0);while(true){
if((i__31696 < count__31695))
{var k = cljs.core._nth.call(null,chunk__31694,i__31696);var temp__4124__auto___31699 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___31699))
{var path_31700 = temp__4124__auto___31699;clustermap.components.map.delete_path.call(null,leaflet_map,path_31700);
} else
{}
{
var G__31701 = seq__31693;
var G__31702 = chunk__31694;
var G__31703 = count__31695;
var G__31704 = (i__31696 + (1));
seq__31693 = G__31701;
chunk__31694 = G__31702;
count__31695 = G__31703;
i__31696 = G__31704;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31693);if(temp__4126__auto__)
{var seq__31693__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31693__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31693__$1);{
var G__31705 = cljs.core.chunk_rest.call(null,seq__31693__$1);
var G__31706 = c__4408__auto__;
var G__31707 = cljs.core.count.call(null,c__4408__auto__);
var G__31708 = (0);
seq__31693 = G__31705;
chunk__31694 = G__31706;
count__31695 = G__31707;
i__31696 = G__31708;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31693__$1);var temp__4124__auto___31709 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___31709))
{var path_31710 = temp__4124__auto___31709;clustermap.components.map.delete_path.call(null,leaflet_map,path_31710);
} else
{}
{
var G__31711 = cljs.core.next.call(null,seq__31693__$1);
var G__31712 = null;
var G__31713 = (0);
var G__31714 = (0);
seq__31693 = G__31711;
chunk__31694 = G__31712;
count__31695 = G__31713;
i__31696 = G__31714;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31686,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__31684,map__31685,map__31685__$1,opts,filter_spec){
return (function (m,p__31697){var map__31698 = p__31697;var map__31698__$1 = ((cljs.core.seq_QMARK_.call(null,map__31698))?cljs.core.apply.call(null,cljs.core.hash_map,map__31698):map__31698);var path = map__31698__$1;var id = cljs.core.get.call(null,map__31698__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31686,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__31684,map__31685,map__31685__$1,opts,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__31668 = null;if (arguments.length > 7) {
  p__31668 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__31668);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__31715){
var comm = cljs.core.first(arglist__31715);
arglist__31715 = cljs.core.next(arglist__31715);
var fetch_boundarylines_fn = cljs.core.first(arglist__31715);
arglist__31715 = cljs.core.next(arglist__31715);
var leaflet_map = cljs.core.first(arglist__31715);
arglist__31715 = cljs.core.next(arglist__31715);
var paths_atom = cljs.core.first(arglist__31715);
arglist__31715 = cljs.core.next(arglist__31715);
var path_selections_atom = cljs.core.first(arglist__31715);
arglist__31715 = cljs.core.next(arglist__31715);
var new_path_highlights = cljs.core.first(arglist__31715);
arglist__31715 = cljs.core.next(arglist__31715);
var new_selection_paths = cljs.core.first(arglist__31715);
var p__31668 = cljs.core.rest(arglist__31715);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__31668);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__31718){var vec__31719 = p__31718;var tz = cljs.core.nth.call(null,vec__31719,(0),null);var collection = cljs.core.nth.call(null,vec__31719,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__31720,owner){var map__31888 = p__31720;var map__31888__$1 = ((cljs.core.seq_QMARK_.call(null,map__31888))?cljs.core.apply.call(null,cljs.core.hash_map,map__31888):map__31888);var cursor_data = map__31888__$1;var map__31889 = cljs.core.get.call(null,map__31888__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__31889__$1 = ((cljs.core.seq_QMARK_.call(null,map__31889))?cljs.core.apply.call(null,cljs.core.hash_map,map__31889):map__31889);var cursor = map__31889__$1;var data = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__31890 = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__31890__$1 = ((cljs.core.seq_QMARK_.call(null,map__31890))?cljs.core.apply.call(null,cljs.core.hash_map,map__31890):map__31890);var controls = map__31890__$1;var colorchooser = cljs.core.get.call(null,map__31890__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__31890__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom = cljs.core.get.call(null,map__31890__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__31890__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__31890__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__31890__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__31890__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__31890__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__31890__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__31890__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__31890__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var boundaryline_agg = cljs.core.get.call(null,map__31890__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__31888__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__31888__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t31891 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t31891 = (function (colorchooser,initial_bounds,map__31888,map__31890,owner,map__31889,data,zoom,map_options,cursor_data,geotag_aggs,p__31720,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,point_data,boundaryline_agg,meta31892){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.map__31888 = map__31888;
this.map__31890 = map__31890;
this.owner = owner;
this.map__31889 = map__31889;
this.data = data;
this.zoom = zoom;
this.map_options = map_options;
this.cursor_data = cursor_data;
this.geotag_aggs = geotag_aggs;
this.p__31720 = p__31720;
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
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.meta31892 = meta31892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t31891.cljs$lang$type = true;
clustermap.components.map.t31891.cljs$lang$ctorStr = "clustermap.components.map/t31891";
clustermap.components.map.t31891.cljs$lang$ctorPrWriter = ((function (map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t31891");
});})(map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t31891.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t31891.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__31894 = om.core.get_state.call(null,self__.owner);var map__31894__$1 = ((cljs.core.seq_QMARK_.call(null,map__31894))?cljs.core.apply.call(null,cljs.core.hash_map,map__31894):map__31894);var map__31895 = cljs.core.get.call(null,map__31894__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__31895__$1 = ((cljs.core.seq_QMARK_.call(null,map__31895))?cljs.core.apply.call(null,cljs.core.hash_map,map__31895):map__31895);var path_selections = cljs.core.get.call(null,map__31895__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__31895__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__31895__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__31895__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t31891.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t31891.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$,p__31896,p__31897){var self__ = this;
var map__31898 = p__31896;var map__31898__$1 = ((cljs.core.seq_QMARK_.call(null,map__31898))?cljs.core.apply.call(null,cljs.core.hash_map,map__31898):map__31898);var next_cursor_data = map__31898__$1;var map__31899 = cljs.core.get.call(null,map__31898__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__31899__$1 = ((cljs.core.seq_QMARK_.call(null,map__31899))?cljs.core.apply.call(null,cljs.core.hash_map,map__31899):map__31899);var next_cursor = map__31899__$1;var next_data = cljs.core.get.call(null,map__31899__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__31899__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__31899__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__31900 = cljs.core.get.call(null,map__31899__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__31900__$1 = ((cljs.core.seq_QMARK_.call(null,map__31900))?cljs.core.apply.call(null,cljs.core.hash_map,map__31900):map__31900);var next_colorchooser = cljs.core.get.call(null,map__31900__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__31900__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_zoom = cljs.core.get.call(null,map__31900__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__31900__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__31900__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__31900__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_boundaryline_agg = cljs.core.get.call(null,map__31900__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_link_click_fn = cljs.core.get.call(null,map__31900__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var next_link_render_fn = cljs.core.get.call(null,map__31900__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var next_show_points = cljs.core.get.call(null,map__31900__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__31898__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__31898__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31901 = p__31897;var map__31901__$1 = ((cljs.core.seq_QMARK_.call(null,map__31901))?cljs.core.apply.call(null,cljs.core.hash_map,map__31901):map__31901);var map__31902 = cljs.core.get.call(null,map__31901__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__31902__$1 = ((cljs.core.seq_QMARK_.call(null,map__31902))?cljs.core.apply.call(null,cljs.core.hash_map,map__31902):map__31902);var next_markers = cljs.core.get.call(null,map__31902__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__31902__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_paths = cljs.core.get.call(null,map__31902__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__31902__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__31901__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__31901__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__31901__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__31901__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__31901__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var this$__$1 = this;var map__31903 = om.core.get_shared.call(null,self__.owner);var map__31903__$1 = ((cljs.core.seq_QMARK_.call(null,map__31903))?cljs.core.apply.call(null,cljs.core.hash_map,map__31903):map__31903);var point_in_boundarylines_fn = cljs.core.get.call(null,map__31903__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__31903__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__31903__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__31904 = om.core.get_state.call(null,self__.owner);var map__31904__$1 = ((cljs.core.seq_QMARK_.call(null,map__31904))?cljs.core.apply.call(null,cljs.core.hash_map,map__31904):map__31904);var map__31905 = cljs.core.get.call(null,map__31904__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__31905__$1 = ((cljs.core.seq_QMARK_.call(null,map__31905))?cljs.core.apply.call(null,cljs.core.hash_map,map__31905):map__31905);var path_selections = cljs.core.get.call(null,map__31905__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__31905__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__31905__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__31905__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__31905__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__31904__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__31904__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
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
{var c__9125__auto___32055 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32055,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32055,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_31928){var state_val_31929 = (state_31928[(1)]);if((state_val_31929 === (5)))
{var inst_31926 = (state_31928[(2)]);var state_31928__$1 = state_31928;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31928__$1,inst_31926);
} else
{if((state_val_31929 === (4)))
{var state_31928__$1 = state_31928;var statearr_31930_32056 = state_31928__$1;(statearr_31930_32056[(2)] = null);
(statearr_31930_32056[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31929 === (3)))
{var inst_31918 = (state_31928[(7)]);var inst_31920 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31921 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_31922 = (new cljs.core.PersistentVector(null,1,(5),inst_31920,inst_31921,null));var inst_31923 = om.core.update_BANG_.call(null,self__.cursor,inst_31922,inst_31918);var state_31928__$1 = state_31928;var statearr_31931_32057 = state_31928__$1;(statearr_31931_32057[(2)] = inst_31923);
(statearr_31931_32057[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31929 === (2)))
{var inst_31918 = (state_31928[(7)]);var inst_31918__$1 = (state_31928[(2)]);var state_31928__$1 = (function (){var statearr_31932 = state_31928;(statearr_31932[(7)] = inst_31918__$1);
return statearr_31932;
})();if(cljs.core.truth_(inst_31918__$1))
{var statearr_31933_32058 = state_31928__$1;(statearr_31933_32058[(1)] = (3));
} else
{var statearr_31934_32059 = state_31928__$1;(statearr_31934_32059[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31929 === (1)))
{var inst_31906 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_31907 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_31908 = leaflet_map.getZoom();var inst_31909 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_31908);var inst_31910 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_31911 = om.core._value.call(null,next_filter);var inst_31912 = leaflet_map.getBounds();var inst_31913 = clustermap.components.map.bounds_array.call(null,inst_31912);var inst_31914 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_31915 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_31916 = fetch_aggregation_data_fn.call(null,inst_31906,inst_31907,inst_31909,inst_31910,inst_31911,inst_31913,inst_31914,inst_31915);var state_31928__$1 = state_31928;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31928__$1,(2),inst_31916);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32055,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32055,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31938 = [null,null,null,null,null,null,null,null];(statearr_31938[(0)] = state_machine__9111__auto__);
(statearr_31938[(1)] = (1));
return statearr_31938;
});
var state_machine__9111__auto____1 = (function (state_31928){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31928);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31939){if((e31939 instanceof Object))
{var ex__9114__auto__ = e31939;var statearr_31940_32060 = state_31928;(statearr_31940_32060[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31928);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31939;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32061 = state_31928;
state_31928 = G__32061;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31928){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32055,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_31941 = f__9126__auto__.call(null);(statearr_31941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32055);
return statearr_31941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32055,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
var c__9125__auto___32062 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32062,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32062,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_31962){var state_val_31963 = (state_31962[(1)]);if((state_val_31963 === (5)))
{var inst_31960 = (state_31962[(2)]);var state_31962__$1 = state_31962;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31962__$1,inst_31960);
} else
{if((state_val_31963 === (4)))
{var state_31962__$1 = state_31962;var statearr_31964_32063 = state_31962__$1;(statearr_31964_32063[(2)] = null);
(statearr_31964_32063[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31963 === (3)))
{var inst_31952 = (state_31962[(7)]);var inst_31954 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31955 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_31956 = (new cljs.core.PersistentVector(null,1,(5),inst_31954,inst_31955,null));var inst_31957 = om.core.update_BANG_.call(null,self__.cursor,inst_31956,inst_31952);var state_31962__$1 = state_31962;var statearr_31965_32064 = state_31962__$1;(statearr_31965_32064[(2)] = inst_31957);
(statearr_31965_32064[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31963 === (2)))
{var inst_31952 = (state_31962[(7)]);var inst_31952__$1 = (state_31962[(2)]);var state_31962__$1 = (function (){var statearr_31966 = state_31962;(statearr_31966[(7)] = inst_31952__$1);
return statearr_31966;
})();if(cljs.core.truth_(inst_31952__$1))
{var statearr_31967_32065 = state_31962__$1;(statearr_31967_32065[(1)] = (3));
} else
{var statearr_31968_32066 = state_31962__$1;(statearr_31968_32066[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31963 === (1)))
{var inst_31942 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_31943 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_31944 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31945 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover"];var inst_31946 = (new cljs.core.PersistentVector(null,5,(5),inst_31944,inst_31945,null));var inst_31947 = om.core._value.call(null,next_filter);var inst_31948 = leaflet_map.getBounds();var inst_31949 = clustermap.components.map.bounds_array.call(null,inst_31948);var inst_31950 = fetch_point_data_fn.call(null,inst_31942,inst_31943,"!postcode",inst_31946,(1000),inst_31947,inst_31949);var state_31962__$1 = state_31962;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31962__$1,(2),inst_31950);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32062,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32062,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31972 = [null,null,null,null,null,null,null,null];(statearr_31972[(0)] = state_machine__9111__auto__);
(statearr_31972[(1)] = (1));
return statearr_31972;
});
var state_machine__9111__auto____1 = (function (state_31962){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31962);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31973){if((e31973 instanceof Object))
{var ex__9114__auto__ = e31973;var statearr_31974_32067 = state_31962;(statearr_31974_32067[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31962);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31973;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32068 = state_31962;
state_31962 = G__32068;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31962){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32062,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_31975 = f__9126__auto__.call(null);(statearr_31975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32062);
return statearr_31975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32062,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32069 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32069,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32069,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_31989){var state_val_31990 = (state_31989[(1)]);if((state_val_31990 === (5)))
{var inst_31987 = (state_31989[(2)]);var state_31989__$1 = state_31989;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31989__$1,inst_31987);
} else
{if((state_val_31990 === (4)))
{var state_31989__$1 = state_31989;var statearr_31991_32070 = state_31989__$1;(statearr_31991_32070[(2)] = null);
(statearr_31991_32070[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31990 === (3)))
{var inst_31979 = (state_31989[(7)]);var inst_31981 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31982 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_31983 = (new cljs.core.PersistentVector(null,3,(5),inst_31981,inst_31982,null));var inst_31984 = om.core.update_BANG_.call(null,self__.cursor,inst_31983,inst_31979);var state_31989__$1 = state_31989;var statearr_31992_32071 = state_31989__$1;(statearr_31992_32071[(2)] = inst_31984);
(statearr_31992_32071[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31990 === (2)))
{var inst_31979 = (state_31989[(7)]);var inst_31979__$1 = (state_31989[(2)]);var state_31989__$1 = (function (){var statearr_31993 = state_31989;(statearr_31993[(7)] = inst_31979__$1);
return statearr_31993;
})();if(cljs.core.truth_(inst_31979__$1))
{var statearr_31994_32072 = state_31989__$1;(statearr_31994_32072[(1)] = (3));
} else
{var statearr_31995_32073 = state_31989__$1;(statearr_31995_32073[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31990 === (1)))
{var inst_31976 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_31977 = fetch_geotag_data_fn.call(null,inst_31976);var state_31989__$1 = state_31989;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31989__$1,(2),inst_31977);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32069,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32069,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31999 = [null,null,null,null,null,null,null,null];(statearr_31999[(0)] = state_machine__9111__auto__);
(statearr_31999[(1)] = (1));
return statearr_31999;
});
var state_machine__9111__auto____1 = (function (state_31989){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31989);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32000){if((e32000 instanceof Object))
{var ex__9114__auto__ = e32000;var statearr_32001_32074 = state_31989;(statearr_32001_32074[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31989);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32000;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32075 = state_31989;
state_31989 = G__32075;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31989){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32069,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32002 = f__9126__auto__.call(null);(statearr_32002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32069);
return statearr_32002;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32069,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs))) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32076 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32076,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32076,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_32021){var state_val_32022 = (state_32021[(1)]);if((state_val_32022 === (5)))
{var inst_32019 = (state_32021[(2)]);var state_32021__$1 = state_32021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32021__$1,inst_32019);
} else
{if((state_val_32022 === (4)))
{var state_32021__$1 = state_32021;var statearr_32023_32077 = state_32021__$1;(statearr_32023_32077[(2)] = null);
(statearr_32023_32077[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32022 === (3)))
{var inst_32010 = (state_32021[(7)]);var inst_32012 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32013 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_32014 = (new cljs.core.PersistentVector(null,3,(5),inst_32012,inst_32013,null));var inst_32015 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32010);var inst_32016 = om.core.update_BANG_.call(null,self__.cursor,inst_32014,inst_32015);var state_32021__$1 = state_32021;var statearr_32024_32078 = state_32021__$1;(statearr_32024_32078[(2)] = inst_32016);
(statearr_32024_32078[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32022 === (2)))
{var inst_32010 = (state_32021[(7)]);var inst_32010__$1 = (state_32021[(2)]);var state_32021__$1 = (function (){var statearr_32025 = state_32021;(statearr_32025[(7)] = inst_32010__$1);
return statearr_32025;
})();if(cljs.core.truth_(inst_32010__$1))
{var statearr_32026_32079 = state_32021__$1;(statearr_32026_32079[(1)] = (3));
} else
{var statearr_32027_32080 = state_32021__$1;(statearr_32027_32080[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32022 === (1)))
{var inst_32003 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32004 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32005 = [next_filter];var inst_32006 = cljs.core.PersistentHashMap.fromArrays(inst_32004,inst_32005);var inst_32007 = cljs.core.merge.call(null,inst_32003,inst_32006);var inst_32008 = fetch_geotag_agg_data_fn.call(null,inst_32007);var state_32021__$1 = state_32021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32021__$1,(2),inst_32008);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32076,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32076,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32031 = [null,null,null,null,null,null,null,null];(statearr_32031[(0)] = state_machine__9111__auto__);
(statearr_32031[(1)] = (1));
return statearr_32031;
});
var state_machine__9111__auto____1 = (function (state_32021){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32021);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32032){if((e32032 instanceof Object))
{var ex__9114__auto__ = e32032;var statearr_32033_32081 = state_32021;(statearr_32033_32081[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32021);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32032;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32082 = state_32021;
state_32021 = G__32082;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32021){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32076,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32034 = f__9126__auto__.call(null);(statearr_32034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32076);
return statearr_32034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32076,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
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
{var vec__32035_32083 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_32084 = cljs.core.nth.call(null,vec__32035_32083,(0),null);var selection_path_colours_32085 = cljs.core.nth.call(null,vec__32035_32083,(1),null);var update_paths_invocation_32086 = ((function (vec__32035_32083,new_threshold_colors_32084,selection_path_colours_32085,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_32085,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec], null));
});})(vec__32035_32083,new_threshold_colors_32084,selection_path_colours_32085,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_32084,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_32084);
} else
{}
var temp__4126__auto___32087 = update_paths_invocation_32086.call(null);if(cljs.core.truth_(temp__4126__auto___32087))
{var notify_chan_32088 = temp__4126__auto___32087;var c__9125__auto___32089 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32089,notify_chan_32088,temp__4126__auto___32087,vec__32035_32083,new_threshold_colors_32084,selection_path_colours_32085,update_paths_invocation_32086,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32089,notify_chan_32088,temp__4126__auto___32087,vec__32035_32083,new_threshold_colors_32084,selection_path_colours_32085,update_paths_invocation_32086,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_32040){var state_val_32041 = (state_32040[(1)]);if((state_val_32041 === (2)))
{var inst_32037 = (state_32040[(2)]);var inst_32038 = update_paths_invocation_32086.call(null);var state_32040__$1 = (function (){var statearr_32042 = state_32040;(statearr_32042[(7)] = inst_32037);
return statearr_32042;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32040__$1,inst_32038);
} else
{if((state_val_32041 === (1)))
{var state_32040__$1 = state_32040;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32040__$1,(2),notify_chan_32088);
} else
{return null;
}
}
});})(c__9125__auto___32089,notify_chan_32088,temp__4126__auto___32087,vec__32035_32083,new_threshold_colors_32084,selection_path_colours_32085,update_paths_invocation_32086,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32089,notify_chan_32088,temp__4126__auto___32087,vec__32035_32083,new_threshold_colors_32084,selection_path_colours_32085,update_paths_invocation_32086,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32046 = [null,null,null,null,null,null,null,null];(statearr_32046[(0)] = state_machine__9111__auto__);
(statearr_32046[(1)] = (1));
return statearr_32046;
});
var state_machine__9111__auto____1 = (function (state_32040){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32040);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32047){if((e32047 instanceof Object))
{var ex__9114__auto__ = e32047;var statearr_32048_32090 = state_32040;(statearr_32048_32090[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32040);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32047;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32091 = state_32040;
state_32040 = G__32091;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32040){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32089,notify_chan_32088,temp__4126__auto___32087,vec__32035_32083,new_threshold_colors_32084,selection_path_colours_32085,update_paths_invocation_32086,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32049 = f__9126__auto__.call(null);(statearr_32049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32089);
return statearr_32049;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32089,notify_chan_32088,temp__4126__auto___32087,vec__32035_32083,new_threshold_colors_32084,selection_path_colours_32085,update_paths_invocation_32086,map__31903,map__31903__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__31904,map__31904__$1,map__31905,map__31905__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,this$__$1,map__31898,map__31898__$1,next_cursor_data,map__31899,map__31899__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__31900,map__31900__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__31901,map__31901__$1,map__31902,map__31902__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
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
});})(map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t31891.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t31891.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__32050 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__32050__$1 = ((cljs.core.seq_QMARK_.call(null,map__32050))?cljs.core.apply.call(null,cljs.core.hash_map,map__32050):map__32050);var map = map__32050__$1;var path = cljs.core.get.call(null,map__32050__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__32050__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32050__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__32051 = om.core.get_shared.call(null,self__.owner);var map__32051__$1 = ((cljs.core.seq_QMARK_.call(null,map__32051))?cljs.core.apply.call(null,cljs.core.hash_map,map__32051):map__32051);var path_marker_click_fn = cljs.core.get.call(null,map__32051__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32051__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32051__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32051__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
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
});})(node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
});})(node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__32052 = e;var G__32052__$1 = (((G__32052 == null))?null:G__32052.target);var G__32052__$2 = (((G__32052__$1 == null))?null:domina.attr.call(null,G__32052__$1,"data-boundaryline-id"));var G__32052__$3 = (((G__32052__$2 == null))?null:path_marker_click_fn.call(null,G__32052__$2));return G__32052__$3;
});})(node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__32050,map__32050__$1,map,path,markers,leaflet_map,map__32051,map__32051__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
});})(map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t31891.prototype.om$core$IRender$ = true;
clustermap.components.map.t31891.prototype.om$core$IRender$render$arity$1 = ((function (map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t31891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (_31893){var self__ = this;
var _31893__$1 = this;return self__.meta31892;
});})(map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t31891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (_31893,meta31892__$1){var self__ = this;
var _31893__$1 = this;return (new clustermap.components.map.t31891(self__.colorchooser,self__.initial_bounds,self__.map__31888,self__.map__31890,self__.owner,self__.map__31889,self__.data,self__.zoom,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.p__31720,self__.filter_spec,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.show_points,self__.link_click_fn,self__.filter,self__.point_data,self__.boundaryline_agg,meta31892__$1));
});})(map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t31891 = ((function (map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function __GT_t31891(colorchooser__$1,initial_bounds__$1,map__31888__$2,map__31890__$2,owner__$1,map__31889__$2,data__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,p__31720__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,point_data__$1,boundaryline_agg__$1,meta31892){return (new clustermap.components.map.t31891(colorchooser__$1,initial_bounds__$1,map__31888__$2,map__31890__$2,owner__$1,map__31889__$2,data__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,p__31720__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,point_data__$1,boundaryline_agg__$1,meta31892));
});})(map__31888,map__31888__$1,cursor_data,map__31889,map__31889__$1,cursor,data,point_data,boundaryline_collections,map__31890,map__31890__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t31891(colorchooser,initial_bounds,map__31888__$1,map__31890__$1,owner,map__31889__$1,data,zoom,map_options,cursor_data,geotag_aggs,p__31720,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,point_data,boundaryline_agg,null));
});
