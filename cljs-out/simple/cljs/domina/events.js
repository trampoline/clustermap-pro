// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj20977 = {};return obj20977;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t20981 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t20981 = (function (evt,f,create_listener_function,meta20982){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta20982 = meta20982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t20981.cljs$lang$type = true;
domina.events.t20981.cljs$lang$ctorStr = "domina.events/t20981";
domina.events.t20981.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t20981");
});
domina.events.t20981.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t20981.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t20981.prototype.domina$events$Event$ = true;
domina.events.t20981.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t20981.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t20981.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t20981.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t20981.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t20981.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t20981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20983){var self__ = this;
var _20983__$1 = this;return self__.meta20982;
});
domina.events.t20981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20983,meta20982__$1){var self__ = this;
var _20983__$1 = this;return (new domina.events.t20981(self__.evt,self__.f,self__.create_listener_function,meta20982__$1));
});
domina.events.__GT_t20981 = (function __GT_t20981(evt__$1,f__$1,create_listener_function__$1,meta20982){return (new domina.events.t20981(evt__$1,f__$1,create_listener_function__$1,meta20982));
});
}
return (new domina.events.t20981(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__20988(s__20989){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__20989__$1 = s__20989;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20989__$1);if(temp__4126__auto__)
{var s__20989__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20989__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20989__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20991 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20990 = (0);while(true){
if((i__20990 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__20990);cljs.core.chunk_append.call(null,b__20991,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__20992 = (i__20990 + (1));
i__20990 = G__20992;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20991),iter__20988.call(null,cljs.core.chunk_rest.call(null,s__20989__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20991),null);
}
} else
{var node = cljs.core.first.call(null,s__20989__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__20988.call(null,cljs.core.rest.call(null,s__20989__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__21001 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21002 = null;var count__21003 = (0);var i__21004 = (0);while(true){
if((i__21004 < count__21003))
{var node = cljs.core._nth.call(null,chunk__21002,i__21004);goog.events.removeAll(node);
{
var G__21009 = seq__21001;
var G__21010 = chunk__21002;
var G__21011 = count__21003;
var G__21012 = (i__21004 + (1));
seq__21001 = G__21009;
chunk__21002 = G__21010;
count__21003 = G__21011;
i__21004 = G__21012;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21001);if(temp__4126__auto__)
{var seq__21001__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21001__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21001__$1);{
var G__21013 = cljs.core.chunk_rest.call(null,seq__21001__$1);
var G__21014 = c__4408__auto__;
var G__21015 = cljs.core.count.call(null,c__4408__auto__);
var G__21016 = (0);
seq__21001 = G__21013;
chunk__21002 = G__21014;
count__21003 = G__21015;
i__21004 = G__21016;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21001__$1);goog.events.removeAll(node);
{
var G__21017 = cljs.core.next.call(null,seq__21001__$1);
var G__21018 = null;
var G__21019 = (0);
var G__21020 = (0);
seq__21001 = G__21017;
chunk__21002 = G__21018;
count__21003 = G__21019;
i__21004 = G__21020;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__21005 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21006 = null;var count__21007 = (0);var i__21008 = (0);while(true){
if((i__21008 < count__21007))
{var node = cljs.core._nth.call(null,chunk__21006,i__21008);goog.events.removeAll(node,type__$1);
{
var G__21021 = seq__21005;
var G__21022 = chunk__21006;
var G__21023 = count__21007;
var G__21024 = (i__21008 + (1));
seq__21005 = G__21021;
chunk__21006 = G__21022;
count__21007 = G__21023;
i__21008 = G__21024;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21005);if(temp__4126__auto__)
{var seq__21005__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21005__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21005__$1);{
var G__21025 = cljs.core.chunk_rest.call(null,seq__21005__$1);
var G__21026 = c__4408__auto__;
var G__21027 = cljs.core.count.call(null,c__4408__auto__);
var G__21028 = (0);
seq__21005 = G__21025;
chunk__21006 = G__21026;
count__21007 = G__21027;
i__21008 = G__21028;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21005__$1);goog.events.removeAll(node,type__$1);
{
var G__21029 = cljs.core.next.call(null,seq__21005__$1);
var G__21030 = null;
var G__21031 = (0);
var G__21032 = (0);
seq__21005 = G__21029;
chunk__21006 = G__21030;
count__21007 = G__21031;
i__21008 = G__21032;
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
var G__21033 = parent;
var G__21034 = cljs.core.cons.call(null,parent,so_far);
n = G__21033;
so_far = G__21034;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__21043_21051 = cljs.core.seq.call(null,ancestors);var chunk__21044_21052 = null;var count__21045_21053 = (0);var i__21046_21054 = (0);while(true){
if((i__21046_21054 < count__21045_21053))
{var n_21055 = cljs.core._nth.call(null,chunk__21044_21052,i__21046_21054);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21055;
goog.events.fireListeners(n_21055,evt.type,true,evt);
}
{
var G__21056 = seq__21043_21051;
var G__21057 = chunk__21044_21052;
var G__21058 = count__21045_21053;
var G__21059 = (i__21046_21054 + (1));
seq__21043_21051 = G__21056;
chunk__21044_21052 = G__21057;
count__21045_21053 = G__21058;
i__21046_21054 = G__21059;
continue;
}
} else
{var temp__4126__auto___21060 = cljs.core.seq.call(null,seq__21043_21051);if(temp__4126__auto___21060)
{var seq__21043_21061__$1 = temp__4126__auto___21060;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21043_21061__$1))
{var c__4408__auto___21062 = cljs.core.chunk_first.call(null,seq__21043_21061__$1);{
var G__21063 = cljs.core.chunk_rest.call(null,seq__21043_21061__$1);
var G__21064 = c__4408__auto___21062;
var G__21065 = cljs.core.count.call(null,c__4408__auto___21062);
var G__21066 = (0);
seq__21043_21051 = G__21063;
chunk__21044_21052 = G__21064;
count__21045_21053 = G__21065;
i__21046_21054 = G__21066;
continue;
}
} else
{var n_21067 = cljs.core.first.call(null,seq__21043_21061__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21067;
goog.events.fireListeners(n_21067,evt.type,true,evt);
}
{
var G__21068 = cljs.core.next.call(null,seq__21043_21061__$1);
var G__21069 = null;
var G__21070 = (0);
var G__21071 = (0);
seq__21043_21051 = G__21068;
chunk__21044_21052 = G__21069;
count__21045_21053 = G__21070;
i__21046_21054 = G__21071;
continue;
}
}
} else
{}
}
break;
}
var seq__21047_21072 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__21048_21073 = null;var count__21049_21074 = (0);var i__21050_21075 = (0);while(true){
if((i__21050_21075 < count__21049_21074))
{var n_21076 = cljs.core._nth.call(null,chunk__21048_21073,i__21050_21075);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21076;
goog.events.fireListeners(n_21076,evt.type,false,evt);
}
{
var G__21077 = seq__21047_21072;
var G__21078 = chunk__21048_21073;
var G__21079 = count__21049_21074;
var G__21080 = (i__21050_21075 + (1));
seq__21047_21072 = G__21077;
chunk__21048_21073 = G__21078;
count__21049_21074 = G__21079;
i__21050_21075 = G__21080;
continue;
}
} else
{var temp__4126__auto___21081 = cljs.core.seq.call(null,seq__21047_21072);if(temp__4126__auto___21081)
{var seq__21047_21082__$1 = temp__4126__auto___21081;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21047_21082__$1))
{var c__4408__auto___21083 = cljs.core.chunk_first.call(null,seq__21047_21082__$1);{
var G__21084 = cljs.core.chunk_rest.call(null,seq__21047_21082__$1);
var G__21085 = c__4408__auto___21083;
var G__21086 = cljs.core.count.call(null,c__4408__auto___21083);
var G__21087 = (0);
seq__21047_21072 = G__21084;
chunk__21048_21073 = G__21085;
count__21049_21074 = G__21086;
i__21050_21075 = G__21087;
continue;
}
} else
{var n_21088 = cljs.core.first.call(null,seq__21047_21082__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21088;
goog.events.fireListeners(n_21088,evt.type,false,evt);
}
{
var G__21089 = cljs.core.next.call(null,seq__21047_21082__$1);
var G__21090 = null;
var G__21091 = (0);
var G__21092 = (0);
seq__21047_21072 = G__21089;
chunk__21048_21073 = G__21090;
count__21049_21074 = G__21091;
i__21050_21075 = G__21092;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__21099_21105 = cljs.core.seq.call(null,evt_map);var chunk__21100_21106 = null;var count__21101_21107 = (0);var i__21102_21108 = (0);while(true){
if((i__21102_21108 < count__21101_21107))
{var vec__21103_21109 = cljs.core._nth.call(null,chunk__21100_21106,i__21102_21108);var k_21110 = cljs.core.nth.call(null,vec__21103_21109,(0),null);var v_21111 = cljs.core.nth.call(null,vec__21103_21109,(1),null);(evt[k_21110] = v_21111);
{
var G__21112 = seq__21099_21105;
var G__21113 = chunk__21100_21106;
var G__21114 = count__21101_21107;
var G__21115 = (i__21102_21108 + (1));
seq__21099_21105 = G__21112;
chunk__21100_21106 = G__21113;
count__21101_21107 = G__21114;
i__21102_21108 = G__21115;
continue;
}
} else
{var temp__4126__auto___21116 = cljs.core.seq.call(null,seq__21099_21105);if(temp__4126__auto___21116)
{var seq__21099_21117__$1 = temp__4126__auto___21116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21099_21117__$1))
{var c__4408__auto___21118 = cljs.core.chunk_first.call(null,seq__21099_21117__$1);{
var G__21119 = cljs.core.chunk_rest.call(null,seq__21099_21117__$1);
var G__21120 = c__4408__auto___21118;
var G__21121 = cljs.core.count.call(null,c__4408__auto___21118);
var G__21122 = (0);
seq__21099_21105 = G__21119;
chunk__21100_21106 = G__21120;
count__21101_21107 = G__21121;
i__21102_21108 = G__21122;
continue;
}
} else
{var vec__21104_21123 = cljs.core.first.call(null,seq__21099_21117__$1);var k_21124 = cljs.core.nth.call(null,vec__21104_21123,(0),null);var v_21125 = cljs.core.nth.call(null,vec__21104_21123,(1),null);(evt[k_21124] = v_21125);
{
var G__21126 = cljs.core.next.call(null,seq__21099_21117__$1);
var G__21127 = null;
var G__21128 = (0);
var G__21129 = (0);
seq__21099_21105 = G__21126;
chunk__21100_21106 = G__21127;
count__21101_21107 = G__21128;
i__21102_21108 = G__21129;
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
return (function (p1__21130_SHARP_){return goog.events.getListeners(p1__21130_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
