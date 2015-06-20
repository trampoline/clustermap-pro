// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj21031 = {};return obj21031;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.prevent_default[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.prevent_default["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.target[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.target["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.current_target[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.current_target["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.event_type[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.event_type["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.raw_event[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.raw_event["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t21035 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t21035 = (function (evt,f,create_listener_function,meta21036){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta21036 = meta21036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t21035.cljs$lang$type = true;
domina.events.t21035.cljs$lang$ctorStr = "domina.events/t21035";
domina.events.t21035.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t21035");
});
domina.events.t21035.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t21035.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t21035.prototype.domina$events$Event$ = true;
domina.events.t21035.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t21035.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t21035.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t21035.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t21035.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t21035.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t21035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21037){var self__ = this;
var _21037__$1 = this;return self__.meta21036;
});
domina.events.t21035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21037,meta21036__$1){var self__ = this;
var _21037__$1 = this;return (new domina.events.t21035(self__.evt,self__.f,self__.create_listener_function,meta21036__$1));
});
domina.events.__GT_t21035 = (function __GT_t21035(evt__$1,f__$1,create_listener_function__$1,meta21036){return (new domina.events.t21035(evt__$1,f__$1,create_listener_function__$1,meta21036));
});
}
return (new domina.events.t21035(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__21042(s__21043){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__21043__$1 = s__21043;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21043__$1);if(temp__4126__auto__)
{var s__21043__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21043__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21043__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21045 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21044 = (0);while(true){
if((i__21044 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__21044);cljs.core.chunk_append.call(null,b__21045,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__21046 = (i__21044 + (1));
i__21044 = G__21046;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21045),iter__21042.call(null,cljs.core.chunk_rest.call(null,s__21043__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21045),null);
}
} else
{var node = cljs.core.first.call(null,s__21043__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__21042.call(null,cljs.core.rest.call(null,s__21043__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4377__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__21055 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21056 = null;var count__21057 = (0);var i__21058 = (0);while(true){
if((i__21058 < count__21057))
{var node = cljs.core._nth.call(null,chunk__21056,i__21058);goog.events.removeAll(node);
{
var G__21063 = seq__21055;
var G__21064 = chunk__21056;
var G__21065 = count__21057;
var G__21066 = (i__21058 + (1));
seq__21055 = G__21063;
chunk__21056 = G__21064;
count__21057 = G__21065;
i__21058 = G__21066;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21055);if(temp__4126__auto__)
{var seq__21055__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21055__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21055__$1);{
var G__21067 = cljs.core.chunk_rest.call(null,seq__21055__$1);
var G__21068 = c__4408__auto__;
var G__21069 = cljs.core.count.call(null,c__4408__auto__);
var G__21070 = (0);
seq__21055 = G__21067;
chunk__21056 = G__21068;
count__21057 = G__21069;
i__21058 = G__21070;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21055__$1);goog.events.removeAll(node);
{
var G__21071 = cljs.core.next.call(null,seq__21055__$1);
var G__21072 = null;
var G__21073 = (0);
var G__21074 = (0);
seq__21055 = G__21071;
chunk__21056 = G__21072;
count__21057 = G__21073;
i__21058 = G__21074;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__21059 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21060 = null;var count__21061 = (0);var i__21062 = (0);while(true){
if((i__21062 < count__21061))
{var node = cljs.core._nth.call(null,chunk__21060,i__21062);goog.events.removeAll(node,type__$1);
{
var G__21075 = seq__21059;
var G__21076 = chunk__21060;
var G__21077 = count__21061;
var G__21078 = (i__21062 + (1));
seq__21059 = G__21075;
chunk__21060 = G__21076;
count__21061 = G__21077;
i__21062 = G__21078;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21059);if(temp__4126__auto__)
{var seq__21059__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21059__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21059__$1);{
var G__21079 = cljs.core.chunk_rest.call(null,seq__21059__$1);
var G__21080 = c__4408__auto__;
var G__21081 = cljs.core.count.call(null,c__4408__auto__);
var G__21082 = (0);
seq__21059 = G__21079;
chunk__21060 = G__21080;
count__21061 = G__21081;
i__21062 = G__21082;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21059__$1);goog.events.removeAll(node,type__$1);
{
var G__21083 = cljs.core.next.call(null,seq__21059__$1);
var G__21084 = null;
var G__21085 = (0);
var G__21086 = (0);
seq__21059 = G__21083;
chunk__21060 = G__21084;
count__21061 = G__21085;
i__21062 = G__21086;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__21087 = parent;
var G__21088 = cljs.core.cons.call(null,parent,so_far);
n = G__21087;
so_far = G__21088;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){evt.target = domina.single_node.call(null,source);
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__21097_21105 = cljs.core.seq.call(null,ancestors);var chunk__21098_21106 = null;var count__21099_21107 = (0);var i__21100_21108 = (0);while(true){
if((i__21100_21108 < count__21099_21107))
{var n_21109 = cljs.core._nth.call(null,chunk__21098_21106,i__21100_21108);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21109;
goog.events.fireListeners(n_21109,evt.type,true,evt);
}
{
var G__21110 = seq__21097_21105;
var G__21111 = chunk__21098_21106;
var G__21112 = count__21099_21107;
var G__21113 = (i__21100_21108 + (1));
seq__21097_21105 = G__21110;
chunk__21098_21106 = G__21111;
count__21099_21107 = G__21112;
i__21100_21108 = G__21113;
continue;
}
} else
{var temp__4126__auto___21114 = cljs.core.seq.call(null,seq__21097_21105);if(temp__4126__auto___21114)
{var seq__21097_21115__$1 = temp__4126__auto___21114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21097_21115__$1))
{var c__4408__auto___21116 = cljs.core.chunk_first.call(null,seq__21097_21115__$1);{
var G__21117 = cljs.core.chunk_rest.call(null,seq__21097_21115__$1);
var G__21118 = c__4408__auto___21116;
var G__21119 = cljs.core.count.call(null,c__4408__auto___21116);
var G__21120 = (0);
seq__21097_21105 = G__21117;
chunk__21098_21106 = G__21118;
count__21099_21107 = G__21119;
i__21100_21108 = G__21120;
continue;
}
} else
{var n_21121 = cljs.core.first.call(null,seq__21097_21115__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21121;
goog.events.fireListeners(n_21121,evt.type,true,evt);
}
{
var G__21122 = cljs.core.next.call(null,seq__21097_21115__$1);
var G__21123 = null;
var G__21124 = (0);
var G__21125 = (0);
seq__21097_21105 = G__21122;
chunk__21098_21106 = G__21123;
count__21099_21107 = G__21124;
i__21100_21108 = G__21125;
continue;
}
}
} else
{}
}
break;
}
var seq__21101_21126 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__21102_21127 = null;var count__21103_21128 = (0);var i__21104_21129 = (0);while(true){
if((i__21104_21129 < count__21103_21128))
{var n_21130 = cljs.core._nth.call(null,chunk__21102_21127,i__21104_21129);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21130;
goog.events.fireListeners(n_21130,evt.type,false,evt);
}
{
var G__21131 = seq__21101_21126;
var G__21132 = chunk__21102_21127;
var G__21133 = count__21103_21128;
var G__21134 = (i__21104_21129 + (1));
seq__21101_21126 = G__21131;
chunk__21102_21127 = G__21132;
count__21103_21128 = G__21133;
i__21104_21129 = G__21134;
continue;
}
} else
{var temp__4126__auto___21135 = cljs.core.seq.call(null,seq__21101_21126);if(temp__4126__auto___21135)
{var seq__21101_21136__$1 = temp__4126__auto___21135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21101_21136__$1))
{var c__4408__auto___21137 = cljs.core.chunk_first.call(null,seq__21101_21136__$1);{
var G__21138 = cljs.core.chunk_rest.call(null,seq__21101_21136__$1);
var G__21139 = c__4408__auto___21137;
var G__21140 = cljs.core.count.call(null,c__4408__auto___21137);
var G__21141 = (0);
seq__21101_21126 = G__21138;
chunk__21102_21127 = G__21139;
count__21103_21128 = G__21140;
i__21104_21129 = G__21141;
continue;
}
} else
{var n_21142 = cljs.core.first.call(null,seq__21101_21136__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21142;
goog.events.fireListeners(n_21142,evt.type,false,evt);
}
{
var G__21143 = cljs.core.next.call(null,seq__21101_21136__$1);
var G__21144 = null;
var G__21145 = (0);
var G__21146 = (0);
seq__21101_21126 = G__21143;
chunk__21102_21127 = G__21144;
count__21103_21128 = G__21145;
i__21104_21129 = G__21146;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3627__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3627__auto__))
{return o.dispatchEvent;
} else
{return and__3627__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__21153_21159 = cljs.core.seq.call(null,evt_map);var chunk__21154_21160 = null;var count__21155_21161 = (0);var i__21156_21162 = (0);while(true){
if((i__21156_21162 < count__21155_21161))
{var vec__21157_21163 = cljs.core._nth.call(null,chunk__21154_21160,i__21156_21162);var k_21164 = cljs.core.nth.call(null,vec__21157_21163,(0),null);var v_21165 = cljs.core.nth.call(null,vec__21157_21163,(1),null);(evt[k_21164] = v_21165);
{
var G__21166 = seq__21153_21159;
var G__21167 = chunk__21154_21160;
var G__21168 = count__21155_21161;
var G__21169 = (i__21156_21162 + (1));
seq__21153_21159 = G__21166;
chunk__21154_21160 = G__21167;
count__21155_21161 = G__21168;
i__21156_21162 = G__21169;
continue;
}
} else
{var temp__4126__auto___21170 = cljs.core.seq.call(null,seq__21153_21159);if(temp__4126__auto___21170)
{var seq__21153_21171__$1 = temp__4126__auto___21170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21153_21171__$1))
{var c__4408__auto___21172 = cljs.core.chunk_first.call(null,seq__21153_21171__$1);{
var G__21173 = cljs.core.chunk_rest.call(null,seq__21153_21171__$1);
var G__21174 = c__4408__auto___21172;
var G__21175 = cljs.core.count.call(null,c__4408__auto___21172);
var G__21176 = (0);
seq__21153_21159 = G__21173;
chunk__21154_21160 = G__21174;
count__21155_21161 = G__21175;
i__21156_21162 = G__21176;
continue;
}
} else
{var vec__21158_21177 = cljs.core.first.call(null,seq__21153_21171__$1);var k_21178 = cljs.core.nth.call(null,vec__21158_21177,(0),null);var v_21179 = cljs.core.nth.call(null,vec__21158_21177,(1),null);(evt[k_21178] = v_21179);
{
var G__21180 = cljs.core.next.call(null,seq__21153_21171__$1);
var G__21181 = null;
var G__21182 = (0);
var G__21183 = (0);
seq__21153_21159 = G__21180;
chunk__21154_21160 = G__21181;
count__21155_21161 = G__21182;
i__21156_21162 = G__21183;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__21184_SHARP_){return goog.events.getListeners(p1__21184_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
