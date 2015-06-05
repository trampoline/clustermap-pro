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
clustermap.app.IAppService = (function (){var obj28097 = {};return obj28097;
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
clustermap.app.IAppControl = (function (){var obj28099 = {};return obj28099;
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
clustermap.app.IApp = (function (){var obj28101 = {};return obj28101;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t28158 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t28158 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta28159){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta28159 = meta28159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t28158.cljs$lang$type = true;
clustermap.app.t28158.cljs$lang$ctorStr = "clustermap.app/t28158";
clustermap.app.t28158.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t28158");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28158.prototype.clustermap$app$IApp$ = true;
clustermap.app.t28158.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28158.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28158.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28158.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28158.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28158.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28158.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t28158.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__28161_28214 = cljs.core.seq.call(null,self__.component_defs);var chunk__28162_28215 = null;var count__28163_28216 = (0);var i__28164_28217 = (0);while(true){
if((i__28164_28217 < count__28163_28216))
{var map__28165_28218 = cljs.core._nth.call(null,chunk__28162_28215,i__28164_28217);var map__28165_28219__$1 = ((cljs.core.seq_QMARK_.call(null,map__28165_28218))?cljs.core.apply.call(null,cljs.core.hash_map,map__28165_28218):map__28165_28218);var paths_28220 = cljs.core.get.call(null,map__28165_28219__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28221 = cljs.core.get.call(null,map__28165_28219__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28222 = cljs.core.get.call(null,map__28165_28219__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28223 = cljs.core.get.call(null,map__28165_28219__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28224 = cljs.core.get.call(null,map__28165_28219__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28224,f_28223,target_28222,paths_28220], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28224,f_28223,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28222,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28221,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28220);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28224,f_28223,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28222,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28221,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28220);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28224,f_28223,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28222,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28221,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28220);
}
{
var G__28225 = seq__28161_28214;
var G__28226 = chunk__28162_28215;
var G__28227 = count__28163_28216;
var G__28228 = (i__28164_28217 + (1));
seq__28161_28214 = G__28225;
chunk__28162_28215 = G__28226;
count__28163_28216 = G__28227;
i__28164_28217 = G__28228;
continue;
}
} else
{var temp__4126__auto___28229 = cljs.core.seq.call(null,seq__28161_28214);if(temp__4126__auto___28229)
{var seq__28161_28230__$1 = temp__4126__auto___28229;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28161_28230__$1))
{var c__4408__auto___28231 = cljs.core.chunk_first.call(null,seq__28161_28230__$1);{
var G__28232 = cljs.core.chunk_rest.call(null,seq__28161_28230__$1);
var G__28233 = c__4408__auto___28231;
var G__28234 = cljs.core.count.call(null,c__4408__auto___28231);
var G__28235 = (0);
seq__28161_28214 = G__28232;
chunk__28162_28215 = G__28233;
count__28163_28216 = G__28234;
i__28164_28217 = G__28235;
continue;
}
} else
{var map__28166_28236 = cljs.core.first.call(null,seq__28161_28230__$1);var map__28166_28237__$1 = ((cljs.core.seq_QMARK_.call(null,map__28166_28236))?cljs.core.apply.call(null,cljs.core.hash_map,map__28166_28236):map__28166_28236);var paths_28238 = cljs.core.get.call(null,map__28166_28237__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28239 = cljs.core.get.call(null,map__28166_28237__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28240 = cljs.core.get.call(null,map__28166_28237__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28241 = cljs.core.get.call(null,map__28166_28237__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28242 = cljs.core.get.call(null,map__28166_28237__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28242,f_28241,target_28240,paths_28238], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28242,f_28241,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28240,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28239,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28238);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28242,f_28241,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28240,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28239,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28238);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28242,f_28241,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28240,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28239,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28238);
}
{
var G__28243 = cljs.core.next.call(null,seq__28161_28230__$1);
var G__28244 = null;
var G__28245 = (0);
var G__28246 = (0);
seq__28161_28214 = G__28243;
chunk__28162_28215 = G__28244;
count__28163_28216 = G__28245;
i__28164_28217 = G__28246;
continue;
}
}
} else
{}
}
break;
}
var c__11517__auto___28247 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___28247,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___28247,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_28187){var state_val_28188 = (state_28187[(1)]);if((state_val_28188 === (7)))
{var inst_28171 = (state_28187[(7)]);var inst_28171__$1 = (state_28187[(2)]);var inst_28172 = cljs.core.seq_QMARK_.call(null,inst_28171__$1);var state_28187__$1 = (function (){var statearr_28189 = state_28187;(statearr_28189[(7)] = inst_28171__$1);
return statearr_28189;
})();if(inst_28172)
{var statearr_28190_28248 = state_28187__$1;(statearr_28190_28248[(1)] = (8));
} else
{var statearr_28191_28249 = state_28187__$1;(statearr_28191_28249[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28188 === (1)))
{var state_28187__$1 = state_28187;var statearr_28192_28250 = state_28187__$1;(statearr_28192_28250[(2)] = null);
(statearr_28192_28250[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28188 === (4)))
{var state_28187__$1 = state_28187;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28187__$1,(7),self__.comm);
} else
{if((state_val_28188 === (6)))
{var inst_28183 = (state_28187[(2)]);var state_28187__$1 = state_28187;var statearr_28193_28251 = state_28187__$1;(statearr_28193_28251[(2)] = inst_28183);
(statearr_28193_28251[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28188 === (3)))
{var inst_28185 = (state_28187[(2)]);var state_28187__$1 = state_28187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28187__$1,inst_28185);
} else
{if((state_val_28188 === (2)))
{var state_28187__$1 = state_28187;var statearr_28194_28252 = state_28187__$1;(statearr_28194_28252[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28188 === (9)))
{var inst_28171 = (state_28187[(7)]);var state_28187__$1 = state_28187;var statearr_28196_28253 = state_28187__$1;(statearr_28196_28253[(2)] = inst_28171);
(statearr_28196_28253[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28188 === (5)))
{var state_28187__$1 = state_28187;var statearr_28197_28254 = state_28187__$1;(statearr_28197_28254[(2)] = null);
(statearr_28197_28254[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28188 === (10)))
{var inst_28177 = (state_28187[(2)]);var inst_28178 = cljs.core.get.call(null,inst_28177,new cljs.core.Keyword(null,"type","type",1174270348));var inst_28179 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_28178,inst_28177);var state_28187__$1 = (function (){var statearr_28198 = state_28187;(statearr_28198[(8)] = inst_28179);
return statearr_28198;
})();var statearr_28199_28255 = state_28187__$1;(statearr_28199_28255[(2)] = null);
(statearr_28199_28255[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28188 === (8)))
{var inst_28171 = (state_28187[(7)]);var inst_28174 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28171);var state_28187__$1 = state_28187;var statearr_28200_28256 = state_28187__$1;(statearr_28200_28256[(2)] = inst_28174);
(statearr_28200_28256[(1)] = (10));
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
});})(c__11517__auto___28247,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__11461__auto__,c__11517__auto___28247,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_28204 = [null,null,null,null,null,null,null,null,null];(statearr_28204[(0)] = state_machine__11462__auto__);
(statearr_28204[(1)] = (1));
return statearr_28204;
});
var state_machine__11462__auto____1 = (function (state_28187){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_28187);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e28205){if((e28205 instanceof Object))
{var ex__11465__auto__ = e28205;var statearr_28206_28257 = state_28187;(statearr_28206_28257[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28187);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28205;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28258 = state_28187;
state_28187 = G__28258;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_28187){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_28187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___28247,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__11519__auto__ = (function (){var statearr_28207 = f__11518__auto__.call(null);(statearr_28207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___28247);
return statearr_28207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___28247,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28158.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__28208_28259 = cljs.core.seq.call(null,self__.component_defs);var chunk__28209_28260 = null;var count__28210_28261 = (0);var i__28211_28262 = (0);while(true){
if((i__28211_28262 < count__28210_28261))
{var map__28212_28263 = cljs.core._nth.call(null,chunk__28209_28260,i__28211_28262);var map__28212_28264__$1 = ((cljs.core.seq_QMARK_.call(null,map__28212_28263))?cljs.core.apply.call(null,cljs.core.hash_map,map__28212_28263):map__28212_28263);var target_28265 = cljs.core.get.call(null,map__28212_28264__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28265);
{
var G__28266 = seq__28208_28259;
var G__28267 = chunk__28209_28260;
var G__28268 = count__28210_28261;
var G__28269 = (i__28211_28262 + (1));
seq__28208_28259 = G__28266;
chunk__28209_28260 = G__28267;
count__28210_28261 = G__28268;
i__28211_28262 = G__28269;
continue;
}
} else
{var temp__4126__auto___28270 = cljs.core.seq.call(null,seq__28208_28259);if(temp__4126__auto___28270)
{var seq__28208_28271__$1 = temp__4126__auto___28270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28208_28271__$1))
{var c__4408__auto___28272 = cljs.core.chunk_first.call(null,seq__28208_28271__$1);{
var G__28273 = cljs.core.chunk_rest.call(null,seq__28208_28271__$1);
var G__28274 = c__4408__auto___28272;
var G__28275 = cljs.core.count.call(null,c__4408__auto___28272);
var G__28276 = (0);
seq__28208_28259 = G__28273;
chunk__28209_28260 = G__28274;
count__28210_28261 = G__28275;
i__28211_28262 = G__28276;
continue;
}
} else
{var map__28213_28277 = cljs.core.first.call(null,seq__28208_28271__$1);var map__28213_28278__$1 = ((cljs.core.seq_QMARK_.call(null,map__28213_28277))?cljs.core.apply.call(null,cljs.core.hash_map,map__28213_28277):map__28213_28277);var target_28279 = cljs.core.get.call(null,map__28213_28278__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28279);
{
var G__28280 = cljs.core.next.call(null,seq__28208_28271__$1);
var G__28281 = null;
var G__28282 = (0);
var G__28283 = (0);
seq__28208_28259 = G__28280;
chunk__28209_28260 = G__28281;
count__28210_28261 = G__28282;
i__28211_28262 = G__28283;
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
clustermap.app.t28158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28160){var self__ = this;
var _28160__$1 = this;return self__.meta28159;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28160,meta28159__$1){var self__ = this;
var _28160__$1 = this;return (new clustermap.app.t28158(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta28159__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t28158 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t28158(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28159){return (new clustermap.app.t28158(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28159));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t28158(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
