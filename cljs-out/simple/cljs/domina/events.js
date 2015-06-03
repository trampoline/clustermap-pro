// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj19791 = {};return obj19791;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t19795 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19795 = (function (evt,f,create_listener_function,meta19796){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19796 = meta19796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19795.cljs$lang$type = true;
domina.events.t19795.cljs$lang$ctorStr = "domina.events/t19795";
domina.events.t19795.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t19795");
});
domina.events.t19795.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t19795.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t19795.prototype.domina$events$Event$ = true;
domina.events.t19795.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19795.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19795.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19795.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19795.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19795.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19797){var self__ = this;
var _19797__$1 = this;return self__.meta19796;
});
domina.events.t19795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19797,meta19796__$1){var self__ = this;
var _19797__$1 = this;return (new domina.events.t19795(self__.evt,self__.f,self__.create_listener_function,meta19796__$1));
});
domina.events.__GT_t19795 = (function __GT_t19795(evt__$1,f__$1,create_listener_function__$1,meta19796){return (new domina.events.t19795(evt__$1,f__$1,create_listener_function__$1,meta19796));
});
}
return (new domina.events.t19795(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__19802(s__19803){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__19803__$1 = s__19803;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19803__$1);if(temp__4126__auto__)
{var s__19803__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19803__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19803__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19805 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19804 = (0);while(true){
if((i__19804 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__19804);cljs.core.chunk_append.call(null,b__19805,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__19806 = (i__19804 + (1));
i__19804 = G__19806;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19805),iter__19802.call(null,cljs.core.chunk_rest.call(null,s__19803__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19805),null);
}
} else
{var node = cljs.core.first.call(null,s__19803__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19802.call(null,cljs.core.rest.call(null,s__19803__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__19815 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19816 = null;var count__19817 = (0);var i__19818 = (0);while(true){
if((i__19818 < count__19817))
{var node = cljs.core._nth.call(null,chunk__19816,i__19818);goog.events.removeAll(node);
{
var G__19823 = seq__19815;
var G__19824 = chunk__19816;
var G__19825 = count__19817;
var G__19826 = (i__19818 + (1));
seq__19815 = G__19823;
chunk__19816 = G__19824;
count__19817 = G__19825;
i__19818 = G__19826;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19815);if(temp__4126__auto__)
{var seq__19815__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19815__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19815__$1);{
var G__19827 = cljs.core.chunk_rest.call(null,seq__19815__$1);
var G__19828 = c__4408__auto__;
var G__19829 = cljs.core.count.call(null,c__4408__auto__);
var G__19830 = (0);
seq__19815 = G__19827;
chunk__19816 = G__19828;
count__19817 = G__19829;
i__19818 = G__19830;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19815__$1);goog.events.removeAll(node);
{
var G__19831 = cljs.core.next.call(null,seq__19815__$1);
var G__19832 = null;
var G__19833 = (0);
var G__19834 = (0);
seq__19815 = G__19831;
chunk__19816 = G__19832;
count__19817 = G__19833;
i__19818 = G__19834;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__19819 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19820 = null;var count__19821 = (0);var i__19822 = (0);while(true){
if((i__19822 < count__19821))
{var node = cljs.core._nth.call(null,chunk__19820,i__19822);goog.events.removeAll(node,type__$1);
{
var G__19835 = seq__19819;
var G__19836 = chunk__19820;
var G__19837 = count__19821;
var G__19838 = (i__19822 + (1));
seq__19819 = G__19835;
chunk__19820 = G__19836;
count__19821 = G__19837;
i__19822 = G__19838;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19819);if(temp__4126__auto__)
{var seq__19819__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19819__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19819__$1);{
var G__19839 = cljs.core.chunk_rest.call(null,seq__19819__$1);
var G__19840 = c__4408__auto__;
var G__19841 = cljs.core.count.call(null,c__4408__auto__);
var G__19842 = (0);
seq__19819 = G__19839;
chunk__19820 = G__19840;
count__19821 = G__19841;
i__19822 = G__19842;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19819__$1);goog.events.removeAll(node,type__$1);
{
var G__19843 = cljs.core.next.call(null,seq__19819__$1);
var G__19844 = null;
var G__19845 = (0);
var G__19846 = (0);
seq__19819 = G__19843;
chunk__19820 = G__19844;
count__19821 = G__19845;
i__19822 = G__19846;
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
var G__19847 = parent;
var G__19848 = cljs.core.cons.call(null,parent,so_far);
n = G__19847;
so_far = G__19848;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__19857_19865 = cljs.core.seq.call(null,ancestors);var chunk__19858_19866 = null;var count__19859_19867 = (0);var i__19860_19868 = (0);while(true){
if((i__19860_19868 < count__19859_19867))
{var n_19869 = cljs.core._nth.call(null,chunk__19858_19866,i__19860_19868);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19869;
goog.events.fireListeners(n_19869,evt.type,true,evt);
}
{
var G__19870 = seq__19857_19865;
var G__19871 = chunk__19858_19866;
var G__19872 = count__19859_19867;
var G__19873 = (i__19860_19868 + (1));
seq__19857_19865 = G__19870;
chunk__19858_19866 = G__19871;
count__19859_19867 = G__19872;
i__19860_19868 = G__19873;
continue;
}
} else
{var temp__4126__auto___19874 = cljs.core.seq.call(null,seq__19857_19865);if(temp__4126__auto___19874)
{var seq__19857_19875__$1 = temp__4126__auto___19874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19857_19875__$1))
{var c__4408__auto___19876 = cljs.core.chunk_first.call(null,seq__19857_19875__$1);{
var G__19877 = cljs.core.chunk_rest.call(null,seq__19857_19875__$1);
var G__19878 = c__4408__auto___19876;
var G__19879 = cljs.core.count.call(null,c__4408__auto___19876);
var G__19880 = (0);
seq__19857_19865 = G__19877;
chunk__19858_19866 = G__19878;
count__19859_19867 = G__19879;
i__19860_19868 = G__19880;
continue;
}
} else
{var n_19881 = cljs.core.first.call(null,seq__19857_19875__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19881;
goog.events.fireListeners(n_19881,evt.type,true,evt);
}
{
var G__19882 = cljs.core.next.call(null,seq__19857_19875__$1);
var G__19883 = null;
var G__19884 = (0);
var G__19885 = (0);
seq__19857_19865 = G__19882;
chunk__19858_19866 = G__19883;
count__19859_19867 = G__19884;
i__19860_19868 = G__19885;
continue;
}
}
} else
{}
}
break;
}
var seq__19861_19886 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__19862_19887 = null;var count__19863_19888 = (0);var i__19864_19889 = (0);while(true){
if((i__19864_19889 < count__19863_19888))
{var n_19890 = cljs.core._nth.call(null,chunk__19862_19887,i__19864_19889);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19890;
goog.events.fireListeners(n_19890,evt.type,false,evt);
}
{
var G__19891 = seq__19861_19886;
var G__19892 = chunk__19862_19887;
var G__19893 = count__19863_19888;
var G__19894 = (i__19864_19889 + (1));
seq__19861_19886 = G__19891;
chunk__19862_19887 = G__19892;
count__19863_19888 = G__19893;
i__19864_19889 = G__19894;
continue;
}
} else
{var temp__4126__auto___19895 = cljs.core.seq.call(null,seq__19861_19886);if(temp__4126__auto___19895)
{var seq__19861_19896__$1 = temp__4126__auto___19895;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19861_19896__$1))
{var c__4408__auto___19897 = cljs.core.chunk_first.call(null,seq__19861_19896__$1);{
var G__19898 = cljs.core.chunk_rest.call(null,seq__19861_19896__$1);
var G__19899 = c__4408__auto___19897;
var G__19900 = cljs.core.count.call(null,c__4408__auto___19897);
var G__19901 = (0);
seq__19861_19886 = G__19898;
chunk__19862_19887 = G__19899;
count__19863_19888 = G__19900;
i__19864_19889 = G__19901;
continue;
}
} else
{var n_19902 = cljs.core.first.call(null,seq__19861_19896__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19902;
goog.events.fireListeners(n_19902,evt.type,false,evt);
}
{
var G__19903 = cljs.core.next.call(null,seq__19861_19896__$1);
var G__19904 = null;
var G__19905 = (0);
var G__19906 = (0);
seq__19861_19886 = G__19903;
chunk__19862_19887 = G__19904;
count__19863_19888 = G__19905;
i__19864_19889 = G__19906;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19913_19919 = cljs.core.seq.call(null,evt_map);var chunk__19914_19920 = null;var count__19915_19921 = (0);var i__19916_19922 = (0);while(true){
if((i__19916_19922 < count__19915_19921))
{var vec__19917_19923 = cljs.core._nth.call(null,chunk__19914_19920,i__19916_19922);var k_19924 = cljs.core.nth.call(null,vec__19917_19923,(0),null);var v_19925 = cljs.core.nth.call(null,vec__19917_19923,(1),null);(evt[k_19924] = v_19925);
{
var G__19926 = seq__19913_19919;
var G__19927 = chunk__19914_19920;
var G__19928 = count__19915_19921;
var G__19929 = (i__19916_19922 + (1));
seq__19913_19919 = G__19926;
chunk__19914_19920 = G__19927;
count__19915_19921 = G__19928;
i__19916_19922 = G__19929;
continue;
}
} else
{var temp__4126__auto___19930 = cljs.core.seq.call(null,seq__19913_19919);if(temp__4126__auto___19930)
{var seq__19913_19931__$1 = temp__4126__auto___19930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19913_19931__$1))
{var c__4408__auto___19932 = cljs.core.chunk_first.call(null,seq__19913_19931__$1);{
var G__19933 = cljs.core.chunk_rest.call(null,seq__19913_19931__$1);
var G__19934 = c__4408__auto___19932;
var G__19935 = cljs.core.count.call(null,c__4408__auto___19932);
var G__19936 = (0);
seq__19913_19919 = G__19933;
chunk__19914_19920 = G__19934;
count__19915_19921 = G__19935;
i__19916_19922 = G__19936;
continue;
}
} else
{var vec__19918_19937 = cljs.core.first.call(null,seq__19913_19931__$1);var k_19938 = cljs.core.nth.call(null,vec__19918_19937,(0),null);var v_19939 = cljs.core.nth.call(null,vec__19918_19937,(1),null);(evt[k_19938] = v_19939);
{
var G__19940 = cljs.core.next.call(null,seq__19913_19931__$1);
var G__19941 = null;
var G__19942 = (0);
var G__19943 = (0);
seq__19913_19919 = G__19940;
chunk__19914_19920 = G__19941;
count__19915_19921 = G__19942;
i__19916_19922 = G__19943;
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
return (function (p1__19944_SHARP_){return goog.events.getListeners(p1__19944_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
