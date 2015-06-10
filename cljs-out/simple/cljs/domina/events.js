// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj20776 = {};return obj20776;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t20780 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t20780 = (function (evt,f,create_listener_function,meta20781){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta20781 = meta20781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t20780.cljs$lang$type = true;
domina.events.t20780.cljs$lang$ctorStr = "domina.events/t20780";
domina.events.t20780.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t20780");
});
domina.events.t20780.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t20780.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t20780.prototype.domina$events$Event$ = true;
domina.events.t20780.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t20780.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t20780.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t20780.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t20780.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t20780.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t20780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20782){var self__ = this;
var _20782__$1 = this;return self__.meta20781;
});
domina.events.t20780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20782,meta20781__$1){var self__ = this;
var _20782__$1 = this;return (new domina.events.t20780(self__.evt,self__.f,self__.create_listener_function,meta20781__$1));
});
domina.events.__GT_t20780 = (function __GT_t20780(evt__$1,f__$1,create_listener_function__$1,meta20781){return (new domina.events.t20780(evt__$1,f__$1,create_listener_function__$1,meta20781));
});
}
return (new domina.events.t20780(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__20787(s__20788){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__20788__$1 = s__20788;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20788__$1);if(temp__4126__auto__)
{var s__20788__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20788__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20788__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20790 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20789 = (0);while(true){
if((i__20789 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__20789);cljs.core.chunk_append.call(null,b__20790,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__20791 = (i__20789 + (1));
i__20789 = G__20791;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20790),iter__20787.call(null,cljs.core.chunk_rest.call(null,s__20788__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20790),null);
}
} else
{var node = cljs.core.first.call(null,s__20788__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__20787.call(null,cljs.core.rest.call(null,s__20788__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__20800 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20801 = null;var count__20802 = (0);var i__20803 = (0);while(true){
if((i__20803 < count__20802))
{var node = cljs.core._nth.call(null,chunk__20801,i__20803);goog.events.removeAll(node);
{
var G__20808 = seq__20800;
var G__20809 = chunk__20801;
var G__20810 = count__20802;
var G__20811 = (i__20803 + (1));
seq__20800 = G__20808;
chunk__20801 = G__20809;
count__20802 = G__20810;
i__20803 = G__20811;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20800);if(temp__4126__auto__)
{var seq__20800__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20800__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20800__$1);{
var G__20812 = cljs.core.chunk_rest.call(null,seq__20800__$1);
var G__20813 = c__4408__auto__;
var G__20814 = cljs.core.count.call(null,c__4408__auto__);
var G__20815 = (0);
seq__20800 = G__20812;
chunk__20801 = G__20813;
count__20802 = G__20814;
i__20803 = G__20815;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__20800__$1);goog.events.removeAll(node);
{
var G__20816 = cljs.core.next.call(null,seq__20800__$1);
var G__20817 = null;
var G__20818 = (0);
var G__20819 = (0);
seq__20800 = G__20816;
chunk__20801 = G__20817;
count__20802 = G__20818;
i__20803 = G__20819;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__20804 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20805 = null;var count__20806 = (0);var i__20807 = (0);while(true){
if((i__20807 < count__20806))
{var node = cljs.core._nth.call(null,chunk__20805,i__20807);goog.events.removeAll(node,type__$1);
{
var G__20820 = seq__20804;
var G__20821 = chunk__20805;
var G__20822 = count__20806;
var G__20823 = (i__20807 + (1));
seq__20804 = G__20820;
chunk__20805 = G__20821;
count__20806 = G__20822;
i__20807 = G__20823;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20804);if(temp__4126__auto__)
{var seq__20804__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20804__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20804__$1);{
var G__20824 = cljs.core.chunk_rest.call(null,seq__20804__$1);
var G__20825 = c__4408__auto__;
var G__20826 = cljs.core.count.call(null,c__4408__auto__);
var G__20827 = (0);
seq__20804 = G__20824;
chunk__20805 = G__20825;
count__20806 = G__20826;
i__20807 = G__20827;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__20804__$1);goog.events.removeAll(node,type__$1);
{
var G__20828 = cljs.core.next.call(null,seq__20804__$1);
var G__20829 = null;
var G__20830 = (0);
var G__20831 = (0);
seq__20804 = G__20828;
chunk__20805 = G__20829;
count__20806 = G__20830;
i__20807 = G__20831;
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
var G__20832 = parent;
var G__20833 = cljs.core.cons.call(null,parent,so_far);
n = G__20832;
so_far = G__20833;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__20842_20850 = cljs.core.seq.call(null,ancestors);var chunk__20843_20851 = null;var count__20844_20852 = (0);var i__20845_20853 = (0);while(true){
if((i__20845_20853 < count__20844_20852))
{var n_20854 = cljs.core._nth.call(null,chunk__20843_20851,i__20845_20853);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20854;
goog.events.fireListeners(n_20854,evt.type,true,evt);
}
{
var G__20855 = seq__20842_20850;
var G__20856 = chunk__20843_20851;
var G__20857 = count__20844_20852;
var G__20858 = (i__20845_20853 + (1));
seq__20842_20850 = G__20855;
chunk__20843_20851 = G__20856;
count__20844_20852 = G__20857;
i__20845_20853 = G__20858;
continue;
}
} else
{var temp__4126__auto___20859 = cljs.core.seq.call(null,seq__20842_20850);if(temp__4126__auto___20859)
{var seq__20842_20860__$1 = temp__4126__auto___20859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20842_20860__$1))
{var c__4408__auto___20861 = cljs.core.chunk_first.call(null,seq__20842_20860__$1);{
var G__20862 = cljs.core.chunk_rest.call(null,seq__20842_20860__$1);
var G__20863 = c__4408__auto___20861;
var G__20864 = cljs.core.count.call(null,c__4408__auto___20861);
var G__20865 = (0);
seq__20842_20850 = G__20862;
chunk__20843_20851 = G__20863;
count__20844_20852 = G__20864;
i__20845_20853 = G__20865;
continue;
}
} else
{var n_20866 = cljs.core.first.call(null,seq__20842_20860__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20866;
goog.events.fireListeners(n_20866,evt.type,true,evt);
}
{
var G__20867 = cljs.core.next.call(null,seq__20842_20860__$1);
var G__20868 = null;
var G__20869 = (0);
var G__20870 = (0);
seq__20842_20850 = G__20867;
chunk__20843_20851 = G__20868;
count__20844_20852 = G__20869;
i__20845_20853 = G__20870;
continue;
}
}
} else
{}
}
break;
}
var seq__20846_20871 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__20847_20872 = null;var count__20848_20873 = (0);var i__20849_20874 = (0);while(true){
if((i__20849_20874 < count__20848_20873))
{var n_20875 = cljs.core._nth.call(null,chunk__20847_20872,i__20849_20874);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20875;
goog.events.fireListeners(n_20875,evt.type,false,evt);
}
{
var G__20876 = seq__20846_20871;
var G__20877 = chunk__20847_20872;
var G__20878 = count__20848_20873;
var G__20879 = (i__20849_20874 + (1));
seq__20846_20871 = G__20876;
chunk__20847_20872 = G__20877;
count__20848_20873 = G__20878;
i__20849_20874 = G__20879;
continue;
}
} else
{var temp__4126__auto___20880 = cljs.core.seq.call(null,seq__20846_20871);if(temp__4126__auto___20880)
{var seq__20846_20881__$1 = temp__4126__auto___20880;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20846_20881__$1))
{var c__4408__auto___20882 = cljs.core.chunk_first.call(null,seq__20846_20881__$1);{
var G__20883 = cljs.core.chunk_rest.call(null,seq__20846_20881__$1);
var G__20884 = c__4408__auto___20882;
var G__20885 = cljs.core.count.call(null,c__4408__auto___20882);
var G__20886 = (0);
seq__20846_20871 = G__20883;
chunk__20847_20872 = G__20884;
count__20848_20873 = G__20885;
i__20849_20874 = G__20886;
continue;
}
} else
{var n_20887 = cljs.core.first.call(null,seq__20846_20881__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20887;
goog.events.fireListeners(n_20887,evt.type,false,evt);
}
{
var G__20888 = cljs.core.next.call(null,seq__20846_20881__$1);
var G__20889 = null;
var G__20890 = (0);
var G__20891 = (0);
seq__20846_20871 = G__20888;
chunk__20847_20872 = G__20889;
count__20848_20873 = G__20890;
i__20849_20874 = G__20891;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__20898_20904 = cljs.core.seq.call(null,evt_map);var chunk__20899_20905 = null;var count__20900_20906 = (0);var i__20901_20907 = (0);while(true){
if((i__20901_20907 < count__20900_20906))
{var vec__20902_20908 = cljs.core._nth.call(null,chunk__20899_20905,i__20901_20907);var k_20909 = cljs.core.nth.call(null,vec__20902_20908,(0),null);var v_20910 = cljs.core.nth.call(null,vec__20902_20908,(1),null);(evt[k_20909] = v_20910);
{
var G__20911 = seq__20898_20904;
var G__20912 = chunk__20899_20905;
var G__20913 = count__20900_20906;
var G__20914 = (i__20901_20907 + (1));
seq__20898_20904 = G__20911;
chunk__20899_20905 = G__20912;
count__20900_20906 = G__20913;
i__20901_20907 = G__20914;
continue;
}
} else
{var temp__4126__auto___20915 = cljs.core.seq.call(null,seq__20898_20904);if(temp__4126__auto___20915)
{var seq__20898_20916__$1 = temp__4126__auto___20915;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20898_20916__$1))
{var c__4408__auto___20917 = cljs.core.chunk_first.call(null,seq__20898_20916__$1);{
var G__20918 = cljs.core.chunk_rest.call(null,seq__20898_20916__$1);
var G__20919 = c__4408__auto___20917;
var G__20920 = cljs.core.count.call(null,c__4408__auto___20917);
var G__20921 = (0);
seq__20898_20904 = G__20918;
chunk__20899_20905 = G__20919;
count__20900_20906 = G__20920;
i__20901_20907 = G__20921;
continue;
}
} else
{var vec__20903_20922 = cljs.core.first.call(null,seq__20898_20916__$1);var k_20923 = cljs.core.nth.call(null,vec__20903_20922,(0),null);var v_20924 = cljs.core.nth.call(null,vec__20903_20922,(1),null);(evt[k_20923] = v_20924);
{
var G__20925 = cljs.core.next.call(null,seq__20898_20916__$1);
var G__20926 = null;
var G__20927 = (0);
var G__20928 = (0);
seq__20898_20904 = G__20925;
chunk__20899_20905 = G__20926;
count__20900_20906 = G__20927;
i__20901_20907 = G__20928;
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
return (function (p1__20929_SHARP_){return goog.events.getListeners(p1__20929_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
