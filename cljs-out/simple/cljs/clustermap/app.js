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
clustermap.app.IAppService = (function (){var obj29105 = {};return obj29105;
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
clustermap.app.IAppControl = (function (){var obj29107 = {};return obj29107;
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
clustermap.app.IApp = (function (){var obj29109 = {};return obj29109;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t29166 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t29166 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta29167){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta29167 = meta29167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t29166.cljs$lang$type = true;
clustermap.app.t29166.cljs$lang$ctorStr = "clustermap.app/t29166";
clustermap.app.t29166.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t29166");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29166.prototype.clustermap$app$IApp$ = true;
clustermap.app.t29166.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29166.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29166.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29166.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29166.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29166.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29166.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t29166.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__29169_29222 = cljs.core.seq.call(null,self__.component_defs);var chunk__29170_29223 = null;var count__29171_29224 = (0);var i__29172_29225 = (0);while(true){
if((i__29172_29225 < count__29171_29224))
{var map__29173_29226 = cljs.core._nth.call(null,chunk__29170_29223,i__29172_29225);var map__29173_29227__$1 = ((cljs.core.seq_QMARK_.call(null,map__29173_29226))?cljs.core.apply.call(null,cljs.core.hash_map,map__29173_29226):map__29173_29226);var paths_29228 = cljs.core.get.call(null,map__29173_29227__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29229 = cljs.core.get.call(null,map__29173_29227__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29230 = cljs.core.get.call(null,map__29173_29227__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29231 = cljs.core.get.call(null,map__29173_29227__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29232 = cljs.core.get.call(null,map__29173_29227__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29232,f_29231,target_29230,paths_29228], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29232,f_29231,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29230,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29229,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29228);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29232,f_29231,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29230,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29229,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29228);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29232,f_29231,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29230,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29229,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29228);
}
{
var G__29233 = seq__29169_29222;
var G__29234 = chunk__29170_29223;
var G__29235 = count__29171_29224;
var G__29236 = (i__29172_29225 + (1));
seq__29169_29222 = G__29233;
chunk__29170_29223 = G__29234;
count__29171_29224 = G__29235;
i__29172_29225 = G__29236;
continue;
}
} else
{var temp__4126__auto___29237 = cljs.core.seq.call(null,seq__29169_29222);if(temp__4126__auto___29237)
{var seq__29169_29238__$1 = temp__4126__auto___29237;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29169_29238__$1))
{var c__4408__auto___29239 = cljs.core.chunk_first.call(null,seq__29169_29238__$1);{
var G__29240 = cljs.core.chunk_rest.call(null,seq__29169_29238__$1);
var G__29241 = c__4408__auto___29239;
var G__29242 = cljs.core.count.call(null,c__4408__auto___29239);
var G__29243 = (0);
seq__29169_29222 = G__29240;
chunk__29170_29223 = G__29241;
count__29171_29224 = G__29242;
i__29172_29225 = G__29243;
continue;
}
} else
{var map__29174_29244 = cljs.core.first.call(null,seq__29169_29238__$1);var map__29174_29245__$1 = ((cljs.core.seq_QMARK_.call(null,map__29174_29244))?cljs.core.apply.call(null,cljs.core.hash_map,map__29174_29244):map__29174_29244);var paths_29246 = cljs.core.get.call(null,map__29174_29245__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29247 = cljs.core.get.call(null,map__29174_29245__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29248 = cljs.core.get.call(null,map__29174_29245__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29249 = cljs.core.get.call(null,map__29174_29245__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29250 = cljs.core.get.call(null,map__29174_29245__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29250,f_29249,target_29248,paths_29246], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29250,f_29249,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29248,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29247,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29246);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29250,f_29249,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29248,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29247,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29246);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29250,f_29249,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29248,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29247,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29246);
}
{
var G__29251 = cljs.core.next.call(null,seq__29169_29238__$1);
var G__29252 = null;
var G__29253 = (0);
var G__29254 = (0);
seq__29169_29222 = G__29251;
chunk__29170_29223 = G__29252;
count__29171_29224 = G__29253;
i__29172_29225 = G__29254;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___29255 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___29255,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___29255,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_29195){var state_val_29196 = (state_29195[(1)]);if((state_val_29196 === (7)))
{var inst_29179 = (state_29195[(7)]);var inst_29179__$1 = (state_29195[(2)]);var inst_29180 = cljs.core.seq_QMARK_.call(null,inst_29179__$1);var state_29195__$1 = (function (){var statearr_29197 = state_29195;(statearr_29197[(7)] = inst_29179__$1);
return statearr_29197;
})();if(inst_29180)
{var statearr_29198_29256 = state_29195__$1;(statearr_29198_29256[(1)] = (8));
} else
{var statearr_29199_29257 = state_29195__$1;(statearr_29199_29257[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29196 === (1)))
{var state_29195__$1 = state_29195;var statearr_29200_29258 = state_29195__$1;(statearr_29200_29258[(2)] = null);
(statearr_29200_29258[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29196 === (4)))
{var state_29195__$1 = state_29195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29195__$1,(7),self__.comm);
} else
{if((state_val_29196 === (6)))
{var inst_29191 = (state_29195[(2)]);var state_29195__$1 = state_29195;var statearr_29201_29259 = state_29195__$1;(statearr_29201_29259[(2)] = inst_29191);
(statearr_29201_29259[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29196 === (3)))
{var inst_29193 = (state_29195[(2)]);var state_29195__$1 = state_29195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29195__$1,inst_29193);
} else
{if((state_val_29196 === (2)))
{var state_29195__$1 = state_29195;var statearr_29202_29260 = state_29195__$1;(statearr_29202_29260[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29196 === (9)))
{var inst_29179 = (state_29195[(7)]);var state_29195__$1 = state_29195;var statearr_29204_29261 = state_29195__$1;(statearr_29204_29261[(2)] = inst_29179);
(statearr_29204_29261[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29196 === (5)))
{var state_29195__$1 = state_29195;var statearr_29205_29262 = state_29195__$1;(statearr_29205_29262[(2)] = null);
(statearr_29205_29262[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29196 === (10)))
{var inst_29185 = (state_29195[(2)]);var inst_29186 = cljs.core.get.call(null,inst_29185,new cljs.core.Keyword(null,"type","type",1174270348));var inst_29187 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_29186,inst_29185);var state_29195__$1 = (function (){var statearr_29206 = state_29195;(statearr_29206[(8)] = inst_29187);
return statearr_29206;
})();var statearr_29207_29263 = state_29195__$1;(statearr_29207_29263[(2)] = null);
(statearr_29207_29263[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29196 === (8)))
{var inst_29179 = (state_29195[(7)]);var inst_29182 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29179);var state_29195__$1 = state_29195;var statearr_29208_29264 = state_29195__$1;(statearr_29208_29264[(2)] = inst_29182);
(statearr_29208_29264[(1)] = (10));
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
});})(c__9125__auto___29255,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___29255,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29212 = [null,null,null,null,null,null,null,null,null];(statearr_29212[(0)] = state_machine__9111__auto__);
(statearr_29212[(1)] = (1));
return statearr_29212;
});
var state_machine__9111__auto____1 = (function (state_29195){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29195);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29213){if((e29213 instanceof Object))
{var ex__9114__auto__ = e29213;var statearr_29214_29265 = state_29195;(statearr_29214_29265[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29195);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29213;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29266 = state_29195;
state_29195 = G__29266;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29195){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___29255,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_29215 = f__9126__auto__.call(null);(statearr_29215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___29255);
return statearr_29215;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___29255,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29166.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__29216_29267 = cljs.core.seq.call(null,self__.component_defs);var chunk__29217_29268 = null;var count__29218_29269 = (0);var i__29219_29270 = (0);while(true){
if((i__29219_29270 < count__29218_29269))
{var map__29220_29271 = cljs.core._nth.call(null,chunk__29217_29268,i__29219_29270);var map__29220_29272__$1 = ((cljs.core.seq_QMARK_.call(null,map__29220_29271))?cljs.core.apply.call(null,cljs.core.hash_map,map__29220_29271):map__29220_29271);var target_29273 = cljs.core.get.call(null,map__29220_29272__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29273);
{
var G__29274 = seq__29216_29267;
var G__29275 = chunk__29217_29268;
var G__29276 = count__29218_29269;
var G__29277 = (i__29219_29270 + (1));
seq__29216_29267 = G__29274;
chunk__29217_29268 = G__29275;
count__29218_29269 = G__29276;
i__29219_29270 = G__29277;
continue;
}
} else
{var temp__4126__auto___29278 = cljs.core.seq.call(null,seq__29216_29267);if(temp__4126__auto___29278)
{var seq__29216_29279__$1 = temp__4126__auto___29278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29216_29279__$1))
{var c__4408__auto___29280 = cljs.core.chunk_first.call(null,seq__29216_29279__$1);{
var G__29281 = cljs.core.chunk_rest.call(null,seq__29216_29279__$1);
var G__29282 = c__4408__auto___29280;
var G__29283 = cljs.core.count.call(null,c__4408__auto___29280);
var G__29284 = (0);
seq__29216_29267 = G__29281;
chunk__29217_29268 = G__29282;
count__29218_29269 = G__29283;
i__29219_29270 = G__29284;
continue;
}
} else
{var map__29221_29285 = cljs.core.first.call(null,seq__29216_29279__$1);var map__29221_29286__$1 = ((cljs.core.seq_QMARK_.call(null,map__29221_29285))?cljs.core.apply.call(null,cljs.core.hash_map,map__29221_29285):map__29221_29285);var target_29287 = cljs.core.get.call(null,map__29221_29286__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29287);
{
var G__29288 = cljs.core.next.call(null,seq__29216_29279__$1);
var G__29289 = null;
var G__29290 = (0);
var G__29291 = (0);
seq__29216_29267 = G__29288;
chunk__29217_29268 = G__29289;
count__29218_29269 = G__29290;
i__29219_29270 = G__29291;
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
clustermap.app.t29166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29168){var self__ = this;
var _29168__$1 = this;return self__.meta29167;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29168,meta29167__$1){var self__ = this;
var _29168__$1 = this;return (new clustermap.app.t29166(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta29167__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t29166 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t29166(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29167){return (new clustermap.app.t29166(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29167));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t29166(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
