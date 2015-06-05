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
clustermap.app.IAppService = (function (){var obj28539 = {};return obj28539;
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
clustermap.app.IAppControl = (function (){var obj28541 = {};return obj28541;
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
clustermap.app.IApp = (function (){var obj28543 = {};return obj28543;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t28600 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t28600 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta28601){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta28601 = meta28601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t28600.cljs$lang$type = true;
clustermap.app.t28600.cljs$lang$ctorStr = "clustermap.app/t28600";
clustermap.app.t28600.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t28600");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28600.prototype.clustermap$app$IApp$ = true;
clustermap.app.t28600.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28600.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28600.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28600.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28600.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28600.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28600.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t28600.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__28603_28656 = cljs.core.seq.call(null,self__.component_defs);var chunk__28604_28657 = null;var count__28605_28658 = (0);var i__28606_28659 = (0);while(true){
if((i__28606_28659 < count__28605_28658))
{var map__28607_28660 = cljs.core._nth.call(null,chunk__28604_28657,i__28606_28659);var map__28607_28661__$1 = ((cljs.core.seq_QMARK_.call(null,map__28607_28660))?cljs.core.apply.call(null,cljs.core.hash_map,map__28607_28660):map__28607_28660);var paths_28662 = cljs.core.get.call(null,map__28607_28661__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28663 = cljs.core.get.call(null,map__28607_28661__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28664 = cljs.core.get.call(null,map__28607_28661__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28665 = cljs.core.get.call(null,map__28607_28661__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28666 = cljs.core.get.call(null,map__28607_28661__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28666,f_28665,target_28664,paths_28662], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28666,f_28665,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28664,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28663,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28662);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28666,f_28665,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28664,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28663,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28662);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28666,f_28665,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28664,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28663,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28662);
}
{
var G__28667 = seq__28603_28656;
var G__28668 = chunk__28604_28657;
var G__28669 = count__28605_28658;
var G__28670 = (i__28606_28659 + (1));
seq__28603_28656 = G__28667;
chunk__28604_28657 = G__28668;
count__28605_28658 = G__28669;
i__28606_28659 = G__28670;
continue;
}
} else
{var temp__4126__auto___28671 = cljs.core.seq.call(null,seq__28603_28656);if(temp__4126__auto___28671)
{var seq__28603_28672__$1 = temp__4126__auto___28671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28603_28672__$1))
{var c__4408__auto___28673 = cljs.core.chunk_first.call(null,seq__28603_28672__$1);{
var G__28674 = cljs.core.chunk_rest.call(null,seq__28603_28672__$1);
var G__28675 = c__4408__auto___28673;
var G__28676 = cljs.core.count.call(null,c__4408__auto___28673);
var G__28677 = (0);
seq__28603_28656 = G__28674;
chunk__28604_28657 = G__28675;
count__28605_28658 = G__28676;
i__28606_28659 = G__28677;
continue;
}
} else
{var map__28608_28678 = cljs.core.first.call(null,seq__28603_28672__$1);var map__28608_28679__$1 = ((cljs.core.seq_QMARK_.call(null,map__28608_28678))?cljs.core.apply.call(null,cljs.core.hash_map,map__28608_28678):map__28608_28678);var paths_28680 = cljs.core.get.call(null,map__28608_28679__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28681 = cljs.core.get.call(null,map__28608_28679__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28682 = cljs.core.get.call(null,map__28608_28679__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28683 = cljs.core.get.call(null,map__28608_28679__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28684 = cljs.core.get.call(null,map__28608_28679__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28684,f_28683,target_28682,paths_28680], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28684,f_28683,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28682,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28681,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28680);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28684,f_28683,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28682,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28681,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28680);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28684,f_28683,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28682,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28681,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28680);
}
{
var G__28685 = cljs.core.next.call(null,seq__28603_28672__$1);
var G__28686 = null;
var G__28687 = (0);
var G__28688 = (0);
seq__28603_28656 = G__28685;
chunk__28604_28657 = G__28686;
count__28605_28658 = G__28687;
i__28606_28659 = G__28688;
continue;
}
}
} else
{}
}
break;
}
var c__11154__auto___28689 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___28689,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___28689,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_28629){var state_val_28630 = (state_28629[(1)]);if((state_val_28630 === (7)))
{var inst_28613 = (state_28629[(7)]);var inst_28613__$1 = (state_28629[(2)]);var inst_28614 = cljs.core.seq_QMARK_.call(null,inst_28613__$1);var state_28629__$1 = (function (){var statearr_28631 = state_28629;(statearr_28631[(7)] = inst_28613__$1);
return statearr_28631;
})();if(inst_28614)
{var statearr_28632_28690 = state_28629__$1;(statearr_28632_28690[(1)] = (8));
} else
{var statearr_28633_28691 = state_28629__$1;(statearr_28633_28691[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28630 === (1)))
{var state_28629__$1 = state_28629;var statearr_28634_28692 = state_28629__$1;(statearr_28634_28692[(2)] = null);
(statearr_28634_28692[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28630 === (4)))
{var state_28629__$1 = state_28629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28629__$1,(7),self__.comm);
} else
{if((state_val_28630 === (6)))
{var inst_28625 = (state_28629[(2)]);var state_28629__$1 = state_28629;var statearr_28635_28693 = state_28629__$1;(statearr_28635_28693[(2)] = inst_28625);
(statearr_28635_28693[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28630 === (3)))
{var inst_28627 = (state_28629[(2)]);var state_28629__$1 = state_28629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28629__$1,inst_28627);
} else
{if((state_val_28630 === (2)))
{var state_28629__$1 = state_28629;var statearr_28636_28694 = state_28629__$1;(statearr_28636_28694[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28630 === (9)))
{var inst_28613 = (state_28629[(7)]);var state_28629__$1 = state_28629;var statearr_28638_28695 = state_28629__$1;(statearr_28638_28695[(2)] = inst_28613);
(statearr_28638_28695[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28630 === (5)))
{var state_28629__$1 = state_28629;var statearr_28639_28696 = state_28629__$1;(statearr_28639_28696[(2)] = null);
(statearr_28639_28696[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28630 === (10)))
{var inst_28619 = (state_28629[(2)]);var inst_28620 = cljs.core.get.call(null,inst_28619,new cljs.core.Keyword(null,"type","type",1174270348));var inst_28621 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_28620,inst_28619);var state_28629__$1 = (function (){var statearr_28640 = state_28629;(statearr_28640[(8)] = inst_28621);
return statearr_28640;
})();var statearr_28641_28697 = state_28629__$1;(statearr_28641_28697[(2)] = null);
(statearr_28641_28697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28630 === (8)))
{var inst_28613 = (state_28629[(7)]);var inst_28616 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28613);var state_28629__$1 = state_28629;var statearr_28642_28698 = state_28629__$1;(statearr_28642_28698[(2)] = inst_28616);
(statearr_28642_28698[(1)] = (10));
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
});})(c__11154__auto___28689,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__11098__auto__,c__11154__auto___28689,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_28646 = [null,null,null,null,null,null,null,null,null];(statearr_28646[(0)] = state_machine__11099__auto__);
(statearr_28646[(1)] = (1));
return statearr_28646;
});
var state_machine__11099__auto____1 = (function (state_28629){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_28629);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e28647){if((e28647 instanceof Object))
{var ex__11102__auto__ = e28647;var statearr_28648_28699 = state_28629;(statearr_28648_28699[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28629);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28647;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28700 = state_28629;
state_28629 = G__28700;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_28629){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_28629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___28689,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__11156__auto__ = (function (){var statearr_28649 = f__11155__auto__.call(null);(statearr_28649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___28689);
return statearr_28649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___28689,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28600.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__28650_28701 = cljs.core.seq.call(null,self__.component_defs);var chunk__28651_28702 = null;var count__28652_28703 = (0);var i__28653_28704 = (0);while(true){
if((i__28653_28704 < count__28652_28703))
{var map__28654_28705 = cljs.core._nth.call(null,chunk__28651_28702,i__28653_28704);var map__28654_28706__$1 = ((cljs.core.seq_QMARK_.call(null,map__28654_28705))?cljs.core.apply.call(null,cljs.core.hash_map,map__28654_28705):map__28654_28705);var target_28707 = cljs.core.get.call(null,map__28654_28706__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28707);
{
var G__28708 = seq__28650_28701;
var G__28709 = chunk__28651_28702;
var G__28710 = count__28652_28703;
var G__28711 = (i__28653_28704 + (1));
seq__28650_28701 = G__28708;
chunk__28651_28702 = G__28709;
count__28652_28703 = G__28710;
i__28653_28704 = G__28711;
continue;
}
} else
{var temp__4126__auto___28712 = cljs.core.seq.call(null,seq__28650_28701);if(temp__4126__auto___28712)
{var seq__28650_28713__$1 = temp__4126__auto___28712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28650_28713__$1))
{var c__4408__auto___28714 = cljs.core.chunk_first.call(null,seq__28650_28713__$1);{
var G__28715 = cljs.core.chunk_rest.call(null,seq__28650_28713__$1);
var G__28716 = c__4408__auto___28714;
var G__28717 = cljs.core.count.call(null,c__4408__auto___28714);
var G__28718 = (0);
seq__28650_28701 = G__28715;
chunk__28651_28702 = G__28716;
count__28652_28703 = G__28717;
i__28653_28704 = G__28718;
continue;
}
} else
{var map__28655_28719 = cljs.core.first.call(null,seq__28650_28713__$1);var map__28655_28720__$1 = ((cljs.core.seq_QMARK_.call(null,map__28655_28719))?cljs.core.apply.call(null,cljs.core.hash_map,map__28655_28719):map__28655_28719);var target_28721 = cljs.core.get.call(null,map__28655_28720__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28721);
{
var G__28722 = cljs.core.next.call(null,seq__28650_28713__$1);
var G__28723 = null;
var G__28724 = (0);
var G__28725 = (0);
seq__28650_28701 = G__28722;
chunk__28651_28702 = G__28723;
count__28652_28703 = G__28724;
i__28653_28704 = G__28725;
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
clustermap.app.t28600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28602){var self__ = this;
var _28602__$1 = this;return self__.meta28601;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28602,meta28601__$1){var self__ = this;
var _28602__$1 = this;return (new clustermap.app.t28600(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta28601__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t28600 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t28600(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28601){return (new clustermap.app.t28600(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28601));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t28600(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
