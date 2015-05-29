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
clustermap.app.IAppService = (function (){var obj27096 = {};return obj27096;
})();
clustermap.app.init = (function init(this$,app){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.clustermap$app$IAppService$init$arity$2;
} else
{return and__11502__auto__;
}
})())
{return this$.clustermap$app$IAppService$init$arity$2(this$,app);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (clustermap.app.init[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (clustermap.app.init["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.init",this$);
}
}
})().call(null,this$,app);
}
});
clustermap.app.destroy = (function destroy(this$,app){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.clustermap$app$IAppService$destroy$arity$2;
} else
{return and__11502__auto__;
}
})())
{return this$.clustermap$app$IAppService$destroy$arity$2(this$,app);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (clustermap.app.destroy[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (clustermap.app.destroy["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.destroy",this$);
}
}
})().call(null,this$,app);
}
});
clustermap.app.handle_event = (function handle_event(this$,app,type,val){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.clustermap$app$IAppService$handle_event$arity$4;
} else
{return and__11502__auto__;
}
})())
{return this$.clustermap$app$IAppService$handle_event$arity$4(this$,app,type,val);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (clustermap.app.handle_event[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (clustermap.app.handle_event["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.handle-event",this$);
}
}
})().call(null,this$,app,type,val);
}
});
clustermap.app.dev_mode_QMARK_ = (function dev_mode_QMARK_(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.clustermap$app$IAppService$dev_mode_QMARK_$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.clustermap$app$IAppService$dev_mode_QMARK_$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (clustermap.app.dev_mode_QMARK_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (clustermap.app.dev_mode_QMARK_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.dev-mode?",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.IAppControl = (function (){var obj27098 = {};return obj27098;
})();
clustermap.app.start = (function start(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.clustermap$app$IAppControl$start$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.clustermap$app$IAppControl$start$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (clustermap.app.start[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (clustermap.app.start["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppControl.start",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.stop = (function stop(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.clustermap$app$IAppControl$stop$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.clustermap$app$IAppControl$stop$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (clustermap.app.stop[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (clustermap.app.stop["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppControl.stop",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.IApp = (function (){var obj27100 = {};return obj27100;
})();
clustermap.app.get_state = (function get_state(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.clustermap$app$IApp$get_state$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.clustermap$app$IApp$get_state$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (clustermap.app.get_state[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (clustermap.app.get_state["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-state",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_comm = (function get_comm(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.clustermap$app$IApp$get_comm$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.clustermap$app$IApp$get_comm$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (clustermap.app.get_comm[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (clustermap.app.get_comm["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-comm",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_filter_rq = (function get_filter_rq(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.clustermap$app$IApp$get_filter_rq$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.clustermap$app$IApp$get_filter_rq$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (clustermap.app.get_filter_rq[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (clustermap.app.get_filter_rq["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-filter-rq",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_history = (function get_history(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.clustermap$app$IApp$get_history$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.clustermap$app$IApp$get_history$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (clustermap.app.get_history[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (clustermap.app.get_history["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-history",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_navigator_fn = (function get_navigator_fn(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.clustermap$app$IApp$get_navigator_fn$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.clustermap$app$IApp$get_navigator_fn$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (clustermap.app.get_navigator_fn[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (clustermap.app.get_navigator_fn["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-navigator-fn",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.navigate = (function navigate(this$,view){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.clustermap$app$IApp$navigate$arity$2;
} else
{return and__11502__auto__;
}
})())
{return this$.clustermap$app$IApp$navigate$arity$2(this$,view);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (clustermap.app.navigate[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (clustermap.app.navigate["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.navigate",this$);
}
}
})().call(null,this$,view);
}
});
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t27157 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t27157 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta27158){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta27158 = meta27158;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t27157.cljs$lang$type = true;
clustermap.app.t27157.cljs$lang$ctorStr = "clustermap.app/t27157";
clustermap.app.t27157.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.app/t27157");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27157.prototype.clustermap$app$IApp$ = true;
clustermap.app.t27157.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27157.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27157.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27157.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27157.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27157.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27157.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t27157.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__27160_27213 = cljs.core.seq.call(null,self__.component_defs);var chunk__27161_27214 = null;var count__27162_27215 = (0);var i__27163_27216 = (0);while(true){
if((i__27163_27216 < count__27162_27215))
{var map__27164_27217 = cljs.core._nth.call(null,chunk__27161_27214,i__27163_27216);var map__27164_27218__$1 = ((cljs.core.seq_QMARK_.call(null,map__27164_27217))?cljs.core.apply.call(null,cljs.core.hash_map,map__27164_27217):map__27164_27217);var paths_27219 = cljs.core.get.call(null,map__27164_27218__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_27220 = cljs.core.get.call(null,map__27164_27218__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_27221 = cljs.core.get.call(null,map__27164_27218__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_27222 = cljs.core.get.call(null,map__27164_27218__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_27223 = cljs.core.get.call(null,map__27164_27218__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_27223,f_27222,target_27221,paths_27219], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_27223,f_27222,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_27221,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_27220,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_27219);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_27223,f_27222,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_27221,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_27220,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_27219);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_27223,f_27222,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_27221,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_27220,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_27219);
}
{
var G__27224 = seq__27160_27213;
var G__27225 = chunk__27161_27214;
var G__27226 = count__27162_27215;
var G__27227 = (i__27163_27216 + (1));
seq__27160_27213 = G__27224;
chunk__27161_27214 = G__27225;
count__27162_27215 = G__27226;
i__27163_27216 = G__27227;
continue;
}
} else
{var temp__4126__auto___27228 = cljs.core.seq.call(null,seq__27160_27213);if(temp__4126__auto___27228)
{var seq__27160_27229__$1 = temp__4126__auto___27228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27160_27229__$1))
{var c__12283__auto___27230 = cljs.core.chunk_first.call(null,seq__27160_27229__$1);{
var G__27231 = cljs.core.chunk_rest.call(null,seq__27160_27229__$1);
var G__27232 = c__12283__auto___27230;
var G__27233 = cljs.core.count.call(null,c__12283__auto___27230);
var G__27234 = (0);
seq__27160_27213 = G__27231;
chunk__27161_27214 = G__27232;
count__27162_27215 = G__27233;
i__27163_27216 = G__27234;
continue;
}
} else
{var map__27165_27235 = cljs.core.first.call(null,seq__27160_27229__$1);var map__27165_27236__$1 = ((cljs.core.seq_QMARK_.call(null,map__27165_27235))?cljs.core.apply.call(null,cljs.core.hash_map,map__27165_27235):map__27165_27235);var paths_27237 = cljs.core.get.call(null,map__27165_27236__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_27238 = cljs.core.get.call(null,map__27165_27236__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_27239 = cljs.core.get.call(null,map__27165_27236__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_27240 = cljs.core.get.call(null,map__27165_27236__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_27241 = cljs.core.get.call(null,map__27165_27236__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_27241,f_27240,target_27239,paths_27237], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_27241,f_27240,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_27239,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_27238,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_27237);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_27241,f_27240,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_27239,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_27238,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_27237);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_27241,f_27240,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_27239,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_27238,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_27237);
}
{
var G__27242 = cljs.core.next.call(null,seq__27160_27229__$1);
var G__27243 = null;
var G__27244 = (0);
var G__27245 = (0);
seq__27160_27213 = G__27242;
chunk__27161_27214 = G__27243;
count__27162_27215 = G__27244;
i__27163_27216 = G__27245;
continue;
}
}
} else
{}
}
break;
}
var c__18867__auto___27246 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___27246,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___27246,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_27186){var state_val_27187 = (state_27186[(1)]);if((state_val_27187 === (7)))
{var inst_27170 = (state_27186[(7)]);var inst_27170__$1 = (state_27186[(2)]);var inst_27171 = cljs.core.seq_QMARK_.call(null,inst_27170__$1);var state_27186__$1 = (function (){var statearr_27188 = state_27186;(statearr_27188[(7)] = inst_27170__$1);
return statearr_27188;
})();if(inst_27171)
{var statearr_27189_27247 = state_27186__$1;(statearr_27189_27247[(1)] = (8));
} else
{var statearr_27190_27248 = state_27186__$1;(statearr_27190_27248[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27187 === (1)))
{var state_27186__$1 = state_27186;var statearr_27191_27249 = state_27186__$1;(statearr_27191_27249[(2)] = null);
(statearr_27191_27249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27187 === (4)))
{var state_27186__$1 = state_27186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27186__$1,(7),self__.comm);
} else
{if((state_val_27187 === (6)))
{var inst_27182 = (state_27186[(2)]);var state_27186__$1 = state_27186;var statearr_27192_27250 = state_27186__$1;(statearr_27192_27250[(2)] = inst_27182);
(statearr_27192_27250[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27187 === (3)))
{var inst_27184 = (state_27186[(2)]);var state_27186__$1 = state_27186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27186__$1,inst_27184);
} else
{if((state_val_27187 === (2)))
{var state_27186__$1 = state_27186;var statearr_27193_27251 = state_27186__$1;(statearr_27193_27251[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27187 === (9)))
{var inst_27170 = (state_27186[(7)]);var state_27186__$1 = state_27186;var statearr_27195_27252 = state_27186__$1;(statearr_27195_27252[(2)] = inst_27170);
(statearr_27195_27252[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27187 === (5)))
{var state_27186__$1 = state_27186;var statearr_27196_27253 = state_27186__$1;(statearr_27196_27253[(2)] = null);
(statearr_27196_27253[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27187 === (10)))
{var inst_27176 = (state_27186[(2)]);var inst_27177 = cljs.core.get.call(null,inst_27176,new cljs.core.Keyword(null,"type","type",1174270348));var inst_27178 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_27177,inst_27176);var state_27186__$1 = (function (){var statearr_27197 = state_27186;(statearr_27197[(8)] = inst_27178);
return statearr_27197;
})();var statearr_27198_27254 = state_27186__$1;(statearr_27198_27254[(2)] = null);
(statearr_27198_27254[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27187 === (8)))
{var inst_27170 = (state_27186[(7)]);var inst_27173 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27170);var state_27186__$1 = state_27186;var statearr_27199_27255 = state_27186__$1;(statearr_27199_27255[(2)] = inst_27173);
(statearr_27199_27255[(1)] = (10));
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
});})(c__18867__auto___27246,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__18811__auto__,c__18867__auto___27246,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_27203 = [null,null,null,null,null,null,null,null,null];(statearr_27203[(0)] = state_machine__18812__auto__);
(statearr_27203[(1)] = (1));
return statearr_27203;
});
var state_machine__18812__auto____1 = (function (state_27186){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_27186);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e27204){if((e27204 instanceof Object))
{var ex__18815__auto__ = e27204;var statearr_27205_27256 = state_27186;(statearr_27205_27256[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27186);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27204;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27257 = state_27186;
state_27186 = G__27257;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_27186){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_27186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___27246,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__18869__auto__ = (function (){var statearr_27206 = f__18868__auto__.call(null);(statearr_27206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___27246);
return statearr_27206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___27246,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27157.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__27207_27258 = cljs.core.seq.call(null,self__.component_defs);var chunk__27208_27259 = null;var count__27209_27260 = (0);var i__27210_27261 = (0);while(true){
if((i__27210_27261 < count__27209_27260))
{var map__27211_27262 = cljs.core._nth.call(null,chunk__27208_27259,i__27210_27261);var map__27211_27263__$1 = ((cljs.core.seq_QMARK_.call(null,map__27211_27262))?cljs.core.apply.call(null,cljs.core.hash_map,map__27211_27262):map__27211_27262);var target_27264 = cljs.core.get.call(null,map__27211_27263__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_27264);
{
var G__27265 = seq__27207_27258;
var G__27266 = chunk__27208_27259;
var G__27267 = count__27209_27260;
var G__27268 = (i__27210_27261 + (1));
seq__27207_27258 = G__27265;
chunk__27208_27259 = G__27266;
count__27209_27260 = G__27267;
i__27210_27261 = G__27268;
continue;
}
} else
{var temp__4126__auto___27269 = cljs.core.seq.call(null,seq__27207_27258);if(temp__4126__auto___27269)
{var seq__27207_27270__$1 = temp__4126__auto___27269;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27207_27270__$1))
{var c__12283__auto___27271 = cljs.core.chunk_first.call(null,seq__27207_27270__$1);{
var G__27272 = cljs.core.chunk_rest.call(null,seq__27207_27270__$1);
var G__27273 = c__12283__auto___27271;
var G__27274 = cljs.core.count.call(null,c__12283__auto___27271);
var G__27275 = (0);
seq__27207_27258 = G__27272;
chunk__27208_27259 = G__27273;
count__27209_27260 = G__27274;
i__27210_27261 = G__27275;
continue;
}
} else
{var map__27212_27276 = cljs.core.first.call(null,seq__27207_27270__$1);var map__27212_27277__$1 = ((cljs.core.seq_QMARK_.call(null,map__27212_27276))?cljs.core.apply.call(null,cljs.core.hash_map,map__27212_27276):map__27212_27276);var target_27278 = cljs.core.get.call(null,map__27212_27277__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_27278);
{
var G__27279 = cljs.core.next.call(null,seq__27207_27270__$1);
var G__27280 = null;
var G__27281 = (0);
var G__27282 = (0);
seq__27207_27258 = G__27279;
chunk__27208_27259 = G__27280;
count__27209_27260 = G__27281;
i__27210_27261 = G__27282;
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
clustermap.app.t27157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_27159){var self__ = this;
var _27159__$1 = this;return self__.meta27158;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t27157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_27159,meta27158__$1){var self__ = this;
var _27159__$1 = this;return (new clustermap.app.t27157(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta27158__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t27157 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t27157(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta27158){return (new clustermap.app.t27157(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta27158));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t27157(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
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