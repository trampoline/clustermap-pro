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
clustermap.app.IAppService = (function (){var obj27871 = {};return obj27871;
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
clustermap.app.IAppControl = (function (){var obj27873 = {};return obj27873;
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
clustermap.app.IApp = (function (){var obj27875 = {};return obj27875;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t27932 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t27932 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta27933){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta27933 = meta27933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t27932.cljs$lang$type = true;
clustermap.app.t27932.cljs$lang$ctorStr = "clustermap.app/t27932";
clustermap.app.t27932.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t27932");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27932.prototype.clustermap$app$IApp$ = true;
clustermap.app.t27932.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27932.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27932.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27932.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27932.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27932.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27932.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t27932.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__27935_27988 = cljs.core.seq.call(null,self__.component_defs);var chunk__27936_27989 = null;var count__27937_27990 = (0);var i__27938_27991 = (0);while(true){
if((i__27938_27991 < count__27937_27990))
{var map__27939_27992 = cljs.core._nth.call(null,chunk__27936_27989,i__27938_27991);var map__27939_27993__$1 = ((cljs.core.seq_QMARK_.call(null,map__27939_27992))?cljs.core.apply.call(null,cljs.core.hash_map,map__27939_27992):map__27939_27992);var paths_27994 = cljs.core.get.call(null,map__27939_27993__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_27995 = cljs.core.get.call(null,map__27939_27993__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_27996 = cljs.core.get.call(null,map__27939_27993__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_27997 = cljs.core.get.call(null,map__27939_27993__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_27998 = cljs.core.get.call(null,map__27939_27993__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_27998,f_27997,target_27996,paths_27994], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_27998,f_27997,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_27996,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_27995,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_27994);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_27998,f_27997,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_27996,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_27995,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_27994);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_27998,f_27997,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_27996,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_27995,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_27994);
}
{
var G__27999 = seq__27935_27988;
var G__28000 = chunk__27936_27989;
var G__28001 = count__27937_27990;
var G__28002 = (i__27938_27991 + (1));
seq__27935_27988 = G__27999;
chunk__27936_27989 = G__28000;
count__27937_27990 = G__28001;
i__27938_27991 = G__28002;
continue;
}
} else
{var temp__4126__auto___28003 = cljs.core.seq.call(null,seq__27935_27988);if(temp__4126__auto___28003)
{var seq__27935_28004__$1 = temp__4126__auto___28003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27935_28004__$1))
{var c__4408__auto___28005 = cljs.core.chunk_first.call(null,seq__27935_28004__$1);{
var G__28006 = cljs.core.chunk_rest.call(null,seq__27935_28004__$1);
var G__28007 = c__4408__auto___28005;
var G__28008 = cljs.core.count.call(null,c__4408__auto___28005);
var G__28009 = (0);
seq__27935_27988 = G__28006;
chunk__27936_27989 = G__28007;
count__27937_27990 = G__28008;
i__27938_27991 = G__28009;
continue;
}
} else
{var map__27940_28010 = cljs.core.first.call(null,seq__27935_28004__$1);var map__27940_28011__$1 = ((cljs.core.seq_QMARK_.call(null,map__27940_28010))?cljs.core.apply.call(null,cljs.core.hash_map,map__27940_28010):map__27940_28010);var paths_28012 = cljs.core.get.call(null,map__27940_28011__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28013 = cljs.core.get.call(null,map__27940_28011__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28014 = cljs.core.get.call(null,map__27940_28011__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28015 = cljs.core.get.call(null,map__27940_28011__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28016 = cljs.core.get.call(null,map__27940_28011__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28016,f_28015,target_28014,paths_28012], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28016,f_28015,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28014,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28013,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28012);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28016,f_28015,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28014,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28013,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28012);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28016,f_28015,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28014,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28013,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28012);
}
{
var G__28017 = cljs.core.next.call(null,seq__27935_28004__$1);
var G__28018 = null;
var G__28019 = (0);
var G__28020 = (0);
seq__27935_27988 = G__28017;
chunk__27936_27989 = G__28018;
count__27937_27990 = G__28019;
i__27938_27991 = G__28020;
continue;
}
}
} else
{}
}
break;
}
var c__11517__auto___28021 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___28021,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___28021,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_27961){var state_val_27962 = (state_27961[(1)]);if((state_val_27962 === (7)))
{var inst_27945 = (state_27961[(7)]);var inst_27945__$1 = (state_27961[(2)]);var inst_27946 = cljs.core.seq_QMARK_.call(null,inst_27945__$1);var state_27961__$1 = (function (){var statearr_27963 = state_27961;(statearr_27963[(7)] = inst_27945__$1);
return statearr_27963;
})();if(inst_27946)
{var statearr_27964_28022 = state_27961__$1;(statearr_27964_28022[(1)] = (8));
} else
{var statearr_27965_28023 = state_27961__$1;(statearr_27965_28023[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27962 === (1)))
{var state_27961__$1 = state_27961;var statearr_27966_28024 = state_27961__$1;(statearr_27966_28024[(2)] = null);
(statearr_27966_28024[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27962 === (4)))
{var state_27961__$1 = state_27961;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27961__$1,(7),self__.comm);
} else
{if((state_val_27962 === (6)))
{var inst_27957 = (state_27961[(2)]);var state_27961__$1 = state_27961;var statearr_27967_28025 = state_27961__$1;(statearr_27967_28025[(2)] = inst_27957);
(statearr_27967_28025[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27962 === (3)))
{var inst_27959 = (state_27961[(2)]);var state_27961__$1 = state_27961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27961__$1,inst_27959);
} else
{if((state_val_27962 === (2)))
{var state_27961__$1 = state_27961;var statearr_27968_28026 = state_27961__$1;(statearr_27968_28026[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27962 === (9)))
{var inst_27945 = (state_27961[(7)]);var state_27961__$1 = state_27961;var statearr_27970_28027 = state_27961__$1;(statearr_27970_28027[(2)] = inst_27945);
(statearr_27970_28027[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27962 === (5)))
{var state_27961__$1 = state_27961;var statearr_27971_28028 = state_27961__$1;(statearr_27971_28028[(2)] = null);
(statearr_27971_28028[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27962 === (10)))
{var inst_27951 = (state_27961[(2)]);var inst_27952 = cljs.core.get.call(null,inst_27951,new cljs.core.Keyword(null,"type","type",1174270348));var inst_27953 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_27952,inst_27951);var state_27961__$1 = (function (){var statearr_27972 = state_27961;(statearr_27972[(8)] = inst_27953);
return statearr_27972;
})();var statearr_27973_28029 = state_27961__$1;(statearr_27973_28029[(2)] = null);
(statearr_27973_28029[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27962 === (8)))
{var inst_27945 = (state_27961[(7)]);var inst_27948 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27945);var state_27961__$1 = state_27961;var statearr_27974_28030 = state_27961__$1;(statearr_27974_28030[(2)] = inst_27948);
(statearr_27974_28030[(1)] = (10));
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
});})(c__11517__auto___28021,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__11461__auto__,c__11517__auto___28021,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27978 = [null,null,null,null,null,null,null,null,null];(statearr_27978[(0)] = state_machine__11462__auto__);
(statearr_27978[(1)] = (1));
return statearr_27978;
});
var state_machine__11462__auto____1 = (function (state_27961){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27961);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27979){if((e27979 instanceof Object))
{var ex__11465__auto__ = e27979;var statearr_27980_28031 = state_27961;(statearr_27980_28031[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27961);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27979;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28032 = state_27961;
state_27961 = G__28032;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27961){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___28021,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__11519__auto__ = (function (){var statearr_27981 = f__11518__auto__.call(null);(statearr_27981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___28021);
return statearr_27981;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___28021,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27932.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__27982_28033 = cljs.core.seq.call(null,self__.component_defs);var chunk__27983_28034 = null;var count__27984_28035 = (0);var i__27985_28036 = (0);while(true){
if((i__27985_28036 < count__27984_28035))
{var map__27986_28037 = cljs.core._nth.call(null,chunk__27983_28034,i__27985_28036);var map__27986_28038__$1 = ((cljs.core.seq_QMARK_.call(null,map__27986_28037))?cljs.core.apply.call(null,cljs.core.hash_map,map__27986_28037):map__27986_28037);var target_28039 = cljs.core.get.call(null,map__27986_28038__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28039);
{
var G__28040 = seq__27982_28033;
var G__28041 = chunk__27983_28034;
var G__28042 = count__27984_28035;
var G__28043 = (i__27985_28036 + (1));
seq__27982_28033 = G__28040;
chunk__27983_28034 = G__28041;
count__27984_28035 = G__28042;
i__27985_28036 = G__28043;
continue;
}
} else
{var temp__4126__auto___28044 = cljs.core.seq.call(null,seq__27982_28033);if(temp__4126__auto___28044)
{var seq__27982_28045__$1 = temp__4126__auto___28044;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27982_28045__$1))
{var c__4408__auto___28046 = cljs.core.chunk_first.call(null,seq__27982_28045__$1);{
var G__28047 = cljs.core.chunk_rest.call(null,seq__27982_28045__$1);
var G__28048 = c__4408__auto___28046;
var G__28049 = cljs.core.count.call(null,c__4408__auto___28046);
var G__28050 = (0);
seq__27982_28033 = G__28047;
chunk__27983_28034 = G__28048;
count__27984_28035 = G__28049;
i__27985_28036 = G__28050;
continue;
}
} else
{var map__27987_28051 = cljs.core.first.call(null,seq__27982_28045__$1);var map__27987_28052__$1 = ((cljs.core.seq_QMARK_.call(null,map__27987_28051))?cljs.core.apply.call(null,cljs.core.hash_map,map__27987_28051):map__27987_28051);var target_28053 = cljs.core.get.call(null,map__27987_28052__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28053);
{
var G__28054 = cljs.core.next.call(null,seq__27982_28045__$1);
var G__28055 = null;
var G__28056 = (0);
var G__28057 = (0);
seq__27982_28033 = G__28054;
chunk__27983_28034 = G__28055;
count__27984_28035 = G__28056;
i__27985_28036 = G__28057;
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
clustermap.app.t27932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_27934){var self__ = this;
var _27934__$1 = this;return self__.meta27933;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_27934,meta27933__$1){var self__ = this;
var _27934__$1 = this;return (new clustermap.app.t27932(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta27933__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t27932 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t27932(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta27933){return (new clustermap.app.t27932(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta27933));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t27932(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
