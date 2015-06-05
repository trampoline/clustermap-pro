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
clustermap.app.IAppService = (function (){var obj28177 = {};return obj28177;
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
clustermap.app.IAppControl = (function (){var obj28179 = {};return obj28179;
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
clustermap.app.IApp = (function (){var obj28181 = {};return obj28181;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t28238 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t28238 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta28239){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta28239 = meta28239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t28238.cljs$lang$type = true;
clustermap.app.t28238.cljs$lang$ctorStr = "clustermap.app/t28238";
clustermap.app.t28238.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t28238");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28238.prototype.clustermap$app$IApp$ = true;
clustermap.app.t28238.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28238.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28238.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28238.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28238.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28238.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28238.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t28238.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__28241_28294 = cljs.core.seq.call(null,self__.component_defs);var chunk__28242_28295 = null;var count__28243_28296 = (0);var i__28244_28297 = (0);while(true){
if((i__28244_28297 < count__28243_28296))
{var map__28245_28298 = cljs.core._nth.call(null,chunk__28242_28295,i__28244_28297);var map__28245_28299__$1 = ((cljs.core.seq_QMARK_.call(null,map__28245_28298))?cljs.core.apply.call(null,cljs.core.hash_map,map__28245_28298):map__28245_28298);var paths_28300 = cljs.core.get.call(null,map__28245_28299__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28301 = cljs.core.get.call(null,map__28245_28299__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28302 = cljs.core.get.call(null,map__28245_28299__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28303 = cljs.core.get.call(null,map__28245_28299__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28304 = cljs.core.get.call(null,map__28245_28299__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28304,f_28303,target_28302,paths_28300], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28304,f_28303,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28302,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28301,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28300);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28304,f_28303,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28302,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28301,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28300);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28304,f_28303,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28302,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28301,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28300);
}
{
var G__28305 = seq__28241_28294;
var G__28306 = chunk__28242_28295;
var G__28307 = count__28243_28296;
var G__28308 = (i__28244_28297 + (1));
seq__28241_28294 = G__28305;
chunk__28242_28295 = G__28306;
count__28243_28296 = G__28307;
i__28244_28297 = G__28308;
continue;
}
} else
{var temp__4126__auto___28309 = cljs.core.seq.call(null,seq__28241_28294);if(temp__4126__auto___28309)
{var seq__28241_28310__$1 = temp__4126__auto___28309;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28241_28310__$1))
{var c__4408__auto___28311 = cljs.core.chunk_first.call(null,seq__28241_28310__$1);{
var G__28312 = cljs.core.chunk_rest.call(null,seq__28241_28310__$1);
var G__28313 = c__4408__auto___28311;
var G__28314 = cljs.core.count.call(null,c__4408__auto___28311);
var G__28315 = (0);
seq__28241_28294 = G__28312;
chunk__28242_28295 = G__28313;
count__28243_28296 = G__28314;
i__28244_28297 = G__28315;
continue;
}
} else
{var map__28246_28316 = cljs.core.first.call(null,seq__28241_28310__$1);var map__28246_28317__$1 = ((cljs.core.seq_QMARK_.call(null,map__28246_28316))?cljs.core.apply.call(null,cljs.core.hash_map,map__28246_28316):map__28246_28316);var paths_28318 = cljs.core.get.call(null,map__28246_28317__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28319 = cljs.core.get.call(null,map__28246_28317__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28320 = cljs.core.get.call(null,map__28246_28317__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28321 = cljs.core.get.call(null,map__28246_28317__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28322 = cljs.core.get.call(null,map__28246_28317__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28322,f_28321,target_28320,paths_28318], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28322,f_28321,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28320,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28319,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28318);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28322,f_28321,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28320,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28319,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28318);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28322,f_28321,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28320,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28319,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28318);
}
{
var G__28323 = cljs.core.next.call(null,seq__28241_28310__$1);
var G__28324 = null;
var G__28325 = (0);
var G__28326 = (0);
seq__28241_28294 = G__28323;
chunk__28242_28295 = G__28324;
count__28243_28296 = G__28325;
i__28244_28297 = G__28326;
continue;
}
}
} else
{}
}
break;
}
var c__11154__auto___28327 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___28327,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___28327,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_28267){var state_val_28268 = (state_28267[(1)]);if((state_val_28268 === (7)))
{var inst_28251 = (state_28267[(7)]);var inst_28251__$1 = (state_28267[(2)]);var inst_28252 = cljs.core.seq_QMARK_.call(null,inst_28251__$1);var state_28267__$1 = (function (){var statearr_28269 = state_28267;(statearr_28269[(7)] = inst_28251__$1);
return statearr_28269;
})();if(inst_28252)
{var statearr_28270_28328 = state_28267__$1;(statearr_28270_28328[(1)] = (8));
} else
{var statearr_28271_28329 = state_28267__$1;(statearr_28271_28329[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28268 === (1)))
{var state_28267__$1 = state_28267;var statearr_28272_28330 = state_28267__$1;(statearr_28272_28330[(2)] = null);
(statearr_28272_28330[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28268 === (4)))
{var state_28267__$1 = state_28267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28267__$1,(7),self__.comm);
} else
{if((state_val_28268 === (6)))
{var inst_28263 = (state_28267[(2)]);var state_28267__$1 = state_28267;var statearr_28273_28331 = state_28267__$1;(statearr_28273_28331[(2)] = inst_28263);
(statearr_28273_28331[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28268 === (3)))
{var inst_28265 = (state_28267[(2)]);var state_28267__$1 = state_28267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28267__$1,inst_28265);
} else
{if((state_val_28268 === (2)))
{var state_28267__$1 = state_28267;var statearr_28274_28332 = state_28267__$1;(statearr_28274_28332[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28268 === (9)))
{var inst_28251 = (state_28267[(7)]);var state_28267__$1 = state_28267;var statearr_28276_28333 = state_28267__$1;(statearr_28276_28333[(2)] = inst_28251);
(statearr_28276_28333[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28268 === (5)))
{var state_28267__$1 = state_28267;var statearr_28277_28334 = state_28267__$1;(statearr_28277_28334[(2)] = null);
(statearr_28277_28334[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28268 === (10)))
{var inst_28257 = (state_28267[(2)]);var inst_28258 = cljs.core.get.call(null,inst_28257,new cljs.core.Keyword(null,"type","type",1174270348));var inst_28259 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_28258,inst_28257);var state_28267__$1 = (function (){var statearr_28278 = state_28267;(statearr_28278[(8)] = inst_28259);
return statearr_28278;
})();var statearr_28279_28335 = state_28267__$1;(statearr_28279_28335[(2)] = null);
(statearr_28279_28335[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28268 === (8)))
{var inst_28251 = (state_28267[(7)]);var inst_28254 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28251);var state_28267__$1 = state_28267;var statearr_28280_28336 = state_28267__$1;(statearr_28280_28336[(2)] = inst_28254);
(statearr_28280_28336[(1)] = (10));
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
});})(c__11154__auto___28327,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__11098__auto__,c__11154__auto___28327,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_28284 = [null,null,null,null,null,null,null,null,null];(statearr_28284[(0)] = state_machine__11099__auto__);
(statearr_28284[(1)] = (1));
return statearr_28284;
});
var state_machine__11099__auto____1 = (function (state_28267){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_28267);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e28285){if((e28285 instanceof Object))
{var ex__11102__auto__ = e28285;var statearr_28286_28337 = state_28267;(statearr_28286_28337[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28267);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28285;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28338 = state_28267;
state_28267 = G__28338;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_28267){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_28267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___28327,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__11156__auto__ = (function (){var statearr_28287 = f__11155__auto__.call(null);(statearr_28287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___28327);
return statearr_28287;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___28327,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28238.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__28288_28339 = cljs.core.seq.call(null,self__.component_defs);var chunk__28289_28340 = null;var count__28290_28341 = (0);var i__28291_28342 = (0);while(true){
if((i__28291_28342 < count__28290_28341))
{var map__28292_28343 = cljs.core._nth.call(null,chunk__28289_28340,i__28291_28342);var map__28292_28344__$1 = ((cljs.core.seq_QMARK_.call(null,map__28292_28343))?cljs.core.apply.call(null,cljs.core.hash_map,map__28292_28343):map__28292_28343);var target_28345 = cljs.core.get.call(null,map__28292_28344__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28345);
{
var G__28346 = seq__28288_28339;
var G__28347 = chunk__28289_28340;
var G__28348 = count__28290_28341;
var G__28349 = (i__28291_28342 + (1));
seq__28288_28339 = G__28346;
chunk__28289_28340 = G__28347;
count__28290_28341 = G__28348;
i__28291_28342 = G__28349;
continue;
}
} else
{var temp__4126__auto___28350 = cljs.core.seq.call(null,seq__28288_28339);if(temp__4126__auto___28350)
{var seq__28288_28351__$1 = temp__4126__auto___28350;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28288_28351__$1))
{var c__4408__auto___28352 = cljs.core.chunk_first.call(null,seq__28288_28351__$1);{
var G__28353 = cljs.core.chunk_rest.call(null,seq__28288_28351__$1);
var G__28354 = c__4408__auto___28352;
var G__28355 = cljs.core.count.call(null,c__4408__auto___28352);
var G__28356 = (0);
seq__28288_28339 = G__28353;
chunk__28289_28340 = G__28354;
count__28290_28341 = G__28355;
i__28291_28342 = G__28356;
continue;
}
} else
{var map__28293_28357 = cljs.core.first.call(null,seq__28288_28351__$1);var map__28293_28358__$1 = ((cljs.core.seq_QMARK_.call(null,map__28293_28357))?cljs.core.apply.call(null,cljs.core.hash_map,map__28293_28357):map__28293_28357);var target_28359 = cljs.core.get.call(null,map__28293_28358__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28359);
{
var G__28360 = cljs.core.next.call(null,seq__28288_28351__$1);
var G__28361 = null;
var G__28362 = (0);
var G__28363 = (0);
seq__28288_28339 = G__28360;
chunk__28289_28340 = G__28361;
count__28290_28341 = G__28362;
i__28291_28342 = G__28363;
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
clustermap.app.t28238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28240){var self__ = this;
var _28240__$1 = this;return self__.meta28239;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28240,meta28239__$1){var self__ = this;
var _28240__$1 = this;return (new clustermap.app.t28238(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta28239__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t28238 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t28238(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28239){return (new clustermap.app.t28238(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28239));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t28238(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
