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
clustermap.app.IAppService = (function (){var obj28527 = {};return obj28527;
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
clustermap.app.IAppControl = (function (){var obj28529 = {};return obj28529;
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
clustermap.app.IApp = (function (){var obj28531 = {};return obj28531;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t28588 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t28588 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta28589){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta28589 = meta28589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t28588.cljs$lang$type = true;
clustermap.app.t28588.cljs$lang$ctorStr = "clustermap.app/t28588";
clustermap.app.t28588.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t28588");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28588.prototype.clustermap$app$IApp$ = true;
clustermap.app.t28588.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28588.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28588.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28588.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28588.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28588.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28588.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t28588.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__28591_28644 = cljs.core.seq.call(null,self__.component_defs);var chunk__28592_28645 = null;var count__28593_28646 = (0);var i__28594_28647 = (0);while(true){
if((i__28594_28647 < count__28593_28646))
{var map__28595_28648 = cljs.core._nth.call(null,chunk__28592_28645,i__28594_28647);var map__28595_28649__$1 = ((cljs.core.seq_QMARK_.call(null,map__28595_28648))?cljs.core.apply.call(null,cljs.core.hash_map,map__28595_28648):map__28595_28648);var paths_28650 = cljs.core.get.call(null,map__28595_28649__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28651 = cljs.core.get.call(null,map__28595_28649__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28652 = cljs.core.get.call(null,map__28595_28649__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28653 = cljs.core.get.call(null,map__28595_28649__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28654 = cljs.core.get.call(null,map__28595_28649__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28654,f_28653,target_28652,paths_28650], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28654,f_28653,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28652,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28651,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28650);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28654,f_28653,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28652,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28651,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28650);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28654,f_28653,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28652,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28651,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28650);
}
{
var G__28655 = seq__28591_28644;
var G__28656 = chunk__28592_28645;
var G__28657 = count__28593_28646;
var G__28658 = (i__28594_28647 + (1));
seq__28591_28644 = G__28655;
chunk__28592_28645 = G__28656;
count__28593_28646 = G__28657;
i__28594_28647 = G__28658;
continue;
}
} else
{var temp__4126__auto___28659 = cljs.core.seq.call(null,seq__28591_28644);if(temp__4126__auto___28659)
{var seq__28591_28660__$1 = temp__4126__auto___28659;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28591_28660__$1))
{var c__4408__auto___28661 = cljs.core.chunk_first.call(null,seq__28591_28660__$1);{
var G__28662 = cljs.core.chunk_rest.call(null,seq__28591_28660__$1);
var G__28663 = c__4408__auto___28661;
var G__28664 = cljs.core.count.call(null,c__4408__auto___28661);
var G__28665 = (0);
seq__28591_28644 = G__28662;
chunk__28592_28645 = G__28663;
count__28593_28646 = G__28664;
i__28594_28647 = G__28665;
continue;
}
} else
{var map__28596_28666 = cljs.core.first.call(null,seq__28591_28660__$1);var map__28596_28667__$1 = ((cljs.core.seq_QMARK_.call(null,map__28596_28666))?cljs.core.apply.call(null,cljs.core.hash_map,map__28596_28666):map__28596_28666);var paths_28668 = cljs.core.get.call(null,map__28596_28667__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28669 = cljs.core.get.call(null,map__28596_28667__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28670 = cljs.core.get.call(null,map__28596_28667__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28671 = cljs.core.get.call(null,map__28596_28667__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28672 = cljs.core.get.call(null,map__28596_28667__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28672,f_28671,target_28670,paths_28668], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28672,f_28671,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28670,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28669,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28668);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28672,f_28671,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28670,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28669,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28668);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28672,f_28671,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28670,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28669,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28668);
}
{
var G__28673 = cljs.core.next.call(null,seq__28591_28660__$1);
var G__28674 = null;
var G__28675 = (0);
var G__28676 = (0);
seq__28591_28644 = G__28673;
chunk__28592_28645 = G__28674;
count__28593_28646 = G__28675;
i__28594_28647 = G__28676;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___28677 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___28677,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___28677,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_28617){var state_val_28618 = (state_28617[(1)]);if((state_val_28618 === (7)))
{var inst_28601 = (state_28617[(7)]);var inst_28601__$1 = (state_28617[(2)]);var inst_28602 = cljs.core.seq_QMARK_.call(null,inst_28601__$1);var state_28617__$1 = (function (){var statearr_28619 = state_28617;(statearr_28619[(7)] = inst_28601__$1);
return statearr_28619;
})();if(inst_28602)
{var statearr_28620_28678 = state_28617__$1;(statearr_28620_28678[(1)] = (8));
} else
{var statearr_28621_28679 = state_28617__$1;(statearr_28621_28679[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28618 === (1)))
{var state_28617__$1 = state_28617;var statearr_28622_28680 = state_28617__$1;(statearr_28622_28680[(2)] = null);
(statearr_28622_28680[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28618 === (4)))
{var state_28617__$1 = state_28617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28617__$1,(7),self__.comm);
} else
{if((state_val_28618 === (6)))
{var inst_28613 = (state_28617[(2)]);var state_28617__$1 = state_28617;var statearr_28623_28681 = state_28617__$1;(statearr_28623_28681[(2)] = inst_28613);
(statearr_28623_28681[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28618 === (3)))
{var inst_28615 = (state_28617[(2)]);var state_28617__$1 = state_28617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28617__$1,inst_28615);
} else
{if((state_val_28618 === (2)))
{var state_28617__$1 = state_28617;var statearr_28624_28682 = state_28617__$1;(statearr_28624_28682[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28618 === (9)))
{var inst_28601 = (state_28617[(7)]);var state_28617__$1 = state_28617;var statearr_28626_28683 = state_28617__$1;(statearr_28626_28683[(2)] = inst_28601);
(statearr_28626_28683[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28618 === (5)))
{var state_28617__$1 = state_28617;var statearr_28627_28684 = state_28617__$1;(statearr_28627_28684[(2)] = null);
(statearr_28627_28684[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28618 === (10)))
{var inst_28607 = (state_28617[(2)]);var inst_28608 = cljs.core.get.call(null,inst_28607,new cljs.core.Keyword(null,"type","type",1174270348));var inst_28609 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_28608,inst_28607);var state_28617__$1 = (function (){var statearr_28628 = state_28617;(statearr_28628[(8)] = inst_28609);
return statearr_28628;
})();var statearr_28629_28685 = state_28617__$1;(statearr_28629_28685[(2)] = null);
(statearr_28629_28685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28618 === (8)))
{var inst_28601 = (state_28617[(7)]);var inst_28604 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28601);var state_28617__$1 = state_28617;var statearr_28630_28686 = state_28617__$1;(statearr_28630_28686[(2)] = inst_28604);
(statearr_28630_28686[(1)] = (10));
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
});})(c__9125__auto___28677,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___28677,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28634 = [null,null,null,null,null,null,null,null,null];(statearr_28634[(0)] = state_machine__9111__auto__);
(statearr_28634[(1)] = (1));
return statearr_28634;
});
var state_machine__9111__auto____1 = (function (state_28617){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28617);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28635){if((e28635 instanceof Object))
{var ex__9114__auto__ = e28635;var statearr_28636_28687 = state_28617;(statearr_28636_28687[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28617);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28635;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28688 = state_28617;
state_28617 = G__28688;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28617){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___28677,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_28637 = f__9126__auto__.call(null);(statearr_28637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___28677);
return statearr_28637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___28677,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28588.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__28638_28689 = cljs.core.seq.call(null,self__.component_defs);var chunk__28639_28690 = null;var count__28640_28691 = (0);var i__28641_28692 = (0);while(true){
if((i__28641_28692 < count__28640_28691))
{var map__28642_28693 = cljs.core._nth.call(null,chunk__28639_28690,i__28641_28692);var map__28642_28694__$1 = ((cljs.core.seq_QMARK_.call(null,map__28642_28693))?cljs.core.apply.call(null,cljs.core.hash_map,map__28642_28693):map__28642_28693);var target_28695 = cljs.core.get.call(null,map__28642_28694__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28695);
{
var G__28696 = seq__28638_28689;
var G__28697 = chunk__28639_28690;
var G__28698 = count__28640_28691;
var G__28699 = (i__28641_28692 + (1));
seq__28638_28689 = G__28696;
chunk__28639_28690 = G__28697;
count__28640_28691 = G__28698;
i__28641_28692 = G__28699;
continue;
}
} else
{var temp__4126__auto___28700 = cljs.core.seq.call(null,seq__28638_28689);if(temp__4126__auto___28700)
{var seq__28638_28701__$1 = temp__4126__auto___28700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28638_28701__$1))
{var c__4408__auto___28702 = cljs.core.chunk_first.call(null,seq__28638_28701__$1);{
var G__28703 = cljs.core.chunk_rest.call(null,seq__28638_28701__$1);
var G__28704 = c__4408__auto___28702;
var G__28705 = cljs.core.count.call(null,c__4408__auto___28702);
var G__28706 = (0);
seq__28638_28689 = G__28703;
chunk__28639_28690 = G__28704;
count__28640_28691 = G__28705;
i__28641_28692 = G__28706;
continue;
}
} else
{var map__28643_28707 = cljs.core.first.call(null,seq__28638_28701__$1);var map__28643_28708__$1 = ((cljs.core.seq_QMARK_.call(null,map__28643_28707))?cljs.core.apply.call(null,cljs.core.hash_map,map__28643_28707):map__28643_28707);var target_28709 = cljs.core.get.call(null,map__28643_28708__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28709);
{
var G__28710 = cljs.core.next.call(null,seq__28638_28701__$1);
var G__28711 = null;
var G__28712 = (0);
var G__28713 = (0);
seq__28638_28689 = G__28710;
chunk__28639_28690 = G__28711;
count__28640_28691 = G__28712;
i__28641_28692 = G__28713;
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
clustermap.app.t28588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28590){var self__ = this;
var _28590__$1 = this;return self__.meta28589;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28590,meta28589__$1){var self__ = this;
var _28590__$1 = this;return (new clustermap.app.t28588(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta28589__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t28588 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t28588(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28589){return (new clustermap.app.t28588(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28589));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t28588(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
