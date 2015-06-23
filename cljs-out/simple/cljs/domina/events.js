// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj21033 = {};return obj21033;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t21037 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t21037 = (function (evt,f,create_listener_function,meta21038){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta21038 = meta21038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t21037.cljs$lang$type = true;
domina.events.t21037.cljs$lang$ctorStr = "domina.events/t21037";
domina.events.t21037.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t21037");
});
domina.events.t21037.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t21037.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t21037.prototype.domina$events$Event$ = true;
domina.events.t21037.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t21037.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t21037.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t21037.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t21037.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t21037.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t21037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21039){var self__ = this;
var _21039__$1 = this;return self__.meta21038;
});
domina.events.t21037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21039,meta21038__$1){var self__ = this;
var _21039__$1 = this;return (new domina.events.t21037(self__.evt,self__.f,self__.create_listener_function,meta21038__$1));
});
domina.events.__GT_t21037 = (function __GT_t21037(evt__$1,f__$1,create_listener_function__$1,meta21038){return (new domina.events.t21037(evt__$1,f__$1,create_listener_function__$1,meta21038));
});
}
return (new domina.events.t21037(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__21044(s__21045){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__21045__$1 = s__21045;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21045__$1);if(temp__4126__auto__)
{var s__21045__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21045__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21045__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21047 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21046 = (0);while(true){
if((i__21046 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__21046);cljs.core.chunk_append.call(null,b__21047,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__21048 = (i__21046 + (1));
i__21046 = G__21048;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21047),iter__21044.call(null,cljs.core.chunk_rest.call(null,s__21045__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21047),null);
}
} else
{var node = cljs.core.first.call(null,s__21045__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__21044.call(null,cljs.core.rest.call(null,s__21045__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__21057 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21058 = null;var count__21059 = (0);var i__21060 = (0);while(true){
if((i__21060 < count__21059))
{var node = cljs.core._nth.call(null,chunk__21058,i__21060);goog.events.removeAll(node);
{
var G__21065 = seq__21057;
var G__21066 = chunk__21058;
var G__21067 = count__21059;
var G__21068 = (i__21060 + (1));
seq__21057 = G__21065;
chunk__21058 = G__21066;
count__21059 = G__21067;
i__21060 = G__21068;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21057);if(temp__4126__auto__)
{var seq__21057__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21057__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21057__$1);{
var G__21069 = cljs.core.chunk_rest.call(null,seq__21057__$1);
var G__21070 = c__4408__auto__;
var G__21071 = cljs.core.count.call(null,c__4408__auto__);
var G__21072 = (0);
seq__21057 = G__21069;
chunk__21058 = G__21070;
count__21059 = G__21071;
i__21060 = G__21072;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21057__$1);goog.events.removeAll(node);
{
var G__21073 = cljs.core.next.call(null,seq__21057__$1);
var G__21074 = null;
var G__21075 = (0);
var G__21076 = (0);
seq__21057 = G__21073;
chunk__21058 = G__21074;
count__21059 = G__21075;
i__21060 = G__21076;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__21061 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21062 = null;var count__21063 = (0);var i__21064 = (0);while(true){
if((i__21064 < count__21063))
{var node = cljs.core._nth.call(null,chunk__21062,i__21064);goog.events.removeAll(node,type__$1);
{
var G__21077 = seq__21061;
var G__21078 = chunk__21062;
var G__21079 = count__21063;
var G__21080 = (i__21064 + (1));
seq__21061 = G__21077;
chunk__21062 = G__21078;
count__21063 = G__21079;
i__21064 = G__21080;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21061);if(temp__4126__auto__)
{var seq__21061__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21061__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21061__$1);{
var G__21081 = cljs.core.chunk_rest.call(null,seq__21061__$1);
var G__21082 = c__4408__auto__;
var G__21083 = cljs.core.count.call(null,c__4408__auto__);
var G__21084 = (0);
seq__21061 = G__21081;
chunk__21062 = G__21082;
count__21063 = G__21083;
i__21064 = G__21084;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21061__$1);goog.events.removeAll(node,type__$1);
{
var G__21085 = cljs.core.next.call(null,seq__21061__$1);
var G__21086 = null;
var G__21087 = (0);
var G__21088 = (0);
seq__21061 = G__21085;
chunk__21062 = G__21086;
count__21063 = G__21087;
i__21064 = G__21088;
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
var G__21089 = parent;
var G__21090 = cljs.core.cons.call(null,parent,so_far);
n = G__21089;
so_far = G__21090;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__21099_21107 = cljs.core.seq.call(null,ancestors);var chunk__21100_21108 = null;var count__21101_21109 = (0);var i__21102_21110 = (0);while(true){
if((i__21102_21110 < count__21101_21109))
{var n_21111 = cljs.core._nth.call(null,chunk__21100_21108,i__21102_21110);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21111;
goog.events.fireListeners(n_21111,evt.type,true,evt);
}
{
var G__21112 = seq__21099_21107;
var G__21113 = chunk__21100_21108;
var G__21114 = count__21101_21109;
var G__21115 = (i__21102_21110 + (1));
seq__21099_21107 = G__21112;
chunk__21100_21108 = G__21113;
count__21101_21109 = G__21114;
i__21102_21110 = G__21115;
continue;
}
} else
{var temp__4126__auto___21116 = cljs.core.seq.call(null,seq__21099_21107);if(temp__4126__auto___21116)
{var seq__21099_21117__$1 = temp__4126__auto___21116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21099_21117__$1))
{var c__4408__auto___21118 = cljs.core.chunk_first.call(null,seq__21099_21117__$1);{
var G__21119 = cljs.core.chunk_rest.call(null,seq__21099_21117__$1);
var G__21120 = c__4408__auto___21118;
var G__21121 = cljs.core.count.call(null,c__4408__auto___21118);
var G__21122 = (0);
seq__21099_21107 = G__21119;
chunk__21100_21108 = G__21120;
count__21101_21109 = G__21121;
i__21102_21110 = G__21122;
continue;
}
} else
{var n_21123 = cljs.core.first.call(null,seq__21099_21117__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21123;
goog.events.fireListeners(n_21123,evt.type,true,evt);
}
{
var G__21124 = cljs.core.next.call(null,seq__21099_21117__$1);
var G__21125 = null;
var G__21126 = (0);
var G__21127 = (0);
seq__21099_21107 = G__21124;
chunk__21100_21108 = G__21125;
count__21101_21109 = G__21126;
i__21102_21110 = G__21127;
continue;
}
}
} else
{}
}
break;
}
var seq__21103_21128 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__21104_21129 = null;var count__21105_21130 = (0);var i__21106_21131 = (0);while(true){
if((i__21106_21131 < count__21105_21130))
{var n_21132 = cljs.core._nth.call(null,chunk__21104_21129,i__21106_21131);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21132;
goog.events.fireListeners(n_21132,evt.type,false,evt);
}
{
var G__21133 = seq__21103_21128;
var G__21134 = chunk__21104_21129;
var G__21135 = count__21105_21130;
var G__21136 = (i__21106_21131 + (1));
seq__21103_21128 = G__21133;
chunk__21104_21129 = G__21134;
count__21105_21130 = G__21135;
i__21106_21131 = G__21136;
continue;
}
} else
{var temp__4126__auto___21137 = cljs.core.seq.call(null,seq__21103_21128);if(temp__4126__auto___21137)
{var seq__21103_21138__$1 = temp__4126__auto___21137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21103_21138__$1))
{var c__4408__auto___21139 = cljs.core.chunk_first.call(null,seq__21103_21138__$1);{
var G__21140 = cljs.core.chunk_rest.call(null,seq__21103_21138__$1);
var G__21141 = c__4408__auto___21139;
var G__21142 = cljs.core.count.call(null,c__4408__auto___21139);
var G__21143 = (0);
seq__21103_21128 = G__21140;
chunk__21104_21129 = G__21141;
count__21105_21130 = G__21142;
i__21106_21131 = G__21143;
continue;
}
} else
{var n_21144 = cljs.core.first.call(null,seq__21103_21138__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21144;
goog.events.fireListeners(n_21144,evt.type,false,evt);
}
{
var G__21145 = cljs.core.next.call(null,seq__21103_21138__$1);
var G__21146 = null;
var G__21147 = (0);
var G__21148 = (0);
seq__21103_21128 = G__21145;
chunk__21104_21129 = G__21146;
count__21105_21130 = G__21147;
i__21106_21131 = G__21148;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__21155_21161 = cljs.core.seq.call(null,evt_map);var chunk__21156_21162 = null;var count__21157_21163 = (0);var i__21158_21164 = (0);while(true){
if((i__21158_21164 < count__21157_21163))
{var vec__21159_21165 = cljs.core._nth.call(null,chunk__21156_21162,i__21158_21164);var k_21166 = cljs.core.nth.call(null,vec__21159_21165,(0),null);var v_21167 = cljs.core.nth.call(null,vec__21159_21165,(1),null);(evt[k_21166] = v_21167);
{
var G__21168 = seq__21155_21161;
var G__21169 = chunk__21156_21162;
var G__21170 = count__21157_21163;
var G__21171 = (i__21158_21164 + (1));
seq__21155_21161 = G__21168;
chunk__21156_21162 = G__21169;
count__21157_21163 = G__21170;
i__21158_21164 = G__21171;
continue;
}
} else
{var temp__4126__auto___21172 = cljs.core.seq.call(null,seq__21155_21161);if(temp__4126__auto___21172)
{var seq__21155_21173__$1 = temp__4126__auto___21172;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21155_21173__$1))
{var c__4408__auto___21174 = cljs.core.chunk_first.call(null,seq__21155_21173__$1);{
var G__21175 = cljs.core.chunk_rest.call(null,seq__21155_21173__$1);
var G__21176 = c__4408__auto___21174;
var G__21177 = cljs.core.count.call(null,c__4408__auto___21174);
var G__21178 = (0);
seq__21155_21161 = G__21175;
chunk__21156_21162 = G__21176;
count__21157_21163 = G__21177;
i__21158_21164 = G__21178;
continue;
}
} else
{var vec__21160_21179 = cljs.core.first.call(null,seq__21155_21173__$1);var k_21180 = cljs.core.nth.call(null,vec__21160_21179,(0),null);var v_21181 = cljs.core.nth.call(null,vec__21160_21179,(1),null);(evt[k_21180] = v_21181);
{
var G__21182 = cljs.core.next.call(null,seq__21155_21173__$1);
var G__21183 = null;
var G__21184 = (0);
var G__21185 = (0);
seq__21155_21161 = G__21182;
chunk__21156_21162 = G__21183;
count__21157_21163 = G__21184;
i__21158_21164 = G__21185;
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
return (function (p1__21186_SHARP_){return goog.events.getListeners(p1__21186_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
