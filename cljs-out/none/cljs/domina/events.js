// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj38162 = {};return obj38162;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__11502__auto__ = evt;if(and__11502__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__11502__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__12150__auto__ = (((evt == null))?null:evt);return (function (){var or__11514__auto__ = (domina.events.prevent_default[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (domina.events.prevent_default["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__11502__auto__ = evt;if(and__11502__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__11502__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__12150__auto__ = (((evt == null))?null:evt);return (function (){var or__11514__auto__ = (domina.events.stop_propagation[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (domina.events.stop_propagation["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__11502__auto__ = evt;if(and__11502__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__11502__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__12150__auto__ = (((evt == null))?null:evt);return (function (){var or__11514__auto__ = (domina.events.target[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (domina.events.target["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__11502__auto__ = evt;if(and__11502__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__11502__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__12150__auto__ = (((evt == null))?null:evt);return (function (){var or__11514__auto__ = (domina.events.current_target[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (domina.events.current_target["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__11502__auto__ = evt;if(and__11502__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__11502__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__12150__auto__ = (((evt == null))?null:evt);return (function (){var or__11514__auto__ = (domina.events.event_type[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (domina.events.event_type["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__11502__auto__ = evt;if(and__11502__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__11502__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__12150__auto__ = (((evt == null))?null:evt);return (function (){var or__11514__auto__ = (domina.events.raw_event[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (domina.events.raw_event["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t38166 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t38166 = (function (evt,f,create_listener_function,meta38167){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta38167 = meta38167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t38166.cljs$lang$type = true;
domina.events.t38166.cljs$lang$ctorStr = "domina.events/t38166";
domina.events.t38166.cljs$lang$ctorPrWriter = (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"domina.events/t38166");
});
domina.events.t38166.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t38166.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__11514__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return not_found;
}
});
domina.events.t38166.prototype.domina$events$Event$ = true;
domina.events.t38166.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t38166.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t38166.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t38166.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t38166.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t38166.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t38166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38168){var self__ = this;
var _38168__$1 = this;return self__.meta38167;
});
domina.events.t38166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38168,meta38167__$1){var self__ = this;
var _38168__$1 = this;return (new domina.events.t38166(self__.evt,self__.f,self__.create_listener_function,meta38167__$1));
});
domina.events.__GT_t38166 = (function __GT_t38166(evt__$1,f__$1,create_listener_function__$1,meta38167){return (new domina.events.t38166(evt__$1,f__$1,create_listener_function__$1,meta38167));
});
}
return (new domina.events.t38166(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__12252__auto__ = ((function (f,t){
return (function iter__38173(s__38174){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__38174__$1 = s__38174;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38174__$1);if(temp__4126__auto__)
{var s__38174__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38174__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__38174__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__38176 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__38175 = (0);while(true){
if((i__38175 < size__12251__auto__))
{var node = cljs.core._nth.call(null,c__12250__auto__,i__38175);cljs.core.chunk_append.call(null,b__38176,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__38177 = (i__38175 + (1));
i__38175 = G__38177;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38176),iter__38173.call(null,cljs.core.chunk_rest.call(null,s__38174__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38176),null);
}
} else
{var node = cljs.core.first.call(null,s__38174__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__38173.call(null,cljs.core.rest.call(null,s__38174__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__12252__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__38186 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38187 = null;var count__38188 = (0);var i__38189 = (0);while(true){
if((i__38189 < count__38188))
{var node = cljs.core._nth.call(null,chunk__38187,i__38189);goog.events.removeAll(node);
{
var G__38194 = seq__38186;
var G__38195 = chunk__38187;
var G__38196 = count__38188;
var G__38197 = (i__38189 + (1));
seq__38186 = G__38194;
chunk__38187 = G__38195;
count__38188 = G__38196;
i__38189 = G__38197;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__38186);if(temp__4126__auto__)
{var seq__38186__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38186__$1))
{var c__12283__auto__ = cljs.core.chunk_first.call(null,seq__38186__$1);{
var G__38198 = cljs.core.chunk_rest.call(null,seq__38186__$1);
var G__38199 = c__12283__auto__;
var G__38200 = cljs.core.count.call(null,c__12283__auto__);
var G__38201 = (0);
seq__38186 = G__38198;
chunk__38187 = G__38199;
count__38188 = G__38200;
i__38189 = G__38201;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38186__$1);goog.events.removeAll(node);
{
var G__38202 = cljs.core.next.call(null,seq__38186__$1);
var G__38203 = null;
var G__38204 = (0);
var G__38205 = (0);
seq__38186 = G__38202;
chunk__38187 = G__38203;
count__38188 = G__38204;
i__38189 = G__38205;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__38190 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38191 = null;var count__38192 = (0);var i__38193 = (0);while(true){
if((i__38193 < count__38192))
{var node = cljs.core._nth.call(null,chunk__38191,i__38193);goog.events.removeAll(node,type__$1);
{
var G__38206 = seq__38190;
var G__38207 = chunk__38191;
var G__38208 = count__38192;
var G__38209 = (i__38193 + (1));
seq__38190 = G__38206;
chunk__38191 = G__38207;
count__38192 = G__38208;
i__38193 = G__38209;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__38190);if(temp__4126__auto__)
{var seq__38190__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38190__$1))
{var c__12283__auto__ = cljs.core.chunk_first.call(null,seq__38190__$1);{
var G__38210 = cljs.core.chunk_rest.call(null,seq__38190__$1);
var G__38211 = c__12283__auto__;
var G__38212 = cljs.core.count.call(null,c__12283__auto__);
var G__38213 = (0);
seq__38190 = G__38210;
chunk__38191 = G__38211;
count__38192 = G__38212;
i__38193 = G__38213;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38190__$1);goog.events.removeAll(node,type__$1);
{
var G__38214 = cljs.core.next.call(null,seq__38190__$1);
var G__38215 = null;
var G__38216 = (0);
var G__38217 = (0);
seq__38190 = G__38214;
chunk__38191 = G__38215;
count__38192 = G__38216;
i__38193 = G__38217;
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
var G__38218 = parent;
var G__38219 = cljs.core.cons.call(null,parent,so_far);
n = G__38218;
so_far = G__38219;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__38228_38236 = cljs.core.seq.call(null,ancestors);var chunk__38229_38237 = null;var count__38230_38238 = (0);var i__38231_38239 = (0);while(true){
if((i__38231_38239 < count__38230_38238))
{var n_38240 = cljs.core._nth.call(null,chunk__38229_38237,i__38231_38239);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38240;
goog.events.fireListeners(n_38240,evt.type,true,evt);
}
{
var G__38241 = seq__38228_38236;
var G__38242 = chunk__38229_38237;
var G__38243 = count__38230_38238;
var G__38244 = (i__38231_38239 + (1));
seq__38228_38236 = G__38241;
chunk__38229_38237 = G__38242;
count__38230_38238 = G__38243;
i__38231_38239 = G__38244;
continue;
}
} else
{var temp__4126__auto___38245 = cljs.core.seq.call(null,seq__38228_38236);if(temp__4126__auto___38245)
{var seq__38228_38246__$1 = temp__4126__auto___38245;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38228_38246__$1))
{var c__12283__auto___38247 = cljs.core.chunk_first.call(null,seq__38228_38246__$1);{
var G__38248 = cljs.core.chunk_rest.call(null,seq__38228_38246__$1);
var G__38249 = c__12283__auto___38247;
var G__38250 = cljs.core.count.call(null,c__12283__auto___38247);
var G__38251 = (0);
seq__38228_38236 = G__38248;
chunk__38229_38237 = G__38249;
count__38230_38238 = G__38250;
i__38231_38239 = G__38251;
continue;
}
} else
{var n_38252 = cljs.core.first.call(null,seq__38228_38246__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38252;
goog.events.fireListeners(n_38252,evt.type,true,evt);
}
{
var G__38253 = cljs.core.next.call(null,seq__38228_38246__$1);
var G__38254 = null;
var G__38255 = (0);
var G__38256 = (0);
seq__38228_38236 = G__38253;
chunk__38229_38237 = G__38254;
count__38230_38238 = G__38255;
i__38231_38239 = G__38256;
continue;
}
}
} else
{}
}
break;
}
var seq__38232_38257 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__38233_38258 = null;var count__38234_38259 = (0);var i__38235_38260 = (0);while(true){
if((i__38235_38260 < count__38234_38259))
{var n_38261 = cljs.core._nth.call(null,chunk__38233_38258,i__38235_38260);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38261;
goog.events.fireListeners(n_38261,evt.type,false,evt);
}
{
var G__38262 = seq__38232_38257;
var G__38263 = chunk__38233_38258;
var G__38264 = count__38234_38259;
var G__38265 = (i__38235_38260 + (1));
seq__38232_38257 = G__38262;
chunk__38233_38258 = G__38263;
count__38234_38259 = G__38264;
i__38235_38260 = G__38265;
continue;
}
} else
{var temp__4126__auto___38266 = cljs.core.seq.call(null,seq__38232_38257);if(temp__4126__auto___38266)
{var seq__38232_38267__$1 = temp__4126__auto___38266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38232_38267__$1))
{var c__12283__auto___38268 = cljs.core.chunk_first.call(null,seq__38232_38267__$1);{
var G__38269 = cljs.core.chunk_rest.call(null,seq__38232_38267__$1);
var G__38270 = c__12283__auto___38268;
var G__38271 = cljs.core.count.call(null,c__12283__auto___38268);
var G__38272 = (0);
seq__38232_38257 = G__38269;
chunk__38233_38258 = G__38270;
count__38234_38259 = G__38271;
i__38235_38260 = G__38272;
continue;
}
} else
{var n_38273 = cljs.core.first.call(null,seq__38232_38267__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38273;
goog.events.fireListeners(n_38273,evt.type,false,evt);
}
{
var G__38274 = cljs.core.next.call(null,seq__38232_38267__$1);
var G__38275 = null;
var G__38276 = (0);
var G__38277 = (0);
seq__38232_38257 = G__38274;
chunk__38233_38258 = G__38275;
count__38234_38259 = G__38276;
i__38235_38260 = G__38277;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__11502__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__11502__auto__))
{return o.dispatchEvent;
} else
{return and__11502__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__38284_38290 = cljs.core.seq.call(null,evt_map);var chunk__38285_38291 = null;var count__38286_38292 = (0);var i__38287_38293 = (0);while(true){
if((i__38287_38293 < count__38286_38292))
{var vec__38288_38294 = cljs.core._nth.call(null,chunk__38285_38291,i__38287_38293);var k_38295 = cljs.core.nth.call(null,vec__38288_38294,(0),null);var v_38296 = cljs.core.nth.call(null,vec__38288_38294,(1),null);(evt[k_38295] = v_38296);
{
var G__38297 = seq__38284_38290;
var G__38298 = chunk__38285_38291;
var G__38299 = count__38286_38292;
var G__38300 = (i__38287_38293 + (1));
seq__38284_38290 = G__38297;
chunk__38285_38291 = G__38298;
count__38286_38292 = G__38299;
i__38287_38293 = G__38300;
continue;
}
} else
{var temp__4126__auto___38301 = cljs.core.seq.call(null,seq__38284_38290);if(temp__4126__auto___38301)
{var seq__38284_38302__$1 = temp__4126__auto___38301;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38284_38302__$1))
{var c__12283__auto___38303 = cljs.core.chunk_first.call(null,seq__38284_38302__$1);{
var G__38304 = cljs.core.chunk_rest.call(null,seq__38284_38302__$1);
var G__38305 = c__12283__auto___38303;
var G__38306 = cljs.core.count.call(null,c__12283__auto___38303);
var G__38307 = (0);
seq__38284_38290 = G__38304;
chunk__38285_38291 = G__38305;
count__38286_38292 = G__38306;
i__38287_38293 = G__38307;
continue;
}
} else
{var vec__38289_38308 = cljs.core.first.call(null,seq__38284_38302__$1);var k_38309 = cljs.core.nth.call(null,vec__38289_38308,(0),null);var v_38310 = cljs.core.nth.call(null,vec__38289_38308,(1),null);(evt[k_38309] = v_38310);
{
var G__38311 = cljs.core.next.call(null,seq__38284_38302__$1);
var G__38312 = null;
var G__38313 = (0);
var G__38314 = (0);
seq__38284_38290 = G__38311;
chunk__38285_38291 = G__38312;
count__38286_38292 = G__38313;
i__38287_38293 = G__38314;
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
return (function (p1__38315_SHARP_){return goog.events.getListeners(p1__38315_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map