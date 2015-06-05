// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj20377 = {};return obj20377;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t20381 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t20381 = (function (evt,f,create_listener_function,meta20382){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta20382 = meta20382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t20381.cljs$lang$type = true;
domina.events.t20381.cljs$lang$ctorStr = "domina.events/t20381";
domina.events.t20381.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t20381");
});
domina.events.t20381.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t20381.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t20381.prototype.domina$events$Event$ = true;
domina.events.t20381.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t20381.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t20381.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t20381.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t20381.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t20381.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t20381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20383){var self__ = this;
var _20383__$1 = this;return self__.meta20382;
});
domina.events.t20381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20383,meta20382__$1){var self__ = this;
var _20383__$1 = this;return (new domina.events.t20381(self__.evt,self__.f,self__.create_listener_function,meta20382__$1));
});
domina.events.__GT_t20381 = (function __GT_t20381(evt__$1,f__$1,create_listener_function__$1,meta20382){return (new domina.events.t20381(evt__$1,f__$1,create_listener_function__$1,meta20382));
});
}
return (new domina.events.t20381(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__20388(s__20389){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__20389__$1 = s__20389;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20389__$1);if(temp__4126__auto__)
{var s__20389__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20389__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20389__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20391 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20390 = (0);while(true){
if((i__20390 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__20390);cljs.core.chunk_append.call(null,b__20391,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__20392 = (i__20390 + (1));
i__20390 = G__20392;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20391),iter__20388.call(null,cljs.core.chunk_rest.call(null,s__20389__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20391),null);
}
} else
{var node = cljs.core.first.call(null,s__20389__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__20388.call(null,cljs.core.rest.call(null,s__20389__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__20401 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20402 = null;var count__20403 = (0);var i__20404 = (0);while(true){
if((i__20404 < count__20403))
{var node = cljs.core._nth.call(null,chunk__20402,i__20404);goog.events.removeAll(node);
{
var G__20409 = seq__20401;
var G__20410 = chunk__20402;
var G__20411 = count__20403;
var G__20412 = (i__20404 + (1));
seq__20401 = G__20409;
chunk__20402 = G__20410;
count__20403 = G__20411;
i__20404 = G__20412;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20401);if(temp__4126__auto__)
{var seq__20401__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20401__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20401__$1);{
var G__20413 = cljs.core.chunk_rest.call(null,seq__20401__$1);
var G__20414 = c__4408__auto__;
var G__20415 = cljs.core.count.call(null,c__4408__auto__);
var G__20416 = (0);
seq__20401 = G__20413;
chunk__20402 = G__20414;
count__20403 = G__20415;
i__20404 = G__20416;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__20401__$1);goog.events.removeAll(node);
{
var G__20417 = cljs.core.next.call(null,seq__20401__$1);
var G__20418 = null;
var G__20419 = (0);
var G__20420 = (0);
seq__20401 = G__20417;
chunk__20402 = G__20418;
count__20403 = G__20419;
i__20404 = G__20420;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__20405 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20406 = null;var count__20407 = (0);var i__20408 = (0);while(true){
if((i__20408 < count__20407))
{var node = cljs.core._nth.call(null,chunk__20406,i__20408);goog.events.removeAll(node,type__$1);
{
var G__20421 = seq__20405;
var G__20422 = chunk__20406;
var G__20423 = count__20407;
var G__20424 = (i__20408 + (1));
seq__20405 = G__20421;
chunk__20406 = G__20422;
count__20407 = G__20423;
i__20408 = G__20424;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20405);if(temp__4126__auto__)
{var seq__20405__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20405__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20405__$1);{
var G__20425 = cljs.core.chunk_rest.call(null,seq__20405__$1);
var G__20426 = c__4408__auto__;
var G__20427 = cljs.core.count.call(null,c__4408__auto__);
var G__20428 = (0);
seq__20405 = G__20425;
chunk__20406 = G__20426;
count__20407 = G__20427;
i__20408 = G__20428;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__20405__$1);goog.events.removeAll(node,type__$1);
{
var G__20429 = cljs.core.next.call(null,seq__20405__$1);
var G__20430 = null;
var G__20431 = (0);
var G__20432 = (0);
seq__20405 = G__20429;
chunk__20406 = G__20430;
count__20407 = G__20431;
i__20408 = G__20432;
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
var G__20433 = parent;
var G__20434 = cljs.core.cons.call(null,parent,so_far);
n = G__20433;
so_far = G__20434;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__20443_20451 = cljs.core.seq.call(null,ancestors);var chunk__20444_20452 = null;var count__20445_20453 = (0);var i__20446_20454 = (0);while(true){
if((i__20446_20454 < count__20445_20453))
{var n_20455 = cljs.core._nth.call(null,chunk__20444_20452,i__20446_20454);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20455;
goog.events.fireListeners(n_20455,evt.type,true,evt);
}
{
var G__20456 = seq__20443_20451;
var G__20457 = chunk__20444_20452;
var G__20458 = count__20445_20453;
var G__20459 = (i__20446_20454 + (1));
seq__20443_20451 = G__20456;
chunk__20444_20452 = G__20457;
count__20445_20453 = G__20458;
i__20446_20454 = G__20459;
continue;
}
} else
{var temp__4126__auto___20460 = cljs.core.seq.call(null,seq__20443_20451);if(temp__4126__auto___20460)
{var seq__20443_20461__$1 = temp__4126__auto___20460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20443_20461__$1))
{var c__4408__auto___20462 = cljs.core.chunk_first.call(null,seq__20443_20461__$1);{
var G__20463 = cljs.core.chunk_rest.call(null,seq__20443_20461__$1);
var G__20464 = c__4408__auto___20462;
var G__20465 = cljs.core.count.call(null,c__4408__auto___20462);
var G__20466 = (0);
seq__20443_20451 = G__20463;
chunk__20444_20452 = G__20464;
count__20445_20453 = G__20465;
i__20446_20454 = G__20466;
continue;
}
} else
{var n_20467 = cljs.core.first.call(null,seq__20443_20461__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20467;
goog.events.fireListeners(n_20467,evt.type,true,evt);
}
{
var G__20468 = cljs.core.next.call(null,seq__20443_20461__$1);
var G__20469 = null;
var G__20470 = (0);
var G__20471 = (0);
seq__20443_20451 = G__20468;
chunk__20444_20452 = G__20469;
count__20445_20453 = G__20470;
i__20446_20454 = G__20471;
continue;
}
}
} else
{}
}
break;
}
var seq__20447_20472 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__20448_20473 = null;var count__20449_20474 = (0);var i__20450_20475 = (0);while(true){
if((i__20450_20475 < count__20449_20474))
{var n_20476 = cljs.core._nth.call(null,chunk__20448_20473,i__20450_20475);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20476;
goog.events.fireListeners(n_20476,evt.type,false,evt);
}
{
var G__20477 = seq__20447_20472;
var G__20478 = chunk__20448_20473;
var G__20479 = count__20449_20474;
var G__20480 = (i__20450_20475 + (1));
seq__20447_20472 = G__20477;
chunk__20448_20473 = G__20478;
count__20449_20474 = G__20479;
i__20450_20475 = G__20480;
continue;
}
} else
{var temp__4126__auto___20481 = cljs.core.seq.call(null,seq__20447_20472);if(temp__4126__auto___20481)
{var seq__20447_20482__$1 = temp__4126__auto___20481;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20447_20482__$1))
{var c__4408__auto___20483 = cljs.core.chunk_first.call(null,seq__20447_20482__$1);{
var G__20484 = cljs.core.chunk_rest.call(null,seq__20447_20482__$1);
var G__20485 = c__4408__auto___20483;
var G__20486 = cljs.core.count.call(null,c__4408__auto___20483);
var G__20487 = (0);
seq__20447_20472 = G__20484;
chunk__20448_20473 = G__20485;
count__20449_20474 = G__20486;
i__20450_20475 = G__20487;
continue;
}
} else
{var n_20488 = cljs.core.first.call(null,seq__20447_20482__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20488;
goog.events.fireListeners(n_20488,evt.type,false,evt);
}
{
var G__20489 = cljs.core.next.call(null,seq__20447_20482__$1);
var G__20490 = null;
var G__20491 = (0);
var G__20492 = (0);
seq__20447_20472 = G__20489;
chunk__20448_20473 = G__20490;
count__20449_20474 = G__20491;
i__20450_20475 = G__20492;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__20499_20505 = cljs.core.seq.call(null,evt_map);var chunk__20500_20506 = null;var count__20501_20507 = (0);var i__20502_20508 = (0);while(true){
if((i__20502_20508 < count__20501_20507))
{var vec__20503_20509 = cljs.core._nth.call(null,chunk__20500_20506,i__20502_20508);var k_20510 = cljs.core.nth.call(null,vec__20503_20509,(0),null);var v_20511 = cljs.core.nth.call(null,vec__20503_20509,(1),null);(evt[k_20510] = v_20511);
{
var G__20512 = seq__20499_20505;
var G__20513 = chunk__20500_20506;
var G__20514 = count__20501_20507;
var G__20515 = (i__20502_20508 + (1));
seq__20499_20505 = G__20512;
chunk__20500_20506 = G__20513;
count__20501_20507 = G__20514;
i__20502_20508 = G__20515;
continue;
}
} else
{var temp__4126__auto___20516 = cljs.core.seq.call(null,seq__20499_20505);if(temp__4126__auto___20516)
{var seq__20499_20517__$1 = temp__4126__auto___20516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20499_20517__$1))
{var c__4408__auto___20518 = cljs.core.chunk_first.call(null,seq__20499_20517__$1);{
var G__20519 = cljs.core.chunk_rest.call(null,seq__20499_20517__$1);
var G__20520 = c__4408__auto___20518;
var G__20521 = cljs.core.count.call(null,c__4408__auto___20518);
var G__20522 = (0);
seq__20499_20505 = G__20519;
chunk__20500_20506 = G__20520;
count__20501_20507 = G__20521;
i__20502_20508 = G__20522;
continue;
}
} else
{var vec__20504_20523 = cljs.core.first.call(null,seq__20499_20517__$1);var k_20524 = cljs.core.nth.call(null,vec__20504_20523,(0),null);var v_20525 = cljs.core.nth.call(null,vec__20504_20523,(1),null);(evt[k_20524] = v_20525);
{
var G__20526 = cljs.core.next.call(null,seq__20499_20517__$1);
var G__20527 = null;
var G__20528 = (0);
var G__20529 = (0);
seq__20499_20505 = G__20526;
chunk__20500_20506 = G__20527;
count__20501_20507 = G__20528;
i__20502_20508 = G__20529;
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
return (function (p1__20530_SHARP_){return goog.events.getListeners(p1__20530_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
