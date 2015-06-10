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
clustermap.app.IAppService = (function (){var obj28760 = {};return obj28760;
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
clustermap.app.IAppControl = (function (){var obj28762 = {};return obj28762;
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
clustermap.app.IApp = (function (){var obj28764 = {};return obj28764;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t28821 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t28821 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta28822){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta28822 = meta28822;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t28821.cljs$lang$type = true;
clustermap.app.t28821.cljs$lang$ctorStr = "clustermap.app/t28821";
clustermap.app.t28821.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t28821");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28821.prototype.clustermap$app$IApp$ = true;
clustermap.app.t28821.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28821.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28821.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28821.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28821.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28821.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28821.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t28821.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__28824_28877 = cljs.core.seq.call(null,self__.component_defs);var chunk__28825_28878 = null;var count__28826_28879 = (0);var i__28827_28880 = (0);while(true){
if((i__28827_28880 < count__28826_28879))
{var map__28828_28881 = cljs.core._nth.call(null,chunk__28825_28878,i__28827_28880);var map__28828_28882__$1 = ((cljs.core.seq_QMARK_.call(null,map__28828_28881))?cljs.core.apply.call(null,cljs.core.hash_map,map__28828_28881):map__28828_28881);var paths_28883 = cljs.core.get.call(null,map__28828_28882__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28884 = cljs.core.get.call(null,map__28828_28882__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28885 = cljs.core.get.call(null,map__28828_28882__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28886 = cljs.core.get.call(null,map__28828_28882__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28887 = cljs.core.get.call(null,map__28828_28882__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28887,f_28886,target_28885,paths_28883], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28887,f_28886,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28885,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28884,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28883);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28887,f_28886,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28885,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28884,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28883);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28887,f_28886,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28885,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28884,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28883);
}
{
var G__28888 = seq__28824_28877;
var G__28889 = chunk__28825_28878;
var G__28890 = count__28826_28879;
var G__28891 = (i__28827_28880 + (1));
seq__28824_28877 = G__28888;
chunk__28825_28878 = G__28889;
count__28826_28879 = G__28890;
i__28827_28880 = G__28891;
continue;
}
} else
{var temp__4126__auto___28892 = cljs.core.seq.call(null,seq__28824_28877);if(temp__4126__auto___28892)
{var seq__28824_28893__$1 = temp__4126__auto___28892;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28824_28893__$1))
{var c__4408__auto___28894 = cljs.core.chunk_first.call(null,seq__28824_28893__$1);{
var G__28895 = cljs.core.chunk_rest.call(null,seq__28824_28893__$1);
var G__28896 = c__4408__auto___28894;
var G__28897 = cljs.core.count.call(null,c__4408__auto___28894);
var G__28898 = (0);
seq__28824_28877 = G__28895;
chunk__28825_28878 = G__28896;
count__28826_28879 = G__28897;
i__28827_28880 = G__28898;
continue;
}
} else
{var map__28829_28899 = cljs.core.first.call(null,seq__28824_28893__$1);var map__28829_28900__$1 = ((cljs.core.seq_QMARK_.call(null,map__28829_28899))?cljs.core.apply.call(null,cljs.core.hash_map,map__28829_28899):map__28829_28899);var paths_28901 = cljs.core.get.call(null,map__28829_28900__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28902 = cljs.core.get.call(null,map__28829_28900__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28903 = cljs.core.get.call(null,map__28829_28900__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28904 = cljs.core.get.call(null,map__28829_28900__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28905 = cljs.core.get.call(null,map__28829_28900__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28905,f_28904,target_28903,paths_28901], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28905,f_28904,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28903,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28902,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28901);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28905,f_28904,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28903,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28902,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28901);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28905,f_28904,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28903,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28902,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28901);
}
{
var G__28906 = cljs.core.next.call(null,seq__28824_28893__$1);
var G__28907 = null;
var G__28908 = (0);
var G__28909 = (0);
seq__28824_28877 = G__28906;
chunk__28825_28878 = G__28907;
count__28826_28879 = G__28908;
i__28827_28880 = G__28909;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___28910 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___28910,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___28910,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_28850){var state_val_28851 = (state_28850[(1)]);if((state_val_28851 === (7)))
{var inst_28834 = (state_28850[(7)]);var inst_28834__$1 = (state_28850[(2)]);var inst_28835 = cljs.core.seq_QMARK_.call(null,inst_28834__$1);var state_28850__$1 = (function (){var statearr_28852 = state_28850;(statearr_28852[(7)] = inst_28834__$1);
return statearr_28852;
})();if(inst_28835)
{var statearr_28853_28911 = state_28850__$1;(statearr_28853_28911[(1)] = (8));
} else
{var statearr_28854_28912 = state_28850__$1;(statearr_28854_28912[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28851 === (1)))
{var state_28850__$1 = state_28850;var statearr_28855_28913 = state_28850__$1;(statearr_28855_28913[(2)] = null);
(statearr_28855_28913[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28851 === (4)))
{var state_28850__$1 = state_28850;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28850__$1,(7),self__.comm);
} else
{if((state_val_28851 === (6)))
{var inst_28846 = (state_28850[(2)]);var state_28850__$1 = state_28850;var statearr_28856_28914 = state_28850__$1;(statearr_28856_28914[(2)] = inst_28846);
(statearr_28856_28914[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28851 === (3)))
{var inst_28848 = (state_28850[(2)]);var state_28850__$1 = state_28850;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28850__$1,inst_28848);
} else
{if((state_val_28851 === (2)))
{var state_28850__$1 = state_28850;var statearr_28857_28915 = state_28850__$1;(statearr_28857_28915[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28851 === (9)))
{var inst_28834 = (state_28850[(7)]);var state_28850__$1 = state_28850;var statearr_28859_28916 = state_28850__$1;(statearr_28859_28916[(2)] = inst_28834);
(statearr_28859_28916[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28851 === (5)))
{var state_28850__$1 = state_28850;var statearr_28860_28917 = state_28850__$1;(statearr_28860_28917[(2)] = null);
(statearr_28860_28917[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28851 === (10)))
{var inst_28840 = (state_28850[(2)]);var inst_28841 = cljs.core.get.call(null,inst_28840,new cljs.core.Keyword(null,"type","type",1174270348));var inst_28842 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_28841,inst_28840);var state_28850__$1 = (function (){var statearr_28861 = state_28850;(statearr_28861[(8)] = inst_28842);
return statearr_28861;
})();var statearr_28862_28918 = state_28850__$1;(statearr_28862_28918[(2)] = null);
(statearr_28862_28918[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28851 === (8)))
{var inst_28834 = (state_28850[(7)]);var inst_28837 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28834);var state_28850__$1 = state_28850;var statearr_28863_28919 = state_28850__$1;(statearr_28863_28919[(2)] = inst_28837);
(statearr_28863_28919[(1)] = (10));
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
});})(c__9125__auto___28910,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___28910,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28867 = [null,null,null,null,null,null,null,null,null];(statearr_28867[(0)] = state_machine__9111__auto__);
(statearr_28867[(1)] = (1));
return statearr_28867;
});
var state_machine__9111__auto____1 = (function (state_28850){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28850);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28868){if((e28868 instanceof Object))
{var ex__9114__auto__ = e28868;var statearr_28869_28920 = state_28850;(statearr_28869_28920[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28850);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28868;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28921 = state_28850;
state_28850 = G__28921;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28850){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___28910,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_28870 = f__9126__auto__.call(null);(statearr_28870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___28910);
return statearr_28870;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___28910,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28821.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__28871_28922 = cljs.core.seq.call(null,self__.component_defs);var chunk__28872_28923 = null;var count__28873_28924 = (0);var i__28874_28925 = (0);while(true){
if((i__28874_28925 < count__28873_28924))
{var map__28875_28926 = cljs.core._nth.call(null,chunk__28872_28923,i__28874_28925);var map__28875_28927__$1 = ((cljs.core.seq_QMARK_.call(null,map__28875_28926))?cljs.core.apply.call(null,cljs.core.hash_map,map__28875_28926):map__28875_28926);var target_28928 = cljs.core.get.call(null,map__28875_28927__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28928);
{
var G__28929 = seq__28871_28922;
var G__28930 = chunk__28872_28923;
var G__28931 = count__28873_28924;
var G__28932 = (i__28874_28925 + (1));
seq__28871_28922 = G__28929;
chunk__28872_28923 = G__28930;
count__28873_28924 = G__28931;
i__28874_28925 = G__28932;
continue;
}
} else
{var temp__4126__auto___28933 = cljs.core.seq.call(null,seq__28871_28922);if(temp__4126__auto___28933)
{var seq__28871_28934__$1 = temp__4126__auto___28933;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28871_28934__$1))
{var c__4408__auto___28935 = cljs.core.chunk_first.call(null,seq__28871_28934__$1);{
var G__28936 = cljs.core.chunk_rest.call(null,seq__28871_28934__$1);
var G__28937 = c__4408__auto___28935;
var G__28938 = cljs.core.count.call(null,c__4408__auto___28935);
var G__28939 = (0);
seq__28871_28922 = G__28936;
chunk__28872_28923 = G__28937;
count__28873_28924 = G__28938;
i__28874_28925 = G__28939;
continue;
}
} else
{var map__28876_28940 = cljs.core.first.call(null,seq__28871_28934__$1);var map__28876_28941__$1 = ((cljs.core.seq_QMARK_.call(null,map__28876_28940))?cljs.core.apply.call(null,cljs.core.hash_map,map__28876_28940):map__28876_28940);var target_28942 = cljs.core.get.call(null,map__28876_28941__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28942);
{
var G__28943 = cljs.core.next.call(null,seq__28871_28934__$1);
var G__28944 = null;
var G__28945 = (0);
var G__28946 = (0);
seq__28871_28922 = G__28943;
chunk__28872_28923 = G__28944;
count__28873_28924 = G__28945;
i__28874_28925 = G__28946;
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
clustermap.app.t28821.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28823){var self__ = this;
var _28823__$1 = this;return self__.meta28822;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28823,meta28822__$1){var self__ = this;
var _28823__$1 = this;return (new clustermap.app.t28821(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta28822__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t28821 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t28821(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28822){return (new clustermap.app.t28821(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28822));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t28821(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
