// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj19823 = {};return obj19823;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t19827 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19827 = (function (evt,f,create_listener_function,meta19828){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19828 = meta19828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19827.cljs$lang$type = true;
domina.events.t19827.cljs$lang$ctorStr = "domina.events/t19827";
domina.events.t19827.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t19827");
});
domina.events.t19827.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t19827.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t19827.prototype.domina$events$Event$ = true;
domina.events.t19827.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19827.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19827.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19827.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19827.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19827.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19829){var self__ = this;
var _19829__$1 = this;return self__.meta19828;
});
domina.events.t19827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19829,meta19828__$1){var self__ = this;
var _19829__$1 = this;return (new domina.events.t19827(self__.evt,self__.f,self__.create_listener_function,meta19828__$1));
});
domina.events.__GT_t19827 = (function __GT_t19827(evt__$1,f__$1,create_listener_function__$1,meta19828){return (new domina.events.t19827(evt__$1,f__$1,create_listener_function__$1,meta19828));
});
}
return (new domina.events.t19827(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__19834(s__19835){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__19835__$1 = s__19835;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19835__$1);if(temp__4126__auto__)
{var s__19835__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19835__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19835__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19837 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19836 = (0);while(true){
if((i__19836 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__19836);cljs.core.chunk_append.call(null,b__19837,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__19838 = (i__19836 + (1));
i__19836 = G__19838;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19837),iter__19834.call(null,cljs.core.chunk_rest.call(null,s__19835__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19837),null);
}
} else
{var node = cljs.core.first.call(null,s__19835__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19834.call(null,cljs.core.rest.call(null,s__19835__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__19847 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19848 = null;var count__19849 = (0);var i__19850 = (0);while(true){
if((i__19850 < count__19849))
{var node = cljs.core._nth.call(null,chunk__19848,i__19850);goog.events.removeAll(node);
{
var G__19855 = seq__19847;
var G__19856 = chunk__19848;
var G__19857 = count__19849;
var G__19858 = (i__19850 + (1));
seq__19847 = G__19855;
chunk__19848 = G__19856;
count__19849 = G__19857;
i__19850 = G__19858;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19847);if(temp__4126__auto__)
{var seq__19847__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19847__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19847__$1);{
var G__19859 = cljs.core.chunk_rest.call(null,seq__19847__$1);
var G__19860 = c__4408__auto__;
var G__19861 = cljs.core.count.call(null,c__4408__auto__);
var G__19862 = (0);
seq__19847 = G__19859;
chunk__19848 = G__19860;
count__19849 = G__19861;
i__19850 = G__19862;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19847__$1);goog.events.removeAll(node);
{
var G__19863 = cljs.core.next.call(null,seq__19847__$1);
var G__19864 = null;
var G__19865 = (0);
var G__19866 = (0);
seq__19847 = G__19863;
chunk__19848 = G__19864;
count__19849 = G__19865;
i__19850 = G__19866;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__19851 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19852 = null;var count__19853 = (0);var i__19854 = (0);while(true){
if((i__19854 < count__19853))
{var node = cljs.core._nth.call(null,chunk__19852,i__19854);goog.events.removeAll(node,type__$1);
{
var G__19867 = seq__19851;
var G__19868 = chunk__19852;
var G__19869 = count__19853;
var G__19870 = (i__19854 + (1));
seq__19851 = G__19867;
chunk__19852 = G__19868;
count__19853 = G__19869;
i__19854 = G__19870;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19851);if(temp__4126__auto__)
{var seq__19851__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19851__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19851__$1);{
var G__19871 = cljs.core.chunk_rest.call(null,seq__19851__$1);
var G__19872 = c__4408__auto__;
var G__19873 = cljs.core.count.call(null,c__4408__auto__);
var G__19874 = (0);
seq__19851 = G__19871;
chunk__19852 = G__19872;
count__19853 = G__19873;
i__19854 = G__19874;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19851__$1);goog.events.removeAll(node,type__$1);
{
var G__19875 = cljs.core.next.call(null,seq__19851__$1);
var G__19876 = null;
var G__19877 = (0);
var G__19878 = (0);
seq__19851 = G__19875;
chunk__19852 = G__19876;
count__19853 = G__19877;
i__19854 = G__19878;
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
var G__19879 = parent;
var G__19880 = cljs.core.cons.call(null,parent,so_far);
n = G__19879;
so_far = G__19880;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__19889_19897 = cljs.core.seq.call(null,ancestors);var chunk__19890_19898 = null;var count__19891_19899 = (0);var i__19892_19900 = (0);while(true){
if((i__19892_19900 < count__19891_19899))
{var n_19901 = cljs.core._nth.call(null,chunk__19890_19898,i__19892_19900);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19901;
goog.events.fireListeners(n_19901,evt.type,true,evt);
}
{
var G__19902 = seq__19889_19897;
var G__19903 = chunk__19890_19898;
var G__19904 = count__19891_19899;
var G__19905 = (i__19892_19900 + (1));
seq__19889_19897 = G__19902;
chunk__19890_19898 = G__19903;
count__19891_19899 = G__19904;
i__19892_19900 = G__19905;
continue;
}
} else
{var temp__4126__auto___19906 = cljs.core.seq.call(null,seq__19889_19897);if(temp__4126__auto___19906)
{var seq__19889_19907__$1 = temp__4126__auto___19906;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19889_19907__$1))
{var c__4408__auto___19908 = cljs.core.chunk_first.call(null,seq__19889_19907__$1);{
var G__19909 = cljs.core.chunk_rest.call(null,seq__19889_19907__$1);
var G__19910 = c__4408__auto___19908;
var G__19911 = cljs.core.count.call(null,c__4408__auto___19908);
var G__19912 = (0);
seq__19889_19897 = G__19909;
chunk__19890_19898 = G__19910;
count__19891_19899 = G__19911;
i__19892_19900 = G__19912;
continue;
}
} else
{var n_19913 = cljs.core.first.call(null,seq__19889_19907__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19913;
goog.events.fireListeners(n_19913,evt.type,true,evt);
}
{
var G__19914 = cljs.core.next.call(null,seq__19889_19907__$1);
var G__19915 = null;
var G__19916 = (0);
var G__19917 = (0);
seq__19889_19897 = G__19914;
chunk__19890_19898 = G__19915;
count__19891_19899 = G__19916;
i__19892_19900 = G__19917;
continue;
}
}
} else
{}
}
break;
}
var seq__19893_19918 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__19894_19919 = null;var count__19895_19920 = (0);var i__19896_19921 = (0);while(true){
if((i__19896_19921 < count__19895_19920))
{var n_19922 = cljs.core._nth.call(null,chunk__19894_19919,i__19896_19921);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19922;
goog.events.fireListeners(n_19922,evt.type,false,evt);
}
{
var G__19923 = seq__19893_19918;
var G__19924 = chunk__19894_19919;
var G__19925 = count__19895_19920;
var G__19926 = (i__19896_19921 + (1));
seq__19893_19918 = G__19923;
chunk__19894_19919 = G__19924;
count__19895_19920 = G__19925;
i__19896_19921 = G__19926;
continue;
}
} else
{var temp__4126__auto___19927 = cljs.core.seq.call(null,seq__19893_19918);if(temp__4126__auto___19927)
{var seq__19893_19928__$1 = temp__4126__auto___19927;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19893_19928__$1))
{var c__4408__auto___19929 = cljs.core.chunk_first.call(null,seq__19893_19928__$1);{
var G__19930 = cljs.core.chunk_rest.call(null,seq__19893_19928__$1);
var G__19931 = c__4408__auto___19929;
var G__19932 = cljs.core.count.call(null,c__4408__auto___19929);
var G__19933 = (0);
seq__19893_19918 = G__19930;
chunk__19894_19919 = G__19931;
count__19895_19920 = G__19932;
i__19896_19921 = G__19933;
continue;
}
} else
{var n_19934 = cljs.core.first.call(null,seq__19893_19928__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19934;
goog.events.fireListeners(n_19934,evt.type,false,evt);
}
{
var G__19935 = cljs.core.next.call(null,seq__19893_19928__$1);
var G__19936 = null;
var G__19937 = (0);
var G__19938 = (0);
seq__19893_19918 = G__19935;
chunk__19894_19919 = G__19936;
count__19895_19920 = G__19937;
i__19896_19921 = G__19938;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19945_19951 = cljs.core.seq.call(null,evt_map);var chunk__19946_19952 = null;var count__19947_19953 = (0);var i__19948_19954 = (0);while(true){
if((i__19948_19954 < count__19947_19953))
{var vec__19949_19955 = cljs.core._nth.call(null,chunk__19946_19952,i__19948_19954);var k_19956 = cljs.core.nth.call(null,vec__19949_19955,(0),null);var v_19957 = cljs.core.nth.call(null,vec__19949_19955,(1),null);(evt[k_19956] = v_19957);
{
var G__19958 = seq__19945_19951;
var G__19959 = chunk__19946_19952;
var G__19960 = count__19947_19953;
var G__19961 = (i__19948_19954 + (1));
seq__19945_19951 = G__19958;
chunk__19946_19952 = G__19959;
count__19947_19953 = G__19960;
i__19948_19954 = G__19961;
continue;
}
} else
{var temp__4126__auto___19962 = cljs.core.seq.call(null,seq__19945_19951);if(temp__4126__auto___19962)
{var seq__19945_19963__$1 = temp__4126__auto___19962;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19945_19963__$1))
{var c__4408__auto___19964 = cljs.core.chunk_first.call(null,seq__19945_19963__$1);{
var G__19965 = cljs.core.chunk_rest.call(null,seq__19945_19963__$1);
var G__19966 = c__4408__auto___19964;
var G__19967 = cljs.core.count.call(null,c__4408__auto___19964);
var G__19968 = (0);
seq__19945_19951 = G__19965;
chunk__19946_19952 = G__19966;
count__19947_19953 = G__19967;
i__19948_19954 = G__19968;
continue;
}
} else
{var vec__19950_19969 = cljs.core.first.call(null,seq__19945_19963__$1);var k_19970 = cljs.core.nth.call(null,vec__19950_19969,(0),null);var v_19971 = cljs.core.nth.call(null,vec__19950_19969,(1),null);(evt[k_19970] = v_19971);
{
var G__19972 = cljs.core.next.call(null,seq__19945_19963__$1);
var G__19973 = null;
var G__19974 = (0);
var G__19975 = (0);
seq__19945_19951 = G__19972;
chunk__19946_19952 = G__19973;
count__19947_19953 = G__19974;
i__19948_19954 = G__19975;
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
return (function (p1__19976_SHARP_){return goog.events.getListeners(p1__19976_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
