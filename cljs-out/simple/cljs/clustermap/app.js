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
clustermap.app.IAppService = (function (){var obj27903 = {};return obj27903;
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
clustermap.app.IAppControl = (function (){var obj27905 = {};return obj27905;
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
clustermap.app.IApp = (function (){var obj27907 = {};return obj27907;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t27964 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t27964 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta27965){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta27965 = meta27965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t27964.cljs$lang$type = true;
clustermap.app.t27964.cljs$lang$ctorStr = "clustermap.app/t27964";
clustermap.app.t27964.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t27964");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27964.prototype.clustermap$app$IApp$ = true;
clustermap.app.t27964.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27964.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27964.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27964.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27964.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27964.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27964.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t27964.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__27967_28020 = cljs.core.seq.call(null,self__.component_defs);var chunk__27968_28021 = null;var count__27969_28022 = (0);var i__27970_28023 = (0);while(true){
if((i__27970_28023 < count__27969_28022))
{var map__27971_28024 = cljs.core._nth.call(null,chunk__27968_28021,i__27970_28023);var map__27971_28025__$1 = ((cljs.core.seq_QMARK_.call(null,map__27971_28024))?cljs.core.apply.call(null,cljs.core.hash_map,map__27971_28024):map__27971_28024);var paths_28026 = cljs.core.get.call(null,map__27971_28025__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28027 = cljs.core.get.call(null,map__27971_28025__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28028 = cljs.core.get.call(null,map__27971_28025__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28029 = cljs.core.get.call(null,map__27971_28025__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28030 = cljs.core.get.call(null,map__27971_28025__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28030,f_28029,target_28028,paths_28026], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28030,f_28029,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28028,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28027,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28026);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28030,f_28029,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28028,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28027,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28026);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28030,f_28029,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28028,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28027,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28026);
}
{
var G__28031 = seq__27967_28020;
var G__28032 = chunk__27968_28021;
var G__28033 = count__27969_28022;
var G__28034 = (i__27970_28023 + (1));
seq__27967_28020 = G__28031;
chunk__27968_28021 = G__28032;
count__27969_28022 = G__28033;
i__27970_28023 = G__28034;
continue;
}
} else
{var temp__4126__auto___28035 = cljs.core.seq.call(null,seq__27967_28020);if(temp__4126__auto___28035)
{var seq__27967_28036__$1 = temp__4126__auto___28035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27967_28036__$1))
{var c__4408__auto___28037 = cljs.core.chunk_first.call(null,seq__27967_28036__$1);{
var G__28038 = cljs.core.chunk_rest.call(null,seq__27967_28036__$1);
var G__28039 = c__4408__auto___28037;
var G__28040 = cljs.core.count.call(null,c__4408__auto___28037);
var G__28041 = (0);
seq__27967_28020 = G__28038;
chunk__27968_28021 = G__28039;
count__27969_28022 = G__28040;
i__27970_28023 = G__28041;
continue;
}
} else
{var map__27972_28042 = cljs.core.first.call(null,seq__27967_28036__$1);var map__27972_28043__$1 = ((cljs.core.seq_QMARK_.call(null,map__27972_28042))?cljs.core.apply.call(null,cljs.core.hash_map,map__27972_28042):map__27972_28042);var paths_28044 = cljs.core.get.call(null,map__27972_28043__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28045 = cljs.core.get.call(null,map__27972_28043__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28046 = cljs.core.get.call(null,map__27972_28043__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28047 = cljs.core.get.call(null,map__27972_28043__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28048 = cljs.core.get.call(null,map__27972_28043__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28048,f_28047,target_28046,paths_28044], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28048,f_28047,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28046,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28045,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28044);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28048,f_28047,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28046,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28045,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28044);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28048,f_28047,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28046,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28045,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28044);
}
{
var G__28049 = cljs.core.next.call(null,seq__27967_28036__$1);
var G__28050 = null;
var G__28051 = (0);
var G__28052 = (0);
seq__27967_28020 = G__28049;
chunk__27968_28021 = G__28050;
count__27969_28022 = G__28051;
i__27970_28023 = G__28052;
continue;
}
}
} else
{}
}
break;
}
var c__11517__auto___28053 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___28053,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___28053,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_27993){var state_val_27994 = (state_27993[(1)]);if((state_val_27994 === (7)))
{var inst_27977 = (state_27993[(7)]);var inst_27977__$1 = (state_27993[(2)]);var inst_27978 = cljs.core.seq_QMARK_.call(null,inst_27977__$1);var state_27993__$1 = (function (){var statearr_27995 = state_27993;(statearr_27995[(7)] = inst_27977__$1);
return statearr_27995;
})();if(inst_27978)
{var statearr_27996_28054 = state_27993__$1;(statearr_27996_28054[(1)] = (8));
} else
{var statearr_27997_28055 = state_27993__$1;(statearr_27997_28055[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27994 === (1)))
{var state_27993__$1 = state_27993;var statearr_27998_28056 = state_27993__$1;(statearr_27998_28056[(2)] = null);
(statearr_27998_28056[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27994 === (4)))
{var state_27993__$1 = state_27993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27993__$1,(7),self__.comm);
} else
{if((state_val_27994 === (6)))
{var inst_27989 = (state_27993[(2)]);var state_27993__$1 = state_27993;var statearr_27999_28057 = state_27993__$1;(statearr_27999_28057[(2)] = inst_27989);
(statearr_27999_28057[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27994 === (3)))
{var inst_27991 = (state_27993[(2)]);var state_27993__$1 = state_27993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27993__$1,inst_27991);
} else
{if((state_val_27994 === (2)))
{var state_27993__$1 = state_27993;var statearr_28000_28058 = state_27993__$1;(statearr_28000_28058[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27994 === (9)))
{var inst_27977 = (state_27993[(7)]);var state_27993__$1 = state_27993;var statearr_28002_28059 = state_27993__$1;(statearr_28002_28059[(2)] = inst_27977);
(statearr_28002_28059[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27994 === (5)))
{var state_27993__$1 = state_27993;var statearr_28003_28060 = state_27993__$1;(statearr_28003_28060[(2)] = null);
(statearr_28003_28060[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27994 === (10)))
{var inst_27983 = (state_27993[(2)]);var inst_27984 = cljs.core.get.call(null,inst_27983,new cljs.core.Keyword(null,"type","type",1174270348));var inst_27985 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_27984,inst_27983);var state_27993__$1 = (function (){var statearr_28004 = state_27993;(statearr_28004[(8)] = inst_27985);
return statearr_28004;
})();var statearr_28005_28061 = state_27993__$1;(statearr_28005_28061[(2)] = null);
(statearr_28005_28061[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27994 === (8)))
{var inst_27977 = (state_27993[(7)]);var inst_27980 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27977);var state_27993__$1 = state_27993;var statearr_28006_28062 = state_27993__$1;(statearr_28006_28062[(2)] = inst_27980);
(statearr_28006_28062[(1)] = (10));
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
});})(c__11517__auto___28053,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__11461__auto__,c__11517__auto___28053,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_28010 = [null,null,null,null,null,null,null,null,null];(statearr_28010[(0)] = state_machine__11462__auto__);
(statearr_28010[(1)] = (1));
return statearr_28010;
});
var state_machine__11462__auto____1 = (function (state_27993){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27993);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e28011){if((e28011 instanceof Object))
{var ex__11465__auto__ = e28011;var statearr_28012_28063 = state_27993;(statearr_28012_28063[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27993);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28011;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28064 = state_27993;
state_27993 = G__28064;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27993){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___28053,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__11519__auto__ = (function (){var statearr_28013 = f__11518__auto__.call(null);(statearr_28013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___28053);
return statearr_28013;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___28053,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27964.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__28014_28065 = cljs.core.seq.call(null,self__.component_defs);var chunk__28015_28066 = null;var count__28016_28067 = (0);var i__28017_28068 = (0);while(true){
if((i__28017_28068 < count__28016_28067))
{var map__28018_28069 = cljs.core._nth.call(null,chunk__28015_28066,i__28017_28068);var map__28018_28070__$1 = ((cljs.core.seq_QMARK_.call(null,map__28018_28069))?cljs.core.apply.call(null,cljs.core.hash_map,map__28018_28069):map__28018_28069);var target_28071 = cljs.core.get.call(null,map__28018_28070__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28071);
{
var G__28072 = seq__28014_28065;
var G__28073 = chunk__28015_28066;
var G__28074 = count__28016_28067;
var G__28075 = (i__28017_28068 + (1));
seq__28014_28065 = G__28072;
chunk__28015_28066 = G__28073;
count__28016_28067 = G__28074;
i__28017_28068 = G__28075;
continue;
}
} else
{var temp__4126__auto___28076 = cljs.core.seq.call(null,seq__28014_28065);if(temp__4126__auto___28076)
{var seq__28014_28077__$1 = temp__4126__auto___28076;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28014_28077__$1))
{var c__4408__auto___28078 = cljs.core.chunk_first.call(null,seq__28014_28077__$1);{
var G__28079 = cljs.core.chunk_rest.call(null,seq__28014_28077__$1);
var G__28080 = c__4408__auto___28078;
var G__28081 = cljs.core.count.call(null,c__4408__auto___28078);
var G__28082 = (0);
seq__28014_28065 = G__28079;
chunk__28015_28066 = G__28080;
count__28016_28067 = G__28081;
i__28017_28068 = G__28082;
continue;
}
} else
{var map__28019_28083 = cljs.core.first.call(null,seq__28014_28077__$1);var map__28019_28084__$1 = ((cljs.core.seq_QMARK_.call(null,map__28019_28083))?cljs.core.apply.call(null,cljs.core.hash_map,map__28019_28083):map__28019_28083);var target_28085 = cljs.core.get.call(null,map__28019_28084__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28085);
{
var G__28086 = cljs.core.next.call(null,seq__28014_28077__$1);
var G__28087 = null;
var G__28088 = (0);
var G__28089 = (0);
seq__28014_28065 = G__28086;
chunk__28015_28066 = G__28087;
count__28016_28067 = G__28088;
i__28017_28068 = G__28089;
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
clustermap.app.t27964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_27966){var self__ = this;
var _27966__$1 = this;return self__.meta27965;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_27966,meta27965__$1){var self__ = this;
var _27966__$1 = this;return (new clustermap.app.t27964(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta27965__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t27964 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t27964(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta27965){return (new clustermap.app.t27964(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta27965));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t27964(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
