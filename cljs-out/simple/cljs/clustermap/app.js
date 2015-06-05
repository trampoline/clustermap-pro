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
clustermap.app.IAppService = (function (){var obj27951 = {};return obj27951;
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
clustermap.app.IAppControl = (function (){var obj27953 = {};return obj27953;
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
clustermap.app.IApp = (function (){var obj27955 = {};return obj27955;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t28012 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t28012 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta28013){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta28013 = meta28013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t28012.cljs$lang$type = true;
clustermap.app.t28012.cljs$lang$ctorStr = "clustermap.app/t28012";
clustermap.app.t28012.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t28012");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28012.prototype.clustermap$app$IApp$ = true;
clustermap.app.t28012.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28012.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28012.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28012.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28012.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28012.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28012.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t28012.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__28015_28068 = cljs.core.seq.call(null,self__.component_defs);var chunk__28016_28069 = null;var count__28017_28070 = (0);var i__28018_28071 = (0);while(true){
if((i__28018_28071 < count__28017_28070))
{var map__28019_28072 = cljs.core._nth.call(null,chunk__28016_28069,i__28018_28071);var map__28019_28073__$1 = ((cljs.core.seq_QMARK_.call(null,map__28019_28072))?cljs.core.apply.call(null,cljs.core.hash_map,map__28019_28072):map__28019_28072);var paths_28074 = cljs.core.get.call(null,map__28019_28073__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28075 = cljs.core.get.call(null,map__28019_28073__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28076 = cljs.core.get.call(null,map__28019_28073__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28077 = cljs.core.get.call(null,map__28019_28073__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28078 = cljs.core.get.call(null,map__28019_28073__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28078,f_28077,target_28076,paths_28074], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28078,f_28077,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28076,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28075,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28074);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28078,f_28077,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28076,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28075,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28074);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28078,f_28077,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28076,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28075,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28074);
}
{
var G__28079 = seq__28015_28068;
var G__28080 = chunk__28016_28069;
var G__28081 = count__28017_28070;
var G__28082 = (i__28018_28071 + (1));
seq__28015_28068 = G__28079;
chunk__28016_28069 = G__28080;
count__28017_28070 = G__28081;
i__28018_28071 = G__28082;
continue;
}
} else
{var temp__4126__auto___28083 = cljs.core.seq.call(null,seq__28015_28068);if(temp__4126__auto___28083)
{var seq__28015_28084__$1 = temp__4126__auto___28083;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28015_28084__$1))
{var c__4408__auto___28085 = cljs.core.chunk_first.call(null,seq__28015_28084__$1);{
var G__28086 = cljs.core.chunk_rest.call(null,seq__28015_28084__$1);
var G__28087 = c__4408__auto___28085;
var G__28088 = cljs.core.count.call(null,c__4408__auto___28085);
var G__28089 = (0);
seq__28015_28068 = G__28086;
chunk__28016_28069 = G__28087;
count__28017_28070 = G__28088;
i__28018_28071 = G__28089;
continue;
}
} else
{var map__28020_28090 = cljs.core.first.call(null,seq__28015_28084__$1);var map__28020_28091__$1 = ((cljs.core.seq_QMARK_.call(null,map__28020_28090))?cljs.core.apply.call(null,cljs.core.hash_map,map__28020_28090):map__28020_28090);var paths_28092 = cljs.core.get.call(null,map__28020_28091__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28093 = cljs.core.get.call(null,map__28020_28091__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28094 = cljs.core.get.call(null,map__28020_28091__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28095 = cljs.core.get.call(null,map__28020_28091__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28096 = cljs.core.get.call(null,map__28020_28091__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28096,f_28095,target_28094,paths_28092], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28096,f_28095,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28094,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28093,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28092);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28096,f_28095,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28094,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28093,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28092);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28096,f_28095,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28094,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28093,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28092);
}
{
var G__28097 = cljs.core.next.call(null,seq__28015_28084__$1);
var G__28098 = null;
var G__28099 = (0);
var G__28100 = (0);
seq__28015_28068 = G__28097;
chunk__28016_28069 = G__28098;
count__28017_28070 = G__28099;
i__28018_28071 = G__28100;
continue;
}
}
} else
{}
}
break;
}
var c__11517__auto___28101 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___28101,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___28101,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_28041){var state_val_28042 = (state_28041[(1)]);if((state_val_28042 === (7)))
{var inst_28025 = (state_28041[(7)]);var inst_28025__$1 = (state_28041[(2)]);var inst_28026 = cljs.core.seq_QMARK_.call(null,inst_28025__$1);var state_28041__$1 = (function (){var statearr_28043 = state_28041;(statearr_28043[(7)] = inst_28025__$1);
return statearr_28043;
})();if(inst_28026)
{var statearr_28044_28102 = state_28041__$1;(statearr_28044_28102[(1)] = (8));
} else
{var statearr_28045_28103 = state_28041__$1;(statearr_28045_28103[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28042 === (1)))
{var state_28041__$1 = state_28041;var statearr_28046_28104 = state_28041__$1;(statearr_28046_28104[(2)] = null);
(statearr_28046_28104[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28042 === (4)))
{var state_28041__$1 = state_28041;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28041__$1,(7),self__.comm);
} else
{if((state_val_28042 === (6)))
{var inst_28037 = (state_28041[(2)]);var state_28041__$1 = state_28041;var statearr_28047_28105 = state_28041__$1;(statearr_28047_28105[(2)] = inst_28037);
(statearr_28047_28105[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28042 === (3)))
{var inst_28039 = (state_28041[(2)]);var state_28041__$1 = state_28041;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28041__$1,inst_28039);
} else
{if((state_val_28042 === (2)))
{var state_28041__$1 = state_28041;var statearr_28048_28106 = state_28041__$1;(statearr_28048_28106[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28042 === (9)))
{var inst_28025 = (state_28041[(7)]);var state_28041__$1 = state_28041;var statearr_28050_28107 = state_28041__$1;(statearr_28050_28107[(2)] = inst_28025);
(statearr_28050_28107[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28042 === (5)))
{var state_28041__$1 = state_28041;var statearr_28051_28108 = state_28041__$1;(statearr_28051_28108[(2)] = null);
(statearr_28051_28108[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28042 === (10)))
{var inst_28031 = (state_28041[(2)]);var inst_28032 = cljs.core.get.call(null,inst_28031,new cljs.core.Keyword(null,"type","type",1174270348));var inst_28033 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_28032,inst_28031);var state_28041__$1 = (function (){var statearr_28052 = state_28041;(statearr_28052[(8)] = inst_28033);
return statearr_28052;
})();var statearr_28053_28109 = state_28041__$1;(statearr_28053_28109[(2)] = null);
(statearr_28053_28109[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28042 === (8)))
{var inst_28025 = (state_28041[(7)]);var inst_28028 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28025);var state_28041__$1 = state_28041;var statearr_28054_28110 = state_28041__$1;(statearr_28054_28110[(2)] = inst_28028);
(statearr_28054_28110[(1)] = (10));
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
});})(c__11517__auto___28101,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__11461__auto__,c__11517__auto___28101,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_28058 = [null,null,null,null,null,null,null,null,null];(statearr_28058[(0)] = state_machine__11462__auto__);
(statearr_28058[(1)] = (1));
return statearr_28058;
});
var state_machine__11462__auto____1 = (function (state_28041){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_28041);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e28059){if((e28059 instanceof Object))
{var ex__11465__auto__ = e28059;var statearr_28060_28111 = state_28041;(statearr_28060_28111[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28041);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28059;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28112 = state_28041;
state_28041 = G__28112;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_28041){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_28041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___28101,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__11519__auto__ = (function (){var statearr_28061 = f__11518__auto__.call(null);(statearr_28061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___28101);
return statearr_28061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___28101,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28012.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__28062_28113 = cljs.core.seq.call(null,self__.component_defs);var chunk__28063_28114 = null;var count__28064_28115 = (0);var i__28065_28116 = (0);while(true){
if((i__28065_28116 < count__28064_28115))
{var map__28066_28117 = cljs.core._nth.call(null,chunk__28063_28114,i__28065_28116);var map__28066_28118__$1 = ((cljs.core.seq_QMARK_.call(null,map__28066_28117))?cljs.core.apply.call(null,cljs.core.hash_map,map__28066_28117):map__28066_28117);var target_28119 = cljs.core.get.call(null,map__28066_28118__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28119);
{
var G__28120 = seq__28062_28113;
var G__28121 = chunk__28063_28114;
var G__28122 = count__28064_28115;
var G__28123 = (i__28065_28116 + (1));
seq__28062_28113 = G__28120;
chunk__28063_28114 = G__28121;
count__28064_28115 = G__28122;
i__28065_28116 = G__28123;
continue;
}
} else
{var temp__4126__auto___28124 = cljs.core.seq.call(null,seq__28062_28113);if(temp__4126__auto___28124)
{var seq__28062_28125__$1 = temp__4126__auto___28124;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28062_28125__$1))
{var c__4408__auto___28126 = cljs.core.chunk_first.call(null,seq__28062_28125__$1);{
var G__28127 = cljs.core.chunk_rest.call(null,seq__28062_28125__$1);
var G__28128 = c__4408__auto___28126;
var G__28129 = cljs.core.count.call(null,c__4408__auto___28126);
var G__28130 = (0);
seq__28062_28113 = G__28127;
chunk__28063_28114 = G__28128;
count__28064_28115 = G__28129;
i__28065_28116 = G__28130;
continue;
}
} else
{var map__28067_28131 = cljs.core.first.call(null,seq__28062_28125__$1);var map__28067_28132__$1 = ((cljs.core.seq_QMARK_.call(null,map__28067_28131))?cljs.core.apply.call(null,cljs.core.hash_map,map__28067_28131):map__28067_28131);var target_28133 = cljs.core.get.call(null,map__28067_28132__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28133);
{
var G__28134 = cljs.core.next.call(null,seq__28062_28125__$1);
var G__28135 = null;
var G__28136 = (0);
var G__28137 = (0);
seq__28062_28113 = G__28134;
chunk__28063_28114 = G__28135;
count__28064_28115 = G__28136;
i__28065_28116 = G__28137;
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
clustermap.app.t28012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28014){var self__ = this;
var _28014__$1 = this;return self__.meta28013;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28014,meta28013__$1){var self__ = this;
var _28014__$1 = this;return (new clustermap.app.t28012(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta28013__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t28012 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t28012(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28013){return (new clustermap.app.t28012(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28013));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t28012(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
