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
clustermap.app.IAppService = (function (){var obj27874 = {};return obj27874;
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
clustermap.app.IAppControl = (function (){var obj27876 = {};return obj27876;
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
clustermap.app.IApp = (function (){var obj27878 = {};return obj27878;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t27935 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t27935 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta27936){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta27936 = meta27936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t27935.cljs$lang$type = true;
clustermap.app.t27935.cljs$lang$ctorStr = "clustermap.app/t27935";
clustermap.app.t27935.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t27935");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27935.prototype.clustermap$app$IApp$ = true;
clustermap.app.t27935.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27935.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27935.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27935.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27935.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27935.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27935.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t27935.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__27938_27991 = cljs.core.seq.call(null,self__.component_defs);var chunk__27939_27992 = null;var count__27940_27993 = (0);var i__27941_27994 = (0);while(true){
if((i__27941_27994 < count__27940_27993))
{var map__27942_27995 = cljs.core._nth.call(null,chunk__27939_27992,i__27941_27994);var map__27942_27996__$1 = ((cljs.core.seq_QMARK_.call(null,map__27942_27995))?cljs.core.apply.call(null,cljs.core.hash_map,map__27942_27995):map__27942_27995);var paths_27997 = cljs.core.get.call(null,map__27942_27996__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_27998 = cljs.core.get.call(null,map__27942_27996__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_27999 = cljs.core.get.call(null,map__27942_27996__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28000 = cljs.core.get.call(null,map__27942_27996__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28001 = cljs.core.get.call(null,map__27942_27996__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28001,f_28000,target_27999,paths_27997], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28001,f_28000,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_27999,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_27998,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_27997);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28001,f_28000,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_27999,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_27998,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_27997);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28001,f_28000,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_27999,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_27998,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_27997);
}
{
var G__28002 = seq__27938_27991;
var G__28003 = chunk__27939_27992;
var G__28004 = count__27940_27993;
var G__28005 = (i__27941_27994 + (1));
seq__27938_27991 = G__28002;
chunk__27939_27992 = G__28003;
count__27940_27993 = G__28004;
i__27941_27994 = G__28005;
continue;
}
} else
{var temp__4126__auto___28006 = cljs.core.seq.call(null,seq__27938_27991);if(temp__4126__auto___28006)
{var seq__27938_28007__$1 = temp__4126__auto___28006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27938_28007__$1))
{var c__4408__auto___28008 = cljs.core.chunk_first.call(null,seq__27938_28007__$1);{
var G__28009 = cljs.core.chunk_rest.call(null,seq__27938_28007__$1);
var G__28010 = c__4408__auto___28008;
var G__28011 = cljs.core.count.call(null,c__4408__auto___28008);
var G__28012 = (0);
seq__27938_27991 = G__28009;
chunk__27939_27992 = G__28010;
count__27940_27993 = G__28011;
i__27941_27994 = G__28012;
continue;
}
} else
{var map__27943_28013 = cljs.core.first.call(null,seq__27938_28007__$1);var map__27943_28014__$1 = ((cljs.core.seq_QMARK_.call(null,map__27943_28013))?cljs.core.apply.call(null,cljs.core.hash_map,map__27943_28013):map__27943_28013);var paths_28015 = cljs.core.get.call(null,map__27943_28014__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28016 = cljs.core.get.call(null,map__27943_28014__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28017 = cljs.core.get.call(null,map__27943_28014__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28018 = cljs.core.get.call(null,map__27943_28014__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28019 = cljs.core.get.call(null,map__27943_28014__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28019,f_28018,target_28017,paths_28015], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28019,f_28018,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28017,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28016,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28015);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28019,f_28018,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28017,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28016,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28015);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28019,f_28018,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28017,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28016,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28015);
}
{
var G__28020 = cljs.core.next.call(null,seq__27938_28007__$1);
var G__28021 = null;
var G__28022 = (0);
var G__28023 = (0);
seq__27938_27991 = G__28020;
chunk__27939_27992 = G__28021;
count__27940_27993 = G__28022;
i__27941_27994 = G__28023;
continue;
}
}
} else
{}
}
break;
}
var c__11297__auto___28024 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___28024,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___28024,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_27964){var state_val_27965 = (state_27964[(1)]);if((state_val_27965 === (7)))
{var inst_27948 = (state_27964[(7)]);var inst_27948__$1 = (state_27964[(2)]);var inst_27949 = cljs.core.seq_QMARK_.call(null,inst_27948__$1);var state_27964__$1 = (function (){var statearr_27966 = state_27964;(statearr_27966[(7)] = inst_27948__$1);
return statearr_27966;
})();if(inst_27949)
{var statearr_27967_28025 = state_27964__$1;(statearr_27967_28025[(1)] = (8));
} else
{var statearr_27968_28026 = state_27964__$1;(statearr_27968_28026[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27965 === (1)))
{var state_27964__$1 = state_27964;var statearr_27969_28027 = state_27964__$1;(statearr_27969_28027[(2)] = null);
(statearr_27969_28027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27965 === (4)))
{var state_27964__$1 = state_27964;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27964__$1,(7),self__.comm);
} else
{if((state_val_27965 === (6)))
{var inst_27960 = (state_27964[(2)]);var state_27964__$1 = state_27964;var statearr_27970_28028 = state_27964__$1;(statearr_27970_28028[(2)] = inst_27960);
(statearr_27970_28028[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27965 === (3)))
{var inst_27962 = (state_27964[(2)]);var state_27964__$1 = state_27964;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27964__$1,inst_27962);
} else
{if((state_val_27965 === (2)))
{var state_27964__$1 = state_27964;var statearr_27971_28029 = state_27964__$1;(statearr_27971_28029[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27965 === (9)))
{var inst_27948 = (state_27964[(7)]);var state_27964__$1 = state_27964;var statearr_27973_28030 = state_27964__$1;(statearr_27973_28030[(2)] = inst_27948);
(statearr_27973_28030[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27965 === (5)))
{var state_27964__$1 = state_27964;var statearr_27974_28031 = state_27964__$1;(statearr_27974_28031[(2)] = null);
(statearr_27974_28031[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27965 === (10)))
{var inst_27954 = (state_27964[(2)]);var inst_27955 = cljs.core.get.call(null,inst_27954,new cljs.core.Keyword(null,"type","type",1174270348));var inst_27956 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_27955,inst_27954);var state_27964__$1 = (function (){var statearr_27975 = state_27964;(statearr_27975[(8)] = inst_27956);
return statearr_27975;
})();var statearr_27976_28032 = state_27964__$1;(statearr_27976_28032[(2)] = null);
(statearr_27976_28032[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27965 === (8)))
{var inst_27948 = (state_27964[(7)]);var inst_27951 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27948);var state_27964__$1 = state_27964;var statearr_27977_28033 = state_27964__$1;(statearr_27977_28033[(2)] = inst_27951);
(statearr_27977_28033[(1)] = (10));
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
});})(c__11297__auto___28024,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__11241__auto__,c__11297__auto___28024,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_27981 = [null,null,null,null,null,null,null,null,null];(statearr_27981[(0)] = state_machine__11242__auto__);
(statearr_27981[(1)] = (1));
return statearr_27981;
});
var state_machine__11242__auto____1 = (function (state_27964){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_27964);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e27982){if((e27982 instanceof Object))
{var ex__11245__auto__ = e27982;var statearr_27983_28034 = state_27964;(statearr_27983_28034[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27964);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27982;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28035 = state_27964;
state_27964 = G__28035;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_27964){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_27964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___28024,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__11299__auto__ = (function (){var statearr_27984 = f__11298__auto__.call(null);(statearr_27984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___28024);
return statearr_27984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___28024,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27935.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__27985_28036 = cljs.core.seq.call(null,self__.component_defs);var chunk__27986_28037 = null;var count__27987_28038 = (0);var i__27988_28039 = (0);while(true){
if((i__27988_28039 < count__27987_28038))
{var map__27989_28040 = cljs.core._nth.call(null,chunk__27986_28037,i__27988_28039);var map__27989_28041__$1 = ((cljs.core.seq_QMARK_.call(null,map__27989_28040))?cljs.core.apply.call(null,cljs.core.hash_map,map__27989_28040):map__27989_28040);var target_28042 = cljs.core.get.call(null,map__27989_28041__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28042);
{
var G__28043 = seq__27985_28036;
var G__28044 = chunk__27986_28037;
var G__28045 = count__27987_28038;
var G__28046 = (i__27988_28039 + (1));
seq__27985_28036 = G__28043;
chunk__27986_28037 = G__28044;
count__27987_28038 = G__28045;
i__27988_28039 = G__28046;
continue;
}
} else
{var temp__4126__auto___28047 = cljs.core.seq.call(null,seq__27985_28036);if(temp__4126__auto___28047)
{var seq__27985_28048__$1 = temp__4126__auto___28047;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27985_28048__$1))
{var c__4408__auto___28049 = cljs.core.chunk_first.call(null,seq__27985_28048__$1);{
var G__28050 = cljs.core.chunk_rest.call(null,seq__27985_28048__$1);
var G__28051 = c__4408__auto___28049;
var G__28052 = cljs.core.count.call(null,c__4408__auto___28049);
var G__28053 = (0);
seq__27985_28036 = G__28050;
chunk__27986_28037 = G__28051;
count__27987_28038 = G__28052;
i__27988_28039 = G__28053;
continue;
}
} else
{var map__27990_28054 = cljs.core.first.call(null,seq__27985_28048__$1);var map__27990_28055__$1 = ((cljs.core.seq_QMARK_.call(null,map__27990_28054))?cljs.core.apply.call(null,cljs.core.hash_map,map__27990_28054):map__27990_28054);var target_28056 = cljs.core.get.call(null,map__27990_28055__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28056);
{
var G__28057 = cljs.core.next.call(null,seq__27985_28048__$1);
var G__28058 = null;
var G__28059 = (0);
var G__28060 = (0);
seq__27985_28036 = G__28057;
chunk__27986_28037 = G__28058;
count__27987_28038 = G__28059;
i__27988_28039 = G__28060;
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
clustermap.app.t27935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_27937){var self__ = this;
var _27937__$1 = this;return self__.meta27936;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_27937,meta27936__$1){var self__ = this;
var _27937__$1 = this;return (new clustermap.app.t27935(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta27936__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t27935 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t27935(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta27936){return (new clustermap.app.t27935(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta27936));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t27935(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
