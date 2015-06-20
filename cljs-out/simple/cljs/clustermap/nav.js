// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('secretary.core');
goog.require('domina');
goog.require('jayq.core');
goog.require('domina');
goog.require('cljs.core.async');
goog.require('clustermap.filters');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('secretary.core');
goog.require('domina.xpath');
goog.require('clustermap.formats.url');
goog.require('clustermap.formats.url');
goog.require('clustermap.filters');
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
/**
* do the DOM manip to change the view
*/
clustermap.nav.change_view = (function change_view(view){var view__$1 = (function (){var or__3639__auto__ = cljs.core.not_empty.call(null,view);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "main";
}
})();var view_class = (".view-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view__$1));var hide_sections = domina.css.sel.call(null,".view");var show_sections = domina.css.sel.call(null,view_class);domina.add_class_BANG_.call(null,hide_sections,"hide");
domina.remove_class_BANG_.call(null,show_sections,"hide");
return domina.events.dispatch_BANG_.call(null,"clustermap-change-view",cljs.core.PersistentArrayMap.EMPTY);
});
clustermap.nav.set_route = (function set_route(history,view){var token = history.getToken();var new_token = (cljs.core.truth_(view)?clustermap.formats.url.change_token_path.call(null,token,("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,view)))):clustermap.formats.url.change_token_path.call(null,token,(""))
);return history.setToken(new_token);
});
clustermap.nav.set_view = (function set_view(app_state,path,view){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-view",view], null)));
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc_in,path,view);
return clustermap.nav.change_view.call(null,view);
});
clustermap.nav.send_filter_rqs = (function send_filter_rqs(filter_rq,query_params){console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ROUTE-PARAMS",query_params], null))));
var seq__29258 = cljs.core.seq.call(null,query_params);var chunk__29259 = null;var count__29260 = (0);var i__29261 = (0);while(true){
if((i__29261 < count__29260))
{var vec__29262 = cljs.core._nth.call(null,chunk__29259,i__29261);var filter_id = cljs.core.nth.call(null,vec__29262,(0),null);var filter_str = cljs.core.nth.call(null,vec__29262,(1),null);var f_29264 = clustermap.filters.parse_url_param_value.call(null,filter_str);cljs.core.async.put_BANG_.call(null,filter_rq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_id,f_29264], null));
{
var G__29265 = seq__29258;
var G__29266 = chunk__29259;
var G__29267 = count__29260;
var G__29268 = (i__29261 + (1));
seq__29258 = G__29265;
chunk__29259 = G__29266;
count__29260 = G__29267;
i__29261 = G__29268;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29258);if(temp__4126__auto__)
{var seq__29258__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29258__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__29258__$1);{
var G__29269 = cljs.core.chunk_rest.call(null,seq__29258__$1);
var G__29270 = c__4408__auto__;
var G__29271 = cljs.core.count.call(null,c__4408__auto__);
var G__29272 = (0);
seq__29258 = G__29269;
chunk__29259 = G__29270;
count__29260 = G__29271;
i__29261 = G__29272;
continue;
}
} else
{var vec__29263 = cljs.core.first.call(null,seq__29258__$1);var filter_id = cljs.core.nth.call(null,vec__29263,(0),null);var filter_str = cljs.core.nth.call(null,vec__29263,(1),null);var f_29273 = clustermap.filters.parse_url_param_value.call(null,filter_str);cljs.core.async.put_BANG_.call(null,filter_rq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_id,f_29273], null));
{
var G__29274 = cljs.core.next.call(null,seq__29258__$1);
var G__29275 = null;
var G__29276 = (0);
var G__29277 = (0);
seq__29258 = G__29274;
chunk__29259 = G__29275;
count__29260 = G__29276;
i__29261 = G__29277;
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
clustermap.nav.init_routes = (function init_routes(filter_rq,app_state,path,default_view){var action__16854__auto___29290 = (function (params__16855__auto__){if(cljs.core.map_QMARK_.call(null,params__16855__auto__))
{var map__29284 = params__16855__auto__;var map__29284__$1 = ((cljs.core.seq_QMARK_.call(null,map__29284))?cljs.core.apply.call(null,cljs.core.hash_map,map__29284):map__29284);var query_params = cljs.core.get.call(null,map__29284__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{if(cljs.core.vector_QMARK_.call(null,params__16855__auto__))
{var vec__29285 = params__16855__auto__;var query_params = cljs.core.nth.call(null,vec__29285,(0),null);clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__16854__auto___29290);
var action__16854__auto___29291 = (function (params__16855__auto__){if(cljs.core.map_QMARK_.call(null,params__16855__auto__))
{var map__29286 = params__16855__auto__;var map__29286__$1 = ((cljs.core.seq_QMARK_.call(null,map__29286))?cljs.core.apply.call(null,cljs.core.hash_map,map__29286):map__29286);var query_params = cljs.core.get.call(null,map__29286__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{if(cljs.core.vector_QMARK_.call(null,params__16855__auto__))
{var vec__29287 = params__16855__auto__;var query_params = cljs.core.nth.call(null,vec__29287,(0),null);clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__16854__auto___29291);
var action__16854__auto__ = (function (params__16855__auto__){if(cljs.core.map_QMARK_.call(null,params__16855__auto__))
{var map__29288 = params__16855__auto__;var map__29288__$1 = ((cljs.core.seq_QMARK_.call(null,map__29288))?cljs.core.apply.call(null,cljs.core.hash_map,map__29288):map__29288);var query_params = cljs.core.get.call(null,map__29288__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var view = cljs.core.get.call(null,map__29288__$1,new cljs.core.Keyword(null,"view","view",1247994814));clustermap.nav.set_view.call(null,app_state,path,view);
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{if(cljs.core.vector_QMARK_.call(null,params__16855__auto__))
{var vec__29289 = params__16855__auto__;var view = cljs.core.nth.call(null,vec__29289,(0),null);var query_params = cljs.core.nth.call(null,vec__29289,(1),null);clustermap.nav.set_view.call(null,app_state,path,view);
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__16854__auto__);
return ((function (action__16854__auto__){
return (function() { 
var G__29292__delegate = function (args__16853__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/:view",args__16853__auto__);
};
var G__29292 = function (var_args){
var args__16853__auto__ = null;if (arguments.length > 0) {
  args__16853__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29292__delegate.call(this,args__16853__auto__);};
G__29292.cljs$lang$maxFixedArity = 0;
G__29292.cljs$lang$applyTo = (function (arglist__29293){
var args__16853__auto__ = cljs.core.seq(arglist__29293);
return G__29292__delegate(args__16853__auto__);
});
G__29292.cljs$core$IFn$_invoke$arity$variadic = G__29292__delegate;
return G__29292;
})()
;
;})(action__16854__auto__))
});
/**
* initialise navigation and routing
* 
* history : the History object
* filter-rq : core.async channel for filter request messages
* app-state : the app state atom
* path : the path to update with the current view
* default-view : default-view to be applied
* 
* returns a function of a single param, thew view, which
* can be used to navigate to that view
*/
clustermap.nav.init = (function init(history,filter_rq,app_state,path,default_view){var navigator_fn = cljs.core.partial.call(null,clustermap.nav.set_route,history);clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.init_routes.call(null,filter_rq,app_state,path,default_view);
return navigator_fn;
});
clustermap.nav.destroy = (function destroy(){secretary.core.reset_routes_BANG_.call(null);
domina.events.unlisten_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"));
return domina.events.unlisten_BANG_.call(null,domina.css.sel.call(null,".nav-links a"));
});
