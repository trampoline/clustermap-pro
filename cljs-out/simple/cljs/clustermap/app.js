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
clustermap.app.IAppService = (function (){var obj28927 = {};return obj28927;
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
clustermap.app.IAppControl = (function (){var obj28929 = {};return obj28929;
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
clustermap.app.IApp = (function (){var obj28931 = {};return obj28931;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t28988 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t28988 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta28989){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta28989 = meta28989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t28988.cljs$lang$type = true;
clustermap.app.t28988.cljs$lang$ctorStr = "clustermap.app/t28988";
clustermap.app.t28988.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t28988");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28988.prototype.clustermap$app$IApp$ = true;
clustermap.app.t28988.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28988.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28988.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28988.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28988.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28988.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28988.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t28988.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__28991_29044 = cljs.core.seq.call(null,self__.component_defs);var chunk__28992_29045 = null;var count__28993_29046 = (0);var i__28994_29047 = (0);while(true){
if((i__28994_29047 < count__28993_29046))
{var map__28995_29048 = cljs.core._nth.call(null,chunk__28992_29045,i__28994_29047);var map__28995_29049__$1 = ((cljs.core.seq_QMARK_.call(null,map__28995_29048))?cljs.core.apply.call(null,cljs.core.hash_map,map__28995_29048):map__28995_29048);var paths_29050 = cljs.core.get.call(null,map__28995_29049__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29051 = cljs.core.get.call(null,map__28995_29049__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29052 = cljs.core.get.call(null,map__28995_29049__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29053 = cljs.core.get.call(null,map__28995_29049__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29054 = cljs.core.get.call(null,map__28995_29049__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29054,f_29053,target_29052,paths_29050], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29054,f_29053,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29052,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29051,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29050);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29054,f_29053,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29052,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29051,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29050);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29054,f_29053,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29052,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29051,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29050);
}
{
var G__29055 = seq__28991_29044;
var G__29056 = chunk__28992_29045;
var G__29057 = count__28993_29046;
var G__29058 = (i__28994_29047 + (1));
seq__28991_29044 = G__29055;
chunk__28992_29045 = G__29056;
count__28993_29046 = G__29057;
i__28994_29047 = G__29058;
continue;
}
} else
{var temp__4126__auto___29059 = cljs.core.seq.call(null,seq__28991_29044);if(temp__4126__auto___29059)
{var seq__28991_29060__$1 = temp__4126__auto___29059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28991_29060__$1))
{var c__4408__auto___29061 = cljs.core.chunk_first.call(null,seq__28991_29060__$1);{
var G__29062 = cljs.core.chunk_rest.call(null,seq__28991_29060__$1);
var G__29063 = c__4408__auto___29061;
var G__29064 = cljs.core.count.call(null,c__4408__auto___29061);
var G__29065 = (0);
seq__28991_29044 = G__29062;
chunk__28992_29045 = G__29063;
count__28993_29046 = G__29064;
i__28994_29047 = G__29065;
continue;
}
} else
{var map__28996_29066 = cljs.core.first.call(null,seq__28991_29060__$1);var map__28996_29067__$1 = ((cljs.core.seq_QMARK_.call(null,map__28996_29066))?cljs.core.apply.call(null,cljs.core.hash_map,map__28996_29066):map__28996_29066);var paths_29068 = cljs.core.get.call(null,map__28996_29067__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29069 = cljs.core.get.call(null,map__28996_29067__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29070 = cljs.core.get.call(null,map__28996_29067__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29071 = cljs.core.get.call(null,map__28996_29067__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29072 = cljs.core.get.call(null,map__28996_29067__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29072,f_29071,target_29070,paths_29068], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29072,f_29071,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29070,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29069,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29068);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29072,f_29071,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29070,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29069,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29068);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29072,f_29071,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29070,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29069,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29068);
}
{
var G__29073 = cljs.core.next.call(null,seq__28991_29060__$1);
var G__29074 = null;
var G__29075 = (0);
var G__29076 = (0);
seq__28991_29044 = G__29073;
chunk__28992_29045 = G__29074;
count__28993_29046 = G__29075;
i__28994_29047 = G__29076;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___29077 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___29077,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___29077,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_29017){var state_val_29018 = (state_29017[(1)]);if((state_val_29018 === (7)))
{var inst_29001 = (state_29017[(7)]);var inst_29001__$1 = (state_29017[(2)]);var inst_29002 = cljs.core.seq_QMARK_.call(null,inst_29001__$1);var state_29017__$1 = (function (){var statearr_29019 = state_29017;(statearr_29019[(7)] = inst_29001__$1);
return statearr_29019;
})();if(inst_29002)
{var statearr_29020_29078 = state_29017__$1;(statearr_29020_29078[(1)] = (8));
} else
{var statearr_29021_29079 = state_29017__$1;(statearr_29021_29079[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29018 === (1)))
{var state_29017__$1 = state_29017;var statearr_29022_29080 = state_29017__$1;(statearr_29022_29080[(2)] = null);
(statearr_29022_29080[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29018 === (4)))
{var state_29017__$1 = state_29017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29017__$1,(7),self__.comm);
} else
{if((state_val_29018 === (6)))
{var inst_29013 = (state_29017[(2)]);var state_29017__$1 = state_29017;var statearr_29023_29081 = state_29017__$1;(statearr_29023_29081[(2)] = inst_29013);
(statearr_29023_29081[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29018 === (3)))
{var inst_29015 = (state_29017[(2)]);var state_29017__$1 = state_29017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29017__$1,inst_29015);
} else
{if((state_val_29018 === (2)))
{var state_29017__$1 = state_29017;var statearr_29024_29082 = state_29017__$1;(statearr_29024_29082[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29018 === (9)))
{var inst_29001 = (state_29017[(7)]);var state_29017__$1 = state_29017;var statearr_29026_29083 = state_29017__$1;(statearr_29026_29083[(2)] = inst_29001);
(statearr_29026_29083[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29018 === (5)))
{var state_29017__$1 = state_29017;var statearr_29027_29084 = state_29017__$1;(statearr_29027_29084[(2)] = null);
(statearr_29027_29084[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29018 === (10)))
{var inst_29007 = (state_29017[(2)]);var inst_29008 = cljs.core.get.call(null,inst_29007,new cljs.core.Keyword(null,"type","type",1174270348));var inst_29009 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_29008,inst_29007);var state_29017__$1 = (function (){var statearr_29028 = state_29017;(statearr_29028[(8)] = inst_29009);
return statearr_29028;
})();var statearr_29029_29085 = state_29017__$1;(statearr_29029_29085[(2)] = null);
(statearr_29029_29085[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29018 === (8)))
{var inst_29001 = (state_29017[(7)]);var inst_29004 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29001);var state_29017__$1 = state_29017;var statearr_29030_29086 = state_29017__$1;(statearr_29030_29086[(2)] = inst_29004);
(statearr_29030_29086[(1)] = (10));
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
});})(c__9125__auto___29077,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___29077,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29034 = [null,null,null,null,null,null,null,null,null];(statearr_29034[(0)] = state_machine__9111__auto__);
(statearr_29034[(1)] = (1));
return statearr_29034;
});
var state_machine__9111__auto____1 = (function (state_29017){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29017);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29035){if((e29035 instanceof Object))
{var ex__9114__auto__ = e29035;var statearr_29036_29087 = state_29017;(statearr_29036_29087[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29017);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29035;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29088 = state_29017;
state_29017 = G__29088;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29017){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___29077,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_29037 = f__9126__auto__.call(null);(statearr_29037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___29077);
return statearr_29037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___29077,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28988.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__29038_29089 = cljs.core.seq.call(null,self__.component_defs);var chunk__29039_29090 = null;var count__29040_29091 = (0);var i__29041_29092 = (0);while(true){
if((i__29041_29092 < count__29040_29091))
{var map__29042_29093 = cljs.core._nth.call(null,chunk__29039_29090,i__29041_29092);var map__29042_29094__$1 = ((cljs.core.seq_QMARK_.call(null,map__29042_29093))?cljs.core.apply.call(null,cljs.core.hash_map,map__29042_29093):map__29042_29093);var target_29095 = cljs.core.get.call(null,map__29042_29094__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29095);
{
var G__29096 = seq__29038_29089;
var G__29097 = chunk__29039_29090;
var G__29098 = count__29040_29091;
var G__29099 = (i__29041_29092 + (1));
seq__29038_29089 = G__29096;
chunk__29039_29090 = G__29097;
count__29040_29091 = G__29098;
i__29041_29092 = G__29099;
continue;
}
} else
{var temp__4126__auto___29100 = cljs.core.seq.call(null,seq__29038_29089);if(temp__4126__auto___29100)
{var seq__29038_29101__$1 = temp__4126__auto___29100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29038_29101__$1))
{var c__4408__auto___29102 = cljs.core.chunk_first.call(null,seq__29038_29101__$1);{
var G__29103 = cljs.core.chunk_rest.call(null,seq__29038_29101__$1);
var G__29104 = c__4408__auto___29102;
var G__29105 = cljs.core.count.call(null,c__4408__auto___29102);
var G__29106 = (0);
seq__29038_29089 = G__29103;
chunk__29039_29090 = G__29104;
count__29040_29091 = G__29105;
i__29041_29092 = G__29106;
continue;
}
} else
{var map__29043_29107 = cljs.core.first.call(null,seq__29038_29101__$1);var map__29043_29108__$1 = ((cljs.core.seq_QMARK_.call(null,map__29043_29107))?cljs.core.apply.call(null,cljs.core.hash_map,map__29043_29107):map__29043_29107);var target_29109 = cljs.core.get.call(null,map__29043_29108__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29109);
{
var G__29110 = cljs.core.next.call(null,seq__29038_29101__$1);
var G__29111 = null;
var G__29112 = (0);
var G__29113 = (0);
seq__29038_29089 = G__29110;
chunk__29039_29090 = G__29111;
count__29040_29091 = G__29112;
i__29041_29092 = G__29113;
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
clustermap.app.t28988.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28990){var self__ = this;
var _28990__$1 = this;return self__.meta28989;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28990,meta28989__$1){var self__ = this;
var _28990__$1 = this;return (new clustermap.app.t28988(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta28989__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t28988 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t28988(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28989){return (new clustermap.app.t28988(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28989));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t28988(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
