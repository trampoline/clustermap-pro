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
clustermap.app.IAppService = (function (){var obj29047 = {};return obj29047;
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
clustermap.app.IAppControl = (function (){var obj29049 = {};return obj29049;
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
clustermap.app.IApp = (function (){var obj29051 = {};return obj29051;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t29108 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t29108 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta29109){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta29109 = meta29109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t29108.cljs$lang$type = true;
clustermap.app.t29108.cljs$lang$ctorStr = "clustermap.app/t29108";
clustermap.app.t29108.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t29108");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29108.prototype.clustermap$app$IApp$ = true;
clustermap.app.t29108.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29108.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29108.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29108.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29108.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29108.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29108.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t29108.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__29111_29164 = cljs.core.seq.call(null,self__.component_defs);var chunk__29112_29165 = null;var count__29113_29166 = (0);var i__29114_29167 = (0);while(true){
if((i__29114_29167 < count__29113_29166))
{var map__29115_29168 = cljs.core._nth.call(null,chunk__29112_29165,i__29114_29167);var map__29115_29169__$1 = ((cljs.core.seq_QMARK_.call(null,map__29115_29168))?cljs.core.apply.call(null,cljs.core.hash_map,map__29115_29168):map__29115_29168);var paths_29170 = cljs.core.get.call(null,map__29115_29169__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29171 = cljs.core.get.call(null,map__29115_29169__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29172 = cljs.core.get.call(null,map__29115_29169__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29173 = cljs.core.get.call(null,map__29115_29169__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29174 = cljs.core.get.call(null,map__29115_29169__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29174,f_29173,target_29172,paths_29170], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29174,f_29173,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29172,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29171,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29170);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29174,f_29173,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29172,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29171,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29170);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29174,f_29173,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29172,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29171,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29170);
}
{
var G__29175 = seq__29111_29164;
var G__29176 = chunk__29112_29165;
var G__29177 = count__29113_29166;
var G__29178 = (i__29114_29167 + (1));
seq__29111_29164 = G__29175;
chunk__29112_29165 = G__29176;
count__29113_29166 = G__29177;
i__29114_29167 = G__29178;
continue;
}
} else
{var temp__4126__auto___29179 = cljs.core.seq.call(null,seq__29111_29164);if(temp__4126__auto___29179)
{var seq__29111_29180__$1 = temp__4126__auto___29179;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29111_29180__$1))
{var c__4408__auto___29181 = cljs.core.chunk_first.call(null,seq__29111_29180__$1);{
var G__29182 = cljs.core.chunk_rest.call(null,seq__29111_29180__$1);
var G__29183 = c__4408__auto___29181;
var G__29184 = cljs.core.count.call(null,c__4408__auto___29181);
var G__29185 = (0);
seq__29111_29164 = G__29182;
chunk__29112_29165 = G__29183;
count__29113_29166 = G__29184;
i__29114_29167 = G__29185;
continue;
}
} else
{var map__29116_29186 = cljs.core.first.call(null,seq__29111_29180__$1);var map__29116_29187__$1 = ((cljs.core.seq_QMARK_.call(null,map__29116_29186))?cljs.core.apply.call(null,cljs.core.hash_map,map__29116_29186):map__29116_29186);var paths_29188 = cljs.core.get.call(null,map__29116_29187__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29189 = cljs.core.get.call(null,map__29116_29187__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29190 = cljs.core.get.call(null,map__29116_29187__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29191 = cljs.core.get.call(null,map__29116_29187__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29192 = cljs.core.get.call(null,map__29116_29187__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29192,f_29191,target_29190,paths_29188], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29192,f_29191,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29190,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29189,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29188);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29192,f_29191,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29190,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29189,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29188);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29192,f_29191,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29190,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29189,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29188);
}
{
var G__29193 = cljs.core.next.call(null,seq__29111_29180__$1);
var G__29194 = null;
var G__29195 = (0);
var G__29196 = (0);
seq__29111_29164 = G__29193;
chunk__29112_29165 = G__29194;
count__29113_29166 = G__29195;
i__29114_29167 = G__29196;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___29197 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___29197,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___29197,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_29137){var state_val_29138 = (state_29137[(1)]);if((state_val_29138 === (7)))
{var inst_29121 = (state_29137[(7)]);var inst_29121__$1 = (state_29137[(2)]);var inst_29122 = cljs.core.seq_QMARK_.call(null,inst_29121__$1);var state_29137__$1 = (function (){var statearr_29139 = state_29137;(statearr_29139[(7)] = inst_29121__$1);
return statearr_29139;
})();if(inst_29122)
{var statearr_29140_29198 = state_29137__$1;(statearr_29140_29198[(1)] = (8));
} else
{var statearr_29141_29199 = state_29137__$1;(statearr_29141_29199[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (1)))
{var state_29137__$1 = state_29137;var statearr_29142_29200 = state_29137__$1;(statearr_29142_29200[(2)] = null);
(statearr_29142_29200[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (4)))
{var state_29137__$1 = state_29137;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29137__$1,(7),self__.comm);
} else
{if((state_val_29138 === (6)))
{var inst_29133 = (state_29137[(2)]);var state_29137__$1 = state_29137;var statearr_29143_29201 = state_29137__$1;(statearr_29143_29201[(2)] = inst_29133);
(statearr_29143_29201[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (3)))
{var inst_29135 = (state_29137[(2)]);var state_29137__$1 = state_29137;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29137__$1,inst_29135);
} else
{if((state_val_29138 === (2)))
{var state_29137__$1 = state_29137;var statearr_29144_29202 = state_29137__$1;(statearr_29144_29202[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (9)))
{var inst_29121 = (state_29137[(7)]);var state_29137__$1 = state_29137;var statearr_29146_29203 = state_29137__$1;(statearr_29146_29203[(2)] = inst_29121);
(statearr_29146_29203[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (5)))
{var state_29137__$1 = state_29137;var statearr_29147_29204 = state_29137__$1;(statearr_29147_29204[(2)] = null);
(statearr_29147_29204[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (10)))
{var inst_29127 = (state_29137[(2)]);var inst_29128 = cljs.core.get.call(null,inst_29127,new cljs.core.Keyword(null,"type","type",1174270348));var inst_29129 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_29128,inst_29127);var state_29137__$1 = (function (){var statearr_29148 = state_29137;(statearr_29148[(8)] = inst_29129);
return statearr_29148;
})();var statearr_29149_29205 = state_29137__$1;(statearr_29149_29205[(2)] = null);
(statearr_29149_29205[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (8)))
{var inst_29121 = (state_29137[(7)]);var inst_29124 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29121);var state_29137__$1 = state_29137;var statearr_29150_29206 = state_29137__$1;(statearr_29150_29206[(2)] = inst_29124);
(statearr_29150_29206[(1)] = (10));
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
});})(c__9125__auto___29197,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___29197,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29154 = [null,null,null,null,null,null,null,null,null];(statearr_29154[(0)] = state_machine__9111__auto__);
(statearr_29154[(1)] = (1));
return statearr_29154;
});
var state_machine__9111__auto____1 = (function (state_29137){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29137);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29155){if((e29155 instanceof Object))
{var ex__9114__auto__ = e29155;var statearr_29156_29207 = state_29137;(statearr_29156_29207[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29137);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29155;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29208 = state_29137;
state_29137 = G__29208;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29137){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___29197,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_29157 = f__9126__auto__.call(null);(statearr_29157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___29197);
return statearr_29157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___29197,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29108.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__29158_29209 = cljs.core.seq.call(null,self__.component_defs);var chunk__29159_29210 = null;var count__29160_29211 = (0);var i__29161_29212 = (0);while(true){
if((i__29161_29212 < count__29160_29211))
{var map__29162_29213 = cljs.core._nth.call(null,chunk__29159_29210,i__29161_29212);var map__29162_29214__$1 = ((cljs.core.seq_QMARK_.call(null,map__29162_29213))?cljs.core.apply.call(null,cljs.core.hash_map,map__29162_29213):map__29162_29213);var target_29215 = cljs.core.get.call(null,map__29162_29214__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29215);
{
var G__29216 = seq__29158_29209;
var G__29217 = chunk__29159_29210;
var G__29218 = count__29160_29211;
var G__29219 = (i__29161_29212 + (1));
seq__29158_29209 = G__29216;
chunk__29159_29210 = G__29217;
count__29160_29211 = G__29218;
i__29161_29212 = G__29219;
continue;
}
} else
{var temp__4126__auto___29220 = cljs.core.seq.call(null,seq__29158_29209);if(temp__4126__auto___29220)
{var seq__29158_29221__$1 = temp__4126__auto___29220;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29158_29221__$1))
{var c__4408__auto___29222 = cljs.core.chunk_first.call(null,seq__29158_29221__$1);{
var G__29223 = cljs.core.chunk_rest.call(null,seq__29158_29221__$1);
var G__29224 = c__4408__auto___29222;
var G__29225 = cljs.core.count.call(null,c__4408__auto___29222);
var G__29226 = (0);
seq__29158_29209 = G__29223;
chunk__29159_29210 = G__29224;
count__29160_29211 = G__29225;
i__29161_29212 = G__29226;
continue;
}
} else
{var map__29163_29227 = cljs.core.first.call(null,seq__29158_29221__$1);var map__29163_29228__$1 = ((cljs.core.seq_QMARK_.call(null,map__29163_29227))?cljs.core.apply.call(null,cljs.core.hash_map,map__29163_29227):map__29163_29227);var target_29229 = cljs.core.get.call(null,map__29163_29228__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29229);
{
var G__29230 = cljs.core.next.call(null,seq__29158_29221__$1);
var G__29231 = null;
var G__29232 = (0);
var G__29233 = (0);
seq__29158_29209 = G__29230;
chunk__29159_29210 = G__29231;
count__29160_29211 = G__29232;
i__29161_29212 = G__29233;
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
clustermap.app.t29108.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29110){var self__ = this;
var _29110__$1 = this;return self__.meta29109;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29110,meta29109__$1){var self__ = this;
var _29110__$1 = this;return (new clustermap.app.t29108(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta29109__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t29108 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t29108(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29109){return (new clustermap.app.t29108(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29109));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t29108(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
