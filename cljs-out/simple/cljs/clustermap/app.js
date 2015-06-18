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
clustermap.app.IAppService = (function (){var obj29100 = {};return obj29100;
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
clustermap.app.IAppControl = (function (){var obj29102 = {};return obj29102;
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
clustermap.app.IApp = (function (){var obj29104 = {};return obj29104;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t29161 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t29161 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta29162){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta29162 = meta29162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t29161.cljs$lang$type = true;
clustermap.app.t29161.cljs$lang$ctorStr = "clustermap.app/t29161";
clustermap.app.t29161.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t29161");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29161.prototype.clustermap$app$IApp$ = true;
clustermap.app.t29161.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29161.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29161.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29161.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29161.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29161.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29161.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t29161.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__29164_29217 = cljs.core.seq.call(null,self__.component_defs);var chunk__29165_29218 = null;var count__29166_29219 = (0);var i__29167_29220 = (0);while(true){
if((i__29167_29220 < count__29166_29219))
{var map__29168_29221 = cljs.core._nth.call(null,chunk__29165_29218,i__29167_29220);var map__29168_29222__$1 = ((cljs.core.seq_QMARK_.call(null,map__29168_29221))?cljs.core.apply.call(null,cljs.core.hash_map,map__29168_29221):map__29168_29221);var paths_29223 = cljs.core.get.call(null,map__29168_29222__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29224 = cljs.core.get.call(null,map__29168_29222__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29225 = cljs.core.get.call(null,map__29168_29222__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29226 = cljs.core.get.call(null,map__29168_29222__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29227 = cljs.core.get.call(null,map__29168_29222__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29227,f_29226,target_29225,paths_29223], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29227,f_29226,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29225,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29224,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29223);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29227,f_29226,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29225,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29224,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29223);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29227,f_29226,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29225,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29224,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29223);
}
{
var G__29228 = seq__29164_29217;
var G__29229 = chunk__29165_29218;
var G__29230 = count__29166_29219;
var G__29231 = (i__29167_29220 + (1));
seq__29164_29217 = G__29228;
chunk__29165_29218 = G__29229;
count__29166_29219 = G__29230;
i__29167_29220 = G__29231;
continue;
}
} else
{var temp__4126__auto___29232 = cljs.core.seq.call(null,seq__29164_29217);if(temp__4126__auto___29232)
{var seq__29164_29233__$1 = temp__4126__auto___29232;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29164_29233__$1))
{var c__4408__auto___29234 = cljs.core.chunk_first.call(null,seq__29164_29233__$1);{
var G__29235 = cljs.core.chunk_rest.call(null,seq__29164_29233__$1);
var G__29236 = c__4408__auto___29234;
var G__29237 = cljs.core.count.call(null,c__4408__auto___29234);
var G__29238 = (0);
seq__29164_29217 = G__29235;
chunk__29165_29218 = G__29236;
count__29166_29219 = G__29237;
i__29167_29220 = G__29238;
continue;
}
} else
{var map__29169_29239 = cljs.core.first.call(null,seq__29164_29233__$1);var map__29169_29240__$1 = ((cljs.core.seq_QMARK_.call(null,map__29169_29239))?cljs.core.apply.call(null,cljs.core.hash_map,map__29169_29239):map__29169_29239);var paths_29241 = cljs.core.get.call(null,map__29169_29240__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29242 = cljs.core.get.call(null,map__29169_29240__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29243 = cljs.core.get.call(null,map__29169_29240__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29244 = cljs.core.get.call(null,map__29169_29240__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29245 = cljs.core.get.call(null,map__29169_29240__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29245,f_29244,target_29243,paths_29241], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29245,f_29244,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29243,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29242,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29241);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29245,f_29244,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29243,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29242,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29241);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29245,f_29244,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29243,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29242,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29241);
}
{
var G__29246 = cljs.core.next.call(null,seq__29164_29233__$1);
var G__29247 = null;
var G__29248 = (0);
var G__29249 = (0);
seq__29164_29217 = G__29246;
chunk__29165_29218 = G__29247;
count__29166_29219 = G__29248;
i__29167_29220 = G__29249;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___29250 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___29250,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___29250,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_29190){var state_val_29191 = (state_29190[(1)]);if((state_val_29191 === (7)))
{var inst_29174 = (state_29190[(7)]);var inst_29174__$1 = (state_29190[(2)]);var inst_29175 = cljs.core.seq_QMARK_.call(null,inst_29174__$1);var state_29190__$1 = (function (){var statearr_29192 = state_29190;(statearr_29192[(7)] = inst_29174__$1);
return statearr_29192;
})();if(inst_29175)
{var statearr_29193_29251 = state_29190__$1;(statearr_29193_29251[(1)] = (8));
} else
{var statearr_29194_29252 = state_29190__$1;(statearr_29194_29252[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29191 === (1)))
{var state_29190__$1 = state_29190;var statearr_29195_29253 = state_29190__$1;(statearr_29195_29253[(2)] = null);
(statearr_29195_29253[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29191 === (4)))
{var state_29190__$1 = state_29190;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29190__$1,(7),self__.comm);
} else
{if((state_val_29191 === (6)))
{var inst_29186 = (state_29190[(2)]);var state_29190__$1 = state_29190;var statearr_29196_29254 = state_29190__$1;(statearr_29196_29254[(2)] = inst_29186);
(statearr_29196_29254[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29191 === (3)))
{var inst_29188 = (state_29190[(2)]);var state_29190__$1 = state_29190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29190__$1,inst_29188);
} else
{if((state_val_29191 === (2)))
{var state_29190__$1 = state_29190;var statearr_29197_29255 = state_29190__$1;(statearr_29197_29255[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29191 === (9)))
{var inst_29174 = (state_29190[(7)]);var state_29190__$1 = state_29190;var statearr_29199_29256 = state_29190__$1;(statearr_29199_29256[(2)] = inst_29174);
(statearr_29199_29256[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29191 === (5)))
{var state_29190__$1 = state_29190;var statearr_29200_29257 = state_29190__$1;(statearr_29200_29257[(2)] = null);
(statearr_29200_29257[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29191 === (10)))
{var inst_29180 = (state_29190[(2)]);var inst_29181 = cljs.core.get.call(null,inst_29180,new cljs.core.Keyword(null,"type","type",1174270348));var inst_29182 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_29181,inst_29180);var state_29190__$1 = (function (){var statearr_29201 = state_29190;(statearr_29201[(8)] = inst_29182);
return statearr_29201;
})();var statearr_29202_29258 = state_29190__$1;(statearr_29202_29258[(2)] = null);
(statearr_29202_29258[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29191 === (8)))
{var inst_29174 = (state_29190[(7)]);var inst_29177 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29174);var state_29190__$1 = state_29190;var statearr_29203_29259 = state_29190__$1;(statearr_29203_29259[(2)] = inst_29177);
(statearr_29203_29259[(1)] = (10));
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
});})(c__9125__auto___29250,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___29250,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29207 = [null,null,null,null,null,null,null,null,null];(statearr_29207[(0)] = state_machine__9111__auto__);
(statearr_29207[(1)] = (1));
return statearr_29207;
});
var state_machine__9111__auto____1 = (function (state_29190){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29190);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29208){if((e29208 instanceof Object))
{var ex__9114__auto__ = e29208;var statearr_29209_29260 = state_29190;(statearr_29209_29260[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29190);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29208;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29261 = state_29190;
state_29190 = G__29261;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29190){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___29250,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_29210 = f__9126__auto__.call(null);(statearr_29210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___29250);
return statearr_29210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___29250,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29161.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__29211_29262 = cljs.core.seq.call(null,self__.component_defs);var chunk__29212_29263 = null;var count__29213_29264 = (0);var i__29214_29265 = (0);while(true){
if((i__29214_29265 < count__29213_29264))
{var map__29215_29266 = cljs.core._nth.call(null,chunk__29212_29263,i__29214_29265);var map__29215_29267__$1 = ((cljs.core.seq_QMARK_.call(null,map__29215_29266))?cljs.core.apply.call(null,cljs.core.hash_map,map__29215_29266):map__29215_29266);var target_29268 = cljs.core.get.call(null,map__29215_29267__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29268);
{
var G__29269 = seq__29211_29262;
var G__29270 = chunk__29212_29263;
var G__29271 = count__29213_29264;
var G__29272 = (i__29214_29265 + (1));
seq__29211_29262 = G__29269;
chunk__29212_29263 = G__29270;
count__29213_29264 = G__29271;
i__29214_29265 = G__29272;
continue;
}
} else
{var temp__4126__auto___29273 = cljs.core.seq.call(null,seq__29211_29262);if(temp__4126__auto___29273)
{var seq__29211_29274__$1 = temp__4126__auto___29273;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29211_29274__$1))
{var c__4408__auto___29275 = cljs.core.chunk_first.call(null,seq__29211_29274__$1);{
var G__29276 = cljs.core.chunk_rest.call(null,seq__29211_29274__$1);
var G__29277 = c__4408__auto___29275;
var G__29278 = cljs.core.count.call(null,c__4408__auto___29275);
var G__29279 = (0);
seq__29211_29262 = G__29276;
chunk__29212_29263 = G__29277;
count__29213_29264 = G__29278;
i__29214_29265 = G__29279;
continue;
}
} else
{var map__29216_29280 = cljs.core.first.call(null,seq__29211_29274__$1);var map__29216_29281__$1 = ((cljs.core.seq_QMARK_.call(null,map__29216_29280))?cljs.core.apply.call(null,cljs.core.hash_map,map__29216_29280):map__29216_29280);var target_29282 = cljs.core.get.call(null,map__29216_29281__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29282);
{
var G__29283 = cljs.core.next.call(null,seq__29211_29274__$1);
var G__29284 = null;
var G__29285 = (0);
var G__29286 = (0);
seq__29211_29262 = G__29283;
chunk__29212_29263 = G__29284;
count__29213_29264 = G__29285;
i__29214_29265 = G__29286;
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
clustermap.app.t29161.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29163){var self__ = this;
var _29163__$1 = this;return self__.meta29162;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29163,meta29162__$1){var self__ = this;
var _29163__$1 = this;return (new clustermap.app.t29161(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta29162__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t29161 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t29161(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29162){return (new clustermap.app.t29161(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29162));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t29161(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
