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
clustermap.components.map.default_api_key = (function (){var or__3639__auto__ = (function (){var G__32087 = config;var G__32087__$1 = (((G__32087 == null))?null:G__32087.components);var G__32087__$2 = (((G__32087__$1 == null))?null:G__32087__$1.map);var G__32087__$3 = (((G__32087__$2 == null))?null:G__32087__$2.api_key);return G__32087__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__32088){var map__32090 = p__32088;var map__32090__$1 = ((cljs.core.seq_QMARK_.call(null,map__32090))?cljs.core.apply.call(null,cljs.core.hash_map,map__32090):map__32090);var api_key = cljs.core.get.call(null,map__32090__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__32090__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__32090__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__32090__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__32091){
var m = cljs.core.first(arglist__32091);
var all_bounds = cljs.core.rest(arglist__32091);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.render_marker_icon = (function render_marker_icon(p__32092,location_sites){var map__32094 = p__32092;var map__32094__$1 = ((cljs.core.seq_QMARK_.call(null,map__32094))?cljs.core.apply.call(null,cljs.core.hash_map,map__32094):map__32094);var location_spec = map__32094__$1;var marker_render_fn = cljs.core.get.call(null,map__32094__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));if((cljs.core.count.call(null,location_sites) > (1)))
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
} else
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
}
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(item_render_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"location-marker-popup-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__32099(s__32100){return (new cljs.core.LazySeq(null,(function (){var s__32100__$1 = s__32100;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32100__$1);if(temp__4126__auto__)
{var s__32100__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32100__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32100__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32102 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32101 = (0);while(true){
if((i__32101 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__32101);cljs.core.chunk_append.call(null,b__32102,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))));
{
var G__32103 = (i__32101 + (1));
i__32101 = G__32103;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32102),iter__32099.call(null,cljs.core.chunk_rest.call(null,s__32100__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32102),null);
}
} else
{var site = cljs.core.first.call(null,s__32100__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))),iter__32099.call(null,cljs.core.rest.call(null,s__32100__$2)));
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
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__32104){var map__32109 = p__32104;var map__32109__$1 = ((cljs.core.seq_QMARK_.call(null,map__32109))?cljs.core.apply.call(null,cljs.core.hash_map,map__32109):map__32109);var map__32110 = cljs.core.get.call(null,map__32109__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32110__$1 = ((cljs.core.seq_QMARK_.call(null,map__32110))?cljs.core.apply.call(null,cljs.core.hash_map,map__32110):map__32110);var location_spec = map__32110__$1;var item_click_fn = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var temp__4124__auto__ = (function (){var G__32111 = location_sites;var G__32111__$1 = (((G__32111 == null))?null:cljs.core.first.call(null,G__32111));var G__32111__$2 = (((G__32111__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__32111__$1));var G__32111__$3 = (((G__32111__$2 == null))?null:cljs.core.reverse.call(null,G__32111__$2));var G__32111__$4 = (((G__32111__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__32111__$3));return G__32111__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32109,map__32109__$1,map__32110,map__32110__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32109,map__32109__$1,map__32110,map__32110__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);leaflet_marker.on("mouseover",((function (icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32109,map__32109__$1,map__32110,map__32110__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (e){return leaflet_marker.openPopup();
});})(icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32109,map__32109__$1,map__32110,map__32110__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
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
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_32112_32113 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32112_32113,sb__4579__auto__,temp__4124__auto__,map__32109,map__32109__$1,map__32110,map__32110__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_32112_32113,sb__4579__auto__,temp__4124__auto__,map__32109,map__32109__$1,map__32110,map__32110__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32112_32113;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__32114){var map__32120 = p__32114;var map__32120__$1 = ((cljs.core.seq_QMARK_.call(null,map__32120))?cljs.core.apply.call(null,cljs.core.hash_map,map__32120):map__32120);var marker = map__32120__$1;var click_handler_keys = cljs.core.get.call(null,map__32120__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32120__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__32121 = cljs.core.seq.call(null,click_handler_keys);var chunk__32122 = null;var count__32123 = (0);var i__32124 = (0);while(true){
if((i__32124 < count__32123))
{var chk = cljs.core._nth.call(null,chunk__32122,i__32124);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32125 = seq__32121;
var G__32126 = chunk__32122;
var G__32127 = count__32123;
var G__32128 = (i__32124 + (1));
seq__32121 = G__32125;
chunk__32122 = G__32126;
count__32123 = G__32127;
i__32124 = G__32128;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32121);if(temp__4126__auto__)
{var seq__32121__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32121__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32121__$1);{
var G__32129 = cljs.core.chunk_rest.call(null,seq__32121__$1);
var G__32130 = c__4408__auto__;
var G__32131 = cljs.core.count.call(null,c__4408__auto__);
var G__32132 = (0);
seq__32121 = G__32129;
chunk__32122 = G__32130;
count__32123 = G__32131;
i__32124 = G__32132;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__32121__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32133 = cljs.core.next.call(null,seq__32121__$1);
var G__32134 = null;
var G__32135 = (0);
var G__32136 = (0);
seq__32121 = G__32133;
chunk__32122 = G__32134;
count__32123 = G__32135;
i__32124 = G__32136;
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
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__32137,location_sites,p__32138){var map__32142 = p__32137;var map__32142__$1 = ((cljs.core.seq_QMARK_.call(null,map__32142))?cljs.core.apply.call(null,cljs.core.hash_map,map__32142):map__32142);var marker = map__32142__$1;var click_handler_keys = cljs.core.get.call(null,map__32142__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32142__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32142__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__32143 = p__32138;var map__32143__$1 = ((cljs.core.seq_QMARK_.call(null,map__32143))?cljs.core.apply.call(null,cljs.core.hash_map,map__32143):map__32143);var map__32144 = cljs.core.get.call(null,map__32143__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32144__$1 = ((cljs.core.seq_QMARK_.call(null,map__32144))?cljs.core.apply.call(null,cljs.core.hash_map,map__32144):map__32144);var location_spec = map__32144__$1;var item_click_fn = cljs.core.get.call(null,map__32144__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32144__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32144__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,popup,map__32142,map__32142__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32143,map__32143__$1,map__32144,map__32144__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,popup,map__32142,map__32142__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32143,map__32143__$1,map__32144,map__32144__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
leaflet_marker.setIcon(icon);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,item_render_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__32145){var map__32147 = p__32145;var map__32147__$1 = ((cljs.core.seq_QMARK_.call(null,map__32147))?cljs.core.apply.call(null,cljs.core.hash_map,map__32147):map__32147);var marker = map__32147__$1;var click_handler_keys = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
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
,update_marker_keys));var ___$1 = (function (){var seq__32152 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32153 = null;var count__32154 = (0);var i__32155 = (0);while(true){
if((i__32155 < count__32154))
{var k = cljs.core._nth.call(null,chunk__32153,i__32155);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32156 = seq__32152;
var G__32157 = chunk__32153;
var G__32158 = count__32154;
var G__32159 = (i__32155 + (1));
seq__32152 = G__32156;
chunk__32153 = G__32157;
count__32154 = G__32158;
i__32155 = G__32159;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32152);if(temp__4126__auto__)
{var seq__32152__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32152__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32152__$1);{
var G__32160 = cljs.core.chunk_rest.call(null,seq__32152__$1);
var G__32161 = c__4408__auto__;
var G__32162 = cljs.core.count.call(null,c__4408__auto__);
var G__32163 = (0);
seq__32152 = G__32160;
chunk__32153 = G__32161;
count__32154 = G__32162;
i__32155 = G__32163;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32152__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32164 = cljs.core.next.call(null,seq__32152__$1);
var G__32165 = null;
var G__32166 = (0);
var G__32167 = (0);
seq__32152 = G__32164;
chunk__32153 = G__32165;
count__32154 = G__32166;
i__32155 = G__32167;
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
clustermap.components.map.marker_color_class = (function marker_color_class(n){var pred__32171 = cljs.core._EQ_;var expr__32172 = n;if(cljs.core.truth_(pred__32171.call(null,(0),expr__32172)))
{return "marker-cluster-small";
} else
{if(cljs.core.truth_(pred__32171.call(null,(1),expr__32172)))
{return "marker-cluster-medium";
} else
{if(cljs.core.truth_(pred__32171.call(null,(2),expr__32172)))
{return "marker-cluster-large";
} else
{return "marker-cluster-small";
}
}
}
});
clustermap.components.map.render_geotag_icon = (function render_geotag_icon(p__32174,geotag,geotag_agg){var map__32177 = p__32174;var map__32177__$1 = ((cljs.core.seq_QMARK_.call(null,map__32177))?cljs.core.apply.call(null,cljs.core.hash_map,map__32177):map__32177);var geotag_agg_spec = map__32177__$1;var colorchooser_fn = cljs.core.get.call(null,map__32177__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32177__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geotag_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32178 = icon_render_fn.call(null,geotag,geotag_agg);if(cljs.core.map_QMARK_.call(null,attrs32178))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32178)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32178))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geotag_marker_popup_content = (function render_geotag_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))))));
});
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__32179,geotag,geotag_agg){var map__32181 = p__32179;var map__32181__$1 = ((cljs.core.seq_QMARK_.call(null,map__32181))?cljs.core.apply.call(null,cljs.core.hash_map,map__32181):map__32181);var geotag_agg_spec = map__32181__$1;var click_fn = cljs.core.get.call(null,map__32181__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32181__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32181__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32181,map__32181__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32181,map__32181__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__32182,p__32183,geotag,geotag_agg){var map__32186 = p__32182;var map__32186__$1 = ((cljs.core.seq_QMARK_.call(null,map__32186))?cljs.core.apply.call(null,cljs.core.hash_map,map__32186):map__32186);var geotag_agg_spec = map__32186__$1;var click_fn = cljs.core.get.call(null,map__32186__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32186__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32186__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32187 = p__32183;var map__32187__$1 = ((cljs.core.seq_QMARK_.call(null,map__32187))?cljs.core.apply.call(null,cljs.core.hash_map,map__32187):map__32187);var marker = map__32187__$1;var click_handler_key = cljs.core.get.call(null,map__32187__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32187__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_32188 = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var new_click_handler_key_32189 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_32188);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32189);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__32190,points_showing_QMARK_){var map__32196 = p__32190;var map__32196__$1 = ((cljs.core.seq_QMARK_.call(null,map__32196))?cljs.core.apply.call(null,cljs.core.hash_map,map__32196):map__32196);var geotag_agg_spec = map__32196__$1;var geotag_agg_data = cljs.core.get.call(null,map__32196__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__32196__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__32196__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32196__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32196__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32196__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geotag_agg_data):cljs.core.constantly.call(null,(1)));var geotag_agg_spec__$1 = cljs.core.assoc.call(null,geotag_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geotags_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,map__32196,map__32196__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(colorchooser_fn,geotag_agg_spec__$1,map__32196,map__32196__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32196,map__32196__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32196,map__32196__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
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
})())?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32196,map__32196__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32196,map__32196__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32196,map__32196__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32196,map__32196__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32197 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32198 = null;var count__32199 = (0);var i__32200 = (0);while(true){
if((i__32200 < count__32199))
{var k = cljs.core._nth.call(null,chunk__32198,i__32200);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32201 = seq__32197;
var G__32202 = chunk__32198;
var G__32203 = count__32199;
var G__32204 = (i__32200 + (1));
seq__32197 = G__32201;
chunk__32198 = G__32202;
count__32199 = G__32203;
i__32200 = G__32204;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32197);if(temp__4126__auto__)
{var seq__32197__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32197__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32197__$1);{
var G__32205 = cljs.core.chunk_rest.call(null,seq__32197__$1);
var G__32206 = c__4408__auto__;
var G__32207 = cljs.core.count.call(null,c__4408__auto__);
var G__32208 = (0);
seq__32197 = G__32205;
chunk__32198 = G__32206;
count__32199 = G__32207;
i__32200 = G__32208;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32197__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32209 = cljs.core.next.call(null,seq__32197__$1);
var G__32210 = null;
var G__32211 = (0);
var G__32212 = (0);
seq__32197 = G__32209;
chunk__32198 = G__32210;
count__32199 = G__32211;
i__32200 = G__32212;
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
clustermap.components.map.render_geohash_icon = (function render_geohash_icon(p__32213,geohash_agg){var map__32216 = p__32213;var map__32216__$1 = ((cljs.core.seq_QMARK_.call(null,map__32216))?cljs.core.apply.call(null,cljs.core.hash_map,map__32216):map__32216);var geohash_agg_spec = map__32216__$1;var colorchooser_fn = cljs.core.get.call(null,map__32216__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32216__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geohash_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32217 = icon_render_fn.call(null,geohash_agg);if(cljs.core.map_QMARK_.call(null,attrs32217))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32217)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32217))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geohash_marker_popup_content = (function render_geohash_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32219 = content;if(cljs.core.map_QMARK_.call(null,attrs32219))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32219)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32219))+"</div>");
}
})())))));
});
/**
* we get bounds for the points contained in the geohash area, so take the
* center point as the marker point
*/
clustermap.components.map.geohash_center_point = (function geohash_center_point(p__32220){var map__32225 = p__32220;var map__32225__$1 = ((cljs.core.seq_QMARK_.call(null,map__32225))?cljs.core.apply.call(null,cljs.core.hash_map,map__32225):map__32225);var geohash_agg = map__32225__$1;var bounds = cljs.core.get.call(null,map__32225__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var vec__32226 = bounds;var vec__32227 = cljs.core.nth.call(null,vec__32226,(0),null);var south = cljs.core.nth.call(null,vec__32227,(0),null);var west = cljs.core.nth.call(null,vec__32227,(1),null);var vec__32228 = cljs.core.nth.call(null,vec__32226,(1),null);var north = cljs.core.nth.call(null,vec__32228,(0),null);var east = cljs.core.nth.call(null,vec__32228,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((south + north) / (2)),((west + east) / (2))], null);
});
clustermap.components.map.create_geohash_marker = (function create_geohash_marker(leaflet_map,p__32229,geohash_agg){var map__32231 = p__32229;var map__32231__$1 = ((cljs.core.seq_QMARK_.call(null,map__32231))?cljs.core.apply.call(null,cljs.core.hash_map,map__32231):map__32231);var geohash_agg_spec = map__32231__$1;var click_fn = cljs.core.get.call(null,map__32231__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32231__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32231__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32231,map__32231__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32231,map__32231__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geohash_marker = (function update_geohash_marker(leaflet_map,p__32232,p__32233,geohash_agg){var map__32236 = p__32232;var map__32236__$1 = ((cljs.core.seq_QMARK_.call(null,map__32236))?cljs.core.apply.call(null,cljs.core.hash_map,map__32236):map__32236);var geohash_agg_spec = map__32236__$1;var click_fn = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32237 = p__32233;var map__32237__$1 = ((cljs.core.seq_QMARK_.call(null,map__32237))?cljs.core.apply.call(null,cljs.core.hash_map,map__32237):map__32237);var marker = map__32237__$1;var click_handler_key = cljs.core.get.call(null,map__32237__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32237__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var latlong_32238 = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon_32239 = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var new_click_handler_key_32240 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setLatLng(latlong_32238);
leaflet_marker.setIcon(icon_32239);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32240);
return marker;
});
clustermap.components.map.update_geohash_markers = (function update_geohash_markers(leaflet_map,geohash_markers_atom,p__32241,points_showing_QMARK_){var map__32247 = p__32241;var map__32247__$1 = ((cljs.core.seq_QMARK_.call(null,map__32247))?cljs.core.apply.call(null,cljs.core.hash_map,map__32247):map__32247);var geohash_agg_spec = map__32247__$1;var geohash_agg_data = cljs.core.get.call(null,map__32247__$1,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620));var icon_render_fn = cljs.core.get.call(null,map__32247__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32247__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32247__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geohash_agg_data):cljs.core.constantly.call(null,(1)));var geohash_agg_spec__$1 = cljs.core.assoc.call(null,geohash_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geohash_aggs_by_geohash = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,map__32247,map__32247__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (gha){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geohash-grid","geohash-grid",2001750091).cljs$core$IFn$_invoke$arity$1(gha),gha], null);
});})(colorchooser_fn,geohash_agg_spec__$1,map__32247,map__32247__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
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
})())?cljs.core.set.call(null,cljs.core.keys.call(null,geohash_aggs_by_geohash)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32247,map__32247__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32247,map__32247__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32247,map__32247__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32247,map__32247__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32248 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32249 = null;var count__32250 = (0);var i__32251 = (0);while(true){
if((i__32251 < count__32250))
{var k = cljs.core._nth.call(null,chunk__32249,i__32251);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32252 = seq__32248;
var G__32253 = chunk__32249;
var G__32254 = count__32250;
var G__32255 = (i__32251 + (1));
seq__32248 = G__32252;
chunk__32249 = G__32253;
count__32250 = G__32254;
i__32251 = G__32255;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32248);if(temp__4126__auto__)
{var seq__32248__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32248__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32248__$1);{
var G__32256 = cljs.core.chunk_rest.call(null,seq__32248__$1);
var G__32257 = c__4408__auto__;
var G__32258 = cljs.core.count.call(null,c__4408__auto__);
var G__32259 = (0);
seq__32248 = G__32256;
chunk__32249 = G__32257;
count__32250 = G__32258;
i__32251 = G__32259;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32248__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32260 = cljs.core.next.call(null,seq__32248__$1);
var G__32261 = null;
var G__32262 = (0);
var G__32263 = (0);
seq__32248 = G__32260;
chunk__32249 = G__32261;
count__32250 = G__32262;
i__32251 = G__32263;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__32272 = cljs.core.js__GT_clj.call(null,envelope);var map__32272__$1 = ((cljs.core.seq_QMARK_.call(null,map__32272))?cljs.core.apply.call(null,cljs.core.hash_map,map__32272):map__32272);var clj_envelope = map__32272__$1;var vec__32273 = cljs.core.get.call(null,map__32272__$1,"coordinates");var vec__32274 = cljs.core.nth.call(null,vec__32273,(0),null);var vec__32275 = cljs.core.nth.call(null,vec__32274,(0),null);var miny0 = cljs.core.nth.call(null,vec__32275,(0),null);var minx0 = cljs.core.nth.call(null,vec__32275,(1),null);var vec__32276 = cljs.core.nth.call(null,vec__32274,(1),null);var maxy1 = cljs.core.nth.call(null,vec__32276,(0),null);var minx1 = cljs.core.nth.call(null,vec__32276,(1),null);var vec__32277 = cljs.core.nth.call(null,vec__32274,(2),null);var maxy2 = cljs.core.nth.call(null,vec__32277,(0),null);var maxx2 = cljs.core.nth.call(null,vec__32277,(1),null);var vec__32278 = cljs.core.nth.call(null,vec__32274,(3),null);var miny3 = cljs.core.nth.call(null,vec__32278,(0),null);var maxx3 = cljs.core.nth.call(null,vec__32278,(1),null);var vec__32279 = cljs.core.nth.call(null,vec__32274,(4),null);var miny4 = cljs.core.nth.call(null,vec__32279,(0),null);var minx4 = cljs.core.nth.call(null,vec__32279,(1),null);var inner = vec__32274;var coords = vec__32273;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__32280,p__32281){var map__32284 = p__32280;var map__32284__$1 = ((cljs.core.seq_QMARK_.call(null,map__32284))?cljs.core.apply.call(null,cljs.core.hash_map,map__32284):map__32284);var fill_color = cljs.core.get.call(null,map__32284__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__32284__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__32284__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var map__32285 = p__32281;var map__32285__$1 = ((cljs.core.seq_QMARK_.call(null,map__32285))?cljs.core.apply.call(null,cljs.core.hash_map,map__32285):map__32285);var boundaryline_fill_opacity = cljs.core.get.call(null,map__32285__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),0.4);if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
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
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32286,p__32287){var map__32291 = p__32286;var map__32291__$1 = ((cljs.core.seq_QMARK_.call(null,map__32291))?cljs.core.apply.call(null,cljs.core.hash_map,map__32291):map__32291);var path_attrs = map__32291__$1;var selected = cljs.core.get.call(null,map__32291__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__32292 = p__32287;var map__32293 = cljs.core.nth.call(null,vec__32292,(0),null);var map__32293__$1 = ((cljs.core.seq_QMARK_.call(null,map__32293))?cljs.core.apply.call(null,cljs.core.hash_map,map__32293):map__32293);var opts = map__32293__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32293__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32293__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs,opts);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("dblclick",((function (tolerance,bounds,leaflet_path,popup_content,map__32291,map__32291__$1,path_attrs,selected,vec__32292,map__32293,map__32293__$1,opts,path_marker_click_fn,filter_spec){
return (function (e){leaflet_map.fitBounds(leaflet_path.getBounds());
if(cljs.core.truth_(path_marker_click_fn))
{return path_marker_click_fn.call(null,boundaryline_id);
} else
{return null;
}
});})(tolerance,bounds,leaflet_path,popup_content,map__32291,map__32291__$1,path_attrs,selected,vec__32292,map__32293,map__32293__$1,opts,path_marker_click_fn,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32286,var_args){
var p__32287 = null;if (arguments.length > 5) {
  p__32287 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__32286,p__32287);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__32294){
var comm = cljs.core.first(arglist__32294);
arglist__32294 = cljs.core.next(arglist__32294);
var leaflet_map = cljs.core.first(arglist__32294);
arglist__32294 = cljs.core.next(arglist__32294);
var boundaryline_id = cljs.core.first(arglist__32294);
arglist__32294 = cljs.core.next(arglist__32294);
var js_boundaryline = cljs.core.first(arglist__32294);
arglist__32294 = cljs.core.next(arglist__32294);
var p__32286 = cljs.core.first(arglist__32294);
var p__32287 = cljs.core.rest(arglist__32294);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__32286,p__32287);
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
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32295){var vec__32298 = p__32295;var map__32299 = cljs.core.nth.call(null,vec__32298,(0),null);var map__32299__$1 = ((cljs.core.seq_QMARK_.call(null,map__32299))?cljs.core.apply.call(null,cljs.core.hash_map,map__32299):map__32299);var opts = map__32299__$1;var filter_spec = cljs.core.get.call(null,map__32299__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__32295 = null;if (arguments.length > 6) {
  p__32295 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32295);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__32300){
var comm = cljs.core.first(arglist__32300);
arglist__32300 = cljs.core.next(arglist__32300);
var leaflet_map = cljs.core.first(arglist__32300);
arglist__32300 = cljs.core.next(arglist__32300);
var boundaryline_id = cljs.core.first(arglist__32300);
arglist__32300 = cljs.core.next(arglist__32300);
var tolerance = cljs.core.first(arglist__32300);
arglist__32300 = cljs.core.next(arglist__32300);
var js_boundaryline = cljs.core.first(arglist__32300);
arglist__32300 = cljs.core.next(arglist__32300);
var path_attrs = cljs.core.first(arglist__32300);
var p__32295 = cljs.core.rest(arglist__32300);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32295);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32301){var vec__32304 = p__32301;var map__32305 = cljs.core.nth.call(null,vec__32304,(0),null);var map__32305__$1 = ((cljs.core.seq_QMARK_.call(null,map__32305))?cljs.core.apply.call(null,cljs.core.hash_map,map__32305):map__32305);var opts = map__32305__$1;var filter_spec = cljs.core.get.call(null,map__32305__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__32301 = null;if (arguments.length > 6) {
  p__32301 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32301);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__32306){
var comm = cljs.core.first(arglist__32306);
arglist__32306 = cljs.core.next(arglist__32306);
var leaflet_map = cljs.core.first(arglist__32306);
arglist__32306 = cljs.core.next(arglist__32306);
var boundaryline_id = cljs.core.first(arglist__32306);
arglist__32306 = cljs.core.next(arglist__32306);
var old_path = cljs.core.first(arglist__32306);
arglist__32306 = cljs.core.next(arglist__32306);
var js_boundaryline = cljs.core.first(arglist__32306);
arglist__32306 = cljs.core.next(arglist__32306);
var path_attrs = cljs.core.first(arglist__32306);
var p__32301 = cljs.core.rest(arglist__32306);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32301);
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
var update_path__delegate = function (comm,leaflet_map,p__32307,tolerance,js_boundaryline,path_attrs,p__32308){var map__32312 = p__32307;var map__32312__$1 = ((cljs.core.seq_QMARK_.call(null,map__32312))?cljs.core.apply.call(null,cljs.core.hash_map,map__32312):map__32312);var path = map__32312__$1;var boundaryline_id = cljs.core.get.call(null,map__32312__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__32313 = p__32308;var map__32314 = cljs.core.nth.call(null,vec__32313,(0),null);var map__32314__$1 = ((cljs.core.seq_QMARK_.call(null,map__32314))?cljs.core.apply.call(null,cljs.core.hash_map,map__32314):map__32314);var opts = map__32314__$1;var filter_spec = cljs.core.get.call(null,map__32314__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs,opts);
return path;
}
};
var update_path = function (comm,leaflet_map,p__32307,tolerance,js_boundaryline,path_attrs,var_args){
var p__32308 = null;if (arguments.length > 6) {
  p__32308 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__32307,tolerance,js_boundaryline,path_attrs,p__32308);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__32315){
var comm = cljs.core.first(arglist__32315);
arglist__32315 = cljs.core.next(arglist__32315);
var leaflet_map = cljs.core.first(arglist__32315);
arglist__32315 = cljs.core.next(arglist__32315);
var p__32307 = cljs.core.first(arglist__32315);
arglist__32315 = cljs.core.next(arglist__32315);
var tolerance = cljs.core.first(arglist__32315);
arglist__32315 = cljs.core.next(arglist__32315);
var js_boundaryline = cljs.core.first(arglist__32315);
arglist__32315 = cljs.core.next(arglist__32315);
var path_attrs = cljs.core.first(arglist__32315);
var p__32308 = cljs.core.rest(arglist__32315);
return update_path__delegate(comm,leaflet_map,p__32307,tolerance,js_boundaryline,path_attrs,p__32308);
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
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32316){var vec__32332 = p__32316;var map__32333 = cljs.core.nth.call(null,vec__32332,(0),null);var map__32333__$1 = ((cljs.core.seq_QMARK_.call(null,map__32333))?cljs.core.apply.call(null,cljs.core.hash_map,map__32333):map__32333);var opts = map__32333__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32333__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32333__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__32334 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__32334,(0),null);var notifychan = cljs.core.nth.call(null,vec__32334,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32334,tolerance_paths,notifychan,vec__32332,map__32333,map__32333__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32335){var vec__32336 = p__32335;var k = cljs.core.nth.call(null,vec__32336,(0),null);var tolerance = cljs.core.nth.call(null,vec__32336,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32336,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32334,tolerance_paths,notifychan,vec__32332,map__32333,map__32333__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32334,tolerance_paths,notifychan,vec__32332,map__32333,map__32333__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32337 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32337,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32337,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32334,tolerance_paths,notifychan,vec__32332,map__32333,map__32333__$1,opts,path_marker_click_fn,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32334,tolerance_paths,notifychan,created_paths,vec__32332,map__32333,map__32333__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32338){var vec__32339 = p__32338;var k = cljs.core.nth.call(null,vec__32339,(0),null);var tolerance = cljs.core.nth.call(null,vec__32339,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32339,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32334,tolerance_paths,notifychan,created_paths,vec__32332,map__32333,map__32333__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32334,tolerance_paths,notifychan,created_paths,vec__32332,map__32333,map__32333__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32340 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32340,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32340,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32334,tolerance_paths,notifychan,created_paths,vec__32332,map__32333,map__32333__$1,opts,path_marker_click_fn,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__32341 = cljs.core.seq.call(null,delete_path_keys);var chunk__32342 = null;var count__32343 = (0);var i__32344 = (0);while(true){
if((i__32344 < count__32343))
{var k = cljs.core._nth.call(null,chunk__32342,i__32344);var temp__4124__auto___32347 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32347))
{var path_32348 = temp__4124__auto___32347;clustermap.components.map.delete_path.call(null,leaflet_map,path_32348);
} else
{}
{
var G__32349 = seq__32341;
var G__32350 = chunk__32342;
var G__32351 = count__32343;
var G__32352 = (i__32344 + (1));
seq__32341 = G__32349;
chunk__32342 = G__32350;
count__32343 = G__32351;
i__32344 = G__32352;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32341);if(temp__4126__auto__)
{var seq__32341__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32341__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32341__$1);{
var G__32353 = cljs.core.chunk_rest.call(null,seq__32341__$1);
var G__32354 = c__4408__auto__;
var G__32355 = cljs.core.count.call(null,c__4408__auto__);
var G__32356 = (0);
seq__32341 = G__32353;
chunk__32342 = G__32354;
count__32343 = G__32355;
i__32344 = G__32356;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32341__$1);var temp__4124__auto___32357 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32357))
{var path_32358 = temp__4124__auto___32357;clustermap.components.map.delete_path.call(null,leaflet_map,path_32358);
} else
{}
{
var G__32359 = cljs.core.next.call(null,seq__32341__$1);
var G__32360 = null;
var G__32361 = (0);
var G__32362 = (0);
seq__32341 = G__32359;
chunk__32342 = G__32360;
count__32343 = G__32361;
i__32344 = G__32362;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32334,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32332,map__32333,map__32333__$1,opts,path_marker_click_fn,filter_spec){
return (function (m,p__32345){var map__32346 = p__32345;var map__32346__$1 = ((cljs.core.seq_QMARK_.call(null,map__32346))?cljs.core.apply.call(null,cljs.core.hash_map,map__32346):map__32346);var path = map__32346__$1;var id = cljs.core.get.call(null,map__32346__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32334,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32332,map__32333,map__32333__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__32316 = null;if (arguments.length > 7) {
  p__32316 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32316);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__32363){
var comm = cljs.core.first(arglist__32363);
arglist__32363 = cljs.core.next(arglist__32363);
var fetch_boundarylines_fn = cljs.core.first(arglist__32363);
arglist__32363 = cljs.core.next(arglist__32363);
var leaflet_map = cljs.core.first(arglist__32363);
arglist__32363 = cljs.core.next(arglist__32363);
var paths_atom = cljs.core.first(arglist__32363);
arglist__32363 = cljs.core.next(arglist__32363);
var path_selections_atom = cljs.core.first(arglist__32363);
arglist__32363 = cljs.core.next(arglist__32363);
var new_path_highlights = cljs.core.first(arglist__32363);
arglist__32363 = cljs.core.next(arglist__32363);
var new_selection_paths = cljs.core.first(arglist__32363);
var p__32316 = cljs.core.rest(arglist__32363);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32316);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__32366){var vec__32367 = p__32366;var tz = cljs.core.nth.call(null,vec__32367,(0),null);var collection = cljs.core.nth.call(null,vec__32367,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__32368,owner){var map__32570 = p__32368;var map__32570__$1 = ((cljs.core.seq_QMARK_.call(null,map__32570))?cljs.core.apply.call(null,cljs.core.hash_map,map__32570):map__32570);var cursor_data = map__32570__$1;var map__32571 = cljs.core.get.call(null,map__32570__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32571__$1 = ((cljs.core.seq_QMARK_.call(null,map__32571))?cljs.core.apply.call(null,cljs.core.hash_map,map__32571):map__32571);var cursor = map__32571__$1;var data = cljs.core.get.call(null,map__32571__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__32571__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__32571__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32572 = cljs.core.get.call(null,map__32571__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32572__$1 = ((cljs.core.seq_QMARK_.call(null,map__32572))?cljs.core.apply.call(null,cljs.core.hash_map,map__32572):map__32572);var controls = map__32572__$1;var colorchooser = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var location = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"location","location",1815599388));var zoom = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var geohash_aggs = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var boundaryline_agg = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__32570__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__32570__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t32573 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32573 = (function (colorchooser,initial_bounds,location,owner,data,zoom,map__32572,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,p__32368,link_click_fn,filter,geohash_aggs,map__32570,point_data,boundaryline_agg,map__32571,meta32574){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.location = location;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.map__32572 = map__32572;
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
this.p__32368 = p__32368;
this.link_click_fn = link_click_fn;
this.filter = filter;
this.geohash_aggs = geohash_aggs;
this.map__32570 = map__32570;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.map__32571 = map__32571;
this.meta32574 = meta32574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32573.cljs$lang$type = true;
clustermap.components.map.t32573.cljs$lang$ctorStr = "clustermap.components.map/t32573";
clustermap.components.map.t32573.cljs$lang$ctorPrWriter = ((function (map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t32573");
});})(map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32573.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t32573.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__32576 = om.core.get_state.call(null,self__.owner);var map__32576__$1 = ((cljs.core.seq_QMARK_.call(null,map__32576))?cljs.core.apply.call(null,cljs.core.hash_map,map__32576):map__32576);var map__32577 = cljs.core.get.call(null,map__32576__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32577__$1 = ((cljs.core.seq_QMARK_.call(null,map__32577))?cljs.core.apply.call(null,cljs.core.hash_map,map__32577):map__32577);var path_selections = cljs.core.get.call(null,map__32577__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32577__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32577__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32577__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32573.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32573.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$,p__32578,p__32579){var self__ = this;
var map__32580 = p__32578;var map__32580__$1 = ((cljs.core.seq_QMARK_.call(null,map__32580))?cljs.core.apply.call(null,cljs.core.hash_map,map__32580):map__32580);var next_cursor_data = map__32580__$1;var map__32581 = cljs.core.get.call(null,map__32580__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32581__$1 = ((cljs.core.seq_QMARK_.call(null,map__32581))?cljs.core.apply.call(null,cljs.core.hash_map,map__32581):map__32581);var next_cursor = map__32581__$1;var next_data = cljs.core.get.call(null,map__32581__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__32581__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__32581__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32582 = cljs.core.get.call(null,map__32581__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32582__$1 = ((cljs.core.seq_QMARK_.call(null,map__32582))?cljs.core.apply.call(null,cljs.core.hash_map,map__32582):map__32582);var next_colorchooser = cljs.core.get.call(null,map__32582__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__32582__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_boundaryline_fill_opacity = cljs.core.get.call(null,map__32582__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575));var next_zoom = cljs.core.get.call(null,map__32582__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__32582__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__32582__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__32582__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_geohash_aggs = cljs.core.get.call(null,map__32582__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var next_boundaryline_agg = cljs.core.get.call(null,map__32582__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_location = cljs.core.get.call(null,map__32582__$1,new cljs.core.Keyword(null,"location","location",1815599388));var next_show_points = cljs.core.get.call(null,map__32582__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__32580__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__32580__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32583 = p__32579;var map__32583__$1 = ((cljs.core.seq_QMARK_.call(null,map__32583))?cljs.core.apply.call(null,cljs.core.hash_map,map__32583):map__32583);var map__32584 = cljs.core.get.call(null,map__32583__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32584__$1 = ((cljs.core.seq_QMARK_.call(null,map__32584))?cljs.core.apply.call(null,cljs.core.hash_map,map__32584):map__32584);var next_markers = cljs.core.get.call(null,map__32584__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__32584__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_geohash_markers = cljs.core.get.call(null,map__32584__$1,new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705));var next_paths = cljs.core.get.call(null,map__32584__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__32584__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__32583__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__32583__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__32583__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__32583__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__32583__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var fetch_geohash_agg_data_fn = cljs.core.get.call(null,map__32583__$1,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986));var this$__$1 = this;var map__32585 = om.core.get_shared.call(null,self__.owner);var map__32585__$1 = ((cljs.core.seq_QMARK_.call(null,map__32585))?cljs.core.apply.call(null,cljs.core.hash_map,map__32585):map__32585);var path_marker_click_fn = cljs.core.get.call(null,map__32585__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32585__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32585__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32585__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__32586 = om.core.get_state.call(null,self__.owner);var map__32586__$1 = ((cljs.core.seq_QMARK_.call(null,map__32586))?cljs.core.apply.call(null,cljs.core.hash_map,map__32586):map__32586);var map__32587 = cljs.core.get.call(null,map__32586__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32587__$1 = ((cljs.core.seq_QMARK_.call(null,map__32587))?cljs.core.apply.call(null,cljs.core.hash_map,map__32587):map__32587);var path_selections = cljs.core.get.call(null,map__32587__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32587__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32587__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__32587__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__32587__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__32586__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__32586__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var zoom_changed = cljs.core.not_EQ_.call(null,next_zoom,self__.zoom);if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
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
{var c__9125__auto___32771 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32771,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32771,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32610){var state_val_32611 = (state_32610[(1)]);if((state_val_32611 === (5)))
{var inst_32608 = (state_32610[(2)]);var state_32610__$1 = state_32610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32610__$1,inst_32608);
} else
{if((state_val_32611 === (4)))
{var state_32610__$1 = state_32610;var statearr_32612_32772 = state_32610__$1;(statearr_32612_32772[(2)] = null);
(statearr_32612_32772[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32611 === (3)))
{var inst_32600 = (state_32610[(7)]);var inst_32602 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32603 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_32604 = (new cljs.core.PersistentVector(null,1,(5),inst_32602,inst_32603,null));var inst_32605 = om.core.update_BANG_.call(null,self__.cursor,inst_32604,inst_32600);var state_32610__$1 = state_32610;var statearr_32613_32773 = state_32610__$1;(statearr_32613_32773[(2)] = inst_32605);
(statearr_32613_32773[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32611 === (2)))
{var inst_32600 = (state_32610[(7)]);var inst_32600__$1 = (state_32610[(2)]);var state_32610__$1 = (function (){var statearr_32614 = state_32610;(statearr_32614[(7)] = inst_32600__$1);
return statearr_32614;
})();if(cljs.core.truth_(inst_32600__$1))
{var statearr_32615_32774 = state_32610__$1;(statearr_32615_32774[(1)] = (3));
} else
{var statearr_32616_32775 = state_32610__$1;(statearr_32616_32775[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32611 === (1)))
{var inst_32588 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32589 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32590 = leaflet_map.getZoom();var inst_32591 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_32590);var inst_32592 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32593 = om.core._value.call(null,next_filter);var inst_32594 = leaflet_map.getBounds();var inst_32595 = clustermap.components.map.bounds_array.call(null,inst_32594);var inst_32596 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32597 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32598 = fetch_aggregation_data_fn.call(null,inst_32588,inst_32589,inst_32591,inst_32592,inst_32593,inst_32595,inst_32596,inst_32597);var state_32610__$1 = state_32610;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32610__$1,(2),inst_32598);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32771,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32771,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32620 = [null,null,null,null,null,null,null,null];(statearr_32620[(0)] = state_machine__9111__auto__);
(statearr_32620[(1)] = (1));
return statearr_32620;
});
var state_machine__9111__auto____1 = (function (state_32610){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32610);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32621){if((e32621 instanceof Object))
{var ex__9114__auto__ = e32621;var statearr_32622_32776 = state_32610;(statearr_32622_32776[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32610);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32621;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32777 = state_32610;
state_32610 = G__32777;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32610){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32771,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32623 = f__9126__auto__.call(null);(statearr_32623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32771);
return statearr_32623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32771,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
var c__9125__auto___32778 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32778,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32778,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32644){var state_val_32645 = (state_32644[(1)]);if((state_val_32645 === (5)))
{var inst_32642 = (state_32644[(2)]);var state_32644__$1 = state_32644;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32644__$1,inst_32642);
} else
{if((state_val_32645 === (4)))
{var state_32644__$1 = state_32644;var statearr_32646_32779 = state_32644__$1;(statearr_32646_32779[(2)] = null);
(statearr_32646_32779[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32645 === (3)))
{var inst_32634 = (state_32644[(7)]);var inst_32636 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32637 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_32638 = (new cljs.core.PersistentVector(null,1,(5),inst_32636,inst_32637,null));var inst_32639 = om.core.update_BANG_.call(null,self__.cursor,inst_32638,inst_32634);var state_32644__$1 = state_32644;var statearr_32647_32780 = state_32644__$1;(statearr_32647_32780[(2)] = inst_32639);
(statearr_32647_32780[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32645 === (2)))
{var inst_32634 = (state_32644[(7)]);var inst_32634__$1 = (state_32644[(2)]);var state_32644__$1 = (function (){var statearr_32648 = state_32644;(statearr_32648[(7)] = inst_32634__$1);
return statearr_32648;
})();if(cljs.core.truth_(inst_32634__$1))
{var statearr_32649_32781 = state_32644__$1;(statearr_32649_32781[(1)] = (3));
} else
{var statearr_32650_32782 = state_32644__$1;(statearr_32650_32782[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32645 === (1)))
{var inst_32624 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32625 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32626 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32627 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover","!total_funding"];var inst_32628 = (new cljs.core.PersistentVector(null,6,(5),inst_32626,inst_32627,null));var inst_32629 = om.core._value.call(null,next_filter);var inst_32630 = leaflet_map.getBounds();var inst_32631 = clustermap.components.map.bounds_array.call(null,inst_32630);var inst_32632 = fetch_point_data_fn.call(null,inst_32624,inst_32625,"!postcode",inst_32628,(1000),inst_32629,inst_32631);var state_32644__$1 = state_32644;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32644__$1,(2),inst_32632);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32778,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32778,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32654 = [null,null,null,null,null,null,null,null];(statearr_32654[(0)] = state_machine__9111__auto__);
(statearr_32654[(1)] = (1));
return statearr_32654;
});
var state_machine__9111__auto____1 = (function (state_32644){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32644);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32655){if((e32655 instanceof Object))
{var ex__9114__auto__ = e32655;var statearr_32656_32783 = state_32644;(statearr_32656_32783[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32644);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32655;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32784 = state_32644;
state_32644 = G__32784;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32644){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32778,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32657 = f__9126__auto__.call(null);(statearr_32657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32778);
return statearr_32657;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32778,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___32785 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32785,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32785,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32671){var state_val_32672 = (state_32671[(1)]);if((state_val_32672 === (5)))
{var inst_32669 = (state_32671[(2)]);var state_32671__$1 = state_32671;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32671__$1,inst_32669);
} else
{if((state_val_32672 === (4)))
{var state_32671__$1 = state_32671;var statearr_32673_32786 = state_32671__$1;(statearr_32673_32786[(2)] = null);
(statearr_32673_32786[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32672 === (3)))
{var inst_32661 = (state_32671[(7)]);var inst_32663 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32664 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_32665 = (new cljs.core.PersistentVector(null,3,(5),inst_32663,inst_32664,null));var inst_32666 = om.core.update_BANG_.call(null,self__.cursor,inst_32665,inst_32661);var state_32671__$1 = state_32671;var statearr_32674_32787 = state_32671__$1;(statearr_32674_32787[(2)] = inst_32666);
(statearr_32674_32787[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32672 === (2)))
{var inst_32661 = (state_32671[(7)]);var inst_32661__$1 = (state_32671[(2)]);var state_32671__$1 = (function (){var statearr_32675 = state_32671;(statearr_32675[(7)] = inst_32661__$1);
return statearr_32675;
})();if(cljs.core.truth_(inst_32661__$1))
{var statearr_32676_32788 = state_32671__$1;(statearr_32676_32788[(1)] = (3));
} else
{var statearr_32677_32789 = state_32671__$1;(statearr_32677_32789[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32672 === (1)))
{var inst_32658 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32659 = fetch_geotag_data_fn.call(null,inst_32658);var state_32671__$1 = state_32671;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32671__$1,(2),inst_32659);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32785,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32785,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32681 = [null,null,null,null,null,null,null,null];(statearr_32681[(0)] = state_machine__9111__auto__);
(statearr_32681[(1)] = (1));
return statearr_32681;
});
var state_machine__9111__auto____1 = (function (state_32671){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32671);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32682){if((e32682 instanceof Object))
{var ex__9114__auto__ = e32682;var statearr_32683_32790 = state_32671;(statearr_32683_32790[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32671);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32682;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32791 = state_32671;
state_32671 = G__32791;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32671){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32785,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32684 = f__9126__auto__.call(null);(statearr_32684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32785);
return statearr_32684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32785,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___32792 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32792,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32792,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32703){var state_val_32704 = (state_32703[(1)]);if((state_val_32704 === (5)))
{var inst_32701 = (state_32703[(2)]);var state_32703__$1 = state_32703;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32703__$1,inst_32701);
} else
{if((state_val_32704 === (4)))
{var state_32703__$1 = state_32703;var statearr_32705_32793 = state_32703__$1;(statearr_32705_32793[(2)] = null);
(statearr_32705_32793[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32704 === (3)))
{var inst_32692 = (state_32703[(7)]);var inst_32694 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32695 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_32696 = (new cljs.core.PersistentVector(null,3,(5),inst_32694,inst_32695,null));var inst_32697 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32692);var inst_32698 = om.core.update_BANG_.call(null,self__.cursor,inst_32696,inst_32697);var state_32703__$1 = state_32703;var statearr_32706_32794 = state_32703__$1;(statearr_32706_32794[(2)] = inst_32698);
(statearr_32706_32794[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32704 === (2)))
{var inst_32692 = (state_32703[(7)]);var inst_32692__$1 = (state_32703[(2)]);var state_32703__$1 = (function (){var statearr_32707 = state_32703;(statearr_32707[(7)] = inst_32692__$1);
return statearr_32707;
})();if(cljs.core.truth_(inst_32692__$1))
{var statearr_32708_32795 = state_32703__$1;(statearr_32708_32795[(1)] = (3));
} else
{var statearr_32709_32796 = state_32703__$1;(statearr_32709_32796[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32704 === (1)))
{var inst_32685 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32686 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32687 = [next_filter];var inst_32688 = cljs.core.PersistentHashMap.fromArrays(inst_32686,inst_32687);var inst_32689 = cljs.core.merge.call(null,inst_32685,inst_32688);var inst_32690 = fetch_geotag_agg_data_fn.call(null,inst_32689);var state_32703__$1 = state_32703;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32703__$1,(2),inst_32690);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32792,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32792,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32713 = [null,null,null,null,null,null,null,null];(statearr_32713[(0)] = state_machine__9111__auto__);
(statearr_32713[(1)] = (1));
return statearr_32713;
});
var state_machine__9111__auto____1 = (function (state_32703){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32703);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32714){if((e32714 instanceof Object))
{var ex__9114__auto__ = e32714;var statearr_32715_32797 = state_32703;(statearr_32715_32797[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32703);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32714;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32798 = state_32703;
state_32703 = G__32798;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32703){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32792,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32716 = f__9126__auto__.call(null);(statearr_32716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32792);
return statearr_32716;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32792,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___32799 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32799,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32799,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32737){var state_val_32738 = (state_32737[(1)]);if((state_val_32738 === (5)))
{var inst_32735 = (state_32737[(2)]);var state_32737__$1 = state_32737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32737__$1,inst_32735);
} else
{if((state_val_32738 === (4)))
{var state_32737__$1 = state_32737;var statearr_32739_32800 = state_32737__$1;(statearr_32739_32800[(2)] = null);
(statearr_32739_32800[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32738 === (3)))
{var inst_32726 = (state_32737[(7)]);var inst_32728 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32729 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620)];var inst_32730 = (new cljs.core.PersistentVector(null,3,(5),inst_32728,inst_32729,null));var inst_32731 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32726);var inst_32732 = om.core.update_BANG_.call(null,self__.cursor,inst_32730,inst_32731);var state_32737__$1 = state_32737;var statearr_32740_32801 = state_32737__$1;(statearr_32740_32801[(2)] = inst_32732);
(statearr_32740_32801[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32738 === (2)))
{var inst_32726 = (state_32737[(7)]);var inst_32726__$1 = (state_32737[(2)]);var state_32737__$1 = (function (){var statearr_32741 = state_32737;(statearr_32741[(7)] = inst_32726__$1);
return statearr_32741;
})();if(cljs.core.truth_(inst_32726__$1))
{var statearr_32742_32802 = state_32737__$1;(statearr_32742_32802[(1)] = (3));
} else
{var statearr_32743_32803 = state_32737__$1;(statearr_32743_32803[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32738 === (1)))
{var inst_32717 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32718 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"precision","precision",-1175707478)];var inst_32719 = new cljs.core.Keyword(null,"precision-fn","precision-fn",1742300693).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32720 = inst_32719.call(null,next_zoom);var inst_32721 = [next_filter,next_bounds,inst_32720];var inst_32722 = cljs.core.PersistentHashMap.fromArrays(inst_32718,inst_32721);var inst_32723 = cljs.core.merge.call(null,inst_32717,inst_32722);var inst_32724 = fetch_geohash_agg_data_fn.call(null,inst_32723);var state_32737__$1 = state_32737;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32737__$1,(2),inst_32724);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32799,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32799,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32747 = [null,null,null,null,null,null,null,null];(statearr_32747[(0)] = state_machine__9111__auto__);
(statearr_32747[(1)] = (1));
return statearr_32747;
});
var state_machine__9111__auto____1 = (function (state_32737){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32737);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32748){if((e32748 instanceof Object))
{var ex__9114__auto__ = e32748;var statearr_32749_32804 = state_32737;(statearr_32749_32804[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32737);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32748;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32805 = state_32737;
state_32737 = G__32805;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32737){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32799,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32750 = f__9126__auto__.call(null);(statearr_32750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32799);
return statearr_32750;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32799,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var vec__32751_32806 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_32807 = cljs.core.nth.call(null,vec__32751_32806,(0),null);var selection_path_colours_32808 = cljs.core.nth.call(null,vec__32751_32806,(1),null);var update_paths_invocation_32809 = ((function (vec__32751_32806,new_threshold_colors_32807,selection_path_colours_32808,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_32808,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696),path_marker_click_fn,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),next_boundaryline_fill_opacity], null));
});})(vec__32751_32806,new_threshold_colors_32807,selection_path_colours_32808,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_32807,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_32807);
} else
{}
var temp__4126__auto___32810 = update_paths_invocation_32809.call(null);if(cljs.core.truth_(temp__4126__auto___32810))
{var notify_chan_32811 = temp__4126__auto___32810;var c__9125__auto___32812 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32812,notify_chan_32811,temp__4126__auto___32810,vec__32751_32806,new_threshold_colors_32807,selection_path_colours_32808,update_paths_invocation_32809,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32812,notify_chan_32811,temp__4126__auto___32810,vec__32751_32806,new_threshold_colors_32807,selection_path_colours_32808,update_paths_invocation_32809,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32756){var state_val_32757 = (state_32756[(1)]);if((state_val_32757 === (2)))
{var inst_32753 = (state_32756[(2)]);var inst_32754 = update_paths_invocation_32809.call(null);var state_32756__$1 = (function (){var statearr_32758 = state_32756;(statearr_32758[(7)] = inst_32753);
return statearr_32758;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32756__$1,inst_32754);
} else
{if((state_val_32757 === (1)))
{var state_32756__$1 = state_32756;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32756__$1,(2),notify_chan_32811);
} else
{return null;
}
}
});})(c__9125__auto___32812,notify_chan_32811,temp__4126__auto___32810,vec__32751_32806,new_threshold_colors_32807,selection_path_colours_32808,update_paths_invocation_32809,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32812,notify_chan_32811,temp__4126__auto___32810,vec__32751_32806,new_threshold_colors_32807,selection_path_colours_32808,update_paths_invocation_32809,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32762 = [null,null,null,null,null,null,null,null];(statearr_32762[(0)] = state_machine__9111__auto__);
(statearr_32762[(1)] = (1));
return statearr_32762;
});
var state_machine__9111__auto____1 = (function (state_32756){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32756);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32763){if((e32763 instanceof Object))
{var ex__9114__auto__ = e32763;var statearr_32764_32813 = state_32756;(statearr_32764_32813[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32756);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32763;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32814 = state_32756;
state_32756 = G__32814;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32756){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32812,notify_chan_32811,temp__4126__auto___32810,vec__32751_32806,new_threshold_colors_32807,selection_path_colours_32808,update_paths_invocation_32809,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32765 = f__9126__auto__.call(null);(statearr_32765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32812);
return statearr_32765;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32812,notify_chan_32811,temp__4126__auto___32810,vec__32751_32806,new_threshold_colors_32807,selection_path_colours_32808,update_paths_invocation_32809,map__32585,map__32585__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32586,map__32586__$1,map__32587,map__32587__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32580,map__32580__$1,next_cursor_data,map__32581,map__32581__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32582,map__32582__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32583,map__32583__$1,map__32584,map__32584__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
});})(map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32573.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32573.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__32766 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__32766__$1 = ((cljs.core.seq_QMARK_.call(null,map__32766))?cljs.core.apply.call(null,cljs.core.hash_map,map__32766):map__32766);var map = map__32766__$1;var path = cljs.core.get.call(null,map__32766__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__32766__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32766__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__32767 = om.core.get_shared.call(null,self__.owner);var map__32767__$1 = ((cljs.core.seq_QMARK_.call(null,map__32767))?cljs.core.apply.call(null,cljs.core.hash_map,map__32767):map__32767);var path_marker_click_fn = cljs.core.get.call(null,map__32767__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32767__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32767__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32767__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
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
});})(node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
});})(node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__32768 = e;var G__32768__$1 = (((G__32768 == null))?null:G__32768.target);var G__32768__$2 = (((G__32768__$1 == null))?null:domina.attr.call(null,G__32768__$1,"data-boundaryline-id"));var G__32768__$3 = (((G__32768__$2 == null))?null:path_marker_click_fn.call(null,G__32768__$2));return G__32768__$3;
});})(node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__32766,map__32766__$1,map,path,markers,leaflet_map,map__32767,map__32767__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986),clustermap.api.geohash_grid_factory.call(null));
});})(map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32573.prototype.om$core$IRender$ = true;
clustermap.components.map.t32573.prototype.om$core$IRender$render$arity$1 = ((function (map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32575){var self__ = this;
var _32575__$1 = this;return self__.meta32574;
});})(map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32575,meta32574__$1){var self__ = this;
var _32575__$1 = this;return (new clustermap.components.map.t32573(self__.colorchooser,self__.initial_bounds,self__.location,self__.owner,self__.data,self__.zoom,self__.map__32572,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.show_points,self__.p__32368,self__.link_click_fn,self__.filter,self__.geohash_aggs,self__.map__32570,self__.point_data,self__.boundaryline_agg,self__.map__32571,meta32574__$1));
});})(map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t32573 = ((function (map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function __GT_t32573(colorchooser__$1,initial_bounds__$1,location__$1,owner__$1,data__$1,zoom__$1,map__32572__$2,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,p__32368__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,map__32570__$2,point_data__$1,boundaryline_agg__$1,map__32571__$2,meta32574){return (new clustermap.components.map.t32573(colorchooser__$1,initial_bounds__$1,location__$1,owner__$1,data__$1,zoom__$1,map__32572__$2,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,p__32368__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,map__32570__$2,point_data__$1,boundaryline_agg__$1,map__32571__$2,meta32574));
});})(map__32570,map__32570__$1,cursor_data,map__32571,map__32571__$1,cursor,data,point_data,boundaryline_collections,map__32572,map__32572__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t32573(colorchooser,initial_bounds,location,owner,data,zoom,map__32572__$1,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,p__32368,link_click_fn,filter,geohash_aggs,map__32570__$1,point_data,boundaryline_agg,map__32571__$1,null));
});
