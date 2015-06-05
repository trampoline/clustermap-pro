// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj20544 = {};return obj20544;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t20548 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t20548 = (function (evt,f,create_listener_function,meta20549){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta20549 = meta20549;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t20548.cljs$lang$type = true;
domina.events.t20548.cljs$lang$ctorStr = "domina.events/t20548";
domina.events.t20548.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t20548");
});
domina.events.t20548.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t20548.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t20548.prototype.domina$events$Event$ = true;
domina.events.t20548.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t20548.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t20548.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t20548.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t20548.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t20548.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t20548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20550){var self__ = this;
var _20550__$1 = this;return self__.meta20549;
});
domina.events.t20548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20550,meta20549__$1){var self__ = this;
var _20550__$1 = this;return (new domina.events.t20548(self__.evt,self__.f,self__.create_listener_function,meta20549__$1));
});
domina.events.__GT_t20548 = (function __GT_t20548(evt__$1,f__$1,create_listener_function__$1,meta20549){return (new domina.events.t20548(evt__$1,f__$1,create_listener_function__$1,meta20549));
});
}
return (new domina.events.t20548(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__20555(s__20556){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__20556__$1 = s__20556;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20556__$1);if(temp__4126__auto__)
{var s__20556__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20556__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20556__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20558 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20557 = (0);while(true){
if((i__20557 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__20557);cljs.core.chunk_append.call(null,b__20558,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__20559 = (i__20557 + (1));
i__20557 = G__20559;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20558),iter__20555.call(null,cljs.core.chunk_rest.call(null,s__20556__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20558),null);
}
} else
{var node = cljs.core.first.call(null,s__20556__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__20555.call(null,cljs.core.rest.call(null,s__20556__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__20568 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20569 = null;var count__20570 = (0);var i__20571 = (0);while(true){
if((i__20571 < count__20570))
{var node = cljs.core._nth.call(null,chunk__20569,i__20571);goog.events.removeAll(node);
{
var G__20576 = seq__20568;
var G__20577 = chunk__20569;
var G__20578 = count__20570;
var G__20579 = (i__20571 + (1));
seq__20568 = G__20576;
chunk__20569 = G__20577;
count__20570 = G__20578;
i__20571 = G__20579;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20568);if(temp__4126__auto__)
{var seq__20568__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20568__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20568__$1);{
var G__20580 = cljs.core.chunk_rest.call(null,seq__20568__$1);
var G__20581 = c__4408__auto__;
var G__20582 = cljs.core.count.call(null,c__4408__auto__);
var G__20583 = (0);
seq__20568 = G__20580;
chunk__20569 = G__20581;
count__20570 = G__20582;
i__20571 = G__20583;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__20568__$1);goog.events.removeAll(node);
{
var G__20584 = cljs.core.next.call(null,seq__20568__$1);
var G__20585 = null;
var G__20586 = (0);
var G__20587 = (0);
seq__20568 = G__20584;
chunk__20569 = G__20585;
count__20570 = G__20586;
i__20571 = G__20587;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__20572 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20573 = null;var count__20574 = (0);var i__20575 = (0);while(true){
if((i__20575 < count__20574))
{var node = cljs.core._nth.call(null,chunk__20573,i__20575);goog.events.removeAll(node,type__$1);
{
var G__20588 = seq__20572;
var G__20589 = chunk__20573;
var G__20590 = count__20574;
var G__20591 = (i__20575 + (1));
seq__20572 = G__20588;
chunk__20573 = G__20589;
count__20574 = G__20590;
i__20575 = G__20591;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20572);if(temp__4126__auto__)
{var seq__20572__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20572__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20572__$1);{
var G__20592 = cljs.core.chunk_rest.call(null,seq__20572__$1);
var G__20593 = c__4408__auto__;
var G__20594 = cljs.core.count.call(null,c__4408__auto__);
var G__20595 = (0);
seq__20572 = G__20592;
chunk__20573 = G__20593;
count__20574 = G__20594;
i__20575 = G__20595;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__20572__$1);goog.events.removeAll(node,type__$1);
{
var G__20596 = cljs.core.next.call(null,seq__20572__$1);
var G__20597 = null;
var G__20598 = (0);
var G__20599 = (0);
seq__20572 = G__20596;
chunk__20573 = G__20597;
count__20574 = G__20598;
i__20575 = G__20599;
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
var G__20600 = parent;
var G__20601 = cljs.core.cons.call(null,parent,so_far);
n = G__20600;
so_far = G__20601;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__20610_20618 = cljs.core.seq.call(null,ancestors);var chunk__20611_20619 = null;var count__20612_20620 = (0);var i__20613_20621 = (0);while(true){
if((i__20613_20621 < count__20612_20620))
{var n_20622 = cljs.core._nth.call(null,chunk__20611_20619,i__20613_20621);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20622;
goog.events.fireListeners(n_20622,evt.type,true,evt);
}
{
var G__20623 = seq__20610_20618;
var G__20624 = chunk__20611_20619;
var G__20625 = count__20612_20620;
var G__20626 = (i__20613_20621 + (1));
seq__20610_20618 = G__20623;
chunk__20611_20619 = G__20624;
count__20612_20620 = G__20625;
i__20613_20621 = G__20626;
continue;
}
} else
{var temp__4126__auto___20627 = cljs.core.seq.call(null,seq__20610_20618);if(temp__4126__auto___20627)
{var seq__20610_20628__$1 = temp__4126__auto___20627;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20610_20628__$1))
{var c__4408__auto___20629 = cljs.core.chunk_first.call(null,seq__20610_20628__$1);{
var G__20630 = cljs.core.chunk_rest.call(null,seq__20610_20628__$1);
var G__20631 = c__4408__auto___20629;
var G__20632 = cljs.core.count.call(null,c__4408__auto___20629);
var G__20633 = (0);
seq__20610_20618 = G__20630;
chunk__20611_20619 = G__20631;
count__20612_20620 = G__20632;
i__20613_20621 = G__20633;
continue;
}
} else
{var n_20634 = cljs.core.first.call(null,seq__20610_20628__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20634;
goog.events.fireListeners(n_20634,evt.type,true,evt);
}
{
var G__20635 = cljs.core.next.call(null,seq__20610_20628__$1);
var G__20636 = null;
var G__20637 = (0);
var G__20638 = (0);
seq__20610_20618 = G__20635;
chunk__20611_20619 = G__20636;
count__20612_20620 = G__20637;
i__20613_20621 = G__20638;
continue;
}
}
} else
{}
}
break;
}
var seq__20614_20639 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__20615_20640 = null;var count__20616_20641 = (0);var i__20617_20642 = (0);while(true){
if((i__20617_20642 < count__20616_20641))
{var n_20643 = cljs.core._nth.call(null,chunk__20615_20640,i__20617_20642);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20643;
goog.events.fireListeners(n_20643,evt.type,false,evt);
}
{
var G__20644 = seq__20614_20639;
var G__20645 = chunk__20615_20640;
var G__20646 = count__20616_20641;
var G__20647 = (i__20617_20642 + (1));
seq__20614_20639 = G__20644;
chunk__20615_20640 = G__20645;
count__20616_20641 = G__20646;
i__20617_20642 = G__20647;
continue;
}
} else
{var temp__4126__auto___20648 = cljs.core.seq.call(null,seq__20614_20639);if(temp__4126__auto___20648)
{var seq__20614_20649__$1 = temp__4126__auto___20648;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20614_20649__$1))
{var c__4408__auto___20650 = cljs.core.chunk_first.call(null,seq__20614_20649__$1);{
var G__20651 = cljs.core.chunk_rest.call(null,seq__20614_20649__$1);
var G__20652 = c__4408__auto___20650;
var G__20653 = cljs.core.count.call(null,c__4408__auto___20650);
var G__20654 = (0);
seq__20614_20639 = G__20651;
chunk__20615_20640 = G__20652;
count__20616_20641 = G__20653;
i__20617_20642 = G__20654;
continue;
}
} else
{var n_20655 = cljs.core.first.call(null,seq__20614_20649__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20655;
goog.events.fireListeners(n_20655,evt.type,false,evt);
}
{
var G__20656 = cljs.core.next.call(null,seq__20614_20649__$1);
var G__20657 = null;
var G__20658 = (0);
var G__20659 = (0);
seq__20614_20639 = G__20656;
chunk__20615_20640 = G__20657;
count__20616_20641 = G__20658;
i__20617_20642 = G__20659;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__20666_20672 = cljs.core.seq.call(null,evt_map);var chunk__20667_20673 = null;var count__20668_20674 = (0);var i__20669_20675 = (0);while(true){
if((i__20669_20675 < count__20668_20674))
{var vec__20670_20676 = cljs.core._nth.call(null,chunk__20667_20673,i__20669_20675);var k_20677 = cljs.core.nth.call(null,vec__20670_20676,(0),null);var v_20678 = cljs.core.nth.call(null,vec__20670_20676,(1),null);(evt[k_20677] = v_20678);
{
var G__20679 = seq__20666_20672;
var G__20680 = chunk__20667_20673;
var G__20681 = count__20668_20674;
var G__20682 = (i__20669_20675 + (1));
seq__20666_20672 = G__20679;
chunk__20667_20673 = G__20680;
count__20668_20674 = G__20681;
i__20669_20675 = G__20682;
continue;
}
} else
{var temp__4126__auto___20683 = cljs.core.seq.call(null,seq__20666_20672);if(temp__4126__auto___20683)
{var seq__20666_20684__$1 = temp__4126__auto___20683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20666_20684__$1))
{var c__4408__auto___20685 = cljs.core.chunk_first.call(null,seq__20666_20684__$1);{
var G__20686 = cljs.core.chunk_rest.call(null,seq__20666_20684__$1);
var G__20687 = c__4408__auto___20685;
var G__20688 = cljs.core.count.call(null,c__4408__auto___20685);
var G__20689 = (0);
seq__20666_20672 = G__20686;
chunk__20667_20673 = G__20687;
count__20668_20674 = G__20688;
i__20669_20675 = G__20689;
continue;
}
} else
{var vec__20671_20690 = cljs.core.first.call(null,seq__20666_20684__$1);var k_20691 = cljs.core.nth.call(null,vec__20671_20690,(0),null);var v_20692 = cljs.core.nth.call(null,vec__20671_20690,(1),null);(evt[k_20691] = v_20692);
{
var G__20693 = cljs.core.next.call(null,seq__20666_20684__$1);
var G__20694 = null;
var G__20695 = (0);
var G__20696 = (0);
seq__20666_20672 = G__20693;
chunk__20667_20673 = G__20694;
count__20668_20674 = G__20695;
i__20669_20675 = G__20696;
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
return (function (p1__20697_SHARP_){return goog.events.getListeners(p1__20697_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
