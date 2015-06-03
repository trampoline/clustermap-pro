// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj23479 = {};return obj23479;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t23483 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t23483 = (function (evt,f,create_listener_function,meta23484){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta23484 = meta23484;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t23483.cljs$lang$type = true;
domina.events.t23483.cljs$lang$ctorStr = "domina.events/t23483";
domina.events.t23483.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t23483");
});
domina.events.t23483.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t23483.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t23483.prototype.domina$events$Event$ = true;
domina.events.t23483.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t23483.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t23483.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t23483.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t23483.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t23483.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t23483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23485){var self__ = this;
var _23485__$1 = this;return self__.meta23484;
});
domina.events.t23483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23485,meta23484__$1){var self__ = this;
var _23485__$1 = this;return (new domina.events.t23483(self__.evt,self__.f,self__.create_listener_function,meta23484__$1));
});
domina.events.__GT_t23483 = (function __GT_t23483(evt__$1,f__$1,create_listener_function__$1,meta23484){return (new domina.events.t23483(evt__$1,f__$1,create_listener_function__$1,meta23484));
});
}
return (new domina.events.t23483(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__23490(s__23491){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__23491__$1 = s__23491;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23491__$1);if(temp__4126__auto__)
{var s__23491__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23491__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__23491__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__23493 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__23492 = (0);while(true){
if((i__23492 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__23492);cljs.core.chunk_append.call(null,b__23493,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__23494 = (i__23492 + (1));
i__23492 = G__23494;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23493),iter__23490.call(null,cljs.core.chunk_rest.call(null,s__23491__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23493),null);
}
} else
{var node = cljs.core.first.call(null,s__23491__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__23490.call(null,cljs.core.rest.call(null,s__23491__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__23503 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23504 = null;var count__23505 = (0);var i__23506 = (0);while(true){
if((i__23506 < count__23505))
{var node = cljs.core._nth.call(null,chunk__23504,i__23506);goog.events.removeAll(node);
{
var G__23511 = seq__23503;
var G__23512 = chunk__23504;
var G__23513 = count__23505;
var G__23514 = (i__23506 + (1));
seq__23503 = G__23511;
chunk__23504 = G__23512;
count__23505 = G__23513;
i__23506 = G__23514;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23503);if(temp__4126__auto__)
{var seq__23503__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23503__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__23503__$1);{
var G__23515 = cljs.core.chunk_rest.call(null,seq__23503__$1);
var G__23516 = c__4408__auto__;
var G__23517 = cljs.core.count.call(null,c__4408__auto__);
var G__23518 = (0);
seq__23503 = G__23515;
chunk__23504 = G__23516;
count__23505 = G__23517;
i__23506 = G__23518;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__23503__$1);goog.events.removeAll(node);
{
var G__23519 = cljs.core.next.call(null,seq__23503__$1);
var G__23520 = null;
var G__23521 = (0);
var G__23522 = (0);
seq__23503 = G__23519;
chunk__23504 = G__23520;
count__23505 = G__23521;
i__23506 = G__23522;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__23507 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23508 = null;var count__23509 = (0);var i__23510 = (0);while(true){
if((i__23510 < count__23509))
{var node = cljs.core._nth.call(null,chunk__23508,i__23510);goog.events.removeAll(node,type__$1);
{
var G__23523 = seq__23507;
var G__23524 = chunk__23508;
var G__23525 = count__23509;
var G__23526 = (i__23510 + (1));
seq__23507 = G__23523;
chunk__23508 = G__23524;
count__23509 = G__23525;
i__23510 = G__23526;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23507);if(temp__4126__auto__)
{var seq__23507__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23507__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__23507__$1);{
var G__23527 = cljs.core.chunk_rest.call(null,seq__23507__$1);
var G__23528 = c__4408__auto__;
var G__23529 = cljs.core.count.call(null,c__4408__auto__);
var G__23530 = (0);
seq__23507 = G__23527;
chunk__23508 = G__23528;
count__23509 = G__23529;
i__23510 = G__23530;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__23507__$1);goog.events.removeAll(node,type__$1);
{
var G__23531 = cljs.core.next.call(null,seq__23507__$1);
var G__23532 = null;
var G__23533 = (0);
var G__23534 = (0);
seq__23507 = G__23531;
chunk__23508 = G__23532;
count__23509 = G__23533;
i__23510 = G__23534;
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
var G__23535 = parent;
var G__23536 = cljs.core.cons.call(null,parent,so_far);
n = G__23535;
so_far = G__23536;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__23545_23553 = cljs.core.seq.call(null,ancestors);var chunk__23546_23554 = null;var count__23547_23555 = (0);var i__23548_23556 = (0);while(true){
if((i__23548_23556 < count__23547_23555))
{var n_23557 = cljs.core._nth.call(null,chunk__23546_23554,i__23548_23556);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23557;
goog.events.fireListeners(n_23557,evt.type,true,evt);
}
{
var G__23558 = seq__23545_23553;
var G__23559 = chunk__23546_23554;
var G__23560 = count__23547_23555;
var G__23561 = (i__23548_23556 + (1));
seq__23545_23553 = G__23558;
chunk__23546_23554 = G__23559;
count__23547_23555 = G__23560;
i__23548_23556 = G__23561;
continue;
}
} else
{var temp__4126__auto___23562 = cljs.core.seq.call(null,seq__23545_23553);if(temp__4126__auto___23562)
{var seq__23545_23563__$1 = temp__4126__auto___23562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23545_23563__$1))
{var c__4408__auto___23564 = cljs.core.chunk_first.call(null,seq__23545_23563__$1);{
var G__23565 = cljs.core.chunk_rest.call(null,seq__23545_23563__$1);
var G__23566 = c__4408__auto___23564;
var G__23567 = cljs.core.count.call(null,c__4408__auto___23564);
var G__23568 = (0);
seq__23545_23553 = G__23565;
chunk__23546_23554 = G__23566;
count__23547_23555 = G__23567;
i__23548_23556 = G__23568;
continue;
}
} else
{var n_23569 = cljs.core.first.call(null,seq__23545_23563__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23569;
goog.events.fireListeners(n_23569,evt.type,true,evt);
}
{
var G__23570 = cljs.core.next.call(null,seq__23545_23563__$1);
var G__23571 = null;
var G__23572 = (0);
var G__23573 = (0);
seq__23545_23553 = G__23570;
chunk__23546_23554 = G__23571;
count__23547_23555 = G__23572;
i__23548_23556 = G__23573;
continue;
}
}
} else
{}
}
break;
}
var seq__23549_23574 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__23550_23575 = null;var count__23551_23576 = (0);var i__23552_23577 = (0);while(true){
if((i__23552_23577 < count__23551_23576))
{var n_23578 = cljs.core._nth.call(null,chunk__23550_23575,i__23552_23577);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23578;
goog.events.fireListeners(n_23578,evt.type,false,evt);
}
{
var G__23579 = seq__23549_23574;
var G__23580 = chunk__23550_23575;
var G__23581 = count__23551_23576;
var G__23582 = (i__23552_23577 + (1));
seq__23549_23574 = G__23579;
chunk__23550_23575 = G__23580;
count__23551_23576 = G__23581;
i__23552_23577 = G__23582;
continue;
}
} else
{var temp__4126__auto___23583 = cljs.core.seq.call(null,seq__23549_23574);if(temp__4126__auto___23583)
{var seq__23549_23584__$1 = temp__4126__auto___23583;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23549_23584__$1))
{var c__4408__auto___23585 = cljs.core.chunk_first.call(null,seq__23549_23584__$1);{
var G__23586 = cljs.core.chunk_rest.call(null,seq__23549_23584__$1);
var G__23587 = c__4408__auto___23585;
var G__23588 = cljs.core.count.call(null,c__4408__auto___23585);
var G__23589 = (0);
seq__23549_23574 = G__23586;
chunk__23550_23575 = G__23587;
count__23551_23576 = G__23588;
i__23552_23577 = G__23589;
continue;
}
} else
{var n_23590 = cljs.core.first.call(null,seq__23549_23584__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23590;
goog.events.fireListeners(n_23590,evt.type,false,evt);
}
{
var G__23591 = cljs.core.next.call(null,seq__23549_23584__$1);
var G__23592 = null;
var G__23593 = (0);
var G__23594 = (0);
seq__23549_23574 = G__23591;
chunk__23550_23575 = G__23592;
count__23551_23576 = G__23593;
i__23552_23577 = G__23594;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__23601_23607 = cljs.core.seq.call(null,evt_map);var chunk__23602_23608 = null;var count__23603_23609 = (0);var i__23604_23610 = (0);while(true){
if((i__23604_23610 < count__23603_23609))
{var vec__23605_23611 = cljs.core._nth.call(null,chunk__23602_23608,i__23604_23610);var k_23612 = cljs.core.nth.call(null,vec__23605_23611,(0),null);var v_23613 = cljs.core.nth.call(null,vec__23605_23611,(1),null);(evt[k_23612] = v_23613);
{
var G__23614 = seq__23601_23607;
var G__23615 = chunk__23602_23608;
var G__23616 = count__23603_23609;
var G__23617 = (i__23604_23610 + (1));
seq__23601_23607 = G__23614;
chunk__23602_23608 = G__23615;
count__23603_23609 = G__23616;
i__23604_23610 = G__23617;
continue;
}
} else
{var temp__4126__auto___23618 = cljs.core.seq.call(null,seq__23601_23607);if(temp__4126__auto___23618)
{var seq__23601_23619__$1 = temp__4126__auto___23618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23601_23619__$1))
{var c__4408__auto___23620 = cljs.core.chunk_first.call(null,seq__23601_23619__$1);{
var G__23621 = cljs.core.chunk_rest.call(null,seq__23601_23619__$1);
var G__23622 = c__4408__auto___23620;
var G__23623 = cljs.core.count.call(null,c__4408__auto___23620);
var G__23624 = (0);
seq__23601_23607 = G__23621;
chunk__23602_23608 = G__23622;
count__23603_23609 = G__23623;
i__23604_23610 = G__23624;
continue;
}
} else
{var vec__23606_23625 = cljs.core.first.call(null,seq__23601_23619__$1);var k_23626 = cljs.core.nth.call(null,vec__23606_23625,(0),null);var v_23627 = cljs.core.nth.call(null,vec__23606_23625,(1),null);(evt[k_23626] = v_23627);
{
var G__23628 = cljs.core.next.call(null,seq__23601_23619__$1);
var G__23629 = null;
var G__23630 = (0);
var G__23631 = (0);
seq__23601_23607 = G__23628;
chunk__23602_23608 = G__23629;
count__23603_23609 = G__23630;
i__23604_23610 = G__23631;
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
return (function (p1__23632_SHARP_){return goog.events.getListeners(p1__23632_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
