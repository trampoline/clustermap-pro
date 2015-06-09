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
clustermap.components.map.default_api_key = (function (){var or__3639__auto__ = (function (){var G__31725 = config;var G__31725__$1 = (((G__31725 == null))?null:G__31725.components);var G__31725__$2 = (((G__31725__$1 == null))?null:G__31725__$1.map);var G__31725__$3 = (((G__31725__$2 == null))?null:G__31725__$2.api_key);return G__31725__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__31726){var map__31728 = p__31726;var map__31728__$1 = ((cljs.core.seq_QMARK_.call(null,map__31728))?cljs.core.apply.call(null,cljs.core.hash_map,map__31728):map__31728);var api_key = cljs.core.get.call(null,map__31728__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__31728__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__31728__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__31728__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__31729){
var m = cljs.core.first(arglist__31729);
var all_bounds = cljs.core.rest(arglist__31729);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__31734(s__31735){return (new cljs.core.LazySeq(null,(function (){var s__31735__$1 = s__31735;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31735__$1);if(temp__4126__auto__)
{var s__31735__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31735__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31735__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31737 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31736 = (0);while(true){
if((i__31736 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__31736);cljs.core.chunk_append.call(null,b__31737,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);var content = (cljs.core.truth_(path_fn)?path_fn.call(null,site):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(click_handler_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key], null),content], null):content)], null);
})()))));
{
var G__31738 = (i__31736 + (1));
i__31736 = G__31738;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31737),iter__31734.call(null,cljs.core.chunk_rest.call(null,s__31735__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31737),null);
}
} else
{var site = cljs.core.first.call(null,s__31735__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);var content = (cljs.core.truth_(path_fn)?path_fn.call(null,site):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(click_handler_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key], null),content], null):content)], null);
})()))),iter__31734.call(null,cljs.core.rest.call(null,s__31735__$2)));
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
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__31739){var map__31743 = p__31739;var map__31743__$1 = ((cljs.core.seq_QMARK_.call(null,map__31743))?cljs.core.apply.call(null,cljs.core.hash_map,map__31743):map__31743);var marker_click_fn = cljs.core.get.call(null,map__31743__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var temp__4124__auto__ = (function (){var G__31744 = location_sites;var G__31744__$1 = (((G__31744 == null))?null:cljs.core.first.call(null,G__31744));var G__31744__$2 = (((G__31744__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__31744__$1));var G__31744__$3 = (((G__31744__$2 == null))?null:cljs.core.reverse.call(null,G__31744__$2));var G__31744__$4 = (((G__31744__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__31744__$3));return G__31744__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(marker_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__31743,map__31743__$1,marker_click_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,marker_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__31743,map__31743__$1,marker_click_fn))
,location_sites)):null);popup.setContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
leaflet_marker_cluster_group.addLayer(leaflet_marker);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys)], null);
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_31745_31746 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31745_31746,sb__4579__auto__,temp__4124__auto__,map__31743,map__31743__$1,marker_click_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_31745_31746,sb__4579__auto__,temp__4124__auto__,map__31743,map__31743__$1,marker_click_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31745_31746;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__31747){var map__31753 = p__31747;var map__31753__$1 = ((cljs.core.seq_QMARK_.call(null,map__31753))?cljs.core.apply.call(null,cljs.core.hash_map,map__31753):map__31753);var marker = map__31753__$1;var click_handler_keys = cljs.core.get.call(null,map__31753__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31753__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__31754 = cljs.core.seq.call(null,click_handler_keys);var chunk__31755 = null;var count__31756 = (0);var i__31757 = (0);while(true){
if((i__31757 < count__31756))
{var chk = cljs.core._nth.call(null,chunk__31755,i__31757);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__31758 = seq__31754;
var G__31759 = chunk__31755;
var G__31760 = count__31756;
var G__31761 = (i__31757 + (1));
seq__31754 = G__31758;
chunk__31755 = G__31759;
count__31756 = G__31760;
i__31757 = G__31761;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31754);if(temp__4126__auto__)
{var seq__31754__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31754__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31754__$1);{
var G__31762 = cljs.core.chunk_rest.call(null,seq__31754__$1);
var G__31763 = c__4408__auto__;
var G__31764 = cljs.core.count.call(null,c__4408__auto__);
var G__31765 = (0);
seq__31754 = G__31762;
chunk__31755 = G__31763;
count__31756 = G__31764;
i__31757 = G__31765;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__31754__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__31766 = cljs.core.next.call(null,seq__31754__$1);
var G__31767 = null;
var G__31768 = (0);
var G__31769 = (0);
seq__31754 = G__31766;
chunk__31755 = G__31767;
count__31756 = G__31768;
i__31757 = G__31769;
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
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__31770,location,p__31771){var map__31774 = p__31770;var map__31774__$1 = ((cljs.core.seq_QMARK_.call(null,map__31774))?cljs.core.apply.call(null,cljs.core.hash_map,map__31774):map__31774);var marker = map__31774__$1;var click_handler_keys = cljs.core.get.call(null,map__31774__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31774__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31774__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__31775 = p__31771;var map__31775__$1 = ((cljs.core.seq_QMARK_.call(null,map__31775))?cljs.core.apply.call(null,cljs.core.hash_map,map__31775):map__31775);var marker_click_fn = cljs.core.get.call(null,map__31775__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(marker_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (popup,map__31774,map__31774__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__31775,map__31775__$1,marker_click_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,marker_click_fn,ls))], null);
});})(popup,map__31774,map__31774__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__31775,map__31775__$1,marker_click_fn))
,location)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__31776){var map__31778 = p__31776;var map__31778__$1 = ((cljs.core.seq_QMARK_.call(null,map__31778))?cljs.core.apply.call(null,cljs.core.hash_map,map__31778):map__31778);var marker = map__31778__$1;var click_handler_keys = cljs.core.get.call(null,map__31778__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31778__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31778__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
if(cljs.core.truth_(leaflet_marker_cluster_group))
{leaflet_marker_cluster_group.removeLayer(leaflet_marker);
} else
{leaflet_map.removeLayer(leaflet_marker);
}
return null;
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,leaflet_marker_cluster_group,markers_atom,show_points,new_locations,p__31779){var map__31785 = p__31779;var map__31785__$1 = ((cljs.core.seq_QMARK_.call(null,map__31785))?cljs.core.apply.call(null,cljs.core.hash_map,map__31785):map__31785);var opts = map__31785__$1;var marker_click_fn = cljs.core.get.call(null,map__31785__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = (cljs.core.truth_(show_points)?cljs.core.set.call(null,cljs.core.keys.call(null,new_locations)):null);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,location_keys),location_keys], null)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,map__31785,map__31785__$1,opts,marker_click_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,map__31785,map__31785__$1,opts,marker_click_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__31785,map__31785__$1,opts,marker_click_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k),cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__31785,map__31785__$1,opts,marker_click_fn))
,update_marker_keys));var ___$1 = (function (){var seq__31786 = cljs.core.seq.call(null,remove_marker_keys);var chunk__31787 = null;var count__31788 = (0);var i__31789 = (0);while(true){
if((i__31789 < count__31788))
{var k = cljs.core._nth.call(null,chunk__31787,i__31789);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__31790 = seq__31786;
var G__31791 = chunk__31787;
var G__31792 = count__31788;
var G__31793 = (i__31789 + (1));
seq__31786 = G__31790;
chunk__31787 = G__31791;
count__31788 = G__31792;
i__31789 = G__31793;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31786);if(temp__4126__auto__)
{var seq__31786__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31786__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31786__$1);{
var G__31794 = cljs.core.chunk_rest.call(null,seq__31786__$1);
var G__31795 = c__4408__auto__;
var G__31796 = cljs.core.count.call(null,c__4408__auto__);
var G__31797 = (0);
seq__31786 = G__31794;
chunk__31787 = G__31795;
count__31788 = G__31796;
i__31789 = G__31797;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31786__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__31798 = cljs.core.next.call(null,seq__31786__$1);
var G__31799 = null;
var G__31800 = (0);
var G__31801 = (0);
seq__31786 = G__31798;
chunk__31787 = G__31799;
count__31788 = G__31800;
i__31789 = G__31801;
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
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__31802,geotag,geotag_agg){var map__31804 = p__31802;var map__31804__$1 = ((cljs.core.seq_QMARK_.call(null,map__31804))?cljs.core.apply.call(null,cljs.core.hash_map,map__31804):map__31804);var geotag_agg_spec = map__31804__$1;var click_fn = cljs.core.get.call(null,map__31804__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__31804__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31804__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,icon_render_fn.call(null,geotag,geotag_agg))))], null)));var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);popup.setContent(clustermap.components.map.render_popup_content.call(null,click_handler_key,popup_render_fn.call(null,geotag,geotag_agg)));
leaflet_marker.bindPopup(popup);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__31805,p__31806,geotag,geotag_agg){var map__31809 = p__31805;var map__31809__$1 = ((cljs.core.seq_QMARK_.call(null,map__31809))?cljs.core.apply.call(null,cljs.core.hash_map,map__31809):map__31809);var geotag_aggs = map__31809__$1;var click_fn = cljs.core.get.call(null,map__31809__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__31809__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31809__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__31810 = p__31806;var map__31810__$1 = ((cljs.core.seq_QMARK_.call(null,map__31810))?cljs.core.apply.call(null,cljs.core.hash_map,map__31810):map__31810);var marker = map__31810__$1;var click_handler_key = cljs.core.get.call(null,map__31810__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31810__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_31811 = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,icon_render_fn.call(null,geotag,geotag_agg))))], null)));var popup_31812 = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var new_click_handler_key_31813 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_31811);
popup_31812.setContent(clustermap.components.map.render_popup_content.call(null,new_click_handler_key_31813,popup_render_fn.call(null,geotag,geotag_agg)));
leaflet_marker.bindPopup(popup_31812);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_31813);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__31814,points_showing){var map__31820 = p__31814;var map__31820__$1 = ((cljs.core.seq_QMARK_.call(null,map__31820))?cljs.core.apply.call(null,cljs.core.hash_map,map__31820):map__31820);var geotag_agg_spec = map__31820__$1;var geotag_agg_data = cljs.core.get.call(null,map__31820__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__31820__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__31820__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31820__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var show_at_zoom_fn = cljs.core.get.call(null,map__31820__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var geotags_by_tag = cljs.core.reduce.call(null,((function (map__31820,map__31820__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(map__31820,map__31820__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (geotags_by_tag,map__31820,map__31820__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(geotags_by_tag,map__31820,map__31820__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
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
})())?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),geotag_agg_spec,new cljs.core.Keyword(null,"latest-marker-keys","latest-marker-keys",-237335362),latest_marker_keys,new cljs.core.Keyword(null,"update-marker-keys","update-marker-keys",-1816039620),update_marker_keys,new cljs.core.Keyword(null,"new-marker-keys","new-marker-keys",-1773621353),new_marker_keys,new cljs.core.Keyword(null,"remove-marker-keys","remove-marker-keys",2038087170),remove_marker_keys], null)));var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,map__31820,map__31820__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,map__31820,map__31820__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,new_markers,map__31820,map__31820__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,_,new_markers,map__31820,map__31820__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,update_marker_keys));var ___$1 = (function (){var seq__31821 = cljs.core.seq.call(null,remove_marker_keys);var chunk__31822 = null;var count__31823 = (0);var i__31824 = (0);while(true){
if((i__31824 < count__31823))
{var k = cljs.core._nth.call(null,chunk__31822,i__31824);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__31825 = seq__31821;
var G__31826 = chunk__31822;
var G__31827 = count__31823;
var G__31828 = (i__31824 + (1));
seq__31821 = G__31825;
chunk__31822 = G__31826;
count__31823 = G__31827;
i__31824 = G__31828;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31821);if(temp__4126__auto__)
{var seq__31821__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31821__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31821__$1);{
var G__31829 = cljs.core.chunk_rest.call(null,seq__31821__$1);
var G__31830 = c__4408__auto__;
var G__31831 = cljs.core.count.call(null,c__4408__auto__);
var G__31832 = (0);
seq__31821 = G__31829;
chunk__31822 = G__31830;
count__31823 = G__31831;
i__31824 = G__31832;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31821__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__31833 = cljs.core.next.call(null,seq__31821__$1);
var G__31834 = null;
var G__31835 = (0);
var G__31836 = (0);
seq__31821 = G__31833;
chunk__31822 = G__31834;
count__31823 = G__31835;
i__31824 = G__31836;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__31845 = cljs.core.js__GT_clj.call(null,envelope);var map__31845__$1 = ((cljs.core.seq_QMARK_.call(null,map__31845))?cljs.core.apply.call(null,cljs.core.hash_map,map__31845):map__31845);var clj_envelope = map__31845__$1;var vec__31846 = cljs.core.get.call(null,map__31845__$1,"coordinates");var vec__31847 = cljs.core.nth.call(null,vec__31846,(0),null);var vec__31848 = cljs.core.nth.call(null,vec__31847,(0),null);var miny0 = cljs.core.nth.call(null,vec__31848,(0),null);var minx0 = cljs.core.nth.call(null,vec__31848,(1),null);var vec__31849 = cljs.core.nth.call(null,vec__31847,(1),null);var maxy1 = cljs.core.nth.call(null,vec__31849,(0),null);var minx1 = cljs.core.nth.call(null,vec__31849,(1),null);var vec__31850 = cljs.core.nth.call(null,vec__31847,(2),null);var maxy2 = cljs.core.nth.call(null,vec__31850,(0),null);var maxx2 = cljs.core.nth.call(null,vec__31850,(1),null);var vec__31851 = cljs.core.nth.call(null,vec__31847,(3),null);var miny3 = cljs.core.nth.call(null,vec__31851,(0),null);var maxx3 = cljs.core.nth.call(null,vec__31851,(1),null);var vec__31852 = cljs.core.nth.call(null,vec__31847,(4),null);var miny4 = cljs.core.nth.call(null,vec__31852,(0),null);var minx4 = cljs.core.nth.call(null,vec__31852,(1),null);var inner = vec__31847;var coords = vec__31846;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__31853){var map__31855 = p__31853;var map__31855__$1 = ((cljs.core.seq_QMARK_.call(null,map__31855))?cljs.core.apply.call(null,cljs.core.hash_map,map__31855):map__31855);var fill_color = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
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
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__31856,p__31857){var map__31861 = p__31856;var map__31861__$1 = ((cljs.core.seq_QMARK_.call(null,map__31861))?cljs.core.apply.call(null,cljs.core.hash_map,map__31861):map__31861);var path_attrs = map__31861__$1;var selected = cljs.core.get.call(null,map__31861__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__31862 = p__31857;var map__31863 = cljs.core.nth.call(null,vec__31862,(0),null);var map__31863__$1 = ((cljs.core.seq_QMARK_.call(null,map__31863))?cljs.core.apply.call(null,cljs.core.hash_map,map__31863):map__31863);var opts = map__31863__$1;var filter_spec = cljs.core.get.call(null,map__31863__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,popup_content,map__31861,map__31861__$1,path_attrs,selected,vec__31862,map__31863,map__31863__$1,opts,filter_spec){
return (function (e){if(cljs.core.truth_(filter_spec))
{om.core.update_BANG_.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"boundaryline","boundaryline",95022712)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?boundarylines",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["boundaryline_id",boundaryline_id], null)], null)], null)], null));
} else
{}
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clustermap.components.map","path-click","clustermap.components.map/path-click",-1232736276),new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id], null));
});})(tolerance,bounds,leaflet_path,popup_content,map__31861,map__31861__$1,path_attrs,selected,vec__31862,map__31863,map__31863__$1,opts,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__31856,var_args){
var p__31857 = null;if (arguments.length > 5) {
  p__31857 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__31856,p__31857);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__31864){
var comm = cljs.core.first(arglist__31864);
arglist__31864 = cljs.core.next(arglist__31864);
var leaflet_map = cljs.core.first(arglist__31864);
arglist__31864 = cljs.core.next(arglist__31864);
var boundaryline_id = cljs.core.first(arglist__31864);
arglist__31864 = cljs.core.next(arglist__31864);
var js_boundaryline = cljs.core.first(arglist__31864);
arglist__31864 = cljs.core.next(arglist__31864);
var p__31856 = cljs.core.first(arglist__31864);
var p__31857 = cljs.core.rest(arglist__31864);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__31856,p__31857);
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
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__31865){var vec__31868 = p__31865;var map__31869 = cljs.core.nth.call(null,vec__31868,(0),null);var map__31869__$1 = ((cljs.core.seq_QMARK_.call(null,map__31869))?cljs.core.apply.call(null,cljs.core.hash_map,map__31869):map__31869);var opts = map__31869__$1;var filter_spec = cljs.core.get.call(null,map__31869__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__31865 = null;if (arguments.length > 6) {
  p__31865 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__31865);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__31870){
var comm = cljs.core.first(arglist__31870);
arglist__31870 = cljs.core.next(arglist__31870);
var leaflet_map = cljs.core.first(arglist__31870);
arglist__31870 = cljs.core.next(arglist__31870);
var boundaryline_id = cljs.core.first(arglist__31870);
arglist__31870 = cljs.core.next(arglist__31870);
var tolerance = cljs.core.first(arglist__31870);
arglist__31870 = cljs.core.next(arglist__31870);
var js_boundaryline = cljs.core.first(arglist__31870);
arglist__31870 = cljs.core.next(arglist__31870);
var path_attrs = cljs.core.first(arglist__31870);
var p__31865 = cljs.core.rest(arglist__31870);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__31865);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__31871){var vec__31874 = p__31871;var map__31875 = cljs.core.nth.call(null,vec__31874,(0),null);var map__31875__$1 = ((cljs.core.seq_QMARK_.call(null,map__31875))?cljs.core.apply.call(null,cljs.core.hash_map,map__31875):map__31875);var opts = map__31875__$1;var filter_spec = cljs.core.get.call(null,map__31875__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__31871 = null;if (arguments.length > 6) {
  p__31871 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__31871);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__31876){
var comm = cljs.core.first(arglist__31876);
arglist__31876 = cljs.core.next(arglist__31876);
var leaflet_map = cljs.core.first(arglist__31876);
arglist__31876 = cljs.core.next(arglist__31876);
var boundaryline_id = cljs.core.first(arglist__31876);
arglist__31876 = cljs.core.next(arglist__31876);
var old_path = cljs.core.first(arglist__31876);
arglist__31876 = cljs.core.next(arglist__31876);
var js_boundaryline = cljs.core.first(arglist__31876);
arglist__31876 = cljs.core.next(arglist__31876);
var path_attrs = cljs.core.first(arglist__31876);
var p__31871 = cljs.core.rest(arglist__31876);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__31871);
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
var update_path__delegate = function (comm,leaflet_map,p__31877,tolerance,js_boundaryline,path_attrs,p__31878){var map__31882 = p__31877;var map__31882__$1 = ((cljs.core.seq_QMARK_.call(null,map__31882))?cljs.core.apply.call(null,cljs.core.hash_map,map__31882):map__31882);var path = map__31882__$1;var boundaryline_id = cljs.core.get.call(null,map__31882__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__31883 = p__31878;var map__31884 = cljs.core.nth.call(null,vec__31883,(0),null);var map__31884__$1 = ((cljs.core.seq_QMARK_.call(null,map__31884))?cljs.core.apply.call(null,cljs.core.hash_map,map__31884):map__31884);var opts = map__31884__$1;var filter_spec = cljs.core.get.call(null,map__31884__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
};
var update_path = function (comm,leaflet_map,p__31877,tolerance,js_boundaryline,path_attrs,var_args){
var p__31878 = null;if (arguments.length > 6) {
  p__31878 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__31877,tolerance,js_boundaryline,path_attrs,p__31878);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__31885){
var comm = cljs.core.first(arglist__31885);
arglist__31885 = cljs.core.next(arglist__31885);
var leaflet_map = cljs.core.first(arglist__31885);
arglist__31885 = cljs.core.next(arglist__31885);
var p__31877 = cljs.core.first(arglist__31885);
arglist__31885 = cljs.core.next(arglist__31885);
var tolerance = cljs.core.first(arglist__31885);
arglist__31885 = cljs.core.next(arglist__31885);
var js_boundaryline = cljs.core.first(arglist__31885);
arglist__31885 = cljs.core.next(arglist__31885);
var path_attrs = cljs.core.first(arglist__31885);
var p__31878 = cljs.core.rest(arglist__31885);
return update_path__delegate(comm,leaflet_map,p__31877,tolerance,js_boundaryline,path_attrs,p__31878);
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
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__31886){var vec__31902 = p__31886;var map__31903 = cljs.core.nth.call(null,vec__31902,(0),null);var map__31903__$1 = ((cljs.core.seq_QMARK_.call(null,map__31903))?cljs.core.apply.call(null,cljs.core.hash_map,map__31903):map__31903);var opts = map__31903__$1;var filter_spec = cljs.core.get.call(null,map__31903__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__31904 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__31904,(0),null);var notifychan = cljs.core.nth.call(null,vec__31904,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31904,tolerance_paths,notifychan,vec__31902,map__31903,map__31903__$1,opts,filter_spec){
return (function (p__31905){var vec__31906 = p__31905;var k = cljs.core.nth.call(null,vec__31906,(0),null);var tolerance = cljs.core.nth.call(null,vec__31906,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__31906,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31904,tolerance_paths,notifychan,vec__31902,map__31903,map__31903__$1,opts,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31904,tolerance_paths,notifychan,vec__31902,map__31903,map__31903__$1,opts,filter_spec){
return (function (k){var vec__31907 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__31907,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__31907,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31904,tolerance_paths,notifychan,vec__31902,map__31903,map__31903__$1,opts,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31904,tolerance_paths,notifychan,created_paths,vec__31902,map__31903,map__31903__$1,opts,filter_spec){
return (function (p__31908){var vec__31909 = p__31908;var k = cljs.core.nth.call(null,vec__31909,(0),null);var tolerance = cljs.core.nth.call(null,vec__31909,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__31909,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31904,tolerance_paths,notifychan,created_paths,vec__31902,map__31903,map__31903__$1,opts,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31904,tolerance_paths,notifychan,created_paths,vec__31902,map__31903,map__31903__$1,opts,filter_spec){
return (function (k){var vec__31910 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__31910,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__31910,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31904,tolerance_paths,notifychan,created_paths,vec__31902,map__31903,map__31903__$1,opts,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__31911 = cljs.core.seq.call(null,delete_path_keys);var chunk__31912 = null;var count__31913 = (0);var i__31914 = (0);while(true){
if((i__31914 < count__31913))
{var k = cljs.core._nth.call(null,chunk__31912,i__31914);var temp__4124__auto___31917 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___31917))
{var path_31918 = temp__4124__auto___31917;clustermap.components.map.delete_path.call(null,leaflet_map,path_31918);
} else
{}
{
var G__31919 = seq__31911;
var G__31920 = chunk__31912;
var G__31921 = count__31913;
var G__31922 = (i__31914 + (1));
seq__31911 = G__31919;
chunk__31912 = G__31920;
count__31913 = G__31921;
i__31914 = G__31922;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31911);if(temp__4126__auto__)
{var seq__31911__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31911__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31911__$1);{
var G__31923 = cljs.core.chunk_rest.call(null,seq__31911__$1);
var G__31924 = c__4408__auto__;
var G__31925 = cljs.core.count.call(null,c__4408__auto__);
var G__31926 = (0);
seq__31911 = G__31923;
chunk__31912 = G__31924;
count__31913 = G__31925;
i__31914 = G__31926;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31911__$1);var temp__4124__auto___31927 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___31927))
{var path_31928 = temp__4124__auto___31927;clustermap.components.map.delete_path.call(null,leaflet_map,path_31928);
} else
{}
{
var G__31929 = cljs.core.next.call(null,seq__31911__$1);
var G__31930 = null;
var G__31931 = (0);
var G__31932 = (0);
seq__31911 = G__31929;
chunk__31912 = G__31930;
count__31913 = G__31931;
i__31914 = G__31932;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31904,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__31902,map__31903,map__31903__$1,opts,filter_spec){
return (function (m,p__31915){var map__31916 = p__31915;var map__31916__$1 = ((cljs.core.seq_QMARK_.call(null,map__31916))?cljs.core.apply.call(null,cljs.core.hash_map,map__31916):map__31916);var path = map__31916__$1;var id = cljs.core.get.call(null,map__31916__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__31904,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__31902,map__31903,map__31903__$1,opts,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__31886 = null;if (arguments.length > 7) {
  p__31886 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__31886);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__31933){
var comm = cljs.core.first(arglist__31933);
arglist__31933 = cljs.core.next(arglist__31933);
var fetch_boundarylines_fn = cljs.core.first(arglist__31933);
arglist__31933 = cljs.core.next(arglist__31933);
var leaflet_map = cljs.core.first(arglist__31933);
arglist__31933 = cljs.core.next(arglist__31933);
var paths_atom = cljs.core.first(arglist__31933);
arglist__31933 = cljs.core.next(arglist__31933);
var path_selections_atom = cljs.core.first(arglist__31933);
arglist__31933 = cljs.core.next(arglist__31933);
var new_path_highlights = cljs.core.first(arglist__31933);
arglist__31933 = cljs.core.next(arglist__31933);
var new_selection_paths = cljs.core.first(arglist__31933);
var p__31886 = cljs.core.rest(arglist__31933);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__31886);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__31936){var vec__31937 = p__31936;var tz = cljs.core.nth.call(null,vec__31937,(0),null);var collection = cljs.core.nth.call(null,vec__31937,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__31938,owner){var map__32106 = p__31938;var map__32106__$1 = ((cljs.core.seq_QMARK_.call(null,map__32106))?cljs.core.apply.call(null,cljs.core.hash_map,map__32106):map__32106);var cursor_data = map__32106__$1;var map__32107 = cljs.core.get.call(null,map__32106__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32107__$1 = ((cljs.core.seq_QMARK_.call(null,map__32107))?cljs.core.apply.call(null,cljs.core.hash_map,map__32107):map__32107);var cursor = map__32107__$1;var data = cljs.core.get.call(null,map__32107__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__32107__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__32107__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32108 = cljs.core.get.call(null,map__32107__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32108__$1 = ((cljs.core.seq_QMARK_.call(null,map__32108))?cljs.core.apply.call(null,cljs.core.hash_map,map__32108):map__32108);var controls = map__32108__$1;var colorchooser = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var boundaryline_agg = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__32106__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__32106__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t32109 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32109 = (function (colorchooser,initial_bounds,owner,data,map__32106,zoom,map_options,cursor_data,geotag_aggs,filter_spec,map__32108,map_component,link_render_fn,boundaryline_collections,controls,map__32107,cursor,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,point_data,p__31938,boundaryline_agg,meta32110){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.owner = owner;
this.data = data;
this.map__32106 = map__32106;
this.zoom = zoom;
this.map_options = map_options;
this.cursor_data = cursor_data;
this.geotag_aggs = geotag_aggs;
this.filter_spec = filter_spec;
this.map__32108 = map__32108;
this.map_component = map_component;
this.link_render_fn = link_render_fn;
this.boundaryline_collections = boundaryline_collections;
this.controls = controls;
this.map__32107 = map__32107;
this.cursor = cursor;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.show_points = show_points;
this.link_click_fn = link_click_fn;
this.filter = filter;
this.point_data = point_data;
this.p__31938 = p__31938;
this.boundaryline_agg = boundaryline_agg;
this.meta32110 = meta32110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32109.cljs$lang$type = true;
clustermap.components.map.t32109.cljs$lang$ctorStr = "clustermap.components.map/t32109";
clustermap.components.map.t32109.cljs$lang$ctorPrWriter = ((function (map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t32109");
});})(map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32109.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t32109.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__32112 = om.core.get_state.call(null,self__.owner);var map__32112__$1 = ((cljs.core.seq_QMARK_.call(null,map__32112))?cljs.core.apply.call(null,cljs.core.hash_map,map__32112):map__32112);var map__32113 = cljs.core.get.call(null,map__32112__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32113__$1 = ((cljs.core.seq_QMARK_.call(null,map__32113))?cljs.core.apply.call(null,cljs.core.hash_map,map__32113):map__32113);var path_selections = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32109.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32109.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$,p__32114,p__32115){var self__ = this;
var map__32116 = p__32114;var map__32116__$1 = ((cljs.core.seq_QMARK_.call(null,map__32116))?cljs.core.apply.call(null,cljs.core.hash_map,map__32116):map__32116);var next_cursor_data = map__32116__$1;var map__32117 = cljs.core.get.call(null,map__32116__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32117__$1 = ((cljs.core.seq_QMARK_.call(null,map__32117))?cljs.core.apply.call(null,cljs.core.hash_map,map__32117):map__32117);var next_cursor = map__32117__$1;var next_data = cljs.core.get.call(null,map__32117__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__32117__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__32117__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32118 = cljs.core.get.call(null,map__32117__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32118__$1 = ((cljs.core.seq_QMARK_.call(null,map__32118))?cljs.core.apply.call(null,cljs.core.hash_map,map__32118):map__32118);var next_colorchooser = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_zoom = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_boundaryline_agg = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_link_click_fn = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var next_link_render_fn = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var next_show_points = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__32116__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__32116__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32119 = p__32115;var map__32119__$1 = ((cljs.core.seq_QMARK_.call(null,map__32119))?cljs.core.apply.call(null,cljs.core.hash_map,map__32119):map__32119);var map__32120 = cljs.core.get.call(null,map__32119__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32120__$1 = ((cljs.core.seq_QMARK_.call(null,map__32120))?cljs.core.apply.call(null,cljs.core.hash_map,map__32120):map__32120);var next_markers = cljs.core.get.call(null,map__32120__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__32120__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_paths = cljs.core.get.call(null,map__32120__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__32120__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__32119__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__32119__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__32119__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__32119__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__32119__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var this$__$1 = this;var map__32121 = om.core.get_shared.call(null,self__.owner);var map__32121__$1 = ((cljs.core.seq_QMARK_.call(null,map__32121))?cljs.core.apply.call(null,cljs.core.hash_map,map__32121):map__32121);var point_in_boundarylines_fn = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__32122 = om.core.get_state.call(null,self__.owner);var map__32122__$1 = ((cljs.core.seq_QMARK_.call(null,map__32122))?cljs.core.apply.call(null,cljs.core.hash_map,map__32122):map__32122);var map__32123 = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32123__$1 = ((cljs.core.seq_QMARK_.call(null,map__32123))?cljs.core.apply.call(null,cljs.core.hash_map,map__32123):map__32123);var path_selections = cljs.core.get.call(null,map__32123__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32123__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32123__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__32123__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__32123__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var zoom_changed = cljs.core.not_EQ_.call(null,next_zoom,self__.zoom);if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
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
{var c__9125__auto___32273 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32273,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32273,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_32146){var state_val_32147 = (state_32146[(1)]);if((state_val_32147 === (5)))
{var inst_32144 = (state_32146[(2)]);var state_32146__$1 = state_32146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32146__$1,inst_32144);
} else
{if((state_val_32147 === (4)))
{var state_32146__$1 = state_32146;var statearr_32148_32274 = state_32146__$1;(statearr_32148_32274[(2)] = null);
(statearr_32148_32274[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32147 === (3)))
{var inst_32136 = (state_32146[(7)]);var inst_32138 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32139 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_32140 = (new cljs.core.PersistentVector(null,1,(5),inst_32138,inst_32139,null));var inst_32141 = om.core.update_BANG_.call(null,self__.cursor,inst_32140,inst_32136);var state_32146__$1 = state_32146;var statearr_32149_32275 = state_32146__$1;(statearr_32149_32275[(2)] = inst_32141);
(statearr_32149_32275[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32147 === (2)))
{var inst_32136 = (state_32146[(7)]);var inst_32136__$1 = (state_32146[(2)]);var state_32146__$1 = (function (){var statearr_32150 = state_32146;(statearr_32150[(7)] = inst_32136__$1);
return statearr_32150;
})();if(cljs.core.truth_(inst_32136__$1))
{var statearr_32151_32276 = state_32146__$1;(statearr_32151_32276[(1)] = (3));
} else
{var statearr_32152_32277 = state_32146__$1;(statearr_32152_32277[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32147 === (1)))
{var inst_32124 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32125 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32126 = leaflet_map.getZoom();var inst_32127 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_32126);var inst_32128 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32129 = om.core._value.call(null,next_filter);var inst_32130 = leaflet_map.getBounds();var inst_32131 = clustermap.components.map.bounds_array.call(null,inst_32130);var inst_32132 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32133 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32134 = fetch_aggregation_data_fn.call(null,inst_32124,inst_32125,inst_32127,inst_32128,inst_32129,inst_32131,inst_32132,inst_32133);var state_32146__$1 = state_32146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32146__$1,(2),inst_32134);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32273,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32273,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32156 = [null,null,null,null,null,null,null,null];(statearr_32156[(0)] = state_machine__9111__auto__);
(statearr_32156[(1)] = (1));
return statearr_32156;
});
var state_machine__9111__auto____1 = (function (state_32146){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32146);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32157){if((e32157 instanceof Object))
{var ex__9114__auto__ = e32157;var statearr_32158_32278 = state_32146;(statearr_32158_32278[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32146);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32157;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32279 = state_32146;
state_32146 = G__32279;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32146){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32273,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32159 = f__9126__auto__.call(null);(statearr_32159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32273);
return statearr_32159;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32273,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
var c__9125__auto___32280 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32280,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32280,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_32180){var state_val_32181 = (state_32180[(1)]);if((state_val_32181 === (5)))
{var inst_32178 = (state_32180[(2)]);var state_32180__$1 = state_32180;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32180__$1,inst_32178);
} else
{if((state_val_32181 === (4)))
{var state_32180__$1 = state_32180;var statearr_32182_32281 = state_32180__$1;(statearr_32182_32281[(2)] = null);
(statearr_32182_32281[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32181 === (3)))
{var inst_32170 = (state_32180[(7)]);var inst_32172 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32173 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_32174 = (new cljs.core.PersistentVector(null,1,(5),inst_32172,inst_32173,null));var inst_32175 = om.core.update_BANG_.call(null,self__.cursor,inst_32174,inst_32170);var state_32180__$1 = state_32180;var statearr_32183_32282 = state_32180__$1;(statearr_32183_32282[(2)] = inst_32175);
(statearr_32183_32282[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32181 === (2)))
{var inst_32170 = (state_32180[(7)]);var inst_32170__$1 = (state_32180[(2)]);var state_32180__$1 = (function (){var statearr_32184 = state_32180;(statearr_32184[(7)] = inst_32170__$1);
return statearr_32184;
})();if(cljs.core.truth_(inst_32170__$1))
{var statearr_32185_32283 = state_32180__$1;(statearr_32185_32283[(1)] = (3));
} else
{var statearr_32186_32284 = state_32180__$1;(statearr_32186_32284[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32181 === (1)))
{var inst_32160 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32161 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32162 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32163 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover"];var inst_32164 = (new cljs.core.PersistentVector(null,5,(5),inst_32162,inst_32163,null));var inst_32165 = om.core._value.call(null,next_filter);var inst_32166 = leaflet_map.getBounds();var inst_32167 = clustermap.components.map.bounds_array.call(null,inst_32166);var inst_32168 = fetch_point_data_fn.call(null,inst_32160,inst_32161,"!postcode",inst_32164,(1000),inst_32165,inst_32167);var state_32180__$1 = state_32180;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32180__$1,(2),inst_32168);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32280,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32280,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32190 = [null,null,null,null,null,null,null,null];(statearr_32190[(0)] = state_machine__9111__auto__);
(statearr_32190[(1)] = (1));
return statearr_32190;
});
var state_machine__9111__auto____1 = (function (state_32180){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32180);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32191){if((e32191 instanceof Object))
{var ex__9114__auto__ = e32191;var statearr_32192_32285 = state_32180;(statearr_32192_32285[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32180);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32191;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32286 = state_32180;
state_32180 = G__32286;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32180){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32280,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32193 = f__9126__auto__.call(null);(statearr_32193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32280);
return statearr_32193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32280,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32287 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32287,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32287,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_32207){var state_val_32208 = (state_32207[(1)]);if((state_val_32208 === (5)))
{var inst_32205 = (state_32207[(2)]);var state_32207__$1 = state_32207;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32207__$1,inst_32205);
} else
{if((state_val_32208 === (4)))
{var state_32207__$1 = state_32207;var statearr_32209_32288 = state_32207__$1;(statearr_32209_32288[(2)] = null);
(statearr_32209_32288[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32208 === (3)))
{var inst_32197 = (state_32207[(7)]);var inst_32199 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32200 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_32201 = (new cljs.core.PersistentVector(null,3,(5),inst_32199,inst_32200,null));var inst_32202 = om.core.update_BANG_.call(null,self__.cursor,inst_32201,inst_32197);var state_32207__$1 = state_32207;var statearr_32210_32289 = state_32207__$1;(statearr_32210_32289[(2)] = inst_32202);
(statearr_32210_32289[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32208 === (2)))
{var inst_32197 = (state_32207[(7)]);var inst_32197__$1 = (state_32207[(2)]);var state_32207__$1 = (function (){var statearr_32211 = state_32207;(statearr_32211[(7)] = inst_32197__$1);
return statearr_32211;
})();if(cljs.core.truth_(inst_32197__$1))
{var statearr_32212_32290 = state_32207__$1;(statearr_32212_32290[(1)] = (3));
} else
{var statearr_32213_32291 = state_32207__$1;(statearr_32213_32291[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32208 === (1)))
{var inst_32194 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32195 = fetch_geotag_data_fn.call(null,inst_32194);var state_32207__$1 = state_32207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32207__$1,(2),inst_32195);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32287,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32287,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32217 = [null,null,null,null,null,null,null,null];(statearr_32217[(0)] = state_machine__9111__auto__);
(statearr_32217[(1)] = (1));
return statearr_32217;
});
var state_machine__9111__auto____1 = (function (state_32207){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32207);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32218){if((e32218 instanceof Object))
{var ex__9114__auto__ = e32218;var statearr_32219_32292 = state_32207;(statearr_32219_32292[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32207);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32218;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32293 = state_32207;
state_32207 = G__32293;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32207){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32287,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32220 = f__9126__auto__.call(null);(statearr_32220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32287);
return statearr_32220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32287,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs))) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32294 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32294,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32294,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_32239){var state_val_32240 = (state_32239[(1)]);if((state_val_32240 === (5)))
{var inst_32237 = (state_32239[(2)]);var state_32239__$1 = state_32239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32239__$1,inst_32237);
} else
{if((state_val_32240 === (4)))
{var state_32239__$1 = state_32239;var statearr_32241_32295 = state_32239__$1;(statearr_32241_32295[(2)] = null);
(statearr_32241_32295[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32240 === (3)))
{var inst_32228 = (state_32239[(7)]);var inst_32230 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32231 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_32232 = (new cljs.core.PersistentVector(null,3,(5),inst_32230,inst_32231,null));var inst_32233 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32228);var inst_32234 = om.core.update_BANG_.call(null,self__.cursor,inst_32232,inst_32233);var state_32239__$1 = state_32239;var statearr_32242_32296 = state_32239__$1;(statearr_32242_32296[(2)] = inst_32234);
(statearr_32242_32296[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32240 === (2)))
{var inst_32228 = (state_32239[(7)]);var inst_32228__$1 = (state_32239[(2)]);var state_32239__$1 = (function (){var statearr_32243 = state_32239;(statearr_32243[(7)] = inst_32228__$1);
return statearr_32243;
})();if(cljs.core.truth_(inst_32228__$1))
{var statearr_32244_32297 = state_32239__$1;(statearr_32244_32297[(1)] = (3));
} else
{var statearr_32245_32298 = state_32239__$1;(statearr_32245_32298[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32240 === (1)))
{var inst_32221 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32222 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32223 = [next_filter];var inst_32224 = cljs.core.PersistentHashMap.fromArrays(inst_32222,inst_32223);var inst_32225 = cljs.core.merge.call(null,inst_32221,inst_32224);var inst_32226 = fetch_geotag_agg_data_fn.call(null,inst_32225);var state_32239__$1 = state_32239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32239__$1,(2),inst_32226);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32294,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32294,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32249 = [null,null,null,null,null,null,null,null];(statearr_32249[(0)] = state_machine__9111__auto__);
(statearr_32249[(1)] = (1));
return statearr_32249;
});
var state_machine__9111__auto____1 = (function (state_32239){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32239);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32250){if((e32250 instanceof Object))
{var ex__9114__auto__ = e32250;var statearr_32251_32299 = state_32239;(statearr_32251_32299[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32239);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32250;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32300 = state_32239;
state_32239 = G__32300;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32239){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32294,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32252 = f__9126__auto__.call(null);(statearr_32252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32294);
return statearr_32252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32294,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
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
{var vec__32253_32301 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_32302 = cljs.core.nth.call(null,vec__32253_32301,(0),null);var selection_path_colours_32303 = cljs.core.nth.call(null,vec__32253_32301,(1),null);var update_paths_invocation_32304 = ((function (vec__32253_32301,new_threshold_colors_32302,selection_path_colours_32303,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_32303,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec], null));
});})(vec__32253_32301,new_threshold_colors_32302,selection_path_colours_32303,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_32302,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_32302);
} else
{}
var temp__4126__auto___32305 = update_paths_invocation_32304.call(null);if(cljs.core.truth_(temp__4126__auto___32305))
{var notify_chan_32306 = temp__4126__auto___32305;var c__9125__auto___32307 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32307,notify_chan_32306,temp__4126__auto___32305,vec__32253_32301,new_threshold_colors_32302,selection_path_colours_32303,update_paths_invocation_32304,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32307,notify_chan_32306,temp__4126__auto___32305,vec__32253_32301,new_threshold_colors_32302,selection_path_colours_32303,update_paths_invocation_32304,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (state_32258){var state_val_32259 = (state_32258[(1)]);if((state_val_32259 === (2)))
{var inst_32255 = (state_32258[(2)]);var inst_32256 = update_paths_invocation_32304.call(null);var state_32258__$1 = (function (){var statearr_32260 = state_32258;(statearr_32260[(7)] = inst_32255);
return statearr_32260;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32258__$1,inst_32256);
} else
{if((state_val_32259 === (1)))
{var state_32258__$1 = state_32258;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32258__$1,(2),notify_chan_32306);
} else
{return null;
}
}
});})(c__9125__auto___32307,notify_chan_32306,temp__4126__auto___32305,vec__32253_32301,new_threshold_colors_32302,selection_path_colours_32303,update_paths_invocation_32304,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32307,notify_chan_32306,temp__4126__auto___32305,vec__32253_32301,new_threshold_colors_32302,selection_path_colours_32303,update_paths_invocation_32304,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32264 = [null,null,null,null,null,null,null,null];(statearr_32264[(0)] = state_machine__9111__auto__);
(statearr_32264[(1)] = (1));
return statearr_32264;
});
var state_machine__9111__auto____1 = (function (state_32258){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32258);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32265){if((e32265 instanceof Object))
{var ex__9114__auto__ = e32265;var statearr_32266_32308 = state_32258;(statearr_32266_32308[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32258);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32265;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32309 = state_32258;
state_32258 = G__32309;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32258){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32307,notify_chan_32306,temp__4126__auto___32305,vec__32253_32301,new_threshold_colors_32302,selection_path_colours_32303,update_paths_invocation_32304,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32267 = f__9126__auto__.call(null);(statearr_32267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32307);
return statearr_32267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32307,notify_chan_32306,temp__4126__auto___32305,vec__32253_32301,new_threshold_colors_32302,selection_path_colours_32303,update_paths_invocation_32304,map__32121,map__32121__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32122,map__32122__$1,map__32123,map__32123__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32116,map__32116__$1,next_cursor_data,map__32117,map__32117__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32118,map__32118__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32119,map__32119__$1,map__32120,map__32120__$1,next_markers,next_geotag_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
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
});})(map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32109.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32109.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__32268 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__32268__$1 = ((cljs.core.seq_QMARK_.call(null,map__32268))?cljs.core.apply.call(null,cljs.core.hash_map,map__32268):map__32268);var map = map__32268__$1;var path = cljs.core.get.call(null,map__32268__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__32268__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32268__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__32269 = om.core.get_shared.call(null,self__.owner);var map__32269__$1 = ((cljs.core.seq_QMARK_.call(null,map__32269))?cljs.core.apply.call(null,cljs.core.hash_map,map__32269):map__32269);var path_marker_click_fn = cljs.core.get.call(null,map__32269__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32269__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32269__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32269__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
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
});})(node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
});})(node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__32270 = e;var G__32270__$1 = (((G__32270 == null))?null:G__32270.target);var G__32270__$2 = (((G__32270__$1 == null))?null:domina.attr.call(null,G__32270__$1,"data-boundaryline-id"));var G__32270__$3 = (((G__32270__$2 == null))?null:path_marker_click_fn.call(null,G__32270__$2));return G__32270__$3;
});})(node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__32268,map__32268__$1,map,path,markers,leaflet_map,map__32269,map__32269__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
});})(map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32109.prototype.om$core$IRender$ = true;
clustermap.components.map.t32109.prototype.om$core$IRender$render$arity$1 = ((function (map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (_32111){var self__ = this;
var _32111__$1 = this;return self__.meta32110;
});})(map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function (_32111,meta32110__$1){var self__ = this;
var _32111__$1 = this;return (new clustermap.components.map.t32109(self__.colorchooser,self__.initial_bounds,self__.owner,self__.data,self__.map__32106,self__.zoom,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.map__32108,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.map__32107,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.show_points,self__.link_click_fn,self__.filter,self__.point_data,self__.p__31938,self__.boundaryline_agg,meta32110__$1));
});})(map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t32109 = ((function (map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter){
return (function __GT_t32109(colorchooser__$1,initial_bounds__$1,owner__$1,data__$1,map__32106__$2,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map__32108__$2,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,map__32107__$2,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,point_data__$1,p__31938__$1,boundaryline_agg__$1,meta32110){return (new clustermap.components.map.t32109(colorchooser__$1,initial_bounds__$1,owner__$1,data__$1,map__32106__$2,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map__32108__$2,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,map__32107__$2,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,point_data__$1,p__31938__$1,boundaryline_agg__$1,meta32110));
});})(map__32106,map__32106__$1,cursor_data,map__32107,map__32107__$1,cursor,data,point_data,boundaryline_collections,map__32108,map__32108__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t32109(colorchooser,initial_bounds,owner,data,map__32106__$1,zoom,map_options,cursor_data,geotag_aggs,filter_spec,map__32108__$1,map_component,link_render_fn,boundaryline_collections,controls,map__32107__$1,cursor,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,point_data,p__31938,boundaryline_agg,null));
});
