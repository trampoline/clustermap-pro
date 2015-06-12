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
clustermap.app.IAppService = (function (){var obj28913 = {};return obj28913;
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
clustermap.app.IAppControl = (function (){var obj28915 = {};return obj28915;
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
clustermap.app.IApp = (function (){var obj28917 = {};return obj28917;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t28974 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t28974 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta28975){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta28975 = meta28975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t28974.cljs$lang$type = true;
clustermap.app.t28974.cljs$lang$ctorStr = "clustermap.app/t28974";
clustermap.app.t28974.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t28974");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28974.prototype.clustermap$app$IApp$ = true;
clustermap.app.t28974.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28974.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28974.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28974.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28974.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28974.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28974.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t28974.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__28977_29030 = cljs.core.seq.call(null,self__.component_defs);var chunk__28978_29031 = null;var count__28979_29032 = (0);var i__28980_29033 = (0);while(true){
if((i__28980_29033 < count__28979_29032))
{var map__28981_29034 = cljs.core._nth.call(null,chunk__28978_29031,i__28980_29033);var map__28981_29035__$1 = ((cljs.core.seq_QMARK_.call(null,map__28981_29034))?cljs.core.apply.call(null,cljs.core.hash_map,map__28981_29034):map__28981_29034);var paths_29036 = cljs.core.get.call(null,map__28981_29035__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29037 = cljs.core.get.call(null,map__28981_29035__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29038 = cljs.core.get.call(null,map__28981_29035__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29039 = cljs.core.get.call(null,map__28981_29035__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29040 = cljs.core.get.call(null,map__28981_29035__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29040,f_29039,target_29038,paths_29036], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29040,f_29039,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29038,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29037,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29036);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29040,f_29039,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29038,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29037,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29036);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29040,f_29039,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29038,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29037,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29036);
}
{
var G__29041 = seq__28977_29030;
var G__29042 = chunk__28978_29031;
var G__29043 = count__28979_29032;
var G__29044 = (i__28980_29033 + (1));
seq__28977_29030 = G__29041;
chunk__28978_29031 = G__29042;
count__28979_29032 = G__29043;
i__28980_29033 = G__29044;
continue;
}
} else
{var temp__4126__auto___29045 = cljs.core.seq.call(null,seq__28977_29030);if(temp__4126__auto___29045)
{var seq__28977_29046__$1 = temp__4126__auto___29045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28977_29046__$1))
{var c__4408__auto___29047 = cljs.core.chunk_first.call(null,seq__28977_29046__$1);{
var G__29048 = cljs.core.chunk_rest.call(null,seq__28977_29046__$1);
var G__29049 = c__4408__auto___29047;
var G__29050 = cljs.core.count.call(null,c__4408__auto___29047);
var G__29051 = (0);
seq__28977_29030 = G__29048;
chunk__28978_29031 = G__29049;
count__28979_29032 = G__29050;
i__28980_29033 = G__29051;
continue;
}
} else
{var map__28982_29052 = cljs.core.first.call(null,seq__28977_29046__$1);var map__28982_29053__$1 = ((cljs.core.seq_QMARK_.call(null,map__28982_29052))?cljs.core.apply.call(null,cljs.core.hash_map,map__28982_29052):map__28982_29052);var paths_29054 = cljs.core.get.call(null,map__28982_29053__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29055 = cljs.core.get.call(null,map__28982_29053__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29056 = cljs.core.get.call(null,map__28982_29053__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29057 = cljs.core.get.call(null,map__28982_29053__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29058 = cljs.core.get.call(null,map__28982_29053__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29058,f_29057,target_29056,paths_29054], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29058,f_29057,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29056,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29055,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29054);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29058,f_29057,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29056,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29055,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29054);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29058,f_29057,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29056,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29055,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29054);
}
{
var G__29059 = cljs.core.next.call(null,seq__28977_29046__$1);
var G__29060 = null;
var G__29061 = (0);
var G__29062 = (0);
seq__28977_29030 = G__29059;
chunk__28978_29031 = G__29060;
count__28979_29032 = G__29061;
i__28980_29033 = G__29062;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___29063 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___29063,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___29063,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_29003){var state_val_29004 = (state_29003[(1)]);if((state_val_29004 === (7)))
{var inst_28987 = (state_29003[(7)]);var inst_28987__$1 = (state_29003[(2)]);var inst_28988 = cljs.core.seq_QMARK_.call(null,inst_28987__$1);var state_29003__$1 = (function (){var statearr_29005 = state_29003;(statearr_29005[(7)] = inst_28987__$1);
return statearr_29005;
})();if(inst_28988)
{var statearr_29006_29064 = state_29003__$1;(statearr_29006_29064[(1)] = (8));
} else
{var statearr_29007_29065 = state_29003__$1;(statearr_29007_29065[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29004 === (1)))
{var state_29003__$1 = state_29003;var statearr_29008_29066 = state_29003__$1;(statearr_29008_29066[(2)] = null);
(statearr_29008_29066[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29004 === (4)))
{var state_29003__$1 = state_29003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29003__$1,(7),self__.comm);
} else
{if((state_val_29004 === (6)))
{var inst_28999 = (state_29003[(2)]);var state_29003__$1 = state_29003;var statearr_29009_29067 = state_29003__$1;(statearr_29009_29067[(2)] = inst_28999);
(statearr_29009_29067[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29004 === (3)))
{var inst_29001 = (state_29003[(2)]);var state_29003__$1 = state_29003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29003__$1,inst_29001);
} else
{if((state_val_29004 === (2)))
{var state_29003__$1 = state_29003;var statearr_29010_29068 = state_29003__$1;(statearr_29010_29068[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29004 === (9)))
{var inst_28987 = (state_29003[(7)]);var state_29003__$1 = state_29003;var statearr_29012_29069 = state_29003__$1;(statearr_29012_29069[(2)] = inst_28987);
(statearr_29012_29069[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29004 === (5)))
{var state_29003__$1 = state_29003;var statearr_29013_29070 = state_29003__$1;(statearr_29013_29070[(2)] = null);
(statearr_29013_29070[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29004 === (10)))
{var inst_28993 = (state_29003[(2)]);var inst_28994 = cljs.core.get.call(null,inst_28993,new cljs.core.Keyword(null,"type","type",1174270348));var inst_28995 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_28994,inst_28993);var state_29003__$1 = (function (){var statearr_29014 = state_29003;(statearr_29014[(8)] = inst_28995);
return statearr_29014;
})();var statearr_29015_29071 = state_29003__$1;(statearr_29015_29071[(2)] = null);
(statearr_29015_29071[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29004 === (8)))
{var inst_28987 = (state_29003[(7)]);var inst_28990 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28987);var state_29003__$1 = state_29003;var statearr_29016_29072 = state_29003__$1;(statearr_29016_29072[(2)] = inst_28990);
(statearr_29016_29072[(1)] = (10));
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
});})(c__9125__auto___29063,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___29063,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29020 = [null,null,null,null,null,null,null,null,null];(statearr_29020[(0)] = state_machine__9111__auto__);
(statearr_29020[(1)] = (1));
return statearr_29020;
});
var state_machine__9111__auto____1 = (function (state_29003){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29003);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29021){if((e29021 instanceof Object))
{var ex__9114__auto__ = e29021;var statearr_29022_29073 = state_29003;(statearr_29022_29073[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29003);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29021;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29074 = state_29003;
state_29003 = G__29074;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29003){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___29063,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_29023 = f__9126__auto__.call(null);(statearr_29023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___29063);
return statearr_29023;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___29063,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28974.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__29024_29075 = cljs.core.seq.call(null,self__.component_defs);var chunk__29025_29076 = null;var count__29026_29077 = (0);var i__29027_29078 = (0);while(true){
if((i__29027_29078 < count__29026_29077))
{var map__29028_29079 = cljs.core._nth.call(null,chunk__29025_29076,i__29027_29078);var map__29028_29080__$1 = ((cljs.core.seq_QMARK_.call(null,map__29028_29079))?cljs.core.apply.call(null,cljs.core.hash_map,map__29028_29079):map__29028_29079);var target_29081 = cljs.core.get.call(null,map__29028_29080__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29081);
{
var G__29082 = seq__29024_29075;
var G__29083 = chunk__29025_29076;
var G__29084 = count__29026_29077;
var G__29085 = (i__29027_29078 + (1));
seq__29024_29075 = G__29082;
chunk__29025_29076 = G__29083;
count__29026_29077 = G__29084;
i__29027_29078 = G__29085;
continue;
}
} else
{var temp__4126__auto___29086 = cljs.core.seq.call(null,seq__29024_29075);if(temp__4126__auto___29086)
{var seq__29024_29087__$1 = temp__4126__auto___29086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29024_29087__$1))
{var c__4408__auto___29088 = cljs.core.chunk_first.call(null,seq__29024_29087__$1);{
var G__29089 = cljs.core.chunk_rest.call(null,seq__29024_29087__$1);
var G__29090 = c__4408__auto___29088;
var G__29091 = cljs.core.count.call(null,c__4408__auto___29088);
var G__29092 = (0);
seq__29024_29075 = G__29089;
chunk__29025_29076 = G__29090;
count__29026_29077 = G__29091;
i__29027_29078 = G__29092;
continue;
}
} else
{var map__29029_29093 = cljs.core.first.call(null,seq__29024_29087__$1);var map__29029_29094__$1 = ((cljs.core.seq_QMARK_.call(null,map__29029_29093))?cljs.core.apply.call(null,cljs.core.hash_map,map__29029_29093):map__29029_29093);var target_29095 = cljs.core.get.call(null,map__29029_29094__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29095);
{
var G__29096 = cljs.core.next.call(null,seq__29024_29087__$1);
var G__29097 = null;
var G__29098 = (0);
var G__29099 = (0);
seq__29024_29075 = G__29096;
chunk__29025_29076 = G__29097;
count__29026_29077 = G__29098;
i__29027_29078 = G__29099;
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
clustermap.app.t28974.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28976){var self__ = this;
var _28976__$1 = this;return self__.meta28975;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28976,meta28975__$1){var self__ = this;
var _28976__$1 = this;return (new clustermap.app.t28974(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta28975__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t28974 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t28974(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28975){return (new clustermap.app.t28974(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28975));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t28974(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
