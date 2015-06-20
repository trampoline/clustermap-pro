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
clustermap.components.map.default_api_key = (function (){var or__3639__auto__ = (function (){var G__32045 = config;var G__32045__$1 = (((G__32045 == null))?null:G__32045.components);var G__32045__$2 = (((G__32045__$1 == null))?null:G__32045__$1.map);var G__32045__$3 = (((G__32045__$2 == null))?null:G__32045__$2.api_key);return G__32045__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__32046){var map__32048 = p__32046;var map__32048__$1 = ((cljs.core.seq_QMARK_.call(null,map__32048))?cljs.core.apply.call(null,cljs.core.hash_map,map__32048):map__32048);var api_key = cljs.core.get.call(null,map__32048__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__32048__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__32048__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__32048__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__32049){
var m = cljs.core.first(arglist__32049);
var all_bounds = cljs.core.rest(arglist__32049);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.render_marker_icon = (function render_marker_icon(p__32050,location_sites){var map__32052 = p__32050;var map__32052__$1 = ((cljs.core.seq_QMARK_.call(null,map__32052))?cljs.core.apply.call(null,cljs.core.hash_map,map__32052):map__32052);var location_spec = map__32052__$1;var marker_render_fn = cljs.core.get.call(null,map__32052__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));if((cljs.core.count.call(null,location_sites) > (1)))
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
} else
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
}
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(item_render_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"location-marker-popup-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__32057(s__32058){return (new cljs.core.LazySeq(null,(function (){var s__32058__$1 = s__32058;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32058__$1);if(temp__4126__auto__)
{var s__32058__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32058__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32058__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32060 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32059 = (0);while(true){
if((i__32059 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__32059);cljs.core.chunk_append.call(null,b__32060,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))));
{
var G__32061 = (i__32059 + (1));
i__32059 = G__32061;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32060),iter__32057.call(null,cljs.core.chunk_rest.call(null,s__32058__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32060),null);
}
} else
{var site = cljs.core.first.call(null,s__32058__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))),iter__32057.call(null,cljs.core.rest.call(null,s__32058__$2)));
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
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__32062){var map__32067 = p__32062;var map__32067__$1 = ((cljs.core.seq_QMARK_.call(null,map__32067))?cljs.core.apply.call(null,cljs.core.hash_map,map__32067):map__32067);var map__32068 = cljs.core.get.call(null,map__32067__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32068__$1 = ((cljs.core.seq_QMARK_.call(null,map__32068))?cljs.core.apply.call(null,cljs.core.hash_map,map__32068):map__32068);var location_spec = map__32068__$1;var item_click_fn = cljs.core.get.call(null,map__32068__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32068__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32068__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var temp__4124__auto__ = (function (){var G__32069 = location_sites;var G__32069__$1 = (((G__32069 == null))?null:cljs.core.first.call(null,G__32069));var G__32069__$2 = (((G__32069__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__32069__$1));var G__32069__$3 = (((G__32069__$2 == null))?null:cljs.core.reverse.call(null,G__32069__$2));var G__32069__$4 = (((G__32069__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__32069__$3));return G__32069__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32067,map__32067__$1,map__32068,map__32068__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32067,map__32067__$1,map__32068,map__32068__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);leaflet_marker.on("mouseover",((function (icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32067,map__32067__$1,map__32068,map__32068__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (e){return leaflet_marker.openPopup();
});})(icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32067,map__32067__$1,map__32068,map__32068__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
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
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_32070_32071 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32070_32071,sb__4579__auto__,temp__4124__auto__,map__32067,map__32067__$1,map__32068,map__32068__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_32070_32071,sb__4579__auto__,temp__4124__auto__,map__32067,map__32067__$1,map__32068,map__32068__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32070_32071;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__32072){var map__32078 = p__32072;var map__32078__$1 = ((cljs.core.seq_QMARK_.call(null,map__32078))?cljs.core.apply.call(null,cljs.core.hash_map,map__32078):map__32078);var marker = map__32078__$1;var click_handler_keys = cljs.core.get.call(null,map__32078__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32078__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__32079 = cljs.core.seq.call(null,click_handler_keys);var chunk__32080 = null;var count__32081 = (0);var i__32082 = (0);while(true){
if((i__32082 < count__32081))
{var chk = cljs.core._nth.call(null,chunk__32080,i__32082);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32083 = seq__32079;
var G__32084 = chunk__32080;
var G__32085 = count__32081;
var G__32086 = (i__32082 + (1));
seq__32079 = G__32083;
chunk__32080 = G__32084;
count__32081 = G__32085;
i__32082 = G__32086;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32079);if(temp__4126__auto__)
{var seq__32079__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32079__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32079__$1);{
var G__32087 = cljs.core.chunk_rest.call(null,seq__32079__$1);
var G__32088 = c__4408__auto__;
var G__32089 = cljs.core.count.call(null,c__4408__auto__);
var G__32090 = (0);
seq__32079 = G__32087;
chunk__32080 = G__32088;
count__32081 = G__32089;
i__32082 = G__32090;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__32079__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32091 = cljs.core.next.call(null,seq__32079__$1);
var G__32092 = null;
var G__32093 = (0);
var G__32094 = (0);
seq__32079 = G__32091;
chunk__32080 = G__32092;
count__32081 = G__32093;
i__32082 = G__32094;
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
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__32095,location_sites,p__32096){var map__32100 = p__32095;var map__32100__$1 = ((cljs.core.seq_QMARK_.call(null,map__32100))?cljs.core.apply.call(null,cljs.core.hash_map,map__32100):map__32100);var marker = map__32100__$1;var click_handler_keys = cljs.core.get.call(null,map__32100__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32100__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32100__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__32101 = p__32096;var map__32101__$1 = ((cljs.core.seq_QMARK_.call(null,map__32101))?cljs.core.apply.call(null,cljs.core.hash_map,map__32101):map__32101);var map__32102 = cljs.core.get.call(null,map__32101__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32102__$1 = ((cljs.core.seq_QMARK_.call(null,map__32102))?cljs.core.apply.call(null,cljs.core.hash_map,map__32102):map__32102);var location_spec = map__32102__$1;var item_click_fn = cljs.core.get.call(null,map__32102__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32102__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32102__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,popup,map__32100,map__32100__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32101,map__32101__$1,map__32102,map__32102__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,popup,map__32100,map__32100__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32101,map__32101__$1,map__32102,map__32102__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
leaflet_marker.setIcon(icon);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,item_render_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__32103){var map__32105 = p__32103;var map__32105__$1 = ((cljs.core.seq_QMARK_.call(null,map__32105))?cljs.core.apply.call(null,cljs.core.hash_map,map__32105):map__32105);var marker = map__32105__$1;var click_handler_keys = cljs.core.get.call(null,map__32105__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32105__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32105__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
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
,update_marker_keys));var ___$1 = (function (){var seq__32110 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32111 = null;var count__32112 = (0);var i__32113 = (0);while(true){
if((i__32113 < count__32112))
{var k = cljs.core._nth.call(null,chunk__32111,i__32113);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32114 = seq__32110;
var G__32115 = chunk__32111;
var G__32116 = count__32112;
var G__32117 = (i__32113 + (1));
seq__32110 = G__32114;
chunk__32111 = G__32115;
count__32112 = G__32116;
i__32113 = G__32117;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32110);if(temp__4126__auto__)
{var seq__32110__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32110__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32110__$1);{
var G__32118 = cljs.core.chunk_rest.call(null,seq__32110__$1);
var G__32119 = c__4408__auto__;
var G__32120 = cljs.core.count.call(null,c__4408__auto__);
var G__32121 = (0);
seq__32110 = G__32118;
chunk__32111 = G__32119;
count__32112 = G__32120;
i__32113 = G__32121;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32110__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32122 = cljs.core.next.call(null,seq__32110__$1);
var G__32123 = null;
var G__32124 = (0);
var G__32125 = (0);
seq__32110 = G__32122;
chunk__32111 = G__32123;
count__32112 = G__32124;
i__32113 = G__32125;
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
clustermap.components.map.marker_color_class = (function marker_color_class(n){var pred__32129 = cljs.core._EQ_;var expr__32130 = n;if(cljs.core.truth_(pred__32129.call(null,(0),expr__32130)))
{return "marker-cluster-small";
} else
{if(cljs.core.truth_(pred__32129.call(null,(1),expr__32130)))
{return "marker-cluster-medium";
} else
{if(cljs.core.truth_(pred__32129.call(null,(2),expr__32130)))
{return "marker-cluster-large";
} else
{return "marker-cluster-small";
}
}
}
});
clustermap.components.map.render_geotag_icon = (function render_geotag_icon(p__32132,geotag,geotag_agg){var map__32135 = p__32132;var map__32135__$1 = ((cljs.core.seq_QMARK_.call(null,map__32135))?cljs.core.apply.call(null,cljs.core.hash_map,map__32135):map__32135);var geotag_agg_spec = map__32135__$1;var colorchooser_fn = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geotag_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32136 = icon_render_fn.call(null,geotag,geotag_agg);if(cljs.core.map_QMARK_.call(null,attrs32136))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32136)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32136))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geotag_marker_popup_content = (function render_geotag_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))))));
});
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__32137,geotag,geotag_agg){var map__32139 = p__32137;var map__32139__$1 = ((cljs.core.seq_QMARK_.call(null,map__32139))?cljs.core.apply.call(null,cljs.core.hash_map,map__32139):map__32139);var geotag_agg_spec = map__32139__$1;var click_fn = cljs.core.get.call(null,map__32139__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32139__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32139__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32139,map__32139__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32139,map__32139__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__32140,p__32141,geotag,geotag_agg){var map__32144 = p__32140;var map__32144__$1 = ((cljs.core.seq_QMARK_.call(null,map__32144))?cljs.core.apply.call(null,cljs.core.hash_map,map__32144):map__32144);var geotag_agg_spec = map__32144__$1;var click_fn = cljs.core.get.call(null,map__32144__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32144__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32144__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32145 = p__32141;var map__32145__$1 = ((cljs.core.seq_QMARK_.call(null,map__32145))?cljs.core.apply.call(null,cljs.core.hash_map,map__32145):map__32145);var marker = map__32145__$1;var click_handler_key = cljs.core.get.call(null,map__32145__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32145__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_32146 = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var new_click_handler_key_32147 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_32146);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32147);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__32148,points_showing_QMARK_){var map__32154 = p__32148;var map__32154__$1 = ((cljs.core.seq_QMARK_.call(null,map__32154))?cljs.core.apply.call(null,cljs.core.hash_map,map__32154):map__32154);var geotag_agg_spec = map__32154__$1;var geotag_agg_data = cljs.core.get.call(null,map__32154__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__32154__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__32154__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32154__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32154__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32154__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geotag_agg_data):cljs.core.constantly.call(null,(1)));var geotag_agg_spec__$1 = cljs.core.assoc.call(null,geotag_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geotags_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,map__32154,map__32154__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(colorchooser_fn,geotag_agg_spec__$1,map__32154,map__32154__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32154,map__32154__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32154,map__32154__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
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
})())?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32154,map__32154__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32154,map__32154__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32154,map__32154__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32154,map__32154__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32155 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32156 = null;var count__32157 = (0);var i__32158 = (0);while(true){
if((i__32158 < count__32157))
{var k = cljs.core._nth.call(null,chunk__32156,i__32158);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32159 = seq__32155;
var G__32160 = chunk__32156;
var G__32161 = count__32157;
var G__32162 = (i__32158 + (1));
seq__32155 = G__32159;
chunk__32156 = G__32160;
count__32157 = G__32161;
i__32158 = G__32162;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32155);if(temp__4126__auto__)
{var seq__32155__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32155__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32155__$1);{
var G__32163 = cljs.core.chunk_rest.call(null,seq__32155__$1);
var G__32164 = c__4408__auto__;
var G__32165 = cljs.core.count.call(null,c__4408__auto__);
var G__32166 = (0);
seq__32155 = G__32163;
chunk__32156 = G__32164;
count__32157 = G__32165;
i__32158 = G__32166;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32155__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32167 = cljs.core.next.call(null,seq__32155__$1);
var G__32168 = null;
var G__32169 = (0);
var G__32170 = (0);
seq__32155 = G__32167;
chunk__32156 = G__32168;
count__32157 = G__32169;
i__32158 = G__32170;
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
clustermap.components.map.render_geohash_icon = (function render_geohash_icon(p__32171,geohash_agg){var map__32174 = p__32171;var map__32174__$1 = ((cljs.core.seq_QMARK_.call(null,map__32174))?cljs.core.apply.call(null,cljs.core.hash_map,map__32174):map__32174);var geohash_agg_spec = map__32174__$1;var colorchooser_fn = cljs.core.get.call(null,map__32174__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32174__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geohash_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32175 = icon_render_fn.call(null,geohash_agg);if(cljs.core.map_QMARK_.call(null,attrs32175))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32175)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32175))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geohash_marker_popup_content = (function render_geohash_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32177 = content;if(cljs.core.map_QMARK_.call(null,attrs32177))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32177)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32177))+"</div>");
}
})())))));
});
/**
* we get bounds for the points contained in the geohash area, so take the
* center point as the marker point
*/
clustermap.components.map.geohash_center_point = (function geohash_center_point(p__32178){var map__32183 = p__32178;var map__32183__$1 = ((cljs.core.seq_QMARK_.call(null,map__32183))?cljs.core.apply.call(null,cljs.core.hash_map,map__32183):map__32183);var geohash_agg = map__32183__$1;var bounds = cljs.core.get.call(null,map__32183__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var vec__32184 = bounds;var vec__32185 = cljs.core.nth.call(null,vec__32184,(0),null);var south = cljs.core.nth.call(null,vec__32185,(0),null);var west = cljs.core.nth.call(null,vec__32185,(1),null);var vec__32186 = cljs.core.nth.call(null,vec__32184,(1),null);var north = cljs.core.nth.call(null,vec__32186,(0),null);var east = cljs.core.nth.call(null,vec__32186,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((south + north) / (2)),((west + east) / (2))], null);
});
clustermap.components.map.create_geohash_marker = (function create_geohash_marker(leaflet_map,p__32187,geohash_agg){var map__32189 = p__32187;var map__32189__$1 = ((cljs.core.seq_QMARK_.call(null,map__32189))?cljs.core.apply.call(null,cljs.core.hash_map,map__32189):map__32189);var geohash_agg_spec = map__32189__$1;var click_fn = cljs.core.get.call(null,map__32189__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32189__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32189__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32189,map__32189__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32189,map__32189__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geohash_marker = (function update_geohash_marker(leaflet_map,p__32190,p__32191,geohash_agg){var map__32194 = p__32190;var map__32194__$1 = ((cljs.core.seq_QMARK_.call(null,map__32194))?cljs.core.apply.call(null,cljs.core.hash_map,map__32194):map__32194);var geohash_agg_spec = map__32194__$1;var click_fn = cljs.core.get.call(null,map__32194__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32194__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32194__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32195 = p__32191;var map__32195__$1 = ((cljs.core.seq_QMARK_.call(null,map__32195))?cljs.core.apply.call(null,cljs.core.hash_map,map__32195):map__32195);var marker = map__32195__$1;var click_handler_key = cljs.core.get.call(null,map__32195__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32195__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var latlong_32196 = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon_32197 = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var new_click_handler_key_32198 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setLatLng(latlong_32196);
leaflet_marker.setIcon(icon_32197);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32198);
return marker;
});
clustermap.components.map.update_geohash_markers = (function update_geohash_markers(leaflet_map,geohash_markers_atom,p__32199,points_showing_QMARK_){var map__32205 = p__32199;var map__32205__$1 = ((cljs.core.seq_QMARK_.call(null,map__32205))?cljs.core.apply.call(null,cljs.core.hash_map,map__32205):map__32205);var geohash_agg_spec = map__32205__$1;var geohash_agg_data = cljs.core.get.call(null,map__32205__$1,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620));var icon_render_fn = cljs.core.get.call(null,map__32205__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32205__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32205__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geohash_agg_data):cljs.core.constantly.call(null,(1)));var geohash_agg_spec__$1 = cljs.core.assoc.call(null,geohash_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geohash_aggs_by_geohash = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,map__32205,map__32205__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (gha){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geohash-grid","geohash-grid",2001750091).cljs$core$IFn$_invoke$arity$1(gha),gha], null);
});})(colorchooser_fn,geohash_agg_spec__$1,map__32205,map__32205__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
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
})())?cljs.core.set.call(null,cljs.core.keys.call(null,geohash_aggs_by_geohash)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32205,map__32205__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32205,map__32205__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32205,map__32205__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32205,map__32205__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32206 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32207 = null;var count__32208 = (0);var i__32209 = (0);while(true){
if((i__32209 < count__32208))
{var k = cljs.core._nth.call(null,chunk__32207,i__32209);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32210 = seq__32206;
var G__32211 = chunk__32207;
var G__32212 = count__32208;
var G__32213 = (i__32209 + (1));
seq__32206 = G__32210;
chunk__32207 = G__32211;
count__32208 = G__32212;
i__32209 = G__32213;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32206);if(temp__4126__auto__)
{var seq__32206__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32206__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32206__$1);{
var G__32214 = cljs.core.chunk_rest.call(null,seq__32206__$1);
var G__32215 = c__4408__auto__;
var G__32216 = cljs.core.count.call(null,c__4408__auto__);
var G__32217 = (0);
seq__32206 = G__32214;
chunk__32207 = G__32215;
count__32208 = G__32216;
i__32209 = G__32217;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32206__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32218 = cljs.core.next.call(null,seq__32206__$1);
var G__32219 = null;
var G__32220 = (0);
var G__32221 = (0);
seq__32206 = G__32218;
chunk__32207 = G__32219;
count__32208 = G__32220;
i__32209 = G__32221;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__32230 = cljs.core.js__GT_clj.call(null,envelope);var map__32230__$1 = ((cljs.core.seq_QMARK_.call(null,map__32230))?cljs.core.apply.call(null,cljs.core.hash_map,map__32230):map__32230);var clj_envelope = map__32230__$1;var vec__32231 = cljs.core.get.call(null,map__32230__$1,"coordinates");var vec__32232 = cljs.core.nth.call(null,vec__32231,(0),null);var vec__32233 = cljs.core.nth.call(null,vec__32232,(0),null);var miny0 = cljs.core.nth.call(null,vec__32233,(0),null);var minx0 = cljs.core.nth.call(null,vec__32233,(1),null);var vec__32234 = cljs.core.nth.call(null,vec__32232,(1),null);var maxy1 = cljs.core.nth.call(null,vec__32234,(0),null);var minx1 = cljs.core.nth.call(null,vec__32234,(1),null);var vec__32235 = cljs.core.nth.call(null,vec__32232,(2),null);var maxy2 = cljs.core.nth.call(null,vec__32235,(0),null);var maxx2 = cljs.core.nth.call(null,vec__32235,(1),null);var vec__32236 = cljs.core.nth.call(null,vec__32232,(3),null);var miny3 = cljs.core.nth.call(null,vec__32236,(0),null);var maxx3 = cljs.core.nth.call(null,vec__32236,(1),null);var vec__32237 = cljs.core.nth.call(null,vec__32232,(4),null);var miny4 = cljs.core.nth.call(null,vec__32237,(0),null);var minx4 = cljs.core.nth.call(null,vec__32237,(1),null);var inner = vec__32232;var coords = vec__32231;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__32238,p__32239){var map__32242 = p__32238;var map__32242__$1 = ((cljs.core.seq_QMARK_.call(null,map__32242))?cljs.core.apply.call(null,cljs.core.hash_map,map__32242):map__32242);var fill_color = cljs.core.get.call(null,map__32242__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__32242__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__32242__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var map__32243 = p__32239;var map__32243__$1 = ((cljs.core.seq_QMARK_.call(null,map__32243))?cljs.core.apply.call(null,cljs.core.hash_map,map__32243):map__32243);var boundaryline_fill_opacity = cljs.core.get.call(null,map__32243__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),0.4);if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
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
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32244,p__32245){var map__32249 = p__32244;var map__32249__$1 = ((cljs.core.seq_QMARK_.call(null,map__32249))?cljs.core.apply.call(null,cljs.core.hash_map,map__32249):map__32249);var path_attrs = map__32249__$1;var selected = cljs.core.get.call(null,map__32249__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__32250 = p__32245;var map__32251 = cljs.core.nth.call(null,vec__32250,(0),null);var map__32251__$1 = ((cljs.core.seq_QMARK_.call(null,map__32251))?cljs.core.apply.call(null,cljs.core.hash_map,map__32251):map__32251);var opts = map__32251__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32251__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32251__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs,opts);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("dblclick",((function (tolerance,bounds,leaflet_path,popup_content,map__32249,map__32249__$1,path_attrs,selected,vec__32250,map__32251,map__32251__$1,opts,path_marker_click_fn,filter_spec){
return (function (e){leaflet_map.fitBounds(leaflet_path.getBounds());
if(cljs.core.truth_(path_marker_click_fn))
{return path_marker_click_fn.call(null,boundaryline_id);
} else
{return null;
}
});})(tolerance,bounds,leaflet_path,popup_content,map__32249,map__32249__$1,path_attrs,selected,vec__32250,map__32251,map__32251__$1,opts,path_marker_click_fn,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32244,var_args){
var p__32245 = null;if (arguments.length > 5) {
  p__32245 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__32244,p__32245);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__32252){
var comm = cljs.core.first(arglist__32252);
arglist__32252 = cljs.core.next(arglist__32252);
var leaflet_map = cljs.core.first(arglist__32252);
arglist__32252 = cljs.core.next(arglist__32252);
var boundaryline_id = cljs.core.first(arglist__32252);
arglist__32252 = cljs.core.next(arglist__32252);
var js_boundaryline = cljs.core.first(arglist__32252);
arglist__32252 = cljs.core.next(arglist__32252);
var p__32244 = cljs.core.first(arglist__32252);
var p__32245 = cljs.core.rest(arglist__32252);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__32244,p__32245);
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
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32253){var vec__32256 = p__32253;var map__32257 = cljs.core.nth.call(null,vec__32256,(0),null);var map__32257__$1 = ((cljs.core.seq_QMARK_.call(null,map__32257))?cljs.core.apply.call(null,cljs.core.hash_map,map__32257):map__32257);var opts = map__32257__$1;var filter_spec = cljs.core.get.call(null,map__32257__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__32253 = null;if (arguments.length > 6) {
  p__32253 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32253);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__32258){
var comm = cljs.core.first(arglist__32258);
arglist__32258 = cljs.core.next(arglist__32258);
var leaflet_map = cljs.core.first(arglist__32258);
arglist__32258 = cljs.core.next(arglist__32258);
var boundaryline_id = cljs.core.first(arglist__32258);
arglist__32258 = cljs.core.next(arglist__32258);
var tolerance = cljs.core.first(arglist__32258);
arglist__32258 = cljs.core.next(arglist__32258);
var js_boundaryline = cljs.core.first(arglist__32258);
arglist__32258 = cljs.core.next(arglist__32258);
var path_attrs = cljs.core.first(arglist__32258);
var p__32253 = cljs.core.rest(arglist__32258);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32253);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32259){var vec__32262 = p__32259;var map__32263 = cljs.core.nth.call(null,vec__32262,(0),null);var map__32263__$1 = ((cljs.core.seq_QMARK_.call(null,map__32263))?cljs.core.apply.call(null,cljs.core.hash_map,map__32263):map__32263);var opts = map__32263__$1;var filter_spec = cljs.core.get.call(null,map__32263__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__32259 = null;if (arguments.length > 6) {
  p__32259 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32259);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__32264){
var comm = cljs.core.first(arglist__32264);
arglist__32264 = cljs.core.next(arglist__32264);
var leaflet_map = cljs.core.first(arglist__32264);
arglist__32264 = cljs.core.next(arglist__32264);
var boundaryline_id = cljs.core.first(arglist__32264);
arglist__32264 = cljs.core.next(arglist__32264);
var old_path = cljs.core.first(arglist__32264);
arglist__32264 = cljs.core.next(arglist__32264);
var js_boundaryline = cljs.core.first(arglist__32264);
arglist__32264 = cljs.core.next(arglist__32264);
var path_attrs = cljs.core.first(arglist__32264);
var p__32259 = cljs.core.rest(arglist__32264);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32259);
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
var update_path__delegate = function (comm,leaflet_map,p__32265,tolerance,js_boundaryline,path_attrs,p__32266){var map__32270 = p__32265;var map__32270__$1 = ((cljs.core.seq_QMARK_.call(null,map__32270))?cljs.core.apply.call(null,cljs.core.hash_map,map__32270):map__32270);var path = map__32270__$1;var boundaryline_id = cljs.core.get.call(null,map__32270__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__32271 = p__32266;var map__32272 = cljs.core.nth.call(null,vec__32271,(0),null);var map__32272__$1 = ((cljs.core.seq_QMARK_.call(null,map__32272))?cljs.core.apply.call(null,cljs.core.hash_map,map__32272):map__32272);var opts = map__32272__$1;var filter_spec = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs,opts);
return path;
}
};
var update_path = function (comm,leaflet_map,p__32265,tolerance,js_boundaryline,path_attrs,var_args){
var p__32266 = null;if (arguments.length > 6) {
  p__32266 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__32265,tolerance,js_boundaryline,path_attrs,p__32266);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__32273){
var comm = cljs.core.first(arglist__32273);
arglist__32273 = cljs.core.next(arglist__32273);
var leaflet_map = cljs.core.first(arglist__32273);
arglist__32273 = cljs.core.next(arglist__32273);
var p__32265 = cljs.core.first(arglist__32273);
arglist__32273 = cljs.core.next(arglist__32273);
var tolerance = cljs.core.first(arglist__32273);
arglist__32273 = cljs.core.next(arglist__32273);
var js_boundaryline = cljs.core.first(arglist__32273);
arglist__32273 = cljs.core.next(arglist__32273);
var path_attrs = cljs.core.first(arglist__32273);
var p__32266 = cljs.core.rest(arglist__32273);
return update_path__delegate(comm,leaflet_map,p__32265,tolerance,js_boundaryline,path_attrs,p__32266);
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
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32274){var vec__32290 = p__32274;var map__32291 = cljs.core.nth.call(null,vec__32290,(0),null);var map__32291__$1 = ((cljs.core.seq_QMARK_.call(null,map__32291))?cljs.core.apply.call(null,cljs.core.hash_map,map__32291):map__32291);var opts = map__32291__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32291__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32291__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__32292 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__32292,(0),null);var notifychan = cljs.core.nth.call(null,vec__32292,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32292,tolerance_paths,notifychan,vec__32290,map__32291,map__32291__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32293){var vec__32294 = p__32293;var k = cljs.core.nth.call(null,vec__32294,(0),null);var tolerance = cljs.core.nth.call(null,vec__32294,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32294,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32292,tolerance_paths,notifychan,vec__32290,map__32291,map__32291__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32292,tolerance_paths,notifychan,vec__32290,map__32291,map__32291__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32295 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32295,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32295,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32292,tolerance_paths,notifychan,vec__32290,map__32291,map__32291__$1,opts,path_marker_click_fn,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32292,tolerance_paths,notifychan,created_paths,vec__32290,map__32291,map__32291__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32296){var vec__32297 = p__32296;var k = cljs.core.nth.call(null,vec__32297,(0),null);var tolerance = cljs.core.nth.call(null,vec__32297,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32297,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32292,tolerance_paths,notifychan,created_paths,vec__32290,map__32291,map__32291__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32292,tolerance_paths,notifychan,created_paths,vec__32290,map__32291,map__32291__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32298 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32298,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32298,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32292,tolerance_paths,notifychan,created_paths,vec__32290,map__32291,map__32291__$1,opts,path_marker_click_fn,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__32299 = cljs.core.seq.call(null,delete_path_keys);var chunk__32300 = null;var count__32301 = (0);var i__32302 = (0);while(true){
if((i__32302 < count__32301))
{var k = cljs.core._nth.call(null,chunk__32300,i__32302);var temp__4124__auto___32305 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32305))
{var path_32306 = temp__4124__auto___32305;clustermap.components.map.delete_path.call(null,leaflet_map,path_32306);
} else
{}
{
var G__32307 = seq__32299;
var G__32308 = chunk__32300;
var G__32309 = count__32301;
var G__32310 = (i__32302 + (1));
seq__32299 = G__32307;
chunk__32300 = G__32308;
count__32301 = G__32309;
i__32302 = G__32310;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32299);if(temp__4126__auto__)
{var seq__32299__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32299__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32299__$1);{
var G__32311 = cljs.core.chunk_rest.call(null,seq__32299__$1);
var G__32312 = c__4408__auto__;
var G__32313 = cljs.core.count.call(null,c__4408__auto__);
var G__32314 = (0);
seq__32299 = G__32311;
chunk__32300 = G__32312;
count__32301 = G__32313;
i__32302 = G__32314;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32299__$1);var temp__4124__auto___32315 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32315))
{var path_32316 = temp__4124__auto___32315;clustermap.components.map.delete_path.call(null,leaflet_map,path_32316);
} else
{}
{
var G__32317 = cljs.core.next.call(null,seq__32299__$1);
var G__32318 = null;
var G__32319 = (0);
var G__32320 = (0);
seq__32299 = G__32317;
chunk__32300 = G__32318;
count__32301 = G__32319;
i__32302 = G__32320;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32292,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32290,map__32291,map__32291__$1,opts,path_marker_click_fn,filter_spec){
return (function (m,p__32303){var map__32304 = p__32303;var map__32304__$1 = ((cljs.core.seq_QMARK_.call(null,map__32304))?cljs.core.apply.call(null,cljs.core.hash_map,map__32304):map__32304);var path = map__32304__$1;var id = cljs.core.get.call(null,map__32304__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32292,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32290,map__32291,map__32291__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__32274 = null;if (arguments.length > 7) {
  p__32274 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32274);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__32321){
var comm = cljs.core.first(arglist__32321);
arglist__32321 = cljs.core.next(arglist__32321);
var fetch_boundarylines_fn = cljs.core.first(arglist__32321);
arglist__32321 = cljs.core.next(arglist__32321);
var leaflet_map = cljs.core.first(arglist__32321);
arglist__32321 = cljs.core.next(arglist__32321);
var paths_atom = cljs.core.first(arglist__32321);
arglist__32321 = cljs.core.next(arglist__32321);
var path_selections_atom = cljs.core.first(arglist__32321);
arglist__32321 = cljs.core.next(arglist__32321);
var new_path_highlights = cljs.core.first(arglist__32321);
arglist__32321 = cljs.core.next(arglist__32321);
var new_selection_paths = cljs.core.first(arglist__32321);
var p__32274 = cljs.core.rest(arglist__32321);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32274);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__32324){var vec__32325 = p__32324;var tz = cljs.core.nth.call(null,vec__32325,(0),null);var collection = cljs.core.nth.call(null,vec__32325,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__32326,owner){var map__32528 = p__32326;var map__32528__$1 = ((cljs.core.seq_QMARK_.call(null,map__32528))?cljs.core.apply.call(null,cljs.core.hash_map,map__32528):map__32528);var cursor_data = map__32528__$1;var map__32529 = cljs.core.get.call(null,map__32528__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32529__$1 = ((cljs.core.seq_QMARK_.call(null,map__32529))?cljs.core.apply.call(null,cljs.core.hash_map,map__32529):map__32529);var cursor = map__32529__$1;var data = cljs.core.get.call(null,map__32529__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__32529__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__32529__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32530 = cljs.core.get.call(null,map__32529__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32530__$1 = ((cljs.core.seq_QMARK_.call(null,map__32530))?cljs.core.apply.call(null,cljs.core.hash_map,map__32530):map__32530);var controls = map__32530__$1;var colorchooser = cljs.core.get.call(null,map__32530__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__32530__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var location = cljs.core.get.call(null,map__32530__$1,new cljs.core.Keyword(null,"location","location",1815599388));var zoom = cljs.core.get.call(null,map__32530__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__32530__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__32530__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__32530__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__32530__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__32530__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__32530__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__32530__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__32530__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var geohash_aggs = cljs.core.get.call(null,map__32530__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var boundaryline_agg = cljs.core.get.call(null,map__32530__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__32528__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__32528__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t32531 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32531 = (function (colorchooser,initial_bounds,location,owner,data,zoom,map__32529,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,map__32528,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,p__32326,geohash_aggs,point_data,map__32530,boundaryline_agg,meta32532){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.location = location;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.map__32529 = map__32529;
this.map_options = map_options;
this.cursor_data = cursor_data;
this.geotag_aggs = geotag_aggs;
this.filter_spec = filter_spec;
this.map_component = map_component;
this.link_render_fn = link_render_fn;
this.boundaryline_collections = boundaryline_collections;
this.controls = controls;
this.cursor = cursor;
this.map__32528 = map__32528;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.show_points = show_points;
this.link_click_fn = link_click_fn;
this.filter = filter;
this.p__32326 = p__32326;
this.geohash_aggs = geohash_aggs;
this.point_data = point_data;
this.map__32530 = map__32530;
this.boundaryline_agg = boundaryline_agg;
this.meta32532 = meta32532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32531.cljs$lang$type = true;
clustermap.components.map.t32531.cljs$lang$ctorStr = "clustermap.components.map/t32531";
clustermap.components.map.t32531.cljs$lang$ctorPrWriter = ((function (map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t32531");
});})(map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32531.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t32531.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__32534 = om.core.get_state.call(null,self__.owner);var map__32534__$1 = ((cljs.core.seq_QMARK_.call(null,map__32534))?cljs.core.apply.call(null,cljs.core.hash_map,map__32534):map__32534);var map__32535 = cljs.core.get.call(null,map__32534__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32535__$1 = ((cljs.core.seq_QMARK_.call(null,map__32535))?cljs.core.apply.call(null,cljs.core.hash_map,map__32535):map__32535);var path_selections = cljs.core.get.call(null,map__32535__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32535__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32535__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32535__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32531.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32531.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$,p__32536,p__32537){var self__ = this;
var map__32538 = p__32536;var map__32538__$1 = ((cljs.core.seq_QMARK_.call(null,map__32538))?cljs.core.apply.call(null,cljs.core.hash_map,map__32538):map__32538);var next_cursor_data = map__32538__$1;var map__32539 = cljs.core.get.call(null,map__32538__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32539__$1 = ((cljs.core.seq_QMARK_.call(null,map__32539))?cljs.core.apply.call(null,cljs.core.hash_map,map__32539):map__32539);var next_cursor = map__32539__$1;var next_data = cljs.core.get.call(null,map__32539__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__32539__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__32539__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32540 = cljs.core.get.call(null,map__32539__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32540__$1 = ((cljs.core.seq_QMARK_.call(null,map__32540))?cljs.core.apply.call(null,cljs.core.hash_map,map__32540):map__32540);var next_colorchooser = cljs.core.get.call(null,map__32540__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__32540__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_boundaryline_fill_opacity = cljs.core.get.call(null,map__32540__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575));var next_zoom = cljs.core.get.call(null,map__32540__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__32540__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__32540__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__32540__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_geohash_aggs = cljs.core.get.call(null,map__32540__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var next_boundaryline_agg = cljs.core.get.call(null,map__32540__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_location = cljs.core.get.call(null,map__32540__$1,new cljs.core.Keyword(null,"location","location",1815599388));var next_show_points = cljs.core.get.call(null,map__32540__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__32538__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__32538__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32541 = p__32537;var map__32541__$1 = ((cljs.core.seq_QMARK_.call(null,map__32541))?cljs.core.apply.call(null,cljs.core.hash_map,map__32541):map__32541);var map__32542 = cljs.core.get.call(null,map__32541__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32542__$1 = ((cljs.core.seq_QMARK_.call(null,map__32542))?cljs.core.apply.call(null,cljs.core.hash_map,map__32542):map__32542);var next_markers = cljs.core.get.call(null,map__32542__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__32542__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_geohash_markers = cljs.core.get.call(null,map__32542__$1,new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705));var next_paths = cljs.core.get.call(null,map__32542__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__32542__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__32541__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__32541__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__32541__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__32541__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__32541__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var fetch_geohash_agg_data_fn = cljs.core.get.call(null,map__32541__$1,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986));var this$__$1 = this;var map__32543 = om.core.get_shared.call(null,self__.owner);var map__32543__$1 = ((cljs.core.seq_QMARK_.call(null,map__32543))?cljs.core.apply.call(null,cljs.core.hash_map,map__32543):map__32543);var path_marker_click_fn = cljs.core.get.call(null,map__32543__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32543__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32543__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32543__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__32544 = om.core.get_state.call(null,self__.owner);var map__32544__$1 = ((cljs.core.seq_QMARK_.call(null,map__32544))?cljs.core.apply.call(null,cljs.core.hash_map,map__32544):map__32544);var map__32545 = cljs.core.get.call(null,map__32544__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32545__$1 = ((cljs.core.seq_QMARK_.call(null,map__32545))?cljs.core.apply.call(null,cljs.core.hash_map,map__32545):map__32545);var path_selections = cljs.core.get.call(null,map__32545__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32545__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32545__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__32545__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__32545__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__32544__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__32544__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var zoom_changed = cljs.core.not_EQ_.call(null,next_zoom,self__.zoom);if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
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
{var c__9125__auto___32729 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32729,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32729,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32568){var state_val_32569 = (state_32568[(1)]);if((state_val_32569 === (5)))
{var inst_32566 = (state_32568[(2)]);var state_32568__$1 = state_32568;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32568__$1,inst_32566);
} else
{if((state_val_32569 === (4)))
{var state_32568__$1 = state_32568;var statearr_32570_32730 = state_32568__$1;(statearr_32570_32730[(2)] = null);
(statearr_32570_32730[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32569 === (3)))
{var inst_32558 = (state_32568[(7)]);var inst_32560 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32561 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_32562 = (new cljs.core.PersistentVector(null,1,(5),inst_32560,inst_32561,null));var inst_32563 = om.core.update_BANG_.call(null,self__.cursor,inst_32562,inst_32558);var state_32568__$1 = state_32568;var statearr_32571_32731 = state_32568__$1;(statearr_32571_32731[(2)] = inst_32563);
(statearr_32571_32731[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32569 === (2)))
{var inst_32558 = (state_32568[(7)]);var inst_32558__$1 = (state_32568[(2)]);var state_32568__$1 = (function (){var statearr_32572 = state_32568;(statearr_32572[(7)] = inst_32558__$1);
return statearr_32572;
})();if(cljs.core.truth_(inst_32558__$1))
{var statearr_32573_32732 = state_32568__$1;(statearr_32573_32732[(1)] = (3));
} else
{var statearr_32574_32733 = state_32568__$1;(statearr_32574_32733[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32569 === (1)))
{var inst_32546 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32547 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32548 = leaflet_map.getZoom();var inst_32549 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_32548);var inst_32550 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32551 = om.core._value.call(null,next_filter);var inst_32552 = leaflet_map.getBounds();var inst_32553 = clustermap.components.map.bounds_array.call(null,inst_32552);var inst_32554 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32555 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32556 = fetch_aggregation_data_fn.call(null,inst_32546,inst_32547,inst_32549,inst_32550,inst_32551,inst_32553,inst_32554,inst_32555);var state_32568__$1 = state_32568;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32568__$1,(2),inst_32556);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32729,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32729,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32578 = [null,null,null,null,null,null,null,null];(statearr_32578[(0)] = state_machine__9111__auto__);
(statearr_32578[(1)] = (1));
return statearr_32578;
});
var state_machine__9111__auto____1 = (function (state_32568){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32568);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32579){if((e32579 instanceof Object))
{var ex__9114__auto__ = e32579;var statearr_32580_32734 = state_32568;(statearr_32580_32734[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32568);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32579;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32735 = state_32568;
state_32568 = G__32735;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32568){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32729,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32581 = f__9126__auto__.call(null);(statearr_32581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32729);
return statearr_32581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32729,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
var c__9125__auto___32736 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32736,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32736,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32602){var state_val_32603 = (state_32602[(1)]);if((state_val_32603 === (5)))
{var inst_32600 = (state_32602[(2)]);var state_32602__$1 = state_32602;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32602__$1,inst_32600);
} else
{if((state_val_32603 === (4)))
{var state_32602__$1 = state_32602;var statearr_32604_32737 = state_32602__$1;(statearr_32604_32737[(2)] = null);
(statearr_32604_32737[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32603 === (3)))
{var inst_32592 = (state_32602[(7)]);var inst_32594 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32595 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_32596 = (new cljs.core.PersistentVector(null,1,(5),inst_32594,inst_32595,null));var inst_32597 = om.core.update_BANG_.call(null,self__.cursor,inst_32596,inst_32592);var state_32602__$1 = state_32602;var statearr_32605_32738 = state_32602__$1;(statearr_32605_32738[(2)] = inst_32597);
(statearr_32605_32738[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32603 === (2)))
{var inst_32592 = (state_32602[(7)]);var inst_32592__$1 = (state_32602[(2)]);var state_32602__$1 = (function (){var statearr_32606 = state_32602;(statearr_32606[(7)] = inst_32592__$1);
return statearr_32606;
})();if(cljs.core.truth_(inst_32592__$1))
{var statearr_32607_32739 = state_32602__$1;(statearr_32607_32739[(1)] = (3));
} else
{var statearr_32608_32740 = state_32602__$1;(statearr_32608_32740[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32603 === (1)))
{var inst_32582 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32583 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32584 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32585 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover","!total_funding"];var inst_32586 = (new cljs.core.PersistentVector(null,6,(5),inst_32584,inst_32585,null));var inst_32587 = om.core._value.call(null,next_filter);var inst_32588 = leaflet_map.getBounds();var inst_32589 = clustermap.components.map.bounds_array.call(null,inst_32588);var inst_32590 = fetch_point_data_fn.call(null,inst_32582,inst_32583,"!postcode",inst_32586,(1000),inst_32587,inst_32589);var state_32602__$1 = state_32602;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32602__$1,(2),inst_32590);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32736,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32736,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32612 = [null,null,null,null,null,null,null,null];(statearr_32612[(0)] = state_machine__9111__auto__);
(statearr_32612[(1)] = (1));
return statearr_32612;
});
var state_machine__9111__auto____1 = (function (state_32602){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32602);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32613){if((e32613 instanceof Object))
{var ex__9114__auto__ = e32613;var statearr_32614_32741 = state_32602;(statearr_32614_32741[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32602);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32613;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32742 = state_32602;
state_32602 = G__32742;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32602){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32736,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32615 = f__9126__auto__.call(null);(statearr_32615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32736);
return statearr_32615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32736,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32743 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32743,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32743,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32629){var state_val_32630 = (state_32629[(1)]);if((state_val_32630 === (5)))
{var inst_32627 = (state_32629[(2)]);var state_32629__$1 = state_32629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32629__$1,inst_32627);
} else
{if((state_val_32630 === (4)))
{var state_32629__$1 = state_32629;var statearr_32631_32744 = state_32629__$1;(statearr_32631_32744[(2)] = null);
(statearr_32631_32744[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32630 === (3)))
{var inst_32619 = (state_32629[(7)]);var inst_32621 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32622 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_32623 = (new cljs.core.PersistentVector(null,3,(5),inst_32621,inst_32622,null));var inst_32624 = om.core.update_BANG_.call(null,self__.cursor,inst_32623,inst_32619);var state_32629__$1 = state_32629;var statearr_32632_32745 = state_32629__$1;(statearr_32632_32745[(2)] = inst_32624);
(statearr_32632_32745[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32630 === (2)))
{var inst_32619 = (state_32629[(7)]);var inst_32619__$1 = (state_32629[(2)]);var state_32629__$1 = (function (){var statearr_32633 = state_32629;(statearr_32633[(7)] = inst_32619__$1);
return statearr_32633;
})();if(cljs.core.truth_(inst_32619__$1))
{var statearr_32634_32746 = state_32629__$1;(statearr_32634_32746[(1)] = (3));
} else
{var statearr_32635_32747 = state_32629__$1;(statearr_32635_32747[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32630 === (1)))
{var inst_32616 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32617 = fetch_geotag_data_fn.call(null,inst_32616);var state_32629__$1 = state_32629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32629__$1,(2),inst_32617);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32743,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32743,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32639 = [null,null,null,null,null,null,null,null];(statearr_32639[(0)] = state_machine__9111__auto__);
(statearr_32639[(1)] = (1));
return statearr_32639;
});
var state_machine__9111__auto____1 = (function (state_32629){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32629);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32640){if((e32640 instanceof Object))
{var ex__9114__auto__ = e32640;var statearr_32641_32748 = state_32629;(statearr_32641_32748[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32629);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32640;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32749 = state_32629;
state_32629 = G__32749;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32629){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32743,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32642 = f__9126__auto__.call(null);(statearr_32642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32743);
return statearr_32642;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32743,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___32750 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32750,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32750,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32661){var state_val_32662 = (state_32661[(1)]);if((state_val_32662 === (5)))
{var inst_32659 = (state_32661[(2)]);var state_32661__$1 = state_32661;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32661__$1,inst_32659);
} else
{if((state_val_32662 === (4)))
{var state_32661__$1 = state_32661;var statearr_32663_32751 = state_32661__$1;(statearr_32663_32751[(2)] = null);
(statearr_32663_32751[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32662 === (3)))
{var inst_32650 = (state_32661[(7)]);var inst_32652 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32653 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_32654 = (new cljs.core.PersistentVector(null,3,(5),inst_32652,inst_32653,null));var inst_32655 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32650);var inst_32656 = om.core.update_BANG_.call(null,self__.cursor,inst_32654,inst_32655);var state_32661__$1 = state_32661;var statearr_32664_32752 = state_32661__$1;(statearr_32664_32752[(2)] = inst_32656);
(statearr_32664_32752[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32662 === (2)))
{var inst_32650 = (state_32661[(7)]);var inst_32650__$1 = (state_32661[(2)]);var state_32661__$1 = (function (){var statearr_32665 = state_32661;(statearr_32665[(7)] = inst_32650__$1);
return statearr_32665;
})();if(cljs.core.truth_(inst_32650__$1))
{var statearr_32666_32753 = state_32661__$1;(statearr_32666_32753[(1)] = (3));
} else
{var statearr_32667_32754 = state_32661__$1;(statearr_32667_32754[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32662 === (1)))
{var inst_32643 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32644 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32645 = [next_filter];var inst_32646 = cljs.core.PersistentHashMap.fromArrays(inst_32644,inst_32645);var inst_32647 = cljs.core.merge.call(null,inst_32643,inst_32646);var inst_32648 = fetch_geotag_agg_data_fn.call(null,inst_32647);var state_32661__$1 = state_32661;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32661__$1,(2),inst_32648);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32750,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32750,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32671 = [null,null,null,null,null,null,null,null];(statearr_32671[(0)] = state_machine__9111__auto__);
(statearr_32671[(1)] = (1));
return statearr_32671;
});
var state_machine__9111__auto____1 = (function (state_32661){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32661);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32672){if((e32672 instanceof Object))
{var ex__9114__auto__ = e32672;var statearr_32673_32755 = state_32661;(statearr_32673_32755[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32661);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32672;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32756 = state_32661;
state_32661 = G__32756;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32661){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32750,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32674 = f__9126__auto__.call(null);(statearr_32674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32750);
return statearr_32674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32750,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___32757 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32757,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32757,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32695){var state_val_32696 = (state_32695[(1)]);if((state_val_32696 === (5)))
{var inst_32693 = (state_32695[(2)]);var state_32695__$1 = state_32695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32695__$1,inst_32693);
} else
{if((state_val_32696 === (4)))
{var state_32695__$1 = state_32695;var statearr_32697_32758 = state_32695__$1;(statearr_32697_32758[(2)] = null);
(statearr_32697_32758[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32696 === (3)))
{var inst_32684 = (state_32695[(7)]);var inst_32686 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32687 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620)];var inst_32688 = (new cljs.core.PersistentVector(null,3,(5),inst_32686,inst_32687,null));var inst_32689 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32684);var inst_32690 = om.core.update_BANG_.call(null,self__.cursor,inst_32688,inst_32689);var state_32695__$1 = state_32695;var statearr_32698_32759 = state_32695__$1;(statearr_32698_32759[(2)] = inst_32690);
(statearr_32698_32759[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32696 === (2)))
{var inst_32684 = (state_32695[(7)]);var inst_32684__$1 = (state_32695[(2)]);var state_32695__$1 = (function (){var statearr_32699 = state_32695;(statearr_32699[(7)] = inst_32684__$1);
return statearr_32699;
})();if(cljs.core.truth_(inst_32684__$1))
{var statearr_32700_32760 = state_32695__$1;(statearr_32700_32760[(1)] = (3));
} else
{var statearr_32701_32761 = state_32695__$1;(statearr_32701_32761[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32696 === (1)))
{var inst_32675 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32676 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"precision","precision",-1175707478)];var inst_32677 = new cljs.core.Keyword(null,"precision-fn","precision-fn",1742300693).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32678 = inst_32677.call(null,next_zoom);var inst_32679 = [next_filter,next_bounds,inst_32678];var inst_32680 = cljs.core.PersistentHashMap.fromArrays(inst_32676,inst_32679);var inst_32681 = cljs.core.merge.call(null,inst_32675,inst_32680);var inst_32682 = fetch_geohash_agg_data_fn.call(null,inst_32681);var state_32695__$1 = state_32695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32695__$1,(2),inst_32682);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32757,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32757,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32705 = [null,null,null,null,null,null,null,null];(statearr_32705[(0)] = state_machine__9111__auto__);
(statearr_32705[(1)] = (1));
return statearr_32705;
});
var state_machine__9111__auto____1 = (function (state_32695){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32695);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32706){if((e32706 instanceof Object))
{var ex__9114__auto__ = e32706;var statearr_32707_32762 = state_32695;(statearr_32707_32762[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32695);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32706;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32763 = state_32695;
state_32695 = G__32763;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32695){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32757,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32708 = f__9126__auto__.call(null);(statearr_32708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32757);
return statearr_32708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32757,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var vec__32709_32764 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_32765 = cljs.core.nth.call(null,vec__32709_32764,(0),null);var selection_path_colours_32766 = cljs.core.nth.call(null,vec__32709_32764,(1),null);var update_paths_invocation_32767 = ((function (vec__32709_32764,new_threshold_colors_32765,selection_path_colours_32766,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_32766,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696),path_marker_click_fn,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),next_boundaryline_fill_opacity], null));
});})(vec__32709_32764,new_threshold_colors_32765,selection_path_colours_32766,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_32765,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_32765);
} else
{}
var temp__4126__auto___32768 = update_paths_invocation_32767.call(null);if(cljs.core.truth_(temp__4126__auto___32768))
{var notify_chan_32769 = temp__4126__auto___32768;var c__9125__auto___32770 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32770,notify_chan_32769,temp__4126__auto___32768,vec__32709_32764,new_threshold_colors_32765,selection_path_colours_32766,update_paths_invocation_32767,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32770,notify_chan_32769,temp__4126__auto___32768,vec__32709_32764,new_threshold_colors_32765,selection_path_colours_32766,update_paths_invocation_32767,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32714){var state_val_32715 = (state_32714[(1)]);if((state_val_32715 === (2)))
{var inst_32711 = (state_32714[(2)]);var inst_32712 = update_paths_invocation_32767.call(null);var state_32714__$1 = (function (){var statearr_32716 = state_32714;(statearr_32716[(7)] = inst_32711);
return statearr_32716;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32714__$1,inst_32712);
} else
{if((state_val_32715 === (1)))
{var state_32714__$1 = state_32714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32714__$1,(2),notify_chan_32769);
} else
{return null;
}
}
});})(c__9125__auto___32770,notify_chan_32769,temp__4126__auto___32768,vec__32709_32764,new_threshold_colors_32765,selection_path_colours_32766,update_paths_invocation_32767,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32770,notify_chan_32769,temp__4126__auto___32768,vec__32709_32764,new_threshold_colors_32765,selection_path_colours_32766,update_paths_invocation_32767,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32720 = [null,null,null,null,null,null,null,null];(statearr_32720[(0)] = state_machine__9111__auto__);
(statearr_32720[(1)] = (1));
return statearr_32720;
});
var state_machine__9111__auto____1 = (function (state_32714){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32714);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32721){if((e32721 instanceof Object))
{var ex__9114__auto__ = e32721;var statearr_32722_32771 = state_32714;(statearr_32722_32771[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32714);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32721;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32772 = state_32714;
state_32714 = G__32772;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32714){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32770,notify_chan_32769,temp__4126__auto___32768,vec__32709_32764,new_threshold_colors_32765,selection_path_colours_32766,update_paths_invocation_32767,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32723 = f__9126__auto__.call(null);(statearr_32723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32770);
return statearr_32723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32770,notify_chan_32769,temp__4126__auto___32768,vec__32709_32764,new_threshold_colors_32765,selection_path_colours_32766,update_paths_invocation_32767,map__32543,map__32543__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32544,map__32544__$1,map__32545,map__32545__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32538,map__32538__$1,next_cursor_data,map__32539,map__32539__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32540,map__32540__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32541,map__32541__$1,map__32542,map__32542__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
});})(map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32531.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32531.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__32724 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__32724__$1 = ((cljs.core.seq_QMARK_.call(null,map__32724))?cljs.core.apply.call(null,cljs.core.hash_map,map__32724):map__32724);var map = map__32724__$1;var path = cljs.core.get.call(null,map__32724__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__32724__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32724__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__32725 = om.core.get_shared.call(null,self__.owner);var map__32725__$1 = ((cljs.core.seq_QMARK_.call(null,map__32725))?cljs.core.apply.call(null,cljs.core.hash_map,map__32725):map__32725);var path_marker_click_fn = cljs.core.get.call(null,map__32725__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32725__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32725__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32725__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
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
});})(node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
});})(node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__32726 = e;var G__32726__$1 = (((G__32726 == null))?null:G__32726.target);var G__32726__$2 = (((G__32726__$1 == null))?null:domina.attr.call(null,G__32726__$1,"data-boundaryline-id"));var G__32726__$3 = (((G__32726__$2 == null))?null:path_marker_click_fn.call(null,G__32726__$2));return G__32726__$3;
});})(node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__32724,map__32724__$1,map,path,markers,leaflet_map,map__32725,map__32725__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986),clustermap.api.geohash_grid_factory.call(null));
});})(map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32531.prototype.om$core$IRender$ = true;
clustermap.components.map.t32531.prototype.om$core$IRender$render$arity$1 = ((function (map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32531.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32533){var self__ = this;
var _32533__$1 = this;return self__.meta32532;
});})(map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32533,meta32532__$1){var self__ = this;
var _32533__$1 = this;return (new clustermap.components.map.t32531(self__.colorchooser,self__.initial_bounds,self__.location,self__.owner,self__.data,self__.zoom,self__.map__32529,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.cursor,self__.map__32528,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.show_points,self__.link_click_fn,self__.filter,self__.p__32326,self__.geohash_aggs,self__.point_data,self__.map__32530,self__.boundaryline_agg,meta32532__$1));
});})(map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t32531 = ((function (map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function __GT_t32531(colorchooser__$1,initial_bounds__$1,location__$1,owner__$1,data__$1,zoom__$1,map__32529__$2,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,map__32528__$2,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,p__32326__$1,geohash_aggs__$1,point_data__$1,map__32530__$2,boundaryline_agg__$1,meta32532){return (new clustermap.components.map.t32531(colorchooser__$1,initial_bounds__$1,location__$1,owner__$1,data__$1,zoom__$1,map__32529__$2,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,map__32528__$2,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,p__32326__$1,geohash_aggs__$1,point_data__$1,map__32530__$2,boundaryline_agg__$1,meta32532));
});})(map__32528,map__32528__$1,cursor_data,map__32529,map__32529__$1,cursor,data,point_data,boundaryline_collections,map__32530,map__32530__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t32531(colorchooser,initial_bounds,location,owner,data,zoom,map__32529__$1,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,map__32528__$1,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,p__32326,geohash_aggs,point_data,map__32530__$1,boundaryline_agg,null));
});
