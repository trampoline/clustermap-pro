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
clustermap.app.IAppService = (function (){var obj27931 = {};return obj27931;
})();
clustermap.app.init = (function init(this$,app){if((function (){var and__11540__auto__ = this$;if(and__11540__auto__)
{return this$.clustermap$app$IAppService$init$arity$2;
} else
{return and__11540__auto__;
}
})())
{return this$.clustermap$app$IAppService$init$arity$2(this$,app);
} else
{var x__12188__auto__ = (((this$ == null))?null:this$);return (function (){var or__11552__auto__ = (clustermap.app.init[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (clustermap.app.init["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.init",this$);
}
}
})().call(null,this$,app);
}
});
clustermap.app.destroy = (function destroy(this$,app){if((function (){var and__11540__auto__ = this$;if(and__11540__auto__)
{return this$.clustermap$app$IAppService$destroy$arity$2;
} else
{return and__11540__auto__;
}
})())
{return this$.clustermap$app$IAppService$destroy$arity$2(this$,app);
} else
{var x__12188__auto__ = (((this$ == null))?null:this$);return (function (){var or__11552__auto__ = (clustermap.app.destroy[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (clustermap.app.destroy["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.destroy",this$);
}
}
})().call(null,this$,app);
}
});
clustermap.app.handle_event = (function handle_event(this$,app,type,val){if((function (){var and__11540__auto__ = this$;if(and__11540__auto__)
{return this$.clustermap$app$IAppService$handle_event$arity$4;
} else
{return and__11540__auto__;
}
})())
{return this$.clustermap$app$IAppService$handle_event$arity$4(this$,app,type,val);
} else
{var x__12188__auto__ = (((this$ == null))?null:this$);return (function (){var or__11552__auto__ = (clustermap.app.handle_event[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (clustermap.app.handle_event["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.handle-event",this$);
}
}
})().call(null,this$,app,type,val);
}
});
clustermap.app.dev_mode_QMARK_ = (function dev_mode_QMARK_(this$){if((function (){var and__11540__auto__ = this$;if(and__11540__auto__)
{return this$.clustermap$app$IAppService$dev_mode_QMARK_$arity$1;
} else
{return and__11540__auto__;
}
})())
{return this$.clustermap$app$IAppService$dev_mode_QMARK_$arity$1(this$);
} else
{var x__12188__auto__ = (((this$ == null))?null:this$);return (function (){var or__11552__auto__ = (clustermap.app.dev_mode_QMARK_[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (clustermap.app.dev_mode_QMARK_["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.dev-mode?",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.IAppControl = (function (){var obj27933 = {};return obj27933;
})();
clustermap.app.start = (function start(this$){if((function (){var and__11540__auto__ = this$;if(and__11540__auto__)
{return this$.clustermap$app$IAppControl$start$arity$1;
} else
{return and__11540__auto__;
}
})())
{return this$.clustermap$app$IAppControl$start$arity$1(this$);
} else
{var x__12188__auto__ = (((this$ == null))?null:this$);return (function (){var or__11552__auto__ = (clustermap.app.start[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (clustermap.app.start["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppControl.start",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.stop = (function stop(this$){if((function (){var and__11540__auto__ = this$;if(and__11540__auto__)
{return this$.clustermap$app$IAppControl$stop$arity$1;
} else
{return and__11540__auto__;
}
})())
{return this$.clustermap$app$IAppControl$stop$arity$1(this$);
} else
{var x__12188__auto__ = (((this$ == null))?null:this$);return (function (){var or__11552__auto__ = (clustermap.app.stop[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (clustermap.app.stop["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppControl.stop",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.IApp = (function (){var obj27935 = {};return obj27935;
})();
clustermap.app.get_state = (function get_state(this$){if((function (){var and__11540__auto__ = this$;if(and__11540__auto__)
{return this$.clustermap$app$IApp$get_state$arity$1;
} else
{return and__11540__auto__;
}
})())
{return this$.clustermap$app$IApp$get_state$arity$1(this$);
} else
{var x__12188__auto__ = (((this$ == null))?null:this$);return (function (){var or__11552__auto__ = (clustermap.app.get_state[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (clustermap.app.get_state["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-state",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_comm = (function get_comm(this$){if((function (){var and__11540__auto__ = this$;if(and__11540__auto__)
{return this$.clustermap$app$IApp$get_comm$arity$1;
} else
{return and__11540__auto__;
}
})())
{return this$.clustermap$app$IApp$get_comm$arity$1(this$);
} else
{var x__12188__auto__ = (((this$ == null))?null:this$);return (function (){var or__11552__auto__ = (clustermap.app.get_comm[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (clustermap.app.get_comm["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-comm",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_filter_rq = (function get_filter_rq(this$){if((function (){var and__11540__auto__ = this$;if(and__11540__auto__)
{return this$.clustermap$app$IApp$get_filter_rq$arity$1;
} else
{return and__11540__auto__;
}
})())
{return this$.clustermap$app$IApp$get_filter_rq$arity$1(this$);
} else
{var x__12188__auto__ = (((this$ == null))?null:this$);return (function (){var or__11552__auto__ = (clustermap.app.get_filter_rq[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (clustermap.app.get_filter_rq["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-filter-rq",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_history = (function get_history(this$){if((function (){var and__11540__auto__ = this$;if(and__11540__auto__)
{return this$.clustermap$app$IApp$get_history$arity$1;
} else
{return and__11540__auto__;
}
})())
{return this$.clustermap$app$IApp$get_history$arity$1(this$);
} else
{var x__12188__auto__ = (((this$ == null))?null:this$);return (function (){var or__11552__auto__ = (clustermap.app.get_history[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (clustermap.app.get_history["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-history",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_navigator_fn = (function get_navigator_fn(this$){if((function (){var and__11540__auto__ = this$;if(and__11540__auto__)
{return this$.clustermap$app$IApp$get_navigator_fn$arity$1;
} else
{return and__11540__auto__;
}
})())
{return this$.clustermap$app$IApp$get_navigator_fn$arity$1(this$);
} else
{var x__12188__auto__ = (((this$ == null))?null:this$);return (function (){var or__11552__auto__ = (clustermap.app.get_navigator_fn[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (clustermap.app.get_navigator_fn["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-navigator-fn",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.navigate = (function navigate(this$,view){if((function (){var and__11540__auto__ = this$;if(and__11540__auto__)
{return this$.clustermap$app$IApp$navigate$arity$2;
} else
{return and__11540__auto__;
}
})())
{return this$.clustermap$app$IApp$navigate$arity$2(this$,view);
} else
{var x__12188__auto__ = (((this$ == null))?null:this$);return (function (){var or__11552__auto__ = (clustermap.app.navigate[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (clustermap.app.navigate["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.navigate",this$);
}
}
})().call(null,this$,view);
}
});
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t27992 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t27992 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta27993){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta27993 = meta27993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t27992.cljs$lang$type = true;
clustermap.app.t27992.cljs$lang$ctorStr = "clustermap.app/t27992";
clustermap.app.t27992.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.app/t27992");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27992.prototype.clustermap$app$IApp$ = true;
clustermap.app.t27992.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27992.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27992.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27992.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27992.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27992.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27992.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t27992.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__27995_28048 = cljs.core.seq.call(null,self__.component_defs);var chunk__27996_28049 = null;var count__27997_28050 = (0);var i__27998_28051 = (0);while(true){
if((i__27998_28051 < count__27997_28050))
{var map__27999_28052 = cljs.core._nth.call(null,chunk__27996_28049,i__27998_28051);var map__27999_28053__$1 = ((cljs.core.seq_QMARK_.call(null,map__27999_28052))?cljs.core.apply.call(null,cljs.core.hash_map,map__27999_28052):map__27999_28052);var paths_28054 = cljs.core.get.call(null,map__27999_28053__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28055 = cljs.core.get.call(null,map__27999_28053__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28056 = cljs.core.get.call(null,map__27999_28053__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28057 = cljs.core.get.call(null,map__27999_28053__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28058 = cljs.core.get.call(null,map__27999_28053__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28058,f_28057,target_28056,paths_28054], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28058,f_28057,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28056,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28055,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28054);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28058,f_28057,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28056,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28055,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28054);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28058,f_28057,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28056,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28055,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28054);
}
{
var G__28059 = seq__27995_28048;
var G__28060 = chunk__27996_28049;
var G__28061 = count__27997_28050;
var G__28062 = (i__27998_28051 + (1));
seq__27995_28048 = G__28059;
chunk__27996_28049 = G__28060;
count__27997_28050 = G__28061;
i__27998_28051 = G__28062;
continue;
}
} else
{var temp__4126__auto___28063 = cljs.core.seq.call(null,seq__27995_28048);if(temp__4126__auto___28063)
{var seq__27995_28064__$1 = temp__4126__auto___28063;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27995_28064__$1))
{var c__12321__auto___28065 = cljs.core.chunk_first.call(null,seq__27995_28064__$1);{
var G__28066 = cljs.core.chunk_rest.call(null,seq__27995_28064__$1);
var G__28067 = c__12321__auto___28065;
var G__28068 = cljs.core.count.call(null,c__12321__auto___28065);
var G__28069 = (0);
seq__27995_28048 = G__28066;
chunk__27996_28049 = G__28067;
count__27997_28050 = G__28068;
i__27998_28051 = G__28069;
continue;
}
} else
{var map__28000_28070 = cljs.core.first.call(null,seq__27995_28064__$1);var map__28000_28071__$1 = ((cljs.core.seq_QMARK_.call(null,map__28000_28070))?cljs.core.apply.call(null,cljs.core.hash_map,map__28000_28070):map__28000_28070);var paths_28072 = cljs.core.get.call(null,map__28000_28071__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28073 = cljs.core.get.call(null,map__28000_28071__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28074 = cljs.core.get.call(null,map__28000_28071__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28075 = cljs.core.get.call(null,map__28000_28071__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28076 = cljs.core.get.call(null,map__28000_28071__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28076,f_28075,target_28074,paths_28072], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28076,f_28075,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28074,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28073,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28072);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28076,f_28075,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28074,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28073,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28072);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28076,f_28075,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28074,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28073,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28072);
}
{
var G__28077 = cljs.core.next.call(null,seq__27995_28064__$1);
var G__28078 = null;
var G__28079 = (0);
var G__28080 = (0);
seq__27995_28048 = G__28077;
chunk__27996_28049 = G__28078;
count__27997_28050 = G__28079;
i__27998_28051 = G__28080;
continue;
}
}
} else
{}
}
break;
}
var c__16733__auto___28081 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___28081,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___28081,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_28021){var state_val_28022 = (state_28021[(1)]);if((state_val_28022 === (7)))
{var inst_28005 = (state_28021[(7)]);var inst_28005__$1 = (state_28021[(2)]);var inst_28006 = cljs.core.seq_QMARK_.call(null,inst_28005__$1);var state_28021__$1 = (function (){var statearr_28023 = state_28021;(statearr_28023[(7)] = inst_28005__$1);
return statearr_28023;
})();if(inst_28006)
{var statearr_28024_28082 = state_28021__$1;(statearr_28024_28082[(1)] = (8));
} else
{var statearr_28025_28083 = state_28021__$1;(statearr_28025_28083[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28022 === (1)))
{var state_28021__$1 = state_28021;var statearr_28026_28084 = state_28021__$1;(statearr_28026_28084[(2)] = null);
(statearr_28026_28084[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28022 === (4)))
{var state_28021__$1 = state_28021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28021__$1,(7),self__.comm);
} else
{if((state_val_28022 === (6)))
{var inst_28017 = (state_28021[(2)]);var state_28021__$1 = state_28021;var statearr_28027_28085 = state_28021__$1;(statearr_28027_28085[(2)] = inst_28017);
(statearr_28027_28085[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28022 === (3)))
{var inst_28019 = (state_28021[(2)]);var state_28021__$1 = state_28021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28021__$1,inst_28019);
} else
{if((state_val_28022 === (2)))
{var state_28021__$1 = state_28021;var statearr_28028_28086 = state_28021__$1;(statearr_28028_28086[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28022 === (9)))
{var inst_28005 = (state_28021[(7)]);var state_28021__$1 = state_28021;var statearr_28030_28087 = state_28021__$1;(statearr_28030_28087[(2)] = inst_28005);
(statearr_28030_28087[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28022 === (5)))
{var state_28021__$1 = state_28021;var statearr_28031_28088 = state_28021__$1;(statearr_28031_28088[(2)] = null);
(statearr_28031_28088[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28022 === (10)))
{var inst_28011 = (state_28021[(2)]);var inst_28012 = cljs.core.get.call(null,inst_28011,new cljs.core.Keyword(null,"type","type",1174270348));var inst_28013 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_28012,inst_28011);var state_28021__$1 = (function (){var statearr_28032 = state_28021;(statearr_28032[(8)] = inst_28013);
return statearr_28032;
})();var statearr_28033_28089 = state_28021__$1;(statearr_28033_28089[(2)] = null);
(statearr_28033_28089[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28022 === (8)))
{var inst_28005 = (state_28021[(7)]);var inst_28008 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28005);var state_28021__$1 = state_28021;var statearr_28034_28090 = state_28021__$1;(statearr_28034_28090[(2)] = inst_28008);
(statearr_28034_28090[(1)] = (10));
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
});})(c__16733__auto___28081,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__16718__auto__,c__16733__auto___28081,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_28038 = [null,null,null,null,null,null,null,null,null];(statearr_28038[(0)] = state_machine__16719__auto__);
(statearr_28038[(1)] = (1));
return statearr_28038;
});
var state_machine__16719__auto____1 = (function (state_28021){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_28021);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e28039){if((e28039 instanceof Object))
{var ex__16722__auto__ = e28039;var statearr_28040_28091 = state_28021;(statearr_28040_28091[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28021);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28039;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28092 = state_28021;
state_28021 = G__28092;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_28021){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_28021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___28081,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__16735__auto__ = (function (){var statearr_28041 = f__16734__auto__.call(null);(statearr_28041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___28081);
return statearr_28041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___28081,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27992.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__28042_28093 = cljs.core.seq.call(null,self__.component_defs);var chunk__28043_28094 = null;var count__28044_28095 = (0);var i__28045_28096 = (0);while(true){
if((i__28045_28096 < count__28044_28095))
{var map__28046_28097 = cljs.core._nth.call(null,chunk__28043_28094,i__28045_28096);var map__28046_28098__$1 = ((cljs.core.seq_QMARK_.call(null,map__28046_28097))?cljs.core.apply.call(null,cljs.core.hash_map,map__28046_28097):map__28046_28097);var target_28099 = cljs.core.get.call(null,map__28046_28098__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28099);
{
var G__28100 = seq__28042_28093;
var G__28101 = chunk__28043_28094;
var G__28102 = count__28044_28095;
var G__28103 = (i__28045_28096 + (1));
seq__28042_28093 = G__28100;
chunk__28043_28094 = G__28101;
count__28044_28095 = G__28102;
i__28045_28096 = G__28103;
continue;
}
} else
{var temp__4126__auto___28104 = cljs.core.seq.call(null,seq__28042_28093);if(temp__4126__auto___28104)
{var seq__28042_28105__$1 = temp__4126__auto___28104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28042_28105__$1))
{var c__12321__auto___28106 = cljs.core.chunk_first.call(null,seq__28042_28105__$1);{
var G__28107 = cljs.core.chunk_rest.call(null,seq__28042_28105__$1);
var G__28108 = c__12321__auto___28106;
var G__28109 = cljs.core.count.call(null,c__12321__auto___28106);
var G__28110 = (0);
seq__28042_28093 = G__28107;
chunk__28043_28094 = G__28108;
count__28044_28095 = G__28109;
i__28045_28096 = G__28110;
continue;
}
} else
{var map__28047_28111 = cljs.core.first.call(null,seq__28042_28105__$1);var map__28047_28112__$1 = ((cljs.core.seq_QMARK_.call(null,map__28047_28111))?cljs.core.apply.call(null,cljs.core.hash_map,map__28047_28111):map__28047_28111);var target_28113 = cljs.core.get.call(null,map__28047_28112__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28113);
{
var G__28114 = cljs.core.next.call(null,seq__28042_28105__$1);
var G__28115 = null;
var G__28116 = (0);
var G__28117 = (0);
seq__28042_28093 = G__28114;
chunk__28043_28094 = G__28115;
count__28044_28095 = G__28116;
i__28045_28096 = G__28117;
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
clustermap.app.t27992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_27994){var self__ = this;
var _27994__$1 = this;return self__.meta27993;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_27994,meta27993__$1){var self__ = this;
var _27994__$1 = this;return (new clustermap.app.t27992(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta27993__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t27992 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t27992(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta27993){return (new clustermap.app.t27992(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta27993));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t27992(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});

//# sourceMappingURL=app.js.map