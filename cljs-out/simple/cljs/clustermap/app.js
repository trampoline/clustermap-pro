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
clustermap.app.IAppService = (function (){var obj28976 = {};return obj28976;
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
clustermap.app.IAppControl = (function (){var obj28978 = {};return obj28978;
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
clustermap.app.IApp = (function (){var obj28980 = {};return obj28980;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t29037 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t29037 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta29038){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta29038 = meta29038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t29037.cljs$lang$type = true;
clustermap.app.t29037.cljs$lang$ctorStr = "clustermap.app/t29037";
clustermap.app.t29037.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t29037");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29037.prototype.clustermap$app$IApp$ = true;
clustermap.app.t29037.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29037.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29037.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29037.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29037.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29037.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29037.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t29037.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__29040_29093 = cljs.core.seq.call(null,self__.component_defs);var chunk__29041_29094 = null;var count__29042_29095 = (0);var i__29043_29096 = (0);while(true){
if((i__29043_29096 < count__29042_29095))
{var map__29044_29097 = cljs.core._nth.call(null,chunk__29041_29094,i__29043_29096);var map__29044_29098__$1 = ((cljs.core.seq_QMARK_.call(null,map__29044_29097))?cljs.core.apply.call(null,cljs.core.hash_map,map__29044_29097):map__29044_29097);var paths_29099 = cljs.core.get.call(null,map__29044_29098__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29100 = cljs.core.get.call(null,map__29044_29098__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29101 = cljs.core.get.call(null,map__29044_29098__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29102 = cljs.core.get.call(null,map__29044_29098__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29103 = cljs.core.get.call(null,map__29044_29098__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29103,f_29102,target_29101,paths_29099], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29103,f_29102,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29101,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29100,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29099);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29103,f_29102,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29101,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29100,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29099);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29103,f_29102,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29101,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29100,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29099);
}
{
var G__29104 = seq__29040_29093;
var G__29105 = chunk__29041_29094;
var G__29106 = count__29042_29095;
var G__29107 = (i__29043_29096 + (1));
seq__29040_29093 = G__29104;
chunk__29041_29094 = G__29105;
count__29042_29095 = G__29106;
i__29043_29096 = G__29107;
continue;
}
} else
{var temp__4126__auto___29108 = cljs.core.seq.call(null,seq__29040_29093);if(temp__4126__auto___29108)
{var seq__29040_29109__$1 = temp__4126__auto___29108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29040_29109__$1))
{var c__4408__auto___29110 = cljs.core.chunk_first.call(null,seq__29040_29109__$1);{
var G__29111 = cljs.core.chunk_rest.call(null,seq__29040_29109__$1);
var G__29112 = c__4408__auto___29110;
var G__29113 = cljs.core.count.call(null,c__4408__auto___29110);
var G__29114 = (0);
seq__29040_29093 = G__29111;
chunk__29041_29094 = G__29112;
count__29042_29095 = G__29113;
i__29043_29096 = G__29114;
continue;
}
} else
{var map__29045_29115 = cljs.core.first.call(null,seq__29040_29109__$1);var map__29045_29116__$1 = ((cljs.core.seq_QMARK_.call(null,map__29045_29115))?cljs.core.apply.call(null,cljs.core.hash_map,map__29045_29115):map__29045_29115);var paths_29117 = cljs.core.get.call(null,map__29045_29116__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29118 = cljs.core.get.call(null,map__29045_29116__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29119 = cljs.core.get.call(null,map__29045_29116__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29120 = cljs.core.get.call(null,map__29045_29116__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29121 = cljs.core.get.call(null,map__29045_29116__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29121,f_29120,target_29119,paths_29117], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29121,f_29120,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29119,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29118,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29117);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29121,f_29120,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29119,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29118,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29117);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29121,f_29120,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29119,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29118,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29117);
}
{
var G__29122 = cljs.core.next.call(null,seq__29040_29109__$1);
var G__29123 = null;
var G__29124 = (0);
var G__29125 = (0);
seq__29040_29093 = G__29122;
chunk__29041_29094 = G__29123;
count__29042_29095 = G__29124;
i__29043_29096 = G__29125;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___29126 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___29126,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___29126,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_29066){var state_val_29067 = (state_29066[(1)]);if((state_val_29067 === (7)))
{var inst_29050 = (state_29066[(7)]);var inst_29050__$1 = (state_29066[(2)]);var inst_29051 = cljs.core.seq_QMARK_.call(null,inst_29050__$1);var state_29066__$1 = (function (){var statearr_29068 = state_29066;(statearr_29068[(7)] = inst_29050__$1);
return statearr_29068;
})();if(inst_29051)
{var statearr_29069_29127 = state_29066__$1;(statearr_29069_29127[(1)] = (8));
} else
{var statearr_29070_29128 = state_29066__$1;(statearr_29070_29128[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29067 === (1)))
{var state_29066__$1 = state_29066;var statearr_29071_29129 = state_29066__$1;(statearr_29071_29129[(2)] = null);
(statearr_29071_29129[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29067 === (4)))
{var state_29066__$1 = state_29066;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29066__$1,(7),self__.comm);
} else
{if((state_val_29067 === (6)))
{var inst_29062 = (state_29066[(2)]);var state_29066__$1 = state_29066;var statearr_29072_29130 = state_29066__$1;(statearr_29072_29130[(2)] = inst_29062);
(statearr_29072_29130[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29067 === (3)))
{var inst_29064 = (state_29066[(2)]);var state_29066__$1 = state_29066;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29066__$1,inst_29064);
} else
{if((state_val_29067 === (2)))
{var state_29066__$1 = state_29066;var statearr_29073_29131 = state_29066__$1;(statearr_29073_29131[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29067 === (9)))
{var inst_29050 = (state_29066[(7)]);var state_29066__$1 = state_29066;var statearr_29075_29132 = state_29066__$1;(statearr_29075_29132[(2)] = inst_29050);
(statearr_29075_29132[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29067 === (5)))
{var state_29066__$1 = state_29066;var statearr_29076_29133 = state_29066__$1;(statearr_29076_29133[(2)] = null);
(statearr_29076_29133[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29067 === (10)))
{var inst_29056 = (state_29066[(2)]);var inst_29057 = cljs.core.get.call(null,inst_29056,new cljs.core.Keyword(null,"type","type",1174270348));var inst_29058 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_29057,inst_29056);var state_29066__$1 = (function (){var statearr_29077 = state_29066;(statearr_29077[(8)] = inst_29058);
return statearr_29077;
})();var statearr_29078_29134 = state_29066__$1;(statearr_29078_29134[(2)] = null);
(statearr_29078_29134[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29067 === (8)))
{var inst_29050 = (state_29066[(7)]);var inst_29053 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29050);var state_29066__$1 = state_29066;var statearr_29079_29135 = state_29066__$1;(statearr_29079_29135[(2)] = inst_29053);
(statearr_29079_29135[(1)] = (10));
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
});})(c__9125__auto___29126,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___29126,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29083 = [null,null,null,null,null,null,null,null,null];(statearr_29083[(0)] = state_machine__9111__auto__);
(statearr_29083[(1)] = (1));
return statearr_29083;
});
var state_machine__9111__auto____1 = (function (state_29066){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29066);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29084){if((e29084 instanceof Object))
{var ex__9114__auto__ = e29084;var statearr_29085_29136 = state_29066;(statearr_29085_29136[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29066);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29084;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29137 = state_29066;
state_29066 = G__29137;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29066){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___29126,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_29086 = f__9126__auto__.call(null);(statearr_29086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___29126);
return statearr_29086;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___29126,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29037.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__29087_29138 = cljs.core.seq.call(null,self__.component_defs);var chunk__29088_29139 = null;var count__29089_29140 = (0);var i__29090_29141 = (0);while(true){
if((i__29090_29141 < count__29089_29140))
{var map__29091_29142 = cljs.core._nth.call(null,chunk__29088_29139,i__29090_29141);var map__29091_29143__$1 = ((cljs.core.seq_QMARK_.call(null,map__29091_29142))?cljs.core.apply.call(null,cljs.core.hash_map,map__29091_29142):map__29091_29142);var target_29144 = cljs.core.get.call(null,map__29091_29143__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29144);
{
var G__29145 = seq__29087_29138;
var G__29146 = chunk__29088_29139;
var G__29147 = count__29089_29140;
var G__29148 = (i__29090_29141 + (1));
seq__29087_29138 = G__29145;
chunk__29088_29139 = G__29146;
count__29089_29140 = G__29147;
i__29090_29141 = G__29148;
continue;
}
} else
{var temp__4126__auto___29149 = cljs.core.seq.call(null,seq__29087_29138);if(temp__4126__auto___29149)
{var seq__29087_29150__$1 = temp__4126__auto___29149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29087_29150__$1))
{var c__4408__auto___29151 = cljs.core.chunk_first.call(null,seq__29087_29150__$1);{
var G__29152 = cljs.core.chunk_rest.call(null,seq__29087_29150__$1);
var G__29153 = c__4408__auto___29151;
var G__29154 = cljs.core.count.call(null,c__4408__auto___29151);
var G__29155 = (0);
seq__29087_29138 = G__29152;
chunk__29088_29139 = G__29153;
count__29089_29140 = G__29154;
i__29090_29141 = G__29155;
continue;
}
} else
{var map__29092_29156 = cljs.core.first.call(null,seq__29087_29150__$1);var map__29092_29157__$1 = ((cljs.core.seq_QMARK_.call(null,map__29092_29156))?cljs.core.apply.call(null,cljs.core.hash_map,map__29092_29156):map__29092_29156);var target_29158 = cljs.core.get.call(null,map__29092_29157__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29158);
{
var G__29159 = cljs.core.next.call(null,seq__29087_29150__$1);
var G__29160 = null;
var G__29161 = (0);
var G__29162 = (0);
seq__29087_29138 = G__29159;
chunk__29088_29139 = G__29160;
count__29089_29140 = G__29161;
i__29090_29141 = G__29162;
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
clustermap.app.t29037.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29039){var self__ = this;
var _29039__$1 = this;return self__.meta29038;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29039,meta29038__$1){var self__ = this;
var _29039__$1 = this;return (new clustermap.app.t29037(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta29038__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t29037 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t29037(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29038){return (new clustermap.app.t29037(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29038));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t29037(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
