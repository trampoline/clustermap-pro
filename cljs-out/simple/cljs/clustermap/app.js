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
clustermap.app.IAppService = (function (){var obj28093 = {};return obj28093;
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
clustermap.app.IAppControl = (function (){var obj28095 = {};return obj28095;
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
clustermap.app.IApp = (function (){var obj28097 = {};return obj28097;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t28154 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t28154 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta28155){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta28155 = meta28155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t28154.cljs$lang$type = true;
clustermap.app.t28154.cljs$lang$ctorStr = "clustermap.app/t28154";
clustermap.app.t28154.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t28154");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28154.prototype.clustermap$app$IApp$ = true;
clustermap.app.t28154.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28154.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28154.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28154.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28154.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28154.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28154.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t28154.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__28157_28210 = cljs.core.seq.call(null,self__.component_defs);var chunk__28158_28211 = null;var count__28159_28212 = (0);var i__28160_28213 = (0);while(true){
if((i__28160_28213 < count__28159_28212))
{var map__28161_28214 = cljs.core._nth.call(null,chunk__28158_28211,i__28160_28213);var map__28161_28215__$1 = ((cljs.core.seq_QMARK_.call(null,map__28161_28214))?cljs.core.apply.call(null,cljs.core.hash_map,map__28161_28214):map__28161_28214);var paths_28216 = cljs.core.get.call(null,map__28161_28215__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28217 = cljs.core.get.call(null,map__28161_28215__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28218 = cljs.core.get.call(null,map__28161_28215__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28219 = cljs.core.get.call(null,map__28161_28215__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28220 = cljs.core.get.call(null,map__28161_28215__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28220,f_28219,target_28218,paths_28216], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28220,f_28219,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28218,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28217,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28216);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28220,f_28219,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28218,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28217,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28216);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28220,f_28219,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28218,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28217,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28216);
}
{
var G__28221 = seq__28157_28210;
var G__28222 = chunk__28158_28211;
var G__28223 = count__28159_28212;
var G__28224 = (i__28160_28213 + (1));
seq__28157_28210 = G__28221;
chunk__28158_28211 = G__28222;
count__28159_28212 = G__28223;
i__28160_28213 = G__28224;
continue;
}
} else
{var temp__4126__auto___28225 = cljs.core.seq.call(null,seq__28157_28210);if(temp__4126__auto___28225)
{var seq__28157_28226__$1 = temp__4126__auto___28225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28157_28226__$1))
{var c__4408__auto___28227 = cljs.core.chunk_first.call(null,seq__28157_28226__$1);{
var G__28228 = cljs.core.chunk_rest.call(null,seq__28157_28226__$1);
var G__28229 = c__4408__auto___28227;
var G__28230 = cljs.core.count.call(null,c__4408__auto___28227);
var G__28231 = (0);
seq__28157_28210 = G__28228;
chunk__28158_28211 = G__28229;
count__28159_28212 = G__28230;
i__28160_28213 = G__28231;
continue;
}
} else
{var map__28162_28232 = cljs.core.first.call(null,seq__28157_28226__$1);var map__28162_28233__$1 = ((cljs.core.seq_QMARK_.call(null,map__28162_28232))?cljs.core.apply.call(null,cljs.core.hash_map,map__28162_28232):map__28162_28232);var paths_28234 = cljs.core.get.call(null,map__28162_28233__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28235 = cljs.core.get.call(null,map__28162_28233__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28236 = cljs.core.get.call(null,map__28162_28233__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28237 = cljs.core.get.call(null,map__28162_28233__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28238 = cljs.core.get.call(null,map__28162_28233__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28238,f_28237,target_28236,paths_28234], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28238,f_28237,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28236,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28235,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28234);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28238,f_28237,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28236,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28235,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28234);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28238,f_28237,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28236,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28235,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28234);
}
{
var G__28239 = cljs.core.next.call(null,seq__28157_28226__$1);
var G__28240 = null;
var G__28241 = (0);
var G__28242 = (0);
seq__28157_28210 = G__28239;
chunk__28158_28211 = G__28240;
count__28159_28212 = G__28241;
i__28160_28213 = G__28242;
continue;
}
}
} else
{}
}
break;
}
var c__11517__auto___28243 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___28243,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___28243,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_28183){var state_val_28184 = (state_28183[(1)]);if((state_val_28184 === (7)))
{var inst_28167 = (state_28183[(7)]);var inst_28167__$1 = (state_28183[(2)]);var inst_28168 = cljs.core.seq_QMARK_.call(null,inst_28167__$1);var state_28183__$1 = (function (){var statearr_28185 = state_28183;(statearr_28185[(7)] = inst_28167__$1);
return statearr_28185;
})();if(inst_28168)
{var statearr_28186_28244 = state_28183__$1;(statearr_28186_28244[(1)] = (8));
} else
{var statearr_28187_28245 = state_28183__$1;(statearr_28187_28245[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28184 === (1)))
{var state_28183__$1 = state_28183;var statearr_28188_28246 = state_28183__$1;(statearr_28188_28246[(2)] = null);
(statearr_28188_28246[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28184 === (4)))
{var state_28183__$1 = state_28183;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28183__$1,(7),self__.comm);
} else
{if((state_val_28184 === (6)))
{var inst_28179 = (state_28183[(2)]);var state_28183__$1 = state_28183;var statearr_28189_28247 = state_28183__$1;(statearr_28189_28247[(2)] = inst_28179);
(statearr_28189_28247[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28184 === (3)))
{var inst_28181 = (state_28183[(2)]);var state_28183__$1 = state_28183;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28183__$1,inst_28181);
} else
{if((state_val_28184 === (2)))
{var state_28183__$1 = state_28183;var statearr_28190_28248 = state_28183__$1;(statearr_28190_28248[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28184 === (9)))
{var inst_28167 = (state_28183[(7)]);var state_28183__$1 = state_28183;var statearr_28192_28249 = state_28183__$1;(statearr_28192_28249[(2)] = inst_28167);
(statearr_28192_28249[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28184 === (5)))
{var state_28183__$1 = state_28183;var statearr_28193_28250 = state_28183__$1;(statearr_28193_28250[(2)] = null);
(statearr_28193_28250[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28184 === (10)))
{var inst_28173 = (state_28183[(2)]);var inst_28174 = cljs.core.get.call(null,inst_28173,new cljs.core.Keyword(null,"type","type",1174270348));var inst_28175 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_28174,inst_28173);var state_28183__$1 = (function (){var statearr_28194 = state_28183;(statearr_28194[(8)] = inst_28175);
return statearr_28194;
})();var statearr_28195_28251 = state_28183__$1;(statearr_28195_28251[(2)] = null);
(statearr_28195_28251[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28184 === (8)))
{var inst_28167 = (state_28183[(7)]);var inst_28170 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28167);var state_28183__$1 = state_28183;var statearr_28196_28252 = state_28183__$1;(statearr_28196_28252[(2)] = inst_28170);
(statearr_28196_28252[(1)] = (10));
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
});})(c__11517__auto___28243,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__11461__auto__,c__11517__auto___28243,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_28200 = [null,null,null,null,null,null,null,null,null];(statearr_28200[(0)] = state_machine__11462__auto__);
(statearr_28200[(1)] = (1));
return statearr_28200;
});
var state_machine__11462__auto____1 = (function (state_28183){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_28183);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e28201){if((e28201 instanceof Object))
{var ex__11465__auto__ = e28201;var statearr_28202_28253 = state_28183;(statearr_28202_28253[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28183);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28201;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28254 = state_28183;
state_28183 = G__28254;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_28183){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_28183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___28243,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__11519__auto__ = (function (){var statearr_28203 = f__11518__auto__.call(null);(statearr_28203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___28243);
return statearr_28203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___28243,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28154.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__28204_28255 = cljs.core.seq.call(null,self__.component_defs);var chunk__28205_28256 = null;var count__28206_28257 = (0);var i__28207_28258 = (0);while(true){
if((i__28207_28258 < count__28206_28257))
{var map__28208_28259 = cljs.core._nth.call(null,chunk__28205_28256,i__28207_28258);var map__28208_28260__$1 = ((cljs.core.seq_QMARK_.call(null,map__28208_28259))?cljs.core.apply.call(null,cljs.core.hash_map,map__28208_28259):map__28208_28259);var target_28261 = cljs.core.get.call(null,map__28208_28260__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28261);
{
var G__28262 = seq__28204_28255;
var G__28263 = chunk__28205_28256;
var G__28264 = count__28206_28257;
var G__28265 = (i__28207_28258 + (1));
seq__28204_28255 = G__28262;
chunk__28205_28256 = G__28263;
count__28206_28257 = G__28264;
i__28207_28258 = G__28265;
continue;
}
} else
{var temp__4126__auto___28266 = cljs.core.seq.call(null,seq__28204_28255);if(temp__4126__auto___28266)
{var seq__28204_28267__$1 = temp__4126__auto___28266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28204_28267__$1))
{var c__4408__auto___28268 = cljs.core.chunk_first.call(null,seq__28204_28267__$1);{
var G__28269 = cljs.core.chunk_rest.call(null,seq__28204_28267__$1);
var G__28270 = c__4408__auto___28268;
var G__28271 = cljs.core.count.call(null,c__4408__auto___28268);
var G__28272 = (0);
seq__28204_28255 = G__28269;
chunk__28205_28256 = G__28270;
count__28206_28257 = G__28271;
i__28207_28258 = G__28272;
continue;
}
} else
{var map__28209_28273 = cljs.core.first.call(null,seq__28204_28267__$1);var map__28209_28274__$1 = ((cljs.core.seq_QMARK_.call(null,map__28209_28273))?cljs.core.apply.call(null,cljs.core.hash_map,map__28209_28273):map__28209_28273);var target_28275 = cljs.core.get.call(null,map__28209_28274__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28275);
{
var G__28276 = cljs.core.next.call(null,seq__28204_28267__$1);
var G__28277 = null;
var G__28278 = (0);
var G__28279 = (0);
seq__28204_28255 = G__28276;
chunk__28205_28256 = G__28277;
count__28206_28257 = G__28278;
i__28207_28258 = G__28279;
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
clustermap.app.t28154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28156){var self__ = this;
var _28156__$1 = this;return self__.meta28155;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28156,meta28155__$1){var self__ = this;
var _28156__$1 = this;return (new clustermap.app.t28154(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta28155__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t28154 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t28154(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28155){return (new clustermap.app.t28154(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28155));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t28154(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
