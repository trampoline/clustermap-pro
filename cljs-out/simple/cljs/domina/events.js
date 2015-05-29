// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj23548 = {};return obj23548;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t23552 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t23552 = (function (evt,f,create_listener_function,meta23553){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta23553 = meta23553;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t23552.cljs$lang$type = true;
domina.events.t23552.cljs$lang$ctorStr = "domina.events/t23552";
domina.events.t23552.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t23552");
});
domina.events.t23552.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t23552.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t23552.prototype.domina$events$Event$ = true;
domina.events.t23552.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t23552.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t23552.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t23552.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t23552.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t23552.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t23552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23554){var self__ = this;
var _23554__$1 = this;return self__.meta23553;
});
domina.events.t23552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23554,meta23553__$1){var self__ = this;
var _23554__$1 = this;return (new domina.events.t23552(self__.evt,self__.f,self__.create_listener_function,meta23553__$1));
});
domina.events.__GT_t23552 = (function __GT_t23552(evt__$1,f__$1,create_listener_function__$1,meta23553){return (new domina.events.t23552(evt__$1,f__$1,create_listener_function__$1,meta23553));
});
}
return (new domina.events.t23552(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__23559(s__23560){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__23560__$1 = s__23560;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23560__$1);if(temp__4126__auto__)
{var s__23560__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23560__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__23560__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__23562 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__23561 = (0);while(true){
if((i__23561 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__23561);cljs.core.chunk_append.call(null,b__23562,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__23563 = (i__23561 + (1));
i__23561 = G__23563;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23562),iter__23559.call(null,cljs.core.chunk_rest.call(null,s__23560__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23562),null);
}
} else
{var node = cljs.core.first.call(null,s__23560__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__23559.call(null,cljs.core.rest.call(null,s__23560__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__23572 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23573 = null;var count__23574 = (0);var i__23575 = (0);while(true){
if((i__23575 < count__23574))
{var node = cljs.core._nth.call(null,chunk__23573,i__23575);goog.events.removeAll(node);
{
var G__23580 = seq__23572;
var G__23581 = chunk__23573;
var G__23582 = count__23574;
var G__23583 = (i__23575 + (1));
seq__23572 = G__23580;
chunk__23573 = G__23581;
count__23574 = G__23582;
i__23575 = G__23583;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23572);if(temp__4126__auto__)
{var seq__23572__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23572__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__23572__$1);{
var G__23584 = cljs.core.chunk_rest.call(null,seq__23572__$1);
var G__23585 = c__4408__auto__;
var G__23586 = cljs.core.count.call(null,c__4408__auto__);
var G__23587 = (0);
seq__23572 = G__23584;
chunk__23573 = G__23585;
count__23574 = G__23586;
i__23575 = G__23587;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__23572__$1);goog.events.removeAll(node);
{
var G__23588 = cljs.core.next.call(null,seq__23572__$1);
var G__23589 = null;
var G__23590 = (0);
var G__23591 = (0);
seq__23572 = G__23588;
chunk__23573 = G__23589;
count__23574 = G__23590;
i__23575 = G__23591;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__23576 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23577 = null;var count__23578 = (0);var i__23579 = (0);while(true){
if((i__23579 < count__23578))
{var node = cljs.core._nth.call(null,chunk__23577,i__23579);goog.events.removeAll(node,type__$1);
{
var G__23592 = seq__23576;
var G__23593 = chunk__23577;
var G__23594 = count__23578;
var G__23595 = (i__23579 + (1));
seq__23576 = G__23592;
chunk__23577 = G__23593;
count__23578 = G__23594;
i__23579 = G__23595;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23576);if(temp__4126__auto__)
{var seq__23576__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23576__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__23576__$1);{
var G__23596 = cljs.core.chunk_rest.call(null,seq__23576__$1);
var G__23597 = c__4408__auto__;
var G__23598 = cljs.core.count.call(null,c__4408__auto__);
var G__23599 = (0);
seq__23576 = G__23596;
chunk__23577 = G__23597;
count__23578 = G__23598;
i__23579 = G__23599;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__23576__$1);goog.events.removeAll(node,type__$1);
{
var G__23600 = cljs.core.next.call(null,seq__23576__$1);
var G__23601 = null;
var G__23602 = (0);
var G__23603 = (0);
seq__23576 = G__23600;
chunk__23577 = G__23601;
count__23578 = G__23602;
i__23579 = G__23603;
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
var G__23604 = parent;
var G__23605 = cljs.core.cons.call(null,parent,so_far);
n = G__23604;
so_far = G__23605;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__23614_23622 = cljs.core.seq.call(null,ancestors);var chunk__23615_23623 = null;var count__23616_23624 = (0);var i__23617_23625 = (0);while(true){
if((i__23617_23625 < count__23616_23624))
{var n_23626 = cljs.core._nth.call(null,chunk__23615_23623,i__23617_23625);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23626;
goog.events.fireListeners(n_23626,evt.type,true,evt);
}
{
var G__23627 = seq__23614_23622;
var G__23628 = chunk__23615_23623;
var G__23629 = count__23616_23624;
var G__23630 = (i__23617_23625 + (1));
seq__23614_23622 = G__23627;
chunk__23615_23623 = G__23628;
count__23616_23624 = G__23629;
i__23617_23625 = G__23630;
continue;
}
} else
{var temp__4126__auto___23631 = cljs.core.seq.call(null,seq__23614_23622);if(temp__4126__auto___23631)
{var seq__23614_23632__$1 = temp__4126__auto___23631;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23614_23632__$1))
{var c__4408__auto___23633 = cljs.core.chunk_first.call(null,seq__23614_23632__$1);{
var G__23634 = cljs.core.chunk_rest.call(null,seq__23614_23632__$1);
var G__23635 = c__4408__auto___23633;
var G__23636 = cljs.core.count.call(null,c__4408__auto___23633);
var G__23637 = (0);
seq__23614_23622 = G__23634;
chunk__23615_23623 = G__23635;
count__23616_23624 = G__23636;
i__23617_23625 = G__23637;
continue;
}
} else
{var n_23638 = cljs.core.first.call(null,seq__23614_23632__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23638;
goog.events.fireListeners(n_23638,evt.type,true,evt);
}
{
var G__23639 = cljs.core.next.call(null,seq__23614_23632__$1);
var G__23640 = null;
var G__23641 = (0);
var G__23642 = (0);
seq__23614_23622 = G__23639;
chunk__23615_23623 = G__23640;
count__23616_23624 = G__23641;
i__23617_23625 = G__23642;
continue;
}
}
} else
{}
}
break;
}
var seq__23618_23643 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__23619_23644 = null;var count__23620_23645 = (0);var i__23621_23646 = (0);while(true){
if((i__23621_23646 < count__23620_23645))
{var n_23647 = cljs.core._nth.call(null,chunk__23619_23644,i__23621_23646);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23647;
goog.events.fireListeners(n_23647,evt.type,false,evt);
}
{
var G__23648 = seq__23618_23643;
var G__23649 = chunk__23619_23644;
var G__23650 = count__23620_23645;
var G__23651 = (i__23621_23646 + (1));
seq__23618_23643 = G__23648;
chunk__23619_23644 = G__23649;
count__23620_23645 = G__23650;
i__23621_23646 = G__23651;
continue;
}
} else
{var temp__4126__auto___23652 = cljs.core.seq.call(null,seq__23618_23643);if(temp__4126__auto___23652)
{var seq__23618_23653__$1 = temp__4126__auto___23652;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23618_23653__$1))
{var c__4408__auto___23654 = cljs.core.chunk_first.call(null,seq__23618_23653__$1);{
var G__23655 = cljs.core.chunk_rest.call(null,seq__23618_23653__$1);
var G__23656 = c__4408__auto___23654;
var G__23657 = cljs.core.count.call(null,c__4408__auto___23654);
var G__23658 = (0);
seq__23618_23643 = G__23655;
chunk__23619_23644 = G__23656;
count__23620_23645 = G__23657;
i__23621_23646 = G__23658;
continue;
}
} else
{var n_23659 = cljs.core.first.call(null,seq__23618_23653__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23659;
goog.events.fireListeners(n_23659,evt.type,false,evt);
}
{
var G__23660 = cljs.core.next.call(null,seq__23618_23653__$1);
var G__23661 = null;
var G__23662 = (0);
var G__23663 = (0);
seq__23618_23643 = G__23660;
chunk__23619_23644 = G__23661;
count__23620_23645 = G__23662;
i__23621_23646 = G__23663;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__23670_23676 = cljs.core.seq.call(null,evt_map);var chunk__23671_23677 = null;var count__23672_23678 = (0);var i__23673_23679 = (0);while(true){
if((i__23673_23679 < count__23672_23678))
{var vec__23674_23680 = cljs.core._nth.call(null,chunk__23671_23677,i__23673_23679);var k_23681 = cljs.core.nth.call(null,vec__23674_23680,(0),null);var v_23682 = cljs.core.nth.call(null,vec__23674_23680,(1),null);(evt[k_23681] = v_23682);
{
var G__23683 = seq__23670_23676;
var G__23684 = chunk__23671_23677;
var G__23685 = count__23672_23678;
var G__23686 = (i__23673_23679 + (1));
seq__23670_23676 = G__23683;
chunk__23671_23677 = G__23684;
count__23672_23678 = G__23685;
i__23673_23679 = G__23686;
continue;
}
} else
{var temp__4126__auto___23687 = cljs.core.seq.call(null,seq__23670_23676);if(temp__4126__auto___23687)
{var seq__23670_23688__$1 = temp__4126__auto___23687;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23670_23688__$1))
{var c__4408__auto___23689 = cljs.core.chunk_first.call(null,seq__23670_23688__$1);{
var G__23690 = cljs.core.chunk_rest.call(null,seq__23670_23688__$1);
var G__23691 = c__4408__auto___23689;
var G__23692 = cljs.core.count.call(null,c__4408__auto___23689);
var G__23693 = (0);
seq__23670_23676 = G__23690;
chunk__23671_23677 = G__23691;
count__23672_23678 = G__23692;
i__23673_23679 = G__23693;
continue;
}
} else
{var vec__23675_23694 = cljs.core.first.call(null,seq__23670_23688__$1);var k_23695 = cljs.core.nth.call(null,vec__23675_23694,(0),null);var v_23696 = cljs.core.nth.call(null,vec__23675_23694,(1),null);(evt[k_23695] = v_23696);
{
var G__23697 = cljs.core.next.call(null,seq__23670_23688__$1);
var G__23698 = null;
var G__23699 = (0);
var G__23700 = (0);
seq__23670_23676 = G__23697;
chunk__23671_23677 = G__23698;
count__23672_23678 = G__23699;
i__23673_23679 = G__23700;
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
return (function (p1__23701_SHARP_){return goog.events.getListeners(p1__23701_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
