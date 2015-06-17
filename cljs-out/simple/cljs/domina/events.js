// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj21005 = {};return obj21005;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t21009 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t21009 = (function (evt,f,create_listener_function,meta21010){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta21010 = meta21010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t21009.cljs$lang$type = true;
domina.events.t21009.cljs$lang$ctorStr = "domina.events/t21009";
domina.events.t21009.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t21009");
});
domina.events.t21009.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t21009.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t21009.prototype.domina$events$Event$ = true;
domina.events.t21009.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t21009.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t21009.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t21009.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t21009.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t21009.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t21009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21011){var self__ = this;
var _21011__$1 = this;return self__.meta21010;
});
domina.events.t21009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21011,meta21010__$1){var self__ = this;
var _21011__$1 = this;return (new domina.events.t21009(self__.evt,self__.f,self__.create_listener_function,meta21010__$1));
});
domina.events.__GT_t21009 = (function __GT_t21009(evt__$1,f__$1,create_listener_function__$1,meta21010){return (new domina.events.t21009(evt__$1,f__$1,create_listener_function__$1,meta21010));
});
}
return (new domina.events.t21009(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__21016(s__21017){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__21017__$1 = s__21017;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21017__$1);if(temp__4126__auto__)
{var s__21017__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21017__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21017__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21019 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21018 = (0);while(true){
if((i__21018 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__21018);cljs.core.chunk_append.call(null,b__21019,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__21020 = (i__21018 + (1));
i__21018 = G__21020;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21019),iter__21016.call(null,cljs.core.chunk_rest.call(null,s__21017__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21019),null);
}
} else
{var node = cljs.core.first.call(null,s__21017__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__21016.call(null,cljs.core.rest.call(null,s__21017__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__21029 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21030 = null;var count__21031 = (0);var i__21032 = (0);while(true){
if((i__21032 < count__21031))
{var node = cljs.core._nth.call(null,chunk__21030,i__21032);goog.events.removeAll(node);
{
var G__21037 = seq__21029;
var G__21038 = chunk__21030;
var G__21039 = count__21031;
var G__21040 = (i__21032 + (1));
seq__21029 = G__21037;
chunk__21030 = G__21038;
count__21031 = G__21039;
i__21032 = G__21040;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21029);if(temp__4126__auto__)
{var seq__21029__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21029__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21029__$1);{
var G__21041 = cljs.core.chunk_rest.call(null,seq__21029__$1);
var G__21042 = c__4408__auto__;
var G__21043 = cljs.core.count.call(null,c__4408__auto__);
var G__21044 = (0);
seq__21029 = G__21041;
chunk__21030 = G__21042;
count__21031 = G__21043;
i__21032 = G__21044;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21029__$1);goog.events.removeAll(node);
{
var G__21045 = cljs.core.next.call(null,seq__21029__$1);
var G__21046 = null;
var G__21047 = (0);
var G__21048 = (0);
seq__21029 = G__21045;
chunk__21030 = G__21046;
count__21031 = G__21047;
i__21032 = G__21048;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__21033 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21034 = null;var count__21035 = (0);var i__21036 = (0);while(true){
if((i__21036 < count__21035))
{var node = cljs.core._nth.call(null,chunk__21034,i__21036);goog.events.removeAll(node,type__$1);
{
var G__21049 = seq__21033;
var G__21050 = chunk__21034;
var G__21051 = count__21035;
var G__21052 = (i__21036 + (1));
seq__21033 = G__21049;
chunk__21034 = G__21050;
count__21035 = G__21051;
i__21036 = G__21052;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21033);if(temp__4126__auto__)
{var seq__21033__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21033__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21033__$1);{
var G__21053 = cljs.core.chunk_rest.call(null,seq__21033__$1);
var G__21054 = c__4408__auto__;
var G__21055 = cljs.core.count.call(null,c__4408__auto__);
var G__21056 = (0);
seq__21033 = G__21053;
chunk__21034 = G__21054;
count__21035 = G__21055;
i__21036 = G__21056;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21033__$1);goog.events.removeAll(node,type__$1);
{
var G__21057 = cljs.core.next.call(null,seq__21033__$1);
var G__21058 = null;
var G__21059 = (0);
var G__21060 = (0);
seq__21033 = G__21057;
chunk__21034 = G__21058;
count__21035 = G__21059;
i__21036 = G__21060;
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
var G__21061 = parent;
var G__21062 = cljs.core.cons.call(null,parent,so_far);
n = G__21061;
so_far = G__21062;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__21071_21079 = cljs.core.seq.call(null,ancestors);var chunk__21072_21080 = null;var count__21073_21081 = (0);var i__21074_21082 = (0);while(true){
if((i__21074_21082 < count__21073_21081))
{var n_21083 = cljs.core._nth.call(null,chunk__21072_21080,i__21074_21082);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21083;
goog.events.fireListeners(n_21083,evt.type,true,evt);
}
{
var G__21084 = seq__21071_21079;
var G__21085 = chunk__21072_21080;
var G__21086 = count__21073_21081;
var G__21087 = (i__21074_21082 + (1));
seq__21071_21079 = G__21084;
chunk__21072_21080 = G__21085;
count__21073_21081 = G__21086;
i__21074_21082 = G__21087;
continue;
}
} else
{var temp__4126__auto___21088 = cljs.core.seq.call(null,seq__21071_21079);if(temp__4126__auto___21088)
{var seq__21071_21089__$1 = temp__4126__auto___21088;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21071_21089__$1))
{var c__4408__auto___21090 = cljs.core.chunk_first.call(null,seq__21071_21089__$1);{
var G__21091 = cljs.core.chunk_rest.call(null,seq__21071_21089__$1);
var G__21092 = c__4408__auto___21090;
var G__21093 = cljs.core.count.call(null,c__4408__auto___21090);
var G__21094 = (0);
seq__21071_21079 = G__21091;
chunk__21072_21080 = G__21092;
count__21073_21081 = G__21093;
i__21074_21082 = G__21094;
continue;
}
} else
{var n_21095 = cljs.core.first.call(null,seq__21071_21089__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21095;
goog.events.fireListeners(n_21095,evt.type,true,evt);
}
{
var G__21096 = cljs.core.next.call(null,seq__21071_21089__$1);
var G__21097 = null;
var G__21098 = (0);
var G__21099 = (0);
seq__21071_21079 = G__21096;
chunk__21072_21080 = G__21097;
count__21073_21081 = G__21098;
i__21074_21082 = G__21099;
continue;
}
}
} else
{}
}
break;
}
var seq__21075_21100 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__21076_21101 = null;var count__21077_21102 = (0);var i__21078_21103 = (0);while(true){
if((i__21078_21103 < count__21077_21102))
{var n_21104 = cljs.core._nth.call(null,chunk__21076_21101,i__21078_21103);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21104;
goog.events.fireListeners(n_21104,evt.type,false,evt);
}
{
var G__21105 = seq__21075_21100;
var G__21106 = chunk__21076_21101;
var G__21107 = count__21077_21102;
var G__21108 = (i__21078_21103 + (1));
seq__21075_21100 = G__21105;
chunk__21076_21101 = G__21106;
count__21077_21102 = G__21107;
i__21078_21103 = G__21108;
continue;
}
} else
{var temp__4126__auto___21109 = cljs.core.seq.call(null,seq__21075_21100);if(temp__4126__auto___21109)
{var seq__21075_21110__$1 = temp__4126__auto___21109;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21075_21110__$1))
{var c__4408__auto___21111 = cljs.core.chunk_first.call(null,seq__21075_21110__$1);{
var G__21112 = cljs.core.chunk_rest.call(null,seq__21075_21110__$1);
var G__21113 = c__4408__auto___21111;
var G__21114 = cljs.core.count.call(null,c__4408__auto___21111);
var G__21115 = (0);
seq__21075_21100 = G__21112;
chunk__21076_21101 = G__21113;
count__21077_21102 = G__21114;
i__21078_21103 = G__21115;
continue;
}
} else
{var n_21116 = cljs.core.first.call(null,seq__21075_21110__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21116;
goog.events.fireListeners(n_21116,evt.type,false,evt);
}
{
var G__21117 = cljs.core.next.call(null,seq__21075_21110__$1);
var G__21118 = null;
var G__21119 = (0);
var G__21120 = (0);
seq__21075_21100 = G__21117;
chunk__21076_21101 = G__21118;
count__21077_21102 = G__21119;
i__21078_21103 = G__21120;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__21127_21133 = cljs.core.seq.call(null,evt_map);var chunk__21128_21134 = null;var count__21129_21135 = (0);var i__21130_21136 = (0);while(true){
if((i__21130_21136 < count__21129_21135))
{var vec__21131_21137 = cljs.core._nth.call(null,chunk__21128_21134,i__21130_21136);var k_21138 = cljs.core.nth.call(null,vec__21131_21137,(0),null);var v_21139 = cljs.core.nth.call(null,vec__21131_21137,(1),null);(evt[k_21138] = v_21139);
{
var G__21140 = seq__21127_21133;
var G__21141 = chunk__21128_21134;
var G__21142 = count__21129_21135;
var G__21143 = (i__21130_21136 + (1));
seq__21127_21133 = G__21140;
chunk__21128_21134 = G__21141;
count__21129_21135 = G__21142;
i__21130_21136 = G__21143;
continue;
}
} else
{var temp__4126__auto___21144 = cljs.core.seq.call(null,seq__21127_21133);if(temp__4126__auto___21144)
{var seq__21127_21145__$1 = temp__4126__auto___21144;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21127_21145__$1))
{var c__4408__auto___21146 = cljs.core.chunk_first.call(null,seq__21127_21145__$1);{
var G__21147 = cljs.core.chunk_rest.call(null,seq__21127_21145__$1);
var G__21148 = c__4408__auto___21146;
var G__21149 = cljs.core.count.call(null,c__4408__auto___21146);
var G__21150 = (0);
seq__21127_21133 = G__21147;
chunk__21128_21134 = G__21148;
count__21129_21135 = G__21149;
i__21130_21136 = G__21150;
continue;
}
} else
{var vec__21132_21151 = cljs.core.first.call(null,seq__21127_21145__$1);var k_21152 = cljs.core.nth.call(null,vec__21132_21151,(0),null);var v_21153 = cljs.core.nth.call(null,vec__21132_21151,(1),null);(evt[k_21152] = v_21153);
{
var G__21154 = cljs.core.next.call(null,seq__21127_21145__$1);
var G__21155 = null;
var G__21156 = (0);
var G__21157 = (0);
seq__21127_21133 = G__21154;
chunk__21128_21134 = G__21155;
count__21129_21135 = G__21156;
i__21130_21136 = G__21157;
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
return (function (p1__21158_SHARP_){return goog.events.getListeners(p1__21158_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
