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
clustermap.nav.change_view = (function change_view(view){var view__$1 = (function (){var or__11552__auto__ = cljs.core.not_empty.call(null,view);if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
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
var seq__33490 = cljs.core.seq.call(null,query_params);var chunk__33491 = null;var count__33492 = (0);var i__33493 = (0);while(true){
if((i__33493 < count__33492))
{var vec__33494 = cljs.core._nth.call(null,chunk__33491,i__33493);var filter_id = cljs.core.nth.call(null,vec__33494,(0),null);var filter_str = cljs.core.nth.call(null,vec__33494,(1),null);var f_33496 = clustermap.filters.parse_url_param_value.call(null,filter_str);cljs.core.async.put_BANG_.call(null,filter_rq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_id,f_33496], null));
{
var G__33497 = seq__33490;
var G__33498 = chunk__33491;
var G__33499 = count__33492;
var G__33500 = (i__33493 + (1));
seq__33490 = G__33497;
chunk__33491 = G__33498;
count__33492 = G__33499;
i__33493 = G__33500;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33490);if(temp__4126__auto__)
{var seq__33490__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33490__$1))
{var c__12321__auto__ = cljs.core.chunk_first.call(null,seq__33490__$1);{
var G__33501 = cljs.core.chunk_rest.call(null,seq__33490__$1);
var G__33502 = c__12321__auto__;
var G__33503 = cljs.core.count.call(null,c__12321__auto__);
var G__33504 = (0);
seq__33490 = G__33501;
chunk__33491 = G__33502;
count__33492 = G__33503;
i__33493 = G__33504;
continue;
}
} else
{var vec__33495 = cljs.core.first.call(null,seq__33490__$1);var filter_id = cljs.core.nth.call(null,vec__33495,(0),null);var filter_str = cljs.core.nth.call(null,vec__33495,(1),null);var f_33505 = clustermap.filters.parse_url_param_value.call(null,filter_str);cljs.core.async.put_BANG_.call(null,filter_rq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_id,f_33505], null));
{
var G__33506 = cljs.core.next.call(null,seq__33490__$1);
var G__33507 = null;
var G__33508 = (0);
var G__33509 = (0);
seq__33490 = G__33506;
chunk__33491 = G__33507;
count__33492 = G__33508;
i__33493 = G__33509;
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
clustermap.nav.init_routes = (function init_routes(filter_rq,app_state,path,default_view){var action__24313__auto___33522 = (function (params__24314__auto__){if(cljs.core.map_QMARK_.call(null,params__24314__auto__))
{var map__33516 = params__24314__auto__;var map__33516__$1 = ((cljs.core.seq_QMARK_.call(null,map__33516))?cljs.core.apply.call(null,cljs.core.hash_map,map__33516):map__33516);var query_params = cljs.core.get.call(null,map__33516__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{if(cljs.core.vector_QMARK_.call(null,params__24314__auto__))
{var vec__33517 = params__24314__auto__;var query_params = cljs.core.nth.call(null,vec__33517,(0),null);clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__24313__auto___33522);
var action__24313__auto___33523 = (function (params__24314__auto__){if(cljs.core.map_QMARK_.call(null,params__24314__auto__))
{var map__33518 = params__24314__auto__;var map__33518__$1 = ((cljs.core.seq_QMARK_.call(null,map__33518))?cljs.core.apply.call(null,cljs.core.hash_map,map__33518):map__33518);var query_params = cljs.core.get.call(null,map__33518__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{if(cljs.core.vector_QMARK_.call(null,params__24314__auto__))
{var vec__33519 = params__24314__auto__;var query_params = cljs.core.nth.call(null,vec__33519,(0),null);clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__24313__auto___33523);
var action__24313__auto__ = (function (params__24314__auto__){if(cljs.core.map_QMARK_.call(null,params__24314__auto__))
{var map__33520 = params__24314__auto__;var map__33520__$1 = ((cljs.core.seq_QMARK_.call(null,map__33520))?cljs.core.apply.call(null,cljs.core.hash_map,map__33520):map__33520);var query_params = cljs.core.get.call(null,map__33520__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var view = cljs.core.get.call(null,map__33520__$1,new cljs.core.Keyword(null,"view","view",1247994814));clustermap.nav.set_view.call(null,app_state,path,view);
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{if(cljs.core.vector_QMARK_.call(null,params__24314__auto__))
{var vec__33521 = params__24314__auto__;var view = cljs.core.nth.call(null,vec__33521,(0),null);var query_params = cljs.core.nth.call(null,vec__33521,(1),null);clustermap.nav.set_view.call(null,app_state,path,view);
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__24313__auto__);
return ((function (action__24313__auto__){
return (function() { 
var G__33524__delegate = function (args__24312__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/:view",args__24312__auto__);
};
var G__33524 = function (var_args){
var args__24312__auto__ = null;if (arguments.length > 0) {
  args__24312__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__33524__delegate.call(this,args__24312__auto__);};
G__33524.cljs$lang$maxFixedArity = 0;
G__33524.cljs$lang$applyTo = (function (arglist__33525){
var args__24312__auto__ = cljs.core.seq(arglist__33525);
return G__33524__delegate(args__24312__auto__);
});
G__33524.cljs$core$IFn$_invoke$arity$variadic = G__33524__delegate;
return G__33524;
})()
;
;})(action__24313__auto__))
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

//# sourceMappingURL=nav.js.map