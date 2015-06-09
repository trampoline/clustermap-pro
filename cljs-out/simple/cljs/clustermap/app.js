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
clustermap.app.IAppService = (function (){var obj28745 = {};return obj28745;
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
clustermap.app.IAppControl = (function (){var obj28747 = {};return obj28747;
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
clustermap.app.IApp = (function (){var obj28749 = {};return obj28749;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t28806 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t28806 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta28807){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta28807 = meta28807;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t28806.cljs$lang$type = true;
clustermap.app.t28806.cljs$lang$ctorStr = "clustermap.app/t28806";
clustermap.app.t28806.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t28806");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28806.prototype.clustermap$app$IApp$ = true;
clustermap.app.t28806.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28806.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28806.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28806.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28806.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28806.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28806.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t28806.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__28809_28862 = cljs.core.seq.call(null,self__.component_defs);var chunk__28810_28863 = null;var count__28811_28864 = (0);var i__28812_28865 = (0);while(true){
if((i__28812_28865 < count__28811_28864))
{var map__28813_28866 = cljs.core._nth.call(null,chunk__28810_28863,i__28812_28865);var map__28813_28867__$1 = ((cljs.core.seq_QMARK_.call(null,map__28813_28866))?cljs.core.apply.call(null,cljs.core.hash_map,map__28813_28866):map__28813_28866);var paths_28868 = cljs.core.get.call(null,map__28813_28867__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28869 = cljs.core.get.call(null,map__28813_28867__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28870 = cljs.core.get.call(null,map__28813_28867__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28871 = cljs.core.get.call(null,map__28813_28867__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28872 = cljs.core.get.call(null,map__28813_28867__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28872,f_28871,target_28870,paths_28868], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28872,f_28871,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28870,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28869,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28868);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28872,f_28871,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28870,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28869,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28868);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28872,f_28871,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28870,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28869,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28868);
}
{
var G__28873 = seq__28809_28862;
var G__28874 = chunk__28810_28863;
var G__28875 = count__28811_28864;
var G__28876 = (i__28812_28865 + (1));
seq__28809_28862 = G__28873;
chunk__28810_28863 = G__28874;
count__28811_28864 = G__28875;
i__28812_28865 = G__28876;
continue;
}
} else
{var temp__4126__auto___28877 = cljs.core.seq.call(null,seq__28809_28862);if(temp__4126__auto___28877)
{var seq__28809_28878__$1 = temp__4126__auto___28877;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28809_28878__$1))
{var c__4408__auto___28879 = cljs.core.chunk_first.call(null,seq__28809_28878__$1);{
var G__28880 = cljs.core.chunk_rest.call(null,seq__28809_28878__$1);
var G__28881 = c__4408__auto___28879;
var G__28882 = cljs.core.count.call(null,c__4408__auto___28879);
var G__28883 = (0);
seq__28809_28862 = G__28880;
chunk__28810_28863 = G__28881;
count__28811_28864 = G__28882;
i__28812_28865 = G__28883;
continue;
}
} else
{var map__28814_28884 = cljs.core.first.call(null,seq__28809_28878__$1);var map__28814_28885__$1 = ((cljs.core.seq_QMARK_.call(null,map__28814_28884))?cljs.core.apply.call(null,cljs.core.hash_map,map__28814_28884):map__28814_28884);var paths_28886 = cljs.core.get.call(null,map__28814_28885__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28887 = cljs.core.get.call(null,map__28814_28885__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28888 = cljs.core.get.call(null,map__28814_28885__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28889 = cljs.core.get.call(null,map__28814_28885__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28890 = cljs.core.get.call(null,map__28814_28885__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28890,f_28889,target_28888,paths_28886], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_28890,f_28889,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28888,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28887,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28886);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_28890,f_28889,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28888,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28887,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28886);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_28890,f_28889,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28888,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28887,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28886);
}
{
var G__28891 = cljs.core.next.call(null,seq__28809_28878__$1);
var G__28892 = null;
var G__28893 = (0);
var G__28894 = (0);
seq__28809_28862 = G__28891;
chunk__28810_28863 = G__28892;
count__28811_28864 = G__28893;
i__28812_28865 = G__28894;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___28895 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___28895,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___28895,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_28835){var state_val_28836 = (state_28835[(1)]);if((state_val_28836 === (7)))
{var inst_28819 = (state_28835[(7)]);var inst_28819__$1 = (state_28835[(2)]);var inst_28820 = cljs.core.seq_QMARK_.call(null,inst_28819__$1);var state_28835__$1 = (function (){var statearr_28837 = state_28835;(statearr_28837[(7)] = inst_28819__$1);
return statearr_28837;
})();if(inst_28820)
{var statearr_28838_28896 = state_28835__$1;(statearr_28838_28896[(1)] = (8));
} else
{var statearr_28839_28897 = state_28835__$1;(statearr_28839_28897[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28836 === (1)))
{var state_28835__$1 = state_28835;var statearr_28840_28898 = state_28835__$1;(statearr_28840_28898[(2)] = null);
(statearr_28840_28898[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28836 === (4)))
{var state_28835__$1 = state_28835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28835__$1,(7),self__.comm);
} else
{if((state_val_28836 === (6)))
{var inst_28831 = (state_28835[(2)]);var state_28835__$1 = state_28835;var statearr_28841_28899 = state_28835__$1;(statearr_28841_28899[(2)] = inst_28831);
(statearr_28841_28899[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28836 === (3)))
{var inst_28833 = (state_28835[(2)]);var state_28835__$1 = state_28835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28835__$1,inst_28833);
} else
{if((state_val_28836 === (2)))
{var state_28835__$1 = state_28835;var statearr_28842_28900 = state_28835__$1;(statearr_28842_28900[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28836 === (9)))
{var inst_28819 = (state_28835[(7)]);var state_28835__$1 = state_28835;var statearr_28844_28901 = state_28835__$1;(statearr_28844_28901[(2)] = inst_28819);
(statearr_28844_28901[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28836 === (5)))
{var state_28835__$1 = state_28835;var statearr_28845_28902 = state_28835__$1;(statearr_28845_28902[(2)] = null);
(statearr_28845_28902[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28836 === (10)))
{var inst_28825 = (state_28835[(2)]);var inst_28826 = cljs.core.get.call(null,inst_28825,new cljs.core.Keyword(null,"type","type",1174270348));var inst_28827 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_28826,inst_28825);var state_28835__$1 = (function (){var statearr_28846 = state_28835;(statearr_28846[(8)] = inst_28827);
return statearr_28846;
})();var statearr_28847_28903 = state_28835__$1;(statearr_28847_28903[(2)] = null);
(statearr_28847_28903[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28836 === (8)))
{var inst_28819 = (state_28835[(7)]);var inst_28822 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28819);var state_28835__$1 = state_28835;var statearr_28848_28904 = state_28835__$1;(statearr_28848_28904[(2)] = inst_28822);
(statearr_28848_28904[(1)] = (10));
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
});})(c__9125__auto___28895,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___28895,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28852 = [null,null,null,null,null,null,null,null,null];(statearr_28852[(0)] = state_machine__9111__auto__);
(statearr_28852[(1)] = (1));
return statearr_28852;
});
var state_machine__9111__auto____1 = (function (state_28835){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28835);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28853){if((e28853 instanceof Object))
{var ex__9114__auto__ = e28853;var statearr_28854_28905 = state_28835;(statearr_28854_28905[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28835);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28853;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28906 = state_28835;
state_28835 = G__28906;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28835){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___28895,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_28855 = f__9126__auto__.call(null);(statearr_28855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___28895);
return statearr_28855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___28895,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28806.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__28856_28907 = cljs.core.seq.call(null,self__.component_defs);var chunk__28857_28908 = null;var count__28858_28909 = (0);var i__28859_28910 = (0);while(true){
if((i__28859_28910 < count__28858_28909))
{var map__28860_28911 = cljs.core._nth.call(null,chunk__28857_28908,i__28859_28910);var map__28860_28912__$1 = ((cljs.core.seq_QMARK_.call(null,map__28860_28911))?cljs.core.apply.call(null,cljs.core.hash_map,map__28860_28911):map__28860_28911);var target_28913 = cljs.core.get.call(null,map__28860_28912__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28913);
{
var G__28914 = seq__28856_28907;
var G__28915 = chunk__28857_28908;
var G__28916 = count__28858_28909;
var G__28917 = (i__28859_28910 + (1));
seq__28856_28907 = G__28914;
chunk__28857_28908 = G__28915;
count__28858_28909 = G__28916;
i__28859_28910 = G__28917;
continue;
}
} else
{var temp__4126__auto___28918 = cljs.core.seq.call(null,seq__28856_28907);if(temp__4126__auto___28918)
{var seq__28856_28919__$1 = temp__4126__auto___28918;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28856_28919__$1))
{var c__4408__auto___28920 = cljs.core.chunk_first.call(null,seq__28856_28919__$1);{
var G__28921 = cljs.core.chunk_rest.call(null,seq__28856_28919__$1);
var G__28922 = c__4408__auto___28920;
var G__28923 = cljs.core.count.call(null,c__4408__auto___28920);
var G__28924 = (0);
seq__28856_28907 = G__28921;
chunk__28857_28908 = G__28922;
count__28858_28909 = G__28923;
i__28859_28910 = G__28924;
continue;
}
} else
{var map__28861_28925 = cljs.core.first.call(null,seq__28856_28919__$1);var map__28861_28926__$1 = ((cljs.core.seq_QMARK_.call(null,map__28861_28925))?cljs.core.apply.call(null,cljs.core.hash_map,map__28861_28925):map__28861_28925);var target_28927 = cljs.core.get.call(null,map__28861_28926__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_28927);
{
var G__28928 = cljs.core.next.call(null,seq__28856_28919__$1);
var G__28929 = null;
var G__28930 = (0);
var G__28931 = (0);
seq__28856_28907 = G__28928;
chunk__28857_28908 = G__28929;
count__28858_28909 = G__28930;
i__28859_28910 = G__28931;
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
clustermap.app.t28806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28808){var self__ = this;
var _28808__$1 = this;return self__.meta28807;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t28806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_28808,meta28807__$1){var self__ = this;
var _28808__$1 = this;return (new clustermap.app.t28806(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta28807__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t28806 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t28806(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28807){return (new clustermap.app.t28806(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta28807));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t28806(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
