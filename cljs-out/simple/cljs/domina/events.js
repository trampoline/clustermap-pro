// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj19871 = {};return obj19871;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t19875 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19875 = (function (evt,f,create_listener_function,meta19876){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19876 = meta19876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19875.cljs$lang$type = true;
domina.events.t19875.cljs$lang$ctorStr = "domina.events/t19875";
domina.events.t19875.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t19875");
});
domina.events.t19875.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t19875.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t19875.prototype.domina$events$Event$ = true;
domina.events.t19875.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19875.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19875.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19875.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19875.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19875.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19877){var self__ = this;
var _19877__$1 = this;return self__.meta19876;
});
domina.events.t19875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19877,meta19876__$1){var self__ = this;
var _19877__$1 = this;return (new domina.events.t19875(self__.evt,self__.f,self__.create_listener_function,meta19876__$1));
});
domina.events.__GT_t19875 = (function __GT_t19875(evt__$1,f__$1,create_listener_function__$1,meta19876){return (new domina.events.t19875(evt__$1,f__$1,create_listener_function__$1,meta19876));
});
}
return (new domina.events.t19875(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__19882(s__19883){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__19883__$1 = s__19883;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19883__$1);if(temp__4126__auto__)
{var s__19883__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19883__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19883__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19885 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19884 = (0);while(true){
if((i__19884 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__19884);cljs.core.chunk_append.call(null,b__19885,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__19886 = (i__19884 + (1));
i__19884 = G__19886;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19885),iter__19882.call(null,cljs.core.chunk_rest.call(null,s__19883__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19885),null);
}
} else
{var node = cljs.core.first.call(null,s__19883__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19882.call(null,cljs.core.rest.call(null,s__19883__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__19895 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19896 = null;var count__19897 = (0);var i__19898 = (0);while(true){
if((i__19898 < count__19897))
{var node = cljs.core._nth.call(null,chunk__19896,i__19898);goog.events.removeAll(node);
{
var G__19903 = seq__19895;
var G__19904 = chunk__19896;
var G__19905 = count__19897;
var G__19906 = (i__19898 + (1));
seq__19895 = G__19903;
chunk__19896 = G__19904;
count__19897 = G__19905;
i__19898 = G__19906;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19895);if(temp__4126__auto__)
{var seq__19895__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19895__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19895__$1);{
var G__19907 = cljs.core.chunk_rest.call(null,seq__19895__$1);
var G__19908 = c__4408__auto__;
var G__19909 = cljs.core.count.call(null,c__4408__auto__);
var G__19910 = (0);
seq__19895 = G__19907;
chunk__19896 = G__19908;
count__19897 = G__19909;
i__19898 = G__19910;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19895__$1);goog.events.removeAll(node);
{
var G__19911 = cljs.core.next.call(null,seq__19895__$1);
var G__19912 = null;
var G__19913 = (0);
var G__19914 = (0);
seq__19895 = G__19911;
chunk__19896 = G__19912;
count__19897 = G__19913;
i__19898 = G__19914;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__19899 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19900 = null;var count__19901 = (0);var i__19902 = (0);while(true){
if((i__19902 < count__19901))
{var node = cljs.core._nth.call(null,chunk__19900,i__19902);goog.events.removeAll(node,type__$1);
{
var G__19915 = seq__19899;
var G__19916 = chunk__19900;
var G__19917 = count__19901;
var G__19918 = (i__19902 + (1));
seq__19899 = G__19915;
chunk__19900 = G__19916;
count__19901 = G__19917;
i__19902 = G__19918;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19899);if(temp__4126__auto__)
{var seq__19899__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19899__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19899__$1);{
var G__19919 = cljs.core.chunk_rest.call(null,seq__19899__$1);
var G__19920 = c__4408__auto__;
var G__19921 = cljs.core.count.call(null,c__4408__auto__);
var G__19922 = (0);
seq__19899 = G__19919;
chunk__19900 = G__19920;
count__19901 = G__19921;
i__19902 = G__19922;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19899__$1);goog.events.removeAll(node,type__$1);
{
var G__19923 = cljs.core.next.call(null,seq__19899__$1);
var G__19924 = null;
var G__19925 = (0);
var G__19926 = (0);
seq__19899 = G__19923;
chunk__19900 = G__19924;
count__19901 = G__19925;
i__19902 = G__19926;
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
var G__19927 = parent;
var G__19928 = cljs.core.cons.call(null,parent,so_far);
n = G__19927;
so_far = G__19928;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__19937_19945 = cljs.core.seq.call(null,ancestors);var chunk__19938_19946 = null;var count__19939_19947 = (0);var i__19940_19948 = (0);while(true){
if((i__19940_19948 < count__19939_19947))
{var n_19949 = cljs.core._nth.call(null,chunk__19938_19946,i__19940_19948);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19949;
goog.events.fireListeners(n_19949,evt.type,true,evt);
}
{
var G__19950 = seq__19937_19945;
var G__19951 = chunk__19938_19946;
var G__19952 = count__19939_19947;
var G__19953 = (i__19940_19948 + (1));
seq__19937_19945 = G__19950;
chunk__19938_19946 = G__19951;
count__19939_19947 = G__19952;
i__19940_19948 = G__19953;
continue;
}
} else
{var temp__4126__auto___19954 = cljs.core.seq.call(null,seq__19937_19945);if(temp__4126__auto___19954)
{var seq__19937_19955__$1 = temp__4126__auto___19954;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19937_19955__$1))
{var c__4408__auto___19956 = cljs.core.chunk_first.call(null,seq__19937_19955__$1);{
var G__19957 = cljs.core.chunk_rest.call(null,seq__19937_19955__$1);
var G__19958 = c__4408__auto___19956;
var G__19959 = cljs.core.count.call(null,c__4408__auto___19956);
var G__19960 = (0);
seq__19937_19945 = G__19957;
chunk__19938_19946 = G__19958;
count__19939_19947 = G__19959;
i__19940_19948 = G__19960;
continue;
}
} else
{var n_19961 = cljs.core.first.call(null,seq__19937_19955__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19961;
goog.events.fireListeners(n_19961,evt.type,true,evt);
}
{
var G__19962 = cljs.core.next.call(null,seq__19937_19955__$1);
var G__19963 = null;
var G__19964 = (0);
var G__19965 = (0);
seq__19937_19945 = G__19962;
chunk__19938_19946 = G__19963;
count__19939_19947 = G__19964;
i__19940_19948 = G__19965;
continue;
}
}
} else
{}
}
break;
}
var seq__19941_19966 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__19942_19967 = null;var count__19943_19968 = (0);var i__19944_19969 = (0);while(true){
if((i__19944_19969 < count__19943_19968))
{var n_19970 = cljs.core._nth.call(null,chunk__19942_19967,i__19944_19969);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19970;
goog.events.fireListeners(n_19970,evt.type,false,evt);
}
{
var G__19971 = seq__19941_19966;
var G__19972 = chunk__19942_19967;
var G__19973 = count__19943_19968;
var G__19974 = (i__19944_19969 + (1));
seq__19941_19966 = G__19971;
chunk__19942_19967 = G__19972;
count__19943_19968 = G__19973;
i__19944_19969 = G__19974;
continue;
}
} else
{var temp__4126__auto___19975 = cljs.core.seq.call(null,seq__19941_19966);if(temp__4126__auto___19975)
{var seq__19941_19976__$1 = temp__4126__auto___19975;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19941_19976__$1))
{var c__4408__auto___19977 = cljs.core.chunk_first.call(null,seq__19941_19976__$1);{
var G__19978 = cljs.core.chunk_rest.call(null,seq__19941_19976__$1);
var G__19979 = c__4408__auto___19977;
var G__19980 = cljs.core.count.call(null,c__4408__auto___19977);
var G__19981 = (0);
seq__19941_19966 = G__19978;
chunk__19942_19967 = G__19979;
count__19943_19968 = G__19980;
i__19944_19969 = G__19981;
continue;
}
} else
{var n_19982 = cljs.core.first.call(null,seq__19941_19976__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19982;
goog.events.fireListeners(n_19982,evt.type,false,evt);
}
{
var G__19983 = cljs.core.next.call(null,seq__19941_19976__$1);
var G__19984 = null;
var G__19985 = (0);
var G__19986 = (0);
seq__19941_19966 = G__19983;
chunk__19942_19967 = G__19984;
count__19943_19968 = G__19985;
i__19944_19969 = G__19986;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19993_19999 = cljs.core.seq.call(null,evt_map);var chunk__19994_20000 = null;var count__19995_20001 = (0);var i__19996_20002 = (0);while(true){
if((i__19996_20002 < count__19995_20001))
{var vec__19997_20003 = cljs.core._nth.call(null,chunk__19994_20000,i__19996_20002);var k_20004 = cljs.core.nth.call(null,vec__19997_20003,(0),null);var v_20005 = cljs.core.nth.call(null,vec__19997_20003,(1),null);(evt[k_20004] = v_20005);
{
var G__20006 = seq__19993_19999;
var G__20007 = chunk__19994_20000;
var G__20008 = count__19995_20001;
var G__20009 = (i__19996_20002 + (1));
seq__19993_19999 = G__20006;
chunk__19994_20000 = G__20007;
count__19995_20001 = G__20008;
i__19996_20002 = G__20009;
continue;
}
} else
{var temp__4126__auto___20010 = cljs.core.seq.call(null,seq__19993_19999);if(temp__4126__auto___20010)
{var seq__19993_20011__$1 = temp__4126__auto___20010;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19993_20011__$1))
{var c__4408__auto___20012 = cljs.core.chunk_first.call(null,seq__19993_20011__$1);{
var G__20013 = cljs.core.chunk_rest.call(null,seq__19993_20011__$1);
var G__20014 = c__4408__auto___20012;
var G__20015 = cljs.core.count.call(null,c__4408__auto___20012);
var G__20016 = (0);
seq__19993_19999 = G__20013;
chunk__19994_20000 = G__20014;
count__19995_20001 = G__20015;
i__19996_20002 = G__20016;
continue;
}
} else
{var vec__19998_20017 = cljs.core.first.call(null,seq__19993_20011__$1);var k_20018 = cljs.core.nth.call(null,vec__19998_20017,(0),null);var v_20019 = cljs.core.nth.call(null,vec__19998_20017,(1),null);(evt[k_20018] = v_20019);
{
var G__20020 = cljs.core.next.call(null,seq__19993_20011__$1);
var G__20021 = null;
var G__20022 = (0);
var G__20023 = (0);
seq__19993_19999 = G__20020;
chunk__19994_20000 = G__20021;
count__19995_20001 = G__20022;
i__19996_20002 = G__20023;
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
return (function (p1__20024_SHARP_){return goog.events.getListeners(p1__20024_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
