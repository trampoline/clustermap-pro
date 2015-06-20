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
clustermap.app.IAppService = (function (){var obj29065 = {};return obj29065;
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
clustermap.app.IAppControl = (function (){var obj29067 = {};return obj29067;
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
clustermap.app.IApp = (function (){var obj29069 = {};return obj29069;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t29126 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t29126 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta29127){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta29127 = meta29127;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t29126.cljs$lang$type = true;
clustermap.app.t29126.cljs$lang$ctorStr = "clustermap.app/t29126";
clustermap.app.t29126.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t29126");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29126.prototype.clustermap$app$IApp$ = true;
clustermap.app.t29126.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29126.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29126.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29126.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29126.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29126.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29126.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t29126.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__29129_29182 = cljs.core.seq.call(null,self__.component_defs);var chunk__29130_29183 = null;var count__29131_29184 = (0);var i__29132_29185 = (0);while(true){
if((i__29132_29185 < count__29131_29184))
{var map__29133_29186 = cljs.core._nth.call(null,chunk__29130_29183,i__29132_29185);var map__29133_29187__$1 = ((cljs.core.seq_QMARK_.call(null,map__29133_29186))?cljs.core.apply.call(null,cljs.core.hash_map,map__29133_29186):map__29133_29186);var paths_29188 = cljs.core.get.call(null,map__29133_29187__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29189 = cljs.core.get.call(null,map__29133_29187__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29190 = cljs.core.get.call(null,map__29133_29187__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29191 = cljs.core.get.call(null,map__29133_29187__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29192 = cljs.core.get.call(null,map__29133_29187__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29192,f_29191,target_29190,paths_29188], null)));
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
var G__29193 = seq__29129_29182;
var G__29194 = chunk__29130_29183;
var G__29195 = count__29131_29184;
var G__29196 = (i__29132_29185 + (1));
seq__29129_29182 = G__29193;
chunk__29130_29183 = G__29194;
count__29131_29184 = G__29195;
i__29132_29185 = G__29196;
continue;
}
} else
{var temp__4126__auto___29197 = cljs.core.seq.call(null,seq__29129_29182);if(temp__4126__auto___29197)
{var seq__29129_29198__$1 = temp__4126__auto___29197;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29129_29198__$1))
{var c__4408__auto___29199 = cljs.core.chunk_first.call(null,seq__29129_29198__$1);{
var G__29200 = cljs.core.chunk_rest.call(null,seq__29129_29198__$1);
var G__29201 = c__4408__auto___29199;
var G__29202 = cljs.core.count.call(null,c__4408__auto___29199);
var G__29203 = (0);
seq__29129_29182 = G__29200;
chunk__29130_29183 = G__29201;
count__29131_29184 = G__29202;
i__29132_29185 = G__29203;
continue;
}
} else
{var map__29134_29204 = cljs.core.first.call(null,seq__29129_29198__$1);var map__29134_29205__$1 = ((cljs.core.seq_QMARK_.call(null,map__29134_29204))?cljs.core.apply.call(null,cljs.core.hash_map,map__29134_29204):map__29134_29204);var paths_29206 = cljs.core.get.call(null,map__29134_29205__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29207 = cljs.core.get.call(null,map__29134_29205__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29208 = cljs.core.get.call(null,map__29134_29205__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29209 = cljs.core.get.call(null,map__29134_29205__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29210 = cljs.core.get.call(null,map__29134_29205__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29210,f_29209,target_29208,paths_29206], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29210,f_29209,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29208,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29207,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29206);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29210,f_29209,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29208,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29207,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29206);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29210,f_29209,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29208,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29207,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29206);
}
{
var G__29211 = cljs.core.next.call(null,seq__29129_29198__$1);
var G__29212 = null;
var G__29213 = (0);
var G__29214 = (0);
seq__29129_29182 = G__29211;
chunk__29130_29183 = G__29212;
count__29131_29184 = G__29213;
i__29132_29185 = G__29214;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___29215 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___29215,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___29215,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_29155){var state_val_29156 = (state_29155[(1)]);if((state_val_29156 === (7)))
{var inst_29139 = (state_29155[(7)]);var inst_29139__$1 = (state_29155[(2)]);var inst_29140 = cljs.core.seq_QMARK_.call(null,inst_29139__$1);var state_29155__$1 = (function (){var statearr_29157 = state_29155;(statearr_29157[(7)] = inst_29139__$1);
return statearr_29157;
})();if(inst_29140)
{var statearr_29158_29216 = state_29155__$1;(statearr_29158_29216[(1)] = (8));
} else
{var statearr_29159_29217 = state_29155__$1;(statearr_29159_29217[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29156 === (1)))
{var state_29155__$1 = state_29155;var statearr_29160_29218 = state_29155__$1;(statearr_29160_29218[(2)] = null);
(statearr_29160_29218[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29156 === (4)))
{var state_29155__$1 = state_29155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29155__$1,(7),self__.comm);
} else
{if((state_val_29156 === (6)))
{var inst_29151 = (state_29155[(2)]);var state_29155__$1 = state_29155;var statearr_29161_29219 = state_29155__$1;(statearr_29161_29219[(2)] = inst_29151);
(statearr_29161_29219[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29156 === (3)))
{var inst_29153 = (state_29155[(2)]);var state_29155__$1 = state_29155;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29155__$1,inst_29153);
} else
{if((state_val_29156 === (2)))
{var state_29155__$1 = state_29155;var statearr_29162_29220 = state_29155__$1;(statearr_29162_29220[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29156 === (9)))
{var inst_29139 = (state_29155[(7)]);var state_29155__$1 = state_29155;var statearr_29164_29221 = state_29155__$1;(statearr_29164_29221[(2)] = inst_29139);
(statearr_29164_29221[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29156 === (5)))
{var state_29155__$1 = state_29155;var statearr_29165_29222 = state_29155__$1;(statearr_29165_29222[(2)] = null);
(statearr_29165_29222[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29156 === (10)))
{var inst_29145 = (state_29155[(2)]);var inst_29146 = cljs.core.get.call(null,inst_29145,new cljs.core.Keyword(null,"type","type",1174270348));var inst_29147 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_29146,inst_29145);var state_29155__$1 = (function (){var statearr_29166 = state_29155;(statearr_29166[(8)] = inst_29147);
return statearr_29166;
})();var statearr_29167_29223 = state_29155__$1;(statearr_29167_29223[(2)] = null);
(statearr_29167_29223[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29156 === (8)))
{var inst_29139 = (state_29155[(7)]);var inst_29142 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29139);var state_29155__$1 = state_29155;var statearr_29168_29224 = state_29155__$1;(statearr_29168_29224[(2)] = inst_29142);
(statearr_29168_29224[(1)] = (10));
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
});})(c__9125__auto___29215,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___29215,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29172 = [null,null,null,null,null,null,null,null,null];(statearr_29172[(0)] = state_machine__9111__auto__);
(statearr_29172[(1)] = (1));
return statearr_29172;
});
var state_machine__9111__auto____1 = (function (state_29155){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29155);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29173){if((e29173 instanceof Object))
{var ex__9114__auto__ = e29173;var statearr_29174_29225 = state_29155;(statearr_29174_29225[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29155);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29173;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29226 = state_29155;
state_29155 = G__29226;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29155){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___29215,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_29175 = f__9126__auto__.call(null);(statearr_29175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___29215);
return statearr_29175;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___29215,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29126.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__29176_29227 = cljs.core.seq.call(null,self__.component_defs);var chunk__29177_29228 = null;var count__29178_29229 = (0);var i__29179_29230 = (0);while(true){
if((i__29179_29230 < count__29178_29229))
{var map__29180_29231 = cljs.core._nth.call(null,chunk__29177_29228,i__29179_29230);var map__29180_29232__$1 = ((cljs.core.seq_QMARK_.call(null,map__29180_29231))?cljs.core.apply.call(null,cljs.core.hash_map,map__29180_29231):map__29180_29231);var target_29233 = cljs.core.get.call(null,map__29180_29232__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29233);
{
var G__29234 = seq__29176_29227;
var G__29235 = chunk__29177_29228;
var G__29236 = count__29178_29229;
var G__29237 = (i__29179_29230 + (1));
seq__29176_29227 = G__29234;
chunk__29177_29228 = G__29235;
count__29178_29229 = G__29236;
i__29179_29230 = G__29237;
continue;
}
} else
{var temp__4126__auto___29238 = cljs.core.seq.call(null,seq__29176_29227);if(temp__4126__auto___29238)
{var seq__29176_29239__$1 = temp__4126__auto___29238;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29176_29239__$1))
{var c__4408__auto___29240 = cljs.core.chunk_first.call(null,seq__29176_29239__$1);{
var G__29241 = cljs.core.chunk_rest.call(null,seq__29176_29239__$1);
var G__29242 = c__4408__auto___29240;
var G__29243 = cljs.core.count.call(null,c__4408__auto___29240);
var G__29244 = (0);
seq__29176_29227 = G__29241;
chunk__29177_29228 = G__29242;
count__29178_29229 = G__29243;
i__29179_29230 = G__29244;
continue;
}
} else
{var map__29181_29245 = cljs.core.first.call(null,seq__29176_29239__$1);var map__29181_29246__$1 = ((cljs.core.seq_QMARK_.call(null,map__29181_29245))?cljs.core.apply.call(null,cljs.core.hash_map,map__29181_29245):map__29181_29245);var target_29247 = cljs.core.get.call(null,map__29181_29246__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29247);
{
var G__29248 = cljs.core.next.call(null,seq__29176_29239__$1);
var G__29249 = null;
var G__29250 = (0);
var G__29251 = (0);
seq__29176_29227 = G__29248;
chunk__29177_29228 = G__29249;
count__29178_29229 = G__29250;
i__29179_29230 = G__29251;
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
clustermap.app.t29126.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29128){var self__ = this;
var _29128__$1 = this;return self__.meta29127;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29128,meta29127__$1){var self__ = this;
var _29128__$1 = this;return (new clustermap.app.t29126(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta29127__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t29126 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t29126(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29127){return (new clustermap.app.t29126(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29127));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t29126(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
