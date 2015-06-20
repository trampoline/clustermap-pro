// Compiled by ClojureScript 0.0-2356
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23391 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23391 = (function (f,fn_handler,meta23392){
this.f = f;
this.fn_handler = fn_handler;
this.meta23392 = meta23392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23391.cljs$lang$type = true;
cljs.core.async.t23391.cljs$lang$ctorStr = "cljs.core.async/t23391";
cljs.core.async.t23391.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23391");
});
cljs.core.async.t23391.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23391.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23391.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23393){var self__ = this;
var _23393__$1 = this;return self__.meta23392;
});
cljs.core.async.t23391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23393,meta23392__$1){var self__ = this;
var _23393__$1 = this;return (new cljs.core.async.t23391(self__.f,self__.fn_handler,meta23392__$1));
});
cljs.core.async.__GT_t23391 = (function __GT_t23391(f__$1,fn_handler__$1,meta23392){return (new cljs.core.async.t23391(f__$1,fn_handler__$1,meta23392));
});
}
return (new cljs.core.async.t23391(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23395 = buff;if(G__23395)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23395.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23395.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23395);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23395);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_23396 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23396);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23396,ret){
return (function (){return fn1.call(null,val_23396);
});})(val_23396,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23397 = n;var x_23398 = (0);while(true){
if((x_23398 < n__4508__auto___23397))
{(a[x_23398] = (0));
{
var G__23399 = (x_23398 + (1));
x_23398 = G__23399;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__23400 = (i + (1));
i = G__23400;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23404 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23404 = (function (flag,alt_flag,meta23405){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23405 = meta23405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23404.cljs$lang$type = true;
cljs.core.async.t23404.cljs$lang$ctorStr = "cljs.core.async/t23404";
cljs.core.async.t23404.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23404");
});})(flag))
;
cljs.core.async.t23404.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23404.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23404.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23404.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23406){var self__ = this;
var _23406__$1 = this;return self__.meta23405;
});})(flag))
;
cljs.core.async.t23404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23406,meta23405__$1){var self__ = this;
var _23406__$1 = this;return (new cljs.core.async.t23404(self__.flag,self__.alt_flag,meta23405__$1));
});})(flag))
;
cljs.core.async.__GT_t23404 = ((function (flag){
return (function __GT_t23404(flag__$1,alt_flag__$1,meta23405){return (new cljs.core.async.t23404(flag__$1,alt_flag__$1,meta23405));
});})(flag))
;
}
return (new cljs.core.async.t23404(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23410 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23410 = (function (cb,flag,alt_handler,meta23411){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23411 = meta23411;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23410.cljs$lang$type = true;
cljs.core.async.t23410.cljs$lang$ctorStr = "cljs.core.async/t23410";
cljs.core.async.t23410.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23410");
});
cljs.core.async.t23410.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23410.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23410.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23412){var self__ = this;
var _23412__$1 = this;return self__.meta23411;
});
cljs.core.async.t23410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23412,meta23411__$1){var self__ = this;
var _23412__$1 = this;return (new cljs.core.async.t23410(self__.cb,self__.flag,self__.alt_handler,meta23411__$1));
});
cljs.core.async.__GT_t23410 = (function __GT_t23410(cb__$1,flag__$1,alt_handler__$1,meta23411){return (new cljs.core.async.t23410(cb__$1,flag__$1,alt_handler__$1,meta23411));
});
}
return (new cljs.core.async.t23410(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23413_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23413_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23414_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23414_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3639__auto__ = wport;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23415 = (i + (1));
i = G__23415;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3639__auto__ = ret;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3627__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3627__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__23416){var map__23418 = p__23416;var map__23418__$1 = ((cljs.core.seq_QMARK_.call(null,map__23418))?cljs.core.apply.call(null,cljs.core.hash_map,map__23418):map__23418);var opts = map__23418__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23416 = null;if (arguments.length > 1) {
  p__23416 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23416);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23419){
var ports = cljs.core.first(arglist__23419);
var p__23416 = cljs.core.rest(arglist__23419);
return alts_BANG___delegate(ports,p__23416);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23514 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23514){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23514){
return (function (state_23490){var state_val_23491 = (state_23490[(1)]);if((state_val_23491 === (7)))
{var inst_23486 = (state_23490[(2)]);var state_23490__$1 = state_23490;var statearr_23492_23515 = state_23490__$1;(statearr_23492_23515[(2)] = inst_23486);
(statearr_23492_23515[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23491 === (1)))
{var state_23490__$1 = state_23490;var statearr_23493_23516 = state_23490__$1;(statearr_23493_23516[(2)] = null);
(statearr_23493_23516[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23491 === (4)))
{var inst_23469 = (state_23490[(7)]);var inst_23469__$1 = (state_23490[(2)]);var inst_23470 = (inst_23469__$1 == null);var state_23490__$1 = (function (){var statearr_23494 = state_23490;(statearr_23494[(7)] = inst_23469__$1);
return statearr_23494;
})();if(cljs.core.truth_(inst_23470))
{var statearr_23495_23517 = state_23490__$1;(statearr_23495_23517[(1)] = (5));
} else
{var statearr_23496_23518 = state_23490__$1;(statearr_23496_23518[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23491 === (13)))
{var state_23490__$1 = state_23490;var statearr_23497_23519 = state_23490__$1;(statearr_23497_23519[(2)] = null);
(statearr_23497_23519[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23491 === (6)))
{var inst_23469 = (state_23490[(7)]);var state_23490__$1 = state_23490;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23490__$1,(11),to,inst_23469);
} else
{if((state_val_23491 === (3)))
{var inst_23488 = (state_23490[(2)]);var state_23490__$1 = state_23490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23490__$1,inst_23488);
} else
{if((state_val_23491 === (12)))
{var state_23490__$1 = state_23490;var statearr_23498_23520 = state_23490__$1;(statearr_23498_23520[(2)] = null);
(statearr_23498_23520[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23491 === (2)))
{var state_23490__$1 = state_23490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23490__$1,(4),from);
} else
{if((state_val_23491 === (11)))
{var inst_23479 = (state_23490[(2)]);var state_23490__$1 = state_23490;if(cljs.core.truth_(inst_23479))
{var statearr_23499_23521 = state_23490__$1;(statearr_23499_23521[(1)] = (12));
} else
{var statearr_23500_23522 = state_23490__$1;(statearr_23500_23522[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23491 === (9)))
{var state_23490__$1 = state_23490;var statearr_23501_23523 = state_23490__$1;(statearr_23501_23523[(2)] = null);
(statearr_23501_23523[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23491 === (5)))
{var state_23490__$1 = state_23490;if(cljs.core.truth_(close_QMARK_))
{var statearr_23502_23524 = state_23490__$1;(statearr_23502_23524[(1)] = (8));
} else
{var statearr_23503_23525 = state_23490__$1;(statearr_23503_23525[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23491 === (14)))
{var inst_23484 = (state_23490[(2)]);var state_23490__$1 = state_23490;var statearr_23504_23526 = state_23490__$1;(statearr_23504_23526[(2)] = inst_23484);
(statearr_23504_23526[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23491 === (10)))
{var inst_23476 = (state_23490[(2)]);var state_23490__$1 = state_23490;var statearr_23505_23527 = state_23490__$1;(statearr_23505_23527[(2)] = inst_23476);
(statearr_23505_23527[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23491 === (8)))
{var inst_23473 = cljs.core.async.close_BANG_.call(null,to);var state_23490__$1 = state_23490;var statearr_23506_23528 = state_23490__$1;(statearr_23506_23528[(2)] = inst_23473);
(statearr_23506_23528[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___23514))
;return ((function (switch__9110__auto__,c__9125__auto___23514){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23510 = [null,null,null,null,null,null,null,null];(statearr_23510[(0)] = state_machine__9111__auto__);
(statearr_23510[(1)] = (1));
return statearr_23510;
});
var state_machine__9111__auto____1 = (function (state_23490){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23490);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23511){if((e23511 instanceof Object))
{var ex__9114__auto__ = e23511;var statearr_23512_23529 = state_23490;(statearr_23512_23529[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23490);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23511;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23530 = state_23490;
state_23490 = G__23530;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23490){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23514))
})();var state__9127__auto__ = (function (){var statearr_23513 = f__9126__auto__.call(null);(statearr_23513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23514);
return statearr_23513;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23514))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__23714){var vec__23715 = p__23714;var v = cljs.core.nth.call(null,vec__23715,(0),null);var p = cljs.core.nth.call(null,vec__23715,(1),null);var job = vec__23715;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___23897 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23897,res,vec__23715,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23897,res,vec__23715,v,p,job,jobs,results){
return (function (state_23720){var state_val_23721 = (state_23720[(1)]);if((state_val_23721 === (2)))
{var inst_23717 = (state_23720[(2)]);var inst_23718 = cljs.core.async.close_BANG_.call(null,res);var state_23720__$1 = (function (){var statearr_23722 = state_23720;(statearr_23722[(7)] = inst_23717);
return statearr_23722;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23720__$1,inst_23718);
} else
{if((state_val_23721 === (1)))
{var state_23720__$1 = state_23720;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23720__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___23897,res,vec__23715,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___23897,res,vec__23715,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23726 = [null,null,null,null,null,null,null,null];(statearr_23726[(0)] = state_machine__9111__auto__);
(statearr_23726[(1)] = (1));
return statearr_23726;
});
var state_machine__9111__auto____1 = (function (state_23720){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23720);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23727){if((e23727 instanceof Object))
{var ex__9114__auto__ = e23727;var statearr_23728_23898 = state_23720;(statearr_23728_23898[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23720);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23727;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23899 = state_23720;
state_23720 = G__23899;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23720){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23897,res,vec__23715,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23729 = f__9126__auto__.call(null);(statearr_23729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23897);
return statearr_23729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23897,res,vec__23715,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23730){var vec__23731 = p__23730;var v = cljs.core.nth.call(null,vec__23731,(0),null);var p = cljs.core.nth.call(null,vec__23731,(1),null);var job = vec__23731;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___23900 = n;var __23901 = (0);while(true){
if((__23901 < n__4508__auto___23900))
{var G__23732_23902 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23732_23902) {
case "async":
var c__9125__auto___23904 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23901,c__9125__auto___23904,G__23732_23902,n__4508__auto___23900,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23901,c__9125__auto___23904,G__23732_23902,n__4508__auto___23900,jobs,results,process,async){
return (function (state_23745){var state_val_23746 = (state_23745[(1)]);if((state_val_23746 === (7)))
{var inst_23741 = (state_23745[(2)]);var state_23745__$1 = state_23745;var statearr_23747_23905 = state_23745__$1;(statearr_23747_23905[(2)] = inst_23741);
(statearr_23747_23905[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23746 === (6)))
{var state_23745__$1 = state_23745;var statearr_23748_23906 = state_23745__$1;(statearr_23748_23906[(2)] = null);
(statearr_23748_23906[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23746 === (5)))
{var state_23745__$1 = state_23745;var statearr_23749_23907 = state_23745__$1;(statearr_23749_23907[(2)] = null);
(statearr_23749_23907[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23746 === (4)))
{var inst_23735 = (state_23745[(2)]);var inst_23736 = async.call(null,inst_23735);var state_23745__$1 = state_23745;if(cljs.core.truth_(inst_23736))
{var statearr_23750_23908 = state_23745__$1;(statearr_23750_23908[(1)] = (5));
} else
{var statearr_23751_23909 = state_23745__$1;(statearr_23751_23909[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23746 === (3)))
{var inst_23743 = (state_23745[(2)]);var state_23745__$1 = state_23745;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23745__$1,inst_23743);
} else
{if((state_val_23746 === (2)))
{var state_23745__$1 = state_23745;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23745__$1,(4),jobs);
} else
{if((state_val_23746 === (1)))
{var state_23745__$1 = state_23745;var statearr_23752_23910 = state_23745__$1;(statearr_23752_23910[(2)] = null);
(statearr_23752_23910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__23901,c__9125__auto___23904,G__23732_23902,n__4508__auto___23900,jobs,results,process,async))
;return ((function (__23901,switch__9110__auto__,c__9125__auto___23904,G__23732_23902,n__4508__auto___23900,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23756 = [null,null,null,null,null,null,null];(statearr_23756[(0)] = state_machine__9111__auto__);
(statearr_23756[(1)] = (1));
return statearr_23756;
});
var state_machine__9111__auto____1 = (function (state_23745){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23745);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23757){if((e23757 instanceof Object))
{var ex__9114__auto__ = e23757;var statearr_23758_23911 = state_23745;(statearr_23758_23911[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23745);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23757;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23912 = state_23745;
state_23745 = G__23912;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23745){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23901,switch__9110__auto__,c__9125__auto___23904,G__23732_23902,n__4508__auto___23900,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23759 = f__9126__auto__.call(null);(statearr_23759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23904);
return statearr_23759;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23901,c__9125__auto___23904,G__23732_23902,n__4508__auto___23900,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___23913 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23901,c__9125__auto___23913,G__23732_23902,n__4508__auto___23900,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23901,c__9125__auto___23913,G__23732_23902,n__4508__auto___23900,jobs,results,process,async){
return (function (state_23772){var state_val_23773 = (state_23772[(1)]);if((state_val_23773 === (7)))
{var inst_23768 = (state_23772[(2)]);var state_23772__$1 = state_23772;var statearr_23774_23914 = state_23772__$1;(statearr_23774_23914[(2)] = inst_23768);
(statearr_23774_23914[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23773 === (6)))
{var state_23772__$1 = state_23772;var statearr_23775_23915 = state_23772__$1;(statearr_23775_23915[(2)] = null);
(statearr_23775_23915[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23773 === (5)))
{var state_23772__$1 = state_23772;var statearr_23776_23916 = state_23772__$1;(statearr_23776_23916[(2)] = null);
(statearr_23776_23916[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23773 === (4)))
{var inst_23762 = (state_23772[(2)]);var inst_23763 = process.call(null,inst_23762);var state_23772__$1 = state_23772;if(cljs.core.truth_(inst_23763))
{var statearr_23777_23917 = state_23772__$1;(statearr_23777_23917[(1)] = (5));
} else
{var statearr_23778_23918 = state_23772__$1;(statearr_23778_23918[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23773 === (3)))
{var inst_23770 = (state_23772[(2)]);var state_23772__$1 = state_23772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23772__$1,inst_23770);
} else
{if((state_val_23773 === (2)))
{var state_23772__$1 = state_23772;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23772__$1,(4),jobs);
} else
{if((state_val_23773 === (1)))
{var state_23772__$1 = state_23772;var statearr_23779_23919 = state_23772__$1;(statearr_23779_23919[(2)] = null);
(statearr_23779_23919[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__23901,c__9125__auto___23913,G__23732_23902,n__4508__auto___23900,jobs,results,process,async))
;return ((function (__23901,switch__9110__auto__,c__9125__auto___23913,G__23732_23902,n__4508__auto___23900,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23783 = [null,null,null,null,null,null,null];(statearr_23783[(0)] = state_machine__9111__auto__);
(statearr_23783[(1)] = (1));
return statearr_23783;
});
var state_machine__9111__auto____1 = (function (state_23772){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23772);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23784){if((e23784 instanceof Object))
{var ex__9114__auto__ = e23784;var statearr_23785_23920 = state_23772;(statearr_23785_23920[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23772);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23784;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23921 = state_23772;
state_23772 = G__23921;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23772){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23901,switch__9110__auto__,c__9125__auto___23913,G__23732_23902,n__4508__auto___23900,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23786 = f__9126__auto__.call(null);(statearr_23786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23913);
return statearr_23786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23901,c__9125__auto___23913,G__23732_23902,n__4508__auto___23900,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__23922 = (__23901 + (1));
__23901 = G__23922;
continue;
}
} else
{}
break;
}
var c__9125__auto___23923 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23923,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23923,jobs,results,process,async){
return (function (state_23808){var state_val_23809 = (state_23808[(1)]);if((state_val_23809 === (9)))
{var inst_23801 = (state_23808[(2)]);var state_23808__$1 = (function (){var statearr_23810 = state_23808;(statearr_23810[(7)] = inst_23801);
return statearr_23810;
})();var statearr_23811_23924 = state_23808__$1;(statearr_23811_23924[(2)] = null);
(statearr_23811_23924[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23809 === (8)))
{var inst_23794 = (state_23808[(8)]);var inst_23799 = (state_23808[(2)]);var state_23808__$1 = (function (){var statearr_23812 = state_23808;(statearr_23812[(9)] = inst_23799);
return statearr_23812;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23808__$1,(9),results,inst_23794);
} else
{if((state_val_23809 === (7)))
{var inst_23804 = (state_23808[(2)]);var state_23808__$1 = state_23808;var statearr_23813_23925 = state_23808__$1;(statearr_23813_23925[(2)] = inst_23804);
(statearr_23813_23925[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23809 === (6)))
{var inst_23789 = (state_23808[(10)]);var inst_23794 = (state_23808[(8)]);var inst_23794__$1 = cljs.core.async.chan.call(null,(1));var inst_23795 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23796 = [inst_23789,inst_23794__$1];var inst_23797 = (new cljs.core.PersistentVector(null,2,(5),inst_23795,inst_23796,null));var state_23808__$1 = (function (){var statearr_23814 = state_23808;(statearr_23814[(8)] = inst_23794__$1);
return statearr_23814;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23808__$1,(8),jobs,inst_23797);
} else
{if((state_val_23809 === (5)))
{var inst_23792 = cljs.core.async.close_BANG_.call(null,jobs);var state_23808__$1 = state_23808;var statearr_23815_23926 = state_23808__$1;(statearr_23815_23926[(2)] = inst_23792);
(statearr_23815_23926[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23809 === (4)))
{var inst_23789 = (state_23808[(10)]);var inst_23789__$1 = (state_23808[(2)]);var inst_23790 = (inst_23789__$1 == null);var state_23808__$1 = (function (){var statearr_23816 = state_23808;(statearr_23816[(10)] = inst_23789__$1);
return statearr_23816;
})();if(cljs.core.truth_(inst_23790))
{var statearr_23817_23927 = state_23808__$1;(statearr_23817_23927[(1)] = (5));
} else
{var statearr_23818_23928 = state_23808__$1;(statearr_23818_23928[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23809 === (3)))
{var inst_23806 = (state_23808[(2)]);var state_23808__$1 = state_23808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23808__$1,inst_23806);
} else
{if((state_val_23809 === (2)))
{var state_23808__$1 = state_23808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23808__$1,(4),from);
} else
{if((state_val_23809 === (1)))
{var state_23808__$1 = state_23808;var statearr_23819_23929 = state_23808__$1;(statearr_23819_23929[(2)] = null);
(statearr_23819_23929[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___23923,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___23923,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23823 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23823[(0)] = state_machine__9111__auto__);
(statearr_23823[(1)] = (1));
return statearr_23823;
});
var state_machine__9111__auto____1 = (function (state_23808){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23808);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23824){if((e23824 instanceof Object))
{var ex__9114__auto__ = e23824;var statearr_23825_23930 = state_23808;(statearr_23825_23930[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23808);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23824;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23931 = state_23808;
state_23808 = G__23931;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23808){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23923,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23826 = f__9126__auto__.call(null);(statearr_23826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23923);
return statearr_23826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23923,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23864){var state_val_23865 = (state_23864[(1)]);if((state_val_23865 === (7)))
{var inst_23860 = (state_23864[(2)]);var state_23864__$1 = state_23864;var statearr_23866_23932 = state_23864__$1;(statearr_23866_23932[(2)] = inst_23860);
(statearr_23866_23932[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23865 === (20)))
{var state_23864__$1 = state_23864;var statearr_23867_23933 = state_23864__$1;(statearr_23867_23933[(2)] = null);
(statearr_23867_23933[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23865 === (1)))
{var state_23864__$1 = state_23864;var statearr_23868_23934 = state_23864__$1;(statearr_23868_23934[(2)] = null);
(statearr_23868_23934[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23865 === (4)))
{var inst_23829 = (state_23864[(7)]);var inst_23829__$1 = (state_23864[(2)]);var inst_23830 = (inst_23829__$1 == null);var state_23864__$1 = (function (){var statearr_23869 = state_23864;(statearr_23869[(7)] = inst_23829__$1);
return statearr_23869;
})();if(cljs.core.truth_(inst_23830))
{var statearr_23870_23935 = state_23864__$1;(statearr_23870_23935[(1)] = (5));
} else
{var statearr_23871_23936 = state_23864__$1;(statearr_23871_23936[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23865 === (15)))
{var inst_23842 = (state_23864[(8)]);var state_23864__$1 = state_23864;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23864__$1,(18),to,inst_23842);
} else
{if((state_val_23865 === (21)))
{var inst_23855 = (state_23864[(2)]);var state_23864__$1 = state_23864;var statearr_23872_23937 = state_23864__$1;(statearr_23872_23937[(2)] = inst_23855);
(statearr_23872_23937[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23865 === (13)))
{var inst_23857 = (state_23864[(2)]);var state_23864__$1 = (function (){var statearr_23873 = state_23864;(statearr_23873[(9)] = inst_23857);
return statearr_23873;
})();var statearr_23874_23938 = state_23864__$1;(statearr_23874_23938[(2)] = null);
(statearr_23874_23938[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23865 === (6)))
{var inst_23829 = (state_23864[(7)]);var state_23864__$1 = state_23864;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23864__$1,(11),inst_23829);
} else
{if((state_val_23865 === (17)))
{var inst_23850 = (state_23864[(2)]);var state_23864__$1 = state_23864;if(cljs.core.truth_(inst_23850))
{var statearr_23875_23939 = state_23864__$1;(statearr_23875_23939[(1)] = (19));
} else
{var statearr_23876_23940 = state_23864__$1;(statearr_23876_23940[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23865 === (3)))
{var inst_23862 = (state_23864[(2)]);var state_23864__$1 = state_23864;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23864__$1,inst_23862);
} else
{if((state_val_23865 === (12)))
{var inst_23839 = (state_23864[(10)]);var state_23864__$1 = state_23864;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23864__$1,(14),inst_23839);
} else
{if((state_val_23865 === (2)))
{var state_23864__$1 = state_23864;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23864__$1,(4),results);
} else
{if((state_val_23865 === (19)))
{var state_23864__$1 = state_23864;var statearr_23877_23941 = state_23864__$1;(statearr_23877_23941[(2)] = null);
(statearr_23877_23941[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23865 === (11)))
{var inst_23839 = (state_23864[(2)]);var state_23864__$1 = (function (){var statearr_23878 = state_23864;(statearr_23878[(10)] = inst_23839);
return statearr_23878;
})();var statearr_23879_23942 = state_23864__$1;(statearr_23879_23942[(2)] = null);
(statearr_23879_23942[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23865 === (9)))
{var state_23864__$1 = state_23864;var statearr_23880_23943 = state_23864__$1;(statearr_23880_23943[(2)] = null);
(statearr_23880_23943[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23865 === (5)))
{var state_23864__$1 = state_23864;if(cljs.core.truth_(close_QMARK_))
{var statearr_23881_23944 = state_23864__$1;(statearr_23881_23944[(1)] = (8));
} else
{var statearr_23882_23945 = state_23864__$1;(statearr_23882_23945[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23865 === (14)))
{var inst_23842 = (state_23864[(8)]);var inst_23844 = (state_23864[(11)]);var inst_23842__$1 = (state_23864[(2)]);var inst_23843 = (inst_23842__$1 == null);var inst_23844__$1 = cljs.core.not.call(null,inst_23843);var state_23864__$1 = (function (){var statearr_23883 = state_23864;(statearr_23883[(8)] = inst_23842__$1);
(statearr_23883[(11)] = inst_23844__$1);
return statearr_23883;
})();if(inst_23844__$1)
{var statearr_23884_23946 = state_23864__$1;(statearr_23884_23946[(1)] = (15));
} else
{var statearr_23885_23947 = state_23864__$1;(statearr_23885_23947[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23865 === (16)))
{var inst_23844 = (state_23864[(11)]);var state_23864__$1 = state_23864;var statearr_23886_23948 = state_23864__$1;(statearr_23886_23948[(2)] = inst_23844);
(statearr_23886_23948[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23865 === (10)))
{var inst_23836 = (state_23864[(2)]);var state_23864__$1 = state_23864;var statearr_23887_23949 = state_23864__$1;(statearr_23887_23949[(2)] = inst_23836);
(statearr_23887_23949[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23865 === (18)))
{var inst_23847 = (state_23864[(2)]);var state_23864__$1 = state_23864;var statearr_23888_23950 = state_23864__$1;(statearr_23888_23950[(2)] = inst_23847);
(statearr_23888_23950[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23865 === (8)))
{var inst_23833 = cljs.core.async.close_BANG_.call(null,to);var state_23864__$1 = state_23864;var statearr_23889_23951 = state_23864__$1;(statearr_23889_23951[(2)] = inst_23833);
(statearr_23889_23951[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto__,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto__,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23893 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23893[(0)] = state_machine__9111__auto__);
(statearr_23893[(1)] = (1));
return statearr_23893;
});
var state_machine__9111__auto____1 = (function (state_23864){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23864);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23894){if((e23894 instanceof Object))
{var ex__9114__auto__ = e23894;var statearr_23895_23952 = state_23864;(statearr_23895_23952[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23864);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23894;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23953 = state_23864;
state_23864 = G__23953;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23864){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23896 = f__9126__auto__.call(null);(statearr_23896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,jobs,results,process,async))
);
return c__9125__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___24054 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24054,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24054,tc,fc){
return (function (state_24029){var state_val_24030 = (state_24029[(1)]);if((state_val_24030 === (7)))
{var inst_24025 = (state_24029[(2)]);var state_24029__$1 = state_24029;var statearr_24031_24055 = state_24029__$1;(statearr_24031_24055[(2)] = inst_24025);
(statearr_24031_24055[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24030 === (1)))
{var state_24029__$1 = state_24029;var statearr_24032_24056 = state_24029__$1;(statearr_24032_24056[(2)] = null);
(statearr_24032_24056[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24030 === (4)))
{var inst_24006 = (state_24029[(7)]);var inst_24006__$1 = (state_24029[(2)]);var inst_24007 = (inst_24006__$1 == null);var state_24029__$1 = (function (){var statearr_24033 = state_24029;(statearr_24033[(7)] = inst_24006__$1);
return statearr_24033;
})();if(cljs.core.truth_(inst_24007))
{var statearr_24034_24057 = state_24029__$1;(statearr_24034_24057[(1)] = (5));
} else
{var statearr_24035_24058 = state_24029__$1;(statearr_24035_24058[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24030 === (13)))
{var state_24029__$1 = state_24029;var statearr_24036_24059 = state_24029__$1;(statearr_24036_24059[(2)] = null);
(statearr_24036_24059[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24030 === (6)))
{var inst_24006 = (state_24029[(7)]);var inst_24012 = p.call(null,inst_24006);var state_24029__$1 = state_24029;if(cljs.core.truth_(inst_24012))
{var statearr_24037_24060 = state_24029__$1;(statearr_24037_24060[(1)] = (9));
} else
{var statearr_24038_24061 = state_24029__$1;(statearr_24038_24061[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24030 === (3)))
{var inst_24027 = (state_24029[(2)]);var state_24029__$1 = state_24029;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24029__$1,inst_24027);
} else
{if((state_val_24030 === (12)))
{var state_24029__$1 = state_24029;var statearr_24039_24062 = state_24029__$1;(statearr_24039_24062[(2)] = null);
(statearr_24039_24062[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24030 === (2)))
{var state_24029__$1 = state_24029;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24029__$1,(4),ch);
} else
{if((state_val_24030 === (11)))
{var inst_24006 = (state_24029[(7)]);var inst_24016 = (state_24029[(2)]);var state_24029__$1 = state_24029;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24029__$1,(8),inst_24016,inst_24006);
} else
{if((state_val_24030 === (9)))
{var state_24029__$1 = state_24029;var statearr_24040_24063 = state_24029__$1;(statearr_24040_24063[(2)] = tc);
(statearr_24040_24063[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24030 === (5)))
{var inst_24009 = cljs.core.async.close_BANG_.call(null,tc);var inst_24010 = cljs.core.async.close_BANG_.call(null,fc);var state_24029__$1 = (function (){var statearr_24041 = state_24029;(statearr_24041[(8)] = inst_24009);
return statearr_24041;
})();var statearr_24042_24064 = state_24029__$1;(statearr_24042_24064[(2)] = inst_24010);
(statearr_24042_24064[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24030 === (14)))
{var inst_24023 = (state_24029[(2)]);var state_24029__$1 = state_24029;var statearr_24043_24065 = state_24029__$1;(statearr_24043_24065[(2)] = inst_24023);
(statearr_24043_24065[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24030 === (10)))
{var state_24029__$1 = state_24029;var statearr_24044_24066 = state_24029__$1;(statearr_24044_24066[(2)] = fc);
(statearr_24044_24066[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24030 === (8)))
{var inst_24018 = (state_24029[(2)]);var state_24029__$1 = state_24029;if(cljs.core.truth_(inst_24018))
{var statearr_24045_24067 = state_24029__$1;(statearr_24045_24067[(1)] = (12));
} else
{var statearr_24046_24068 = state_24029__$1;(statearr_24046_24068[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___24054,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___24054,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24050 = [null,null,null,null,null,null,null,null,null];(statearr_24050[(0)] = state_machine__9111__auto__);
(statearr_24050[(1)] = (1));
return statearr_24050;
});
var state_machine__9111__auto____1 = (function (state_24029){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24029);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24051){if((e24051 instanceof Object))
{var ex__9114__auto__ = e24051;var statearr_24052_24069 = state_24029;(statearr_24052_24069[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24029);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24051;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24070 = state_24029;
state_24029 = G__24070;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24029){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24054,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_24053 = f__9126__auto__.call(null);(statearr_24053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24054);
return statearr_24053;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24054,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_24117){var state_val_24118 = (state_24117[(1)]);if((state_val_24118 === (7)))
{var inst_24113 = (state_24117[(2)]);var state_24117__$1 = state_24117;var statearr_24119_24135 = state_24117__$1;(statearr_24119_24135[(2)] = inst_24113);
(statearr_24119_24135[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24118 === (6)))
{var inst_24103 = (state_24117[(7)]);var inst_24106 = (state_24117[(8)]);var inst_24110 = f.call(null,inst_24103,inst_24106);var inst_24103__$1 = inst_24110;var state_24117__$1 = (function (){var statearr_24120 = state_24117;(statearr_24120[(7)] = inst_24103__$1);
return statearr_24120;
})();var statearr_24121_24136 = state_24117__$1;(statearr_24121_24136[(2)] = null);
(statearr_24121_24136[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24118 === (5)))
{var inst_24103 = (state_24117[(7)]);var state_24117__$1 = state_24117;var statearr_24122_24137 = state_24117__$1;(statearr_24122_24137[(2)] = inst_24103);
(statearr_24122_24137[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24118 === (4)))
{var inst_24106 = (state_24117[(8)]);var inst_24106__$1 = (state_24117[(2)]);var inst_24107 = (inst_24106__$1 == null);var state_24117__$1 = (function (){var statearr_24123 = state_24117;(statearr_24123[(8)] = inst_24106__$1);
return statearr_24123;
})();if(cljs.core.truth_(inst_24107))
{var statearr_24124_24138 = state_24117__$1;(statearr_24124_24138[(1)] = (5));
} else
{var statearr_24125_24139 = state_24117__$1;(statearr_24125_24139[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24118 === (3)))
{var inst_24115 = (state_24117[(2)]);var state_24117__$1 = state_24117;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24117__$1,inst_24115);
} else
{if((state_val_24118 === (2)))
{var state_24117__$1 = state_24117;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24117__$1,(4),ch);
} else
{if((state_val_24118 === (1)))
{var inst_24103 = init;var state_24117__$1 = (function (){var statearr_24126 = state_24117;(statearr_24126[(7)] = inst_24103);
return statearr_24126;
})();var statearr_24127_24140 = state_24117__$1;(statearr_24127_24140[(2)] = null);
(statearr_24127_24140[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24131 = [null,null,null,null,null,null,null,null,null];(statearr_24131[(0)] = state_machine__9111__auto__);
(statearr_24131[(1)] = (1));
return statearr_24131;
});
var state_machine__9111__auto____1 = (function (state_24117){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24117);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24132){if((e24132 instanceof Object))
{var ex__9114__auto__ = e24132;var statearr_24133_24141 = state_24117;(statearr_24133_24141[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24117);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24132;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24142 = state_24117;
state_24117 = G__24142;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24117){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24134 = f__9126__auto__.call(null);(statearr_24134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24134;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_24216){var state_val_24217 = (state_24216[(1)]);if((state_val_24217 === (7)))
{var inst_24198 = (state_24216[(2)]);var state_24216__$1 = state_24216;var statearr_24218_24241 = state_24216__$1;(statearr_24218_24241[(2)] = inst_24198);
(statearr_24218_24241[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24217 === (1)))
{var inst_24192 = cljs.core.seq.call(null,coll);var inst_24193 = inst_24192;var state_24216__$1 = (function (){var statearr_24219 = state_24216;(statearr_24219[(7)] = inst_24193);
return statearr_24219;
})();var statearr_24220_24242 = state_24216__$1;(statearr_24220_24242[(2)] = null);
(statearr_24220_24242[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24217 === (4)))
{var inst_24193 = (state_24216[(7)]);var inst_24196 = cljs.core.first.call(null,inst_24193);var state_24216__$1 = state_24216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24216__$1,(7),ch,inst_24196);
} else
{if((state_val_24217 === (13)))
{var inst_24210 = (state_24216[(2)]);var state_24216__$1 = state_24216;var statearr_24221_24243 = state_24216__$1;(statearr_24221_24243[(2)] = inst_24210);
(statearr_24221_24243[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24217 === (6)))
{var inst_24201 = (state_24216[(2)]);var state_24216__$1 = state_24216;if(cljs.core.truth_(inst_24201))
{var statearr_24222_24244 = state_24216__$1;(statearr_24222_24244[(1)] = (8));
} else
{var statearr_24223_24245 = state_24216__$1;(statearr_24223_24245[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24217 === (3)))
{var inst_24214 = (state_24216[(2)]);var state_24216__$1 = state_24216;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24216__$1,inst_24214);
} else
{if((state_val_24217 === (12)))
{var state_24216__$1 = state_24216;var statearr_24224_24246 = state_24216__$1;(statearr_24224_24246[(2)] = null);
(statearr_24224_24246[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24217 === (2)))
{var inst_24193 = (state_24216[(7)]);var state_24216__$1 = state_24216;if(cljs.core.truth_(inst_24193))
{var statearr_24225_24247 = state_24216__$1;(statearr_24225_24247[(1)] = (4));
} else
{var statearr_24226_24248 = state_24216__$1;(statearr_24226_24248[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24217 === (11)))
{var inst_24207 = cljs.core.async.close_BANG_.call(null,ch);var state_24216__$1 = state_24216;var statearr_24227_24249 = state_24216__$1;(statearr_24227_24249[(2)] = inst_24207);
(statearr_24227_24249[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24217 === (9)))
{var state_24216__$1 = state_24216;if(cljs.core.truth_(close_QMARK_))
{var statearr_24228_24250 = state_24216__$1;(statearr_24228_24250[(1)] = (11));
} else
{var statearr_24229_24251 = state_24216__$1;(statearr_24229_24251[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24217 === (5)))
{var inst_24193 = (state_24216[(7)]);var state_24216__$1 = state_24216;var statearr_24230_24252 = state_24216__$1;(statearr_24230_24252[(2)] = inst_24193);
(statearr_24230_24252[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24217 === (10)))
{var inst_24212 = (state_24216[(2)]);var state_24216__$1 = state_24216;var statearr_24231_24253 = state_24216__$1;(statearr_24231_24253[(2)] = inst_24212);
(statearr_24231_24253[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24217 === (8)))
{var inst_24193 = (state_24216[(7)]);var inst_24203 = cljs.core.next.call(null,inst_24193);var inst_24193__$1 = inst_24203;var state_24216__$1 = (function (){var statearr_24232 = state_24216;(statearr_24232[(7)] = inst_24193__$1);
return statearr_24232;
})();var statearr_24233_24254 = state_24216__$1;(statearr_24233_24254[(2)] = null);
(statearr_24233_24254[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24237 = [null,null,null,null,null,null,null,null];(statearr_24237[(0)] = state_machine__9111__auto__);
(statearr_24237[(1)] = (1));
return statearr_24237;
});
var state_machine__9111__auto____1 = (function (state_24216){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24216);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24238){if((e24238 instanceof Object))
{var ex__9114__auto__ = e24238;var statearr_24239_24255 = state_24216;(statearr_24239_24255[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24216);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24238;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24256 = state_24216;
state_24216 = G__24256;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24216){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24240 = f__9126__auto__.call(null);(statearr_24240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24240;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj24258 = {};return obj24258;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3627__auto__ = _;if(and__3627__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4275__auto__ = (((_ == null))?null:_);return (function (){var or__3639__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24260 = {};return obj24260;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24482 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24482 = (function (cs,ch,mult,meta24483){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24483 = meta24483;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24482.cljs$lang$type = true;
cljs.core.async.t24482.cljs$lang$ctorStr = "cljs.core.async/t24482";
cljs.core.async.t24482.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24482");
});})(cs))
;
cljs.core.async.t24482.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24482.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24482.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24482.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24482.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24482.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24484){var self__ = this;
var _24484__$1 = this;return self__.meta24483;
});})(cs))
;
cljs.core.async.t24482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24484,meta24483__$1){var self__ = this;
var _24484__$1 = this;return (new cljs.core.async.t24482(self__.cs,self__.ch,self__.mult,meta24483__$1));
});})(cs))
;
cljs.core.async.__GT_t24482 = ((function (cs){
return (function __GT_t24482(cs__$1,ch__$1,mult__$1,meta24483){return (new cljs.core.async.t24482(cs__$1,ch__$1,mult__$1,meta24483));
});})(cs))
;
}
return (new cljs.core.async.t24482(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24703 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24703,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24703,cs,m,dchan,dctr,done){
return (function (state_24615){var state_val_24616 = (state_24615[(1)]);if((state_val_24616 === (7)))
{var inst_24611 = (state_24615[(2)]);var state_24615__$1 = state_24615;var statearr_24617_24704 = state_24615__$1;(statearr_24617_24704[(2)] = inst_24611);
(statearr_24617_24704[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (20)))
{var inst_24516 = (state_24615[(7)]);var inst_24526 = cljs.core.first.call(null,inst_24516);var inst_24527 = cljs.core.nth.call(null,inst_24526,(0),null);var inst_24528 = cljs.core.nth.call(null,inst_24526,(1),null);var state_24615__$1 = (function (){var statearr_24618 = state_24615;(statearr_24618[(8)] = inst_24527);
return statearr_24618;
})();if(cljs.core.truth_(inst_24528))
{var statearr_24619_24705 = state_24615__$1;(statearr_24619_24705[(1)] = (22));
} else
{var statearr_24620_24706 = state_24615__$1;(statearr_24620_24706[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (27)))
{var inst_24558 = (state_24615[(9)]);var inst_24556 = (state_24615[(10)]);var inst_24563 = (state_24615[(11)]);var inst_24487 = (state_24615[(12)]);var inst_24563__$1 = cljs.core._nth.call(null,inst_24556,inst_24558);var inst_24564 = cljs.core.async.put_BANG_.call(null,inst_24563__$1,inst_24487,done);var state_24615__$1 = (function (){var statearr_24621 = state_24615;(statearr_24621[(11)] = inst_24563__$1);
return statearr_24621;
})();if(cljs.core.truth_(inst_24564))
{var statearr_24622_24707 = state_24615__$1;(statearr_24622_24707[(1)] = (30));
} else
{var statearr_24623_24708 = state_24615__$1;(statearr_24623_24708[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (1)))
{var state_24615__$1 = state_24615;var statearr_24624_24709 = state_24615__$1;(statearr_24624_24709[(2)] = null);
(statearr_24624_24709[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (24)))
{var inst_24516 = (state_24615[(7)]);var inst_24533 = (state_24615[(2)]);var inst_24534 = cljs.core.next.call(null,inst_24516);var inst_24496 = inst_24534;var inst_24497 = null;var inst_24498 = (0);var inst_24499 = (0);var state_24615__$1 = (function (){var statearr_24625 = state_24615;(statearr_24625[(13)] = inst_24498);
(statearr_24625[(14)] = inst_24497);
(statearr_24625[(15)] = inst_24496);
(statearr_24625[(16)] = inst_24533);
(statearr_24625[(17)] = inst_24499);
return statearr_24625;
})();var statearr_24626_24710 = state_24615__$1;(statearr_24626_24710[(2)] = null);
(statearr_24626_24710[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (39)))
{var state_24615__$1 = state_24615;var statearr_24630_24711 = state_24615__$1;(statearr_24630_24711[(2)] = null);
(statearr_24630_24711[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (4)))
{var inst_24487 = (state_24615[(12)]);var inst_24487__$1 = (state_24615[(2)]);var inst_24488 = (inst_24487__$1 == null);var state_24615__$1 = (function (){var statearr_24631 = state_24615;(statearr_24631[(12)] = inst_24487__$1);
return statearr_24631;
})();if(cljs.core.truth_(inst_24488))
{var statearr_24632_24712 = state_24615__$1;(statearr_24632_24712[(1)] = (5));
} else
{var statearr_24633_24713 = state_24615__$1;(statearr_24633_24713[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (15)))
{var inst_24498 = (state_24615[(13)]);var inst_24497 = (state_24615[(14)]);var inst_24496 = (state_24615[(15)]);var inst_24499 = (state_24615[(17)]);var inst_24512 = (state_24615[(2)]);var inst_24513 = (inst_24499 + (1));var tmp24627 = inst_24498;var tmp24628 = inst_24497;var tmp24629 = inst_24496;var inst_24496__$1 = tmp24629;var inst_24497__$1 = tmp24628;var inst_24498__$1 = tmp24627;var inst_24499__$1 = inst_24513;var state_24615__$1 = (function (){var statearr_24634 = state_24615;(statearr_24634[(18)] = inst_24512);
(statearr_24634[(13)] = inst_24498__$1);
(statearr_24634[(14)] = inst_24497__$1);
(statearr_24634[(15)] = inst_24496__$1);
(statearr_24634[(17)] = inst_24499__$1);
return statearr_24634;
})();var statearr_24635_24714 = state_24615__$1;(statearr_24635_24714[(2)] = null);
(statearr_24635_24714[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (21)))
{var inst_24537 = (state_24615[(2)]);var state_24615__$1 = state_24615;var statearr_24639_24715 = state_24615__$1;(statearr_24639_24715[(2)] = inst_24537);
(statearr_24639_24715[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (31)))
{var inst_24563 = (state_24615[(11)]);var inst_24567 = done.call(null,null);var inst_24568 = cljs.core.async.untap_STAR_.call(null,m,inst_24563);var state_24615__$1 = (function (){var statearr_24640 = state_24615;(statearr_24640[(19)] = inst_24567);
return statearr_24640;
})();var statearr_24641_24716 = state_24615__$1;(statearr_24641_24716[(2)] = inst_24568);
(statearr_24641_24716[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (32)))
{var inst_24558 = (state_24615[(9)]);var inst_24557 = (state_24615[(20)]);var inst_24556 = (state_24615[(10)]);var inst_24555 = (state_24615[(21)]);var inst_24570 = (state_24615[(2)]);var inst_24571 = (inst_24558 + (1));var tmp24636 = inst_24557;var tmp24637 = inst_24556;var tmp24638 = inst_24555;var inst_24555__$1 = tmp24638;var inst_24556__$1 = tmp24637;var inst_24557__$1 = tmp24636;var inst_24558__$1 = inst_24571;var state_24615__$1 = (function (){var statearr_24642 = state_24615;(statearr_24642[(9)] = inst_24558__$1);
(statearr_24642[(20)] = inst_24557__$1);
(statearr_24642[(22)] = inst_24570);
(statearr_24642[(10)] = inst_24556__$1);
(statearr_24642[(21)] = inst_24555__$1);
return statearr_24642;
})();var statearr_24643_24717 = state_24615__$1;(statearr_24643_24717[(2)] = null);
(statearr_24643_24717[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (40)))
{var inst_24583 = (state_24615[(23)]);var inst_24587 = done.call(null,null);var inst_24588 = cljs.core.async.untap_STAR_.call(null,m,inst_24583);var state_24615__$1 = (function (){var statearr_24644 = state_24615;(statearr_24644[(24)] = inst_24587);
return statearr_24644;
})();var statearr_24645_24718 = state_24615__$1;(statearr_24645_24718[(2)] = inst_24588);
(statearr_24645_24718[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (33)))
{var inst_24574 = (state_24615[(25)]);var inst_24576 = cljs.core.chunked_seq_QMARK_.call(null,inst_24574);var state_24615__$1 = state_24615;if(inst_24576)
{var statearr_24646_24719 = state_24615__$1;(statearr_24646_24719[(1)] = (36));
} else
{var statearr_24647_24720 = state_24615__$1;(statearr_24647_24720[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (13)))
{var inst_24506 = (state_24615[(26)]);var inst_24509 = cljs.core.async.close_BANG_.call(null,inst_24506);var state_24615__$1 = state_24615;var statearr_24648_24721 = state_24615__$1;(statearr_24648_24721[(2)] = inst_24509);
(statearr_24648_24721[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (22)))
{var inst_24527 = (state_24615[(8)]);var inst_24530 = cljs.core.async.close_BANG_.call(null,inst_24527);var state_24615__$1 = state_24615;var statearr_24649_24722 = state_24615__$1;(statearr_24649_24722[(2)] = inst_24530);
(statearr_24649_24722[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (36)))
{var inst_24574 = (state_24615[(25)]);var inst_24578 = cljs.core.chunk_first.call(null,inst_24574);var inst_24579 = cljs.core.chunk_rest.call(null,inst_24574);var inst_24580 = cljs.core.count.call(null,inst_24578);var inst_24555 = inst_24579;var inst_24556 = inst_24578;var inst_24557 = inst_24580;var inst_24558 = (0);var state_24615__$1 = (function (){var statearr_24650 = state_24615;(statearr_24650[(9)] = inst_24558);
(statearr_24650[(20)] = inst_24557);
(statearr_24650[(10)] = inst_24556);
(statearr_24650[(21)] = inst_24555);
return statearr_24650;
})();var statearr_24651_24723 = state_24615__$1;(statearr_24651_24723[(2)] = null);
(statearr_24651_24723[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (41)))
{var inst_24574 = (state_24615[(25)]);var inst_24590 = (state_24615[(2)]);var inst_24591 = cljs.core.next.call(null,inst_24574);var inst_24555 = inst_24591;var inst_24556 = null;var inst_24557 = (0);var inst_24558 = (0);var state_24615__$1 = (function (){var statearr_24652 = state_24615;(statearr_24652[(27)] = inst_24590);
(statearr_24652[(9)] = inst_24558);
(statearr_24652[(20)] = inst_24557);
(statearr_24652[(10)] = inst_24556);
(statearr_24652[(21)] = inst_24555);
return statearr_24652;
})();var statearr_24653_24724 = state_24615__$1;(statearr_24653_24724[(2)] = null);
(statearr_24653_24724[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (43)))
{var state_24615__$1 = state_24615;var statearr_24654_24725 = state_24615__$1;(statearr_24654_24725[(2)] = null);
(statearr_24654_24725[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (29)))
{var inst_24599 = (state_24615[(2)]);var state_24615__$1 = state_24615;var statearr_24655_24726 = state_24615__$1;(statearr_24655_24726[(2)] = inst_24599);
(statearr_24655_24726[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (44)))
{var inst_24608 = (state_24615[(2)]);var state_24615__$1 = (function (){var statearr_24656 = state_24615;(statearr_24656[(28)] = inst_24608);
return statearr_24656;
})();var statearr_24657_24727 = state_24615__$1;(statearr_24657_24727[(2)] = null);
(statearr_24657_24727[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (6)))
{var inst_24547 = (state_24615[(29)]);var inst_24546 = cljs.core.deref.call(null,cs);var inst_24547__$1 = cljs.core.keys.call(null,inst_24546);var inst_24548 = cljs.core.count.call(null,inst_24547__$1);var inst_24549 = cljs.core.reset_BANG_.call(null,dctr,inst_24548);var inst_24554 = cljs.core.seq.call(null,inst_24547__$1);var inst_24555 = inst_24554;var inst_24556 = null;var inst_24557 = (0);var inst_24558 = (0);var state_24615__$1 = (function (){var statearr_24658 = state_24615;(statearr_24658[(30)] = inst_24549);
(statearr_24658[(9)] = inst_24558);
(statearr_24658[(20)] = inst_24557);
(statearr_24658[(29)] = inst_24547__$1);
(statearr_24658[(10)] = inst_24556);
(statearr_24658[(21)] = inst_24555);
return statearr_24658;
})();var statearr_24659_24728 = state_24615__$1;(statearr_24659_24728[(2)] = null);
(statearr_24659_24728[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (28)))
{var inst_24574 = (state_24615[(25)]);var inst_24555 = (state_24615[(21)]);var inst_24574__$1 = cljs.core.seq.call(null,inst_24555);var state_24615__$1 = (function (){var statearr_24660 = state_24615;(statearr_24660[(25)] = inst_24574__$1);
return statearr_24660;
})();if(inst_24574__$1)
{var statearr_24661_24729 = state_24615__$1;(statearr_24661_24729[(1)] = (33));
} else
{var statearr_24662_24730 = state_24615__$1;(statearr_24662_24730[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (25)))
{var inst_24558 = (state_24615[(9)]);var inst_24557 = (state_24615[(20)]);var inst_24560 = (inst_24558 < inst_24557);var inst_24561 = inst_24560;var state_24615__$1 = state_24615;if(cljs.core.truth_(inst_24561))
{var statearr_24663_24731 = state_24615__$1;(statearr_24663_24731[(1)] = (27));
} else
{var statearr_24664_24732 = state_24615__$1;(statearr_24664_24732[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (34)))
{var state_24615__$1 = state_24615;var statearr_24665_24733 = state_24615__$1;(statearr_24665_24733[(2)] = null);
(statearr_24665_24733[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (17)))
{var state_24615__$1 = state_24615;var statearr_24666_24734 = state_24615__$1;(statearr_24666_24734[(2)] = null);
(statearr_24666_24734[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (3)))
{var inst_24613 = (state_24615[(2)]);var state_24615__$1 = state_24615;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24615__$1,inst_24613);
} else
{if((state_val_24616 === (12)))
{var inst_24542 = (state_24615[(2)]);var state_24615__$1 = state_24615;var statearr_24667_24735 = state_24615__$1;(statearr_24667_24735[(2)] = inst_24542);
(statearr_24667_24735[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (2)))
{var state_24615__$1 = state_24615;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24615__$1,(4),ch);
} else
{if((state_val_24616 === (23)))
{var state_24615__$1 = state_24615;var statearr_24668_24736 = state_24615__$1;(statearr_24668_24736[(2)] = null);
(statearr_24668_24736[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (35)))
{var inst_24597 = (state_24615[(2)]);var state_24615__$1 = state_24615;var statearr_24669_24737 = state_24615__$1;(statearr_24669_24737[(2)] = inst_24597);
(statearr_24669_24737[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (19)))
{var inst_24516 = (state_24615[(7)]);var inst_24520 = cljs.core.chunk_first.call(null,inst_24516);var inst_24521 = cljs.core.chunk_rest.call(null,inst_24516);var inst_24522 = cljs.core.count.call(null,inst_24520);var inst_24496 = inst_24521;var inst_24497 = inst_24520;var inst_24498 = inst_24522;var inst_24499 = (0);var state_24615__$1 = (function (){var statearr_24670 = state_24615;(statearr_24670[(13)] = inst_24498);
(statearr_24670[(14)] = inst_24497);
(statearr_24670[(15)] = inst_24496);
(statearr_24670[(17)] = inst_24499);
return statearr_24670;
})();var statearr_24671_24738 = state_24615__$1;(statearr_24671_24738[(2)] = null);
(statearr_24671_24738[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (11)))
{var inst_24516 = (state_24615[(7)]);var inst_24496 = (state_24615[(15)]);var inst_24516__$1 = cljs.core.seq.call(null,inst_24496);var state_24615__$1 = (function (){var statearr_24672 = state_24615;(statearr_24672[(7)] = inst_24516__$1);
return statearr_24672;
})();if(inst_24516__$1)
{var statearr_24673_24739 = state_24615__$1;(statearr_24673_24739[(1)] = (16));
} else
{var statearr_24674_24740 = state_24615__$1;(statearr_24674_24740[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (9)))
{var inst_24544 = (state_24615[(2)]);var state_24615__$1 = state_24615;var statearr_24675_24741 = state_24615__$1;(statearr_24675_24741[(2)] = inst_24544);
(statearr_24675_24741[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (5)))
{var inst_24494 = cljs.core.deref.call(null,cs);var inst_24495 = cljs.core.seq.call(null,inst_24494);var inst_24496 = inst_24495;var inst_24497 = null;var inst_24498 = (0);var inst_24499 = (0);var state_24615__$1 = (function (){var statearr_24676 = state_24615;(statearr_24676[(13)] = inst_24498);
(statearr_24676[(14)] = inst_24497);
(statearr_24676[(15)] = inst_24496);
(statearr_24676[(17)] = inst_24499);
return statearr_24676;
})();var statearr_24677_24742 = state_24615__$1;(statearr_24677_24742[(2)] = null);
(statearr_24677_24742[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (14)))
{var state_24615__$1 = state_24615;var statearr_24678_24743 = state_24615__$1;(statearr_24678_24743[(2)] = null);
(statearr_24678_24743[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (45)))
{var inst_24605 = (state_24615[(2)]);var state_24615__$1 = state_24615;var statearr_24679_24744 = state_24615__$1;(statearr_24679_24744[(2)] = inst_24605);
(statearr_24679_24744[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (26)))
{var inst_24547 = (state_24615[(29)]);var inst_24601 = (state_24615[(2)]);var inst_24602 = cljs.core.seq.call(null,inst_24547);var state_24615__$1 = (function (){var statearr_24680 = state_24615;(statearr_24680[(31)] = inst_24601);
return statearr_24680;
})();if(inst_24602)
{var statearr_24681_24745 = state_24615__$1;(statearr_24681_24745[(1)] = (42));
} else
{var statearr_24682_24746 = state_24615__$1;(statearr_24682_24746[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (16)))
{var inst_24516 = (state_24615[(7)]);var inst_24518 = cljs.core.chunked_seq_QMARK_.call(null,inst_24516);var state_24615__$1 = state_24615;if(inst_24518)
{var statearr_24683_24747 = state_24615__$1;(statearr_24683_24747[(1)] = (19));
} else
{var statearr_24684_24748 = state_24615__$1;(statearr_24684_24748[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (38)))
{var inst_24594 = (state_24615[(2)]);var state_24615__$1 = state_24615;var statearr_24685_24749 = state_24615__$1;(statearr_24685_24749[(2)] = inst_24594);
(statearr_24685_24749[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (30)))
{var state_24615__$1 = state_24615;var statearr_24686_24750 = state_24615__$1;(statearr_24686_24750[(2)] = null);
(statearr_24686_24750[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (10)))
{var inst_24497 = (state_24615[(14)]);var inst_24499 = (state_24615[(17)]);var inst_24505 = cljs.core._nth.call(null,inst_24497,inst_24499);var inst_24506 = cljs.core.nth.call(null,inst_24505,(0),null);var inst_24507 = cljs.core.nth.call(null,inst_24505,(1),null);var state_24615__$1 = (function (){var statearr_24687 = state_24615;(statearr_24687[(26)] = inst_24506);
return statearr_24687;
})();if(cljs.core.truth_(inst_24507))
{var statearr_24688_24751 = state_24615__$1;(statearr_24688_24751[(1)] = (13));
} else
{var statearr_24689_24752 = state_24615__$1;(statearr_24689_24752[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (18)))
{var inst_24540 = (state_24615[(2)]);var state_24615__$1 = state_24615;var statearr_24690_24753 = state_24615__$1;(statearr_24690_24753[(2)] = inst_24540);
(statearr_24690_24753[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (42)))
{var state_24615__$1 = state_24615;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24615__$1,(45),dchan);
} else
{if((state_val_24616 === (37)))
{var inst_24583 = (state_24615[(23)]);var inst_24487 = (state_24615[(12)]);var inst_24574 = (state_24615[(25)]);var inst_24583__$1 = cljs.core.first.call(null,inst_24574);var inst_24584 = cljs.core.async.put_BANG_.call(null,inst_24583__$1,inst_24487,done);var state_24615__$1 = (function (){var statearr_24691 = state_24615;(statearr_24691[(23)] = inst_24583__$1);
return statearr_24691;
})();if(cljs.core.truth_(inst_24584))
{var statearr_24692_24754 = state_24615__$1;(statearr_24692_24754[(1)] = (39));
} else
{var statearr_24693_24755 = state_24615__$1;(statearr_24693_24755[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24616 === (8)))
{var inst_24498 = (state_24615[(13)]);var inst_24499 = (state_24615[(17)]);var inst_24501 = (inst_24499 < inst_24498);var inst_24502 = inst_24501;var state_24615__$1 = state_24615;if(cljs.core.truth_(inst_24502))
{var statearr_24694_24756 = state_24615__$1;(statearr_24694_24756[(1)] = (10));
} else
{var statearr_24695_24757 = state_24615__$1;(statearr_24695_24757[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___24703,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24703,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24699[(0)] = state_machine__9111__auto__);
(statearr_24699[(1)] = (1));
return statearr_24699;
});
var state_machine__9111__auto____1 = (function (state_24615){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24615);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24700){if((e24700 instanceof Object))
{var ex__9114__auto__ = e24700;var statearr_24701_24758 = state_24615;(statearr_24701_24758[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24615);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24700;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24759 = state_24615;
state_24615 = G__24759;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24615){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24703,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24702 = f__9126__auto__.call(null);(statearr_24702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24703);
return statearr_24702;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24703,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj24761 = {};return obj24761;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24762){var map__24767 = p__24762;var map__24767__$1 = ((cljs.core.seq_QMARK_.call(null,map__24767))?cljs.core.apply.call(null,cljs.core.hash_map,map__24767):map__24767);var opts = map__24767__$1;var statearr_24768_24771 = state;(statearr_24768_24771[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24767,map__24767__$1,opts){
return (function (val){var statearr_24769_24772 = state;(statearr_24769_24772[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24767,map__24767__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24770_24773 = state;(statearr_24770_24773[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24762 = null;if (arguments.length > 3) {
  p__24762 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24762);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24774){
var state = cljs.core.first(arglist__24774);
arglist__24774 = cljs.core.next(arglist__24774);
var cont_block = cljs.core.first(arglist__24774);
arglist__24774 = cljs.core.next(arglist__24774);
var ports = cljs.core.first(arglist__24774);
var p__24762 = cljs.core.rest(arglist__24774);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24762);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24894 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24894 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24895){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24895 = meta24895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24894.cljs$lang$type = true;
cljs.core.async.t24894.cljs$lang$ctorStr = "cljs.core.async/t24894";
cljs.core.async.t24894.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24894");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24894.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24894.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24894.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24894.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24894.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24894.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24894.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24896){var self__ = this;
var _24896__$1 = this;return self__.meta24895;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24896,meta24895__$1){var self__ = this;
var _24896__$1 = this;return (new cljs.core.async.t24894(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24895__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24894 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24894(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24895){return (new cljs.core.async.t24894(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24895));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24894(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___25013 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25013,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25013,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24966){var state_val_24967 = (state_24966[(1)]);if((state_val_24967 === (7)))
{var inst_24910 = (state_24966[(7)]);var inst_24915 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24910);var state_24966__$1 = state_24966;var statearr_24968_25014 = state_24966__$1;(statearr_24968_25014[(2)] = inst_24915);
(statearr_24968_25014[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (20)))
{var inst_24925 = (state_24966[(8)]);var state_24966__$1 = state_24966;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24966__$1,(23),out,inst_24925);
} else
{if((state_val_24967 === (1)))
{var inst_24900 = (state_24966[(9)]);var inst_24900__$1 = calc_state.call(null);var inst_24901 = cljs.core.seq_QMARK_.call(null,inst_24900__$1);var state_24966__$1 = (function (){var statearr_24969 = state_24966;(statearr_24969[(9)] = inst_24900__$1);
return statearr_24969;
})();if(inst_24901)
{var statearr_24970_25015 = state_24966__$1;(statearr_24970_25015[(1)] = (2));
} else
{var statearr_24971_25016 = state_24966__$1;(statearr_24971_25016[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (24)))
{var inst_24918 = (state_24966[(10)]);var inst_24910 = inst_24918;var state_24966__$1 = (function (){var statearr_24972 = state_24966;(statearr_24972[(7)] = inst_24910);
return statearr_24972;
})();var statearr_24973_25017 = state_24966__$1;(statearr_24973_25017[(2)] = null);
(statearr_24973_25017[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (4)))
{var inst_24900 = (state_24966[(9)]);var inst_24906 = (state_24966[(2)]);var inst_24907 = cljs.core.get.call(null,inst_24906,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24908 = cljs.core.get.call(null,inst_24906,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24909 = cljs.core.get.call(null,inst_24906,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_24910 = inst_24900;var state_24966__$1 = (function (){var statearr_24974 = state_24966;(statearr_24974[(11)] = inst_24908);
(statearr_24974[(12)] = inst_24909);
(statearr_24974[(7)] = inst_24910);
(statearr_24974[(13)] = inst_24907);
return statearr_24974;
})();var statearr_24975_25018 = state_24966__$1;(statearr_24975_25018[(2)] = null);
(statearr_24975_25018[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (15)))
{var state_24966__$1 = state_24966;var statearr_24976_25019 = state_24966__$1;(statearr_24976_25019[(2)] = null);
(statearr_24976_25019[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (21)))
{var inst_24918 = (state_24966[(10)]);var inst_24910 = inst_24918;var state_24966__$1 = (function (){var statearr_24977 = state_24966;(statearr_24977[(7)] = inst_24910);
return statearr_24977;
})();var statearr_24978_25020 = state_24966__$1;(statearr_24978_25020[(2)] = null);
(statearr_24978_25020[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (13)))
{var inst_24962 = (state_24966[(2)]);var state_24966__$1 = state_24966;var statearr_24979_25021 = state_24966__$1;(statearr_24979_25021[(2)] = inst_24962);
(statearr_24979_25021[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (22)))
{var inst_24960 = (state_24966[(2)]);var state_24966__$1 = state_24966;var statearr_24980_25022 = state_24966__$1;(statearr_24980_25022[(2)] = inst_24960);
(statearr_24980_25022[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (6)))
{var inst_24964 = (state_24966[(2)]);var state_24966__$1 = state_24966;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24966__$1,inst_24964);
} else
{if((state_val_24967 === (25)))
{var state_24966__$1 = state_24966;var statearr_24981_25023 = state_24966__$1;(statearr_24981_25023[(2)] = null);
(statearr_24981_25023[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (17)))
{var inst_24940 = (state_24966[(14)]);var state_24966__$1 = state_24966;var statearr_24982_25024 = state_24966__$1;(statearr_24982_25024[(2)] = inst_24940);
(statearr_24982_25024[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (3)))
{var inst_24900 = (state_24966[(9)]);var state_24966__$1 = state_24966;var statearr_24983_25025 = state_24966__$1;(statearr_24983_25025[(2)] = inst_24900);
(statearr_24983_25025[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (12)))
{var inst_24926 = (state_24966[(15)]);var inst_24940 = (state_24966[(14)]);var inst_24921 = (state_24966[(16)]);var inst_24940__$1 = inst_24921.call(null,inst_24926);var state_24966__$1 = (function (){var statearr_24984 = state_24966;(statearr_24984[(14)] = inst_24940__$1);
return statearr_24984;
})();if(cljs.core.truth_(inst_24940__$1))
{var statearr_24985_25026 = state_24966__$1;(statearr_24985_25026[(1)] = (17));
} else
{var statearr_24986_25027 = state_24966__$1;(statearr_24986_25027[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (2)))
{var inst_24900 = (state_24966[(9)]);var inst_24903 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24900);var state_24966__$1 = state_24966;var statearr_24987_25028 = state_24966__$1;(statearr_24987_25028[(2)] = inst_24903);
(statearr_24987_25028[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (23)))
{var inst_24951 = (state_24966[(2)]);var state_24966__$1 = state_24966;if(cljs.core.truth_(inst_24951))
{var statearr_24988_25029 = state_24966__$1;(statearr_24988_25029[(1)] = (24));
} else
{var statearr_24989_25030 = state_24966__$1;(statearr_24989_25030[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (19)))
{var inst_24948 = (state_24966[(2)]);var state_24966__$1 = state_24966;if(cljs.core.truth_(inst_24948))
{var statearr_24990_25031 = state_24966__$1;(statearr_24990_25031[(1)] = (20));
} else
{var statearr_24991_25032 = state_24966__$1;(statearr_24991_25032[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (11)))
{var inst_24925 = (state_24966[(8)]);var inst_24931 = (inst_24925 == null);var state_24966__$1 = state_24966;if(cljs.core.truth_(inst_24931))
{var statearr_24992_25033 = state_24966__$1;(statearr_24992_25033[(1)] = (14));
} else
{var statearr_24993_25034 = state_24966__$1;(statearr_24993_25034[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (9)))
{var inst_24918 = (state_24966[(10)]);var inst_24918__$1 = (state_24966[(2)]);var inst_24919 = cljs.core.get.call(null,inst_24918__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24920 = cljs.core.get.call(null,inst_24918__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24921 = cljs.core.get.call(null,inst_24918__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_24966__$1 = (function (){var statearr_24994 = state_24966;(statearr_24994[(10)] = inst_24918__$1);
(statearr_24994[(16)] = inst_24921);
(statearr_24994[(17)] = inst_24920);
return statearr_24994;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_24966__$1,(10),inst_24919);
} else
{if((state_val_24967 === (5)))
{var inst_24910 = (state_24966[(7)]);var inst_24913 = cljs.core.seq_QMARK_.call(null,inst_24910);var state_24966__$1 = state_24966;if(inst_24913)
{var statearr_24995_25035 = state_24966__$1;(statearr_24995_25035[(1)] = (7));
} else
{var statearr_24996_25036 = state_24966__$1;(statearr_24996_25036[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (14)))
{var inst_24926 = (state_24966[(15)]);var inst_24933 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24926);var state_24966__$1 = state_24966;var statearr_24997_25037 = state_24966__$1;(statearr_24997_25037[(2)] = inst_24933);
(statearr_24997_25037[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (26)))
{var inst_24956 = (state_24966[(2)]);var state_24966__$1 = state_24966;var statearr_24998_25038 = state_24966__$1;(statearr_24998_25038[(2)] = inst_24956);
(statearr_24998_25038[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (16)))
{var inst_24936 = (state_24966[(2)]);var inst_24937 = calc_state.call(null);var inst_24910 = inst_24937;var state_24966__$1 = (function (){var statearr_24999 = state_24966;(statearr_24999[(18)] = inst_24936);
(statearr_24999[(7)] = inst_24910);
return statearr_24999;
})();var statearr_25000_25039 = state_24966__$1;(statearr_25000_25039[(2)] = null);
(statearr_25000_25039[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (10)))
{var inst_24926 = (state_24966[(15)]);var inst_24925 = (state_24966[(8)]);var inst_24924 = (state_24966[(2)]);var inst_24925__$1 = cljs.core.nth.call(null,inst_24924,(0),null);var inst_24926__$1 = cljs.core.nth.call(null,inst_24924,(1),null);var inst_24927 = (inst_24925__$1 == null);var inst_24928 = cljs.core._EQ_.call(null,inst_24926__$1,change);var inst_24929 = (inst_24927) || (inst_24928);var state_24966__$1 = (function (){var statearr_25001 = state_24966;(statearr_25001[(15)] = inst_24926__$1);
(statearr_25001[(8)] = inst_24925__$1);
return statearr_25001;
})();if(cljs.core.truth_(inst_24929))
{var statearr_25002_25040 = state_24966__$1;(statearr_25002_25040[(1)] = (11));
} else
{var statearr_25003_25041 = state_24966__$1;(statearr_25003_25041[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (18)))
{var inst_24926 = (state_24966[(15)]);var inst_24921 = (state_24966[(16)]);var inst_24920 = (state_24966[(17)]);var inst_24943 = cljs.core.empty_QMARK_.call(null,inst_24921);var inst_24944 = inst_24920.call(null,inst_24926);var inst_24945 = cljs.core.not.call(null,inst_24944);var inst_24946 = (inst_24943) && (inst_24945);var state_24966__$1 = state_24966;var statearr_25004_25042 = state_24966__$1;(statearr_25004_25042[(2)] = inst_24946);
(statearr_25004_25042[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24967 === (8)))
{var inst_24910 = (state_24966[(7)]);var state_24966__$1 = state_24966;var statearr_25005_25043 = state_24966__$1;(statearr_25005_25043[(2)] = inst_24910);
(statearr_25005_25043[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___25013,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___25013,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25009[(0)] = state_machine__9111__auto__);
(statearr_25009[(1)] = (1));
return statearr_25009;
});
var state_machine__9111__auto____1 = (function (state_24966){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24966);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25010){if((e25010 instanceof Object))
{var ex__9114__auto__ = e25010;var statearr_25011_25044 = state_24966;(statearr_25011_25044[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24966);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25010;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25045 = state_24966;
state_24966 = G__25045;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24966){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25013,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_25012 = f__9126__auto__.call(null);(statearr_25012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25013);
return statearr_25012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25013,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj25047 = {};return obj25047;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3639__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3639__auto__,mults){
return (function (p1__25048_SHARP_){if(cljs.core.truth_(p1__25048_SHARP_.call(null,topic)))
{return p1__25048_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25048_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25171 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25171 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25172){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25172 = meta25172;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25171.cljs$lang$type = true;
cljs.core.async.t25171.cljs$lang$ctorStr = "cljs.core.async/t25171";
cljs.core.async.t25171.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25171");
});})(mults,ensure_mult))
;
cljs.core.async.t25171.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25171.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25171.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25171.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25171.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25171.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25173){var self__ = this;
var _25173__$1 = this;return self__.meta25172;
});})(mults,ensure_mult))
;
cljs.core.async.t25171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25173,meta25172__$1){var self__ = this;
var _25173__$1 = this;return (new cljs.core.async.t25171(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25172__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25171 = ((function (mults,ensure_mult){
return (function __GT_t25171(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25172){return (new cljs.core.async.t25171(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25172));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25171(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25293 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25293,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25293,mults,ensure_mult,p){
return (function (state_25245){var state_val_25246 = (state_25245[(1)]);if((state_val_25246 === (7)))
{var inst_25241 = (state_25245[(2)]);var state_25245__$1 = state_25245;var statearr_25247_25294 = state_25245__$1;(statearr_25247_25294[(2)] = inst_25241);
(statearr_25247_25294[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (20)))
{var state_25245__$1 = state_25245;var statearr_25248_25295 = state_25245__$1;(statearr_25248_25295[(2)] = null);
(statearr_25248_25295[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (1)))
{var state_25245__$1 = state_25245;var statearr_25249_25296 = state_25245__$1;(statearr_25249_25296[(2)] = null);
(statearr_25249_25296[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (24)))
{var inst_25224 = (state_25245[(7)]);var inst_25233 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25224);var state_25245__$1 = state_25245;var statearr_25250_25297 = state_25245__$1;(statearr_25250_25297[(2)] = inst_25233);
(statearr_25250_25297[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (4)))
{var inst_25176 = (state_25245[(8)]);var inst_25176__$1 = (state_25245[(2)]);var inst_25177 = (inst_25176__$1 == null);var state_25245__$1 = (function (){var statearr_25251 = state_25245;(statearr_25251[(8)] = inst_25176__$1);
return statearr_25251;
})();if(cljs.core.truth_(inst_25177))
{var statearr_25252_25298 = state_25245__$1;(statearr_25252_25298[(1)] = (5));
} else
{var statearr_25253_25299 = state_25245__$1;(statearr_25253_25299[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (15)))
{var inst_25218 = (state_25245[(2)]);var state_25245__$1 = state_25245;var statearr_25254_25300 = state_25245__$1;(statearr_25254_25300[(2)] = inst_25218);
(statearr_25254_25300[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (21)))
{var inst_25238 = (state_25245[(2)]);var state_25245__$1 = (function (){var statearr_25255 = state_25245;(statearr_25255[(9)] = inst_25238);
return statearr_25255;
})();var statearr_25256_25301 = state_25245__$1;(statearr_25256_25301[(2)] = null);
(statearr_25256_25301[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (13)))
{var inst_25200 = (state_25245[(10)]);var inst_25202 = cljs.core.chunked_seq_QMARK_.call(null,inst_25200);var state_25245__$1 = state_25245;if(inst_25202)
{var statearr_25257_25302 = state_25245__$1;(statearr_25257_25302[(1)] = (16));
} else
{var statearr_25258_25303 = state_25245__$1;(statearr_25258_25303[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (22)))
{var inst_25230 = (state_25245[(2)]);var state_25245__$1 = state_25245;if(cljs.core.truth_(inst_25230))
{var statearr_25259_25304 = state_25245__$1;(statearr_25259_25304[(1)] = (23));
} else
{var statearr_25260_25305 = state_25245__$1;(statearr_25260_25305[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (6)))
{var inst_25224 = (state_25245[(7)]);var inst_25226 = (state_25245[(11)]);var inst_25176 = (state_25245[(8)]);var inst_25224__$1 = topic_fn.call(null,inst_25176);var inst_25225 = cljs.core.deref.call(null,mults);var inst_25226__$1 = cljs.core.get.call(null,inst_25225,inst_25224__$1);var state_25245__$1 = (function (){var statearr_25261 = state_25245;(statearr_25261[(7)] = inst_25224__$1);
(statearr_25261[(11)] = inst_25226__$1);
return statearr_25261;
})();if(cljs.core.truth_(inst_25226__$1))
{var statearr_25262_25306 = state_25245__$1;(statearr_25262_25306[(1)] = (19));
} else
{var statearr_25263_25307 = state_25245__$1;(statearr_25263_25307[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (25)))
{var inst_25235 = (state_25245[(2)]);var state_25245__$1 = state_25245;var statearr_25264_25308 = state_25245__$1;(statearr_25264_25308[(2)] = inst_25235);
(statearr_25264_25308[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (17)))
{var inst_25200 = (state_25245[(10)]);var inst_25209 = cljs.core.first.call(null,inst_25200);var inst_25210 = cljs.core.async.muxch_STAR_.call(null,inst_25209);var inst_25211 = cljs.core.async.close_BANG_.call(null,inst_25210);var inst_25212 = cljs.core.next.call(null,inst_25200);var inst_25186 = inst_25212;var inst_25187 = null;var inst_25188 = (0);var inst_25189 = (0);var state_25245__$1 = (function (){var statearr_25265 = state_25245;(statearr_25265[(12)] = inst_25186);
(statearr_25265[(13)] = inst_25189);
(statearr_25265[(14)] = inst_25188);
(statearr_25265[(15)] = inst_25211);
(statearr_25265[(16)] = inst_25187);
return statearr_25265;
})();var statearr_25266_25309 = state_25245__$1;(statearr_25266_25309[(2)] = null);
(statearr_25266_25309[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (3)))
{var inst_25243 = (state_25245[(2)]);var state_25245__$1 = state_25245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25245__$1,inst_25243);
} else
{if((state_val_25246 === (12)))
{var inst_25220 = (state_25245[(2)]);var state_25245__$1 = state_25245;var statearr_25267_25310 = state_25245__$1;(statearr_25267_25310[(2)] = inst_25220);
(statearr_25267_25310[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (2)))
{var state_25245__$1 = state_25245;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25245__$1,(4),ch);
} else
{if((state_val_25246 === (23)))
{var state_25245__$1 = state_25245;var statearr_25268_25311 = state_25245__$1;(statearr_25268_25311[(2)] = null);
(statearr_25268_25311[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (19)))
{var inst_25226 = (state_25245[(11)]);var inst_25176 = (state_25245[(8)]);var inst_25228 = cljs.core.async.muxch_STAR_.call(null,inst_25226);var state_25245__$1 = state_25245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25245__$1,(22),inst_25228,inst_25176);
} else
{if((state_val_25246 === (11)))
{var inst_25186 = (state_25245[(12)]);var inst_25200 = (state_25245[(10)]);var inst_25200__$1 = cljs.core.seq.call(null,inst_25186);var state_25245__$1 = (function (){var statearr_25269 = state_25245;(statearr_25269[(10)] = inst_25200__$1);
return statearr_25269;
})();if(inst_25200__$1)
{var statearr_25270_25312 = state_25245__$1;(statearr_25270_25312[(1)] = (13));
} else
{var statearr_25271_25313 = state_25245__$1;(statearr_25271_25313[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (9)))
{var inst_25222 = (state_25245[(2)]);var state_25245__$1 = state_25245;var statearr_25272_25314 = state_25245__$1;(statearr_25272_25314[(2)] = inst_25222);
(statearr_25272_25314[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (5)))
{var inst_25183 = cljs.core.deref.call(null,mults);var inst_25184 = cljs.core.vals.call(null,inst_25183);var inst_25185 = cljs.core.seq.call(null,inst_25184);var inst_25186 = inst_25185;var inst_25187 = null;var inst_25188 = (0);var inst_25189 = (0);var state_25245__$1 = (function (){var statearr_25273 = state_25245;(statearr_25273[(12)] = inst_25186);
(statearr_25273[(13)] = inst_25189);
(statearr_25273[(14)] = inst_25188);
(statearr_25273[(16)] = inst_25187);
return statearr_25273;
})();var statearr_25274_25315 = state_25245__$1;(statearr_25274_25315[(2)] = null);
(statearr_25274_25315[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (14)))
{var state_25245__$1 = state_25245;var statearr_25278_25316 = state_25245__$1;(statearr_25278_25316[(2)] = null);
(statearr_25278_25316[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (16)))
{var inst_25200 = (state_25245[(10)]);var inst_25204 = cljs.core.chunk_first.call(null,inst_25200);var inst_25205 = cljs.core.chunk_rest.call(null,inst_25200);var inst_25206 = cljs.core.count.call(null,inst_25204);var inst_25186 = inst_25205;var inst_25187 = inst_25204;var inst_25188 = inst_25206;var inst_25189 = (0);var state_25245__$1 = (function (){var statearr_25279 = state_25245;(statearr_25279[(12)] = inst_25186);
(statearr_25279[(13)] = inst_25189);
(statearr_25279[(14)] = inst_25188);
(statearr_25279[(16)] = inst_25187);
return statearr_25279;
})();var statearr_25280_25317 = state_25245__$1;(statearr_25280_25317[(2)] = null);
(statearr_25280_25317[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (10)))
{var inst_25186 = (state_25245[(12)]);var inst_25189 = (state_25245[(13)]);var inst_25188 = (state_25245[(14)]);var inst_25187 = (state_25245[(16)]);var inst_25194 = cljs.core._nth.call(null,inst_25187,inst_25189);var inst_25195 = cljs.core.async.muxch_STAR_.call(null,inst_25194);var inst_25196 = cljs.core.async.close_BANG_.call(null,inst_25195);var inst_25197 = (inst_25189 + (1));var tmp25275 = inst_25186;var tmp25276 = inst_25188;var tmp25277 = inst_25187;var inst_25186__$1 = tmp25275;var inst_25187__$1 = tmp25277;var inst_25188__$1 = tmp25276;var inst_25189__$1 = inst_25197;var state_25245__$1 = (function (){var statearr_25281 = state_25245;(statearr_25281[(12)] = inst_25186__$1);
(statearr_25281[(17)] = inst_25196);
(statearr_25281[(13)] = inst_25189__$1);
(statearr_25281[(14)] = inst_25188__$1);
(statearr_25281[(16)] = inst_25187__$1);
return statearr_25281;
})();var statearr_25282_25318 = state_25245__$1;(statearr_25282_25318[(2)] = null);
(statearr_25282_25318[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (18)))
{var inst_25215 = (state_25245[(2)]);var state_25245__$1 = state_25245;var statearr_25283_25319 = state_25245__$1;(statearr_25283_25319[(2)] = inst_25215);
(statearr_25283_25319[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25246 === (8)))
{var inst_25189 = (state_25245[(13)]);var inst_25188 = (state_25245[(14)]);var inst_25191 = (inst_25189 < inst_25188);var inst_25192 = inst_25191;var state_25245__$1 = state_25245;if(cljs.core.truth_(inst_25192))
{var statearr_25284_25320 = state_25245__$1;(statearr_25284_25320[(1)] = (10));
} else
{var statearr_25285_25321 = state_25245__$1;(statearr_25285_25321[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___25293,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25293,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25289[(0)] = state_machine__9111__auto__);
(statearr_25289[(1)] = (1));
return statearr_25289;
});
var state_machine__9111__auto____1 = (function (state_25245){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25245);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25290){if((e25290 instanceof Object))
{var ex__9114__auto__ = e25290;var statearr_25291_25322 = state_25245;(statearr_25291_25322[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25245);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25290;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25323 = state_25245;
state_25245 = G__25323;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25245){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25293,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25292 = f__9126__auto__.call(null);(statearr_25292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25293);
return statearr_25292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25293,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__9125__auto___25460 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25460,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25460,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25430){var state_val_25431 = (state_25430[(1)]);if((state_val_25431 === (7)))
{var state_25430__$1 = state_25430;var statearr_25432_25461 = state_25430__$1;(statearr_25432_25461[(2)] = null);
(statearr_25432_25461[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25431 === (1)))
{var state_25430__$1 = state_25430;var statearr_25433_25462 = state_25430__$1;(statearr_25433_25462[(2)] = null);
(statearr_25433_25462[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25431 === (4)))
{var inst_25394 = (state_25430[(7)]);var inst_25396 = (inst_25394 < cnt);var state_25430__$1 = state_25430;if(cljs.core.truth_(inst_25396))
{var statearr_25434_25463 = state_25430__$1;(statearr_25434_25463[(1)] = (6));
} else
{var statearr_25435_25464 = state_25430__$1;(statearr_25435_25464[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25431 === (15)))
{var inst_25426 = (state_25430[(2)]);var state_25430__$1 = state_25430;var statearr_25436_25465 = state_25430__$1;(statearr_25436_25465[(2)] = inst_25426);
(statearr_25436_25465[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25431 === (13)))
{var inst_25419 = cljs.core.async.close_BANG_.call(null,out);var state_25430__$1 = state_25430;var statearr_25437_25466 = state_25430__$1;(statearr_25437_25466[(2)] = inst_25419);
(statearr_25437_25466[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25431 === (6)))
{var state_25430__$1 = state_25430;var statearr_25438_25467 = state_25430__$1;(statearr_25438_25467[(2)] = null);
(statearr_25438_25467[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25431 === (3)))
{var inst_25428 = (state_25430[(2)]);var state_25430__$1 = state_25430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25430__$1,inst_25428);
} else
{if((state_val_25431 === (12)))
{var inst_25416 = (state_25430[(8)]);var inst_25416__$1 = (state_25430[(2)]);var inst_25417 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25416__$1);var state_25430__$1 = (function (){var statearr_25439 = state_25430;(statearr_25439[(8)] = inst_25416__$1);
return statearr_25439;
})();if(cljs.core.truth_(inst_25417))
{var statearr_25440_25468 = state_25430__$1;(statearr_25440_25468[(1)] = (13));
} else
{var statearr_25441_25469 = state_25430__$1;(statearr_25441_25469[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25431 === (2)))
{var inst_25393 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25394 = (0);var state_25430__$1 = (function (){var statearr_25442 = state_25430;(statearr_25442[(7)] = inst_25394);
(statearr_25442[(9)] = inst_25393);
return statearr_25442;
})();var statearr_25443_25470 = state_25430__$1;(statearr_25443_25470[(2)] = null);
(statearr_25443_25470[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25431 === (11)))
{var inst_25394 = (state_25430[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25430,(10),Object,null,(9));var inst_25403 = chs__$1.call(null,inst_25394);var inst_25404 = done.call(null,inst_25394);var inst_25405 = cljs.core.async.take_BANG_.call(null,inst_25403,inst_25404);var state_25430__$1 = state_25430;var statearr_25444_25471 = state_25430__$1;(statearr_25444_25471[(2)] = inst_25405);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25430__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25431 === (9)))
{var inst_25394 = (state_25430[(7)]);var inst_25407 = (state_25430[(2)]);var inst_25408 = (inst_25394 + (1));var inst_25394__$1 = inst_25408;var state_25430__$1 = (function (){var statearr_25445 = state_25430;(statearr_25445[(7)] = inst_25394__$1);
(statearr_25445[(10)] = inst_25407);
return statearr_25445;
})();var statearr_25446_25472 = state_25430__$1;(statearr_25446_25472[(2)] = null);
(statearr_25446_25472[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25431 === (5)))
{var inst_25414 = (state_25430[(2)]);var state_25430__$1 = (function (){var statearr_25447 = state_25430;(statearr_25447[(11)] = inst_25414);
return statearr_25447;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25430__$1,(12),dchan);
} else
{if((state_val_25431 === (14)))
{var inst_25416 = (state_25430[(8)]);var inst_25421 = cljs.core.apply.call(null,f,inst_25416);var state_25430__$1 = state_25430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25430__$1,(16),out,inst_25421);
} else
{if((state_val_25431 === (16)))
{var inst_25423 = (state_25430[(2)]);var state_25430__$1 = (function (){var statearr_25448 = state_25430;(statearr_25448[(12)] = inst_25423);
return statearr_25448;
})();var statearr_25449_25473 = state_25430__$1;(statearr_25449_25473[(2)] = null);
(statearr_25449_25473[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25431 === (10)))
{var inst_25398 = (state_25430[(2)]);var inst_25399 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25430__$1 = (function (){var statearr_25450 = state_25430;(statearr_25450[(13)] = inst_25398);
return statearr_25450;
})();var statearr_25451_25474 = state_25430__$1;(statearr_25451_25474[(2)] = inst_25399);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25430__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25431 === (8)))
{var inst_25412 = (state_25430[(2)]);var state_25430__$1 = state_25430;var statearr_25452_25475 = state_25430__$1;(statearr_25452_25475[(2)] = inst_25412);
(statearr_25452_25475[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___25460,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25460,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25456[(0)] = state_machine__9111__auto__);
(statearr_25456[(1)] = (1));
return statearr_25456;
});
var state_machine__9111__auto____1 = (function (state_25430){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25430);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25457){if((e25457 instanceof Object))
{var ex__9114__auto__ = e25457;var statearr_25458_25476 = state_25430;(statearr_25458_25476[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25457;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25477 = state_25430;
state_25430 = G__25477;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25430){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25460,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25459 = f__9126__auto__.call(null);(statearr_25459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25460);
return statearr_25459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25460,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25585 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25585,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25585,out){
return (function (state_25561){var state_val_25562 = (state_25561[(1)]);if((state_val_25562 === (7)))
{var inst_25541 = (state_25561[(7)]);var inst_25540 = (state_25561[(8)]);var inst_25540__$1 = (state_25561[(2)]);var inst_25541__$1 = cljs.core.nth.call(null,inst_25540__$1,(0),null);var inst_25542 = cljs.core.nth.call(null,inst_25540__$1,(1),null);var inst_25543 = (inst_25541__$1 == null);var state_25561__$1 = (function (){var statearr_25563 = state_25561;(statearr_25563[(7)] = inst_25541__$1);
(statearr_25563[(9)] = inst_25542);
(statearr_25563[(8)] = inst_25540__$1);
return statearr_25563;
})();if(cljs.core.truth_(inst_25543))
{var statearr_25564_25586 = state_25561__$1;(statearr_25564_25586[(1)] = (8));
} else
{var statearr_25565_25587 = state_25561__$1;(statearr_25565_25587[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (1)))
{var inst_25532 = cljs.core.vec.call(null,chs);var inst_25533 = inst_25532;var state_25561__$1 = (function (){var statearr_25566 = state_25561;(statearr_25566[(10)] = inst_25533);
return statearr_25566;
})();var statearr_25567_25588 = state_25561__$1;(statearr_25567_25588[(2)] = null);
(statearr_25567_25588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (4)))
{var inst_25533 = (state_25561[(10)]);var state_25561__$1 = state_25561;return cljs.core.async.ioc_alts_BANG_.call(null,state_25561__$1,(7),inst_25533);
} else
{if((state_val_25562 === (6)))
{var inst_25557 = (state_25561[(2)]);var state_25561__$1 = state_25561;var statearr_25568_25589 = state_25561__$1;(statearr_25568_25589[(2)] = inst_25557);
(statearr_25568_25589[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (3)))
{var inst_25559 = (state_25561[(2)]);var state_25561__$1 = state_25561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25561__$1,inst_25559);
} else
{if((state_val_25562 === (2)))
{var inst_25533 = (state_25561[(10)]);var inst_25535 = cljs.core.count.call(null,inst_25533);var inst_25536 = (inst_25535 > (0));var state_25561__$1 = state_25561;if(cljs.core.truth_(inst_25536))
{var statearr_25570_25590 = state_25561__$1;(statearr_25570_25590[(1)] = (4));
} else
{var statearr_25571_25591 = state_25561__$1;(statearr_25571_25591[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (11)))
{var inst_25533 = (state_25561[(10)]);var inst_25550 = (state_25561[(2)]);var tmp25569 = inst_25533;var inst_25533__$1 = tmp25569;var state_25561__$1 = (function (){var statearr_25572 = state_25561;(statearr_25572[(10)] = inst_25533__$1);
(statearr_25572[(11)] = inst_25550);
return statearr_25572;
})();var statearr_25573_25592 = state_25561__$1;(statearr_25573_25592[(2)] = null);
(statearr_25573_25592[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (9)))
{var inst_25541 = (state_25561[(7)]);var state_25561__$1 = state_25561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25561__$1,(11),out,inst_25541);
} else
{if((state_val_25562 === (5)))
{var inst_25555 = cljs.core.async.close_BANG_.call(null,out);var state_25561__$1 = state_25561;var statearr_25574_25593 = state_25561__$1;(statearr_25574_25593[(2)] = inst_25555);
(statearr_25574_25593[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (10)))
{var inst_25553 = (state_25561[(2)]);var state_25561__$1 = state_25561;var statearr_25575_25594 = state_25561__$1;(statearr_25575_25594[(2)] = inst_25553);
(statearr_25575_25594[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (8)))
{var inst_25533 = (state_25561[(10)]);var inst_25541 = (state_25561[(7)]);var inst_25542 = (state_25561[(9)]);var inst_25540 = (state_25561[(8)]);var inst_25545 = (function (){var c = inst_25542;var v = inst_25541;var vec__25538 = inst_25540;var cs = inst_25533;return ((function (c,v,vec__25538,cs,inst_25533,inst_25541,inst_25542,inst_25540,state_val_25562,c__9125__auto___25585,out){
return (function (p1__25478_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25478_SHARP_);
});
;})(c,v,vec__25538,cs,inst_25533,inst_25541,inst_25542,inst_25540,state_val_25562,c__9125__auto___25585,out))
})();var inst_25546 = cljs.core.filterv.call(null,inst_25545,inst_25533);var inst_25533__$1 = inst_25546;var state_25561__$1 = (function (){var statearr_25576 = state_25561;(statearr_25576[(10)] = inst_25533__$1);
return statearr_25576;
})();var statearr_25577_25595 = state_25561__$1;(statearr_25577_25595[(2)] = null);
(statearr_25577_25595[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___25585,out))
;return ((function (switch__9110__auto__,c__9125__auto___25585,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25581 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25581[(0)] = state_machine__9111__auto__);
(statearr_25581[(1)] = (1));
return statearr_25581;
});
var state_machine__9111__auto____1 = (function (state_25561){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25561);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25582){if((e25582 instanceof Object))
{var ex__9114__auto__ = e25582;var statearr_25583_25596 = state_25561;(statearr_25583_25596[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25561);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25582;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25597 = state_25561;
state_25561 = G__25597;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25561){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25585,out))
})();var state__9127__auto__ = (function (){var statearr_25584 = f__9126__auto__.call(null);(statearr_25584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25585);
return statearr_25584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25585,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25690 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25690,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25690,out){
return (function (state_25667){var state_val_25668 = (state_25667[(1)]);if((state_val_25668 === (7)))
{var inst_25649 = (state_25667[(7)]);var inst_25649__$1 = (state_25667[(2)]);var inst_25650 = (inst_25649__$1 == null);var inst_25651 = cljs.core.not.call(null,inst_25650);var state_25667__$1 = (function (){var statearr_25669 = state_25667;(statearr_25669[(7)] = inst_25649__$1);
return statearr_25669;
})();if(inst_25651)
{var statearr_25670_25691 = state_25667__$1;(statearr_25670_25691[(1)] = (8));
} else
{var statearr_25671_25692 = state_25667__$1;(statearr_25671_25692[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25668 === (1)))
{var inst_25644 = (0);var state_25667__$1 = (function (){var statearr_25672 = state_25667;(statearr_25672[(8)] = inst_25644);
return statearr_25672;
})();var statearr_25673_25693 = state_25667__$1;(statearr_25673_25693[(2)] = null);
(statearr_25673_25693[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25668 === (4)))
{var state_25667__$1 = state_25667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25667__$1,(7),ch);
} else
{if((state_val_25668 === (6)))
{var inst_25662 = (state_25667[(2)]);var state_25667__$1 = state_25667;var statearr_25674_25694 = state_25667__$1;(statearr_25674_25694[(2)] = inst_25662);
(statearr_25674_25694[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25668 === (3)))
{var inst_25664 = (state_25667[(2)]);var inst_25665 = cljs.core.async.close_BANG_.call(null,out);var state_25667__$1 = (function (){var statearr_25675 = state_25667;(statearr_25675[(9)] = inst_25664);
return statearr_25675;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25667__$1,inst_25665);
} else
{if((state_val_25668 === (2)))
{var inst_25644 = (state_25667[(8)]);var inst_25646 = (inst_25644 < n);var state_25667__$1 = state_25667;if(cljs.core.truth_(inst_25646))
{var statearr_25676_25695 = state_25667__$1;(statearr_25676_25695[(1)] = (4));
} else
{var statearr_25677_25696 = state_25667__$1;(statearr_25677_25696[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25668 === (11)))
{var inst_25644 = (state_25667[(8)]);var inst_25654 = (state_25667[(2)]);var inst_25655 = (inst_25644 + (1));var inst_25644__$1 = inst_25655;var state_25667__$1 = (function (){var statearr_25678 = state_25667;(statearr_25678[(8)] = inst_25644__$1);
(statearr_25678[(10)] = inst_25654);
return statearr_25678;
})();var statearr_25679_25697 = state_25667__$1;(statearr_25679_25697[(2)] = null);
(statearr_25679_25697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25668 === (9)))
{var state_25667__$1 = state_25667;var statearr_25680_25698 = state_25667__$1;(statearr_25680_25698[(2)] = null);
(statearr_25680_25698[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25668 === (5)))
{var state_25667__$1 = state_25667;var statearr_25681_25699 = state_25667__$1;(statearr_25681_25699[(2)] = null);
(statearr_25681_25699[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25668 === (10)))
{var inst_25659 = (state_25667[(2)]);var state_25667__$1 = state_25667;var statearr_25682_25700 = state_25667__$1;(statearr_25682_25700[(2)] = inst_25659);
(statearr_25682_25700[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25668 === (8)))
{var inst_25649 = (state_25667[(7)]);var state_25667__$1 = state_25667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25667__$1,(11),out,inst_25649);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___25690,out))
;return ((function (switch__9110__auto__,c__9125__auto___25690,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25686 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25686[(0)] = state_machine__9111__auto__);
(statearr_25686[(1)] = (1));
return statearr_25686;
});
var state_machine__9111__auto____1 = (function (state_25667){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25667);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25687){if((e25687 instanceof Object))
{var ex__9114__auto__ = e25687;var statearr_25688_25701 = state_25667;(statearr_25688_25701[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25667);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25687;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25702 = state_25667;
state_25667 = G__25702;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25667){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25690,out))
})();var state__9127__auto__ = (function (){var statearr_25689 = f__9126__auto__.call(null);(statearr_25689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25690);
return statearr_25689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25690,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25710 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25710 = (function (ch,f,map_LT_,meta25711){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25711 = meta25711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25710.cljs$lang$type = true;
cljs.core.async.t25710.cljs$lang$ctorStr = "cljs.core.async/t25710";
cljs.core.async.t25710.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25710");
});
cljs.core.async.t25710.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25710.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25710.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25710.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25713 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25713 = (function (fn1,_,meta25711,ch,f,map_LT_,meta25714){
this.fn1 = fn1;
this._ = _;
this.meta25711 = meta25711;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25714 = meta25714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25713.cljs$lang$type = true;
cljs.core.async.t25713.cljs$lang$ctorStr = "cljs.core.async/t25713";
cljs.core.async.t25713.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25713");
});})(___$1))
;
cljs.core.async.t25713.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25703_SHARP_){return f1.call(null,(((p1__25703_SHARP_ == null))?null:self__.f.call(null,p1__25703_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25715){var self__ = this;
var _25715__$1 = this;return self__.meta25714;
});})(___$1))
;
cljs.core.async.t25713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25715,meta25714__$1){var self__ = this;
var _25715__$1 = this;return (new cljs.core.async.t25713(self__.fn1,self__._,self__.meta25711,self__.ch,self__.f,self__.map_LT_,meta25714__$1));
});})(___$1))
;
cljs.core.async.__GT_t25713 = ((function (___$1){
return (function __GT_t25713(fn1__$1,___$2,meta25711__$1,ch__$2,f__$2,map_LT___$2,meta25714){return (new cljs.core.async.t25713(fn1__$1,___$2,meta25711__$1,ch__$2,f__$2,map_LT___$2,meta25714));
});})(___$1))
;
}
return (new cljs.core.async.t25713(fn1,___$1,self__.meta25711,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3627__auto__ = ret;if(cljs.core.truth_(and__3627__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3627__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t25710.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25710.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25710.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25712){var self__ = this;
var _25712__$1 = this;return self__.meta25711;
});
cljs.core.async.t25710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25712,meta25711__$1){var self__ = this;
var _25712__$1 = this;return (new cljs.core.async.t25710(self__.ch,self__.f,self__.map_LT_,meta25711__$1));
});
cljs.core.async.__GT_t25710 = (function __GT_t25710(ch__$1,f__$1,map_LT___$1,meta25711){return (new cljs.core.async.t25710(ch__$1,f__$1,map_LT___$1,meta25711));
});
}
return (new cljs.core.async.t25710(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25719 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25719 = (function (ch,f,map_GT_,meta25720){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25720 = meta25720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25719.cljs$lang$type = true;
cljs.core.async.t25719.cljs$lang$ctorStr = "cljs.core.async/t25719";
cljs.core.async.t25719.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25719");
});
cljs.core.async.t25719.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25719.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25719.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25721){var self__ = this;
var _25721__$1 = this;return self__.meta25720;
});
cljs.core.async.t25719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25721,meta25720__$1){var self__ = this;
var _25721__$1 = this;return (new cljs.core.async.t25719(self__.ch,self__.f,self__.map_GT_,meta25720__$1));
});
cljs.core.async.__GT_t25719 = (function __GT_t25719(ch__$1,f__$1,map_GT___$1,meta25720){return (new cljs.core.async.t25719(ch__$1,f__$1,map_GT___$1,meta25720));
});
}
return (new cljs.core.async.t25719(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25725 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25725 = (function (ch,p,filter_GT_,meta25726){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25726 = meta25726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25725.cljs$lang$type = true;
cljs.core.async.t25725.cljs$lang$ctorStr = "cljs.core.async/t25725";
cljs.core.async.t25725.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25725");
});
cljs.core.async.t25725.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25725.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25725.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25725.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25725.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25725.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25725.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25727){var self__ = this;
var _25727__$1 = this;return self__.meta25726;
});
cljs.core.async.t25725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25727,meta25726__$1){var self__ = this;
var _25727__$1 = this;return (new cljs.core.async.t25725(self__.ch,self__.p,self__.filter_GT_,meta25726__$1));
});
cljs.core.async.__GT_t25725 = (function __GT_t25725(ch__$1,p__$1,filter_GT___$1,meta25726){return (new cljs.core.async.t25725(ch__$1,p__$1,filter_GT___$1,meta25726));
});
}
return (new cljs.core.async.t25725(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25810 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25810,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25810,out){
return (function (state_25789){var state_val_25790 = (state_25789[(1)]);if((state_val_25790 === (7)))
{var inst_25785 = (state_25789[(2)]);var state_25789__$1 = state_25789;var statearr_25791_25811 = state_25789__$1;(statearr_25791_25811[(2)] = inst_25785);
(statearr_25791_25811[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25790 === (1)))
{var state_25789__$1 = state_25789;var statearr_25792_25812 = state_25789__$1;(statearr_25792_25812[(2)] = null);
(statearr_25792_25812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25790 === (4)))
{var inst_25771 = (state_25789[(7)]);var inst_25771__$1 = (state_25789[(2)]);var inst_25772 = (inst_25771__$1 == null);var state_25789__$1 = (function (){var statearr_25793 = state_25789;(statearr_25793[(7)] = inst_25771__$1);
return statearr_25793;
})();if(cljs.core.truth_(inst_25772))
{var statearr_25794_25813 = state_25789__$1;(statearr_25794_25813[(1)] = (5));
} else
{var statearr_25795_25814 = state_25789__$1;(statearr_25795_25814[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25790 === (6)))
{var inst_25771 = (state_25789[(7)]);var inst_25776 = p.call(null,inst_25771);var state_25789__$1 = state_25789;if(cljs.core.truth_(inst_25776))
{var statearr_25796_25815 = state_25789__$1;(statearr_25796_25815[(1)] = (8));
} else
{var statearr_25797_25816 = state_25789__$1;(statearr_25797_25816[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25790 === (3)))
{var inst_25787 = (state_25789[(2)]);var state_25789__$1 = state_25789;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25789__$1,inst_25787);
} else
{if((state_val_25790 === (2)))
{var state_25789__$1 = state_25789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25789__$1,(4),ch);
} else
{if((state_val_25790 === (11)))
{var inst_25779 = (state_25789[(2)]);var state_25789__$1 = state_25789;var statearr_25798_25817 = state_25789__$1;(statearr_25798_25817[(2)] = inst_25779);
(statearr_25798_25817[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25790 === (9)))
{var state_25789__$1 = state_25789;var statearr_25799_25818 = state_25789__$1;(statearr_25799_25818[(2)] = null);
(statearr_25799_25818[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25790 === (5)))
{var inst_25774 = cljs.core.async.close_BANG_.call(null,out);var state_25789__$1 = state_25789;var statearr_25800_25819 = state_25789__$1;(statearr_25800_25819[(2)] = inst_25774);
(statearr_25800_25819[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25790 === (10)))
{var inst_25782 = (state_25789[(2)]);var state_25789__$1 = (function (){var statearr_25801 = state_25789;(statearr_25801[(8)] = inst_25782);
return statearr_25801;
})();var statearr_25802_25820 = state_25789__$1;(statearr_25802_25820[(2)] = null);
(statearr_25802_25820[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25790 === (8)))
{var inst_25771 = (state_25789[(7)]);var state_25789__$1 = state_25789;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25789__$1,(11),out,inst_25771);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___25810,out))
;return ((function (switch__9110__auto__,c__9125__auto___25810,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25806 = [null,null,null,null,null,null,null,null,null];(statearr_25806[(0)] = state_machine__9111__auto__);
(statearr_25806[(1)] = (1));
return statearr_25806;
});
var state_machine__9111__auto____1 = (function (state_25789){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25789);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25807){if((e25807 instanceof Object))
{var ex__9114__auto__ = e25807;var statearr_25808_25821 = state_25789;(statearr_25808_25821[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25789);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25807;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25822 = state_25789;
state_25789 = G__25822;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25789){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25810,out))
})();var state__9127__auto__ = (function (){var statearr_25809 = f__9126__auto__.call(null);(statearr_25809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25810);
return statearr_25809;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25810,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_25988){var state_val_25989 = (state_25988[(1)]);if((state_val_25989 === (7)))
{var inst_25984 = (state_25988[(2)]);var state_25988__$1 = state_25988;var statearr_25990_26031 = state_25988__$1;(statearr_25990_26031[(2)] = inst_25984);
(statearr_25990_26031[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (20)))
{var inst_25954 = (state_25988[(7)]);var inst_25965 = (state_25988[(2)]);var inst_25966 = cljs.core.next.call(null,inst_25954);var inst_25940 = inst_25966;var inst_25941 = null;var inst_25942 = (0);var inst_25943 = (0);var state_25988__$1 = (function (){var statearr_25991 = state_25988;(statearr_25991[(8)] = inst_25941);
(statearr_25991[(9)] = inst_25943);
(statearr_25991[(10)] = inst_25942);
(statearr_25991[(11)] = inst_25940);
(statearr_25991[(12)] = inst_25965);
return statearr_25991;
})();var statearr_25992_26032 = state_25988__$1;(statearr_25992_26032[(2)] = null);
(statearr_25992_26032[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (1)))
{var state_25988__$1 = state_25988;var statearr_25993_26033 = state_25988__$1;(statearr_25993_26033[(2)] = null);
(statearr_25993_26033[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (4)))
{var inst_25929 = (state_25988[(13)]);var inst_25929__$1 = (state_25988[(2)]);var inst_25930 = (inst_25929__$1 == null);var state_25988__$1 = (function (){var statearr_25994 = state_25988;(statearr_25994[(13)] = inst_25929__$1);
return statearr_25994;
})();if(cljs.core.truth_(inst_25930))
{var statearr_25995_26034 = state_25988__$1;(statearr_25995_26034[(1)] = (5));
} else
{var statearr_25996_26035 = state_25988__$1;(statearr_25996_26035[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (15)))
{var state_25988__$1 = state_25988;var statearr_26000_26036 = state_25988__$1;(statearr_26000_26036[(2)] = null);
(statearr_26000_26036[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (21)))
{var state_25988__$1 = state_25988;var statearr_26001_26037 = state_25988__$1;(statearr_26001_26037[(2)] = null);
(statearr_26001_26037[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (13)))
{var inst_25941 = (state_25988[(8)]);var inst_25943 = (state_25988[(9)]);var inst_25942 = (state_25988[(10)]);var inst_25940 = (state_25988[(11)]);var inst_25950 = (state_25988[(2)]);var inst_25951 = (inst_25943 + (1));var tmp25997 = inst_25941;var tmp25998 = inst_25942;var tmp25999 = inst_25940;var inst_25940__$1 = tmp25999;var inst_25941__$1 = tmp25997;var inst_25942__$1 = tmp25998;var inst_25943__$1 = inst_25951;var state_25988__$1 = (function (){var statearr_26002 = state_25988;(statearr_26002[(8)] = inst_25941__$1);
(statearr_26002[(9)] = inst_25943__$1);
(statearr_26002[(10)] = inst_25942__$1);
(statearr_26002[(11)] = inst_25940__$1);
(statearr_26002[(14)] = inst_25950);
return statearr_26002;
})();var statearr_26003_26038 = state_25988__$1;(statearr_26003_26038[(2)] = null);
(statearr_26003_26038[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (22)))
{var state_25988__$1 = state_25988;var statearr_26004_26039 = state_25988__$1;(statearr_26004_26039[(2)] = null);
(statearr_26004_26039[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (6)))
{var inst_25929 = (state_25988[(13)]);var inst_25938 = f.call(null,inst_25929);var inst_25939 = cljs.core.seq.call(null,inst_25938);var inst_25940 = inst_25939;var inst_25941 = null;var inst_25942 = (0);var inst_25943 = (0);var state_25988__$1 = (function (){var statearr_26005 = state_25988;(statearr_26005[(8)] = inst_25941);
(statearr_26005[(9)] = inst_25943);
(statearr_26005[(10)] = inst_25942);
(statearr_26005[(11)] = inst_25940);
return statearr_26005;
})();var statearr_26006_26040 = state_25988__$1;(statearr_26006_26040[(2)] = null);
(statearr_26006_26040[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (17)))
{var inst_25954 = (state_25988[(7)]);var inst_25958 = cljs.core.chunk_first.call(null,inst_25954);var inst_25959 = cljs.core.chunk_rest.call(null,inst_25954);var inst_25960 = cljs.core.count.call(null,inst_25958);var inst_25940 = inst_25959;var inst_25941 = inst_25958;var inst_25942 = inst_25960;var inst_25943 = (0);var state_25988__$1 = (function (){var statearr_26007 = state_25988;(statearr_26007[(8)] = inst_25941);
(statearr_26007[(9)] = inst_25943);
(statearr_26007[(10)] = inst_25942);
(statearr_26007[(11)] = inst_25940);
return statearr_26007;
})();var statearr_26008_26041 = state_25988__$1;(statearr_26008_26041[(2)] = null);
(statearr_26008_26041[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (3)))
{var inst_25986 = (state_25988[(2)]);var state_25988__$1 = state_25988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25988__$1,inst_25986);
} else
{if((state_val_25989 === (12)))
{var inst_25974 = (state_25988[(2)]);var state_25988__$1 = state_25988;var statearr_26009_26042 = state_25988__$1;(statearr_26009_26042[(2)] = inst_25974);
(statearr_26009_26042[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (2)))
{var state_25988__$1 = state_25988;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25988__$1,(4),in$);
} else
{if((state_val_25989 === (23)))
{var inst_25982 = (state_25988[(2)]);var state_25988__$1 = state_25988;var statearr_26010_26043 = state_25988__$1;(statearr_26010_26043[(2)] = inst_25982);
(statearr_26010_26043[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (19)))
{var inst_25969 = (state_25988[(2)]);var state_25988__$1 = state_25988;var statearr_26011_26044 = state_25988__$1;(statearr_26011_26044[(2)] = inst_25969);
(statearr_26011_26044[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (11)))
{var inst_25954 = (state_25988[(7)]);var inst_25940 = (state_25988[(11)]);var inst_25954__$1 = cljs.core.seq.call(null,inst_25940);var state_25988__$1 = (function (){var statearr_26012 = state_25988;(statearr_26012[(7)] = inst_25954__$1);
return statearr_26012;
})();if(inst_25954__$1)
{var statearr_26013_26045 = state_25988__$1;(statearr_26013_26045[(1)] = (14));
} else
{var statearr_26014_26046 = state_25988__$1;(statearr_26014_26046[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (9)))
{var inst_25976 = (state_25988[(2)]);var inst_25977 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25988__$1 = (function (){var statearr_26015 = state_25988;(statearr_26015[(15)] = inst_25976);
return statearr_26015;
})();if(cljs.core.truth_(inst_25977))
{var statearr_26016_26047 = state_25988__$1;(statearr_26016_26047[(1)] = (21));
} else
{var statearr_26017_26048 = state_25988__$1;(statearr_26017_26048[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (5)))
{var inst_25932 = cljs.core.async.close_BANG_.call(null,out);var state_25988__$1 = state_25988;var statearr_26018_26049 = state_25988__$1;(statearr_26018_26049[(2)] = inst_25932);
(statearr_26018_26049[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (14)))
{var inst_25954 = (state_25988[(7)]);var inst_25956 = cljs.core.chunked_seq_QMARK_.call(null,inst_25954);var state_25988__$1 = state_25988;if(inst_25956)
{var statearr_26019_26050 = state_25988__$1;(statearr_26019_26050[(1)] = (17));
} else
{var statearr_26020_26051 = state_25988__$1;(statearr_26020_26051[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (16)))
{var inst_25972 = (state_25988[(2)]);var state_25988__$1 = state_25988;var statearr_26021_26052 = state_25988__$1;(statearr_26021_26052[(2)] = inst_25972);
(statearr_26021_26052[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25989 === (10)))
{var inst_25941 = (state_25988[(8)]);var inst_25943 = (state_25988[(9)]);var inst_25948 = cljs.core._nth.call(null,inst_25941,inst_25943);var state_25988__$1 = state_25988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25988__$1,(13),out,inst_25948);
} else
{if((state_val_25989 === (18)))
{var inst_25954 = (state_25988[(7)]);var inst_25963 = cljs.core.first.call(null,inst_25954);var state_25988__$1 = state_25988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25988__$1,(20),out,inst_25963);
} else
{if((state_val_25989 === (8)))
{var inst_25943 = (state_25988[(9)]);var inst_25942 = (state_25988[(10)]);var inst_25945 = (inst_25943 < inst_25942);var inst_25946 = inst_25945;var state_25988__$1 = state_25988;if(cljs.core.truth_(inst_25946))
{var statearr_26022_26053 = state_25988__$1;(statearr_26022_26053[(1)] = (10));
} else
{var statearr_26023_26054 = state_25988__$1;(statearr_26023_26054[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26027[(0)] = state_machine__9111__auto__);
(statearr_26027[(1)] = (1));
return statearr_26027;
});
var state_machine__9111__auto____1 = (function (state_25988){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25988);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26028){if((e26028 instanceof Object))
{var ex__9114__auto__ = e26028;var statearr_26029_26055 = state_25988;(statearr_26029_26055[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25988);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26028;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26056 = state_25988;
state_25988 = G__26056;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25988){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_26030 = f__9126__auto__.call(null);(statearr_26030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_26030;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26153 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26153,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26153,out){
return (function (state_26128){var state_val_26129 = (state_26128[(1)]);if((state_val_26129 === (7)))
{var inst_26123 = (state_26128[(2)]);var state_26128__$1 = state_26128;var statearr_26130_26154 = state_26128__$1;(statearr_26130_26154[(2)] = inst_26123);
(statearr_26130_26154[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (1)))
{var inst_26105 = null;var state_26128__$1 = (function (){var statearr_26131 = state_26128;(statearr_26131[(7)] = inst_26105);
return statearr_26131;
})();var statearr_26132_26155 = state_26128__$1;(statearr_26132_26155[(2)] = null);
(statearr_26132_26155[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (4)))
{var inst_26108 = (state_26128[(8)]);var inst_26108__$1 = (state_26128[(2)]);var inst_26109 = (inst_26108__$1 == null);var inst_26110 = cljs.core.not.call(null,inst_26109);var state_26128__$1 = (function (){var statearr_26133 = state_26128;(statearr_26133[(8)] = inst_26108__$1);
return statearr_26133;
})();if(inst_26110)
{var statearr_26134_26156 = state_26128__$1;(statearr_26134_26156[(1)] = (5));
} else
{var statearr_26135_26157 = state_26128__$1;(statearr_26135_26157[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (6)))
{var state_26128__$1 = state_26128;var statearr_26136_26158 = state_26128__$1;(statearr_26136_26158[(2)] = null);
(statearr_26136_26158[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (3)))
{var inst_26125 = (state_26128[(2)]);var inst_26126 = cljs.core.async.close_BANG_.call(null,out);var state_26128__$1 = (function (){var statearr_26137 = state_26128;(statearr_26137[(9)] = inst_26125);
return statearr_26137;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26128__$1,inst_26126);
} else
{if((state_val_26129 === (2)))
{var state_26128__$1 = state_26128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26128__$1,(4),ch);
} else
{if((state_val_26129 === (11)))
{var inst_26108 = (state_26128[(8)]);var inst_26117 = (state_26128[(2)]);var inst_26105 = inst_26108;var state_26128__$1 = (function (){var statearr_26138 = state_26128;(statearr_26138[(7)] = inst_26105);
(statearr_26138[(10)] = inst_26117);
return statearr_26138;
})();var statearr_26139_26159 = state_26128__$1;(statearr_26139_26159[(2)] = null);
(statearr_26139_26159[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (9)))
{var inst_26108 = (state_26128[(8)]);var state_26128__$1 = state_26128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26128__$1,(11),out,inst_26108);
} else
{if((state_val_26129 === (5)))
{var inst_26105 = (state_26128[(7)]);var inst_26108 = (state_26128[(8)]);var inst_26112 = cljs.core._EQ_.call(null,inst_26108,inst_26105);var state_26128__$1 = state_26128;if(inst_26112)
{var statearr_26141_26160 = state_26128__$1;(statearr_26141_26160[(1)] = (8));
} else
{var statearr_26142_26161 = state_26128__$1;(statearr_26142_26161[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (10)))
{var inst_26120 = (state_26128[(2)]);var state_26128__$1 = state_26128;var statearr_26143_26162 = state_26128__$1;(statearr_26143_26162[(2)] = inst_26120);
(statearr_26143_26162[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (8)))
{var inst_26105 = (state_26128[(7)]);var tmp26140 = inst_26105;var inst_26105__$1 = tmp26140;var state_26128__$1 = (function (){var statearr_26144 = state_26128;(statearr_26144[(7)] = inst_26105__$1);
return statearr_26144;
})();var statearr_26145_26163 = state_26128__$1;(statearr_26145_26163[(2)] = null);
(statearr_26145_26163[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___26153,out))
;return ((function (switch__9110__auto__,c__9125__auto___26153,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26149 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26149[(0)] = state_machine__9111__auto__);
(statearr_26149[(1)] = (1));
return statearr_26149;
});
var state_machine__9111__auto____1 = (function (state_26128){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26128);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26150){if((e26150 instanceof Object))
{var ex__9114__auto__ = e26150;var statearr_26151_26164 = state_26128;(statearr_26151_26164[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26128);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26150;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26165 = state_26128;
state_26128 = G__26165;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26128){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26153,out))
})();var state__9127__auto__ = (function (){var statearr_26152 = f__9126__auto__.call(null);(statearr_26152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26153);
return statearr_26152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26153,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26300 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26300,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26300,out){
return (function (state_26270){var state_val_26271 = (state_26270[(1)]);if((state_val_26271 === (7)))
{var inst_26266 = (state_26270[(2)]);var state_26270__$1 = state_26270;var statearr_26272_26301 = state_26270__$1;(statearr_26272_26301[(2)] = inst_26266);
(statearr_26272_26301[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26271 === (1)))
{var inst_26233 = (new Array(n));var inst_26234 = inst_26233;var inst_26235 = (0);var state_26270__$1 = (function (){var statearr_26273 = state_26270;(statearr_26273[(7)] = inst_26234);
(statearr_26273[(8)] = inst_26235);
return statearr_26273;
})();var statearr_26274_26302 = state_26270__$1;(statearr_26274_26302[(2)] = null);
(statearr_26274_26302[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26271 === (4)))
{var inst_26238 = (state_26270[(9)]);var inst_26238__$1 = (state_26270[(2)]);var inst_26239 = (inst_26238__$1 == null);var inst_26240 = cljs.core.not.call(null,inst_26239);var state_26270__$1 = (function (){var statearr_26275 = state_26270;(statearr_26275[(9)] = inst_26238__$1);
return statearr_26275;
})();if(inst_26240)
{var statearr_26276_26303 = state_26270__$1;(statearr_26276_26303[(1)] = (5));
} else
{var statearr_26277_26304 = state_26270__$1;(statearr_26277_26304[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26271 === (15)))
{var inst_26260 = (state_26270[(2)]);var state_26270__$1 = state_26270;var statearr_26278_26305 = state_26270__$1;(statearr_26278_26305[(2)] = inst_26260);
(statearr_26278_26305[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26271 === (13)))
{var state_26270__$1 = state_26270;var statearr_26279_26306 = state_26270__$1;(statearr_26279_26306[(2)] = null);
(statearr_26279_26306[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26271 === (6)))
{var inst_26235 = (state_26270[(8)]);var inst_26256 = (inst_26235 > (0));var state_26270__$1 = state_26270;if(cljs.core.truth_(inst_26256))
{var statearr_26280_26307 = state_26270__$1;(statearr_26280_26307[(1)] = (12));
} else
{var statearr_26281_26308 = state_26270__$1;(statearr_26281_26308[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26271 === (3)))
{var inst_26268 = (state_26270[(2)]);var state_26270__$1 = state_26270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26270__$1,inst_26268);
} else
{if((state_val_26271 === (12)))
{var inst_26234 = (state_26270[(7)]);var inst_26258 = cljs.core.vec.call(null,inst_26234);var state_26270__$1 = state_26270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26270__$1,(15),out,inst_26258);
} else
{if((state_val_26271 === (2)))
{var state_26270__$1 = state_26270;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26270__$1,(4),ch);
} else
{if((state_val_26271 === (11)))
{var inst_26250 = (state_26270[(2)]);var inst_26251 = (new Array(n));var inst_26234 = inst_26251;var inst_26235 = (0);var state_26270__$1 = (function (){var statearr_26282 = state_26270;(statearr_26282[(10)] = inst_26250);
(statearr_26282[(7)] = inst_26234);
(statearr_26282[(8)] = inst_26235);
return statearr_26282;
})();var statearr_26283_26309 = state_26270__$1;(statearr_26283_26309[(2)] = null);
(statearr_26283_26309[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26271 === (9)))
{var inst_26234 = (state_26270[(7)]);var inst_26248 = cljs.core.vec.call(null,inst_26234);var state_26270__$1 = state_26270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26270__$1,(11),out,inst_26248);
} else
{if((state_val_26271 === (5)))
{var inst_26238 = (state_26270[(9)]);var inst_26234 = (state_26270[(7)]);var inst_26243 = (state_26270[(11)]);var inst_26235 = (state_26270[(8)]);var inst_26242 = (inst_26234[inst_26235] = inst_26238);var inst_26243__$1 = (inst_26235 + (1));var inst_26244 = (inst_26243__$1 < n);var state_26270__$1 = (function (){var statearr_26284 = state_26270;(statearr_26284[(11)] = inst_26243__$1);
(statearr_26284[(12)] = inst_26242);
return statearr_26284;
})();if(cljs.core.truth_(inst_26244))
{var statearr_26285_26310 = state_26270__$1;(statearr_26285_26310[(1)] = (8));
} else
{var statearr_26286_26311 = state_26270__$1;(statearr_26286_26311[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26271 === (14)))
{var inst_26263 = (state_26270[(2)]);var inst_26264 = cljs.core.async.close_BANG_.call(null,out);var state_26270__$1 = (function (){var statearr_26288 = state_26270;(statearr_26288[(13)] = inst_26263);
return statearr_26288;
})();var statearr_26289_26312 = state_26270__$1;(statearr_26289_26312[(2)] = inst_26264);
(statearr_26289_26312[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26271 === (10)))
{var inst_26254 = (state_26270[(2)]);var state_26270__$1 = state_26270;var statearr_26290_26313 = state_26270__$1;(statearr_26290_26313[(2)] = inst_26254);
(statearr_26290_26313[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26271 === (8)))
{var inst_26234 = (state_26270[(7)]);var inst_26243 = (state_26270[(11)]);var tmp26287 = inst_26234;var inst_26234__$1 = tmp26287;var inst_26235 = inst_26243;var state_26270__$1 = (function (){var statearr_26291 = state_26270;(statearr_26291[(7)] = inst_26234__$1);
(statearr_26291[(8)] = inst_26235);
return statearr_26291;
})();var statearr_26292_26314 = state_26270__$1;(statearr_26292_26314[(2)] = null);
(statearr_26292_26314[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___26300,out))
;return ((function (switch__9110__auto__,c__9125__auto___26300,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26296[(0)] = state_machine__9111__auto__);
(statearr_26296[(1)] = (1));
return statearr_26296;
});
var state_machine__9111__auto____1 = (function (state_26270){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26270);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26297){if((e26297 instanceof Object))
{var ex__9114__auto__ = e26297;var statearr_26298_26315 = state_26270;(statearr_26298_26315[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26270);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26297;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26316 = state_26270;
state_26270 = G__26316;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26270){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26300,out))
})();var state__9127__auto__ = (function (){var statearr_26299 = f__9126__auto__.call(null);(statearr_26299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26300);
return statearr_26299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26300,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26459 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26459,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26459,out){
return (function (state_26429){var state_val_26430 = (state_26429[(1)]);if((state_val_26430 === (7)))
{var inst_26425 = (state_26429[(2)]);var state_26429__$1 = state_26429;var statearr_26431_26460 = state_26429__$1;(statearr_26431_26460[(2)] = inst_26425);
(statearr_26431_26460[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26430 === (1)))
{var inst_26388 = [];var inst_26389 = inst_26388;var inst_26390 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26429__$1 = (function (){var statearr_26432 = state_26429;(statearr_26432[(7)] = inst_26390);
(statearr_26432[(8)] = inst_26389);
return statearr_26432;
})();var statearr_26433_26461 = state_26429__$1;(statearr_26433_26461[(2)] = null);
(statearr_26433_26461[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26430 === (4)))
{var inst_26393 = (state_26429[(9)]);var inst_26393__$1 = (state_26429[(2)]);var inst_26394 = (inst_26393__$1 == null);var inst_26395 = cljs.core.not.call(null,inst_26394);var state_26429__$1 = (function (){var statearr_26434 = state_26429;(statearr_26434[(9)] = inst_26393__$1);
return statearr_26434;
})();if(inst_26395)
{var statearr_26435_26462 = state_26429__$1;(statearr_26435_26462[(1)] = (5));
} else
{var statearr_26436_26463 = state_26429__$1;(statearr_26436_26463[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26430 === (15)))
{var inst_26419 = (state_26429[(2)]);var state_26429__$1 = state_26429;var statearr_26437_26464 = state_26429__$1;(statearr_26437_26464[(2)] = inst_26419);
(statearr_26437_26464[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26430 === (13)))
{var state_26429__$1 = state_26429;var statearr_26438_26465 = state_26429__$1;(statearr_26438_26465[(2)] = null);
(statearr_26438_26465[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26430 === (6)))
{var inst_26389 = (state_26429[(8)]);var inst_26414 = inst_26389.length;var inst_26415 = (inst_26414 > (0));var state_26429__$1 = state_26429;if(cljs.core.truth_(inst_26415))
{var statearr_26439_26466 = state_26429__$1;(statearr_26439_26466[(1)] = (12));
} else
{var statearr_26440_26467 = state_26429__$1;(statearr_26440_26467[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26430 === (3)))
{var inst_26427 = (state_26429[(2)]);var state_26429__$1 = state_26429;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26429__$1,inst_26427);
} else
{if((state_val_26430 === (12)))
{var inst_26389 = (state_26429[(8)]);var inst_26417 = cljs.core.vec.call(null,inst_26389);var state_26429__$1 = state_26429;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26429__$1,(15),out,inst_26417);
} else
{if((state_val_26430 === (2)))
{var state_26429__$1 = state_26429;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26429__$1,(4),ch);
} else
{if((state_val_26430 === (11)))
{var inst_26397 = (state_26429[(10)]);var inst_26393 = (state_26429[(9)]);var inst_26407 = (state_26429[(2)]);var inst_26408 = [];var inst_26409 = inst_26408.push(inst_26393);var inst_26389 = inst_26408;var inst_26390 = inst_26397;var state_26429__$1 = (function (){var statearr_26441 = state_26429;(statearr_26441[(7)] = inst_26390);
(statearr_26441[(11)] = inst_26407);
(statearr_26441[(12)] = inst_26409);
(statearr_26441[(8)] = inst_26389);
return statearr_26441;
})();var statearr_26442_26468 = state_26429__$1;(statearr_26442_26468[(2)] = null);
(statearr_26442_26468[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26430 === (9)))
{var inst_26389 = (state_26429[(8)]);var inst_26405 = cljs.core.vec.call(null,inst_26389);var state_26429__$1 = state_26429;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26429__$1,(11),out,inst_26405);
} else
{if((state_val_26430 === (5)))
{var inst_26390 = (state_26429[(7)]);var inst_26397 = (state_26429[(10)]);var inst_26393 = (state_26429[(9)]);var inst_26397__$1 = f.call(null,inst_26393);var inst_26398 = cljs.core._EQ_.call(null,inst_26397__$1,inst_26390);var inst_26399 = cljs.core.keyword_identical_QMARK_.call(null,inst_26390,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26400 = (inst_26398) || (inst_26399);var state_26429__$1 = (function (){var statearr_26443 = state_26429;(statearr_26443[(10)] = inst_26397__$1);
return statearr_26443;
})();if(cljs.core.truth_(inst_26400))
{var statearr_26444_26469 = state_26429__$1;(statearr_26444_26469[(1)] = (8));
} else
{var statearr_26445_26470 = state_26429__$1;(statearr_26445_26470[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26430 === (14)))
{var inst_26422 = (state_26429[(2)]);var inst_26423 = cljs.core.async.close_BANG_.call(null,out);var state_26429__$1 = (function (){var statearr_26447 = state_26429;(statearr_26447[(13)] = inst_26422);
return statearr_26447;
})();var statearr_26448_26471 = state_26429__$1;(statearr_26448_26471[(2)] = inst_26423);
(statearr_26448_26471[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26430 === (10)))
{var inst_26412 = (state_26429[(2)]);var state_26429__$1 = state_26429;var statearr_26449_26472 = state_26429__$1;(statearr_26449_26472[(2)] = inst_26412);
(statearr_26449_26472[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26430 === (8)))
{var inst_26397 = (state_26429[(10)]);var inst_26393 = (state_26429[(9)]);var inst_26389 = (state_26429[(8)]);var inst_26402 = inst_26389.push(inst_26393);var tmp26446 = inst_26389;var inst_26389__$1 = tmp26446;var inst_26390 = inst_26397;var state_26429__$1 = (function (){var statearr_26450 = state_26429;(statearr_26450[(7)] = inst_26390);
(statearr_26450[(14)] = inst_26402);
(statearr_26450[(8)] = inst_26389__$1);
return statearr_26450;
})();var statearr_26451_26473 = state_26429__$1;(statearr_26451_26473[(2)] = null);
(statearr_26451_26473[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___26459,out))
;return ((function (switch__9110__auto__,c__9125__auto___26459,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26455[(0)] = state_machine__9111__auto__);
(statearr_26455[(1)] = (1));
return statearr_26455;
});
var state_machine__9111__auto____1 = (function (state_26429){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26429);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26456){if((e26456 instanceof Object))
{var ex__9114__auto__ = e26456;var statearr_26457_26474 = state_26429;(statearr_26457_26474[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26429);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26456;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26475 = state_26429;
state_26429 = G__26475;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26429){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26459,out))
})();var state__9127__auto__ = (function (){var statearr_26458 = f__9126__auto__.call(null);(statearr_26458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26459);
return statearr_26458;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26459,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
