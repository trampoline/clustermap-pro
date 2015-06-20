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
clustermap.app.IAppService = (function (){var obj29103 = {};return obj29103;
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
clustermap.app.IAppControl = (function (){var obj29105 = {};return obj29105;
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
clustermap.app.IApp = (function (){var obj29107 = {};return obj29107;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t29164 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t29164 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta29165){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta29165 = meta29165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t29164.cljs$lang$type = true;
clustermap.app.t29164.cljs$lang$ctorStr = "clustermap.app/t29164";
clustermap.app.t29164.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t29164");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29164.prototype.clustermap$app$IApp$ = true;
clustermap.app.t29164.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29164.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29164.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29164.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29164.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29164.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29164.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t29164.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__29167_29220 = cljs.core.seq.call(null,self__.component_defs);var chunk__29168_29221 = null;var count__29169_29222 = (0);var i__29170_29223 = (0);while(true){
if((i__29170_29223 < count__29169_29222))
{var map__29171_29224 = cljs.core._nth.call(null,chunk__29168_29221,i__29170_29223);var map__29171_29225__$1 = ((cljs.core.seq_QMARK_.call(null,map__29171_29224))?cljs.core.apply.call(null,cljs.core.hash_map,map__29171_29224):map__29171_29224);var paths_29226 = cljs.core.get.call(null,map__29171_29225__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29227 = cljs.core.get.call(null,map__29171_29225__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29228 = cljs.core.get.call(null,map__29171_29225__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29229 = cljs.core.get.call(null,map__29171_29225__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29230 = cljs.core.get.call(null,map__29171_29225__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29230,f_29229,target_29228,paths_29226], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29230,f_29229,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29228,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29227,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29226);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29230,f_29229,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29228,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29227,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29226);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29230,f_29229,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29228,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29227,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29226);
}
{
var G__29231 = seq__29167_29220;
var G__29232 = chunk__29168_29221;
var G__29233 = count__29169_29222;
var G__29234 = (i__29170_29223 + (1));
seq__29167_29220 = G__29231;
chunk__29168_29221 = G__29232;
count__29169_29222 = G__29233;
i__29170_29223 = G__29234;
continue;
}
} else
{var temp__4126__auto___29235 = cljs.core.seq.call(null,seq__29167_29220);if(temp__4126__auto___29235)
{var seq__29167_29236__$1 = temp__4126__auto___29235;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29167_29236__$1))
{var c__4408__auto___29237 = cljs.core.chunk_first.call(null,seq__29167_29236__$1);{
var G__29238 = cljs.core.chunk_rest.call(null,seq__29167_29236__$1);
var G__29239 = c__4408__auto___29237;
var G__29240 = cljs.core.count.call(null,c__4408__auto___29237);
var G__29241 = (0);
seq__29167_29220 = G__29238;
chunk__29168_29221 = G__29239;
count__29169_29222 = G__29240;
i__29170_29223 = G__29241;
continue;
}
} else
{var map__29172_29242 = cljs.core.first.call(null,seq__29167_29236__$1);var map__29172_29243__$1 = ((cljs.core.seq_QMARK_.call(null,map__29172_29242))?cljs.core.apply.call(null,cljs.core.hash_map,map__29172_29242):map__29172_29242);var paths_29244 = cljs.core.get.call(null,map__29172_29243__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29245 = cljs.core.get.call(null,map__29172_29243__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29246 = cljs.core.get.call(null,map__29172_29243__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29247 = cljs.core.get.call(null,map__29172_29243__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29248 = cljs.core.get.call(null,map__29172_29243__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29248,f_29247,target_29246,paths_29244], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29248,f_29247,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29246,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29245,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29244);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29248,f_29247,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29246,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29245,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29244);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29248,f_29247,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29246,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29245,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29244);
}
{
var G__29249 = cljs.core.next.call(null,seq__29167_29236__$1);
var G__29250 = null;
var G__29251 = (0);
var G__29252 = (0);
seq__29167_29220 = G__29249;
chunk__29168_29221 = G__29250;
count__29169_29222 = G__29251;
i__29170_29223 = G__29252;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___29253 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___29253,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___29253,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_29193){var state_val_29194 = (state_29193[(1)]);if((state_val_29194 === (7)))
{var inst_29177 = (state_29193[(7)]);var inst_29177__$1 = (state_29193[(2)]);var inst_29178 = cljs.core.seq_QMARK_.call(null,inst_29177__$1);var state_29193__$1 = (function (){var statearr_29195 = state_29193;(statearr_29195[(7)] = inst_29177__$1);
return statearr_29195;
})();if(inst_29178)
{var statearr_29196_29254 = state_29193__$1;(statearr_29196_29254[(1)] = (8));
} else
{var statearr_29197_29255 = state_29193__$1;(statearr_29197_29255[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29194 === (1)))
{var state_29193__$1 = state_29193;var statearr_29198_29256 = state_29193__$1;(statearr_29198_29256[(2)] = null);
(statearr_29198_29256[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29194 === (4)))
{var state_29193__$1 = state_29193;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29193__$1,(7),self__.comm);
} else
{if((state_val_29194 === (6)))
{var inst_29189 = (state_29193[(2)]);var state_29193__$1 = state_29193;var statearr_29199_29257 = state_29193__$1;(statearr_29199_29257[(2)] = inst_29189);
(statearr_29199_29257[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29194 === (3)))
{var inst_29191 = (state_29193[(2)]);var state_29193__$1 = state_29193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29193__$1,inst_29191);
} else
{if((state_val_29194 === (2)))
{var state_29193__$1 = state_29193;var statearr_29200_29258 = state_29193__$1;(statearr_29200_29258[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29194 === (9)))
{var inst_29177 = (state_29193[(7)]);var state_29193__$1 = state_29193;var statearr_29202_29259 = state_29193__$1;(statearr_29202_29259[(2)] = inst_29177);
(statearr_29202_29259[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29194 === (5)))
{var state_29193__$1 = state_29193;var statearr_29203_29260 = state_29193__$1;(statearr_29203_29260[(2)] = null);
(statearr_29203_29260[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29194 === (10)))
{var inst_29183 = (state_29193[(2)]);var inst_29184 = cljs.core.get.call(null,inst_29183,new cljs.core.Keyword(null,"type","type",1174270348));var inst_29185 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_29184,inst_29183);var state_29193__$1 = (function (){var statearr_29204 = state_29193;(statearr_29204[(8)] = inst_29185);
return statearr_29204;
})();var statearr_29205_29261 = state_29193__$1;(statearr_29205_29261[(2)] = null);
(statearr_29205_29261[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29194 === (8)))
{var inst_29177 = (state_29193[(7)]);var inst_29180 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29177);var state_29193__$1 = state_29193;var statearr_29206_29262 = state_29193__$1;(statearr_29206_29262[(2)] = inst_29180);
(statearr_29206_29262[(1)] = (10));
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
});})(c__9125__auto___29253,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___29253,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29210 = [null,null,null,null,null,null,null,null,null];(statearr_29210[(0)] = state_machine__9111__auto__);
(statearr_29210[(1)] = (1));
return statearr_29210;
});
var state_machine__9111__auto____1 = (function (state_29193){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29193);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29211){if((e29211 instanceof Object))
{var ex__9114__auto__ = e29211;var statearr_29212_29263 = state_29193;(statearr_29212_29263[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29193);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29211;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29264 = state_29193;
state_29193 = G__29264;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29193){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___29253,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_29213 = f__9126__auto__.call(null);(statearr_29213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___29253);
return statearr_29213;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___29253,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29164.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__29214_29265 = cljs.core.seq.call(null,self__.component_defs);var chunk__29215_29266 = null;var count__29216_29267 = (0);var i__29217_29268 = (0);while(true){
if((i__29217_29268 < count__29216_29267))
{var map__29218_29269 = cljs.core._nth.call(null,chunk__29215_29266,i__29217_29268);var map__29218_29270__$1 = ((cljs.core.seq_QMARK_.call(null,map__29218_29269))?cljs.core.apply.call(null,cljs.core.hash_map,map__29218_29269):map__29218_29269);var target_29271 = cljs.core.get.call(null,map__29218_29270__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29271);
{
var G__29272 = seq__29214_29265;
var G__29273 = chunk__29215_29266;
var G__29274 = count__29216_29267;
var G__29275 = (i__29217_29268 + (1));
seq__29214_29265 = G__29272;
chunk__29215_29266 = G__29273;
count__29216_29267 = G__29274;
i__29217_29268 = G__29275;
continue;
}
} else
{var temp__4126__auto___29276 = cljs.core.seq.call(null,seq__29214_29265);if(temp__4126__auto___29276)
{var seq__29214_29277__$1 = temp__4126__auto___29276;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29214_29277__$1))
{var c__4408__auto___29278 = cljs.core.chunk_first.call(null,seq__29214_29277__$1);{
var G__29279 = cljs.core.chunk_rest.call(null,seq__29214_29277__$1);
var G__29280 = c__4408__auto___29278;
var G__29281 = cljs.core.count.call(null,c__4408__auto___29278);
var G__29282 = (0);
seq__29214_29265 = G__29279;
chunk__29215_29266 = G__29280;
count__29216_29267 = G__29281;
i__29217_29268 = G__29282;
continue;
}
} else
{var map__29219_29283 = cljs.core.first.call(null,seq__29214_29277__$1);var map__29219_29284__$1 = ((cljs.core.seq_QMARK_.call(null,map__29219_29283))?cljs.core.apply.call(null,cljs.core.hash_map,map__29219_29283):map__29219_29283);var target_29285 = cljs.core.get.call(null,map__29219_29284__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29285);
{
var G__29286 = cljs.core.next.call(null,seq__29214_29277__$1);
var G__29287 = null;
var G__29288 = (0);
var G__29289 = (0);
seq__29214_29265 = G__29286;
chunk__29215_29266 = G__29287;
count__29216_29267 = G__29288;
i__29217_29268 = G__29289;
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
clustermap.app.t29164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29166){var self__ = this;
var _29166__$1 = this;return self__.meta29165;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29166,meta29165__$1){var self__ = this;
var _29166__$1 = this;return (new clustermap.app.t29164(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta29165__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t29164 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t29164(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29165){return (new clustermap.app.t29164(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29165));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t29164(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
