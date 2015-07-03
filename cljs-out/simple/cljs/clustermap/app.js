// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.mount');
goog.require('secretary.core');
goog.require('schema.core');
goog.require('clustermap.nav');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('clustermap.ganalytics');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clustermap.boundarylines');
goog.require('clustermap.ganalytics');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.mount');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.api');
if(typeof clustermap.app.history_STAR_ !== 'undefined')
{} else
{clustermap.app.history_STAR_ = (new goog.History());
}
clustermap.app.IAppService = (function (){var obj29231 = {};return obj29231;
})();
clustermap.app.init = (function init(this$,app){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppService$init$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppService$init$arity$2(this$,app);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.init[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.init["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.init",this$);
}
}
})().call(null,this$,app);
}
});
clustermap.app.destroy = (function destroy(this$,app){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppService$destroy$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppService$destroy$arity$2(this$,app);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.destroy[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.destroy["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.destroy",this$);
}
}
})().call(null,this$,app);
}
});
clustermap.app.handle_event = (function handle_event(this$,app,type,val){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppService$handle_event$arity$4;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppService$handle_event$arity$4(this$,app,type,val);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.handle_event[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.handle_event["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.handle-event",this$);
}
}
})().call(null,this$,app,type,val);
}
});
clustermap.app.dev_mode_QMARK_ = (function dev_mode_QMARK_(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppService$dev_mode_QMARK_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppService$dev_mode_QMARK_$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.dev_mode_QMARK_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.dev_mode_QMARK_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.dev-mode?",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.IAppControl = (function (){var obj29233 = {};return obj29233;
})();
clustermap.app.start = (function start(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppControl$start$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppControl$start$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.start[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.start["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppControl.start",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.stop = (function stop(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppControl$stop$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppControl$stop$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.stop[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.stop["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppControl.stop",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.IApp = (function (){var obj29235 = {};return obj29235;
})();
clustermap.app.get_state = (function get_state(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$get_state$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$get_state$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.get_state[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.get_state["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-state",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_comm = (function get_comm(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$get_comm$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$get_comm$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.get_comm[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.get_comm["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-comm",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_filter_rq = (function get_filter_rq(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$get_filter_rq$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$get_filter_rq$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.get_filter_rq[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.get_filter_rq["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-filter-rq",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_history = (function get_history(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$get_history$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$get_history$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.get_history[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.get_history["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-history",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_navigator_fn = (function get_navigator_fn(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$get_navigator_fn$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$get_navigator_fn$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.get_navigator_fn[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.get_navigator_fn["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-navigator-fn",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.navigate = (function navigate(this$,view){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$navigate$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$navigate$arity$2(this$,view);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.navigate[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.navigate["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.navigate",this$);
}
}
})().call(null,this$,view);
}
});
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t29292 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t29292 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta29293){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta29293 = meta29293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t29292.cljs$lang$type = true;
clustermap.app.t29292.cljs$lang$ctorStr = "clustermap.app/t29292";
clustermap.app.t29292.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t29292");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29292.prototype.clustermap$app$IApp$ = true;
clustermap.app.t29292.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29292.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29292.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29292.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29292.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29292.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29292.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t29292.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__29295_29348 = cljs.core.seq.call(null,self__.component_defs);var chunk__29296_29349 = null;var count__29297_29350 = (0);var i__29298_29351 = (0);while(true){
if((i__29298_29351 < count__29297_29350))
{var map__29299_29352 = cljs.core._nth.call(null,chunk__29296_29349,i__29298_29351);var map__29299_29353__$1 = ((cljs.core.seq_QMARK_.call(null,map__29299_29352))?cljs.core.apply.call(null,cljs.core.hash_map,map__29299_29352):map__29299_29352);var paths_29354 = cljs.core.get.call(null,map__29299_29353__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29355 = cljs.core.get.call(null,map__29299_29353__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29356 = cljs.core.get.call(null,map__29299_29353__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29357 = cljs.core.get.call(null,map__29299_29353__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29358 = cljs.core.get.call(null,map__29299_29353__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29358,f_29357,target_29356,paths_29354], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29358,f_29357,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29356,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29355,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29354);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29358,f_29357,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29356,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29355,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29354);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29358,f_29357,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29356,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29355,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29354);
}
{
var G__29359 = seq__29295_29348;
var G__29360 = chunk__29296_29349;
var G__29361 = count__29297_29350;
var G__29362 = (i__29298_29351 + (1));
seq__29295_29348 = G__29359;
chunk__29296_29349 = G__29360;
count__29297_29350 = G__29361;
i__29298_29351 = G__29362;
continue;
}
} else
{var temp__4126__auto___29363 = cljs.core.seq.call(null,seq__29295_29348);if(temp__4126__auto___29363)
{var seq__29295_29364__$1 = temp__4126__auto___29363;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29295_29364__$1))
{var c__4408__auto___29365 = cljs.core.chunk_first.call(null,seq__29295_29364__$1);{
var G__29366 = cljs.core.chunk_rest.call(null,seq__29295_29364__$1);
var G__29367 = c__4408__auto___29365;
var G__29368 = cljs.core.count.call(null,c__4408__auto___29365);
var G__29369 = (0);
seq__29295_29348 = G__29366;
chunk__29296_29349 = G__29367;
count__29297_29350 = G__29368;
i__29298_29351 = G__29369;
continue;
}
} else
{var map__29300_29370 = cljs.core.first.call(null,seq__29295_29364__$1);var map__29300_29371__$1 = ((cljs.core.seq_QMARK_.call(null,map__29300_29370))?cljs.core.apply.call(null,cljs.core.hash_map,map__29300_29370):map__29300_29370);var paths_29372 = cljs.core.get.call(null,map__29300_29371__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29373 = cljs.core.get.call(null,map__29300_29371__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29374 = cljs.core.get.call(null,map__29300_29371__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29375 = cljs.core.get.call(null,map__29300_29371__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29376 = cljs.core.get.call(null,map__29300_29371__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29376,f_29375,target_29374,paths_29372], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29376,f_29375,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29374,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29373,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29372);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29376,f_29375,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29374,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29373,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29372);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29376,f_29375,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29374,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29373,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29372);
}
{
var G__29377 = cljs.core.next.call(null,seq__29295_29364__$1);
var G__29378 = null;
var G__29379 = (0);
var G__29380 = (0);
seq__29295_29348 = G__29377;
chunk__29296_29349 = G__29378;
count__29297_29350 = G__29379;
i__29298_29351 = G__29380;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___29381 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___29381,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___29381,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_29321){var state_val_29322 = (state_29321[(1)]);if((state_val_29322 === (7)))
{var inst_29305 = (state_29321[(7)]);var inst_29305__$1 = (state_29321[(2)]);var inst_29306 = cljs.core.seq_QMARK_.call(null,inst_29305__$1);var state_29321__$1 = (function (){var statearr_29323 = state_29321;(statearr_29323[(7)] = inst_29305__$1);
return statearr_29323;
})();if(inst_29306)
{var statearr_29324_29382 = state_29321__$1;(statearr_29324_29382[(1)] = (8));
} else
{var statearr_29325_29383 = state_29321__$1;(statearr_29325_29383[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29322 === (1)))
{var state_29321__$1 = state_29321;var statearr_29326_29384 = state_29321__$1;(statearr_29326_29384[(2)] = null);
(statearr_29326_29384[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29322 === (4)))
{var state_29321__$1 = state_29321;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29321__$1,(7),self__.comm);
} else
{if((state_val_29322 === (6)))
{var inst_29317 = (state_29321[(2)]);var state_29321__$1 = state_29321;var statearr_29327_29385 = state_29321__$1;(statearr_29327_29385[(2)] = inst_29317);
(statearr_29327_29385[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29322 === (3)))
{var inst_29319 = (state_29321[(2)]);var state_29321__$1 = state_29321;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29321__$1,inst_29319);
} else
{if((state_val_29322 === (2)))
{var state_29321__$1 = state_29321;var statearr_29328_29386 = state_29321__$1;(statearr_29328_29386[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29322 === (9)))
{var inst_29305 = (state_29321[(7)]);var state_29321__$1 = state_29321;var statearr_29330_29387 = state_29321__$1;(statearr_29330_29387[(2)] = inst_29305);
(statearr_29330_29387[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29322 === (5)))
{var state_29321__$1 = state_29321;var statearr_29331_29388 = state_29321__$1;(statearr_29331_29388[(2)] = null);
(statearr_29331_29388[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29322 === (10)))
{var inst_29311 = (state_29321[(2)]);var inst_29312 = cljs.core.get.call(null,inst_29311,new cljs.core.Keyword(null,"type","type",1174270348));var inst_29313 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_29312,inst_29311);var state_29321__$1 = (function (){var statearr_29332 = state_29321;(statearr_29332[(8)] = inst_29313);
return statearr_29332;
})();var statearr_29333_29389 = state_29321__$1;(statearr_29333_29389[(2)] = null);
(statearr_29333_29389[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29322 === (8)))
{var inst_29305 = (state_29321[(7)]);var inst_29308 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29305);var state_29321__$1 = state_29321;var statearr_29334_29390 = state_29321__$1;(statearr_29334_29390[(2)] = inst_29308);
(statearr_29334_29390[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___29381,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___29381,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29338 = [null,null,null,null,null,null,null,null,null];(statearr_29338[(0)] = state_machine__9111__auto__);
(statearr_29338[(1)] = (1));
return statearr_29338;
});
var state_machine__9111__auto____1 = (function (state_29321){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29321);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29339){if((e29339 instanceof Object))
{var ex__9114__auto__ = e29339;var statearr_29340_29391 = state_29321;(statearr_29340_29391[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29321);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29339;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29392 = state_29321;
state_29321 = G__29392;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29321){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___29381,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_29341 = f__9126__auto__.call(null);(statearr_29341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___29381);
return statearr_29341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___29381,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29292.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__29342_29393 = cljs.core.seq.call(null,self__.component_defs);var chunk__29343_29394 = null;var count__29344_29395 = (0);var i__29345_29396 = (0);while(true){
if((i__29345_29396 < count__29344_29395))
{var map__29346_29397 = cljs.core._nth.call(null,chunk__29343_29394,i__29345_29396);var map__29346_29398__$1 = ((cljs.core.seq_QMARK_.call(null,map__29346_29397))?cljs.core.apply.call(null,cljs.core.hash_map,map__29346_29397):map__29346_29397);var target_29399 = cljs.core.get.call(null,map__29346_29398__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29399);
{
var G__29400 = seq__29342_29393;
var G__29401 = chunk__29343_29394;
var G__29402 = count__29344_29395;
var G__29403 = (i__29345_29396 + (1));
seq__29342_29393 = G__29400;
chunk__29343_29394 = G__29401;
count__29344_29395 = G__29402;
i__29345_29396 = G__29403;
continue;
}
} else
{var temp__4126__auto___29404 = cljs.core.seq.call(null,seq__29342_29393);if(temp__4126__auto___29404)
{var seq__29342_29405__$1 = temp__4126__auto___29404;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29342_29405__$1))
{var c__4408__auto___29406 = cljs.core.chunk_first.call(null,seq__29342_29405__$1);{
var G__29407 = cljs.core.chunk_rest.call(null,seq__29342_29405__$1);
var G__29408 = c__4408__auto___29406;
var G__29409 = cljs.core.count.call(null,c__4408__auto___29406);
var G__29410 = (0);
seq__29342_29393 = G__29407;
chunk__29343_29394 = G__29408;
count__29344_29395 = G__29409;
i__29345_29396 = G__29410;
continue;
}
} else
{var map__29347_29411 = cljs.core.first.call(null,seq__29342_29405__$1);var map__29347_29412__$1 = ((cljs.core.seq_QMARK_.call(null,map__29347_29411))?cljs.core.apply.call(null,cljs.core.hash_map,map__29347_29411):map__29347_29411);var target_29413 = cljs.core.get.call(null,map__29347_29412__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29413);
{
var G__29414 = cljs.core.next.call(null,seq__29342_29405__$1);
var G__29415 = null;
var G__29416 = (0);
var G__29417 = (0);
seq__29342_29393 = G__29414;
chunk__29343_29394 = G__29415;
count__29344_29395 = G__29416;
i__29345_29396 = G__29417;
continue;
}
}
} else
{}
}
break;
}
clustermap.app.destroy.call(null,self__.app_service,this$__$1);
clustermap.nav.destroy.call(null);
return clustermap.app.history_STAR_.removeAllListeners();
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29294){var self__ = this;
var _29294__$1 = this;return self__.meta29293;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29294,meta29293__$1){var self__ = this;
var _29294__$1 = this;return (new clustermap.app.t29292(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta29293__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t29292 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t29292(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29293){return (new clustermap.app.t29292(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29293));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t29292(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
