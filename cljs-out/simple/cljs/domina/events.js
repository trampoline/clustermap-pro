// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj20761 = {};return obj20761;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t20765 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t20765 = (function (evt,f,create_listener_function,meta20766){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta20766 = meta20766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t20765.cljs$lang$type = true;
domina.events.t20765.cljs$lang$ctorStr = "domina.events/t20765";
domina.events.t20765.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t20765");
});
domina.events.t20765.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t20765.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t20765.prototype.domina$events$Event$ = true;
domina.events.t20765.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t20765.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t20765.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t20765.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t20765.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t20765.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t20765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20767){var self__ = this;
var _20767__$1 = this;return self__.meta20766;
});
domina.events.t20765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20767,meta20766__$1){var self__ = this;
var _20767__$1 = this;return (new domina.events.t20765(self__.evt,self__.f,self__.create_listener_function,meta20766__$1));
});
domina.events.__GT_t20765 = (function __GT_t20765(evt__$1,f__$1,create_listener_function__$1,meta20766){return (new domina.events.t20765(evt__$1,f__$1,create_listener_function__$1,meta20766));
});
}
return (new domina.events.t20765(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__20772(s__20773){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__20773__$1 = s__20773;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20773__$1);if(temp__4126__auto__)
{var s__20773__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20773__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20773__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20775 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20774 = (0);while(true){
if((i__20774 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__20774);cljs.core.chunk_append.call(null,b__20775,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__20776 = (i__20774 + (1));
i__20774 = G__20776;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20775),iter__20772.call(null,cljs.core.chunk_rest.call(null,s__20773__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20775),null);
}
} else
{var node = cljs.core.first.call(null,s__20773__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__20772.call(null,cljs.core.rest.call(null,s__20773__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__20785 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20786 = null;var count__20787 = (0);var i__20788 = (0);while(true){
if((i__20788 < count__20787))
{var node = cljs.core._nth.call(null,chunk__20786,i__20788);goog.events.removeAll(node);
{
var G__20793 = seq__20785;
var G__20794 = chunk__20786;
var G__20795 = count__20787;
var G__20796 = (i__20788 + (1));
seq__20785 = G__20793;
chunk__20786 = G__20794;
count__20787 = G__20795;
i__20788 = G__20796;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20785);if(temp__4126__auto__)
{var seq__20785__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20785__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20785__$1);{
var G__20797 = cljs.core.chunk_rest.call(null,seq__20785__$1);
var G__20798 = c__4408__auto__;
var G__20799 = cljs.core.count.call(null,c__4408__auto__);
var G__20800 = (0);
seq__20785 = G__20797;
chunk__20786 = G__20798;
count__20787 = G__20799;
i__20788 = G__20800;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__20785__$1);goog.events.removeAll(node);
{
var G__20801 = cljs.core.next.call(null,seq__20785__$1);
var G__20802 = null;
var G__20803 = (0);
var G__20804 = (0);
seq__20785 = G__20801;
chunk__20786 = G__20802;
count__20787 = G__20803;
i__20788 = G__20804;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__20789 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20790 = null;var count__20791 = (0);var i__20792 = (0);while(true){
if((i__20792 < count__20791))
{var node = cljs.core._nth.call(null,chunk__20790,i__20792);goog.events.removeAll(node,type__$1);
{
var G__20805 = seq__20789;
var G__20806 = chunk__20790;
var G__20807 = count__20791;
var G__20808 = (i__20792 + (1));
seq__20789 = G__20805;
chunk__20790 = G__20806;
count__20791 = G__20807;
i__20792 = G__20808;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20789);if(temp__4126__auto__)
{var seq__20789__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20789__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20789__$1);{
var G__20809 = cljs.core.chunk_rest.call(null,seq__20789__$1);
var G__20810 = c__4408__auto__;
var G__20811 = cljs.core.count.call(null,c__4408__auto__);
var G__20812 = (0);
seq__20789 = G__20809;
chunk__20790 = G__20810;
count__20791 = G__20811;
i__20792 = G__20812;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__20789__$1);goog.events.removeAll(node,type__$1);
{
var G__20813 = cljs.core.next.call(null,seq__20789__$1);
var G__20814 = null;
var G__20815 = (0);
var G__20816 = (0);
seq__20789 = G__20813;
chunk__20790 = G__20814;
count__20791 = G__20815;
i__20792 = G__20816;
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
var G__20817 = parent;
var G__20818 = cljs.core.cons.call(null,parent,so_far);
n = G__20817;
so_far = G__20818;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__20827_20835 = cljs.core.seq.call(null,ancestors);var chunk__20828_20836 = null;var count__20829_20837 = (0);var i__20830_20838 = (0);while(true){
if((i__20830_20838 < count__20829_20837))
{var n_20839 = cljs.core._nth.call(null,chunk__20828_20836,i__20830_20838);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20839;
goog.events.fireListeners(n_20839,evt.type,true,evt);
}
{
var G__20840 = seq__20827_20835;
var G__20841 = chunk__20828_20836;
var G__20842 = count__20829_20837;
var G__20843 = (i__20830_20838 + (1));
seq__20827_20835 = G__20840;
chunk__20828_20836 = G__20841;
count__20829_20837 = G__20842;
i__20830_20838 = G__20843;
continue;
}
} else
{var temp__4126__auto___20844 = cljs.core.seq.call(null,seq__20827_20835);if(temp__4126__auto___20844)
{var seq__20827_20845__$1 = temp__4126__auto___20844;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20827_20845__$1))
{var c__4408__auto___20846 = cljs.core.chunk_first.call(null,seq__20827_20845__$1);{
var G__20847 = cljs.core.chunk_rest.call(null,seq__20827_20845__$1);
var G__20848 = c__4408__auto___20846;
var G__20849 = cljs.core.count.call(null,c__4408__auto___20846);
var G__20850 = (0);
seq__20827_20835 = G__20847;
chunk__20828_20836 = G__20848;
count__20829_20837 = G__20849;
i__20830_20838 = G__20850;
continue;
}
} else
{var n_20851 = cljs.core.first.call(null,seq__20827_20845__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20851;
goog.events.fireListeners(n_20851,evt.type,true,evt);
}
{
var G__20852 = cljs.core.next.call(null,seq__20827_20845__$1);
var G__20853 = null;
var G__20854 = (0);
var G__20855 = (0);
seq__20827_20835 = G__20852;
chunk__20828_20836 = G__20853;
count__20829_20837 = G__20854;
i__20830_20838 = G__20855;
continue;
}
}
} else
{}
}
break;
}
var seq__20831_20856 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__20832_20857 = null;var count__20833_20858 = (0);var i__20834_20859 = (0);while(true){
if((i__20834_20859 < count__20833_20858))
{var n_20860 = cljs.core._nth.call(null,chunk__20832_20857,i__20834_20859);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20860;
goog.events.fireListeners(n_20860,evt.type,false,evt);
}
{
var G__20861 = seq__20831_20856;
var G__20862 = chunk__20832_20857;
var G__20863 = count__20833_20858;
var G__20864 = (i__20834_20859 + (1));
seq__20831_20856 = G__20861;
chunk__20832_20857 = G__20862;
count__20833_20858 = G__20863;
i__20834_20859 = G__20864;
continue;
}
} else
{var temp__4126__auto___20865 = cljs.core.seq.call(null,seq__20831_20856);if(temp__4126__auto___20865)
{var seq__20831_20866__$1 = temp__4126__auto___20865;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20831_20866__$1))
{var c__4408__auto___20867 = cljs.core.chunk_first.call(null,seq__20831_20866__$1);{
var G__20868 = cljs.core.chunk_rest.call(null,seq__20831_20866__$1);
var G__20869 = c__4408__auto___20867;
var G__20870 = cljs.core.count.call(null,c__4408__auto___20867);
var G__20871 = (0);
seq__20831_20856 = G__20868;
chunk__20832_20857 = G__20869;
count__20833_20858 = G__20870;
i__20834_20859 = G__20871;
continue;
}
} else
{var n_20872 = cljs.core.first.call(null,seq__20831_20866__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20872;
goog.events.fireListeners(n_20872,evt.type,false,evt);
}
{
var G__20873 = cljs.core.next.call(null,seq__20831_20866__$1);
var G__20874 = null;
var G__20875 = (0);
var G__20876 = (0);
seq__20831_20856 = G__20873;
chunk__20832_20857 = G__20874;
count__20833_20858 = G__20875;
i__20834_20859 = G__20876;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__20883_20889 = cljs.core.seq.call(null,evt_map);var chunk__20884_20890 = null;var count__20885_20891 = (0);var i__20886_20892 = (0);while(true){
if((i__20886_20892 < count__20885_20891))
{var vec__20887_20893 = cljs.core._nth.call(null,chunk__20884_20890,i__20886_20892);var k_20894 = cljs.core.nth.call(null,vec__20887_20893,(0),null);var v_20895 = cljs.core.nth.call(null,vec__20887_20893,(1),null);(evt[k_20894] = v_20895);
{
var G__20896 = seq__20883_20889;
var G__20897 = chunk__20884_20890;
var G__20898 = count__20885_20891;
var G__20899 = (i__20886_20892 + (1));
seq__20883_20889 = G__20896;
chunk__20884_20890 = G__20897;
count__20885_20891 = G__20898;
i__20886_20892 = G__20899;
continue;
}
} else
{var temp__4126__auto___20900 = cljs.core.seq.call(null,seq__20883_20889);if(temp__4126__auto___20900)
{var seq__20883_20901__$1 = temp__4126__auto___20900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20883_20901__$1))
{var c__4408__auto___20902 = cljs.core.chunk_first.call(null,seq__20883_20901__$1);{
var G__20903 = cljs.core.chunk_rest.call(null,seq__20883_20901__$1);
var G__20904 = c__4408__auto___20902;
var G__20905 = cljs.core.count.call(null,c__4408__auto___20902);
var G__20906 = (0);
seq__20883_20889 = G__20903;
chunk__20884_20890 = G__20904;
count__20885_20891 = G__20905;
i__20886_20892 = G__20906;
continue;
}
} else
{var vec__20888_20907 = cljs.core.first.call(null,seq__20883_20901__$1);var k_20908 = cljs.core.nth.call(null,vec__20888_20907,(0),null);var v_20909 = cljs.core.nth.call(null,vec__20888_20907,(1),null);(evt[k_20908] = v_20909);
{
var G__20910 = cljs.core.next.call(null,seq__20883_20901__$1);
var G__20911 = null;
var G__20912 = (0);
var G__20913 = (0);
seq__20883_20889 = G__20910;
chunk__20884_20890 = G__20911;
count__20885_20891 = G__20912;
i__20886_20892 = G__20913;
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
return (function (p1__20914_SHARP_){return goog.events.getListeners(p1__20914_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
