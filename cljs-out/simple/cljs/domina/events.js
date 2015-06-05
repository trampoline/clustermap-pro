// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj20015 = {};return obj20015;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t20019 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t20019 = (function (evt,f,create_listener_function,meta20020){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta20020 = meta20020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t20019.cljs$lang$type = true;
domina.events.t20019.cljs$lang$ctorStr = "domina.events/t20019";
domina.events.t20019.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t20019");
});
domina.events.t20019.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t20019.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t20019.prototype.domina$events$Event$ = true;
domina.events.t20019.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t20019.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t20019.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t20019.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t20019.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t20019.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t20019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20021){var self__ = this;
var _20021__$1 = this;return self__.meta20020;
});
domina.events.t20019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20021,meta20020__$1){var self__ = this;
var _20021__$1 = this;return (new domina.events.t20019(self__.evt,self__.f,self__.create_listener_function,meta20020__$1));
});
domina.events.__GT_t20019 = (function __GT_t20019(evt__$1,f__$1,create_listener_function__$1,meta20020){return (new domina.events.t20019(evt__$1,f__$1,create_listener_function__$1,meta20020));
});
}
return (new domina.events.t20019(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__20026(s__20027){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__20027__$1 = s__20027;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20027__$1);if(temp__4126__auto__)
{var s__20027__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20027__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20027__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20029 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20028 = (0);while(true){
if((i__20028 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__20028);cljs.core.chunk_append.call(null,b__20029,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__20030 = (i__20028 + (1));
i__20028 = G__20030;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20029),iter__20026.call(null,cljs.core.chunk_rest.call(null,s__20027__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20029),null);
}
} else
{var node = cljs.core.first.call(null,s__20027__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__20026.call(null,cljs.core.rest.call(null,s__20027__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__20039 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20040 = null;var count__20041 = (0);var i__20042 = (0);while(true){
if((i__20042 < count__20041))
{var node = cljs.core._nth.call(null,chunk__20040,i__20042);goog.events.removeAll(node);
{
var G__20047 = seq__20039;
var G__20048 = chunk__20040;
var G__20049 = count__20041;
var G__20050 = (i__20042 + (1));
seq__20039 = G__20047;
chunk__20040 = G__20048;
count__20041 = G__20049;
i__20042 = G__20050;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20039);if(temp__4126__auto__)
{var seq__20039__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20039__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20039__$1);{
var G__20051 = cljs.core.chunk_rest.call(null,seq__20039__$1);
var G__20052 = c__4408__auto__;
var G__20053 = cljs.core.count.call(null,c__4408__auto__);
var G__20054 = (0);
seq__20039 = G__20051;
chunk__20040 = G__20052;
count__20041 = G__20053;
i__20042 = G__20054;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__20039__$1);goog.events.removeAll(node);
{
var G__20055 = cljs.core.next.call(null,seq__20039__$1);
var G__20056 = null;
var G__20057 = (0);
var G__20058 = (0);
seq__20039 = G__20055;
chunk__20040 = G__20056;
count__20041 = G__20057;
i__20042 = G__20058;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__20043 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20044 = null;var count__20045 = (0);var i__20046 = (0);while(true){
if((i__20046 < count__20045))
{var node = cljs.core._nth.call(null,chunk__20044,i__20046);goog.events.removeAll(node,type__$1);
{
var G__20059 = seq__20043;
var G__20060 = chunk__20044;
var G__20061 = count__20045;
var G__20062 = (i__20046 + (1));
seq__20043 = G__20059;
chunk__20044 = G__20060;
count__20045 = G__20061;
i__20046 = G__20062;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20043);if(temp__4126__auto__)
{var seq__20043__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20043__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20043__$1);{
var G__20063 = cljs.core.chunk_rest.call(null,seq__20043__$1);
var G__20064 = c__4408__auto__;
var G__20065 = cljs.core.count.call(null,c__4408__auto__);
var G__20066 = (0);
seq__20043 = G__20063;
chunk__20044 = G__20064;
count__20045 = G__20065;
i__20046 = G__20066;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__20043__$1);goog.events.removeAll(node,type__$1);
{
var G__20067 = cljs.core.next.call(null,seq__20043__$1);
var G__20068 = null;
var G__20069 = (0);
var G__20070 = (0);
seq__20043 = G__20067;
chunk__20044 = G__20068;
count__20045 = G__20069;
i__20046 = G__20070;
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
var G__20071 = parent;
var G__20072 = cljs.core.cons.call(null,parent,so_far);
n = G__20071;
so_far = G__20072;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__20081_20089 = cljs.core.seq.call(null,ancestors);var chunk__20082_20090 = null;var count__20083_20091 = (0);var i__20084_20092 = (0);while(true){
if((i__20084_20092 < count__20083_20091))
{var n_20093 = cljs.core._nth.call(null,chunk__20082_20090,i__20084_20092);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20093;
goog.events.fireListeners(n_20093,evt.type,true,evt);
}
{
var G__20094 = seq__20081_20089;
var G__20095 = chunk__20082_20090;
var G__20096 = count__20083_20091;
var G__20097 = (i__20084_20092 + (1));
seq__20081_20089 = G__20094;
chunk__20082_20090 = G__20095;
count__20083_20091 = G__20096;
i__20084_20092 = G__20097;
continue;
}
} else
{var temp__4126__auto___20098 = cljs.core.seq.call(null,seq__20081_20089);if(temp__4126__auto___20098)
{var seq__20081_20099__$1 = temp__4126__auto___20098;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20081_20099__$1))
{var c__4408__auto___20100 = cljs.core.chunk_first.call(null,seq__20081_20099__$1);{
var G__20101 = cljs.core.chunk_rest.call(null,seq__20081_20099__$1);
var G__20102 = c__4408__auto___20100;
var G__20103 = cljs.core.count.call(null,c__4408__auto___20100);
var G__20104 = (0);
seq__20081_20089 = G__20101;
chunk__20082_20090 = G__20102;
count__20083_20091 = G__20103;
i__20084_20092 = G__20104;
continue;
}
} else
{var n_20105 = cljs.core.first.call(null,seq__20081_20099__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20105;
goog.events.fireListeners(n_20105,evt.type,true,evt);
}
{
var G__20106 = cljs.core.next.call(null,seq__20081_20099__$1);
var G__20107 = null;
var G__20108 = (0);
var G__20109 = (0);
seq__20081_20089 = G__20106;
chunk__20082_20090 = G__20107;
count__20083_20091 = G__20108;
i__20084_20092 = G__20109;
continue;
}
}
} else
{}
}
break;
}
var seq__20085_20110 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__20086_20111 = null;var count__20087_20112 = (0);var i__20088_20113 = (0);while(true){
if((i__20088_20113 < count__20087_20112))
{var n_20114 = cljs.core._nth.call(null,chunk__20086_20111,i__20088_20113);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20114;
goog.events.fireListeners(n_20114,evt.type,false,evt);
}
{
var G__20115 = seq__20085_20110;
var G__20116 = chunk__20086_20111;
var G__20117 = count__20087_20112;
var G__20118 = (i__20088_20113 + (1));
seq__20085_20110 = G__20115;
chunk__20086_20111 = G__20116;
count__20087_20112 = G__20117;
i__20088_20113 = G__20118;
continue;
}
} else
{var temp__4126__auto___20119 = cljs.core.seq.call(null,seq__20085_20110);if(temp__4126__auto___20119)
{var seq__20085_20120__$1 = temp__4126__auto___20119;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20085_20120__$1))
{var c__4408__auto___20121 = cljs.core.chunk_first.call(null,seq__20085_20120__$1);{
var G__20122 = cljs.core.chunk_rest.call(null,seq__20085_20120__$1);
var G__20123 = c__4408__auto___20121;
var G__20124 = cljs.core.count.call(null,c__4408__auto___20121);
var G__20125 = (0);
seq__20085_20110 = G__20122;
chunk__20086_20111 = G__20123;
count__20087_20112 = G__20124;
i__20088_20113 = G__20125;
continue;
}
} else
{var n_20126 = cljs.core.first.call(null,seq__20085_20120__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20126;
goog.events.fireListeners(n_20126,evt.type,false,evt);
}
{
var G__20127 = cljs.core.next.call(null,seq__20085_20120__$1);
var G__20128 = null;
var G__20129 = (0);
var G__20130 = (0);
seq__20085_20110 = G__20127;
chunk__20086_20111 = G__20128;
count__20087_20112 = G__20129;
i__20088_20113 = G__20130;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__20137_20143 = cljs.core.seq.call(null,evt_map);var chunk__20138_20144 = null;var count__20139_20145 = (0);var i__20140_20146 = (0);while(true){
if((i__20140_20146 < count__20139_20145))
{var vec__20141_20147 = cljs.core._nth.call(null,chunk__20138_20144,i__20140_20146);var k_20148 = cljs.core.nth.call(null,vec__20141_20147,(0),null);var v_20149 = cljs.core.nth.call(null,vec__20141_20147,(1),null);(evt[k_20148] = v_20149);
{
var G__20150 = seq__20137_20143;
var G__20151 = chunk__20138_20144;
var G__20152 = count__20139_20145;
var G__20153 = (i__20140_20146 + (1));
seq__20137_20143 = G__20150;
chunk__20138_20144 = G__20151;
count__20139_20145 = G__20152;
i__20140_20146 = G__20153;
continue;
}
} else
{var temp__4126__auto___20154 = cljs.core.seq.call(null,seq__20137_20143);if(temp__4126__auto___20154)
{var seq__20137_20155__$1 = temp__4126__auto___20154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20137_20155__$1))
{var c__4408__auto___20156 = cljs.core.chunk_first.call(null,seq__20137_20155__$1);{
var G__20157 = cljs.core.chunk_rest.call(null,seq__20137_20155__$1);
var G__20158 = c__4408__auto___20156;
var G__20159 = cljs.core.count.call(null,c__4408__auto___20156);
var G__20160 = (0);
seq__20137_20143 = G__20157;
chunk__20138_20144 = G__20158;
count__20139_20145 = G__20159;
i__20140_20146 = G__20160;
continue;
}
} else
{var vec__20142_20161 = cljs.core.first.call(null,seq__20137_20155__$1);var k_20162 = cljs.core.nth.call(null,vec__20142_20161,(0),null);var v_20163 = cljs.core.nth.call(null,vec__20142_20161,(1),null);(evt[k_20162] = v_20163);
{
var G__20164 = cljs.core.next.call(null,seq__20137_20155__$1);
var G__20165 = null;
var G__20166 = (0);
var G__20167 = (0);
seq__20137_20143 = G__20164;
chunk__20138_20144 = G__20165;
count__20139_20145 = G__20166;
i__20140_20146 = G__20167;
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
return (function (p1__20168_SHARP_){return goog.events.getListeners(p1__20168_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
