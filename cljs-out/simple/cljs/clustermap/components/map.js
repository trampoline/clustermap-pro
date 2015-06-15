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
clustermap.components.map.render_marker_icon = (function render_marker_icon(location_sites){if((cljs.core.count.call(null,location_sites) > (1)))
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs31913 = clustermap.formats.number.compact.call(null,cljs.core.count.call(null,location_sites),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sf","sf",-1949491738),(2)], null));if(cljs.core.map_QMARK_.call(null,attrs31913))
{return ("<p"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs31913)))+" />");
} else
{return ("<p>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs31913))+"</p>");
}
})())+"</div>")], null)));
} else
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));
}
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__31918(s__31919){return (new cljs.core.LazySeq(null,(function (){var s__31919__$1 = s__31919;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31919__$1);if(temp__4126__auto__)
{var s__31919__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31919__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31919__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31921 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31920 = (0);while(true){
if((i__31920 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__31920);cljs.core.chunk_append.call(null,b__31921,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);var content = (cljs.core.truth_(path_fn)?path_fn.call(null,site):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(click_handler_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key], null),content], null):content)], null);
})()))));
{
var G__31922 = (i__31920 + (1));
i__31920 = G__31922;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31921),iter__31918.call(null,cljs.core.chunk_rest.call(null,s__31919__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31921),null);
}
} else
{var site = cljs.core.first.call(null,s__31919__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);var content = (cljs.core.truth_(path_fn)?path_fn.call(null,site):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(click_handler_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key], null),content], null):content)], null);
})()))),iter__31918.call(null,cljs.core.rest.call(null,s__31919__$2)));
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
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__31923){var map__31927 = p__31923;var map__31927__$1 = ((cljs.core.seq_QMARK_.call(null,map__31927))?cljs.core.apply.call(null,cljs.core.hash_map,map__31927):map__31927);var marker_click_fn = cljs.core.get.call(null,map__31927__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var temp__4124__auto__ = (function (){var G__31928 = location_sites;var G__31928__$1 = (((G__31928 == null))?null:cljs.core.first.call(null,G__31928));var G__31928__$2 = (((G__31928__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__31928__$1));var G__31928__$3 = (((G__31928__$2 == null))?null:cljs.core.reverse.call(null,G__31928__$2));var G__31928__$4 = (((G__31928__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__31928__$3));return G__31928__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = clustermap.components.map.render_marker_icon.call(null,location_sites);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(marker_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__31927,map__31927__$1,marker_click_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,marker_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__31927,map__31927__$1,marker_click_fn))
,location_sites)):null);leaflet_marker.on("mouseover",((function (icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__31927,map__31927__$1,marker_click_fn){
return (function (e){return leaflet_marker.openPopup();
});})(icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__31927,map__31927__$1,marker_click_fn))
);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
leaflet_marker_cluster_group.addLayer(leaflet_marker);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys)], null);
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_31929_31930 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31929_31930,sb__4579__auto__,temp__4124__auto__,map__31927,map__31927__$1,marker_click_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_31929_31930,sb__4579__auto__,temp__4124__auto__,map__31927,map__31927__$1,marker_click_fn))
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
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__31954,location_sites,p__31955){var map__31958 = p__31954;var map__31958__$1 = ((cljs.core.seq_QMARK_.call(null,map__31958))?cljs.core.apply.call(null,cljs.core.hash_map,map__31958):map__31958);var marker = map__31958__$1;var click_handler_keys = cljs.core.get.call(null,map__31958__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31958__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31958__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__31959 = p__31955;var map__31959__$1 = ((cljs.core.seq_QMARK_.call(null,map__31959))?cljs.core.apply.call(null,cljs.core.hash_map,map__31959):map__31959);var marker_click_fn = cljs.core.get.call(null,map__31959__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var icon = clustermap.components.map.render_marker_icon.call(null,location_sites);var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(marker_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,popup,map__31958,map__31958__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__31959,map__31959__$1,marker_click_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,marker_click_fn,ls))], null);
});})(icon,popup,map__31958,map__31958__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__31959,map__31959__$1,marker_click_fn))
,location_sites)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
leaflet_marker.setIcon(icon);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__31960){var map__31962 = p__31960;var map__31962__$1 = ((cljs.core.seq_QMARK_.call(null,map__31962))?cljs.core.apply.call(null,cljs.core.hash_map,map__31962):map__31962);var marker = map__31962__$1;var click_handler_keys = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
if(cljs.core.truth_(leaflet_marker_cluster_group))
{leaflet_marker_cluster_group.removeLayer(leaflet_marker);
} else
{leaflet_map.removeLayer(leaflet_marker);
}
return null;
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,leaflet_marker_cluster_group,markers_atom,show_points,new_locations,p__31963){var map__31969 = p__31963;var map__31969__$1 = ((cljs.core.seq_QMARK_.call(null,map__31969))?cljs.core.apply.call(null,cljs.core.hash_map,map__31969):map__31969);var opts = map__31969__$1;var marker_click_fn = cljs.core.get.call(null,map__31969__$1,new cljs.core.Keyword(null,"marker-click-fn","marker-click-fn",-601398030));var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = (cljs.core.truth_(show_points)?cljs.core.set.call(null,cljs.core.keys.call(null,new_locations)):null);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,location_keys),location_keys], null)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,map__31969,map__31969__$1,opts,marker_click_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,map__31969,map__31969__$1,opts,marker_click_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__31969,map__31969__$1,opts,marker_click_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k),cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__31969,map__31969__$1,opts,marker_click_fn))
,update_marker_keys));var ___$1 = (function (){var seq__31970 = cljs.core.seq.call(null,remove_marker_keys);var chunk__31971 = null;var count__31972 = (0);var i__31973 = (0);while(true){
if((i__31973 < count__31972))
{var k = cljs.core._nth.call(null,chunk__31971,i__31973);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__31974 = seq__31970;
var G__31975 = chunk__31971;
var G__31976 = count__31972;
var G__31977 = (i__31973 + (1));
seq__31970 = G__31974;
chunk__31971 = G__31975;
count__31972 = G__31976;
i__31973 = G__31977;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31970);if(temp__4126__auto__)
{var seq__31970__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31970__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__31970__$1);{
var G__31978 = cljs.core.chunk_rest.call(null,seq__31970__$1);
var G__31979 = c__4408__auto__;
var G__31980 = cljs.core.count.call(null,c__4408__auto__);
var G__31981 = (0);
seq__31970 = G__31978;
chunk__31971 = G__31979;
count__31972 = G__31980;
i__31973 = G__31981;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31970__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__31982 = cljs.core.next.call(null,seq__31970__$1);
var G__31983 = null;
var G__31984 = (0);
var G__31985 = (0);
seq__31970 = G__31982;
chunk__31971 = G__31983;
count__31972 = G__31984;
i__31973 = G__31985;
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
clustermap.components.map.render_geotag_icon = (function render_geotag_icon(p__31986,geotag,geotag_agg){var map__31989 = p__31986;var map__31989__$1 = ((cljs.core.seq_QMARK_.call(null,map__31989))?cljs.core.apply.call(null,cljs.core.hash_map,map__31989):map__31989);var geotag_agg_spec = map__31989__$1;var icon_render_fn = cljs.core.get.call(null,map__31989__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div class=\"marker-cluster marker-cluster-large\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs31990 = icon_render_fn.call(null,geotag,geotag_agg);if(cljs.core.map_QMARK_.call(null,attrs31990))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs31990)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs31990))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geotag_marker_popup_content = (function render_geotag_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))))));
});
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__31991,geotag,geotag_agg){var map__31993 = p__31991;var map__31993__$1 = ((cljs.core.seq_QMARK_.call(null,map__31993))?cljs.core.apply.call(null,cljs.core.hash_map,map__31993):map__31993);var geotag_agg_spec = map__31993__$1;var click_fn = cljs.core.get.call(null,map__31993__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__31993__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31993__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__31993,map__31993__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__31993,map__31993__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__31994,p__31995,geotag,geotag_agg){var map__31998 = p__31994;var map__31998__$1 = ((cljs.core.seq_QMARK_.call(null,map__31998))?cljs.core.apply.call(null,cljs.core.hash_map,map__31998):map__31998);var geotag_agg_spec = map__31998__$1;var click_fn = cljs.core.get.call(null,map__31998__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__31998__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__31998__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__31999 = p__31995;var map__31999__$1 = ((cljs.core.seq_QMARK_.call(null,map__31999))?cljs.core.apply.call(null,cljs.core.hash_map,map__31999):map__31999);var marker = map__31999__$1;var click_handler_key = cljs.core.get.call(null,map__31999__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__31999__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_32000 = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var new_click_handler_key_32001 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_32000);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32001);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__32002,points_showing_QMARK_){var map__32008 = p__32002;var map__32008__$1 = ((cljs.core.seq_QMARK_.call(null,map__32008))?cljs.core.apply.call(null,cljs.core.hash_map,map__32008):map__32008);var geotag_agg_spec = map__32008__$1;var geotag_agg_data = cljs.core.get.call(null,map__32008__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__32008__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__32008__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32008__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var show_at_zoom_fn = cljs.core.get.call(null,map__32008__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var geotags_by_tag = cljs.core.reduce.call(null,((function (map__32008,map__32008__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(map__32008,map__32008__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (geotags_by_tag,map__32008,map__32008__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(geotags_by_tag,map__32008,map__32008__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
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
})())?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32008,map__32008__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32008,map__32008__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32008,map__32008__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32008,map__32008__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32009 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32010 = null;var count__32011 = (0);var i__32012 = (0);while(true){
if((i__32012 < count__32011))
{var k = cljs.core._nth.call(null,chunk__32010,i__32012);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32013 = seq__32009;
var G__32014 = chunk__32010;
var G__32015 = count__32011;
var G__32016 = (i__32012 + (1));
seq__32009 = G__32013;
chunk__32010 = G__32014;
count__32011 = G__32015;
i__32012 = G__32016;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32009);if(temp__4126__auto__)
{var seq__32009__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32009__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32009__$1);{
var G__32017 = cljs.core.chunk_rest.call(null,seq__32009__$1);
var G__32018 = c__4408__auto__;
var G__32019 = cljs.core.count.call(null,c__4408__auto__);
var G__32020 = (0);
seq__32009 = G__32017;
chunk__32010 = G__32018;
count__32011 = G__32019;
i__32012 = G__32020;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32009__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32021 = cljs.core.next.call(null,seq__32009__$1);
var G__32022 = null;
var G__32023 = (0);
var G__32024 = (0);
seq__32009 = G__32021;
chunk__32010 = G__32022;
count__32011 = G__32023;
i__32012 = G__32024;
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
clustermap.components.map.render_geohash_icon = (function render_geohash_icon(p__32025,geohash_agg){var map__32028 = p__32025;var map__32028__$1 = ((cljs.core.seq_QMARK_.call(null,map__32028))?cljs.core.apply.call(null,cljs.core.hash_map,map__32028):map__32028);var geohash_agg_spec = map__32028__$1;var icon_render_fn = cljs.core.get.call(null,map__32028__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div class=\"marker-cluster marker-cluster-large\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32029 = icon_render_fn.call(null,geohash_agg);if(cljs.core.map_QMARK_.call(null,attrs32029))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32029)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32029))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geohash_marker_popup_content = (function render_geohash_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32031 = content;if(cljs.core.map_QMARK_.call(null,attrs32031))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32031)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32031))+"</div>");
}
})())))));
});
/**
* we get bounds for the points contained in the geohash area, so take the
* center point as the marker point
*/
clustermap.components.map.geohash_center_point = (function geohash_center_point(p__32032){var map__32037 = p__32032;var map__32037__$1 = ((cljs.core.seq_QMARK_.call(null,map__32037))?cljs.core.apply.call(null,cljs.core.hash_map,map__32037):map__32037);var geohash_agg = map__32037__$1;var bounds = cljs.core.get.call(null,map__32037__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var vec__32038 = bounds;var vec__32039 = cljs.core.nth.call(null,vec__32038,(0),null);var south = cljs.core.nth.call(null,vec__32039,(0),null);var west = cljs.core.nth.call(null,vec__32039,(1),null);var vec__32040 = cljs.core.nth.call(null,vec__32038,(1),null);var north = cljs.core.nth.call(null,vec__32040,(0),null);var east = cljs.core.nth.call(null,vec__32040,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((south + north) / (2)),((west + east) / (2))], null);
});
clustermap.components.map.create_geohash_marker = (function create_geohash_marker(leaflet_map,p__32041,geohash_agg){var map__32043 = p__32041;var map__32043__$1 = ((cljs.core.seq_QMARK_.call(null,map__32043))?cljs.core.apply.call(null,cljs.core.hash_map,map__32043):map__32043);var geohash_agg_spec = map__32043__$1;var click_fn = cljs.core.get.call(null,map__32043__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32043__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32043__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32043,map__32043__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32043,map__32043__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geohash_marker = (function update_geohash_marker(leaflet_map,p__32044,p__32045,geohash_agg){var map__32048 = p__32044;var map__32048__$1 = ((cljs.core.seq_QMARK_.call(null,map__32048))?cljs.core.apply.call(null,cljs.core.hash_map,map__32048):map__32048);var geohash_agg_spec = map__32048__$1;var click_fn = cljs.core.get.call(null,map__32048__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32048__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32048__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32049 = p__32045;var map__32049__$1 = ((cljs.core.seq_QMARK_.call(null,map__32049))?cljs.core.apply.call(null,cljs.core.hash_map,map__32049):map__32049);var marker = map__32049__$1;var click_handler_key = cljs.core.get.call(null,map__32049__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32049__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var latlong_32050 = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon_32051 = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var new_click_handler_key_32052 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setLatLng(latlong_32050);
leaflet_marker.setIcon(icon_32051);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32052);
return marker;
});
clustermap.components.map.update_geohash_markers = (function update_geohash_markers(leaflet_map,geohash_markers_atom,p__32053,points_showing_QMARK_){var map__32059 = p__32053;var map__32059__$1 = ((cljs.core.seq_QMARK_.call(null,map__32059))?cljs.core.apply.call(null,cljs.core.hash_map,map__32059):map__32059);var geohash_agg_spec = map__32059__$1;var geohash_agg_data = cljs.core.get.call(null,map__32059__$1,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620));var icon_render_fn = cljs.core.get.call(null,map__32059__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var show_at_zoom_fn = cljs.core.get.call(null,map__32059__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var geohash_aggs_by_geohash = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__32059,map__32059__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn){
return (function (gha){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geohash-grid","geohash-grid",2001750091).cljs$core$IFn$_invoke$arity$1(gha),gha], null);
});})(map__32059,map__32059__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn))
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
})())?cljs.core.set.call(null,cljs.core.keys.call(null,geohash_aggs_by_geohash)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32059,map__32059__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geohash_marker.call(null,leaflet_map,geohash_agg_spec,cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32059,map__32059__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32059,map__32059__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geohash_marker.call(null,leaflet_map,geohash_agg_spec,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32059,map__32059__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32060 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32061 = null;var count__32062 = (0);var i__32063 = (0);while(true){
if((i__32063 < count__32062))
{var k = cljs.core._nth.call(null,chunk__32061,i__32063);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32064 = seq__32060;
var G__32065 = chunk__32061;
var G__32066 = count__32062;
var G__32067 = (i__32063 + (1));
seq__32060 = G__32064;
chunk__32061 = G__32065;
count__32062 = G__32066;
i__32063 = G__32067;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32060);if(temp__4126__auto__)
{var seq__32060__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32060__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32060__$1);{
var G__32068 = cljs.core.chunk_rest.call(null,seq__32060__$1);
var G__32069 = c__4408__auto__;
var G__32070 = cljs.core.count.call(null,c__4408__auto__);
var G__32071 = (0);
seq__32060 = G__32068;
chunk__32061 = G__32069;
count__32062 = G__32070;
i__32063 = G__32071;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32060__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32072 = cljs.core.next.call(null,seq__32060__$1);
var G__32073 = null;
var G__32074 = (0);
var G__32075 = (0);
seq__32060 = G__32072;
chunk__32061 = G__32073;
count__32062 = G__32074;
i__32063 = G__32075;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__32084 = cljs.core.js__GT_clj.call(null,envelope);var map__32084__$1 = ((cljs.core.seq_QMARK_.call(null,map__32084))?cljs.core.apply.call(null,cljs.core.hash_map,map__32084):map__32084);var clj_envelope = map__32084__$1;var vec__32085 = cljs.core.get.call(null,map__32084__$1,"coordinates");var vec__32086 = cljs.core.nth.call(null,vec__32085,(0),null);var vec__32087 = cljs.core.nth.call(null,vec__32086,(0),null);var miny0 = cljs.core.nth.call(null,vec__32087,(0),null);var minx0 = cljs.core.nth.call(null,vec__32087,(1),null);var vec__32088 = cljs.core.nth.call(null,vec__32086,(1),null);var maxy1 = cljs.core.nth.call(null,vec__32088,(0),null);var minx1 = cljs.core.nth.call(null,vec__32088,(1),null);var vec__32089 = cljs.core.nth.call(null,vec__32086,(2),null);var maxy2 = cljs.core.nth.call(null,vec__32089,(0),null);var maxx2 = cljs.core.nth.call(null,vec__32089,(1),null);var vec__32090 = cljs.core.nth.call(null,vec__32086,(3),null);var miny3 = cljs.core.nth.call(null,vec__32090,(0),null);var maxx3 = cljs.core.nth.call(null,vec__32090,(1),null);var vec__32091 = cljs.core.nth.call(null,vec__32086,(4),null);var miny4 = cljs.core.nth.call(null,vec__32091,(0),null);var minx4 = cljs.core.nth.call(null,vec__32091,(1),null);var inner = vec__32086;var coords = vec__32085;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__32092){var map__32094 = p__32092;var map__32094__$1 = ((cljs.core.seq_QMARK_.call(null,map__32094))?cljs.core.apply.call(null,cljs.core.hash_map,map__32094):map__32094);var fill_color = cljs.core.get.call(null,map__32094__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__32094__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__32094__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
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
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32095,p__32096){var map__32100 = p__32095;var map__32100__$1 = ((cljs.core.seq_QMARK_.call(null,map__32100))?cljs.core.apply.call(null,cljs.core.hash_map,map__32100):map__32100);var path_attrs = map__32100__$1;var selected = cljs.core.get.call(null,map__32100__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__32101 = p__32096;var map__32102 = cljs.core.nth.call(null,vec__32101,(0),null);var map__32102__$1 = ((cljs.core.seq_QMARK_.call(null,map__32102))?cljs.core.apply.call(null,cljs.core.hash_map,map__32102):map__32102);var opts = map__32102__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32102__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32102__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("dblclick",((function (tolerance,bounds,leaflet_path,popup_content,map__32100,map__32100__$1,path_attrs,selected,vec__32101,map__32102,map__32102__$1,opts,path_marker_click_fn,filter_spec){
return (function (e){leaflet_map.fitBounds(leaflet_path.getBounds());
if(cljs.core.truth_(path_marker_click_fn))
{return path_marker_click_fn.call(null,boundaryline_id);
} else
{return null;
}
});})(tolerance,bounds,leaflet_path,popup_content,map__32100,map__32100__$1,path_attrs,selected,vec__32101,map__32102,map__32102__$1,opts,path_marker_click_fn,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32095,var_args){
var p__32096 = null;if (arguments.length > 5) {
  p__32096 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__32095,p__32096);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__32103){
var comm = cljs.core.first(arglist__32103);
arglist__32103 = cljs.core.next(arglist__32103);
var leaflet_map = cljs.core.first(arglist__32103);
arglist__32103 = cljs.core.next(arglist__32103);
var boundaryline_id = cljs.core.first(arglist__32103);
arglist__32103 = cljs.core.next(arglist__32103);
var js_boundaryline = cljs.core.first(arglist__32103);
arglist__32103 = cljs.core.next(arglist__32103);
var p__32095 = cljs.core.first(arglist__32103);
var p__32096 = cljs.core.rest(arglist__32103);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__32095,p__32096);
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
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32104){var vec__32107 = p__32104;var map__32108 = cljs.core.nth.call(null,vec__32107,(0),null);var map__32108__$1 = ((cljs.core.seq_QMARK_.call(null,map__32108))?cljs.core.apply.call(null,cljs.core.hash_map,map__32108):map__32108);var opts = map__32108__$1;var filter_spec = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__32104 = null;if (arguments.length > 6) {
  p__32104 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32104);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__32109){
var comm = cljs.core.first(arglist__32109);
arglist__32109 = cljs.core.next(arglist__32109);
var leaflet_map = cljs.core.first(arglist__32109);
arglist__32109 = cljs.core.next(arglist__32109);
var boundaryline_id = cljs.core.first(arglist__32109);
arglist__32109 = cljs.core.next(arglist__32109);
var tolerance = cljs.core.first(arglist__32109);
arglist__32109 = cljs.core.next(arglist__32109);
var js_boundaryline = cljs.core.first(arglist__32109);
arglist__32109 = cljs.core.next(arglist__32109);
var path_attrs = cljs.core.first(arglist__32109);
var p__32104 = cljs.core.rest(arglist__32109);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32104);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32110){var vec__32113 = p__32110;var map__32114 = cljs.core.nth.call(null,vec__32113,(0),null);var map__32114__$1 = ((cljs.core.seq_QMARK_.call(null,map__32114))?cljs.core.apply.call(null,cljs.core.hash_map,map__32114):map__32114);var opts = map__32114__$1;var filter_spec = cljs.core.get.call(null,map__32114__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__32110 = null;if (arguments.length > 6) {
  p__32110 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32110);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__32115){
var comm = cljs.core.first(arglist__32115);
arglist__32115 = cljs.core.next(arglist__32115);
var leaflet_map = cljs.core.first(arglist__32115);
arglist__32115 = cljs.core.next(arglist__32115);
var boundaryline_id = cljs.core.first(arglist__32115);
arglist__32115 = cljs.core.next(arglist__32115);
var old_path = cljs.core.first(arglist__32115);
arglist__32115 = cljs.core.next(arglist__32115);
var js_boundaryline = cljs.core.first(arglist__32115);
arglist__32115 = cljs.core.next(arglist__32115);
var path_attrs = cljs.core.first(arglist__32115);
var p__32110 = cljs.core.rest(arglist__32115);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32110);
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
var update_path__delegate = function (comm,leaflet_map,p__32116,tolerance,js_boundaryline,path_attrs,p__32117){var map__32121 = p__32116;var map__32121__$1 = ((cljs.core.seq_QMARK_.call(null,map__32121))?cljs.core.apply.call(null,cljs.core.hash_map,map__32121):map__32121);var path = map__32121__$1;var boundaryline_id = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__32122 = p__32117;var map__32123 = cljs.core.nth.call(null,vec__32122,(0),null);var map__32123__$1 = ((cljs.core.seq_QMARK_.call(null,map__32123))?cljs.core.apply.call(null,cljs.core.hash_map,map__32123):map__32123);var opts = map__32123__$1;var filter_spec = cljs.core.get.call(null,map__32123__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
};
var update_path = function (comm,leaflet_map,p__32116,tolerance,js_boundaryline,path_attrs,var_args){
var p__32117 = null;if (arguments.length > 6) {
  p__32117 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__32116,tolerance,js_boundaryline,path_attrs,p__32117);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__32124){
var comm = cljs.core.first(arglist__32124);
arglist__32124 = cljs.core.next(arglist__32124);
var leaflet_map = cljs.core.first(arglist__32124);
arglist__32124 = cljs.core.next(arglist__32124);
var p__32116 = cljs.core.first(arglist__32124);
arglist__32124 = cljs.core.next(arglist__32124);
var tolerance = cljs.core.first(arglist__32124);
arglist__32124 = cljs.core.next(arglist__32124);
var js_boundaryline = cljs.core.first(arglist__32124);
arglist__32124 = cljs.core.next(arglist__32124);
var path_attrs = cljs.core.first(arglist__32124);
var p__32117 = cljs.core.rest(arglist__32124);
return update_path__delegate(comm,leaflet_map,p__32116,tolerance,js_boundaryline,path_attrs,p__32117);
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
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32125){var vec__32141 = p__32125;var map__32142 = cljs.core.nth.call(null,vec__32141,(0),null);var map__32142__$1 = ((cljs.core.seq_QMARK_.call(null,map__32142))?cljs.core.apply.call(null,cljs.core.hash_map,map__32142):map__32142);var opts = map__32142__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32142__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32142__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__32143 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__32143,(0),null);var notifychan = cljs.core.nth.call(null,vec__32143,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32143,tolerance_paths,notifychan,vec__32141,map__32142,map__32142__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32144){var vec__32145 = p__32144;var k = cljs.core.nth.call(null,vec__32145,(0),null);var tolerance = cljs.core.nth.call(null,vec__32145,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32145,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32143,tolerance_paths,notifychan,vec__32141,map__32142,map__32142__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32143,tolerance_paths,notifychan,vec__32141,map__32142,map__32142__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32146 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32146,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32146,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32143,tolerance_paths,notifychan,vec__32141,map__32142,map__32142__$1,opts,path_marker_click_fn,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32143,tolerance_paths,notifychan,created_paths,vec__32141,map__32142,map__32142__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32147){var vec__32148 = p__32147;var k = cljs.core.nth.call(null,vec__32148,(0),null);var tolerance = cljs.core.nth.call(null,vec__32148,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32148,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32143,tolerance_paths,notifychan,created_paths,vec__32141,map__32142,map__32142__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32143,tolerance_paths,notifychan,created_paths,vec__32141,map__32142,map__32142__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32149 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32149,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32149,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32143,tolerance_paths,notifychan,created_paths,vec__32141,map__32142,map__32142__$1,opts,path_marker_click_fn,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__32150 = cljs.core.seq.call(null,delete_path_keys);var chunk__32151 = null;var count__32152 = (0);var i__32153 = (0);while(true){
if((i__32153 < count__32152))
{var k = cljs.core._nth.call(null,chunk__32151,i__32153);var temp__4124__auto___32156 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32156))
{var path_32157 = temp__4124__auto___32156;clustermap.components.map.delete_path.call(null,leaflet_map,path_32157);
} else
{}
{
var G__32158 = seq__32150;
var G__32159 = chunk__32151;
var G__32160 = count__32152;
var G__32161 = (i__32153 + (1));
seq__32150 = G__32158;
chunk__32151 = G__32159;
count__32152 = G__32160;
i__32153 = G__32161;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32150);if(temp__4126__auto__)
{var seq__32150__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32150__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32150__$1);{
var G__32162 = cljs.core.chunk_rest.call(null,seq__32150__$1);
var G__32163 = c__4408__auto__;
var G__32164 = cljs.core.count.call(null,c__4408__auto__);
var G__32165 = (0);
seq__32150 = G__32162;
chunk__32151 = G__32163;
count__32152 = G__32164;
i__32153 = G__32165;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32150__$1);var temp__4124__auto___32166 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32166))
{var path_32167 = temp__4124__auto___32166;clustermap.components.map.delete_path.call(null,leaflet_map,path_32167);
} else
{}
{
var G__32168 = cljs.core.next.call(null,seq__32150__$1);
var G__32169 = null;
var G__32170 = (0);
var G__32171 = (0);
seq__32150 = G__32168;
chunk__32151 = G__32169;
count__32152 = G__32170;
i__32153 = G__32171;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32143,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32141,map__32142,map__32142__$1,opts,path_marker_click_fn,filter_spec){
return (function (m,p__32154){var map__32155 = p__32154;var map__32155__$1 = ((cljs.core.seq_QMARK_.call(null,map__32155))?cljs.core.apply.call(null,cljs.core.hash_map,map__32155):map__32155);var path = map__32155__$1;var id = cljs.core.get.call(null,map__32155__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32143,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32141,map__32142,map__32142__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__32125 = null;if (arguments.length > 7) {
  p__32125 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32125);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__32172){
var comm = cljs.core.first(arglist__32172);
arglist__32172 = cljs.core.next(arglist__32172);
var fetch_boundarylines_fn = cljs.core.first(arglist__32172);
arglist__32172 = cljs.core.next(arglist__32172);
var leaflet_map = cljs.core.first(arglist__32172);
arglist__32172 = cljs.core.next(arglist__32172);
var paths_atom = cljs.core.first(arglist__32172);
arglist__32172 = cljs.core.next(arglist__32172);
var path_selections_atom = cljs.core.first(arglist__32172);
arglist__32172 = cljs.core.next(arglist__32172);
var new_path_highlights = cljs.core.first(arglist__32172);
arglist__32172 = cljs.core.next(arglist__32172);
var new_selection_paths = cljs.core.first(arglist__32172);
var p__32125 = cljs.core.rest(arglist__32172);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32125);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__32175){var vec__32176 = p__32175;var tz = cljs.core.nth.call(null,vec__32176,(0),null);var collection = cljs.core.nth.call(null,vec__32176,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__32177,owner){var map__32379 = p__32177;var map__32379__$1 = ((cljs.core.seq_QMARK_.call(null,map__32379))?cljs.core.apply.call(null,cljs.core.hash_map,map__32379):map__32379);var cursor_data = map__32379__$1;var map__32380 = cljs.core.get.call(null,map__32379__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32380__$1 = ((cljs.core.seq_QMARK_.call(null,map__32380))?cljs.core.apply.call(null,cljs.core.hash_map,map__32380):map__32380);var cursor = map__32380__$1;var data = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32381 = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32381__$1 = ((cljs.core.seq_QMARK_.call(null,map__32381))?cljs.core.apply.call(null,cljs.core.hash_map,map__32381):map__32381);var controls = map__32381__$1;var colorchooser = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var geohash_aggs = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var boundaryline_agg = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__32379__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__32379__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t32382 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32382 = (function (colorchooser,initial_bounds,p__32177,owner,data,zoom,map__32380,map_options,cursor_data,geotag_aggs,filter_spec,map__32381,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,map__32379,boundaryline_collection,show_points,link_click_fn,filter,geohash_aggs,point_data,boundaryline_agg,meta32383){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.p__32177 = p__32177;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.map__32380 = map__32380;
this.map_options = map_options;
this.cursor_data = cursor_data;
this.geotag_aggs = geotag_aggs;
this.filter_spec = filter_spec;
this.map__32381 = map__32381;
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
this.filter = filter;
this.geohash_aggs = geohash_aggs;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.meta32383 = meta32383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32382.cljs$lang$type = true;
clustermap.components.map.t32382.cljs$lang$ctorStr = "clustermap.components.map/t32382";
clustermap.components.map.t32382.cljs$lang$ctorPrWriter = ((function (map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t32382");
});})(map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32382.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t32382.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__32385 = om.core.get_state.call(null,self__.owner);var map__32385__$1 = ((cljs.core.seq_QMARK_.call(null,map__32385))?cljs.core.apply.call(null,cljs.core.hash_map,map__32385):map__32385);var map__32386 = cljs.core.get.call(null,map__32385__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32386__$1 = ((cljs.core.seq_QMARK_.call(null,map__32386))?cljs.core.apply.call(null,cljs.core.hash_map,map__32386):map__32386);var path_selections = cljs.core.get.call(null,map__32386__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32386__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32386__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32386__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32382.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32382.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$,p__32387,p__32388){var self__ = this;
var map__32389 = p__32387;var map__32389__$1 = ((cljs.core.seq_QMARK_.call(null,map__32389))?cljs.core.apply.call(null,cljs.core.hash_map,map__32389):map__32389);var next_cursor_data = map__32389__$1;var map__32390 = cljs.core.get.call(null,map__32389__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32390__$1 = ((cljs.core.seq_QMARK_.call(null,map__32390))?cljs.core.apply.call(null,cljs.core.hash_map,map__32390):map__32390);var next_cursor = map__32390__$1;var next_data = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32391 = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32391__$1 = ((cljs.core.seq_QMARK_.call(null,map__32391))?cljs.core.apply.call(null,cljs.core.hash_map,map__32391):map__32391);var next_colorchooser = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_zoom = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_geohash_aggs = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var next_boundaryline_agg = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_link_click_fn = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var next_link_render_fn = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var next_show_points = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__32389__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__32389__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32392 = p__32388;var map__32392__$1 = ((cljs.core.seq_QMARK_.call(null,map__32392))?cljs.core.apply.call(null,cljs.core.hash_map,map__32392):map__32392);var map__32393 = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32393__$1 = ((cljs.core.seq_QMARK_.call(null,map__32393))?cljs.core.apply.call(null,cljs.core.hash_map,map__32393):map__32393);var next_markers = cljs.core.get.call(null,map__32393__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__32393__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_geohash_markers = cljs.core.get.call(null,map__32393__$1,new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705));var next_paths = cljs.core.get.call(null,map__32393__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__32393__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var fetch_geohash_agg_data_fn = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986));var this$__$1 = this;var map__32394 = om.core.get_shared.call(null,self__.owner);var map__32394__$1 = ((cljs.core.seq_QMARK_.call(null,map__32394))?cljs.core.apply.call(null,cljs.core.hash_map,map__32394):map__32394);var path_marker_click_fn = cljs.core.get.call(null,map__32394__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32394__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32394__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32394__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__32395 = om.core.get_state.call(null,self__.owner);var map__32395__$1 = ((cljs.core.seq_QMARK_.call(null,map__32395))?cljs.core.apply.call(null,cljs.core.hash_map,map__32395):map__32395);var map__32396 = cljs.core.get.call(null,map__32395__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32396__$1 = ((cljs.core.seq_QMARK_.call(null,map__32396))?cljs.core.apply.call(null,cljs.core.hash_map,map__32396):map__32396);var path_selections = cljs.core.get.call(null,map__32396__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32396__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32396__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__32396__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__32396__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__32395__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__32395__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var zoom_changed = cljs.core.not_EQ_.call(null,next_zoom,self__.zoom);if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
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
{var c__9125__auto___32580 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32580,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32580,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32419){var state_val_32420 = (state_32419[(1)]);if((state_val_32420 === (5)))
{var inst_32417 = (state_32419[(2)]);var state_32419__$1 = state_32419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32419__$1,inst_32417);
} else
{if((state_val_32420 === (4)))
{var state_32419__$1 = state_32419;var statearr_32421_32581 = state_32419__$1;(statearr_32421_32581[(2)] = null);
(statearr_32421_32581[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32420 === (3)))
{var inst_32409 = (state_32419[(7)]);var inst_32411 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32412 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_32413 = (new cljs.core.PersistentVector(null,1,(5),inst_32411,inst_32412,null));var inst_32414 = om.core.update_BANG_.call(null,self__.cursor,inst_32413,inst_32409);var state_32419__$1 = state_32419;var statearr_32422_32582 = state_32419__$1;(statearr_32422_32582[(2)] = inst_32414);
(statearr_32422_32582[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32420 === (2)))
{var inst_32409 = (state_32419[(7)]);var inst_32409__$1 = (state_32419[(2)]);var state_32419__$1 = (function (){var statearr_32423 = state_32419;(statearr_32423[(7)] = inst_32409__$1);
return statearr_32423;
})();if(cljs.core.truth_(inst_32409__$1))
{var statearr_32424_32583 = state_32419__$1;(statearr_32424_32583[(1)] = (3));
} else
{var statearr_32425_32584 = state_32419__$1;(statearr_32425_32584[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32420 === (1)))
{var inst_32397 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32398 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32399 = leaflet_map.getZoom();var inst_32400 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_32399);var inst_32401 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32402 = om.core._value.call(null,next_filter);var inst_32403 = leaflet_map.getBounds();var inst_32404 = clustermap.components.map.bounds_array.call(null,inst_32403);var inst_32405 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32406 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32407 = fetch_aggregation_data_fn.call(null,inst_32397,inst_32398,inst_32400,inst_32401,inst_32402,inst_32404,inst_32405,inst_32406);var state_32419__$1 = state_32419;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32419__$1,(2),inst_32407);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32580,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32580,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32429 = [null,null,null,null,null,null,null,null];(statearr_32429[(0)] = state_machine__9111__auto__);
(statearr_32429[(1)] = (1));
return statearr_32429;
});
var state_machine__9111__auto____1 = (function (state_32419){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32419);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32430){if((e32430 instanceof Object))
{var ex__9114__auto__ = e32430;var statearr_32431_32585 = state_32419;(statearr_32431_32585[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32419);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32430;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32586 = state_32419;
state_32419 = G__32586;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32419){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32580,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32432 = f__9126__auto__.call(null);(statearr_32432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32580);
return statearr_32432;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32580,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
var c__9125__auto___32587 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32587,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32587,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32453){var state_val_32454 = (state_32453[(1)]);if((state_val_32454 === (5)))
{var inst_32451 = (state_32453[(2)]);var state_32453__$1 = state_32453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32453__$1,inst_32451);
} else
{if((state_val_32454 === (4)))
{var state_32453__$1 = state_32453;var statearr_32455_32588 = state_32453__$1;(statearr_32455_32588[(2)] = null);
(statearr_32455_32588[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32454 === (3)))
{var inst_32443 = (state_32453[(7)]);var inst_32445 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32446 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_32447 = (new cljs.core.PersistentVector(null,1,(5),inst_32445,inst_32446,null));var inst_32448 = om.core.update_BANG_.call(null,self__.cursor,inst_32447,inst_32443);var state_32453__$1 = state_32453;var statearr_32456_32589 = state_32453__$1;(statearr_32456_32589[(2)] = inst_32448);
(statearr_32456_32589[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32454 === (2)))
{var inst_32443 = (state_32453[(7)]);var inst_32443__$1 = (state_32453[(2)]);var state_32453__$1 = (function (){var statearr_32457 = state_32453;(statearr_32457[(7)] = inst_32443__$1);
return statearr_32457;
})();if(cljs.core.truth_(inst_32443__$1))
{var statearr_32458_32590 = state_32453__$1;(statearr_32458_32590[(1)] = (3));
} else
{var statearr_32459_32591 = state_32453__$1;(statearr_32459_32591[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32454 === (1)))
{var inst_32433 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32434 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32435 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32436 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover"];var inst_32437 = (new cljs.core.PersistentVector(null,5,(5),inst_32435,inst_32436,null));var inst_32438 = om.core._value.call(null,next_filter);var inst_32439 = leaflet_map.getBounds();var inst_32440 = clustermap.components.map.bounds_array.call(null,inst_32439);var inst_32441 = fetch_point_data_fn.call(null,inst_32433,inst_32434,"!postcode",inst_32437,(1000),inst_32438,inst_32440);var state_32453__$1 = state_32453;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32453__$1,(2),inst_32441);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32587,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32587,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
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
{var ex__9114__auto__ = e32464;var statearr_32465_32592 = state_32453;(statearr_32465_32592[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32453);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32464;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32593 = state_32453;
state_32453 = G__32593;
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
;})(switch__9110__auto__,c__9125__auto___32587,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32466 = f__9126__auto__.call(null);(statearr_32466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32587);
return statearr_32466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32587,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32594 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32594,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32594,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32480){var state_val_32481 = (state_32480[(1)]);if((state_val_32481 === (5)))
{var inst_32478 = (state_32480[(2)]);var state_32480__$1 = state_32480;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32480__$1,inst_32478);
} else
{if((state_val_32481 === (4)))
{var state_32480__$1 = state_32480;var statearr_32482_32595 = state_32480__$1;(statearr_32482_32595[(2)] = null);
(statearr_32482_32595[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32481 === (3)))
{var inst_32470 = (state_32480[(7)]);var inst_32472 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32473 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_32474 = (new cljs.core.PersistentVector(null,3,(5),inst_32472,inst_32473,null));var inst_32475 = om.core.update_BANG_.call(null,self__.cursor,inst_32474,inst_32470);var state_32480__$1 = state_32480;var statearr_32483_32596 = state_32480__$1;(statearr_32483_32596[(2)] = inst_32475);
(statearr_32483_32596[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32481 === (2)))
{var inst_32470 = (state_32480[(7)]);var inst_32470__$1 = (state_32480[(2)]);var state_32480__$1 = (function (){var statearr_32484 = state_32480;(statearr_32484[(7)] = inst_32470__$1);
return statearr_32484;
})();if(cljs.core.truth_(inst_32470__$1))
{var statearr_32485_32597 = state_32480__$1;(statearr_32485_32597[(1)] = (3));
} else
{var statearr_32486_32598 = state_32480__$1;(statearr_32486_32598[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32481 === (1)))
{var inst_32467 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32468 = fetch_geotag_data_fn.call(null,inst_32467);var state_32480__$1 = state_32480;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32480__$1,(2),inst_32468);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32594,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32594,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32490 = [null,null,null,null,null,null,null,null];(statearr_32490[(0)] = state_machine__9111__auto__);
(statearr_32490[(1)] = (1));
return statearr_32490;
});
var state_machine__9111__auto____1 = (function (state_32480){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32480);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32491){if((e32491 instanceof Object))
{var ex__9114__auto__ = e32491;var statearr_32492_32599 = state_32480;(statearr_32492_32599[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32480);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32491;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32600 = state_32480;
state_32480 = G__32600;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32480){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32594,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32493 = f__9126__auto__.call(null);(statearr_32493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32594);
return statearr_32493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32594,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___32601 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32601,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32601,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32512){var state_val_32513 = (state_32512[(1)]);if((state_val_32513 === (5)))
{var inst_32510 = (state_32512[(2)]);var state_32512__$1 = state_32512;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32512__$1,inst_32510);
} else
{if((state_val_32513 === (4)))
{var state_32512__$1 = state_32512;var statearr_32514_32602 = state_32512__$1;(statearr_32514_32602[(2)] = null);
(statearr_32514_32602[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32513 === (3)))
{var inst_32501 = (state_32512[(7)]);var inst_32503 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32504 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_32505 = (new cljs.core.PersistentVector(null,3,(5),inst_32503,inst_32504,null));var inst_32506 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32501);var inst_32507 = om.core.update_BANG_.call(null,self__.cursor,inst_32505,inst_32506);var state_32512__$1 = state_32512;var statearr_32515_32603 = state_32512__$1;(statearr_32515_32603[(2)] = inst_32507);
(statearr_32515_32603[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32513 === (2)))
{var inst_32501 = (state_32512[(7)]);var inst_32501__$1 = (state_32512[(2)]);var state_32512__$1 = (function (){var statearr_32516 = state_32512;(statearr_32516[(7)] = inst_32501__$1);
return statearr_32516;
})();if(cljs.core.truth_(inst_32501__$1))
{var statearr_32517_32604 = state_32512__$1;(statearr_32517_32604[(1)] = (3));
} else
{var statearr_32518_32605 = state_32512__$1;(statearr_32518_32605[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32513 === (1)))
{var inst_32494 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32495 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32496 = [next_filter];var inst_32497 = cljs.core.PersistentHashMap.fromArrays(inst_32495,inst_32496);var inst_32498 = cljs.core.merge.call(null,inst_32494,inst_32497);var inst_32499 = fetch_geotag_agg_data_fn.call(null,inst_32498);var state_32512__$1 = state_32512;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32512__$1,(2),inst_32499);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32601,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32601,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32522 = [null,null,null,null,null,null,null,null];(statearr_32522[(0)] = state_machine__9111__auto__);
(statearr_32522[(1)] = (1));
return statearr_32522;
});
var state_machine__9111__auto____1 = (function (state_32512){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32512);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32523){if((e32523 instanceof Object))
{var ex__9114__auto__ = e32523;var statearr_32524_32606 = state_32512;(statearr_32524_32606[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32512);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32523;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32607 = state_32512;
state_32512 = G__32607;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32512){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32601,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32525 = f__9126__auto__.call(null);(statearr_32525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32601);
return statearr_32525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32601,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___32608 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32608,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32608,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32546){var state_val_32547 = (state_32546[(1)]);if((state_val_32547 === (5)))
{var inst_32544 = (state_32546[(2)]);var state_32546__$1 = state_32546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32546__$1,inst_32544);
} else
{if((state_val_32547 === (4)))
{var state_32546__$1 = state_32546;var statearr_32548_32609 = state_32546__$1;(statearr_32548_32609[(2)] = null);
(statearr_32548_32609[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32547 === (3)))
{var inst_32535 = (state_32546[(7)]);var inst_32537 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32538 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620)];var inst_32539 = (new cljs.core.PersistentVector(null,3,(5),inst_32537,inst_32538,null));var inst_32540 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32535);var inst_32541 = om.core.update_BANG_.call(null,self__.cursor,inst_32539,inst_32540);var state_32546__$1 = state_32546;var statearr_32549_32610 = state_32546__$1;(statearr_32549_32610[(2)] = inst_32541);
(statearr_32549_32610[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32547 === (2)))
{var inst_32535 = (state_32546[(7)]);var inst_32535__$1 = (state_32546[(2)]);var state_32546__$1 = (function (){var statearr_32550 = state_32546;(statearr_32550[(7)] = inst_32535__$1);
return statearr_32550;
})();if(cljs.core.truth_(inst_32535__$1))
{var statearr_32551_32611 = state_32546__$1;(statearr_32551_32611[(1)] = (3));
} else
{var statearr_32552_32612 = state_32546__$1;(statearr_32552_32612[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32547 === (1)))
{var inst_32526 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32527 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"precision","precision",-1175707478)];var inst_32528 = new cljs.core.Keyword(null,"precision-fn","precision-fn",1742300693).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32529 = inst_32528.call(null,next_zoom);var inst_32530 = [next_filter,next_bounds,inst_32529];var inst_32531 = cljs.core.PersistentHashMap.fromArrays(inst_32527,inst_32530);var inst_32532 = cljs.core.merge.call(null,inst_32526,inst_32531);var inst_32533 = fetch_geohash_agg_data_fn.call(null,inst_32532);var state_32546__$1 = state_32546;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32546__$1,(2),inst_32533);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32608,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32608,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32556 = [null,null,null,null,null,null,null,null];(statearr_32556[(0)] = state_machine__9111__auto__);
(statearr_32556[(1)] = (1));
return statearr_32556;
});
var state_machine__9111__auto____1 = (function (state_32546){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32546);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32557){if((e32557 instanceof Object))
{var ex__9114__auto__ = e32557;var statearr_32558_32613 = state_32546;(statearr_32558_32613[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32546);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32557;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32614 = state_32546;
state_32546 = G__32614;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32546){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32608,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32559 = f__9126__auto__.call(null);(statearr_32559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32608);
return statearr_32559;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32608,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var vec__32560_32615 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_32616 = cljs.core.nth.call(null,vec__32560_32615,(0),null);var selection_path_colours_32617 = cljs.core.nth.call(null,vec__32560_32615,(1),null);var update_paths_invocation_32618 = ((function (vec__32560_32615,new_threshold_colors_32616,selection_path_colours_32617,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_32617,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696),path_marker_click_fn], null));
});})(vec__32560_32615,new_threshold_colors_32616,selection_path_colours_32617,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_32616,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_32616);
} else
{}
var temp__4126__auto___32619 = update_paths_invocation_32618.call(null);if(cljs.core.truth_(temp__4126__auto___32619))
{var notify_chan_32620 = temp__4126__auto___32619;var c__9125__auto___32621 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32621,notify_chan_32620,temp__4126__auto___32619,vec__32560_32615,new_threshold_colors_32616,selection_path_colours_32617,update_paths_invocation_32618,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32621,notify_chan_32620,temp__4126__auto___32619,vec__32560_32615,new_threshold_colors_32616,selection_path_colours_32617,update_paths_invocation_32618,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32565){var state_val_32566 = (state_32565[(1)]);if((state_val_32566 === (2)))
{var inst_32562 = (state_32565[(2)]);var inst_32563 = update_paths_invocation_32618.call(null);var state_32565__$1 = (function (){var statearr_32567 = state_32565;(statearr_32567[(7)] = inst_32562);
return statearr_32567;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32565__$1,inst_32563);
} else
{if((state_val_32566 === (1)))
{var state_32565__$1 = state_32565;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32565__$1,(2),notify_chan_32620);
} else
{return null;
}
}
});})(c__9125__auto___32621,notify_chan_32620,temp__4126__auto___32619,vec__32560_32615,new_threshold_colors_32616,selection_path_colours_32617,update_paths_invocation_32618,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32621,notify_chan_32620,temp__4126__auto___32619,vec__32560_32615,new_threshold_colors_32616,selection_path_colours_32617,update_paths_invocation_32618,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32571 = [null,null,null,null,null,null,null,null];(statearr_32571[(0)] = state_machine__9111__auto__);
(statearr_32571[(1)] = (1));
return statearr_32571;
});
var state_machine__9111__auto____1 = (function (state_32565){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32565);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32572){if((e32572 instanceof Object))
{var ex__9114__auto__ = e32572;var statearr_32573_32622 = state_32565;(statearr_32573_32622[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32565);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32572;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32623 = state_32565;
state_32565 = G__32623;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32565){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32621,notify_chan_32620,temp__4126__auto___32619,vec__32560_32615,new_threshold_colors_32616,selection_path_colours_32617,update_paths_invocation_32618,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32574 = f__9126__auto__.call(null);(statearr_32574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32621);
return statearr_32574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32621,notify_chan_32620,temp__4126__auto___32619,vec__32560_32615,new_threshold_colors_32616,selection_path_colours_32617,update_paths_invocation_32618,map__32394,map__32394__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32395,map__32395__$1,map__32396,map__32396__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32389,map__32389__$1,next_cursor_data,map__32390,map__32390__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32391,map__32391__$1,next_colorchooser,next_boundaryline_collection,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_link_click_fn,next_link_render_fn,next_show_points,next_filter,next_filter_spec,map__32392,map__32392__$1,map__32393,map__32393__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
});})(map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32382.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32382.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__32575 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__32575__$1 = ((cljs.core.seq_QMARK_.call(null,map__32575))?cljs.core.apply.call(null,cljs.core.hash_map,map__32575):map__32575);var map = map__32575__$1;var path = cljs.core.get.call(null,map__32575__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__32575__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32575__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__32576 = om.core.get_shared.call(null,self__.owner);var map__32576__$1 = ((cljs.core.seq_QMARK_.call(null,map__32576))?cljs.core.apply.call(null,cljs.core.hash_map,map__32576):map__32576);var path_marker_click_fn = cljs.core.get.call(null,map__32576__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32576__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32576__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32576__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
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
});})(node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
});})(node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__32577 = e;var G__32577__$1 = (((G__32577 == null))?null:G__32577.target);var G__32577__$2 = (((G__32577__$1 == null))?null:domina.attr.call(null,G__32577__$1,"data-boundaryline-id"));var G__32577__$3 = (((G__32577__$2 == null))?null:path_marker_click_fn.call(null,G__32577__$2));return G__32577__$3;
});})(node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__32575,map__32575__$1,map,path,markers,leaflet_map,map__32576,map__32576__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986),clustermap.api.geohash_grid_factory.call(null));
});})(map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32382.prototype.om$core$IRender$ = true;
clustermap.components.map.t32382.prototype.om$core$IRender$render$arity$1 = ((function (map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32384){var self__ = this;
var _32384__$1 = this;return self__.meta32383;
});})(map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32384,meta32383__$1){var self__ = this;
var _32384__$1 = this;return (new clustermap.components.map.t32382(self__.colorchooser,self__.initial_bounds,self__.p__32177,self__.owner,self__.data,self__.zoom,self__.map__32380,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.map__32381,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.cursor,self__.threshold_colors,self__.bounds,self__.map__32379,self__.boundaryline_collection,self__.show_points,self__.link_click_fn,self__.filter,self__.geohash_aggs,self__.point_data,self__.boundaryline_agg,meta32383__$1));
});})(map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t32382 = ((function (map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function __GT_t32382(colorchooser__$1,initial_bounds__$1,p__32177__$1,owner__$1,data__$1,zoom__$1,map__32380__$2,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map__32381__$2,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,map__32379__$2,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta32383){return (new clustermap.components.map.t32382(colorchooser__$1,initial_bounds__$1,p__32177__$1,owner__$1,data__$1,zoom__$1,map__32380__$2,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map__32381__$2,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,map__32379__$2,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta32383));
});})(map__32379,map__32379__$1,cursor_data,map__32380,map__32380__$1,cursor,data,point_data,boundaryline_collections,map__32381,map__32381__$1,controls,colorchooser,initial_bounds,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t32382(colorchooser,initial_bounds,p__32177,owner,data,zoom,map__32380__$1,map_options,cursor_data,geotag_aggs,filter_spec,map__32381__$1,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,map__32379__$1,boundaryline_collection,show_points,link_click_fn,filter,geohash_aggs,point_data,boundaryline_agg,null));
});
