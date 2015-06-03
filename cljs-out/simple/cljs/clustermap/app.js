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
clustermap.app.IAppService = (function (){var obj27941 = {};return obj27941;
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
clustermap.app.IAppControl = (function (){var obj27943 = {};return obj27943;
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
clustermap.app.IApp = (function (){var obj27945 = {};return obj27945;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t28002 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t28002 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta28003){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta28003 = meta28003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t28002.cljs$lang$type = true;
clustermap.app.t28002.cljs$lang$ctorStr = "clustermap.app/t28002";
clustermap.app.t28002.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t28002");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28002.prototype.clustermap$app$IApp$ = true;
clustermap.app.t28002.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28002.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28002.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28002.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28002.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28002.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28002.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t28002.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__28005_28058 = cljs.core.seq.call(null,self__.component_defs);var chunk__28006_28059 = null;var count__28007_28060 = (0);var i__28008_28061 = (0);while(true){
if((i__28008_28061 < count__28007_28060))
{var map__28009_28062 = cljs.core._nth.call(null,chunk__28006_28059,i__28008_28061);var map__28009_28063__$1 = ((cljs.core.seq_QMARK_.call(null,map__28009_28062))?cljs.core.apply.call(null,cljs.core.hash_map,map__28009_28062):map__28009_28062);var paths_28064 = cljs.core.get.call(null,map__28009_28063__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28065 = cljs.core.get.call(null,map__28009_28063__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28066 = cljs.core.get.call(null,map__28009_28063__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28067 = cljs.core.get.call(null,map__28009_28063__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28068 = cljs.core.get.call(null,map__28009_28063__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28068,f_28067,target_28066,paths_28064], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28068,f_28067,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28066,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28065,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28064);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28068,f_28067,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28066,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28065,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28064);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28068,f_28067,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28066,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28065,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28064);
}
{
var G__28069 = seq__28005_28058;
var G__28070 = chunk__28006_28059;
var G__28071 = count__28007_28060;
var G__28072 = (i__28008_28061 + (1));
seq__28005_28058 = G__28069;
chunk__28006_28059 = G__28070;
count__28007_28060 = G__28071;
i__28008_28061 = G__28072;
continue;
}
} else
{var temp__4126__auto___28073 = cljs.core.seq.call(null,seq__28005_28058);if(temp__4126__auto___28073)
{var seq__28005_28074__$1 = temp__4126__auto___28073;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28005_28074__$1))
{var c__4408__auto___28075 = cljs.core.chunk_first.call(null,seq__28005_28074__$1);{
var G__28076 = cljs.core.chunk_rest.call(null,seq__28005_28074__$1);
var G__28077 = c__4408__auto___28075;
var G__28078 = cljs.core.count.call(null,c__4408__auto___28075);
var G__28079 = (0);
seq__28005_28058 = G__28076;
chunk__28006_28059 = G__28077;
count__28007_28060 = G__28078;
i__28008_28061 = G__28079;
continue;
}
} else
{var map__28010_28080 = cljs.core.first.call(null,seq__28005_28074__$1);var map__28010_28081__$1 = ((cljs.core.seq_QMARK_.call(null,map__28010_28080))?cljs.core.apply.call(null,cljs.core.hash_map,map__28010_28080):map__28010_28080);var paths_28082 = cljs.core.get.call(null,map__28010_28081__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28083 = cljs.core.get.call(null,map__28010_28081__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28084 = cljs.core.get.call(null,map__28010_28081__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28085 = cljs.core.get.call(null,map__28010_28081__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28086 = cljs.core.get.call(null,map__28010_28081__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28086,f_28085,target_28084,paths_28082], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28086,f_28085,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28084,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28083,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28082);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28086,f_28085,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28084,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28083,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28082);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28086,f_28085,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28084,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28083,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28082);
}
{
var G__28087 = cljs.core.next.call(null,seq__28005_28074__$1);
var G__28088 = null;
var G__28089 = (0);
var G__28090 = (0);
seq__28005_28058 = G__28087;
chunk__28006_28059 = G__28088;
count__28007_28060 = G__28089;
i__28008_28061 = G__28090;
continue;
}
}
} else
{}
}
break;
}
var c__11297__auto___28091 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___28091,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___28091,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_28031){var state_val_28032 = (state_28031[(1)]);if((state_val_28032 === (7)))
{var inst_28015 = (state_28031[(7)]);var inst_28015__$1 = (state_28031[(2)]);var inst_28016 = cljs.core.seq_QMARK_.call(null,inst_28015__$1);var state_28031__$1 = (function (){var statearr_28033 = state_28031;(statearr_28033[(7)] = inst_28015__$1);
return statearr_28033;
})();if(inst_28016)
{var statearr_28034_28092 = state_28031__$1;(statearr_28034_28092[(1)] = (8));
} else
{var statearr_28035_28093 = state_28031__$1;(statearr_28035_28093[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28032 === (1)))
{var state_28031__$1 = state_28031;var statearr_28036_28094 = state_28031__$1;(statearr_28036_28094[(2)] = null);
(statearr_28036_28094[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28032 === (4)))
{var state_28031__$1 = state_28031;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28031__$1,(7),self__.comm);
} else
{if((state_val_28032 === (6)))
{var inst_28027 = (state_28031[(2)]);var state_28031__$1 = state_28031;var statearr_28037_28095 = state_28031__$1;(statearr_28037_28095[(2)] = inst_28027);
(statearr_28037_28095[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28032 === (3)))
{var inst_28029 = (state_28031[(2)]);var state_28031__$1 = state_28031;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28031__$1,inst_28029);
} else
{if((state_val_28032 === (2)))
{var state_28031__$1 = state_28031;var statearr_28038_28096 = state_28031__$1;(statearr_28038_28096[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28032 === (9)))
{var inst_28015 = (state_28031[(7)]);var state_28031__$1 = state_28031;var statearr_28040_28097 = state_28031__$1;(statearr_28040_28097[(2)] = inst_28015);
(statearr_28040_28097[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28032 === (5)))
{var state_28031__$1 = state_28031;var statearr_28041_28098 = state_28031__$1;(statearr_28041_28098[(2)] = null);
(statearr_28041_28098[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28032 === (10)))
{var inst_28021 = (state_28031[(2)]);var inst_28022 = cljs.core.get.call(null,inst_28021,new cljs.core.Keyword(null,"type","type",1174270348));var inst_28023 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_28022,inst_28021);var state_28031__$1 = (function (){var statearr_28042 = state_28031;(statearr_28042[(8)] = inst_28023);
return statearr_28042;
})();var statearr_28043_28099 = state_28031__$1;(statearr_28043_28099[(2)] = null);
(statearr_28043_28099[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28032 === (8)))
{var inst_28015 = (state_28031[(7)]);var inst_28018 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28015);var state_28031__$1 = state_28031;var statearr_28044_28100 = state_28031__$1;(statearr_28044_28100[(2)] = inst_28018);
(statearr_28044_28100[(1)] = (10));
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
});})(c__11297__auto___28091,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__11241__auto__,c__11297__auto___28091,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_28048 = [null,null,null,null,null,null,null,null,null];(statearr_28048[(0)] = state_machine__11242__auto__);
(statearr_28048[(1)] = (1));
return statearr_28048;
});
var state_machine__11242__auto____1 = (function (state_28031){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_28031);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e28049){if((e28049 instanceof Object))
{var ex__11245__auto__ = e28049;var statearr_28050_28101 = state_28031;(statearr_28050_28101[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28031);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28049;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28102 = state_28031;
state_28031 = G__28102;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_28031){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_28031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___28091,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__11299__auto__ = (function (){var statearr_28051 = f__11298__auto__.call(null);(statearr_28051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___28091);
return statearr_28051;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___28091,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28002.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__28052_28103 = cljs.core.seq.call(null,self__.component_defs);var chunk__28053_28104 = null;var count__28054_28105 = (0);var i__28055_28106 = (0);while(true){
if((i__28055_28106 < count__28054_28105))
{var map__28056_28107 = cljs.core._nth.call(null,chunk__28053_28104,i__28055_28106);var map__28056_28108__$1 = ((cljs.core.seq_QMARK_.call(null,map__28056_28107))?cljs.core.apply.call(null,cljs.core.hash_map,map__28056_28107):map__28056_28107);var target_28109 = cljs.core.get.call(null,map__28056_28108__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28109);
{
var G__28110 = seq__28052_28103;
var G__28111 = chunk__28053_28104;
var G__28112 = count__28054_28105;
var G__28113 = (i__28055_28106 + (1));
seq__28052_28103 = G__28110;
chunk__28053_28104 = G__28111;
count__28054_28105 = G__28112;
i__28055_28106 = G__28113;
continue;
}
} else
{var temp__4126__auto___28114 = cljs.core.seq.call(null,seq__28052_28103);if(temp__4126__auto___28114)
{var seq__28052_28115__$1 = temp__4126__auto___28114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28052_28115__$1))
{var c__4408__auto___28116 = cljs.core.chunk_first.call(null,seq__28052_28115__$1);{
var G__28117 = cljs.core.chunk_rest.call(null,seq__28052_28115__$1);
var G__28118 = c__4408__auto___28116;
var G__28119 = cljs.core.count.call(null,c__4408__auto___28116);
var G__28120 = (0);
seq__28052_28103 = G__28117;
chunk__28053_28104 = G__28118;
count__28054_28105 = G__28119;
i__28055_28106 = G__28120;
continue;
}
} else
{var map__28057_28121 = cljs.core.first.call(null,seq__28052_28115__$1);var map__28057_28122__$1 = ((cljs.core.seq_QMARK_.call(null,map__28057_28121))?cljs.core.apply.call(null,cljs.core.hash_map,map__28057_28121):map__28057_28121);var target_28123 = cljs.core.get.call(null,map__28057_28122__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28123);
{
var G__28124 = cljs.core.next.call(null,seq__28052_28115__$1);
var G__28125 = null;
var G__28126 = (0);
var G__28127 = (0);
seq__28052_28103 = G__28124;
chunk__28053_28104 = G__28125;
count__28054_28105 = G__28126;
i__28055_28106 = G__28127;
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
clustermap.app.t28002.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28004){var self__ = this;
var _28004__$1 = this;return self__.meta28003;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28004,meta28003__$1){var self__ = this;
var _28004__$1 = this;return (new clustermap.app.t28002(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta28003__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t28002 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t28002(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28003){return (new clustermap.app.t28002(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28003));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t28002(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
