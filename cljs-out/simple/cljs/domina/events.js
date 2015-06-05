// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj20011 = {};return obj20011;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t20015 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t20015 = (function (evt,f,create_listener_function,meta20016){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta20016 = meta20016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t20015.cljs$lang$type = true;
domina.events.t20015.cljs$lang$ctorStr = "domina.events/t20015";
domina.events.t20015.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t20015");
});
domina.events.t20015.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t20015.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t20015.prototype.domina$events$Event$ = true;
domina.events.t20015.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t20015.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t20015.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t20015.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t20015.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t20015.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t20015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20017){var self__ = this;
var _20017__$1 = this;return self__.meta20016;
});
domina.events.t20015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20017,meta20016__$1){var self__ = this;
var _20017__$1 = this;return (new domina.events.t20015(self__.evt,self__.f,self__.create_listener_function,meta20016__$1));
});
domina.events.__GT_t20015 = (function __GT_t20015(evt__$1,f__$1,create_listener_function__$1,meta20016){return (new domina.events.t20015(evt__$1,f__$1,create_listener_function__$1,meta20016));
});
}
return (new domina.events.t20015(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__20022(s__20023){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__20023__$1 = s__20023;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20023__$1);if(temp__4126__auto__)
{var s__20023__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20023__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20023__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20025 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20024 = (0);while(true){
if((i__20024 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__20024);cljs.core.chunk_append.call(null,b__20025,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__20026 = (i__20024 + (1));
i__20024 = G__20026;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20025),iter__20022.call(null,cljs.core.chunk_rest.call(null,s__20023__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20025),null);
}
} else
{var node = cljs.core.first.call(null,s__20023__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__20022.call(null,cljs.core.rest.call(null,s__20023__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__20035 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20036 = null;var count__20037 = (0);var i__20038 = (0);while(true){
if((i__20038 < count__20037))
{var node = cljs.core._nth.call(null,chunk__20036,i__20038);goog.events.removeAll(node);
{
var G__20043 = seq__20035;
var G__20044 = chunk__20036;
var G__20045 = count__20037;
var G__20046 = (i__20038 + (1));
seq__20035 = G__20043;
chunk__20036 = G__20044;
count__20037 = G__20045;
i__20038 = G__20046;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20035);if(temp__4126__auto__)
{var seq__20035__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20035__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20035__$1);{
var G__20047 = cljs.core.chunk_rest.call(null,seq__20035__$1);
var G__20048 = c__4408__auto__;
var G__20049 = cljs.core.count.call(null,c__4408__auto__);
var G__20050 = (0);
seq__20035 = G__20047;
chunk__20036 = G__20048;
count__20037 = G__20049;
i__20038 = G__20050;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__20035__$1);goog.events.removeAll(node);
{
var G__20051 = cljs.core.next.call(null,seq__20035__$1);
var G__20052 = null;
var G__20053 = (0);
var G__20054 = (0);
seq__20035 = G__20051;
chunk__20036 = G__20052;
count__20037 = G__20053;
i__20038 = G__20054;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__20039 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20040 = null;var count__20041 = (0);var i__20042 = (0);while(true){
if((i__20042 < count__20041))
{var node = cljs.core._nth.call(null,chunk__20040,i__20042);goog.events.removeAll(node,type__$1);
{
var G__20055 = seq__20039;
var G__20056 = chunk__20040;
var G__20057 = count__20041;
var G__20058 = (i__20042 + (1));
seq__20039 = G__20055;
chunk__20040 = G__20056;
count__20041 = G__20057;
i__20042 = G__20058;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20039);if(temp__4126__auto__)
{var seq__20039__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20039__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20039__$1);{
var G__20059 = cljs.core.chunk_rest.call(null,seq__20039__$1);
var G__20060 = c__4408__auto__;
var G__20061 = cljs.core.count.call(null,c__4408__auto__);
var G__20062 = (0);
seq__20039 = G__20059;
chunk__20040 = G__20060;
count__20041 = G__20061;
i__20042 = G__20062;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__20039__$1);goog.events.removeAll(node,type__$1);
{
var G__20063 = cljs.core.next.call(null,seq__20039__$1);
var G__20064 = null;
var G__20065 = (0);
var G__20066 = (0);
seq__20039 = G__20063;
chunk__20040 = G__20064;
count__20041 = G__20065;
i__20042 = G__20066;
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
var G__20067 = parent;
var G__20068 = cljs.core.cons.call(null,parent,so_far);
n = G__20067;
so_far = G__20068;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__20077_20085 = cljs.core.seq.call(null,ancestors);var chunk__20078_20086 = null;var count__20079_20087 = (0);var i__20080_20088 = (0);while(true){
if((i__20080_20088 < count__20079_20087))
{var n_20089 = cljs.core._nth.call(null,chunk__20078_20086,i__20080_20088);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20089;
goog.events.fireListeners(n_20089,evt.type,true,evt);
}
{
var G__20090 = seq__20077_20085;
var G__20091 = chunk__20078_20086;
var G__20092 = count__20079_20087;
var G__20093 = (i__20080_20088 + (1));
seq__20077_20085 = G__20090;
chunk__20078_20086 = G__20091;
count__20079_20087 = G__20092;
i__20080_20088 = G__20093;
continue;
}
} else
{var temp__4126__auto___20094 = cljs.core.seq.call(null,seq__20077_20085);if(temp__4126__auto___20094)
{var seq__20077_20095__$1 = temp__4126__auto___20094;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20077_20095__$1))
{var c__4408__auto___20096 = cljs.core.chunk_first.call(null,seq__20077_20095__$1);{
var G__20097 = cljs.core.chunk_rest.call(null,seq__20077_20095__$1);
var G__20098 = c__4408__auto___20096;
var G__20099 = cljs.core.count.call(null,c__4408__auto___20096);
var G__20100 = (0);
seq__20077_20085 = G__20097;
chunk__20078_20086 = G__20098;
count__20079_20087 = G__20099;
i__20080_20088 = G__20100;
continue;
}
} else
{var n_20101 = cljs.core.first.call(null,seq__20077_20095__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20101;
goog.events.fireListeners(n_20101,evt.type,true,evt);
}
{
var G__20102 = cljs.core.next.call(null,seq__20077_20095__$1);
var G__20103 = null;
var G__20104 = (0);
var G__20105 = (0);
seq__20077_20085 = G__20102;
chunk__20078_20086 = G__20103;
count__20079_20087 = G__20104;
i__20080_20088 = G__20105;
continue;
}
}
} else
{}
}
break;
}
var seq__20081_20106 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__20082_20107 = null;var count__20083_20108 = (0);var i__20084_20109 = (0);while(true){
if((i__20084_20109 < count__20083_20108))
{var n_20110 = cljs.core._nth.call(null,chunk__20082_20107,i__20084_20109);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20110;
goog.events.fireListeners(n_20110,evt.type,false,evt);
}
{
var G__20111 = seq__20081_20106;
var G__20112 = chunk__20082_20107;
var G__20113 = count__20083_20108;
var G__20114 = (i__20084_20109 + (1));
seq__20081_20106 = G__20111;
chunk__20082_20107 = G__20112;
count__20083_20108 = G__20113;
i__20084_20109 = G__20114;
continue;
}
} else
{var temp__4126__auto___20115 = cljs.core.seq.call(null,seq__20081_20106);if(temp__4126__auto___20115)
{var seq__20081_20116__$1 = temp__4126__auto___20115;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20081_20116__$1))
{var c__4408__auto___20117 = cljs.core.chunk_first.call(null,seq__20081_20116__$1);{
var G__20118 = cljs.core.chunk_rest.call(null,seq__20081_20116__$1);
var G__20119 = c__4408__auto___20117;
var G__20120 = cljs.core.count.call(null,c__4408__auto___20117);
var G__20121 = (0);
seq__20081_20106 = G__20118;
chunk__20082_20107 = G__20119;
count__20083_20108 = G__20120;
i__20084_20109 = G__20121;
continue;
}
} else
{var n_20122 = cljs.core.first.call(null,seq__20081_20116__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20122;
goog.events.fireListeners(n_20122,evt.type,false,evt);
}
{
var G__20123 = cljs.core.next.call(null,seq__20081_20116__$1);
var G__20124 = null;
var G__20125 = (0);
var G__20126 = (0);
seq__20081_20106 = G__20123;
chunk__20082_20107 = G__20124;
count__20083_20108 = G__20125;
i__20084_20109 = G__20126;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__20133_20139 = cljs.core.seq.call(null,evt_map);var chunk__20134_20140 = null;var count__20135_20141 = (0);var i__20136_20142 = (0);while(true){
if((i__20136_20142 < count__20135_20141))
{var vec__20137_20143 = cljs.core._nth.call(null,chunk__20134_20140,i__20136_20142);var k_20144 = cljs.core.nth.call(null,vec__20137_20143,(0),null);var v_20145 = cljs.core.nth.call(null,vec__20137_20143,(1),null);(evt[k_20144] = v_20145);
{
var G__20146 = seq__20133_20139;
var G__20147 = chunk__20134_20140;
var G__20148 = count__20135_20141;
var G__20149 = (i__20136_20142 + (1));
seq__20133_20139 = G__20146;
chunk__20134_20140 = G__20147;
count__20135_20141 = G__20148;
i__20136_20142 = G__20149;
continue;
}
} else
{var temp__4126__auto___20150 = cljs.core.seq.call(null,seq__20133_20139);if(temp__4126__auto___20150)
{var seq__20133_20151__$1 = temp__4126__auto___20150;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20133_20151__$1))
{var c__4408__auto___20152 = cljs.core.chunk_first.call(null,seq__20133_20151__$1);{
var G__20153 = cljs.core.chunk_rest.call(null,seq__20133_20151__$1);
var G__20154 = c__4408__auto___20152;
var G__20155 = cljs.core.count.call(null,c__4408__auto___20152);
var G__20156 = (0);
seq__20133_20139 = G__20153;
chunk__20134_20140 = G__20154;
count__20135_20141 = G__20155;
i__20136_20142 = G__20156;
continue;
}
} else
{var vec__20138_20157 = cljs.core.first.call(null,seq__20133_20151__$1);var k_20158 = cljs.core.nth.call(null,vec__20138_20157,(0),null);var v_20159 = cljs.core.nth.call(null,vec__20138_20157,(1),null);(evt[k_20158] = v_20159);
{
var G__20160 = cljs.core.next.call(null,seq__20133_20151__$1);
var G__20161 = null;
var G__20162 = (0);
var G__20163 = (0);
seq__20133_20139 = G__20160;
chunk__20134_20140 = G__20161;
count__20135_20141 = G__20162;
i__20136_20142 = G__20163;
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
return (function (p1__20164_SHARP_){return goog.events.getListeners(p1__20164_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
