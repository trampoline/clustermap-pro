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
clustermap.nav.change_view = (function change_view(view){var view__$1 = (function (){var or__11514__auto__ = cljs.core.not_empty.call(null,view);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
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
var seq__31010 = cljs.core.seq.call(null,query_params);var chunk__31011 = null;var count__31012 = (0);var i__31013 = (0);while(true){
if((i__31013 < count__31012))
{var vec__31014 = cljs.core._nth.call(null,chunk__31011,i__31013);var filter_id = cljs.core.nth.call(null,vec__31014,(0),null);var filter_str = cljs.core.nth.call(null,vec__31014,(1),null);var f_31016 = clustermap.filters.parse_url_param_value.call(null,filter_str);cljs.core.async.put_BANG_.call(null,filter_rq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_id,f_31016], null));
{
var G__31017 = seq__31010;
var G__31018 = chunk__31011;
var G__31019 = count__31012;
var G__31020 = (i__31013 + (1));
seq__31010 = G__31017;
chunk__31011 = G__31018;
count__31012 = G__31019;
i__31013 = G__31020;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31010);if(temp__4126__auto__)
{var seq__31010__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31010__$1))
{var c__12283__auto__ = cljs.core.chunk_first.call(null,seq__31010__$1);{
var G__31021 = cljs.core.chunk_rest.call(null,seq__31010__$1);
var G__31022 = c__12283__auto__;
var G__31023 = cljs.core.count.call(null,c__12283__auto__);
var G__31024 = (0);
seq__31010 = G__31021;
chunk__31011 = G__31022;
count__31012 = G__31023;
i__31013 = G__31024;
continue;
}
} else
{var vec__31015 = cljs.core.first.call(null,seq__31010__$1);var filter_id = cljs.core.nth.call(null,vec__31015,(0),null);var filter_str = cljs.core.nth.call(null,vec__31015,(1),null);var f_31025 = clustermap.filters.parse_url_param_value.call(null,filter_str);cljs.core.async.put_BANG_.call(null,filter_rq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_id,f_31025], null));
{
var G__31026 = cljs.core.next.call(null,seq__31010__$1);
var G__31027 = null;
var G__31028 = (0);
var G__31029 = (0);
seq__31010 = G__31026;
chunk__31011 = G__31027;
count__31012 = G__31028;
i__31013 = G__31029;
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
clustermap.nav.init_routes = (function init_routes(filter_rq,app_state,path,default_view){var action__22477__auto___31042 = (function (params__22478__auto__){if(cljs.core.map_QMARK_.call(null,params__22478__auto__))
{var map__31036 = params__22478__auto__;var map__31036__$1 = ((cljs.core.seq_QMARK_.call(null,map__31036))?cljs.core.apply.call(null,cljs.core.hash_map,map__31036):map__31036);var query_params = cljs.core.get.call(null,map__31036__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{if(cljs.core.vector_QMARK_.call(null,params__22478__auto__))
{var vec__31037 = params__22478__auto__;var query_params = cljs.core.nth.call(null,vec__31037,(0),null);clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__22477__auto___31042);
var action__22477__auto___31043 = (function (params__22478__auto__){if(cljs.core.map_QMARK_.call(null,params__22478__auto__))
{var map__31038 = params__22478__auto__;var map__31038__$1 = ((cljs.core.seq_QMARK_.call(null,map__31038))?cljs.core.apply.call(null,cljs.core.hash_map,map__31038):map__31038);var query_params = cljs.core.get.call(null,map__31038__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{if(cljs.core.vector_QMARK_.call(null,params__22478__auto__))
{var vec__31039 = params__22478__auto__;var query_params = cljs.core.nth.call(null,vec__31039,(0),null);clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__22477__auto___31043);
var action__22477__auto__ = (function (params__22478__auto__){if(cljs.core.map_QMARK_.call(null,params__22478__auto__))
{var map__31040 = params__22478__auto__;var map__31040__$1 = ((cljs.core.seq_QMARK_.call(null,map__31040))?cljs.core.apply.call(null,cljs.core.hash_map,map__31040):map__31040);var query_params = cljs.core.get.call(null,map__31040__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var view = cljs.core.get.call(null,map__31040__$1,new cljs.core.Keyword(null,"view","view",1247994814));clustermap.nav.set_view.call(null,app_state,path,view);
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{if(cljs.core.vector_QMARK_.call(null,params__22478__auto__))
{var vec__31041 = params__22478__auto__;var view = cljs.core.nth.call(null,vec__31041,(0),null);var query_params = cljs.core.nth.call(null,vec__31041,(1),null);clustermap.nav.set_view.call(null,app_state,path,view);
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__22477__auto__);
return ((function (action__22477__auto__){
return (function() { 
var G__31044__delegate = function (args__22476__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/:view",args__22476__auto__);
};
var G__31044 = function (var_args){
var args__22476__auto__ = null;if (arguments.length > 0) {
  args__22476__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31044__delegate.call(this,args__22476__auto__);};
G__31044.cljs$lang$maxFixedArity = 0;
G__31044.cljs$lang$applyTo = (function (arglist__31045){
var args__22476__auto__ = cljs.core.seq(arglist__31045);
return G__31044__delegate(args__22476__auto__);
});
G__31044.cljs$core$IFn$_invoke$arity$variadic = G__31044__delegate;
return G__31044;
})()
;
;})(action__22477__auto__))
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