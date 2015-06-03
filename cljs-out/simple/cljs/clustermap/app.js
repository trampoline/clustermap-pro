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
clustermap.app.IAppService = (function (){var obj27872 = {};return obj27872;
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
clustermap.app.IAppControl = (function (){var obj27874 = {};return obj27874;
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
clustermap.app.IApp = (function (){var obj27876 = {};return obj27876;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t27933 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t27933 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta27934){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta27934 = meta27934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t27933.cljs$lang$type = true;
clustermap.app.t27933.cljs$lang$ctorStr = "clustermap.app/t27933";
clustermap.app.t27933.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t27933");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27933.prototype.clustermap$app$IApp$ = true;
clustermap.app.t27933.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27933.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27933.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27933.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27933.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27933.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27933.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t27933.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__27936_27989 = cljs.core.seq.call(null,self__.component_defs);var chunk__27937_27990 = null;var count__27938_27991 = (0);var i__27939_27992 = (0);while(true){
if((i__27939_27992 < count__27938_27991))
{var map__27940_27993 = cljs.core._nth.call(null,chunk__27937_27990,i__27939_27992);var map__27940_27994__$1 = ((cljs.core.seq_QMARK_.call(null,map__27940_27993))?cljs.core.apply.call(null,cljs.core.hash_map,map__27940_27993):map__27940_27993);var paths_27995 = cljs.core.get.call(null,map__27940_27994__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_27996 = cljs.core.get.call(null,map__27940_27994__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_27997 = cljs.core.get.call(null,map__27940_27994__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_27998 = cljs.core.get.call(null,map__27940_27994__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_27999 = cljs.core.get.call(null,map__27940_27994__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_27999,f_27998,target_27997,paths_27995], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_27999,f_27998,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_27997,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_27996,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_27995);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_27999,f_27998,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_27997,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_27996,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_27995);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_27999,f_27998,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_27997,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_27996,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_27995);
}
{
var G__28000 = seq__27936_27989;
var G__28001 = chunk__27937_27990;
var G__28002 = count__27938_27991;
var G__28003 = (i__27939_27992 + (1));
seq__27936_27989 = G__28000;
chunk__27937_27990 = G__28001;
count__27938_27991 = G__28002;
i__27939_27992 = G__28003;
continue;
}
} else
{var temp__4126__auto___28004 = cljs.core.seq.call(null,seq__27936_27989);if(temp__4126__auto___28004)
{var seq__27936_28005__$1 = temp__4126__auto___28004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27936_28005__$1))
{var c__4408__auto___28006 = cljs.core.chunk_first.call(null,seq__27936_28005__$1);{
var G__28007 = cljs.core.chunk_rest.call(null,seq__27936_28005__$1);
var G__28008 = c__4408__auto___28006;
var G__28009 = cljs.core.count.call(null,c__4408__auto___28006);
var G__28010 = (0);
seq__27936_27989 = G__28007;
chunk__27937_27990 = G__28008;
count__27938_27991 = G__28009;
i__27939_27992 = G__28010;
continue;
}
} else
{var map__27941_28011 = cljs.core.first.call(null,seq__27936_28005__$1);var map__27941_28012__$1 = ((cljs.core.seq_QMARK_.call(null,map__27941_28011))?cljs.core.apply.call(null,cljs.core.hash_map,map__27941_28011):map__27941_28011);var paths_28013 = cljs.core.get.call(null,map__27941_28012__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28014 = cljs.core.get.call(null,map__27941_28012__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28015 = cljs.core.get.call(null,map__27941_28012__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28016 = cljs.core.get.call(null,map__27941_28012__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28017 = cljs.core.get.call(null,map__27941_28012__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28017,f_28016,target_28015,paths_28013], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28017,f_28016,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28015,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28014,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28013);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28017,f_28016,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28015,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28014,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28013);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28017,f_28016,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28015,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28014,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28013);
}
{
var G__28018 = cljs.core.next.call(null,seq__27936_28005__$1);
var G__28019 = null;
var G__28020 = (0);
var G__28021 = (0);
seq__27936_27989 = G__28018;
chunk__27937_27990 = G__28019;
count__27938_27991 = G__28020;
i__27939_27992 = G__28021;
continue;
}
}
} else
{}
}
break;
}
var c__11517__auto___28022 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___28022,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___28022,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_27962){var state_val_27963 = (state_27962[(1)]);if((state_val_27963 === (7)))
{var inst_27946 = (state_27962[(7)]);var inst_27946__$1 = (state_27962[(2)]);var inst_27947 = cljs.core.seq_QMARK_.call(null,inst_27946__$1);var state_27962__$1 = (function (){var statearr_27964 = state_27962;(statearr_27964[(7)] = inst_27946__$1);
return statearr_27964;
})();if(inst_27947)
{var statearr_27965_28023 = state_27962__$1;(statearr_27965_28023[(1)] = (8));
} else
{var statearr_27966_28024 = state_27962__$1;(statearr_27966_28024[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27963 === (1)))
{var state_27962__$1 = state_27962;var statearr_27967_28025 = state_27962__$1;(statearr_27967_28025[(2)] = null);
(statearr_27967_28025[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27963 === (4)))
{var state_27962__$1 = state_27962;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27962__$1,(7),self__.comm);
} else
{if((state_val_27963 === (6)))
{var inst_27958 = (state_27962[(2)]);var state_27962__$1 = state_27962;var statearr_27968_28026 = state_27962__$1;(statearr_27968_28026[(2)] = inst_27958);
(statearr_27968_28026[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27963 === (3)))
{var inst_27960 = (state_27962[(2)]);var state_27962__$1 = state_27962;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27962__$1,inst_27960);
} else
{if((state_val_27963 === (2)))
{var state_27962__$1 = state_27962;var statearr_27969_28027 = state_27962__$1;(statearr_27969_28027[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27963 === (9)))
{var inst_27946 = (state_27962[(7)]);var state_27962__$1 = state_27962;var statearr_27971_28028 = state_27962__$1;(statearr_27971_28028[(2)] = inst_27946);
(statearr_27971_28028[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27963 === (5)))
{var state_27962__$1 = state_27962;var statearr_27972_28029 = state_27962__$1;(statearr_27972_28029[(2)] = null);
(statearr_27972_28029[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27963 === (10)))
{var inst_27952 = (state_27962[(2)]);var inst_27953 = cljs.core.get.call(null,inst_27952,new cljs.core.Keyword(null,"type","type",1174270348));var inst_27954 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_27953,inst_27952);var state_27962__$1 = (function (){var statearr_27973 = state_27962;(statearr_27973[(8)] = inst_27954);
return statearr_27973;
})();var statearr_27974_28030 = state_27962__$1;(statearr_27974_28030[(2)] = null);
(statearr_27974_28030[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27963 === (8)))
{var inst_27946 = (state_27962[(7)]);var inst_27949 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27946);var state_27962__$1 = state_27962;var statearr_27975_28031 = state_27962__$1;(statearr_27975_28031[(2)] = inst_27949);
(statearr_27975_28031[(1)] = (10));
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
});})(c__11517__auto___28022,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__11461__auto__,c__11517__auto___28022,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27979 = [null,null,null,null,null,null,null,null,null];(statearr_27979[(0)] = state_machine__11462__auto__);
(statearr_27979[(1)] = (1));
return statearr_27979;
});
var state_machine__11462__auto____1 = (function (state_27962){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27962);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27980){if((e27980 instanceof Object))
{var ex__11465__auto__ = e27980;var statearr_27981_28032 = state_27962;(statearr_27981_28032[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27962);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27980;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28033 = state_27962;
state_27962 = G__28033;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27962){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___28022,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__11519__auto__ = (function (){var statearr_27982 = f__11518__auto__.call(null);(statearr_27982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___28022);
return statearr_27982;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___28022,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27933.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__27983_28034 = cljs.core.seq.call(null,self__.component_defs);var chunk__27984_28035 = null;var count__27985_28036 = (0);var i__27986_28037 = (0);while(true){
if((i__27986_28037 < count__27985_28036))
{var map__27987_28038 = cljs.core._nth.call(null,chunk__27984_28035,i__27986_28037);var map__27987_28039__$1 = ((cljs.core.seq_QMARK_.call(null,map__27987_28038))?cljs.core.apply.call(null,cljs.core.hash_map,map__27987_28038):map__27987_28038);var target_28040 = cljs.core.get.call(null,map__27987_28039__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28040);
{
var G__28041 = seq__27983_28034;
var G__28042 = chunk__27984_28035;
var G__28043 = count__27985_28036;
var G__28044 = (i__27986_28037 + (1));
seq__27983_28034 = G__28041;
chunk__27984_28035 = G__28042;
count__27985_28036 = G__28043;
i__27986_28037 = G__28044;
continue;
}
} else
{var temp__4126__auto___28045 = cljs.core.seq.call(null,seq__27983_28034);if(temp__4126__auto___28045)
{var seq__27983_28046__$1 = temp__4126__auto___28045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27983_28046__$1))
{var c__4408__auto___28047 = cljs.core.chunk_first.call(null,seq__27983_28046__$1);{
var G__28048 = cljs.core.chunk_rest.call(null,seq__27983_28046__$1);
var G__28049 = c__4408__auto___28047;
var G__28050 = cljs.core.count.call(null,c__4408__auto___28047);
var G__28051 = (0);
seq__27983_28034 = G__28048;
chunk__27984_28035 = G__28049;
count__27985_28036 = G__28050;
i__27986_28037 = G__28051;
continue;
}
} else
{var map__27988_28052 = cljs.core.first.call(null,seq__27983_28046__$1);var map__27988_28053__$1 = ((cljs.core.seq_QMARK_.call(null,map__27988_28052))?cljs.core.apply.call(null,cljs.core.hash_map,map__27988_28052):map__27988_28052);var target_28054 = cljs.core.get.call(null,map__27988_28053__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28054);
{
var G__28055 = cljs.core.next.call(null,seq__27983_28046__$1);
var G__28056 = null;
var G__28057 = (0);
var G__28058 = (0);
seq__27983_28034 = G__28055;
chunk__27984_28035 = G__28056;
count__27985_28036 = G__28057;
i__27986_28037 = G__28058;
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
clustermap.app.t27933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_27935){var self__ = this;
var _27935__$1 = this;return self__.meta27934;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_27935,meta27934__$1){var self__ = this;
var _27935__$1 = this;return (new clustermap.app.t27933(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta27934__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t27933 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t27933(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta27934){return (new clustermap.app.t27933(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta27934));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t27933(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
