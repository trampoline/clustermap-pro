// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj21028 = {};return obj21028;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t21032 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t21032 = (function (evt,f,create_listener_function,meta21033){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta21033 = meta21033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t21032.cljs$lang$type = true;
domina.events.t21032.cljs$lang$ctorStr = "domina.events/t21032";
domina.events.t21032.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t21032");
});
domina.events.t21032.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t21032.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t21032.prototype.domina$events$Event$ = true;
domina.events.t21032.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t21032.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t21032.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t21032.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t21032.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t21032.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t21032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21034){var self__ = this;
var _21034__$1 = this;return self__.meta21033;
});
domina.events.t21032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21034,meta21033__$1){var self__ = this;
var _21034__$1 = this;return (new domina.events.t21032(self__.evt,self__.f,self__.create_listener_function,meta21033__$1));
});
domina.events.__GT_t21032 = (function __GT_t21032(evt__$1,f__$1,create_listener_function__$1,meta21033){return (new domina.events.t21032(evt__$1,f__$1,create_listener_function__$1,meta21033));
});
}
return (new domina.events.t21032(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__21039(s__21040){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__21040__$1 = s__21040;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21040__$1);if(temp__4126__auto__)
{var s__21040__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21040__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21040__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21042 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21041 = (0);while(true){
if((i__21041 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__21041);cljs.core.chunk_append.call(null,b__21042,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__21043 = (i__21041 + (1));
i__21041 = G__21043;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21042),iter__21039.call(null,cljs.core.chunk_rest.call(null,s__21040__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21042),null);
}
} else
{var node = cljs.core.first.call(null,s__21040__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__21039.call(null,cljs.core.rest.call(null,s__21040__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__21052 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21053 = null;var count__21054 = (0);var i__21055 = (0);while(true){
if((i__21055 < count__21054))
{var node = cljs.core._nth.call(null,chunk__21053,i__21055);goog.events.removeAll(node);
{
var G__21060 = seq__21052;
var G__21061 = chunk__21053;
var G__21062 = count__21054;
var G__21063 = (i__21055 + (1));
seq__21052 = G__21060;
chunk__21053 = G__21061;
count__21054 = G__21062;
i__21055 = G__21063;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21052);if(temp__4126__auto__)
{var seq__21052__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21052__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21052__$1);{
var G__21064 = cljs.core.chunk_rest.call(null,seq__21052__$1);
var G__21065 = c__4408__auto__;
var G__21066 = cljs.core.count.call(null,c__4408__auto__);
var G__21067 = (0);
seq__21052 = G__21064;
chunk__21053 = G__21065;
count__21054 = G__21066;
i__21055 = G__21067;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21052__$1);goog.events.removeAll(node);
{
var G__21068 = cljs.core.next.call(null,seq__21052__$1);
var G__21069 = null;
var G__21070 = (0);
var G__21071 = (0);
seq__21052 = G__21068;
chunk__21053 = G__21069;
count__21054 = G__21070;
i__21055 = G__21071;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__21056 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21057 = null;var count__21058 = (0);var i__21059 = (0);while(true){
if((i__21059 < count__21058))
{var node = cljs.core._nth.call(null,chunk__21057,i__21059);goog.events.removeAll(node,type__$1);
{
var G__21072 = seq__21056;
var G__21073 = chunk__21057;
var G__21074 = count__21058;
var G__21075 = (i__21059 + (1));
seq__21056 = G__21072;
chunk__21057 = G__21073;
count__21058 = G__21074;
i__21059 = G__21075;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21056);if(temp__4126__auto__)
{var seq__21056__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21056__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21056__$1);{
var G__21076 = cljs.core.chunk_rest.call(null,seq__21056__$1);
var G__21077 = c__4408__auto__;
var G__21078 = cljs.core.count.call(null,c__4408__auto__);
var G__21079 = (0);
seq__21056 = G__21076;
chunk__21057 = G__21077;
count__21058 = G__21078;
i__21059 = G__21079;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21056__$1);goog.events.removeAll(node,type__$1);
{
var G__21080 = cljs.core.next.call(null,seq__21056__$1);
var G__21081 = null;
var G__21082 = (0);
var G__21083 = (0);
seq__21056 = G__21080;
chunk__21057 = G__21081;
count__21058 = G__21082;
i__21059 = G__21083;
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
var G__21084 = parent;
var G__21085 = cljs.core.cons.call(null,parent,so_far);
n = G__21084;
so_far = G__21085;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__21094_21102 = cljs.core.seq.call(null,ancestors);var chunk__21095_21103 = null;var count__21096_21104 = (0);var i__21097_21105 = (0);while(true){
if((i__21097_21105 < count__21096_21104))
{var n_21106 = cljs.core._nth.call(null,chunk__21095_21103,i__21097_21105);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21106;
goog.events.fireListeners(n_21106,evt.type,true,evt);
}
{
var G__21107 = seq__21094_21102;
var G__21108 = chunk__21095_21103;
var G__21109 = count__21096_21104;
var G__21110 = (i__21097_21105 + (1));
seq__21094_21102 = G__21107;
chunk__21095_21103 = G__21108;
count__21096_21104 = G__21109;
i__21097_21105 = G__21110;
continue;
}
} else
{var temp__4126__auto___21111 = cljs.core.seq.call(null,seq__21094_21102);if(temp__4126__auto___21111)
{var seq__21094_21112__$1 = temp__4126__auto___21111;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21094_21112__$1))
{var c__4408__auto___21113 = cljs.core.chunk_first.call(null,seq__21094_21112__$1);{
var G__21114 = cljs.core.chunk_rest.call(null,seq__21094_21112__$1);
var G__21115 = c__4408__auto___21113;
var G__21116 = cljs.core.count.call(null,c__4408__auto___21113);
var G__21117 = (0);
seq__21094_21102 = G__21114;
chunk__21095_21103 = G__21115;
count__21096_21104 = G__21116;
i__21097_21105 = G__21117;
continue;
}
} else
{var n_21118 = cljs.core.first.call(null,seq__21094_21112__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21118;
goog.events.fireListeners(n_21118,evt.type,true,evt);
}
{
var G__21119 = cljs.core.next.call(null,seq__21094_21112__$1);
var G__21120 = null;
var G__21121 = (0);
var G__21122 = (0);
seq__21094_21102 = G__21119;
chunk__21095_21103 = G__21120;
count__21096_21104 = G__21121;
i__21097_21105 = G__21122;
continue;
}
}
} else
{}
}
break;
}
var seq__21098_21123 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__21099_21124 = null;var count__21100_21125 = (0);var i__21101_21126 = (0);while(true){
if((i__21101_21126 < count__21100_21125))
{var n_21127 = cljs.core._nth.call(null,chunk__21099_21124,i__21101_21126);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21127;
goog.events.fireListeners(n_21127,evt.type,false,evt);
}
{
var G__21128 = seq__21098_21123;
var G__21129 = chunk__21099_21124;
var G__21130 = count__21100_21125;
var G__21131 = (i__21101_21126 + (1));
seq__21098_21123 = G__21128;
chunk__21099_21124 = G__21129;
count__21100_21125 = G__21130;
i__21101_21126 = G__21131;
continue;
}
} else
{var temp__4126__auto___21132 = cljs.core.seq.call(null,seq__21098_21123);if(temp__4126__auto___21132)
{var seq__21098_21133__$1 = temp__4126__auto___21132;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21098_21133__$1))
{var c__4408__auto___21134 = cljs.core.chunk_first.call(null,seq__21098_21133__$1);{
var G__21135 = cljs.core.chunk_rest.call(null,seq__21098_21133__$1);
var G__21136 = c__4408__auto___21134;
var G__21137 = cljs.core.count.call(null,c__4408__auto___21134);
var G__21138 = (0);
seq__21098_21123 = G__21135;
chunk__21099_21124 = G__21136;
count__21100_21125 = G__21137;
i__21101_21126 = G__21138;
continue;
}
} else
{var n_21139 = cljs.core.first.call(null,seq__21098_21133__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21139;
goog.events.fireListeners(n_21139,evt.type,false,evt);
}
{
var G__21140 = cljs.core.next.call(null,seq__21098_21133__$1);
var G__21141 = null;
var G__21142 = (0);
var G__21143 = (0);
seq__21098_21123 = G__21140;
chunk__21099_21124 = G__21141;
count__21100_21125 = G__21142;
i__21101_21126 = G__21143;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__21150_21156 = cljs.core.seq.call(null,evt_map);var chunk__21151_21157 = null;var count__21152_21158 = (0);var i__21153_21159 = (0);while(true){
if((i__21153_21159 < count__21152_21158))
{var vec__21154_21160 = cljs.core._nth.call(null,chunk__21151_21157,i__21153_21159);var k_21161 = cljs.core.nth.call(null,vec__21154_21160,(0),null);var v_21162 = cljs.core.nth.call(null,vec__21154_21160,(1),null);(evt[k_21161] = v_21162);
{
var G__21163 = seq__21150_21156;
var G__21164 = chunk__21151_21157;
var G__21165 = count__21152_21158;
var G__21166 = (i__21153_21159 + (1));
seq__21150_21156 = G__21163;
chunk__21151_21157 = G__21164;
count__21152_21158 = G__21165;
i__21153_21159 = G__21166;
continue;
}
} else
{var temp__4126__auto___21167 = cljs.core.seq.call(null,seq__21150_21156);if(temp__4126__auto___21167)
{var seq__21150_21168__$1 = temp__4126__auto___21167;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21150_21168__$1))
{var c__4408__auto___21169 = cljs.core.chunk_first.call(null,seq__21150_21168__$1);{
var G__21170 = cljs.core.chunk_rest.call(null,seq__21150_21168__$1);
var G__21171 = c__4408__auto___21169;
var G__21172 = cljs.core.count.call(null,c__4408__auto___21169);
var G__21173 = (0);
seq__21150_21156 = G__21170;
chunk__21151_21157 = G__21171;
count__21152_21158 = G__21172;
i__21153_21159 = G__21173;
continue;
}
} else
{var vec__21155_21174 = cljs.core.first.call(null,seq__21150_21168__$1);var k_21175 = cljs.core.nth.call(null,vec__21155_21174,(0),null);var v_21176 = cljs.core.nth.call(null,vec__21155_21174,(1),null);(evt[k_21175] = v_21176);
{
var G__21177 = cljs.core.next.call(null,seq__21150_21168__$1);
var G__21178 = null;
var G__21179 = (0);
var G__21180 = (0);
seq__21150_21156 = G__21177;
chunk__21151_21157 = G__21178;
count__21152_21158 = G__21179;
i__21153_21159 = G__21180;
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
return (function (p1__21181_SHARP_){return goog.events.getListeners(p1__21181_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
