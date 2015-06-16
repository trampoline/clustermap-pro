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
clustermap.components.map.default_api_key = (function (){var or__3639__auto__ = (function (){var G__31907 = config;var G__31907__$1 = (((G__31907 == null))?null:G__31907.components);var G__31907__$2 = (((G__31907__$1 == null))?null:G__31907__$1.map);var G__31907__$3 = (((G__31907__$2 == null))?null:G__31907__$2.api_key);return G__31907__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__31908){var map__31910 = p__31908;var map__31910__$1 = ((cljs.core.seq_QMARK_.call(null,map__31910))?cljs.core.apply.call(null,cljs.core.hash_map,map__31910):map__31910);var api_key = cljs.core.get.call(null,map__31910__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__31910__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__31910__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__31910__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__31911){
var m = cljs.core.first(arglist__31911);
var all_bounds = cljs.core.rest(arglist__31911);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.render_minichart = (function render_minichart(location_site){return null;
});
clustermap.components.map.render_marker_icon = (function render_marker_icon(marker_render_fn,location_sites){if((cljs.core.count.call(null,location_sites) > (1)))
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites)], null)));
} else
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites)], null)));
}
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(item_render_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"location-marker-popup-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__31916(s__31917){return (new cljs.core.LazySeq(null,(function (){var s__31917__$1 = s__31917;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31917__$1);if(temp__4126__auto__)
{var s__31917__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31917__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31917__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31919 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31918 = (0);while(true){
if((i__31918 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__31918);cljs.core.chunk_append.call(null,b__31919,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))));
{
var G__31920 = (i__31918 + (1));
i__31918 = G__31920;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31919),iter__31916.call(null,cljs.core.chunk_rest.call(null,s__31917__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31919),null);
}
} else
{var site = cljs.core.first.call(null,s__31917__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))),iter__31916.call(null,cljs.core.rest.call(null,s__31917__$2)));
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
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__31921){var map__31926 = p__31921;var map__31926__$1 = ((cljs.core.seq_QMARK_.call(null,map__31926))?cljs.core.apply.call(null,cljs.core.hash_map,map__31926):map__31926);var map__31927 = cljs.core.get.call(null,map__31926__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__31927__$1 = ((cljs.core.seq_QMARK_.call(null,map__31927))?cljs.core.apply.call(null,cljs.core.hash_map,map__31927):map__31927);var item_click_fn = cljs.core.get.call(null,map__31927__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__31927__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__31927__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var temp__4124__auto__ = (function (){var G__31928 = location_sites;var G__31928__$1 = (((G__31928 == null))?null:cljs.core.first.call(null,G__31928));var G__31928__$2 = (((G__31928__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__31928__$1));var G__31928__$3 = (((G__31928__$2 == null))?null:cljs.core.reverse.call(null,G__31928__$2));var G__31928__$4 = (((G__31928__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__31928__$3));return G__31928__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = clustermap.components.map.render_marker_icon.call(null,marker_render_fn,location_sites);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__31926,map__31926__$1,map__31927,map__31927__$1,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__31926,map__31926__$1,map__31927,map__31927__$1,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);leaflet_marker.on("mouseover",((function (icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__31926,map__31926__$1,map__31927,map__31927__$1,item_click_fn,item_render_fn,marker_render_fn){
return (function (e){return leaflet_marker.openPopup();
});})(icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__31926,map__31926__$1,map__31927,map__31927__$1,item_click_fn,item_render_fn,marker_render_fn))
);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,item_render_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
leaflet_marker_cluster_group.addLayer(leaflet_marker);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys)], null);
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_31929_31930 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31929_31930,sb__4579__auto__,temp__4124__auto__,map__31926,map__31926__$1,map__31927,map__31927__$1,item_click_fn,item_render_fn,marker_render_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_31929_31930,sb__4579__auto__,temp__4124__auto__,map__31926,map__31926__$1,map__31927,map__31927__$1,item_click_fn,item_render_fn,marker_render_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31929_31930;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__31931){var map__31937 = p__31931;var map__31937__$1 = ((cljs.core.seq_QMARK_.call(null,map__31937))?cljs.core.apply.call(null,cljs.core.hash_map,map__31937):map__31937);var marker = map__31937__$1;var click_handler_keys = cljs.core.get.call(null,map__31937__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31937__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__31938 = cljs.core.seq.call(null,click_handler_keys);var chunk__31939 = null;var count__31940 = (0);var i__31941 = (0);while(true){
if((i__31941 < count__31940))
{var chk = cljs.core._nth.call(null,chunk__31939,i__31941);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__31942 = seq__31938;
var G__31943 = chunk__31939;
var G__31944 = count__31940;
var G__31945 = (i__31941 + (1));
seq__31938 = G__31942;
chunk__31939 = G__31943;
count__31940 = G__31944;
i__31941 = G__31945;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31938);if(temp__4126__auto__)
{var seq__31938__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31938__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31938__$1);{
var G__31946 = cljs.core.chunk_rest.call(null,seq__31938__$1);
var G__31947 = c__4408__auto__;
var G__31948 = cljs.core.count.call(null,c__4408__auto__);
var G__31949 = (0);
seq__31938 = G__31946;
chunk__31939 = G__31947;
count__31940 = G__31948;
i__31941 = G__31949;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__31938__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__31950 = cljs.core.next.call(null,seq__31938__$1);
var G__31951 = null;
var G__31952 = (0);
var G__31953 = (0);
seq__31938 = G__31950;
chunk__31939 = G__31951;
count__31940 = G__31952;
i__31941 = G__31953;
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
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__31954,location_sites,p__31955){var map__31959 = p__31954;var map__31959__$1 = ((cljs.core.seq_QMARK_.call(null,map__31959))?cljs.core.apply.call(null,cljs.core.hash_map,map__31959):map__31959);var marker = map__31959__$1;var click_handler_keys = cljs.core.get.call(null,map__31959__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31959__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31959__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__31960 = p__31955;var map__31960__$1 = ((cljs.core.seq_QMARK_.call(null,map__31960))?cljs.core.apply.call(null,cljs.core.hash_map,map__31960):map__31960);var map__31961 = cljs.core.get.call(null,map__31960__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__31961__$1 = ((cljs.core.seq_QMARK_.call(null,map__31961))?cljs.core.apply.call(null,cljs.core.hash_map,map__31961):map__31961);var item_click_fn = cljs.core.get.call(null,map__31961__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__31961__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__31961__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var icon = clustermap.components.map.render_marker_icon.call(null,marker_render_fn,location_sites);var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,popup,map__31959,map__31959__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__31960,map__31960__$1,map__31961,map__31961__$1,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,popup,map__31959,map__31959__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__31960,map__31960__$1,map__31961,map__31961__$1,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
leaflet_marker.setIcon(icon);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,item_render_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__31962){var map__31964 = p__31962;var map__31964__$1 = ((cljs.core.seq_QMARK_.call(null,map__31964))?cljs.core.apply.call(null,cljs.core.hash_map,map__31964):map__31964);var marker = map__31964__$1;var click_handler_keys = cljs.core.get.call(null,map__31964__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31964__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31964__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
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
,update_marker_keys));var ___$1 = (function (){var seq__31969 = cljs.core.seq.call(null,remove_marker_keys);var chunk__31970 = null;var count__31971 = (0);var i__31972 = (0);while(true){
if((i__31972 < count__31971))
{var k = cljs.core._nth.call(null,chunk__31970,i__31972);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__31973 = seq__31969;
var G__31974 = chunk__31970;
var G__31975 = count__31971;
var G__31976 = (i__31972 + (1));
seq__31969 = G__31973;
chunk__31970 = G__31974;
count__31971 = G__31975;
i__31972 = G__31976;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31969);if(temp__4126__auto__)
{var seq__31969__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31969__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31969__$1);{
var G__31977 = cljs.core.chunk_rest.call(null,seq__31969__$1);
var G__31978 = c__4408__auto__;
var G__31979 = cljs.core.count.call(null,c__4408__auto__);
var G__31980 = (0);
seq__31969 = G__31977;
chunk__31970 = G__31978;
count__31971 = G__31979;
i__31972 = G__31980;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31969__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__31981 = cljs.core.next.call(null,seq__31969__$1);
var G__31982 = null;
var G__31983 = (0);
var G__31984 = (0);
seq__31969 = G__31981;
chunk__31970 = G__31982;
count__31971 = G__31983;
i__31972 = G__31984;
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
clustermap.components.map.render_geotag_icon = (function render_geotag_icon(p__31985,geotag,geotag_agg){var map__31988 = p__31985;var map__31988__$1 = ((cljs.core.seq_QMARK_.call(null,map__31988))?cljs.core.apply.call(null,cljs.core.hash_map,map__31988):map__31988);var geotag_agg_spec = map__31988__$1;var icon_render_fn = cljs.core.get.call(null,map__31988__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div class=\"marker-cluster marker-cluster-large\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs31989 = icon_render_fn.call(null,geotag,geotag_agg);if(cljs.core.map_QMARK_.call(null,attrs31989))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs31989)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs31989))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geotag_marker_popup_content = (function render_geotag_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))))));
});
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__31990,geotag,geotag_agg){var map__31992 = p__31990;var map__31992__$1 = ((cljs.core.seq_QMARK_.call(null,map__31992))?cljs.core.apply.call(null,cljs.core.hash_map,map__31992):map__31992);var geotag_agg_spec = map__31992__$1;var click_fn = cljs.core.get.call(null,map__31992__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__31992__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31992__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__31992,map__31992__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__31992,map__31992__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__31993,p__31994,geotag,geotag_agg){var map__31997 = p__31993;var map__31997__$1 = ((cljs.core.seq_QMARK_.call(null,map__31997))?cljs.core.apply.call(null,cljs.core.hash_map,map__31997):map__31997);var geotag_agg_spec = map__31997__$1;var click_fn = cljs.core.get.call(null,map__31997__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__31997__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31997__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__31998 = p__31994;var map__31998__$1 = ((cljs.core.seq_QMARK_.call(null,map__31998))?cljs.core.apply.call(null,cljs.core.hash_map,map__31998):map__31998);var marker = map__31998__$1;var click_handler_key = cljs.core.get.call(null,map__31998__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31998__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_31999 = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var new_click_handler_key_32000 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_31999);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32000);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__32001,points_showing_QMARK_){var map__32007 = p__32001;var map__32007__$1 = ((cljs.core.seq_QMARK_.call(null,map__32007))?cljs.core.apply.call(null,cljs.core.hash_map,map__32007):map__32007);var geotag_agg_spec = map__32007__$1;var geotag_agg_data = cljs.core.get.call(null,map__32007__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__32007__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__32007__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32007__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var show_at_zoom_fn = cljs.core.get.call(null,map__32007__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var geotags_by_tag = cljs.core.reduce.call(null,((function (map__32007,map__32007__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(map__32007,map__32007__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (geotags_by_tag,map__32007,map__32007__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(geotags_by_tag,map__32007,map__32007__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
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
})())?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32007,map__32007__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32007,map__32007__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32007,map__32007__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32007,map__32007__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32008 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32009 = null;var count__32010 = (0);var i__32011 = (0);while(true){
if((i__32011 < count__32010))
{var k = cljs.core._nth.call(null,chunk__32009,i__32011);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32012 = seq__32008;
var G__32013 = chunk__32009;
var G__32014 = count__32010;
var G__32015 = (i__32011 + (1));
seq__32008 = G__32012;
chunk__32009 = G__32013;
count__32010 = G__32014;
i__32011 = G__32015;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32008);if(temp__4126__auto__)
{var seq__32008__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32008__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32008__$1);{
var G__32016 = cljs.core.chunk_rest.call(null,seq__32008__$1);
var G__32017 = c__4408__auto__;
var G__32018 = cljs.core.count.call(null,c__4408__auto__);
var G__32019 = (0);
seq__32008 = G__32016;
chunk__32009 = G__32017;
count__32010 = G__32018;
i__32011 = G__32019;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32008__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32020 = cljs.core.next.call(null,seq__32008__$1);
var G__32021 = null;
var G__32022 = (0);
var G__32023 = (0);
seq__32008 = G__32020;
chunk__32009 = G__32021;
count__32010 = G__32022;
i__32011 = G__32023;
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
clustermap.components.map.render_geohash_icon = (function render_geohash_icon(p__32024,geohash_agg){var map__32027 = p__32024;var map__32027__$1 = ((cljs.core.seq_QMARK_.call(null,map__32027))?cljs.core.apply.call(null,cljs.core.hash_map,map__32027):map__32027);var geohash_agg_spec = map__32027__$1;var icon_render_fn = cljs.core.get.call(null,map__32027__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div class=\"marker-cluster marker-cluster-large\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32028 = icon_render_fn.call(null,geohash_agg);if(cljs.core.map_QMARK_.call(null,attrs32028))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32028)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32028))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geohash_marker_popup_content = (function render_geohash_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32030 = content;if(cljs.core.map_QMARK_.call(null,attrs32030))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32030)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32030))+"</div>");
}
})())))));
});
/**
* we get bounds for the points contained in the geohash area, so take the
* center point as the marker point
*/
clustermap.components.map.geohash_center_point = (function geohash_center_point(p__32031){var map__32036 = p__32031;var map__32036__$1 = ((cljs.core.seq_QMARK_.call(null,map__32036))?cljs.core.apply.call(null,cljs.core.hash_map,map__32036):map__32036);var geohash_agg = map__32036__$1;var bounds = cljs.core.get.call(null,map__32036__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var vec__32037 = bounds;var vec__32038 = cljs.core.nth.call(null,vec__32037,(0),null);var south = cljs.core.nth.call(null,vec__32038,(0),null);var west = cljs.core.nth.call(null,vec__32038,(1),null);var vec__32039 = cljs.core.nth.call(null,vec__32037,(1),null);var north = cljs.core.nth.call(null,vec__32039,(0),null);var east = cljs.core.nth.call(null,vec__32039,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((south + north) / (2)),((west + east) / (2))], null);
});
clustermap.components.map.create_geohash_marker = (function create_geohash_marker(leaflet_map,p__32040,geohash_agg){var map__32042 = p__32040;var map__32042__$1 = ((cljs.core.seq_QMARK_.call(null,map__32042))?cljs.core.apply.call(null,cljs.core.hash_map,map__32042):map__32042);var geohash_agg_spec = map__32042__$1;var click_fn = cljs.core.get.call(null,map__32042__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32042__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32042__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32042,map__32042__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32042,map__32042__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geohash_marker = (function update_geohash_marker(leaflet_map,p__32043,p__32044,geohash_agg){var map__32047 = p__32043;var map__32047__$1 = ((cljs.core.seq_QMARK_.call(null,map__32047))?cljs.core.apply.call(null,cljs.core.hash_map,map__32047):map__32047);var geohash_agg_spec = map__32047__$1;var click_fn = cljs.core.get.call(null,map__32047__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32047__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32047__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32048 = p__32044;var map__32048__$1 = ((cljs.core.seq_QMARK_.call(null,map__32048))?cljs.core.apply.call(null,cljs.core.hash_map,map__32048):map__32048);var marker = map__32048__$1;var click_handler_key = cljs.core.get.call(null,map__32048__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32048__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var latlong_32049 = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon_32050 = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var new_click_handler_key_32051 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setLatLng(latlong_32049);
leaflet_marker.setIcon(icon_32050);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32051);
return marker;
});
clustermap.components.map.update_geohash_markers = (function update_geohash_markers(leaflet_map,geohash_markers_atom,p__32052,points_showing_QMARK_){var map__32058 = p__32052;var map__32058__$1 = ((cljs.core.seq_QMARK_.call(null,map__32058))?cljs.core.apply.call(null,cljs.core.hash_map,map__32058):map__32058);var geohash_agg_spec = map__32058__$1;var geohash_agg_data = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620));var icon_render_fn = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var show_at_zoom_fn = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var geohash_aggs_by_geohash = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__32058,map__32058__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn){
return (function (gha){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geohash-grid","geohash-grid",2001750091).cljs$core$IFn$_invoke$arity$1(gha),gha], null);
});})(map__32058,map__32058__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn))
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
})())?cljs.core.set.call(null,cljs.core.keys.call(null,geohash_aggs_by_geohash)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32058,map__32058__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geohash_marker.call(null,leaflet_map,geohash_agg_spec,cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32058,map__32058__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32058,map__32058__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geohash_marker.call(null,leaflet_map,geohash_agg_spec,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32058,map__32058__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32059 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32060 = null;var count__32061 = (0);var i__32062 = (0);while(true){
if((i__32062 < count__32061))
{var k = cljs.core._nth.call(null,chunk__32060,i__32062);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32063 = seq__32059;
var G__32064 = chunk__32060;
var G__32065 = count__32061;
var G__32066 = (i__32062 + (1));
seq__32059 = G__32063;
chunk__32060 = G__32064;
count__32061 = G__32065;
i__32062 = G__32066;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32059);if(temp__4126__auto__)
{var seq__32059__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32059__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32059__$1);{
var G__32067 = cljs.core.chunk_rest.call(null,seq__32059__$1);
var G__32068 = c__4408__auto__;
var G__32069 = cljs.core.count.call(null,c__4408__auto__);
var G__32070 = (0);
seq__32059 = G__32067;
chunk__32060 = G__32068;
count__32061 = G__32069;
i__32062 = G__32070;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32059__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32071 = cljs.core.next.call(null,seq__32059__$1);
var G__32072 = null;
var G__32073 = (0);
var G__32074 = (0);
seq__32059 = G__32071;
chunk__32060 = G__32072;
count__32061 = G__32073;
i__32062 = G__32074;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__32083 = cljs.core.js__GT_clj.call(null,envelope);var map__32083__$1 = ((cljs.core.seq_QMARK_.call(null,map__32083))?cljs.core.apply.call(null,cljs.core.hash_map,map__32083):map__32083);var clj_envelope = map__32083__$1;var vec__32084 = cljs.core.get.call(null,map__32083__$1,"coordinates");var vec__32085 = cljs.core.nth.call(null,vec__32084,(0),null);var vec__32086 = cljs.core.nth.call(null,vec__32085,(0),null);var miny0 = cljs.core.nth.call(null,vec__32086,(0),null);var minx0 = cljs.core.nth.call(null,vec__32086,(1),null);var vec__32087 = cljs.core.nth.call(null,vec__32085,(1),null);var maxy1 = cljs.core.nth.call(null,vec__32087,(0),null);var minx1 = cljs.core.nth.call(null,vec__32087,(1),null);var vec__32088 = cljs.core.nth.call(null,vec__32085,(2),null);var maxy2 = cljs.core.nth.call(null,vec__32088,(0),null);var maxx2 = cljs.core.nth.call(null,vec__32088,(1),null);var vec__32089 = cljs.core.nth.call(null,vec__32085,(3),null);var miny3 = cljs.core.nth.call(null,vec__32089,(0),null);var maxx3 = cljs.core.nth.call(null,vec__32089,(1),null);var vec__32090 = cljs.core.nth.call(null,vec__32085,(4),null);var miny4 = cljs.core.nth.call(null,vec__32090,(0),null);var minx4 = cljs.core.nth.call(null,vec__32090,(1),null);var inner = vec__32085;var coords = vec__32084;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__32091){var map__32093 = p__32091;var map__32093__$1 = ((cljs.core.seq_QMARK_.call(null,map__32093))?cljs.core.apply.call(null,cljs.core.hash_map,map__32093):map__32093);var fill_color = cljs.core.get.call(null,map__32093__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__32093__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__32093__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
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
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32094,p__32095){var map__32099 = p__32094;var map__32099__$1 = ((cljs.core.seq_QMARK_.call(null,map__32099))?cljs.core.apply.call(null,cljs.core.hash_map,map__32099):map__32099);var path_attrs = map__32099__$1;var selected = cljs.core.get.call(null,map__32099__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__32100 = p__32095;var map__32101 = cljs.core.nth.call(null,vec__32100,(0),null);var map__32101__$1 = ((cljs.core.seq_QMARK_.call(null,map__32101))?cljs.core.apply.call(null,cljs.core.hash_map,map__32101):map__32101);var opts = map__32101__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32101__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32101__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("dblclick",((function (tolerance,bounds,leaflet_path,popup_content,map__32099,map__32099__$1,path_attrs,selected,vec__32100,map__32101,map__32101__$1,opts,path_marker_click_fn,filter_spec){
return (function (e){leaflet_map.fitBounds(leaflet_path.getBounds());
if(cljs.core.truth_(path_marker_click_fn))
{return path_marker_click_fn.call(null,boundaryline_id);
} else
{return null;
}
});})(tolerance,bounds,leaflet_path,popup_content,map__32099,map__32099__$1,path_attrs,selected,vec__32100,map__32101,map__32101__$1,opts,path_marker_click_fn,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32094,var_args){
var p__32095 = null;if (arguments.length > 5) {
  p__32095 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__32094,p__32095);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__32102){
var comm = cljs.core.first(arglist__32102);
arglist__32102 = cljs.core.next(arglist__32102);
var leaflet_map = cljs.core.first(arglist__32102);
arglist__32102 = cljs.core.next(arglist__32102);
var boundaryline_id = cljs.core.first(arglist__32102);
arglist__32102 = cljs.core.next(arglist__32102);
var js_boundaryline = cljs.core.first(arglist__32102);
arglist__32102 = cljs.core.next(arglist__32102);
var p__32094 = cljs.core.first(arglist__32102);
var p__32095 = cljs.core.rest(arglist__32102);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__32094,p__32095);
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
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32103){var vec__32106 = p__32103;var map__32107 = cljs.core.nth.call(null,vec__32106,(0),null);var map__32107__$1 = ((cljs.core.seq_QMARK_.call(null,map__32107))?cljs.core.apply.call(null,cljs.core.hash_map,map__32107):map__32107);var opts = map__32107__$1;var filter_spec = cljs.core.get.call(null,map__32107__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__32103 = null;if (arguments.length > 6) {
  p__32103 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32103);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__32108){
var comm = cljs.core.first(arglist__32108);
arglist__32108 = cljs.core.next(arglist__32108);
var leaflet_map = cljs.core.first(arglist__32108);
arglist__32108 = cljs.core.next(arglist__32108);
var boundaryline_id = cljs.core.first(arglist__32108);
arglist__32108 = cljs.core.next(arglist__32108);
var tolerance = cljs.core.first(arglist__32108);
arglist__32108 = cljs.core.next(arglist__32108);
var js_boundaryline = cljs.core.first(arglist__32108);
arglist__32108 = cljs.core.next(arglist__32108);
var path_attrs = cljs.core.first(arglist__32108);
var p__32103 = cljs.core.rest(arglist__32108);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32103);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32109){var vec__32112 = p__32109;var map__32113 = cljs.core.nth.call(null,vec__32112,(0),null);var map__32113__$1 = ((cljs.core.seq_QMARK_.call(null,map__32113))?cljs.core.apply.call(null,cljs.core.hash_map,map__32113):map__32113);var opts = map__32113__$1;var filter_spec = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__32109 = null;if (arguments.length > 6) {
  p__32109 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32109);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__32114){
var comm = cljs.core.first(arglist__32114);
arglist__32114 = cljs.core.next(arglist__32114);
var leaflet_map = cljs.core.first(arglist__32114);
arglist__32114 = cljs.core.next(arglist__32114);
var boundaryline_id = cljs.core.first(arglist__32114);
arglist__32114 = cljs.core.next(arglist__32114);
var old_path = cljs.core.first(arglist__32114);
arglist__32114 = cljs.core.next(arglist__32114);
var js_boundaryline = cljs.core.first(arglist__32114);
arglist__32114 = cljs.core.next(arglist__32114);
var path_attrs = cljs.core.first(arglist__32114);
var p__32109 = cljs.core.rest(arglist__32114);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32109);
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
var update_path__delegate = function (comm,leaflet_map,p__32115,tolerance,js_boundaryline,path_attrs,p__32116){var map__32120 = p__32115;var map__32120__$1 = ((cljs.core.seq_QMARK_.call(null,map__32120))?cljs.core.apply.call(null,cljs.core.hash_map,map__32120):map__32120);var path = map__32120__$1;var boundaryline_id = cljs.core.get.call(null,map__32120__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__32121 = p__32116;var map__32122 = cljs.core.nth.call(null,vec__32121,(0),null);var map__32122__$1 = ((cljs.core.seq_QMARK_.call(null,map__32122))?cljs.core.apply.call(null,cljs.core.hash_map,map__32122):map__32122);var opts = map__32122__$1;var filter_spec = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
};
var update_path = function (comm,leaflet_map,p__32115,tolerance,js_boundaryline,path_attrs,var_args){
var p__32116 = null;if (arguments.length > 6) {
  p__32116 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__32115,tolerance,js_boundaryline,path_attrs,p__32116);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__32123){
var comm = cljs.core.first(arglist__32123);
arglist__32123 = cljs.core.next(arglist__32123);
var leaflet_map = cljs.core.first(arglist__32123);
arglist__32123 = cljs.core.next(arglist__32123);
var p__32115 = cljs.core.first(arglist__32123);
arglist__32123 = cljs.core.next(arglist__32123);
var tolerance = cljs.core.first(arglist__32123);
arglist__32123 = cljs.core.next(arglist__32123);
var js_boundaryline = cljs.core.first(arglist__32123);
arglist__32123 = cljs.core.next(arglist__32123);
var path_attrs = cljs.core.first(arglist__32123);
var p__32116 = cljs.core.rest(arglist__32123);
return update_path__delegate(comm,leaflet_map,p__32115,tolerance,js_boundaryline,path_attrs,p__32116);
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
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32124){var vec__32140 = p__32124;var map__32141 = cljs.core.nth.call(null,vec__32140,(0),null);var map__32141__$1 = ((cljs.core.seq_QMARK_.call(null,map__32141))?cljs.core.apply.call(null,cljs.core.hash_map,map__32141):map__32141);var opts = map__32141__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32141__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32141__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__32142 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__32142,(0),null);var notifychan = cljs.core.nth.call(null,vec__32142,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32142,tolerance_paths,notifychan,vec__32140,map__32141,map__32141__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32143){var vec__32144 = p__32143;var k = cljs.core.nth.call(null,vec__32144,(0),null);var tolerance = cljs.core.nth.call(null,vec__32144,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32144,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32142,tolerance_paths,notifychan,vec__32140,map__32141,map__32141__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32142,tolerance_paths,notifychan,vec__32140,map__32141,map__32141__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32145 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32145,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32145,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32142,tolerance_paths,notifychan,vec__32140,map__32141,map__32141__$1,opts,path_marker_click_fn,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32142,tolerance_paths,notifychan,created_paths,vec__32140,map__32141,map__32141__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32146){var vec__32147 = p__32146;var k = cljs.core.nth.call(null,vec__32147,(0),null);var tolerance = cljs.core.nth.call(null,vec__32147,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32147,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32142,tolerance_paths,notifychan,created_paths,vec__32140,map__32141,map__32141__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32142,tolerance_paths,notifychan,created_paths,vec__32140,map__32141,map__32141__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32148 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32148,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32148,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32142,tolerance_paths,notifychan,created_paths,vec__32140,map__32141,map__32141__$1,opts,path_marker_click_fn,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__32149 = cljs.core.seq.call(null,delete_path_keys);var chunk__32150 = null;var count__32151 = (0);var i__32152 = (0);while(true){
if((i__32152 < count__32151))
{var k = cljs.core._nth.call(null,chunk__32150,i__32152);var temp__4124__auto___32155 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32155))
{var path_32156 = temp__4124__auto___32155;clustermap.components.map.delete_path.call(null,leaflet_map,path_32156);
} else
{}
{
var G__32157 = seq__32149;
var G__32158 = chunk__32150;
var G__32159 = count__32151;
var G__32160 = (i__32152 + (1));
seq__32149 = G__32157;
chunk__32150 = G__32158;
count__32151 = G__32159;
i__32152 = G__32160;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32149);if(temp__4126__auto__)
{var seq__32149__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32149__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32149__$1);{
var G__32161 = cljs.core.chunk_rest.call(null,seq__32149__$1);
var G__32162 = c__4408__auto__;
var G__32163 = cljs.core.count.call(null,c__4408__auto__);
var G__32164 = (0);
seq__32149 = G__32161;
chunk__32150 = G__32162;
count__32151 = G__32163;
i__32152 = G__32164;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32149__$1);var temp__4124__auto___32165 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32165))
{var path_32166 = temp__4124__auto___32165;clustermap.components.map.delete_path.call(null,leaflet_map,path_32166);
} else
{}
{
var G__32167 = cljs.core.next.call(null,seq__32149__$1);
var G__32168 = null;
var G__32169 = (0);
var G__32170 = (0);
seq__32149 = G__32167;
chunk__32150 = G__32168;
count__32151 = G__32169;
i__32152 = G__32170;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32142,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32140,map__32141,map__32141__$1,opts,path_marker_click_fn,filter_spec){
return (function (m,p__32153){var map__32154 = p__32153;var map__32154__$1 = ((cljs.core.seq_QMARK_.call(null,map__32154))?cljs.core.apply.call(null,cljs.core.hash_map,map__32154):map__32154);var path = map__32154__$1;var id = cljs.core.get.call(null,map__32154__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32142,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32140,map__32141,map__32141__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__32124 = null;if (arguments.length > 7) {
  p__32124 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32124);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__32171){
var comm = cljs.core.first(arglist__32171);
arglist__32171 = cljs.core.next(arglist__32171);
var fetch_boundarylines_fn = cljs.core.first(arglist__32171);
arglist__32171 = cljs.core.next(arglist__32171);
var leaflet_map = cljs.core.first(arglist__32171);
arglist__32171 = cljs.core.next(arglist__32171);
var paths_atom = cljs.core.first(arglist__32171);
arglist__32171 = cljs.core.next(arglist__32171);
var path_selections_atom = cljs.core.first(arglist__32171);
arglist__32171 = cljs.core.next(arglist__32171);
var new_path_highlights = cljs.core.first(arglist__32171);
arglist__32171 = cljs.core.next(arglist__32171);
var new_selection_paths = cljs.core.first(arglist__32171);
var p__32124 = cljs.core.rest(arglist__32171);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32124);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__32174){var vec__32175 = p__32174;var tz = cljs.core.nth.call(null,vec__32175,(0),null);var collection = cljs.core.nth.call(null,vec__32175,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__32176,owner){var map__32378 = p__32176;var map__32378__$1 = ((cljs.core.seq_QMARK_.call(null,map__32378))?cljs.core.apply.call(null,cljs.core.hash_map,map__32378):map__32378);var cursor_data = map__32378__$1;var map__32379 = cljs.core.get.call(null,map__32378__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32379__$1 = ((cljs.core.seq_QMARK_.call(null,map__32379))?cljs.core.apply.call(null,cljs.core.hash_map,map__32379):map__32379);var cursor = map__32379__$1;var data = cljs.core.get.call(null,map__32379__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__32379__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__32379__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32380 = cljs.core.get.call(null,map__32379__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32380__$1 = ((cljs.core.seq_QMARK_.call(null,map__32380))?cljs.core.apply.call(null,cljs.core.hash_map,map__32380):map__32380);var controls = map__32380__$1;var colorchooser = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var geohash_aggs = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var boundaryline_agg = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__32378__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__32378__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t32381 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32381 = (function (colorchooser,initial_bounds,map__32378,owner,data,zoom,map__32380,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,map__32379,boundaryline_collection,show_points,link_click_fn,p__32176,filter,geohash_aggs,point_data,boundaryline_agg,meta32382){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.map__32378 = map__32378;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.map__32380 = map__32380;
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
this.map__32379 = map__32379;
this.boundaryline_collection = boundaryline_collection;
this.show_points = show_points;
this.link_click_fn = link_click_fn;
this.p__32176 = p__32176;
this.filter = filter;
this.geohash_aggs = geohash_aggs;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.meta32382 = meta32382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32381.cljs$lang$type = true;
clustermap.components.map.t32381.cljs$lang$ctorStr = "clustermap.components.map/t32381";
clustermap.components.map.t32381.cljs$lang$ctorPrWriter = ((function (map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t32381");
});})(map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32381.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t32381.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__32384 = om.core.get_state.call(null,self__.owner);var map__32384__$1 = ((cljs.core.seq_QMARK_.call(null,map__32384))?cljs.core.apply.call(null,cljs.core.hash_map,map__32384):map__32384);var map__32385 = cljs.core.get.call(null,map__32384__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32385__$1 = ((cljs.core.seq_QMARK_.call(null,map__32385))?cljs.core.apply.call(null,cljs.core.hash_map,map__32385):map__32385);var path_selections = cljs.core.get.call(null,map__32385__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32385__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32385__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32385__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32381.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32381.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$,p__32386,p__32387){var self__ = this;
var map__32388 = p__32386;var map__32388__$1 = ((cljs.core.seq_QMARK_.call(null,map__32388))?cljs.core.apply.call(null,cljs.core.hash_map,map__32388):map__32388);var next_cursor_data = map__32388__$1;var map__32389 = cljs.core.get.call(null,map__32388__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32389__$1 = ((cljs.core.seq_QMARK_.call(null,map__32389))?cljs.core.apply.call(null,cljs.core.hash_map,map__32389):map__32389);var next_cursor = map__32389__$1;var next_data = cljs.core.get.call(null,map__32389__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__32389__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__32389__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32390 = cljs.core.get.call(null,map__32389__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32390__$1 = ((cljs.core.seq_QMARK_.call(null,map__32390))?cljs.core.apply.call(null,cljs.core.hash_map,map__32390):map__32390);var next_colorchooser = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_zoom = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_geohash_aggs = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var next_boundaryline_agg = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_location = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"location","location",1815599388));var next_show_points = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__32388__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__32388__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32391 = p__32387;var map__32391__$1 = ((cljs.core.seq_QMARK_.call(null,map__32391))?cljs.core.apply.call(null,cljs.core.hash_map,map__32391):map__32391);var map__32392 = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32392__$1 = ((cljs.core.seq_QMARK_.call(null,map__32392))?cljs.core.apply.call(null,cljs.core.hash_map,map__32392):map__32392);var next_markers = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_geohash_markers = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705));var next_paths = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var fetch_geohash_agg_data_fn = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986));var this$__$1 = this;var map__32393 = om.core.get_shared.call(null,self__.owner);var map__32393__$1 = ((cljs.core.seq_QMARK_.call(null,map__32393))?cljs.core.apply.call(null,cljs.core.hash_map,map__32393):map__32393);var path_marker_click_fn = cljs.core.get.call(null,map__32393__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32393__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32393__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32393__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__32394 = om.core.get_state.call(null,self__.owner);var map__32394__$1 = ((cljs.core.seq_QMARK_.call(null,map__32394))?cljs.core.apply.call(null,cljs.core.hash_map,map__32394):map__32394);var map__32395 = cljs.core.get.call(null,map__32394__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32395__$1 = ((cljs.core.seq_QMARK_.call(null,map__32395))?cljs.core.apply.call(null,cljs.core.hash_map,map__32395):map__32395);var path_selections = cljs.core.get.call(null,map__32395__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32395__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32395__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__32395__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__32395__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__32394__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__32394__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var zoom_changed = cljs.core.not_EQ_.call(null,next_zoom,self__.zoom);if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
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
{var c__9125__auto___32579 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32579,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32579,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32418){var state_val_32419 = (state_32418[(1)]);if((state_val_32419 === (5)))
{var inst_32416 = (state_32418[(2)]);var state_32418__$1 = state_32418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32418__$1,inst_32416);
} else
{if((state_val_32419 === (4)))
{var state_32418__$1 = state_32418;var statearr_32420_32580 = state_32418__$1;(statearr_32420_32580[(2)] = null);
(statearr_32420_32580[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32419 === (3)))
{var inst_32408 = (state_32418[(7)]);var inst_32410 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32411 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_32412 = (new cljs.core.PersistentVector(null,1,(5),inst_32410,inst_32411,null));var inst_32413 = om.core.update_BANG_.call(null,self__.cursor,inst_32412,inst_32408);var state_32418__$1 = state_32418;var statearr_32421_32581 = state_32418__$1;(statearr_32421_32581[(2)] = inst_32413);
(statearr_32421_32581[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32419 === (2)))
{var inst_32408 = (state_32418[(7)]);var inst_32408__$1 = (state_32418[(2)]);var state_32418__$1 = (function (){var statearr_32422 = state_32418;(statearr_32422[(7)] = inst_32408__$1);
return statearr_32422;
})();if(cljs.core.truth_(inst_32408__$1))
{var statearr_32423_32582 = state_32418__$1;(statearr_32423_32582[(1)] = (3));
} else
{var statearr_32424_32583 = state_32418__$1;(statearr_32424_32583[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32419 === (1)))
{var inst_32396 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32397 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32398 = leaflet_map.getZoom();var inst_32399 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_32398);var inst_32400 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32401 = om.core._value.call(null,next_filter);var inst_32402 = leaflet_map.getBounds();var inst_32403 = clustermap.components.map.bounds_array.call(null,inst_32402);var inst_32404 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32405 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32406 = fetch_aggregation_data_fn.call(null,inst_32396,inst_32397,inst_32399,inst_32400,inst_32401,inst_32403,inst_32404,inst_32405);var state_32418__$1 = state_32418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32418__$1,(2),inst_32406);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32579,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32579,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32428 = [null,null,null,null,null,null,null,null];(statearr_32428[(0)] = state_machine__9111__auto__);
(statearr_32428[(1)] = (1));
return statearr_32428;
});
var state_machine__9111__auto____1 = (function (state_32418){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32418);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32429){if((e32429 instanceof Object))
{var ex__9114__auto__ = e32429;var statearr_32430_32584 = state_32418;(statearr_32430_32584[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32418);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32429;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32585 = state_32418;
state_32418 = G__32585;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32418){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32579,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32431 = f__9126__auto__.call(null);(statearr_32431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32579);
return statearr_32431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32579,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
var c__9125__auto___32586 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32586,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32586,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32452){var state_val_32453 = (state_32452[(1)]);if((state_val_32453 === (5)))
{var inst_32450 = (state_32452[(2)]);var state_32452__$1 = state_32452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32452__$1,inst_32450);
} else
{if((state_val_32453 === (4)))
{var state_32452__$1 = state_32452;var statearr_32454_32587 = state_32452__$1;(statearr_32454_32587[(2)] = null);
(statearr_32454_32587[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32453 === (3)))
{var inst_32442 = (state_32452[(7)]);var inst_32444 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32445 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_32446 = (new cljs.core.PersistentVector(null,1,(5),inst_32444,inst_32445,null));var inst_32447 = om.core.update_BANG_.call(null,self__.cursor,inst_32446,inst_32442);var state_32452__$1 = state_32452;var statearr_32455_32588 = state_32452__$1;(statearr_32455_32588[(2)] = inst_32447);
(statearr_32455_32588[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32453 === (2)))
{var inst_32442 = (state_32452[(7)]);var inst_32442__$1 = (state_32452[(2)]);var state_32452__$1 = (function (){var statearr_32456 = state_32452;(statearr_32456[(7)] = inst_32442__$1);
return statearr_32456;
})();if(cljs.core.truth_(inst_32442__$1))
{var statearr_32457_32589 = state_32452__$1;(statearr_32457_32589[(1)] = (3));
} else
{var statearr_32458_32590 = state_32452__$1;(statearr_32458_32590[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32453 === (1)))
{var inst_32432 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32433 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32434 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32435 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover"];var inst_32436 = (new cljs.core.PersistentVector(null,5,(5),inst_32434,inst_32435,null));var inst_32437 = om.core._value.call(null,next_filter);var inst_32438 = leaflet_map.getBounds();var inst_32439 = clustermap.components.map.bounds_array.call(null,inst_32438);var inst_32440 = fetch_point_data_fn.call(null,inst_32432,inst_32433,"!postcode",inst_32436,(1000),inst_32437,inst_32439);var state_32452__$1 = state_32452;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32452__$1,(2),inst_32440);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32586,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32586,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32462 = [null,null,null,null,null,null,null,null];(statearr_32462[(0)] = state_machine__9111__auto__);
(statearr_32462[(1)] = (1));
return statearr_32462;
});
var state_machine__9111__auto____1 = (function (state_32452){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32452);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32463){if((e32463 instanceof Object))
{var ex__9114__auto__ = e32463;var statearr_32464_32591 = state_32452;(statearr_32464_32591[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32452);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32463;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32592 = state_32452;
state_32452 = G__32592;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32452){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32586,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32465 = f__9126__auto__.call(null);(statearr_32465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32586);
return statearr_32465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32586,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32593 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32593,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32593,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32479){var state_val_32480 = (state_32479[(1)]);if((state_val_32480 === (5)))
{var inst_32477 = (state_32479[(2)]);var state_32479__$1 = state_32479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32479__$1,inst_32477);
} else
{if((state_val_32480 === (4)))
{var state_32479__$1 = state_32479;var statearr_32481_32594 = state_32479__$1;(statearr_32481_32594[(2)] = null);
(statearr_32481_32594[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32480 === (3)))
{var inst_32469 = (state_32479[(7)]);var inst_32471 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32472 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_32473 = (new cljs.core.PersistentVector(null,3,(5),inst_32471,inst_32472,null));var inst_32474 = om.core.update_BANG_.call(null,self__.cursor,inst_32473,inst_32469);var state_32479__$1 = state_32479;var statearr_32482_32595 = state_32479__$1;(statearr_32482_32595[(2)] = inst_32474);
(statearr_32482_32595[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32480 === (2)))
{var inst_32469 = (state_32479[(7)]);var inst_32469__$1 = (state_32479[(2)]);var state_32479__$1 = (function (){var statearr_32483 = state_32479;(statearr_32483[(7)] = inst_32469__$1);
return statearr_32483;
})();if(cljs.core.truth_(inst_32469__$1))
{var statearr_32484_32596 = state_32479__$1;(statearr_32484_32596[(1)] = (3));
} else
{var statearr_32485_32597 = state_32479__$1;(statearr_32485_32597[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32480 === (1)))
{var inst_32466 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32467 = fetch_geotag_data_fn.call(null,inst_32466);var state_32479__$1 = state_32479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32479__$1,(2),inst_32467);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32593,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32593,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32489 = [null,null,null,null,null,null,null,null];(statearr_32489[(0)] = state_machine__9111__auto__);
(statearr_32489[(1)] = (1));
return statearr_32489;
});
var state_machine__9111__auto____1 = (function (state_32479){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32479);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32490){if((e32490 instanceof Object))
{var ex__9114__auto__ = e32490;var statearr_32491_32598 = state_32479;(statearr_32491_32598[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32479);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32490;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32599 = state_32479;
state_32479 = G__32599;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32479){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32593,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32492 = f__9126__auto__.call(null);(statearr_32492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32593);
return statearr_32492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32593,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___32600 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32600,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32600,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32511){var state_val_32512 = (state_32511[(1)]);if((state_val_32512 === (5)))
{var inst_32509 = (state_32511[(2)]);var state_32511__$1 = state_32511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32511__$1,inst_32509);
} else
{if((state_val_32512 === (4)))
{var state_32511__$1 = state_32511;var statearr_32513_32601 = state_32511__$1;(statearr_32513_32601[(2)] = null);
(statearr_32513_32601[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32512 === (3)))
{var inst_32500 = (state_32511[(7)]);var inst_32502 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32503 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_32504 = (new cljs.core.PersistentVector(null,3,(5),inst_32502,inst_32503,null));var inst_32505 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32500);var inst_32506 = om.core.update_BANG_.call(null,self__.cursor,inst_32504,inst_32505);var state_32511__$1 = state_32511;var statearr_32514_32602 = state_32511__$1;(statearr_32514_32602[(2)] = inst_32506);
(statearr_32514_32602[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32512 === (2)))
{var inst_32500 = (state_32511[(7)]);var inst_32500__$1 = (state_32511[(2)]);var state_32511__$1 = (function (){var statearr_32515 = state_32511;(statearr_32515[(7)] = inst_32500__$1);
return statearr_32515;
})();if(cljs.core.truth_(inst_32500__$1))
{var statearr_32516_32603 = state_32511__$1;(statearr_32516_32603[(1)] = (3));
} else
{var statearr_32517_32604 = state_32511__$1;(statearr_32517_32604[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32512 === (1)))
{var inst_32493 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32494 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32495 = [next_filter];var inst_32496 = cljs.core.PersistentHashMap.fromArrays(inst_32494,inst_32495);var inst_32497 = cljs.core.merge.call(null,inst_32493,inst_32496);var inst_32498 = fetch_geotag_agg_data_fn.call(null,inst_32497);var state_32511__$1 = state_32511;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32511__$1,(2),inst_32498);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32600,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32600,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32521 = [null,null,null,null,null,null,null,null];(statearr_32521[(0)] = state_machine__9111__auto__);
(statearr_32521[(1)] = (1));
return statearr_32521;
});
var state_machine__9111__auto____1 = (function (state_32511){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32511);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32522){if((e32522 instanceof Object))
{var ex__9114__auto__ = e32522;var statearr_32523_32605 = state_32511;(statearr_32523_32605[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32511);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32522;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32606 = state_32511;
state_32511 = G__32606;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32511){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32600,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32524 = f__9126__auto__.call(null);(statearr_32524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32600);
return statearr_32524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32600,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___32607 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32607,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32607,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32545){var state_val_32546 = (state_32545[(1)]);if((state_val_32546 === (5)))
{var inst_32543 = (state_32545[(2)]);var state_32545__$1 = state_32545;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32545__$1,inst_32543);
} else
{if((state_val_32546 === (4)))
{var state_32545__$1 = state_32545;var statearr_32547_32608 = state_32545__$1;(statearr_32547_32608[(2)] = null);
(statearr_32547_32608[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32546 === (3)))
{var inst_32534 = (state_32545[(7)]);var inst_32536 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32537 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620)];var inst_32538 = (new cljs.core.PersistentVector(null,3,(5),inst_32536,inst_32537,null));var inst_32539 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32534);var inst_32540 = om.core.update_BANG_.call(null,self__.cursor,inst_32538,inst_32539);var state_32545__$1 = state_32545;var statearr_32548_32609 = state_32545__$1;(statearr_32548_32609[(2)] = inst_32540);
(statearr_32548_32609[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32546 === (2)))
{var inst_32534 = (state_32545[(7)]);var inst_32534__$1 = (state_32545[(2)]);var state_32545__$1 = (function (){var statearr_32549 = state_32545;(statearr_32549[(7)] = inst_32534__$1);
return statearr_32549;
})();if(cljs.core.truth_(inst_32534__$1))
{var statearr_32550_32610 = state_32545__$1;(statearr_32550_32610[(1)] = (3));
} else
{var statearr_32551_32611 = state_32545__$1;(statearr_32551_32611[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32546 === (1)))
{var inst_32525 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32526 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"precision","precision",-1175707478)];var inst_32527 = new cljs.core.Keyword(null,"precision-fn","precision-fn",1742300693).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32528 = inst_32527.call(null,next_zoom);var inst_32529 = [next_filter,next_bounds,inst_32528];var inst_32530 = cljs.core.PersistentHashMap.fromArrays(inst_32526,inst_32529);var inst_32531 = cljs.core.merge.call(null,inst_32525,inst_32530);var inst_32532 = fetch_geohash_agg_data_fn.call(null,inst_32531);var state_32545__$1 = state_32545;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32545__$1,(2),inst_32532);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32607,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32607,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32555 = [null,null,null,null,null,null,null,null];(statearr_32555[(0)] = state_machine__9111__auto__);
(statearr_32555[(1)] = (1));
return statearr_32555;
});
var state_machine__9111__auto____1 = (function (state_32545){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32545);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32556){if((e32556 instanceof Object))
{var ex__9114__auto__ = e32556;var statearr_32557_32612 = state_32545;(statearr_32557_32612[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32545);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32556;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32613 = state_32545;
state_32545 = G__32613;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32545){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32607,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32558 = f__9126__auto__.call(null);(statearr_32558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32607);
return statearr_32558;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32607,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var vec__32559_32614 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_32615 = cljs.core.nth.call(null,vec__32559_32614,(0),null);var selection_path_colours_32616 = cljs.core.nth.call(null,vec__32559_32614,(1),null);var update_paths_invocation_32617 = ((function (vec__32559_32614,new_threshold_colors_32615,selection_path_colours_32616,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_32616,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696),path_marker_click_fn], null));
});})(vec__32559_32614,new_threshold_colors_32615,selection_path_colours_32616,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_32615,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_32615);
} else
{}
var temp__4126__auto___32618 = update_paths_invocation_32617.call(null);if(cljs.core.truth_(temp__4126__auto___32618))
{var notify_chan_32619 = temp__4126__auto___32618;var c__9125__auto___32620 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32620,notify_chan_32619,temp__4126__auto___32618,vec__32559_32614,new_threshold_colors_32615,selection_path_colours_32616,update_paths_invocation_32617,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32620,notify_chan_32619,temp__4126__auto___32618,vec__32559_32614,new_threshold_colors_32615,selection_path_colours_32616,update_paths_invocation_32617,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32564){var state_val_32565 = (state_32564[(1)]);if((state_val_32565 === (2)))
{var inst_32561 = (state_32564[(2)]);var inst_32562 = update_paths_invocation_32617.call(null);var state_32564__$1 = (function (){var statearr_32566 = state_32564;(statearr_32566[(7)] = inst_32561);
return statearr_32566;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32564__$1,inst_32562);
} else
{if((state_val_32565 === (1)))
{var state_32564__$1 = state_32564;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32564__$1,(2),notify_chan_32619);
} else
{return null;
}
}
});})(c__9125__auto___32620,notify_chan_32619,temp__4126__auto___32618,vec__32559_32614,new_threshold_colors_32615,selection_path_colours_32616,update_paths_invocation_32617,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32620,notify_chan_32619,temp__4126__auto___32618,vec__32559_32614,new_threshold_colors_32615,selection_path_colours_32616,update_paths_invocation_32617,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32570 = [null,null,null,null,null,null,null,null];(statearr_32570[(0)] = state_machine__9111__auto__);
(statearr_32570[(1)] = (1));
return statearr_32570;
});
var state_machine__9111__auto____1 = (function (state_32564){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32564);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32571){if((e32571 instanceof Object))
{var ex__9114__auto__ = e32571;var statearr_32572_32621 = state_32564;(statearr_32572_32621[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32564);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32571;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32622 = state_32564;
state_32564 = G__32622;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32564){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32620,notify_chan_32619,temp__4126__auto___32618,vec__32559_32614,new_threshold_colors_32615,selection_path_colours_32616,update_paths_invocation_32617,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32573 = f__9126__auto__.call(null);(statearr_32573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32620);
return statearr_32573;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32620,notify_chan_32619,temp__4126__auto___32618,vec__32559_32614,new_threshold_colors_32615,selection_path_colours_32616,update_paths_invocation_32617,map__32393,map__32393__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32394,map__32394__$1,map__32395,map__32395__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32388,map__32388__$1,next_cursor_data,map__32389,map__32389__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32390,map__32390__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32391,map__32391__$1,map__32392,map__32392__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
} else
{}
if((cljs.core.not_EQ_.call(null,next_show_points,self__.show_points)) || (cljs.core.not_EQ_.call(null,next_point_data,self__.point_data)))
{clustermap.components.map.update_markers.call(null,self__.link_render_fn,leaflet_map,leaflet_marker_cluster_group,next_markers,next_show_points,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),next_location], null));
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
});})(map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32381.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32381.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__32574 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__32574__$1 = ((cljs.core.seq_QMARK_.call(null,map__32574))?cljs.core.apply.call(null,cljs.core.hash_map,map__32574):map__32574);var map = map__32574__$1;var path = cljs.core.get.call(null,map__32574__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__32574__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32574__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__32575 = om.core.get_shared.call(null,self__.owner);var map__32575__$1 = ((cljs.core.seq_QMARK_.call(null,map__32575))?cljs.core.apply.call(null,cljs.core.hash_map,map__32575):map__32575);var path_marker_click_fn = cljs.core.get.call(null,map__32575__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32575__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32575__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32575__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
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
});})(node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
});})(node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__32576 = e;var G__32576__$1 = (((G__32576 == null))?null:G__32576.target);var G__32576__$2 = (((G__32576__$1 == null))?null:domina.attr.call(null,G__32576__$1,"data-boundaryline-id"));var G__32576__$3 = (((G__32576__$2 == null))?null:path_marker_click_fn.call(null,G__32576__$2));return G__32576__$3;
});})(node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__32574,map__32574__$1,map,path,markers,leaflet_map,map__32575,map__32575__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986),clustermap.api.geohash_grid_factory.call(null));
});})(map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32381.prototype.om$core$IRender$ = true;
clustermap.components.map.t32381.prototype.om$core$IRender$render$arity$1 = ((function (map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32383){var self__ = this;
var _32383__$1 = this;return self__.meta32382;
});})(map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32383,meta32382__$1){var self__ = this;
var _32383__$1 = this;return (new clustermap.components.map.t32381(self__.colorchooser,self__.initial_bounds,self__.map__32378,self__.owner,self__.data,self__.zoom,self__.map__32380,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.cursor,self__.threshold_colors,self__.bounds,self__.map__32379,self__.boundaryline_collection,self__.show_points,self__.link_click_fn,self__.p__32176,self__.filter,self__.geohash_aggs,self__.point_data,self__.boundaryline_agg,meta32382__$1));
});})(map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t32381 = ((function (map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function __GT_t32381(colorchooser__$1,initial_bounds__$1,map__32378__$2,owner__$1,data__$1,zoom__$1,map__32380__$2,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,map__32379__$2,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,p__32176__$1,filter__$1,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta32382){return (new clustermap.components.map.t32381(colorchooser__$1,initial_bounds__$1,map__32378__$2,owner__$1,data__$1,zoom__$1,map__32380__$2,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,map__32379__$2,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,p__32176__$1,filter__$1,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta32382));
});})(map__32378,map__32378__$1,cursor_data,map__32379,map__32379__$1,cursor,data,point_data,boundaryline_collections,map__32380,map__32380__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t32381(colorchooser,initial_bounds,map__32378__$1,owner,data,zoom,map__32380__$1,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,map__32379__$1,boundaryline_collection,show_points,link_click_fn,p__32176,filter,geohash_aggs,point_data,boundaryline_agg,null));
});
