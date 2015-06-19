// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj40516 = {};return obj40516;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__11540__auto__ = evt;if(and__11540__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__11540__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__12188__auto__ = (((evt == null))?null:evt);return (function (){var or__11552__auto__ = (domina.events.prevent_default[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (domina.events.prevent_default["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__11540__auto__ = evt;if(and__11540__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__11540__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__12188__auto__ = (((evt == null))?null:evt);return (function (){var or__11552__auto__ = (domina.events.stop_propagation[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (domina.events.stop_propagation["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__11540__auto__ = evt;if(and__11540__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__11540__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__12188__auto__ = (((evt == null))?null:evt);return (function (){var or__11552__auto__ = (domina.events.target[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (domina.events.target["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__11540__auto__ = evt;if(and__11540__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__11540__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__12188__auto__ = (((evt == null))?null:evt);return (function (){var or__11552__auto__ = (domina.events.current_target[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (domina.events.current_target["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__11540__auto__ = evt;if(and__11540__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__11540__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__12188__auto__ = (((evt == null))?null:evt);return (function (){var or__11552__auto__ = (domina.events.event_type[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (domina.events.event_type["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__11540__auto__ = evt;if(and__11540__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__11540__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__12188__auto__ = (((evt == null))?null:evt);return (function (){var or__11552__auto__ = (domina.events.raw_event[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (domina.events.raw_event["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t40520 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t40520 = (function (evt,f,create_listener_function,meta40521){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta40521 = meta40521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t40520.cljs$lang$type = true;
domina.events.t40520.cljs$lang$ctorStr = "domina.events/t40520";
domina.events.t40520.cljs$lang$ctorPrWriter = (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"domina.events/t40520");
});
domina.events.t40520.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t40520.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__11552__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return not_found;
}
});
domina.events.t40520.prototype.domina$events$Event$ = true;
domina.events.t40520.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t40520.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t40520.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t40520.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t40520.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t40520.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t40520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40522){var self__ = this;
var _40522__$1 = this;return self__.meta40521;
});
domina.events.t40520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40522,meta40521__$1){var self__ = this;
var _40522__$1 = this;return (new domina.events.t40520(self__.evt,self__.f,self__.create_listener_function,meta40521__$1));
});
domina.events.__GT_t40520 = (function __GT_t40520(evt__$1,f__$1,create_listener_function__$1,meta40521){return (new domina.events.t40520(evt__$1,f__$1,create_listener_function__$1,meta40521));
});
}
return (new domina.events.t40520(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__12290__auto__ = ((function (f,t){
return (function iter__40527(s__40528){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__40528__$1 = s__40528;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40528__$1);if(temp__4126__auto__)
{var s__40528__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40528__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__40528__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__40530 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__40529 = (0);while(true){
if((i__40529 < size__12289__auto__))
{var node = cljs.core._nth.call(null,c__12288__auto__,i__40529);cljs.core.chunk_append.call(null,b__40530,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__40531 = (i__40529 + (1));
i__40529 = G__40531;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40530),iter__40527.call(null,cljs.core.chunk_rest.call(null,s__40528__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40530),null);
}
} else
{var node = cljs.core.first.call(null,s__40528__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__40527.call(null,cljs.core.rest.call(null,s__40528__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__12290__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__40540 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40541 = null;var count__40542 = (0);var i__40543 = (0);while(true){
if((i__40543 < count__40542))
{var node = cljs.core._nth.call(null,chunk__40541,i__40543);goog.events.removeAll(node);
{
var G__40548 = seq__40540;
var G__40549 = chunk__40541;
var G__40550 = count__40542;
var G__40551 = (i__40543 + (1));
seq__40540 = G__40548;
chunk__40541 = G__40549;
count__40542 = G__40550;
i__40543 = G__40551;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40540);if(temp__4126__auto__)
{var seq__40540__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40540__$1))
{var c__12321__auto__ = cljs.core.chunk_first.call(null,seq__40540__$1);{
var G__40552 = cljs.core.chunk_rest.call(null,seq__40540__$1);
var G__40553 = c__12321__auto__;
var G__40554 = cljs.core.count.call(null,c__12321__auto__);
var G__40555 = (0);
seq__40540 = G__40552;
chunk__40541 = G__40553;
count__40542 = G__40554;
i__40543 = G__40555;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__40540__$1);goog.events.removeAll(node);
{
var G__40556 = cljs.core.next.call(null,seq__40540__$1);
var G__40557 = null;
var G__40558 = (0);
var G__40559 = (0);
seq__40540 = G__40556;
chunk__40541 = G__40557;
count__40542 = G__40558;
i__40543 = G__40559;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__40544 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40545 = null;var count__40546 = (0);var i__40547 = (0);while(true){
if((i__40547 < count__40546))
{var node = cljs.core._nth.call(null,chunk__40545,i__40547);goog.events.removeAll(node,type__$1);
{
var G__40560 = seq__40544;
var G__40561 = chunk__40545;
var G__40562 = count__40546;
var G__40563 = (i__40547 + (1));
seq__40544 = G__40560;
chunk__40545 = G__40561;
count__40546 = G__40562;
i__40547 = G__40563;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40544);if(temp__4126__auto__)
{var seq__40544__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40544__$1))
{var c__12321__auto__ = cljs.core.chunk_first.call(null,seq__40544__$1);{
var G__40564 = cljs.core.chunk_rest.call(null,seq__40544__$1);
var G__40565 = c__12321__auto__;
var G__40566 = cljs.core.count.call(null,c__12321__auto__);
var G__40567 = (0);
seq__40544 = G__40564;
chunk__40545 = G__40565;
count__40546 = G__40566;
i__40547 = G__40567;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__40544__$1);goog.events.removeAll(node,type__$1);
{
var G__40568 = cljs.core.next.call(null,seq__40544__$1);
var G__40569 = null;
var G__40570 = (0);
var G__40571 = (0);
seq__40544 = G__40568;
chunk__40545 = G__40569;
count__40546 = G__40570;
i__40547 = G__40571;
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
var G__40572 = parent;
var G__40573 = cljs.core.cons.call(null,parent,so_far);
n = G__40572;
so_far = G__40573;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__40582_40590 = cljs.core.seq.call(null,ancestors);var chunk__40583_40591 = null;var count__40584_40592 = (0);var i__40585_40593 = (0);while(true){
if((i__40585_40593 < count__40584_40592))
{var n_40594 = cljs.core._nth.call(null,chunk__40583_40591,i__40585_40593);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40594;
goog.events.fireListeners(n_40594,evt.type,true,evt);
}
{
var G__40595 = seq__40582_40590;
var G__40596 = chunk__40583_40591;
var G__40597 = count__40584_40592;
var G__40598 = (i__40585_40593 + (1));
seq__40582_40590 = G__40595;
chunk__40583_40591 = G__40596;
count__40584_40592 = G__40597;
i__40585_40593 = G__40598;
continue;
}
} else
{var temp__4126__auto___40599 = cljs.core.seq.call(null,seq__40582_40590);if(temp__4126__auto___40599)
{var seq__40582_40600__$1 = temp__4126__auto___40599;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40582_40600__$1))
{var c__12321__auto___40601 = cljs.core.chunk_first.call(null,seq__40582_40600__$1);{
var G__40602 = cljs.core.chunk_rest.call(null,seq__40582_40600__$1);
var G__40603 = c__12321__auto___40601;
var G__40604 = cljs.core.count.call(null,c__12321__auto___40601);
var G__40605 = (0);
seq__40582_40590 = G__40602;
chunk__40583_40591 = G__40603;
count__40584_40592 = G__40604;
i__40585_40593 = G__40605;
continue;
}
} else
{var n_40606 = cljs.core.first.call(null,seq__40582_40600__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40606;
goog.events.fireListeners(n_40606,evt.type,true,evt);
}
{
var G__40607 = cljs.core.next.call(null,seq__40582_40600__$1);
var G__40608 = null;
var G__40609 = (0);
var G__40610 = (0);
seq__40582_40590 = G__40607;
chunk__40583_40591 = G__40608;
count__40584_40592 = G__40609;
i__40585_40593 = G__40610;
continue;
}
}
} else
{}
}
break;
}
var seq__40586_40611 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__40587_40612 = null;var count__40588_40613 = (0);var i__40589_40614 = (0);while(true){
if((i__40589_40614 < count__40588_40613))
{var n_40615 = cljs.core._nth.call(null,chunk__40587_40612,i__40589_40614);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40615;
goog.events.fireListeners(n_40615,evt.type,false,evt);
}
{
var G__40616 = seq__40586_40611;
var G__40617 = chunk__40587_40612;
var G__40618 = count__40588_40613;
var G__40619 = (i__40589_40614 + (1));
seq__40586_40611 = G__40616;
chunk__40587_40612 = G__40617;
count__40588_40613 = G__40618;
i__40589_40614 = G__40619;
continue;
}
} else
{var temp__4126__auto___40620 = cljs.core.seq.call(null,seq__40586_40611);if(temp__4126__auto___40620)
{var seq__40586_40621__$1 = temp__4126__auto___40620;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40586_40621__$1))
{var c__12321__auto___40622 = cljs.core.chunk_first.call(null,seq__40586_40621__$1);{
var G__40623 = cljs.core.chunk_rest.call(null,seq__40586_40621__$1);
var G__40624 = c__12321__auto___40622;
var G__40625 = cljs.core.count.call(null,c__12321__auto___40622);
var G__40626 = (0);
seq__40586_40611 = G__40623;
chunk__40587_40612 = G__40624;
count__40588_40613 = G__40625;
i__40589_40614 = G__40626;
continue;
}
} else
{var n_40627 = cljs.core.first.call(null,seq__40586_40621__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40627;
goog.events.fireListeners(n_40627,evt.type,false,evt);
}
{
var G__40628 = cljs.core.next.call(null,seq__40586_40621__$1);
var G__40629 = null;
var G__40630 = (0);
var G__40631 = (0);
seq__40586_40611 = G__40628;
chunk__40587_40612 = G__40629;
count__40588_40613 = G__40630;
i__40589_40614 = G__40631;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__11540__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__11540__auto__))
{return o.dispatchEvent;
} else
{return and__11540__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__40638_40644 = cljs.core.seq.call(null,evt_map);var chunk__40639_40645 = null;var count__40640_40646 = (0);var i__40641_40647 = (0);while(true){
if((i__40641_40647 < count__40640_40646))
{var vec__40642_40648 = cljs.core._nth.call(null,chunk__40639_40645,i__40641_40647);var k_40649 = cljs.core.nth.call(null,vec__40642_40648,(0),null);var v_40650 = cljs.core.nth.call(null,vec__40642_40648,(1),null);(evt[k_40649] = v_40650);
{
var G__40651 = seq__40638_40644;
var G__40652 = chunk__40639_40645;
var G__40653 = count__40640_40646;
var G__40654 = (i__40641_40647 + (1));
seq__40638_40644 = G__40651;
chunk__40639_40645 = G__40652;
count__40640_40646 = G__40653;
i__40641_40647 = G__40654;
continue;
}
} else
{var temp__4126__auto___40655 = cljs.core.seq.call(null,seq__40638_40644);if(temp__4126__auto___40655)
{var seq__40638_40656__$1 = temp__4126__auto___40655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40638_40656__$1))
{var c__12321__auto___40657 = cljs.core.chunk_first.call(null,seq__40638_40656__$1);{
var G__40658 = cljs.core.chunk_rest.call(null,seq__40638_40656__$1);
var G__40659 = c__12321__auto___40657;
var G__40660 = cljs.core.count.call(null,c__12321__auto___40657);
var G__40661 = (0);
seq__40638_40644 = G__40658;
chunk__40639_40645 = G__40659;
count__40640_40646 = G__40660;
i__40641_40647 = G__40661;
continue;
}
} else
{var vec__40643_40662 = cljs.core.first.call(null,seq__40638_40656__$1);var k_40663 = cljs.core.nth.call(null,vec__40643_40662,(0),null);var v_40664 = cljs.core.nth.call(null,vec__40643_40662,(1),null);(evt[k_40663] = v_40664);
{
var G__40665 = cljs.core.next.call(null,seq__40638_40656__$1);
var G__40666 = null;
var G__40667 = (0);
var G__40668 = (0);
seq__40638_40644 = G__40665;
chunk__40639_40645 = G__40666;
count__40640_40646 = G__40667;
i__40641_40647 = G__40668;
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
return (function (p1__40669_SHARP_){return goog.events.getListeners(p1__40669_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map