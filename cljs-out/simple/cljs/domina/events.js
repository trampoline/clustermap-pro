// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj21138 = {};return obj21138;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t21142 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t21142 = (function (evt,f,create_listener_function,meta21143){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta21143 = meta21143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t21142.cljs$lang$type = true;
domina.events.t21142.cljs$lang$ctorStr = "domina.events/t21142";
domina.events.t21142.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t21142");
});
domina.events.t21142.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t21142.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t21142.prototype.domina$events$Event$ = true;
domina.events.t21142.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t21142.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t21142.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t21142.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t21142.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t21142.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t21142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21144){var self__ = this;
var _21144__$1 = this;return self__.meta21143;
});
domina.events.t21142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21144,meta21143__$1){var self__ = this;
var _21144__$1 = this;return (new domina.events.t21142(self__.evt,self__.f,self__.create_listener_function,meta21143__$1));
});
domina.events.__GT_t21142 = (function __GT_t21142(evt__$1,f__$1,create_listener_function__$1,meta21143){return (new domina.events.t21142(evt__$1,f__$1,create_listener_function__$1,meta21143));
});
}
return (new domina.events.t21142(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__21149(s__21150){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__21150__$1 = s__21150;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21150__$1);if(temp__4126__auto__)
{var s__21150__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21150__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21150__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21152 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21151 = (0);while(true){
if((i__21151 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__21151);cljs.core.chunk_append.call(null,b__21152,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__21153 = (i__21151 + (1));
i__21151 = G__21153;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21152),iter__21149.call(null,cljs.core.chunk_rest.call(null,s__21150__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21152),null);
}
} else
{var node = cljs.core.first.call(null,s__21150__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__21149.call(null,cljs.core.rest.call(null,s__21150__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__21162 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21163 = null;var count__21164 = (0);var i__21165 = (0);while(true){
if((i__21165 < count__21164))
{var node = cljs.core._nth.call(null,chunk__21163,i__21165);goog.events.removeAll(node);
{
var G__21170 = seq__21162;
var G__21171 = chunk__21163;
var G__21172 = count__21164;
var G__21173 = (i__21165 + (1));
seq__21162 = G__21170;
chunk__21163 = G__21171;
count__21164 = G__21172;
i__21165 = G__21173;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21162);if(temp__4126__auto__)
{var seq__21162__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21162__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21162__$1);{
var G__21174 = cljs.core.chunk_rest.call(null,seq__21162__$1);
var G__21175 = c__4408__auto__;
var G__21176 = cljs.core.count.call(null,c__4408__auto__);
var G__21177 = (0);
seq__21162 = G__21174;
chunk__21163 = G__21175;
count__21164 = G__21176;
i__21165 = G__21177;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21162__$1);goog.events.removeAll(node);
{
var G__21178 = cljs.core.next.call(null,seq__21162__$1);
var G__21179 = null;
var G__21180 = (0);
var G__21181 = (0);
seq__21162 = G__21178;
chunk__21163 = G__21179;
count__21164 = G__21180;
i__21165 = G__21181;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__21166 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21167 = null;var count__21168 = (0);var i__21169 = (0);while(true){
if((i__21169 < count__21168))
{var node = cljs.core._nth.call(null,chunk__21167,i__21169);goog.events.removeAll(node,type__$1);
{
var G__21182 = seq__21166;
var G__21183 = chunk__21167;
var G__21184 = count__21168;
var G__21185 = (i__21169 + (1));
seq__21166 = G__21182;
chunk__21167 = G__21183;
count__21168 = G__21184;
i__21169 = G__21185;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21166);if(temp__4126__auto__)
{var seq__21166__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21166__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21166__$1);{
var G__21186 = cljs.core.chunk_rest.call(null,seq__21166__$1);
var G__21187 = c__4408__auto__;
var G__21188 = cljs.core.count.call(null,c__4408__auto__);
var G__21189 = (0);
seq__21166 = G__21186;
chunk__21167 = G__21187;
count__21168 = G__21188;
i__21169 = G__21189;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21166__$1);goog.events.removeAll(node,type__$1);
{
var G__21190 = cljs.core.next.call(null,seq__21166__$1);
var G__21191 = null;
var G__21192 = (0);
var G__21193 = (0);
seq__21166 = G__21190;
chunk__21167 = G__21191;
count__21168 = G__21192;
i__21169 = G__21193;
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
var G__21194 = parent;
var G__21195 = cljs.core.cons.call(null,parent,so_far);
n = G__21194;
so_far = G__21195;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__21204_21212 = cljs.core.seq.call(null,ancestors);var chunk__21205_21213 = null;var count__21206_21214 = (0);var i__21207_21215 = (0);while(true){
if((i__21207_21215 < count__21206_21214))
{var n_21216 = cljs.core._nth.call(null,chunk__21205_21213,i__21207_21215);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21216;
goog.events.fireListeners(n_21216,evt.type,true,evt);
}
{
var G__21217 = seq__21204_21212;
var G__21218 = chunk__21205_21213;
var G__21219 = count__21206_21214;
var G__21220 = (i__21207_21215 + (1));
seq__21204_21212 = G__21217;
chunk__21205_21213 = G__21218;
count__21206_21214 = G__21219;
i__21207_21215 = G__21220;
continue;
}
} else
{var temp__4126__auto___21221 = cljs.core.seq.call(null,seq__21204_21212);if(temp__4126__auto___21221)
{var seq__21204_21222__$1 = temp__4126__auto___21221;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21204_21222__$1))
{var c__4408__auto___21223 = cljs.core.chunk_first.call(null,seq__21204_21222__$1);{
var G__21224 = cljs.core.chunk_rest.call(null,seq__21204_21222__$1);
var G__21225 = c__4408__auto___21223;
var G__21226 = cljs.core.count.call(null,c__4408__auto___21223);
var G__21227 = (0);
seq__21204_21212 = G__21224;
chunk__21205_21213 = G__21225;
count__21206_21214 = G__21226;
i__21207_21215 = G__21227;
continue;
}
} else
{var n_21228 = cljs.core.first.call(null,seq__21204_21222__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21228;
goog.events.fireListeners(n_21228,evt.type,true,evt);
}
{
var G__21229 = cljs.core.next.call(null,seq__21204_21222__$1);
var G__21230 = null;
var G__21231 = (0);
var G__21232 = (0);
seq__21204_21212 = G__21229;
chunk__21205_21213 = G__21230;
count__21206_21214 = G__21231;
i__21207_21215 = G__21232;
continue;
}
}
} else
{}
}
break;
}
var seq__21208_21233 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__21209_21234 = null;var count__21210_21235 = (0);var i__21211_21236 = (0);while(true){
if((i__21211_21236 < count__21210_21235))
{var n_21237 = cljs.core._nth.call(null,chunk__21209_21234,i__21211_21236);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21237;
goog.events.fireListeners(n_21237,evt.type,false,evt);
}
{
var G__21238 = seq__21208_21233;
var G__21239 = chunk__21209_21234;
var G__21240 = count__21210_21235;
var G__21241 = (i__21211_21236 + (1));
seq__21208_21233 = G__21238;
chunk__21209_21234 = G__21239;
count__21210_21235 = G__21240;
i__21211_21236 = G__21241;
continue;
}
} else
{var temp__4126__auto___21242 = cljs.core.seq.call(null,seq__21208_21233);if(temp__4126__auto___21242)
{var seq__21208_21243__$1 = temp__4126__auto___21242;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21208_21243__$1))
{var c__4408__auto___21244 = cljs.core.chunk_first.call(null,seq__21208_21243__$1);{
var G__21245 = cljs.core.chunk_rest.call(null,seq__21208_21243__$1);
var G__21246 = c__4408__auto___21244;
var G__21247 = cljs.core.count.call(null,c__4408__auto___21244);
var G__21248 = (0);
seq__21208_21233 = G__21245;
chunk__21209_21234 = G__21246;
count__21210_21235 = G__21247;
i__21211_21236 = G__21248;
continue;
}
} else
{var n_21249 = cljs.core.first.call(null,seq__21208_21243__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21249;
goog.events.fireListeners(n_21249,evt.type,false,evt);
}
{
var G__21250 = cljs.core.next.call(null,seq__21208_21243__$1);
var G__21251 = null;
var G__21252 = (0);
var G__21253 = (0);
seq__21208_21233 = G__21250;
chunk__21209_21234 = G__21251;
count__21210_21235 = G__21252;
i__21211_21236 = G__21253;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__21260_21266 = cljs.core.seq.call(null,evt_map);var chunk__21261_21267 = null;var count__21262_21268 = (0);var i__21263_21269 = (0);while(true){
if((i__21263_21269 < count__21262_21268))
{var vec__21264_21270 = cljs.core._nth.call(null,chunk__21261_21267,i__21263_21269);var k_21271 = cljs.core.nth.call(null,vec__21264_21270,(0),null);var v_21272 = cljs.core.nth.call(null,vec__21264_21270,(1),null);(evt[k_21271] = v_21272);
{
var G__21273 = seq__21260_21266;
var G__21274 = chunk__21261_21267;
var G__21275 = count__21262_21268;
var G__21276 = (i__21263_21269 + (1));
seq__21260_21266 = G__21273;
chunk__21261_21267 = G__21274;
count__21262_21268 = G__21275;
i__21263_21269 = G__21276;
continue;
}
} else
{var temp__4126__auto___21277 = cljs.core.seq.call(null,seq__21260_21266);if(temp__4126__auto___21277)
{var seq__21260_21278__$1 = temp__4126__auto___21277;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21260_21278__$1))
{var c__4408__auto___21279 = cljs.core.chunk_first.call(null,seq__21260_21278__$1);{
var G__21280 = cljs.core.chunk_rest.call(null,seq__21260_21278__$1);
var G__21281 = c__4408__auto___21279;
var G__21282 = cljs.core.count.call(null,c__4408__auto___21279);
var G__21283 = (0);
seq__21260_21266 = G__21280;
chunk__21261_21267 = G__21281;
count__21262_21268 = G__21282;
i__21263_21269 = G__21283;
continue;
}
} else
{var vec__21265_21284 = cljs.core.first.call(null,seq__21260_21278__$1);var k_21285 = cljs.core.nth.call(null,vec__21265_21284,(0),null);var v_21286 = cljs.core.nth.call(null,vec__21265_21284,(1),null);(evt[k_21285] = v_21286);
{
var G__21287 = cljs.core.next.call(null,seq__21260_21278__$1);
var G__21288 = null;
var G__21289 = (0);
var G__21290 = (0);
seq__21260_21266 = G__21287;
chunk__21261_21267 = G__21288;
count__21262_21268 = G__21289;
i__21263_21269 = G__21290;
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
return (function (p1__21291_SHARP_){return goog.events.getListeners(p1__21291_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
