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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24327 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24327 = (function (f,fn_handler,meta24328){
this.f = f;
this.fn_handler = fn_handler;
this.meta24328 = meta24328;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24327.cljs$lang$type = true;
cljs.core.async.t24327.cljs$lang$ctorStr = "cljs.core.async/t24327";
cljs.core.async.t24327.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24327");
});
cljs.core.async.t24327.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24329){var self__ = this;
var _24329__$1 = this;return self__.meta24328;
});
cljs.core.async.t24327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24329,meta24328__$1){var self__ = this;
var _24329__$1 = this;return (new cljs.core.async.t24327(self__.f,self__.fn_handler,meta24328__$1));
});
cljs.core.async.__GT_t24327 = (function __GT_t24327(f__$1,fn_handler__$1,meta24328){return (new cljs.core.async.t24327(f__$1,fn_handler__$1,meta24328));
});
}
return (new cljs.core.async.t24327(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24331 = buff;if(G__24331)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__24331.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24331.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24331);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24331);
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
{var val_24332 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24332);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24332,ret){
return (function (){return fn1.call(null,val_24332);
});})(val_24332,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___24333 = n;var x_24334 = (0);while(true){
if((x_24334 < n__4508__auto___24333))
{(a[x_24334] = (0));
{
var G__24335 = (x_24334 + (1));
x_24334 = G__24335;
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
var G__24336 = (i + (1));
i = G__24336;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24340 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24340 = (function (flag,alt_flag,meta24341){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24341 = meta24341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24340.cljs$lang$type = true;
cljs.core.async.t24340.cljs$lang$ctorStr = "cljs.core.async/t24340";
cljs.core.async.t24340.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24340");
});})(flag))
;
cljs.core.async.t24340.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24342){var self__ = this;
var _24342__$1 = this;return self__.meta24341;
});})(flag))
;
cljs.core.async.t24340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24342,meta24341__$1){var self__ = this;
var _24342__$1 = this;return (new cljs.core.async.t24340(self__.flag,self__.alt_flag,meta24341__$1));
});})(flag))
;
cljs.core.async.__GT_t24340 = ((function (flag){
return (function __GT_t24340(flag__$1,alt_flag__$1,meta24341){return (new cljs.core.async.t24340(flag__$1,alt_flag__$1,meta24341));
});})(flag))
;
}
return (new cljs.core.async.t24340(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24346 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24346 = (function (cb,flag,alt_handler,meta24347){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24347 = meta24347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24346.cljs$lang$type = true;
cljs.core.async.t24346.cljs$lang$ctorStr = "cljs.core.async/t24346";
cljs.core.async.t24346.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24346");
});
cljs.core.async.t24346.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24348){var self__ = this;
var _24348__$1 = this;return self__.meta24347;
});
cljs.core.async.t24346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24348,meta24347__$1){var self__ = this;
var _24348__$1 = this;return (new cljs.core.async.t24346(self__.cb,self__.flag,self__.alt_handler,meta24347__$1));
});
cljs.core.async.__GT_t24346 = (function __GT_t24346(cb__$1,flag__$1,alt_handler__$1,meta24347){return (new cljs.core.async.t24346(cb__$1,flag__$1,alt_handler__$1,meta24347));
});
}
return (new cljs.core.async.t24346(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24349_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24349_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24350_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24350_SHARP_,port], null));
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
var G__24351 = (i + (1));
i = G__24351;
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
var alts_BANG___delegate = function (ports,p__24352){var map__24354 = p__24352;var map__24354__$1 = ((cljs.core.seq_QMARK_.call(null,map__24354))?cljs.core.apply.call(null,cljs.core.hash_map,map__24354):map__24354);var opts = map__24354__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24352 = null;if (arguments.length > 1) {
  p__24352 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24352);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24355){
var ports = cljs.core.first(arglist__24355);
var p__24352 = cljs.core.rest(arglist__24355);
return alts_BANG___delegate(ports,p__24352);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11297__auto___24450 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___24450){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___24450){
return (function (state_24426){var state_val_24427 = (state_24426[(1)]);if((state_val_24427 === (7)))
{var inst_24422 = (state_24426[(2)]);var state_24426__$1 = state_24426;var statearr_24428_24451 = state_24426__$1;(statearr_24428_24451[(2)] = inst_24422);
(statearr_24428_24451[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24427 === (1)))
{var state_24426__$1 = state_24426;var statearr_24429_24452 = state_24426__$1;(statearr_24429_24452[(2)] = null);
(statearr_24429_24452[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24427 === (4)))
{var inst_24405 = (state_24426[(7)]);var inst_24405__$1 = (state_24426[(2)]);var inst_24406 = (inst_24405__$1 == null);var state_24426__$1 = (function (){var statearr_24430 = state_24426;(statearr_24430[(7)] = inst_24405__$1);
return statearr_24430;
})();if(cljs.core.truth_(inst_24406))
{var statearr_24431_24453 = state_24426__$1;(statearr_24431_24453[(1)] = (5));
} else
{var statearr_24432_24454 = state_24426__$1;(statearr_24432_24454[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24427 === (13)))
{var state_24426__$1 = state_24426;var statearr_24433_24455 = state_24426__$1;(statearr_24433_24455[(2)] = null);
(statearr_24433_24455[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24427 === (6)))
{var inst_24405 = (state_24426[(7)]);var state_24426__$1 = state_24426;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24426__$1,(11),to,inst_24405);
} else
{if((state_val_24427 === (3)))
{var inst_24424 = (state_24426[(2)]);var state_24426__$1 = state_24426;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24426__$1,inst_24424);
} else
{if((state_val_24427 === (12)))
{var state_24426__$1 = state_24426;var statearr_24434_24456 = state_24426__$1;(statearr_24434_24456[(2)] = null);
(statearr_24434_24456[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24427 === (2)))
{var state_24426__$1 = state_24426;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24426__$1,(4),from);
} else
{if((state_val_24427 === (11)))
{var inst_24415 = (state_24426[(2)]);var state_24426__$1 = state_24426;if(cljs.core.truth_(inst_24415))
{var statearr_24435_24457 = state_24426__$1;(statearr_24435_24457[(1)] = (12));
} else
{var statearr_24436_24458 = state_24426__$1;(statearr_24436_24458[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24427 === (9)))
{var state_24426__$1 = state_24426;var statearr_24437_24459 = state_24426__$1;(statearr_24437_24459[(2)] = null);
(statearr_24437_24459[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24427 === (5)))
{var state_24426__$1 = state_24426;if(cljs.core.truth_(close_QMARK_))
{var statearr_24438_24460 = state_24426__$1;(statearr_24438_24460[(1)] = (8));
} else
{var statearr_24439_24461 = state_24426__$1;(statearr_24439_24461[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24427 === (14)))
{var inst_24420 = (state_24426[(2)]);var state_24426__$1 = state_24426;var statearr_24440_24462 = state_24426__$1;(statearr_24440_24462[(2)] = inst_24420);
(statearr_24440_24462[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24427 === (10)))
{var inst_24412 = (state_24426[(2)]);var state_24426__$1 = state_24426;var statearr_24441_24463 = state_24426__$1;(statearr_24441_24463[(2)] = inst_24412);
(statearr_24441_24463[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24427 === (8)))
{var inst_24409 = cljs.core.async.close_BANG_.call(null,to);var state_24426__$1 = state_24426;var statearr_24442_24464 = state_24426__$1;(statearr_24442_24464[(2)] = inst_24409);
(statearr_24442_24464[(1)] = (10));
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
});})(c__11297__auto___24450))
;return ((function (switch__11241__auto__,c__11297__auto___24450){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24446 = [null,null,null,null,null,null,null,null];(statearr_24446[(0)] = state_machine__11242__auto__);
(statearr_24446[(1)] = (1));
return statearr_24446;
});
var state_machine__11242__auto____1 = (function (state_24426){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24426);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24447){if((e24447 instanceof Object))
{var ex__11245__auto__ = e24447;var statearr_24448_24465 = state_24426;(statearr_24448_24465[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24426);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24447;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24466 = state_24426;
state_24426 = G__24466;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24426){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___24450))
})();var state__11299__auto__ = (function (){var statearr_24449 = f__11298__auto__.call(null);(statearr_24449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24450);
return statearr_24449;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___24450))
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
return (function (p__24650){var vec__24651 = p__24650;var v = cljs.core.nth.call(null,vec__24651,(0),null);var p = cljs.core.nth.call(null,vec__24651,(1),null);var job = vec__24651;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__11297__auto___24833 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___24833,res,vec__24651,v,p,job,jobs,results){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___24833,res,vec__24651,v,p,job,jobs,results){
return (function (state_24656){var state_val_24657 = (state_24656[(1)]);if((state_val_24657 === (2)))
{var inst_24653 = (state_24656[(2)]);var inst_24654 = cljs.core.async.close_BANG_.call(null,res);var state_24656__$1 = (function (){var statearr_24658 = state_24656;(statearr_24658[(7)] = inst_24653);
return statearr_24658;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24656__$1,inst_24654);
} else
{if((state_val_24657 === (1)))
{var state_24656__$1 = state_24656;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24656__$1,(2),res,v);
} else
{return null;
}
}
});})(c__11297__auto___24833,res,vec__24651,v,p,job,jobs,results))
;return ((function (switch__11241__auto__,c__11297__auto___24833,res,vec__24651,v,p,job,jobs,results){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24662 = [null,null,null,null,null,null,null,null];(statearr_24662[(0)] = state_machine__11242__auto__);
(statearr_24662[(1)] = (1));
return statearr_24662;
});
var state_machine__11242__auto____1 = (function (state_24656){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24656);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24663){if((e24663 instanceof Object))
{var ex__11245__auto__ = e24663;var statearr_24664_24834 = state_24656;(statearr_24664_24834[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24656);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24663;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24835 = state_24656;
state_24656 = G__24835;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24656){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___24833,res,vec__24651,v,p,job,jobs,results))
})();var state__11299__auto__ = (function (){var statearr_24665 = f__11298__auto__.call(null);(statearr_24665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24833);
return statearr_24665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___24833,res,vec__24651,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24666){var vec__24667 = p__24666;var v = cljs.core.nth.call(null,vec__24667,(0),null);var p = cljs.core.nth.call(null,vec__24667,(1),null);var job = vec__24667;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24836 = n;var __24837 = (0);while(true){
if((__24837 < n__4508__auto___24836))
{var G__24668_24838 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24668_24838) {
case "async":
var c__11297__auto___24840 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24837,c__11297__auto___24840,G__24668_24838,n__4508__auto___24836,jobs,results,process,async){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (__24837,c__11297__auto___24840,G__24668_24838,n__4508__auto___24836,jobs,results,process,async){
return (function (state_24681){var state_val_24682 = (state_24681[(1)]);if((state_val_24682 === (7)))
{var inst_24677 = (state_24681[(2)]);var state_24681__$1 = state_24681;var statearr_24683_24841 = state_24681__$1;(statearr_24683_24841[(2)] = inst_24677);
(statearr_24683_24841[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24682 === (6)))
{var state_24681__$1 = state_24681;var statearr_24684_24842 = state_24681__$1;(statearr_24684_24842[(2)] = null);
(statearr_24684_24842[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24682 === (5)))
{var state_24681__$1 = state_24681;var statearr_24685_24843 = state_24681__$1;(statearr_24685_24843[(2)] = null);
(statearr_24685_24843[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24682 === (4)))
{var inst_24671 = (state_24681[(2)]);var inst_24672 = async.call(null,inst_24671);var state_24681__$1 = state_24681;if(cljs.core.truth_(inst_24672))
{var statearr_24686_24844 = state_24681__$1;(statearr_24686_24844[(1)] = (5));
} else
{var statearr_24687_24845 = state_24681__$1;(statearr_24687_24845[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24682 === (3)))
{var inst_24679 = (state_24681[(2)]);var state_24681__$1 = state_24681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24681__$1,inst_24679);
} else
{if((state_val_24682 === (2)))
{var state_24681__$1 = state_24681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24681__$1,(4),jobs);
} else
{if((state_val_24682 === (1)))
{var state_24681__$1 = state_24681;var statearr_24688_24846 = state_24681__$1;(statearr_24688_24846[(2)] = null);
(statearr_24688_24846[(1)] = (2));
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
});})(__24837,c__11297__auto___24840,G__24668_24838,n__4508__auto___24836,jobs,results,process,async))
;return ((function (__24837,switch__11241__auto__,c__11297__auto___24840,G__24668_24838,n__4508__auto___24836,jobs,results,process,async){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24692 = [null,null,null,null,null,null,null];(statearr_24692[(0)] = state_machine__11242__auto__);
(statearr_24692[(1)] = (1));
return statearr_24692;
});
var state_machine__11242__auto____1 = (function (state_24681){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24681);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24693){if((e24693 instanceof Object))
{var ex__11245__auto__ = e24693;var statearr_24694_24847 = state_24681;(statearr_24694_24847[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24681);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24693;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24848 = state_24681;
state_24681 = G__24848;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24681){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(__24837,switch__11241__auto__,c__11297__auto___24840,G__24668_24838,n__4508__auto___24836,jobs,results,process,async))
})();var state__11299__auto__ = (function (){var statearr_24695 = f__11298__auto__.call(null);(statearr_24695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24840);
return statearr_24695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(__24837,c__11297__auto___24840,G__24668_24838,n__4508__auto___24836,jobs,results,process,async))
);

break;
case "compute":
var c__11297__auto___24849 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24837,c__11297__auto___24849,G__24668_24838,n__4508__auto___24836,jobs,results,process,async){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (__24837,c__11297__auto___24849,G__24668_24838,n__4508__auto___24836,jobs,results,process,async){
return (function (state_24708){var state_val_24709 = (state_24708[(1)]);if((state_val_24709 === (7)))
{var inst_24704 = (state_24708[(2)]);var state_24708__$1 = state_24708;var statearr_24710_24850 = state_24708__$1;(statearr_24710_24850[(2)] = inst_24704);
(statearr_24710_24850[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24709 === (6)))
{var state_24708__$1 = state_24708;var statearr_24711_24851 = state_24708__$1;(statearr_24711_24851[(2)] = null);
(statearr_24711_24851[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24709 === (5)))
{var state_24708__$1 = state_24708;var statearr_24712_24852 = state_24708__$1;(statearr_24712_24852[(2)] = null);
(statearr_24712_24852[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24709 === (4)))
{var inst_24698 = (state_24708[(2)]);var inst_24699 = process.call(null,inst_24698);var state_24708__$1 = state_24708;if(cljs.core.truth_(inst_24699))
{var statearr_24713_24853 = state_24708__$1;(statearr_24713_24853[(1)] = (5));
} else
{var statearr_24714_24854 = state_24708__$1;(statearr_24714_24854[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24709 === (3)))
{var inst_24706 = (state_24708[(2)]);var state_24708__$1 = state_24708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24708__$1,inst_24706);
} else
{if((state_val_24709 === (2)))
{var state_24708__$1 = state_24708;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24708__$1,(4),jobs);
} else
{if((state_val_24709 === (1)))
{var state_24708__$1 = state_24708;var statearr_24715_24855 = state_24708__$1;(statearr_24715_24855[(2)] = null);
(statearr_24715_24855[(1)] = (2));
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
});})(__24837,c__11297__auto___24849,G__24668_24838,n__4508__auto___24836,jobs,results,process,async))
;return ((function (__24837,switch__11241__auto__,c__11297__auto___24849,G__24668_24838,n__4508__auto___24836,jobs,results,process,async){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24719 = [null,null,null,null,null,null,null];(statearr_24719[(0)] = state_machine__11242__auto__);
(statearr_24719[(1)] = (1));
return statearr_24719;
});
var state_machine__11242__auto____1 = (function (state_24708){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24708);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24720){if((e24720 instanceof Object))
{var ex__11245__auto__ = e24720;var statearr_24721_24856 = state_24708;(statearr_24721_24856[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24708);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24720;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24857 = state_24708;
state_24708 = G__24857;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24708){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(__24837,switch__11241__auto__,c__11297__auto___24849,G__24668_24838,n__4508__auto___24836,jobs,results,process,async))
})();var state__11299__auto__ = (function (){var statearr_24722 = f__11298__auto__.call(null);(statearr_24722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24849);
return statearr_24722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(__24837,c__11297__auto___24849,G__24668_24838,n__4508__auto___24836,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24858 = (__24837 + (1));
__24837 = G__24858;
continue;
}
} else
{}
break;
}
var c__11297__auto___24859 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___24859,jobs,results,process,async){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___24859,jobs,results,process,async){
return (function (state_24744){var state_val_24745 = (state_24744[(1)]);if((state_val_24745 === (9)))
{var inst_24737 = (state_24744[(2)]);var state_24744__$1 = (function (){var statearr_24746 = state_24744;(statearr_24746[(7)] = inst_24737);
return statearr_24746;
})();var statearr_24747_24860 = state_24744__$1;(statearr_24747_24860[(2)] = null);
(statearr_24747_24860[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24745 === (8)))
{var inst_24730 = (state_24744[(8)]);var inst_24735 = (state_24744[(2)]);var state_24744__$1 = (function (){var statearr_24748 = state_24744;(statearr_24748[(9)] = inst_24735);
return statearr_24748;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24744__$1,(9),results,inst_24730);
} else
{if((state_val_24745 === (7)))
{var inst_24740 = (state_24744[(2)]);var state_24744__$1 = state_24744;var statearr_24749_24861 = state_24744__$1;(statearr_24749_24861[(2)] = inst_24740);
(statearr_24749_24861[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24745 === (6)))
{var inst_24725 = (state_24744[(10)]);var inst_24730 = (state_24744[(8)]);var inst_24730__$1 = cljs.core.async.chan.call(null,(1));var inst_24731 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24732 = [inst_24725,inst_24730__$1];var inst_24733 = (new cljs.core.PersistentVector(null,2,(5),inst_24731,inst_24732,null));var state_24744__$1 = (function (){var statearr_24750 = state_24744;(statearr_24750[(8)] = inst_24730__$1);
return statearr_24750;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24744__$1,(8),jobs,inst_24733);
} else
{if((state_val_24745 === (5)))
{var inst_24728 = cljs.core.async.close_BANG_.call(null,jobs);var state_24744__$1 = state_24744;var statearr_24751_24862 = state_24744__$1;(statearr_24751_24862[(2)] = inst_24728);
(statearr_24751_24862[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24745 === (4)))
{var inst_24725 = (state_24744[(10)]);var inst_24725__$1 = (state_24744[(2)]);var inst_24726 = (inst_24725__$1 == null);var state_24744__$1 = (function (){var statearr_24752 = state_24744;(statearr_24752[(10)] = inst_24725__$1);
return statearr_24752;
})();if(cljs.core.truth_(inst_24726))
{var statearr_24753_24863 = state_24744__$1;(statearr_24753_24863[(1)] = (5));
} else
{var statearr_24754_24864 = state_24744__$1;(statearr_24754_24864[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24745 === (3)))
{var inst_24742 = (state_24744[(2)]);var state_24744__$1 = state_24744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24744__$1,inst_24742);
} else
{if((state_val_24745 === (2)))
{var state_24744__$1 = state_24744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24744__$1,(4),from);
} else
{if((state_val_24745 === (1)))
{var state_24744__$1 = state_24744;var statearr_24755_24865 = state_24744__$1;(statearr_24755_24865[(2)] = null);
(statearr_24755_24865[(1)] = (2));
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
});})(c__11297__auto___24859,jobs,results,process,async))
;return ((function (switch__11241__auto__,c__11297__auto___24859,jobs,results,process,async){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24759 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24759[(0)] = state_machine__11242__auto__);
(statearr_24759[(1)] = (1));
return statearr_24759;
});
var state_machine__11242__auto____1 = (function (state_24744){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24744);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24760){if((e24760 instanceof Object))
{var ex__11245__auto__ = e24760;var statearr_24761_24866 = state_24744;(statearr_24761_24866[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24744);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24760;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24867 = state_24744;
state_24744 = G__24867;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24744){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___24859,jobs,results,process,async))
})();var state__11299__auto__ = (function (){var statearr_24762 = f__11298__auto__.call(null);(statearr_24762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24859);
return statearr_24762;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___24859,jobs,results,process,async))
);
var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,jobs,results,process,async){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,jobs,results,process,async){
return (function (state_24800){var state_val_24801 = (state_24800[(1)]);if((state_val_24801 === (7)))
{var inst_24796 = (state_24800[(2)]);var state_24800__$1 = state_24800;var statearr_24802_24868 = state_24800__$1;(statearr_24802_24868[(2)] = inst_24796);
(statearr_24802_24868[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24801 === (20)))
{var state_24800__$1 = state_24800;var statearr_24803_24869 = state_24800__$1;(statearr_24803_24869[(2)] = null);
(statearr_24803_24869[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24801 === (1)))
{var state_24800__$1 = state_24800;var statearr_24804_24870 = state_24800__$1;(statearr_24804_24870[(2)] = null);
(statearr_24804_24870[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24801 === (4)))
{var inst_24765 = (state_24800[(7)]);var inst_24765__$1 = (state_24800[(2)]);var inst_24766 = (inst_24765__$1 == null);var state_24800__$1 = (function (){var statearr_24805 = state_24800;(statearr_24805[(7)] = inst_24765__$1);
return statearr_24805;
})();if(cljs.core.truth_(inst_24766))
{var statearr_24806_24871 = state_24800__$1;(statearr_24806_24871[(1)] = (5));
} else
{var statearr_24807_24872 = state_24800__$1;(statearr_24807_24872[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24801 === (15)))
{var inst_24778 = (state_24800[(8)]);var state_24800__$1 = state_24800;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24800__$1,(18),to,inst_24778);
} else
{if((state_val_24801 === (21)))
{var inst_24791 = (state_24800[(2)]);var state_24800__$1 = state_24800;var statearr_24808_24873 = state_24800__$1;(statearr_24808_24873[(2)] = inst_24791);
(statearr_24808_24873[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24801 === (13)))
{var inst_24793 = (state_24800[(2)]);var state_24800__$1 = (function (){var statearr_24809 = state_24800;(statearr_24809[(9)] = inst_24793);
return statearr_24809;
})();var statearr_24810_24874 = state_24800__$1;(statearr_24810_24874[(2)] = null);
(statearr_24810_24874[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24801 === (6)))
{var inst_24765 = (state_24800[(7)]);var state_24800__$1 = state_24800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24800__$1,(11),inst_24765);
} else
{if((state_val_24801 === (17)))
{var inst_24786 = (state_24800[(2)]);var state_24800__$1 = state_24800;if(cljs.core.truth_(inst_24786))
{var statearr_24811_24875 = state_24800__$1;(statearr_24811_24875[(1)] = (19));
} else
{var statearr_24812_24876 = state_24800__$1;(statearr_24812_24876[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24801 === (3)))
{var inst_24798 = (state_24800[(2)]);var state_24800__$1 = state_24800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24800__$1,inst_24798);
} else
{if((state_val_24801 === (12)))
{var inst_24775 = (state_24800[(10)]);var state_24800__$1 = state_24800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24800__$1,(14),inst_24775);
} else
{if((state_val_24801 === (2)))
{var state_24800__$1 = state_24800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24800__$1,(4),results);
} else
{if((state_val_24801 === (19)))
{var state_24800__$1 = state_24800;var statearr_24813_24877 = state_24800__$1;(statearr_24813_24877[(2)] = null);
(statearr_24813_24877[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24801 === (11)))
{var inst_24775 = (state_24800[(2)]);var state_24800__$1 = (function (){var statearr_24814 = state_24800;(statearr_24814[(10)] = inst_24775);
return statearr_24814;
})();var statearr_24815_24878 = state_24800__$1;(statearr_24815_24878[(2)] = null);
(statearr_24815_24878[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24801 === (9)))
{var state_24800__$1 = state_24800;var statearr_24816_24879 = state_24800__$1;(statearr_24816_24879[(2)] = null);
(statearr_24816_24879[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24801 === (5)))
{var state_24800__$1 = state_24800;if(cljs.core.truth_(close_QMARK_))
{var statearr_24817_24880 = state_24800__$1;(statearr_24817_24880[(1)] = (8));
} else
{var statearr_24818_24881 = state_24800__$1;(statearr_24818_24881[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24801 === (14)))
{var inst_24778 = (state_24800[(8)]);var inst_24780 = (state_24800[(11)]);var inst_24778__$1 = (state_24800[(2)]);var inst_24779 = (inst_24778__$1 == null);var inst_24780__$1 = cljs.core.not.call(null,inst_24779);var state_24800__$1 = (function (){var statearr_24819 = state_24800;(statearr_24819[(8)] = inst_24778__$1);
(statearr_24819[(11)] = inst_24780__$1);
return statearr_24819;
})();if(inst_24780__$1)
{var statearr_24820_24882 = state_24800__$1;(statearr_24820_24882[(1)] = (15));
} else
{var statearr_24821_24883 = state_24800__$1;(statearr_24821_24883[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24801 === (16)))
{var inst_24780 = (state_24800[(11)]);var state_24800__$1 = state_24800;var statearr_24822_24884 = state_24800__$1;(statearr_24822_24884[(2)] = inst_24780);
(statearr_24822_24884[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24801 === (10)))
{var inst_24772 = (state_24800[(2)]);var state_24800__$1 = state_24800;var statearr_24823_24885 = state_24800__$1;(statearr_24823_24885[(2)] = inst_24772);
(statearr_24823_24885[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24801 === (18)))
{var inst_24783 = (state_24800[(2)]);var state_24800__$1 = state_24800;var statearr_24824_24886 = state_24800__$1;(statearr_24824_24886[(2)] = inst_24783);
(statearr_24824_24886[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24801 === (8)))
{var inst_24769 = cljs.core.async.close_BANG_.call(null,to);var state_24800__$1 = state_24800;var statearr_24825_24887 = state_24800__$1;(statearr_24825_24887[(2)] = inst_24769);
(statearr_24825_24887[(1)] = (10));
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
});})(c__11297__auto__,jobs,results,process,async))
;return ((function (switch__11241__auto__,c__11297__auto__,jobs,results,process,async){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24829 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24829[(0)] = state_machine__11242__auto__);
(statearr_24829[(1)] = (1));
return statearr_24829;
});
var state_machine__11242__auto____1 = (function (state_24800){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24800);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24830){if((e24830 instanceof Object))
{var ex__11245__auto__ = e24830;var statearr_24831_24888 = state_24800;(statearr_24831_24888[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24800);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24830;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24889 = state_24800;
state_24800 = G__24889;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24800){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,jobs,results,process,async))
})();var state__11299__auto__ = (function (){var statearr_24832 = f__11298__auto__.call(null);(statearr_24832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_24832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,jobs,results,process,async))
);
return c__11297__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11297__auto___24990 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___24990,tc,fc){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___24990,tc,fc){
return (function (state_24965){var state_val_24966 = (state_24965[(1)]);if((state_val_24966 === (7)))
{var inst_24961 = (state_24965[(2)]);var state_24965__$1 = state_24965;var statearr_24967_24991 = state_24965__$1;(statearr_24967_24991[(2)] = inst_24961);
(statearr_24967_24991[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24966 === (1)))
{var state_24965__$1 = state_24965;var statearr_24968_24992 = state_24965__$1;(statearr_24968_24992[(2)] = null);
(statearr_24968_24992[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24966 === (4)))
{var inst_24942 = (state_24965[(7)]);var inst_24942__$1 = (state_24965[(2)]);var inst_24943 = (inst_24942__$1 == null);var state_24965__$1 = (function (){var statearr_24969 = state_24965;(statearr_24969[(7)] = inst_24942__$1);
return statearr_24969;
})();if(cljs.core.truth_(inst_24943))
{var statearr_24970_24993 = state_24965__$1;(statearr_24970_24993[(1)] = (5));
} else
{var statearr_24971_24994 = state_24965__$1;(statearr_24971_24994[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24966 === (13)))
{var state_24965__$1 = state_24965;var statearr_24972_24995 = state_24965__$1;(statearr_24972_24995[(2)] = null);
(statearr_24972_24995[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24966 === (6)))
{var inst_24942 = (state_24965[(7)]);var inst_24948 = p.call(null,inst_24942);var state_24965__$1 = state_24965;if(cljs.core.truth_(inst_24948))
{var statearr_24973_24996 = state_24965__$1;(statearr_24973_24996[(1)] = (9));
} else
{var statearr_24974_24997 = state_24965__$1;(statearr_24974_24997[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24966 === (3)))
{var inst_24963 = (state_24965[(2)]);var state_24965__$1 = state_24965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24965__$1,inst_24963);
} else
{if((state_val_24966 === (12)))
{var state_24965__$1 = state_24965;var statearr_24975_24998 = state_24965__$1;(statearr_24975_24998[(2)] = null);
(statearr_24975_24998[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24966 === (2)))
{var state_24965__$1 = state_24965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24965__$1,(4),ch);
} else
{if((state_val_24966 === (11)))
{var inst_24942 = (state_24965[(7)]);var inst_24952 = (state_24965[(2)]);var state_24965__$1 = state_24965;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24965__$1,(8),inst_24952,inst_24942);
} else
{if((state_val_24966 === (9)))
{var state_24965__$1 = state_24965;var statearr_24976_24999 = state_24965__$1;(statearr_24976_24999[(2)] = tc);
(statearr_24976_24999[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24966 === (5)))
{var inst_24945 = cljs.core.async.close_BANG_.call(null,tc);var inst_24946 = cljs.core.async.close_BANG_.call(null,fc);var state_24965__$1 = (function (){var statearr_24977 = state_24965;(statearr_24977[(8)] = inst_24945);
return statearr_24977;
})();var statearr_24978_25000 = state_24965__$1;(statearr_24978_25000[(2)] = inst_24946);
(statearr_24978_25000[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24966 === (14)))
{var inst_24959 = (state_24965[(2)]);var state_24965__$1 = state_24965;var statearr_24979_25001 = state_24965__$1;(statearr_24979_25001[(2)] = inst_24959);
(statearr_24979_25001[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24966 === (10)))
{var state_24965__$1 = state_24965;var statearr_24980_25002 = state_24965__$1;(statearr_24980_25002[(2)] = fc);
(statearr_24980_25002[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24966 === (8)))
{var inst_24954 = (state_24965[(2)]);var state_24965__$1 = state_24965;if(cljs.core.truth_(inst_24954))
{var statearr_24981_25003 = state_24965__$1;(statearr_24981_25003[(1)] = (12));
} else
{var statearr_24982_25004 = state_24965__$1;(statearr_24982_25004[(1)] = (13));
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
});})(c__11297__auto___24990,tc,fc))
;return ((function (switch__11241__auto__,c__11297__auto___24990,tc,fc){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24986 = [null,null,null,null,null,null,null,null,null];(statearr_24986[(0)] = state_machine__11242__auto__);
(statearr_24986[(1)] = (1));
return statearr_24986;
});
var state_machine__11242__auto____1 = (function (state_24965){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24965);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24987){if((e24987 instanceof Object))
{var ex__11245__auto__ = e24987;var statearr_24988_25005 = state_24965;(statearr_24988_25005[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24965);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24987;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25006 = state_24965;
state_24965 = G__25006;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24965){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___24990,tc,fc))
})();var state__11299__auto__ = (function (){var statearr_24989 = f__11298__auto__.call(null);(statearr_24989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24990);
return statearr_24989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___24990,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__){
return (function (state_25053){var state_val_25054 = (state_25053[(1)]);if((state_val_25054 === (7)))
{var inst_25049 = (state_25053[(2)]);var state_25053__$1 = state_25053;var statearr_25055_25071 = state_25053__$1;(statearr_25055_25071[(2)] = inst_25049);
(statearr_25055_25071[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25054 === (6)))
{var inst_25042 = (state_25053[(7)]);var inst_25039 = (state_25053[(8)]);var inst_25046 = f.call(null,inst_25039,inst_25042);var inst_25039__$1 = inst_25046;var state_25053__$1 = (function (){var statearr_25056 = state_25053;(statearr_25056[(8)] = inst_25039__$1);
return statearr_25056;
})();var statearr_25057_25072 = state_25053__$1;(statearr_25057_25072[(2)] = null);
(statearr_25057_25072[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25054 === (5)))
{var inst_25039 = (state_25053[(8)]);var state_25053__$1 = state_25053;var statearr_25058_25073 = state_25053__$1;(statearr_25058_25073[(2)] = inst_25039);
(statearr_25058_25073[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25054 === (4)))
{var inst_25042 = (state_25053[(7)]);var inst_25042__$1 = (state_25053[(2)]);var inst_25043 = (inst_25042__$1 == null);var state_25053__$1 = (function (){var statearr_25059 = state_25053;(statearr_25059[(7)] = inst_25042__$1);
return statearr_25059;
})();if(cljs.core.truth_(inst_25043))
{var statearr_25060_25074 = state_25053__$1;(statearr_25060_25074[(1)] = (5));
} else
{var statearr_25061_25075 = state_25053__$1;(statearr_25061_25075[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25054 === (3)))
{var inst_25051 = (state_25053[(2)]);var state_25053__$1 = state_25053;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25053__$1,inst_25051);
} else
{if((state_val_25054 === (2)))
{var state_25053__$1 = state_25053;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25053__$1,(4),ch);
} else
{if((state_val_25054 === (1)))
{var inst_25039 = init;var state_25053__$1 = (function (){var statearr_25062 = state_25053;(statearr_25062[(8)] = inst_25039);
return statearr_25062;
})();var statearr_25063_25076 = state_25053__$1;(statearr_25063_25076[(2)] = null);
(statearr_25063_25076[(1)] = (2));
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
});})(c__11297__auto__))
;return ((function (switch__11241__auto__,c__11297__auto__){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_25067 = [null,null,null,null,null,null,null,null,null];(statearr_25067[(0)] = state_machine__11242__auto__);
(statearr_25067[(1)] = (1));
return statearr_25067;
});
var state_machine__11242__auto____1 = (function (state_25053){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_25053);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e25068){if((e25068 instanceof Object))
{var ex__11245__auto__ = e25068;var statearr_25069_25077 = state_25053;(statearr_25069_25077[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25053);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25068;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25078 = state_25053;
state_25053 = G__25078;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_25053){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_25053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_25070 = f__11298__auto__.call(null);(statearr_25070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_25070;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__))
);
return c__11297__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__){
return (function (state_25152){var state_val_25153 = (state_25152[(1)]);if((state_val_25153 === (7)))
{var inst_25134 = (state_25152[(2)]);var state_25152__$1 = state_25152;var statearr_25154_25177 = state_25152__$1;(statearr_25154_25177[(2)] = inst_25134);
(statearr_25154_25177[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25153 === (1)))
{var inst_25128 = cljs.core.seq.call(null,coll);var inst_25129 = inst_25128;var state_25152__$1 = (function (){var statearr_25155 = state_25152;(statearr_25155[(7)] = inst_25129);
return statearr_25155;
})();var statearr_25156_25178 = state_25152__$1;(statearr_25156_25178[(2)] = null);
(statearr_25156_25178[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25153 === (4)))
{var inst_25129 = (state_25152[(7)]);var inst_25132 = cljs.core.first.call(null,inst_25129);var state_25152__$1 = state_25152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25152__$1,(7),ch,inst_25132);
} else
{if((state_val_25153 === (13)))
{var inst_25146 = (state_25152[(2)]);var state_25152__$1 = state_25152;var statearr_25157_25179 = state_25152__$1;(statearr_25157_25179[(2)] = inst_25146);
(statearr_25157_25179[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25153 === (6)))
{var inst_25137 = (state_25152[(2)]);var state_25152__$1 = state_25152;if(cljs.core.truth_(inst_25137))
{var statearr_25158_25180 = state_25152__$1;(statearr_25158_25180[(1)] = (8));
} else
{var statearr_25159_25181 = state_25152__$1;(statearr_25159_25181[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25153 === (3)))
{var inst_25150 = (state_25152[(2)]);var state_25152__$1 = state_25152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25152__$1,inst_25150);
} else
{if((state_val_25153 === (12)))
{var state_25152__$1 = state_25152;var statearr_25160_25182 = state_25152__$1;(statearr_25160_25182[(2)] = null);
(statearr_25160_25182[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25153 === (2)))
{var inst_25129 = (state_25152[(7)]);var state_25152__$1 = state_25152;if(cljs.core.truth_(inst_25129))
{var statearr_25161_25183 = state_25152__$1;(statearr_25161_25183[(1)] = (4));
} else
{var statearr_25162_25184 = state_25152__$1;(statearr_25162_25184[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25153 === (11)))
{var inst_25143 = cljs.core.async.close_BANG_.call(null,ch);var state_25152__$1 = state_25152;var statearr_25163_25185 = state_25152__$1;(statearr_25163_25185[(2)] = inst_25143);
(statearr_25163_25185[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25153 === (9)))
{var state_25152__$1 = state_25152;if(cljs.core.truth_(close_QMARK_))
{var statearr_25164_25186 = state_25152__$1;(statearr_25164_25186[(1)] = (11));
} else
{var statearr_25165_25187 = state_25152__$1;(statearr_25165_25187[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25153 === (5)))
{var inst_25129 = (state_25152[(7)]);var state_25152__$1 = state_25152;var statearr_25166_25188 = state_25152__$1;(statearr_25166_25188[(2)] = inst_25129);
(statearr_25166_25188[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25153 === (10)))
{var inst_25148 = (state_25152[(2)]);var state_25152__$1 = state_25152;var statearr_25167_25189 = state_25152__$1;(statearr_25167_25189[(2)] = inst_25148);
(statearr_25167_25189[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25153 === (8)))
{var inst_25129 = (state_25152[(7)]);var inst_25139 = cljs.core.next.call(null,inst_25129);var inst_25129__$1 = inst_25139;var state_25152__$1 = (function (){var statearr_25168 = state_25152;(statearr_25168[(7)] = inst_25129__$1);
return statearr_25168;
})();var statearr_25169_25190 = state_25152__$1;(statearr_25169_25190[(2)] = null);
(statearr_25169_25190[(1)] = (2));
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
});})(c__11297__auto__))
;return ((function (switch__11241__auto__,c__11297__auto__){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_25173 = [null,null,null,null,null,null,null,null];(statearr_25173[(0)] = state_machine__11242__auto__);
(statearr_25173[(1)] = (1));
return statearr_25173;
});
var state_machine__11242__auto____1 = (function (state_25152){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_25152);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e25174){if((e25174 instanceof Object))
{var ex__11245__auto__ = e25174;var statearr_25175_25191 = state_25152;(statearr_25175_25191[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25152);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25174;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25192 = state_25152;
state_25152 = G__25192;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_25152){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_25152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_25176 = f__11298__auto__.call(null);(statearr_25176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_25176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__))
);
return c__11297__auto__;
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
cljs.core.async.Mux = (function (){var obj25194 = {};return obj25194;
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
cljs.core.async.Mult = (function (){var obj25196 = {};return obj25196;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25418 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25418 = (function (cs,ch,mult,meta25419){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25419 = meta25419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25418.cljs$lang$type = true;
cljs.core.async.t25418.cljs$lang$ctorStr = "cljs.core.async/t25418";
cljs.core.async.t25418.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25418");
});})(cs))
;
cljs.core.async.t25418.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25418.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25418.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25418.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25418.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25420){var self__ = this;
var _25420__$1 = this;return self__.meta25419;
});})(cs))
;
cljs.core.async.t25418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25420,meta25419__$1){var self__ = this;
var _25420__$1 = this;return (new cljs.core.async.t25418(self__.cs,self__.ch,self__.mult,meta25419__$1));
});})(cs))
;
cljs.core.async.__GT_t25418 = ((function (cs){
return (function __GT_t25418(cs__$1,ch__$1,mult__$1,meta25419){return (new cljs.core.async.t25418(cs__$1,ch__$1,mult__$1,meta25419));
});})(cs))
;
}
return (new cljs.core.async.t25418(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11297__auto___25639 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___25639,cs,m,dchan,dctr,done){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___25639,cs,m,dchan,dctr,done){
return (function (state_25551){var state_val_25552 = (state_25551[(1)]);if((state_val_25552 === (7)))
{var inst_25547 = (state_25551[(2)]);var state_25551__$1 = state_25551;var statearr_25553_25640 = state_25551__$1;(statearr_25553_25640[(2)] = inst_25547);
(statearr_25553_25640[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (20)))
{var inst_25452 = (state_25551[(7)]);var inst_25462 = cljs.core.first.call(null,inst_25452);var inst_25463 = cljs.core.nth.call(null,inst_25462,(0),null);var inst_25464 = cljs.core.nth.call(null,inst_25462,(1),null);var state_25551__$1 = (function (){var statearr_25554 = state_25551;(statearr_25554[(8)] = inst_25463);
return statearr_25554;
})();if(cljs.core.truth_(inst_25464))
{var statearr_25555_25641 = state_25551__$1;(statearr_25555_25641[(1)] = (22));
} else
{var statearr_25556_25642 = state_25551__$1;(statearr_25556_25642[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (27)))
{var inst_25423 = (state_25551[(9)]);var inst_25499 = (state_25551[(10)]);var inst_25494 = (state_25551[(11)]);var inst_25492 = (state_25551[(12)]);var inst_25499__$1 = cljs.core._nth.call(null,inst_25492,inst_25494);var inst_25500 = cljs.core.async.put_BANG_.call(null,inst_25499__$1,inst_25423,done);var state_25551__$1 = (function (){var statearr_25557 = state_25551;(statearr_25557[(10)] = inst_25499__$1);
return statearr_25557;
})();if(cljs.core.truth_(inst_25500))
{var statearr_25558_25643 = state_25551__$1;(statearr_25558_25643[(1)] = (30));
} else
{var statearr_25559_25644 = state_25551__$1;(statearr_25559_25644[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (1)))
{var state_25551__$1 = state_25551;var statearr_25560_25645 = state_25551__$1;(statearr_25560_25645[(2)] = null);
(statearr_25560_25645[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (24)))
{var inst_25452 = (state_25551[(7)]);var inst_25469 = (state_25551[(2)]);var inst_25470 = cljs.core.next.call(null,inst_25452);var inst_25432 = inst_25470;var inst_25433 = null;var inst_25434 = (0);var inst_25435 = (0);var state_25551__$1 = (function (){var statearr_25561 = state_25551;(statearr_25561[(13)] = inst_25433);
(statearr_25561[(14)] = inst_25432);
(statearr_25561[(15)] = inst_25469);
(statearr_25561[(16)] = inst_25434);
(statearr_25561[(17)] = inst_25435);
return statearr_25561;
})();var statearr_25562_25646 = state_25551__$1;(statearr_25562_25646[(2)] = null);
(statearr_25562_25646[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (39)))
{var state_25551__$1 = state_25551;var statearr_25566_25647 = state_25551__$1;(statearr_25566_25647[(2)] = null);
(statearr_25566_25647[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (4)))
{var inst_25423 = (state_25551[(9)]);var inst_25423__$1 = (state_25551[(2)]);var inst_25424 = (inst_25423__$1 == null);var state_25551__$1 = (function (){var statearr_25567 = state_25551;(statearr_25567[(9)] = inst_25423__$1);
return statearr_25567;
})();if(cljs.core.truth_(inst_25424))
{var statearr_25568_25648 = state_25551__$1;(statearr_25568_25648[(1)] = (5));
} else
{var statearr_25569_25649 = state_25551__$1;(statearr_25569_25649[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (15)))
{var inst_25433 = (state_25551[(13)]);var inst_25432 = (state_25551[(14)]);var inst_25434 = (state_25551[(16)]);var inst_25435 = (state_25551[(17)]);var inst_25448 = (state_25551[(2)]);var inst_25449 = (inst_25435 + (1));var tmp25563 = inst_25433;var tmp25564 = inst_25432;var tmp25565 = inst_25434;var inst_25432__$1 = tmp25564;var inst_25433__$1 = tmp25563;var inst_25434__$1 = tmp25565;var inst_25435__$1 = inst_25449;var state_25551__$1 = (function (){var statearr_25570 = state_25551;(statearr_25570[(13)] = inst_25433__$1);
(statearr_25570[(14)] = inst_25432__$1);
(statearr_25570[(18)] = inst_25448);
(statearr_25570[(16)] = inst_25434__$1);
(statearr_25570[(17)] = inst_25435__$1);
return statearr_25570;
})();var statearr_25571_25650 = state_25551__$1;(statearr_25571_25650[(2)] = null);
(statearr_25571_25650[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (21)))
{var inst_25473 = (state_25551[(2)]);var state_25551__$1 = state_25551;var statearr_25575_25651 = state_25551__$1;(statearr_25575_25651[(2)] = inst_25473);
(statearr_25575_25651[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (31)))
{var inst_25499 = (state_25551[(10)]);var inst_25503 = done.call(null,null);var inst_25504 = cljs.core.async.untap_STAR_.call(null,m,inst_25499);var state_25551__$1 = (function (){var statearr_25576 = state_25551;(statearr_25576[(19)] = inst_25503);
return statearr_25576;
})();var statearr_25577_25652 = state_25551__$1;(statearr_25577_25652[(2)] = inst_25504);
(statearr_25577_25652[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (32)))
{var inst_25494 = (state_25551[(11)]);var inst_25493 = (state_25551[(20)]);var inst_25491 = (state_25551[(21)]);var inst_25492 = (state_25551[(12)]);var inst_25506 = (state_25551[(2)]);var inst_25507 = (inst_25494 + (1));var tmp25572 = inst_25493;var tmp25573 = inst_25491;var tmp25574 = inst_25492;var inst_25491__$1 = tmp25573;var inst_25492__$1 = tmp25574;var inst_25493__$1 = tmp25572;var inst_25494__$1 = inst_25507;var state_25551__$1 = (function (){var statearr_25578 = state_25551;(statearr_25578[(11)] = inst_25494__$1);
(statearr_25578[(20)] = inst_25493__$1);
(statearr_25578[(21)] = inst_25491__$1);
(statearr_25578[(12)] = inst_25492__$1);
(statearr_25578[(22)] = inst_25506);
return statearr_25578;
})();var statearr_25579_25653 = state_25551__$1;(statearr_25579_25653[(2)] = null);
(statearr_25579_25653[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (40)))
{var inst_25519 = (state_25551[(23)]);var inst_25523 = done.call(null,null);var inst_25524 = cljs.core.async.untap_STAR_.call(null,m,inst_25519);var state_25551__$1 = (function (){var statearr_25580 = state_25551;(statearr_25580[(24)] = inst_25523);
return statearr_25580;
})();var statearr_25581_25654 = state_25551__$1;(statearr_25581_25654[(2)] = inst_25524);
(statearr_25581_25654[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (33)))
{var inst_25510 = (state_25551[(25)]);var inst_25512 = cljs.core.chunked_seq_QMARK_.call(null,inst_25510);var state_25551__$1 = state_25551;if(inst_25512)
{var statearr_25582_25655 = state_25551__$1;(statearr_25582_25655[(1)] = (36));
} else
{var statearr_25583_25656 = state_25551__$1;(statearr_25583_25656[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (13)))
{var inst_25442 = (state_25551[(26)]);var inst_25445 = cljs.core.async.close_BANG_.call(null,inst_25442);var state_25551__$1 = state_25551;var statearr_25584_25657 = state_25551__$1;(statearr_25584_25657[(2)] = inst_25445);
(statearr_25584_25657[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (22)))
{var inst_25463 = (state_25551[(8)]);var inst_25466 = cljs.core.async.close_BANG_.call(null,inst_25463);var state_25551__$1 = state_25551;var statearr_25585_25658 = state_25551__$1;(statearr_25585_25658[(2)] = inst_25466);
(statearr_25585_25658[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (36)))
{var inst_25510 = (state_25551[(25)]);var inst_25514 = cljs.core.chunk_first.call(null,inst_25510);var inst_25515 = cljs.core.chunk_rest.call(null,inst_25510);var inst_25516 = cljs.core.count.call(null,inst_25514);var inst_25491 = inst_25515;var inst_25492 = inst_25514;var inst_25493 = inst_25516;var inst_25494 = (0);var state_25551__$1 = (function (){var statearr_25586 = state_25551;(statearr_25586[(11)] = inst_25494);
(statearr_25586[(20)] = inst_25493);
(statearr_25586[(21)] = inst_25491);
(statearr_25586[(12)] = inst_25492);
return statearr_25586;
})();var statearr_25587_25659 = state_25551__$1;(statearr_25587_25659[(2)] = null);
(statearr_25587_25659[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (41)))
{var inst_25510 = (state_25551[(25)]);var inst_25526 = (state_25551[(2)]);var inst_25527 = cljs.core.next.call(null,inst_25510);var inst_25491 = inst_25527;var inst_25492 = null;var inst_25493 = (0);var inst_25494 = (0);var state_25551__$1 = (function (){var statearr_25588 = state_25551;(statearr_25588[(11)] = inst_25494);
(statearr_25588[(20)] = inst_25493);
(statearr_25588[(21)] = inst_25491);
(statearr_25588[(27)] = inst_25526);
(statearr_25588[(12)] = inst_25492);
return statearr_25588;
})();var statearr_25589_25660 = state_25551__$1;(statearr_25589_25660[(2)] = null);
(statearr_25589_25660[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (43)))
{var state_25551__$1 = state_25551;var statearr_25590_25661 = state_25551__$1;(statearr_25590_25661[(2)] = null);
(statearr_25590_25661[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (29)))
{var inst_25535 = (state_25551[(2)]);var state_25551__$1 = state_25551;var statearr_25591_25662 = state_25551__$1;(statearr_25591_25662[(2)] = inst_25535);
(statearr_25591_25662[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (44)))
{var inst_25544 = (state_25551[(2)]);var state_25551__$1 = (function (){var statearr_25592 = state_25551;(statearr_25592[(28)] = inst_25544);
return statearr_25592;
})();var statearr_25593_25663 = state_25551__$1;(statearr_25593_25663[(2)] = null);
(statearr_25593_25663[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (6)))
{var inst_25483 = (state_25551[(29)]);var inst_25482 = cljs.core.deref.call(null,cs);var inst_25483__$1 = cljs.core.keys.call(null,inst_25482);var inst_25484 = cljs.core.count.call(null,inst_25483__$1);var inst_25485 = cljs.core.reset_BANG_.call(null,dctr,inst_25484);var inst_25490 = cljs.core.seq.call(null,inst_25483__$1);var inst_25491 = inst_25490;var inst_25492 = null;var inst_25493 = (0);var inst_25494 = (0);var state_25551__$1 = (function (){var statearr_25594 = state_25551;(statearr_25594[(11)] = inst_25494);
(statearr_25594[(20)] = inst_25493);
(statearr_25594[(21)] = inst_25491);
(statearr_25594[(30)] = inst_25485);
(statearr_25594[(29)] = inst_25483__$1);
(statearr_25594[(12)] = inst_25492);
return statearr_25594;
})();var statearr_25595_25664 = state_25551__$1;(statearr_25595_25664[(2)] = null);
(statearr_25595_25664[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (28)))
{var inst_25491 = (state_25551[(21)]);var inst_25510 = (state_25551[(25)]);var inst_25510__$1 = cljs.core.seq.call(null,inst_25491);var state_25551__$1 = (function (){var statearr_25596 = state_25551;(statearr_25596[(25)] = inst_25510__$1);
return statearr_25596;
})();if(inst_25510__$1)
{var statearr_25597_25665 = state_25551__$1;(statearr_25597_25665[(1)] = (33));
} else
{var statearr_25598_25666 = state_25551__$1;(statearr_25598_25666[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (25)))
{var inst_25494 = (state_25551[(11)]);var inst_25493 = (state_25551[(20)]);var inst_25496 = (inst_25494 < inst_25493);var inst_25497 = inst_25496;var state_25551__$1 = state_25551;if(cljs.core.truth_(inst_25497))
{var statearr_25599_25667 = state_25551__$1;(statearr_25599_25667[(1)] = (27));
} else
{var statearr_25600_25668 = state_25551__$1;(statearr_25600_25668[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (34)))
{var state_25551__$1 = state_25551;var statearr_25601_25669 = state_25551__$1;(statearr_25601_25669[(2)] = null);
(statearr_25601_25669[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (17)))
{var state_25551__$1 = state_25551;var statearr_25602_25670 = state_25551__$1;(statearr_25602_25670[(2)] = null);
(statearr_25602_25670[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (3)))
{var inst_25549 = (state_25551[(2)]);var state_25551__$1 = state_25551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25551__$1,inst_25549);
} else
{if((state_val_25552 === (12)))
{var inst_25478 = (state_25551[(2)]);var state_25551__$1 = state_25551;var statearr_25603_25671 = state_25551__$1;(statearr_25603_25671[(2)] = inst_25478);
(statearr_25603_25671[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (2)))
{var state_25551__$1 = state_25551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25551__$1,(4),ch);
} else
{if((state_val_25552 === (23)))
{var state_25551__$1 = state_25551;var statearr_25604_25672 = state_25551__$1;(statearr_25604_25672[(2)] = null);
(statearr_25604_25672[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (35)))
{var inst_25533 = (state_25551[(2)]);var state_25551__$1 = state_25551;var statearr_25605_25673 = state_25551__$1;(statearr_25605_25673[(2)] = inst_25533);
(statearr_25605_25673[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (19)))
{var inst_25452 = (state_25551[(7)]);var inst_25456 = cljs.core.chunk_first.call(null,inst_25452);var inst_25457 = cljs.core.chunk_rest.call(null,inst_25452);var inst_25458 = cljs.core.count.call(null,inst_25456);var inst_25432 = inst_25457;var inst_25433 = inst_25456;var inst_25434 = inst_25458;var inst_25435 = (0);var state_25551__$1 = (function (){var statearr_25606 = state_25551;(statearr_25606[(13)] = inst_25433);
(statearr_25606[(14)] = inst_25432);
(statearr_25606[(16)] = inst_25434);
(statearr_25606[(17)] = inst_25435);
return statearr_25606;
})();var statearr_25607_25674 = state_25551__$1;(statearr_25607_25674[(2)] = null);
(statearr_25607_25674[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (11)))
{var inst_25432 = (state_25551[(14)]);var inst_25452 = (state_25551[(7)]);var inst_25452__$1 = cljs.core.seq.call(null,inst_25432);var state_25551__$1 = (function (){var statearr_25608 = state_25551;(statearr_25608[(7)] = inst_25452__$1);
return statearr_25608;
})();if(inst_25452__$1)
{var statearr_25609_25675 = state_25551__$1;(statearr_25609_25675[(1)] = (16));
} else
{var statearr_25610_25676 = state_25551__$1;(statearr_25610_25676[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (9)))
{var inst_25480 = (state_25551[(2)]);var state_25551__$1 = state_25551;var statearr_25611_25677 = state_25551__$1;(statearr_25611_25677[(2)] = inst_25480);
(statearr_25611_25677[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (5)))
{var inst_25430 = cljs.core.deref.call(null,cs);var inst_25431 = cljs.core.seq.call(null,inst_25430);var inst_25432 = inst_25431;var inst_25433 = null;var inst_25434 = (0);var inst_25435 = (0);var state_25551__$1 = (function (){var statearr_25612 = state_25551;(statearr_25612[(13)] = inst_25433);
(statearr_25612[(14)] = inst_25432);
(statearr_25612[(16)] = inst_25434);
(statearr_25612[(17)] = inst_25435);
return statearr_25612;
})();var statearr_25613_25678 = state_25551__$1;(statearr_25613_25678[(2)] = null);
(statearr_25613_25678[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (14)))
{var state_25551__$1 = state_25551;var statearr_25614_25679 = state_25551__$1;(statearr_25614_25679[(2)] = null);
(statearr_25614_25679[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (45)))
{var inst_25541 = (state_25551[(2)]);var state_25551__$1 = state_25551;var statearr_25615_25680 = state_25551__$1;(statearr_25615_25680[(2)] = inst_25541);
(statearr_25615_25680[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (26)))
{var inst_25483 = (state_25551[(29)]);var inst_25537 = (state_25551[(2)]);var inst_25538 = cljs.core.seq.call(null,inst_25483);var state_25551__$1 = (function (){var statearr_25616 = state_25551;(statearr_25616[(31)] = inst_25537);
return statearr_25616;
})();if(inst_25538)
{var statearr_25617_25681 = state_25551__$1;(statearr_25617_25681[(1)] = (42));
} else
{var statearr_25618_25682 = state_25551__$1;(statearr_25618_25682[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (16)))
{var inst_25452 = (state_25551[(7)]);var inst_25454 = cljs.core.chunked_seq_QMARK_.call(null,inst_25452);var state_25551__$1 = state_25551;if(inst_25454)
{var statearr_25619_25683 = state_25551__$1;(statearr_25619_25683[(1)] = (19));
} else
{var statearr_25620_25684 = state_25551__$1;(statearr_25620_25684[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (38)))
{var inst_25530 = (state_25551[(2)]);var state_25551__$1 = state_25551;var statearr_25621_25685 = state_25551__$1;(statearr_25621_25685[(2)] = inst_25530);
(statearr_25621_25685[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (30)))
{var state_25551__$1 = state_25551;var statearr_25622_25686 = state_25551__$1;(statearr_25622_25686[(2)] = null);
(statearr_25622_25686[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (10)))
{var inst_25433 = (state_25551[(13)]);var inst_25435 = (state_25551[(17)]);var inst_25441 = cljs.core._nth.call(null,inst_25433,inst_25435);var inst_25442 = cljs.core.nth.call(null,inst_25441,(0),null);var inst_25443 = cljs.core.nth.call(null,inst_25441,(1),null);var state_25551__$1 = (function (){var statearr_25623 = state_25551;(statearr_25623[(26)] = inst_25442);
return statearr_25623;
})();if(cljs.core.truth_(inst_25443))
{var statearr_25624_25687 = state_25551__$1;(statearr_25624_25687[(1)] = (13));
} else
{var statearr_25625_25688 = state_25551__$1;(statearr_25625_25688[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (18)))
{var inst_25476 = (state_25551[(2)]);var state_25551__$1 = state_25551;var statearr_25626_25689 = state_25551__$1;(statearr_25626_25689[(2)] = inst_25476);
(statearr_25626_25689[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (42)))
{var state_25551__$1 = state_25551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25551__$1,(45),dchan);
} else
{if((state_val_25552 === (37)))
{var inst_25423 = (state_25551[(9)]);var inst_25510 = (state_25551[(25)]);var inst_25519 = (state_25551[(23)]);var inst_25519__$1 = cljs.core.first.call(null,inst_25510);var inst_25520 = cljs.core.async.put_BANG_.call(null,inst_25519__$1,inst_25423,done);var state_25551__$1 = (function (){var statearr_25627 = state_25551;(statearr_25627[(23)] = inst_25519__$1);
return statearr_25627;
})();if(cljs.core.truth_(inst_25520))
{var statearr_25628_25690 = state_25551__$1;(statearr_25628_25690[(1)] = (39));
} else
{var statearr_25629_25691 = state_25551__$1;(statearr_25629_25691[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25552 === (8)))
{var inst_25434 = (state_25551[(16)]);var inst_25435 = (state_25551[(17)]);var inst_25437 = (inst_25435 < inst_25434);var inst_25438 = inst_25437;var state_25551__$1 = state_25551;if(cljs.core.truth_(inst_25438))
{var statearr_25630_25692 = state_25551__$1;(statearr_25630_25692[(1)] = (10));
} else
{var statearr_25631_25693 = state_25551__$1;(statearr_25631_25693[(1)] = (11));
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
});})(c__11297__auto___25639,cs,m,dchan,dctr,done))
;return ((function (switch__11241__auto__,c__11297__auto___25639,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_25635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25635[(0)] = state_machine__11242__auto__);
(statearr_25635[(1)] = (1));
return statearr_25635;
});
var state_machine__11242__auto____1 = (function (state_25551){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_25551);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e25636){if((e25636 instanceof Object))
{var ex__11245__auto__ = e25636;var statearr_25637_25694 = state_25551;(statearr_25637_25694[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25551);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25636;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25695 = state_25551;
state_25551 = G__25695;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_25551){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_25551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___25639,cs,m,dchan,dctr,done))
})();var state__11299__auto__ = (function (){var statearr_25638 = f__11298__auto__.call(null);(statearr_25638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___25639);
return statearr_25638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___25639,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25697 = {};return obj25697;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25698){var map__25703 = p__25698;var map__25703__$1 = ((cljs.core.seq_QMARK_.call(null,map__25703))?cljs.core.apply.call(null,cljs.core.hash_map,map__25703):map__25703);var opts = map__25703__$1;var statearr_25704_25707 = state;(statearr_25704_25707[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__25703,map__25703__$1,opts){
return (function (val){var statearr_25705_25708 = state;(statearr_25705_25708[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25703,map__25703__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25706_25709 = state;(statearr_25706_25709[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25698 = null;if (arguments.length > 3) {
  p__25698 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25698);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25710){
var state = cljs.core.first(arglist__25710);
arglist__25710 = cljs.core.next(arglist__25710);
var cont_block = cljs.core.first(arglist__25710);
arglist__25710 = cljs.core.next(arglist__25710);
var ports = cljs.core.first(arglist__25710);
var p__25698 = cljs.core.rest(arglist__25710);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25698);
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
;var m = (function (){if(typeof cljs.core.async.t25830 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25830 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25831){
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
this.meta25831 = meta25831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25830.cljs$lang$type = true;
cljs.core.async.t25830.cljs$lang$ctorStr = "cljs.core.async/t25830";
cljs.core.async.t25830.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25830");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25830.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25830.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25830.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25830.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25830.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25830.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25830.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25830.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25832){var self__ = this;
var _25832__$1 = this;return self__.meta25831;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25832,meta25831__$1){var self__ = this;
var _25832__$1 = this;return (new cljs.core.async.t25830(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25831__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25830 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25830(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25831){return (new cljs.core.async.t25830(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25831));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25830(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11297__auto___25949 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___25949,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___25949,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25902){var state_val_25903 = (state_25902[(1)]);if((state_val_25903 === (7)))
{var inst_25846 = (state_25902[(7)]);var inst_25851 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25846);var state_25902__$1 = state_25902;var statearr_25904_25950 = state_25902__$1;(statearr_25904_25950[(2)] = inst_25851);
(statearr_25904_25950[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (20)))
{var inst_25861 = (state_25902[(8)]);var state_25902__$1 = state_25902;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25902__$1,(23),out,inst_25861);
} else
{if((state_val_25903 === (1)))
{var inst_25836 = (state_25902[(9)]);var inst_25836__$1 = calc_state.call(null);var inst_25837 = cljs.core.seq_QMARK_.call(null,inst_25836__$1);var state_25902__$1 = (function (){var statearr_25905 = state_25902;(statearr_25905[(9)] = inst_25836__$1);
return statearr_25905;
})();if(inst_25837)
{var statearr_25906_25951 = state_25902__$1;(statearr_25906_25951[(1)] = (2));
} else
{var statearr_25907_25952 = state_25902__$1;(statearr_25907_25952[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (24)))
{var inst_25854 = (state_25902[(10)]);var inst_25846 = inst_25854;var state_25902__$1 = (function (){var statearr_25908 = state_25902;(statearr_25908[(7)] = inst_25846);
return statearr_25908;
})();var statearr_25909_25953 = state_25902__$1;(statearr_25909_25953[(2)] = null);
(statearr_25909_25953[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (4)))
{var inst_25836 = (state_25902[(9)]);var inst_25842 = (state_25902[(2)]);var inst_25843 = cljs.core.get.call(null,inst_25842,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25844 = cljs.core.get.call(null,inst_25842,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25845 = cljs.core.get.call(null,inst_25842,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25846 = inst_25836;var state_25902__$1 = (function (){var statearr_25910 = state_25902;(statearr_25910[(11)] = inst_25843);
(statearr_25910[(12)] = inst_25844);
(statearr_25910[(7)] = inst_25846);
(statearr_25910[(13)] = inst_25845);
return statearr_25910;
})();var statearr_25911_25954 = state_25902__$1;(statearr_25911_25954[(2)] = null);
(statearr_25911_25954[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (15)))
{var state_25902__$1 = state_25902;var statearr_25912_25955 = state_25902__$1;(statearr_25912_25955[(2)] = null);
(statearr_25912_25955[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (21)))
{var inst_25854 = (state_25902[(10)]);var inst_25846 = inst_25854;var state_25902__$1 = (function (){var statearr_25913 = state_25902;(statearr_25913[(7)] = inst_25846);
return statearr_25913;
})();var statearr_25914_25956 = state_25902__$1;(statearr_25914_25956[(2)] = null);
(statearr_25914_25956[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (13)))
{var inst_25898 = (state_25902[(2)]);var state_25902__$1 = state_25902;var statearr_25915_25957 = state_25902__$1;(statearr_25915_25957[(2)] = inst_25898);
(statearr_25915_25957[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (22)))
{var inst_25896 = (state_25902[(2)]);var state_25902__$1 = state_25902;var statearr_25916_25958 = state_25902__$1;(statearr_25916_25958[(2)] = inst_25896);
(statearr_25916_25958[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (6)))
{var inst_25900 = (state_25902[(2)]);var state_25902__$1 = state_25902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25902__$1,inst_25900);
} else
{if((state_val_25903 === (25)))
{var state_25902__$1 = state_25902;var statearr_25917_25959 = state_25902__$1;(statearr_25917_25959[(2)] = null);
(statearr_25917_25959[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (17)))
{var inst_25876 = (state_25902[(14)]);var state_25902__$1 = state_25902;var statearr_25918_25960 = state_25902__$1;(statearr_25918_25960[(2)] = inst_25876);
(statearr_25918_25960[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (3)))
{var inst_25836 = (state_25902[(9)]);var state_25902__$1 = state_25902;var statearr_25919_25961 = state_25902__$1;(statearr_25919_25961[(2)] = inst_25836);
(statearr_25919_25961[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (12)))
{var inst_25857 = (state_25902[(15)]);var inst_25876 = (state_25902[(14)]);var inst_25862 = (state_25902[(16)]);var inst_25876__$1 = inst_25857.call(null,inst_25862);var state_25902__$1 = (function (){var statearr_25920 = state_25902;(statearr_25920[(14)] = inst_25876__$1);
return statearr_25920;
})();if(cljs.core.truth_(inst_25876__$1))
{var statearr_25921_25962 = state_25902__$1;(statearr_25921_25962[(1)] = (17));
} else
{var statearr_25922_25963 = state_25902__$1;(statearr_25922_25963[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (2)))
{var inst_25836 = (state_25902[(9)]);var inst_25839 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25836);var state_25902__$1 = state_25902;var statearr_25923_25964 = state_25902__$1;(statearr_25923_25964[(2)] = inst_25839);
(statearr_25923_25964[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (23)))
{var inst_25887 = (state_25902[(2)]);var state_25902__$1 = state_25902;if(cljs.core.truth_(inst_25887))
{var statearr_25924_25965 = state_25902__$1;(statearr_25924_25965[(1)] = (24));
} else
{var statearr_25925_25966 = state_25902__$1;(statearr_25925_25966[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (19)))
{var inst_25884 = (state_25902[(2)]);var state_25902__$1 = state_25902;if(cljs.core.truth_(inst_25884))
{var statearr_25926_25967 = state_25902__$1;(statearr_25926_25967[(1)] = (20));
} else
{var statearr_25927_25968 = state_25902__$1;(statearr_25927_25968[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (11)))
{var inst_25861 = (state_25902[(8)]);var inst_25867 = (inst_25861 == null);var state_25902__$1 = state_25902;if(cljs.core.truth_(inst_25867))
{var statearr_25928_25969 = state_25902__$1;(statearr_25928_25969[(1)] = (14));
} else
{var statearr_25929_25970 = state_25902__$1;(statearr_25929_25970[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (9)))
{var inst_25854 = (state_25902[(10)]);var inst_25854__$1 = (state_25902[(2)]);var inst_25855 = cljs.core.get.call(null,inst_25854__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25856 = cljs.core.get.call(null,inst_25854__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25857 = cljs.core.get.call(null,inst_25854__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25902__$1 = (function (){var statearr_25930 = state_25902;(statearr_25930[(15)] = inst_25857);
(statearr_25930[(17)] = inst_25856);
(statearr_25930[(10)] = inst_25854__$1);
return statearr_25930;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25902__$1,(10),inst_25855);
} else
{if((state_val_25903 === (5)))
{var inst_25846 = (state_25902[(7)]);var inst_25849 = cljs.core.seq_QMARK_.call(null,inst_25846);var state_25902__$1 = state_25902;if(inst_25849)
{var statearr_25931_25971 = state_25902__$1;(statearr_25931_25971[(1)] = (7));
} else
{var statearr_25932_25972 = state_25902__$1;(statearr_25932_25972[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (14)))
{var inst_25862 = (state_25902[(16)]);var inst_25869 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25862);var state_25902__$1 = state_25902;var statearr_25933_25973 = state_25902__$1;(statearr_25933_25973[(2)] = inst_25869);
(statearr_25933_25973[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (26)))
{var inst_25892 = (state_25902[(2)]);var state_25902__$1 = state_25902;var statearr_25934_25974 = state_25902__$1;(statearr_25934_25974[(2)] = inst_25892);
(statearr_25934_25974[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (16)))
{var inst_25872 = (state_25902[(2)]);var inst_25873 = calc_state.call(null);var inst_25846 = inst_25873;var state_25902__$1 = (function (){var statearr_25935 = state_25902;(statearr_25935[(18)] = inst_25872);
(statearr_25935[(7)] = inst_25846);
return statearr_25935;
})();var statearr_25936_25975 = state_25902__$1;(statearr_25936_25975[(2)] = null);
(statearr_25936_25975[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (10)))
{var inst_25861 = (state_25902[(8)]);var inst_25862 = (state_25902[(16)]);var inst_25860 = (state_25902[(2)]);var inst_25861__$1 = cljs.core.nth.call(null,inst_25860,(0),null);var inst_25862__$1 = cljs.core.nth.call(null,inst_25860,(1),null);var inst_25863 = (inst_25861__$1 == null);var inst_25864 = cljs.core._EQ_.call(null,inst_25862__$1,change);var inst_25865 = (inst_25863) || (inst_25864);var state_25902__$1 = (function (){var statearr_25937 = state_25902;(statearr_25937[(8)] = inst_25861__$1);
(statearr_25937[(16)] = inst_25862__$1);
return statearr_25937;
})();if(cljs.core.truth_(inst_25865))
{var statearr_25938_25976 = state_25902__$1;(statearr_25938_25976[(1)] = (11));
} else
{var statearr_25939_25977 = state_25902__$1;(statearr_25939_25977[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (18)))
{var inst_25857 = (state_25902[(15)]);var inst_25856 = (state_25902[(17)]);var inst_25862 = (state_25902[(16)]);var inst_25879 = cljs.core.empty_QMARK_.call(null,inst_25857);var inst_25880 = inst_25856.call(null,inst_25862);var inst_25881 = cljs.core.not.call(null,inst_25880);var inst_25882 = (inst_25879) && (inst_25881);var state_25902__$1 = state_25902;var statearr_25940_25978 = state_25902__$1;(statearr_25940_25978[(2)] = inst_25882);
(statearr_25940_25978[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25903 === (8)))
{var inst_25846 = (state_25902[(7)]);var state_25902__$1 = state_25902;var statearr_25941_25979 = state_25902__$1;(statearr_25941_25979[(2)] = inst_25846);
(statearr_25941_25979[(1)] = (9));
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
});})(c__11297__auto___25949,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11241__auto__,c__11297__auto___25949,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_25945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25945[(0)] = state_machine__11242__auto__);
(statearr_25945[(1)] = (1));
return statearr_25945;
});
var state_machine__11242__auto____1 = (function (state_25902){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_25902);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e25946){if((e25946 instanceof Object))
{var ex__11245__auto__ = e25946;var statearr_25947_25980 = state_25902;(statearr_25947_25980[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25902);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25946;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25981 = state_25902;
state_25902 = G__25981;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_25902){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_25902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___25949,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11299__auto__ = (function (){var statearr_25948 = f__11298__auto__.call(null);(statearr_25948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___25949);
return statearr_25948;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___25949,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25983 = {};return obj25983;
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
return (function (p1__25984_SHARP_){if(cljs.core.truth_(p1__25984_SHARP_.call(null,topic)))
{return p1__25984_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25984_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26107 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26107 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26108){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26108 = meta26108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26107.cljs$lang$type = true;
cljs.core.async.t26107.cljs$lang$ctorStr = "cljs.core.async/t26107";
cljs.core.async.t26107.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26107");
});})(mults,ensure_mult))
;
cljs.core.async.t26107.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26107.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26107.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26107.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26107.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26107.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26107.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26109){var self__ = this;
var _26109__$1 = this;return self__.meta26108;
});})(mults,ensure_mult))
;
cljs.core.async.t26107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26109,meta26108__$1){var self__ = this;
var _26109__$1 = this;return (new cljs.core.async.t26107(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26108__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26107 = ((function (mults,ensure_mult){
return (function __GT_t26107(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26108){return (new cljs.core.async.t26107(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26108));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26107(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11297__auto___26229 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___26229,mults,ensure_mult,p){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___26229,mults,ensure_mult,p){
return (function (state_26181){var state_val_26182 = (state_26181[(1)]);if((state_val_26182 === (7)))
{var inst_26177 = (state_26181[(2)]);var state_26181__$1 = state_26181;var statearr_26183_26230 = state_26181__$1;(statearr_26183_26230[(2)] = inst_26177);
(statearr_26183_26230[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (20)))
{var state_26181__$1 = state_26181;var statearr_26184_26231 = state_26181__$1;(statearr_26184_26231[(2)] = null);
(statearr_26184_26231[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (1)))
{var state_26181__$1 = state_26181;var statearr_26185_26232 = state_26181__$1;(statearr_26185_26232[(2)] = null);
(statearr_26185_26232[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (24)))
{var inst_26160 = (state_26181[(7)]);var inst_26169 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26160);var state_26181__$1 = state_26181;var statearr_26186_26233 = state_26181__$1;(statearr_26186_26233[(2)] = inst_26169);
(statearr_26186_26233[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (4)))
{var inst_26112 = (state_26181[(8)]);var inst_26112__$1 = (state_26181[(2)]);var inst_26113 = (inst_26112__$1 == null);var state_26181__$1 = (function (){var statearr_26187 = state_26181;(statearr_26187[(8)] = inst_26112__$1);
return statearr_26187;
})();if(cljs.core.truth_(inst_26113))
{var statearr_26188_26234 = state_26181__$1;(statearr_26188_26234[(1)] = (5));
} else
{var statearr_26189_26235 = state_26181__$1;(statearr_26189_26235[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (15)))
{var inst_26154 = (state_26181[(2)]);var state_26181__$1 = state_26181;var statearr_26190_26236 = state_26181__$1;(statearr_26190_26236[(2)] = inst_26154);
(statearr_26190_26236[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (21)))
{var inst_26174 = (state_26181[(2)]);var state_26181__$1 = (function (){var statearr_26191 = state_26181;(statearr_26191[(9)] = inst_26174);
return statearr_26191;
})();var statearr_26192_26237 = state_26181__$1;(statearr_26192_26237[(2)] = null);
(statearr_26192_26237[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (13)))
{var inst_26136 = (state_26181[(10)]);var inst_26138 = cljs.core.chunked_seq_QMARK_.call(null,inst_26136);var state_26181__$1 = state_26181;if(inst_26138)
{var statearr_26193_26238 = state_26181__$1;(statearr_26193_26238[(1)] = (16));
} else
{var statearr_26194_26239 = state_26181__$1;(statearr_26194_26239[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (22)))
{var inst_26166 = (state_26181[(2)]);var state_26181__$1 = state_26181;if(cljs.core.truth_(inst_26166))
{var statearr_26195_26240 = state_26181__$1;(statearr_26195_26240[(1)] = (23));
} else
{var statearr_26196_26241 = state_26181__$1;(statearr_26196_26241[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (6)))
{var inst_26162 = (state_26181[(11)]);var inst_26160 = (state_26181[(7)]);var inst_26112 = (state_26181[(8)]);var inst_26160__$1 = topic_fn.call(null,inst_26112);var inst_26161 = cljs.core.deref.call(null,mults);var inst_26162__$1 = cljs.core.get.call(null,inst_26161,inst_26160__$1);var state_26181__$1 = (function (){var statearr_26197 = state_26181;(statearr_26197[(11)] = inst_26162__$1);
(statearr_26197[(7)] = inst_26160__$1);
return statearr_26197;
})();if(cljs.core.truth_(inst_26162__$1))
{var statearr_26198_26242 = state_26181__$1;(statearr_26198_26242[(1)] = (19));
} else
{var statearr_26199_26243 = state_26181__$1;(statearr_26199_26243[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (25)))
{var inst_26171 = (state_26181[(2)]);var state_26181__$1 = state_26181;var statearr_26200_26244 = state_26181__$1;(statearr_26200_26244[(2)] = inst_26171);
(statearr_26200_26244[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (17)))
{var inst_26136 = (state_26181[(10)]);var inst_26145 = cljs.core.first.call(null,inst_26136);var inst_26146 = cljs.core.async.muxch_STAR_.call(null,inst_26145);var inst_26147 = cljs.core.async.close_BANG_.call(null,inst_26146);var inst_26148 = cljs.core.next.call(null,inst_26136);var inst_26122 = inst_26148;var inst_26123 = null;var inst_26124 = (0);var inst_26125 = (0);var state_26181__$1 = (function (){var statearr_26201 = state_26181;(statearr_26201[(12)] = inst_26122);
(statearr_26201[(13)] = inst_26147);
(statearr_26201[(14)] = inst_26123);
(statearr_26201[(15)] = inst_26124);
(statearr_26201[(16)] = inst_26125);
return statearr_26201;
})();var statearr_26202_26245 = state_26181__$1;(statearr_26202_26245[(2)] = null);
(statearr_26202_26245[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (3)))
{var inst_26179 = (state_26181[(2)]);var state_26181__$1 = state_26181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26181__$1,inst_26179);
} else
{if((state_val_26182 === (12)))
{var inst_26156 = (state_26181[(2)]);var state_26181__$1 = state_26181;var statearr_26203_26246 = state_26181__$1;(statearr_26203_26246[(2)] = inst_26156);
(statearr_26203_26246[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (2)))
{var state_26181__$1 = state_26181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26181__$1,(4),ch);
} else
{if((state_val_26182 === (23)))
{var state_26181__$1 = state_26181;var statearr_26204_26247 = state_26181__$1;(statearr_26204_26247[(2)] = null);
(statearr_26204_26247[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (19)))
{var inst_26162 = (state_26181[(11)]);var inst_26112 = (state_26181[(8)]);var inst_26164 = cljs.core.async.muxch_STAR_.call(null,inst_26162);var state_26181__$1 = state_26181;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26181__$1,(22),inst_26164,inst_26112);
} else
{if((state_val_26182 === (11)))
{var inst_26122 = (state_26181[(12)]);var inst_26136 = (state_26181[(10)]);var inst_26136__$1 = cljs.core.seq.call(null,inst_26122);var state_26181__$1 = (function (){var statearr_26205 = state_26181;(statearr_26205[(10)] = inst_26136__$1);
return statearr_26205;
})();if(inst_26136__$1)
{var statearr_26206_26248 = state_26181__$1;(statearr_26206_26248[(1)] = (13));
} else
{var statearr_26207_26249 = state_26181__$1;(statearr_26207_26249[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (9)))
{var inst_26158 = (state_26181[(2)]);var state_26181__$1 = state_26181;var statearr_26208_26250 = state_26181__$1;(statearr_26208_26250[(2)] = inst_26158);
(statearr_26208_26250[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (5)))
{var inst_26119 = cljs.core.deref.call(null,mults);var inst_26120 = cljs.core.vals.call(null,inst_26119);var inst_26121 = cljs.core.seq.call(null,inst_26120);var inst_26122 = inst_26121;var inst_26123 = null;var inst_26124 = (0);var inst_26125 = (0);var state_26181__$1 = (function (){var statearr_26209 = state_26181;(statearr_26209[(12)] = inst_26122);
(statearr_26209[(14)] = inst_26123);
(statearr_26209[(15)] = inst_26124);
(statearr_26209[(16)] = inst_26125);
return statearr_26209;
})();var statearr_26210_26251 = state_26181__$1;(statearr_26210_26251[(2)] = null);
(statearr_26210_26251[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (14)))
{var state_26181__$1 = state_26181;var statearr_26214_26252 = state_26181__$1;(statearr_26214_26252[(2)] = null);
(statearr_26214_26252[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (16)))
{var inst_26136 = (state_26181[(10)]);var inst_26140 = cljs.core.chunk_first.call(null,inst_26136);var inst_26141 = cljs.core.chunk_rest.call(null,inst_26136);var inst_26142 = cljs.core.count.call(null,inst_26140);var inst_26122 = inst_26141;var inst_26123 = inst_26140;var inst_26124 = inst_26142;var inst_26125 = (0);var state_26181__$1 = (function (){var statearr_26215 = state_26181;(statearr_26215[(12)] = inst_26122);
(statearr_26215[(14)] = inst_26123);
(statearr_26215[(15)] = inst_26124);
(statearr_26215[(16)] = inst_26125);
return statearr_26215;
})();var statearr_26216_26253 = state_26181__$1;(statearr_26216_26253[(2)] = null);
(statearr_26216_26253[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (10)))
{var inst_26122 = (state_26181[(12)]);var inst_26123 = (state_26181[(14)]);var inst_26124 = (state_26181[(15)]);var inst_26125 = (state_26181[(16)]);var inst_26130 = cljs.core._nth.call(null,inst_26123,inst_26125);var inst_26131 = cljs.core.async.muxch_STAR_.call(null,inst_26130);var inst_26132 = cljs.core.async.close_BANG_.call(null,inst_26131);var inst_26133 = (inst_26125 + (1));var tmp26211 = inst_26122;var tmp26212 = inst_26123;var tmp26213 = inst_26124;var inst_26122__$1 = tmp26211;var inst_26123__$1 = tmp26212;var inst_26124__$1 = tmp26213;var inst_26125__$1 = inst_26133;var state_26181__$1 = (function (){var statearr_26217 = state_26181;(statearr_26217[(12)] = inst_26122__$1);
(statearr_26217[(17)] = inst_26132);
(statearr_26217[(14)] = inst_26123__$1);
(statearr_26217[(15)] = inst_26124__$1);
(statearr_26217[(16)] = inst_26125__$1);
return statearr_26217;
})();var statearr_26218_26254 = state_26181__$1;(statearr_26218_26254[(2)] = null);
(statearr_26218_26254[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (18)))
{var inst_26151 = (state_26181[(2)]);var state_26181__$1 = state_26181;var statearr_26219_26255 = state_26181__$1;(statearr_26219_26255[(2)] = inst_26151);
(statearr_26219_26255[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26182 === (8)))
{var inst_26124 = (state_26181[(15)]);var inst_26125 = (state_26181[(16)]);var inst_26127 = (inst_26125 < inst_26124);var inst_26128 = inst_26127;var state_26181__$1 = state_26181;if(cljs.core.truth_(inst_26128))
{var statearr_26220_26256 = state_26181__$1;(statearr_26220_26256[(1)] = (10));
} else
{var statearr_26221_26257 = state_26181__$1;(statearr_26221_26257[(1)] = (11));
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
});})(c__11297__auto___26229,mults,ensure_mult,p))
;return ((function (switch__11241__auto__,c__11297__auto___26229,mults,ensure_mult,p){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26225[(0)] = state_machine__11242__auto__);
(statearr_26225[(1)] = (1));
return statearr_26225;
});
var state_machine__11242__auto____1 = (function (state_26181){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26181);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26226){if((e26226 instanceof Object))
{var ex__11245__auto__ = e26226;var statearr_26227_26258 = state_26181;(statearr_26227_26258[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26181);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26226;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26259 = state_26181;
state_26181 = G__26259;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26181){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___26229,mults,ensure_mult,p))
})();var state__11299__auto__ = (function (){var statearr_26228 = f__11298__auto__.call(null);(statearr_26228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___26229);
return statearr_26228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___26229,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11297__auto___26396 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___26396,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___26396,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26366){var state_val_26367 = (state_26366[(1)]);if((state_val_26367 === (7)))
{var state_26366__$1 = state_26366;var statearr_26368_26397 = state_26366__$1;(statearr_26368_26397[(2)] = null);
(statearr_26368_26397[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26367 === (1)))
{var state_26366__$1 = state_26366;var statearr_26369_26398 = state_26366__$1;(statearr_26369_26398[(2)] = null);
(statearr_26369_26398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26367 === (4)))
{var inst_26330 = (state_26366[(7)]);var inst_26332 = (inst_26330 < cnt);var state_26366__$1 = state_26366;if(cljs.core.truth_(inst_26332))
{var statearr_26370_26399 = state_26366__$1;(statearr_26370_26399[(1)] = (6));
} else
{var statearr_26371_26400 = state_26366__$1;(statearr_26371_26400[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26367 === (15)))
{var inst_26362 = (state_26366[(2)]);var state_26366__$1 = state_26366;var statearr_26372_26401 = state_26366__$1;(statearr_26372_26401[(2)] = inst_26362);
(statearr_26372_26401[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26367 === (13)))
{var inst_26355 = cljs.core.async.close_BANG_.call(null,out);var state_26366__$1 = state_26366;var statearr_26373_26402 = state_26366__$1;(statearr_26373_26402[(2)] = inst_26355);
(statearr_26373_26402[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26367 === (6)))
{var state_26366__$1 = state_26366;var statearr_26374_26403 = state_26366__$1;(statearr_26374_26403[(2)] = null);
(statearr_26374_26403[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26367 === (3)))
{var inst_26364 = (state_26366[(2)]);var state_26366__$1 = state_26366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26366__$1,inst_26364);
} else
{if((state_val_26367 === (12)))
{var inst_26352 = (state_26366[(8)]);var inst_26352__$1 = (state_26366[(2)]);var inst_26353 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26352__$1);var state_26366__$1 = (function (){var statearr_26375 = state_26366;(statearr_26375[(8)] = inst_26352__$1);
return statearr_26375;
})();if(cljs.core.truth_(inst_26353))
{var statearr_26376_26404 = state_26366__$1;(statearr_26376_26404[(1)] = (13));
} else
{var statearr_26377_26405 = state_26366__$1;(statearr_26377_26405[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26367 === (2)))
{var inst_26329 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26330 = (0);var state_26366__$1 = (function (){var statearr_26378 = state_26366;(statearr_26378[(7)] = inst_26330);
(statearr_26378[(9)] = inst_26329);
return statearr_26378;
})();var statearr_26379_26406 = state_26366__$1;(statearr_26379_26406[(2)] = null);
(statearr_26379_26406[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26367 === (11)))
{var inst_26330 = (state_26366[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26366,(10),Object,null,(9));var inst_26339 = chs__$1.call(null,inst_26330);var inst_26340 = done.call(null,inst_26330);var inst_26341 = cljs.core.async.take_BANG_.call(null,inst_26339,inst_26340);var state_26366__$1 = state_26366;var statearr_26380_26407 = state_26366__$1;(statearr_26380_26407[(2)] = inst_26341);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26366__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26367 === (9)))
{var inst_26330 = (state_26366[(7)]);var inst_26343 = (state_26366[(2)]);var inst_26344 = (inst_26330 + (1));var inst_26330__$1 = inst_26344;var state_26366__$1 = (function (){var statearr_26381 = state_26366;(statearr_26381[(10)] = inst_26343);
(statearr_26381[(7)] = inst_26330__$1);
return statearr_26381;
})();var statearr_26382_26408 = state_26366__$1;(statearr_26382_26408[(2)] = null);
(statearr_26382_26408[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26367 === (5)))
{var inst_26350 = (state_26366[(2)]);var state_26366__$1 = (function (){var statearr_26383 = state_26366;(statearr_26383[(11)] = inst_26350);
return statearr_26383;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26366__$1,(12),dchan);
} else
{if((state_val_26367 === (14)))
{var inst_26352 = (state_26366[(8)]);var inst_26357 = cljs.core.apply.call(null,f,inst_26352);var state_26366__$1 = state_26366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26366__$1,(16),out,inst_26357);
} else
{if((state_val_26367 === (16)))
{var inst_26359 = (state_26366[(2)]);var state_26366__$1 = (function (){var statearr_26384 = state_26366;(statearr_26384[(12)] = inst_26359);
return statearr_26384;
})();var statearr_26385_26409 = state_26366__$1;(statearr_26385_26409[(2)] = null);
(statearr_26385_26409[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26367 === (10)))
{var inst_26334 = (state_26366[(2)]);var inst_26335 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26366__$1 = (function (){var statearr_26386 = state_26366;(statearr_26386[(13)] = inst_26334);
return statearr_26386;
})();var statearr_26387_26410 = state_26366__$1;(statearr_26387_26410[(2)] = inst_26335);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26366__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26367 === (8)))
{var inst_26348 = (state_26366[(2)]);var state_26366__$1 = state_26366;var statearr_26388_26411 = state_26366__$1;(statearr_26388_26411[(2)] = inst_26348);
(statearr_26388_26411[(1)] = (5));
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
});})(c__11297__auto___26396,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11241__auto__,c__11297__auto___26396,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26392[(0)] = state_machine__11242__auto__);
(statearr_26392[(1)] = (1));
return statearr_26392;
});
var state_machine__11242__auto____1 = (function (state_26366){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26366);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26393){if((e26393 instanceof Object))
{var ex__11245__auto__ = e26393;var statearr_26394_26412 = state_26366;(statearr_26394_26412[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26366);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26393;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26413 = state_26366;
state_26366 = G__26413;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26366){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___26396,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11299__auto__ = (function (){var statearr_26395 = f__11298__auto__.call(null);(statearr_26395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___26396);
return statearr_26395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___26396,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___26521 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___26521,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___26521,out){
return (function (state_26497){var state_val_26498 = (state_26497[(1)]);if((state_val_26498 === (7)))
{var inst_26477 = (state_26497[(7)]);var inst_26476 = (state_26497[(8)]);var inst_26476__$1 = (state_26497[(2)]);var inst_26477__$1 = cljs.core.nth.call(null,inst_26476__$1,(0),null);var inst_26478 = cljs.core.nth.call(null,inst_26476__$1,(1),null);var inst_26479 = (inst_26477__$1 == null);var state_26497__$1 = (function (){var statearr_26499 = state_26497;(statearr_26499[(7)] = inst_26477__$1);
(statearr_26499[(9)] = inst_26478);
(statearr_26499[(8)] = inst_26476__$1);
return statearr_26499;
})();if(cljs.core.truth_(inst_26479))
{var statearr_26500_26522 = state_26497__$1;(statearr_26500_26522[(1)] = (8));
} else
{var statearr_26501_26523 = state_26497__$1;(statearr_26501_26523[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26498 === (1)))
{var inst_26468 = cljs.core.vec.call(null,chs);var inst_26469 = inst_26468;var state_26497__$1 = (function (){var statearr_26502 = state_26497;(statearr_26502[(10)] = inst_26469);
return statearr_26502;
})();var statearr_26503_26524 = state_26497__$1;(statearr_26503_26524[(2)] = null);
(statearr_26503_26524[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26498 === (4)))
{var inst_26469 = (state_26497[(10)]);var state_26497__$1 = state_26497;return cljs.core.async.ioc_alts_BANG_.call(null,state_26497__$1,(7),inst_26469);
} else
{if((state_val_26498 === (6)))
{var inst_26493 = (state_26497[(2)]);var state_26497__$1 = state_26497;var statearr_26504_26525 = state_26497__$1;(statearr_26504_26525[(2)] = inst_26493);
(statearr_26504_26525[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26498 === (3)))
{var inst_26495 = (state_26497[(2)]);var state_26497__$1 = state_26497;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26497__$1,inst_26495);
} else
{if((state_val_26498 === (2)))
{var inst_26469 = (state_26497[(10)]);var inst_26471 = cljs.core.count.call(null,inst_26469);var inst_26472 = (inst_26471 > (0));var state_26497__$1 = state_26497;if(cljs.core.truth_(inst_26472))
{var statearr_26506_26526 = state_26497__$1;(statearr_26506_26526[(1)] = (4));
} else
{var statearr_26507_26527 = state_26497__$1;(statearr_26507_26527[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26498 === (11)))
{var inst_26469 = (state_26497[(10)]);var inst_26486 = (state_26497[(2)]);var tmp26505 = inst_26469;var inst_26469__$1 = tmp26505;var state_26497__$1 = (function (){var statearr_26508 = state_26497;(statearr_26508[(10)] = inst_26469__$1);
(statearr_26508[(11)] = inst_26486);
return statearr_26508;
})();var statearr_26509_26528 = state_26497__$1;(statearr_26509_26528[(2)] = null);
(statearr_26509_26528[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26498 === (9)))
{var inst_26477 = (state_26497[(7)]);var state_26497__$1 = state_26497;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26497__$1,(11),out,inst_26477);
} else
{if((state_val_26498 === (5)))
{var inst_26491 = cljs.core.async.close_BANG_.call(null,out);var state_26497__$1 = state_26497;var statearr_26510_26529 = state_26497__$1;(statearr_26510_26529[(2)] = inst_26491);
(statearr_26510_26529[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26498 === (10)))
{var inst_26489 = (state_26497[(2)]);var state_26497__$1 = state_26497;var statearr_26511_26530 = state_26497__$1;(statearr_26511_26530[(2)] = inst_26489);
(statearr_26511_26530[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26498 === (8)))
{var inst_26469 = (state_26497[(10)]);var inst_26477 = (state_26497[(7)]);var inst_26478 = (state_26497[(9)]);var inst_26476 = (state_26497[(8)]);var inst_26481 = (function (){var c = inst_26478;var v = inst_26477;var vec__26474 = inst_26476;var cs = inst_26469;return ((function (c,v,vec__26474,cs,inst_26469,inst_26477,inst_26478,inst_26476,state_val_26498,c__11297__auto___26521,out){
return (function (p1__26414_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26414_SHARP_);
});
;})(c,v,vec__26474,cs,inst_26469,inst_26477,inst_26478,inst_26476,state_val_26498,c__11297__auto___26521,out))
})();var inst_26482 = cljs.core.filterv.call(null,inst_26481,inst_26469);var inst_26469__$1 = inst_26482;var state_26497__$1 = (function (){var statearr_26512 = state_26497;(statearr_26512[(10)] = inst_26469__$1);
return statearr_26512;
})();var statearr_26513_26531 = state_26497__$1;(statearr_26513_26531[(2)] = null);
(statearr_26513_26531[(1)] = (2));
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
});})(c__11297__auto___26521,out))
;return ((function (switch__11241__auto__,c__11297__auto___26521,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26517 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26517[(0)] = state_machine__11242__auto__);
(statearr_26517[(1)] = (1));
return statearr_26517;
});
var state_machine__11242__auto____1 = (function (state_26497){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26497);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26518){if((e26518 instanceof Object))
{var ex__11245__auto__ = e26518;var statearr_26519_26532 = state_26497;(statearr_26519_26532[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26497);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26518;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26533 = state_26497;
state_26497 = G__26533;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26497){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___26521,out))
})();var state__11299__auto__ = (function (){var statearr_26520 = f__11298__auto__.call(null);(statearr_26520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___26521);
return statearr_26520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___26521,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___26626 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___26626,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___26626,out){
return (function (state_26603){var state_val_26604 = (state_26603[(1)]);if((state_val_26604 === (7)))
{var inst_26585 = (state_26603[(7)]);var inst_26585__$1 = (state_26603[(2)]);var inst_26586 = (inst_26585__$1 == null);var inst_26587 = cljs.core.not.call(null,inst_26586);var state_26603__$1 = (function (){var statearr_26605 = state_26603;(statearr_26605[(7)] = inst_26585__$1);
return statearr_26605;
})();if(inst_26587)
{var statearr_26606_26627 = state_26603__$1;(statearr_26606_26627[(1)] = (8));
} else
{var statearr_26607_26628 = state_26603__$1;(statearr_26607_26628[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26604 === (1)))
{var inst_26580 = (0);var state_26603__$1 = (function (){var statearr_26608 = state_26603;(statearr_26608[(8)] = inst_26580);
return statearr_26608;
})();var statearr_26609_26629 = state_26603__$1;(statearr_26609_26629[(2)] = null);
(statearr_26609_26629[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26604 === (4)))
{var state_26603__$1 = state_26603;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26603__$1,(7),ch);
} else
{if((state_val_26604 === (6)))
{var inst_26598 = (state_26603[(2)]);var state_26603__$1 = state_26603;var statearr_26610_26630 = state_26603__$1;(statearr_26610_26630[(2)] = inst_26598);
(statearr_26610_26630[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26604 === (3)))
{var inst_26600 = (state_26603[(2)]);var inst_26601 = cljs.core.async.close_BANG_.call(null,out);var state_26603__$1 = (function (){var statearr_26611 = state_26603;(statearr_26611[(9)] = inst_26600);
return statearr_26611;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26603__$1,inst_26601);
} else
{if((state_val_26604 === (2)))
{var inst_26580 = (state_26603[(8)]);var inst_26582 = (inst_26580 < n);var state_26603__$1 = state_26603;if(cljs.core.truth_(inst_26582))
{var statearr_26612_26631 = state_26603__$1;(statearr_26612_26631[(1)] = (4));
} else
{var statearr_26613_26632 = state_26603__$1;(statearr_26613_26632[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26604 === (11)))
{var inst_26580 = (state_26603[(8)]);var inst_26590 = (state_26603[(2)]);var inst_26591 = (inst_26580 + (1));var inst_26580__$1 = inst_26591;var state_26603__$1 = (function (){var statearr_26614 = state_26603;(statearr_26614[(8)] = inst_26580__$1);
(statearr_26614[(10)] = inst_26590);
return statearr_26614;
})();var statearr_26615_26633 = state_26603__$1;(statearr_26615_26633[(2)] = null);
(statearr_26615_26633[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26604 === (9)))
{var state_26603__$1 = state_26603;var statearr_26616_26634 = state_26603__$1;(statearr_26616_26634[(2)] = null);
(statearr_26616_26634[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26604 === (5)))
{var state_26603__$1 = state_26603;var statearr_26617_26635 = state_26603__$1;(statearr_26617_26635[(2)] = null);
(statearr_26617_26635[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26604 === (10)))
{var inst_26595 = (state_26603[(2)]);var state_26603__$1 = state_26603;var statearr_26618_26636 = state_26603__$1;(statearr_26618_26636[(2)] = inst_26595);
(statearr_26618_26636[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26604 === (8)))
{var inst_26585 = (state_26603[(7)]);var state_26603__$1 = state_26603;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26603__$1,(11),out,inst_26585);
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
});})(c__11297__auto___26626,out))
;return ((function (switch__11241__auto__,c__11297__auto___26626,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26622 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26622[(0)] = state_machine__11242__auto__);
(statearr_26622[(1)] = (1));
return statearr_26622;
});
var state_machine__11242__auto____1 = (function (state_26603){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26603);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26623){if((e26623 instanceof Object))
{var ex__11245__auto__ = e26623;var statearr_26624_26637 = state_26603;(statearr_26624_26637[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26603);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26623;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26638 = state_26603;
state_26603 = G__26638;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26603){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___26626,out))
})();var state__11299__auto__ = (function (){var statearr_26625 = f__11298__auto__.call(null);(statearr_26625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___26626);
return statearr_26625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___26626,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26646 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26646 = (function (ch,f,map_LT_,meta26647){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26647 = meta26647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26646.cljs$lang$type = true;
cljs.core.async.t26646.cljs$lang$ctorStr = "cljs.core.async/t26646";
cljs.core.async.t26646.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26646");
});
cljs.core.async.t26646.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26646.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t26646.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26646.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26649 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26649 = (function (fn1,_,meta26647,ch,f,map_LT_,meta26650){
this.fn1 = fn1;
this._ = _;
this.meta26647 = meta26647;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26650 = meta26650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26649.cljs$lang$type = true;
cljs.core.async.t26649.cljs$lang$ctorStr = "cljs.core.async/t26649";
cljs.core.async.t26649.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26649");
});})(___$1))
;
cljs.core.async.t26649.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26649.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26649.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26639_SHARP_){return f1.call(null,(((p1__26639_SHARP_ == null))?null:self__.f.call(null,p1__26639_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26651){var self__ = this;
var _26651__$1 = this;return self__.meta26650;
});})(___$1))
;
cljs.core.async.t26649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26651,meta26650__$1){var self__ = this;
var _26651__$1 = this;return (new cljs.core.async.t26649(self__.fn1,self__._,self__.meta26647,self__.ch,self__.f,self__.map_LT_,meta26650__$1));
});})(___$1))
;
cljs.core.async.__GT_t26649 = ((function (___$1){
return (function __GT_t26649(fn1__$1,___$2,meta26647__$1,ch__$2,f__$2,map_LT___$2,meta26650){return (new cljs.core.async.t26649(fn1__$1,___$2,meta26647__$1,ch__$2,f__$2,map_LT___$2,meta26650));
});})(___$1))
;
}
return (new cljs.core.async.t26649(fn1,___$1,self__.meta26647,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t26646.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26646.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26646.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26648){var self__ = this;
var _26648__$1 = this;return self__.meta26647;
});
cljs.core.async.t26646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26648,meta26647__$1){var self__ = this;
var _26648__$1 = this;return (new cljs.core.async.t26646(self__.ch,self__.f,self__.map_LT_,meta26647__$1));
});
cljs.core.async.__GT_t26646 = (function __GT_t26646(ch__$1,f__$1,map_LT___$1,meta26647){return (new cljs.core.async.t26646(ch__$1,f__$1,map_LT___$1,meta26647));
});
}
return (new cljs.core.async.t26646(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26655 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26655 = (function (ch,f,map_GT_,meta26656){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26656 = meta26656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26655.cljs$lang$type = true;
cljs.core.async.t26655.cljs$lang$ctorStr = "cljs.core.async/t26655";
cljs.core.async.t26655.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26655");
});
cljs.core.async.t26655.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26655.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t26655.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26655.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26655.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26655.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26657){var self__ = this;
var _26657__$1 = this;return self__.meta26656;
});
cljs.core.async.t26655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26657,meta26656__$1){var self__ = this;
var _26657__$1 = this;return (new cljs.core.async.t26655(self__.ch,self__.f,self__.map_GT_,meta26656__$1));
});
cljs.core.async.__GT_t26655 = (function __GT_t26655(ch__$1,f__$1,map_GT___$1,meta26656){return (new cljs.core.async.t26655(ch__$1,f__$1,map_GT___$1,meta26656));
});
}
return (new cljs.core.async.t26655(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26661 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26661 = (function (ch,p,filter_GT_,meta26662){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26662 = meta26662;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26661.cljs$lang$type = true;
cljs.core.async.t26661.cljs$lang$ctorStr = "cljs.core.async/t26661";
cljs.core.async.t26661.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26661");
});
cljs.core.async.t26661.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26661.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t26661.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26661.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26661.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26661.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26661.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26663){var self__ = this;
var _26663__$1 = this;return self__.meta26662;
});
cljs.core.async.t26661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26663,meta26662__$1){var self__ = this;
var _26663__$1 = this;return (new cljs.core.async.t26661(self__.ch,self__.p,self__.filter_GT_,meta26662__$1));
});
cljs.core.async.__GT_t26661 = (function __GT_t26661(ch__$1,p__$1,filter_GT___$1,meta26662){return (new cljs.core.async.t26661(ch__$1,p__$1,filter_GT___$1,meta26662));
});
}
return (new cljs.core.async.t26661(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___26746 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___26746,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___26746,out){
return (function (state_26725){var state_val_26726 = (state_26725[(1)]);if((state_val_26726 === (7)))
{var inst_26721 = (state_26725[(2)]);var state_26725__$1 = state_26725;var statearr_26727_26747 = state_26725__$1;(statearr_26727_26747[(2)] = inst_26721);
(statearr_26727_26747[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (1)))
{var state_26725__$1 = state_26725;var statearr_26728_26748 = state_26725__$1;(statearr_26728_26748[(2)] = null);
(statearr_26728_26748[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (4)))
{var inst_26707 = (state_26725[(7)]);var inst_26707__$1 = (state_26725[(2)]);var inst_26708 = (inst_26707__$1 == null);var state_26725__$1 = (function (){var statearr_26729 = state_26725;(statearr_26729[(7)] = inst_26707__$1);
return statearr_26729;
})();if(cljs.core.truth_(inst_26708))
{var statearr_26730_26749 = state_26725__$1;(statearr_26730_26749[(1)] = (5));
} else
{var statearr_26731_26750 = state_26725__$1;(statearr_26731_26750[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (6)))
{var inst_26707 = (state_26725[(7)]);var inst_26712 = p.call(null,inst_26707);var state_26725__$1 = state_26725;if(cljs.core.truth_(inst_26712))
{var statearr_26732_26751 = state_26725__$1;(statearr_26732_26751[(1)] = (8));
} else
{var statearr_26733_26752 = state_26725__$1;(statearr_26733_26752[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (3)))
{var inst_26723 = (state_26725[(2)]);var state_26725__$1 = state_26725;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26725__$1,inst_26723);
} else
{if((state_val_26726 === (2)))
{var state_26725__$1 = state_26725;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26725__$1,(4),ch);
} else
{if((state_val_26726 === (11)))
{var inst_26715 = (state_26725[(2)]);var state_26725__$1 = state_26725;var statearr_26734_26753 = state_26725__$1;(statearr_26734_26753[(2)] = inst_26715);
(statearr_26734_26753[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (9)))
{var state_26725__$1 = state_26725;var statearr_26735_26754 = state_26725__$1;(statearr_26735_26754[(2)] = null);
(statearr_26735_26754[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (5)))
{var inst_26710 = cljs.core.async.close_BANG_.call(null,out);var state_26725__$1 = state_26725;var statearr_26736_26755 = state_26725__$1;(statearr_26736_26755[(2)] = inst_26710);
(statearr_26736_26755[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (10)))
{var inst_26718 = (state_26725[(2)]);var state_26725__$1 = (function (){var statearr_26737 = state_26725;(statearr_26737[(8)] = inst_26718);
return statearr_26737;
})();var statearr_26738_26756 = state_26725__$1;(statearr_26738_26756[(2)] = null);
(statearr_26738_26756[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (8)))
{var inst_26707 = (state_26725[(7)]);var state_26725__$1 = state_26725;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26725__$1,(11),out,inst_26707);
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
});})(c__11297__auto___26746,out))
;return ((function (switch__11241__auto__,c__11297__auto___26746,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26742 = [null,null,null,null,null,null,null,null,null];(statearr_26742[(0)] = state_machine__11242__auto__);
(statearr_26742[(1)] = (1));
return statearr_26742;
});
var state_machine__11242__auto____1 = (function (state_26725){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26725);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26743){if((e26743 instanceof Object))
{var ex__11245__auto__ = e26743;var statearr_26744_26757 = state_26725;(statearr_26744_26757[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26725);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26743;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26758 = state_26725;
state_26725 = G__26758;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26725){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___26746,out))
})();var state__11299__auto__ = (function (){var statearr_26745 = f__11298__auto__.call(null);(statearr_26745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___26746);
return statearr_26745;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___26746,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__){
return (function (state_26924){var state_val_26925 = (state_26924[(1)]);if((state_val_26925 === (7)))
{var inst_26920 = (state_26924[(2)]);var state_26924__$1 = state_26924;var statearr_26926_26967 = state_26924__$1;(statearr_26926_26967[(2)] = inst_26920);
(statearr_26926_26967[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (20)))
{var inst_26890 = (state_26924[(7)]);var inst_26901 = (state_26924[(2)]);var inst_26902 = cljs.core.next.call(null,inst_26890);var inst_26876 = inst_26902;var inst_26877 = null;var inst_26878 = (0);var inst_26879 = (0);var state_26924__$1 = (function (){var statearr_26927 = state_26924;(statearr_26927[(8)] = inst_26876);
(statearr_26927[(9)] = inst_26901);
(statearr_26927[(10)] = inst_26879);
(statearr_26927[(11)] = inst_26877);
(statearr_26927[(12)] = inst_26878);
return statearr_26927;
})();var statearr_26928_26968 = state_26924__$1;(statearr_26928_26968[(2)] = null);
(statearr_26928_26968[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (1)))
{var state_26924__$1 = state_26924;var statearr_26929_26969 = state_26924__$1;(statearr_26929_26969[(2)] = null);
(statearr_26929_26969[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (4)))
{var inst_26865 = (state_26924[(13)]);var inst_26865__$1 = (state_26924[(2)]);var inst_26866 = (inst_26865__$1 == null);var state_26924__$1 = (function (){var statearr_26930 = state_26924;(statearr_26930[(13)] = inst_26865__$1);
return statearr_26930;
})();if(cljs.core.truth_(inst_26866))
{var statearr_26931_26970 = state_26924__$1;(statearr_26931_26970[(1)] = (5));
} else
{var statearr_26932_26971 = state_26924__$1;(statearr_26932_26971[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (15)))
{var state_26924__$1 = state_26924;var statearr_26936_26972 = state_26924__$1;(statearr_26936_26972[(2)] = null);
(statearr_26936_26972[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (21)))
{var state_26924__$1 = state_26924;var statearr_26937_26973 = state_26924__$1;(statearr_26937_26973[(2)] = null);
(statearr_26937_26973[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (13)))
{var inst_26876 = (state_26924[(8)]);var inst_26879 = (state_26924[(10)]);var inst_26877 = (state_26924[(11)]);var inst_26878 = (state_26924[(12)]);var inst_26886 = (state_26924[(2)]);var inst_26887 = (inst_26879 + (1));var tmp26933 = inst_26876;var tmp26934 = inst_26877;var tmp26935 = inst_26878;var inst_26876__$1 = tmp26933;var inst_26877__$1 = tmp26934;var inst_26878__$1 = tmp26935;var inst_26879__$1 = inst_26887;var state_26924__$1 = (function (){var statearr_26938 = state_26924;(statearr_26938[(8)] = inst_26876__$1);
(statearr_26938[(14)] = inst_26886);
(statearr_26938[(10)] = inst_26879__$1);
(statearr_26938[(11)] = inst_26877__$1);
(statearr_26938[(12)] = inst_26878__$1);
return statearr_26938;
})();var statearr_26939_26974 = state_26924__$1;(statearr_26939_26974[(2)] = null);
(statearr_26939_26974[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (22)))
{var state_26924__$1 = state_26924;var statearr_26940_26975 = state_26924__$1;(statearr_26940_26975[(2)] = null);
(statearr_26940_26975[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (6)))
{var inst_26865 = (state_26924[(13)]);var inst_26874 = f.call(null,inst_26865);var inst_26875 = cljs.core.seq.call(null,inst_26874);var inst_26876 = inst_26875;var inst_26877 = null;var inst_26878 = (0);var inst_26879 = (0);var state_26924__$1 = (function (){var statearr_26941 = state_26924;(statearr_26941[(8)] = inst_26876);
(statearr_26941[(10)] = inst_26879);
(statearr_26941[(11)] = inst_26877);
(statearr_26941[(12)] = inst_26878);
return statearr_26941;
})();var statearr_26942_26976 = state_26924__$1;(statearr_26942_26976[(2)] = null);
(statearr_26942_26976[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (17)))
{var inst_26890 = (state_26924[(7)]);var inst_26894 = cljs.core.chunk_first.call(null,inst_26890);var inst_26895 = cljs.core.chunk_rest.call(null,inst_26890);var inst_26896 = cljs.core.count.call(null,inst_26894);var inst_26876 = inst_26895;var inst_26877 = inst_26894;var inst_26878 = inst_26896;var inst_26879 = (0);var state_26924__$1 = (function (){var statearr_26943 = state_26924;(statearr_26943[(8)] = inst_26876);
(statearr_26943[(10)] = inst_26879);
(statearr_26943[(11)] = inst_26877);
(statearr_26943[(12)] = inst_26878);
return statearr_26943;
})();var statearr_26944_26977 = state_26924__$1;(statearr_26944_26977[(2)] = null);
(statearr_26944_26977[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (3)))
{var inst_26922 = (state_26924[(2)]);var state_26924__$1 = state_26924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26924__$1,inst_26922);
} else
{if((state_val_26925 === (12)))
{var inst_26910 = (state_26924[(2)]);var state_26924__$1 = state_26924;var statearr_26945_26978 = state_26924__$1;(statearr_26945_26978[(2)] = inst_26910);
(statearr_26945_26978[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (2)))
{var state_26924__$1 = state_26924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26924__$1,(4),in$);
} else
{if((state_val_26925 === (23)))
{var inst_26918 = (state_26924[(2)]);var state_26924__$1 = state_26924;var statearr_26946_26979 = state_26924__$1;(statearr_26946_26979[(2)] = inst_26918);
(statearr_26946_26979[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (19)))
{var inst_26905 = (state_26924[(2)]);var state_26924__$1 = state_26924;var statearr_26947_26980 = state_26924__$1;(statearr_26947_26980[(2)] = inst_26905);
(statearr_26947_26980[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (11)))
{var inst_26890 = (state_26924[(7)]);var inst_26876 = (state_26924[(8)]);var inst_26890__$1 = cljs.core.seq.call(null,inst_26876);var state_26924__$1 = (function (){var statearr_26948 = state_26924;(statearr_26948[(7)] = inst_26890__$1);
return statearr_26948;
})();if(inst_26890__$1)
{var statearr_26949_26981 = state_26924__$1;(statearr_26949_26981[(1)] = (14));
} else
{var statearr_26950_26982 = state_26924__$1;(statearr_26950_26982[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (9)))
{var inst_26912 = (state_26924[(2)]);var inst_26913 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26924__$1 = (function (){var statearr_26951 = state_26924;(statearr_26951[(15)] = inst_26912);
return statearr_26951;
})();if(cljs.core.truth_(inst_26913))
{var statearr_26952_26983 = state_26924__$1;(statearr_26952_26983[(1)] = (21));
} else
{var statearr_26953_26984 = state_26924__$1;(statearr_26953_26984[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (5)))
{var inst_26868 = cljs.core.async.close_BANG_.call(null,out);var state_26924__$1 = state_26924;var statearr_26954_26985 = state_26924__$1;(statearr_26954_26985[(2)] = inst_26868);
(statearr_26954_26985[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (14)))
{var inst_26890 = (state_26924[(7)]);var inst_26892 = cljs.core.chunked_seq_QMARK_.call(null,inst_26890);var state_26924__$1 = state_26924;if(inst_26892)
{var statearr_26955_26986 = state_26924__$1;(statearr_26955_26986[(1)] = (17));
} else
{var statearr_26956_26987 = state_26924__$1;(statearr_26956_26987[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (16)))
{var inst_26908 = (state_26924[(2)]);var state_26924__$1 = state_26924;var statearr_26957_26988 = state_26924__$1;(statearr_26957_26988[(2)] = inst_26908);
(statearr_26957_26988[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (10)))
{var inst_26879 = (state_26924[(10)]);var inst_26877 = (state_26924[(11)]);var inst_26884 = cljs.core._nth.call(null,inst_26877,inst_26879);var state_26924__$1 = state_26924;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26924__$1,(13),out,inst_26884);
} else
{if((state_val_26925 === (18)))
{var inst_26890 = (state_26924[(7)]);var inst_26899 = cljs.core.first.call(null,inst_26890);var state_26924__$1 = state_26924;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26924__$1,(20),out,inst_26899);
} else
{if((state_val_26925 === (8)))
{var inst_26879 = (state_26924[(10)]);var inst_26878 = (state_26924[(12)]);var inst_26881 = (inst_26879 < inst_26878);var inst_26882 = inst_26881;var state_26924__$1 = state_26924;if(cljs.core.truth_(inst_26882))
{var statearr_26958_26989 = state_26924__$1;(statearr_26958_26989[(1)] = (10));
} else
{var statearr_26959_26990 = state_26924__$1;(statearr_26959_26990[(1)] = (11));
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
});})(c__11297__auto__))
;return ((function (switch__11241__auto__,c__11297__auto__){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26963[(0)] = state_machine__11242__auto__);
(statearr_26963[(1)] = (1));
return statearr_26963;
});
var state_machine__11242__auto____1 = (function (state_26924){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26924);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26964){if((e26964 instanceof Object))
{var ex__11245__auto__ = e26964;var statearr_26965_26991 = state_26924;(statearr_26965_26991[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26924);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26964;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26992 = state_26924;
state_26924 = G__26992;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26924){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_26966 = f__11298__auto__.call(null);(statearr_26966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_26966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__))
);
return c__11297__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___27089 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___27089,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___27089,out){
return (function (state_27064){var state_val_27065 = (state_27064[(1)]);if((state_val_27065 === (7)))
{var inst_27059 = (state_27064[(2)]);var state_27064__$1 = state_27064;var statearr_27066_27090 = state_27064__$1;(statearr_27066_27090[(2)] = inst_27059);
(statearr_27066_27090[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27065 === (1)))
{var inst_27041 = null;var state_27064__$1 = (function (){var statearr_27067 = state_27064;(statearr_27067[(7)] = inst_27041);
return statearr_27067;
})();var statearr_27068_27091 = state_27064__$1;(statearr_27068_27091[(2)] = null);
(statearr_27068_27091[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27065 === (4)))
{var inst_27044 = (state_27064[(8)]);var inst_27044__$1 = (state_27064[(2)]);var inst_27045 = (inst_27044__$1 == null);var inst_27046 = cljs.core.not.call(null,inst_27045);var state_27064__$1 = (function (){var statearr_27069 = state_27064;(statearr_27069[(8)] = inst_27044__$1);
return statearr_27069;
})();if(inst_27046)
{var statearr_27070_27092 = state_27064__$1;(statearr_27070_27092[(1)] = (5));
} else
{var statearr_27071_27093 = state_27064__$1;(statearr_27071_27093[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27065 === (6)))
{var state_27064__$1 = state_27064;var statearr_27072_27094 = state_27064__$1;(statearr_27072_27094[(2)] = null);
(statearr_27072_27094[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27065 === (3)))
{var inst_27061 = (state_27064[(2)]);var inst_27062 = cljs.core.async.close_BANG_.call(null,out);var state_27064__$1 = (function (){var statearr_27073 = state_27064;(statearr_27073[(9)] = inst_27061);
return statearr_27073;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27064__$1,inst_27062);
} else
{if((state_val_27065 === (2)))
{var state_27064__$1 = state_27064;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27064__$1,(4),ch);
} else
{if((state_val_27065 === (11)))
{var inst_27044 = (state_27064[(8)]);var inst_27053 = (state_27064[(2)]);var inst_27041 = inst_27044;var state_27064__$1 = (function (){var statearr_27074 = state_27064;(statearr_27074[(10)] = inst_27053);
(statearr_27074[(7)] = inst_27041);
return statearr_27074;
})();var statearr_27075_27095 = state_27064__$1;(statearr_27075_27095[(2)] = null);
(statearr_27075_27095[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27065 === (9)))
{var inst_27044 = (state_27064[(8)]);var state_27064__$1 = state_27064;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27064__$1,(11),out,inst_27044);
} else
{if((state_val_27065 === (5)))
{var inst_27044 = (state_27064[(8)]);var inst_27041 = (state_27064[(7)]);var inst_27048 = cljs.core._EQ_.call(null,inst_27044,inst_27041);var state_27064__$1 = state_27064;if(inst_27048)
{var statearr_27077_27096 = state_27064__$1;(statearr_27077_27096[(1)] = (8));
} else
{var statearr_27078_27097 = state_27064__$1;(statearr_27078_27097[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27065 === (10)))
{var inst_27056 = (state_27064[(2)]);var state_27064__$1 = state_27064;var statearr_27079_27098 = state_27064__$1;(statearr_27079_27098[(2)] = inst_27056);
(statearr_27079_27098[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27065 === (8)))
{var inst_27041 = (state_27064[(7)]);var tmp27076 = inst_27041;var inst_27041__$1 = tmp27076;var state_27064__$1 = (function (){var statearr_27080 = state_27064;(statearr_27080[(7)] = inst_27041__$1);
return statearr_27080;
})();var statearr_27081_27099 = state_27064__$1;(statearr_27081_27099[(2)] = null);
(statearr_27081_27099[(1)] = (2));
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
});})(c__11297__auto___27089,out))
;return ((function (switch__11241__auto__,c__11297__auto___27089,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_27085 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27085[(0)] = state_machine__11242__auto__);
(statearr_27085[(1)] = (1));
return statearr_27085;
});
var state_machine__11242__auto____1 = (function (state_27064){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_27064);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e27086){if((e27086 instanceof Object))
{var ex__11245__auto__ = e27086;var statearr_27087_27100 = state_27064;(statearr_27087_27100[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27064);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27086;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27101 = state_27064;
state_27064 = G__27101;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_27064){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_27064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___27089,out))
})();var state__11299__auto__ = (function (){var statearr_27088 = f__11298__auto__.call(null);(statearr_27088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___27089);
return statearr_27088;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___27089,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___27236 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___27236,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___27236,out){
return (function (state_27206){var state_val_27207 = (state_27206[(1)]);if((state_val_27207 === (7)))
{var inst_27202 = (state_27206[(2)]);var state_27206__$1 = state_27206;var statearr_27208_27237 = state_27206__$1;(statearr_27208_27237[(2)] = inst_27202);
(statearr_27208_27237[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27207 === (1)))
{var inst_27169 = (new Array(n));var inst_27170 = inst_27169;var inst_27171 = (0);var state_27206__$1 = (function (){var statearr_27209 = state_27206;(statearr_27209[(7)] = inst_27171);
(statearr_27209[(8)] = inst_27170);
return statearr_27209;
})();var statearr_27210_27238 = state_27206__$1;(statearr_27210_27238[(2)] = null);
(statearr_27210_27238[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27207 === (4)))
{var inst_27174 = (state_27206[(9)]);var inst_27174__$1 = (state_27206[(2)]);var inst_27175 = (inst_27174__$1 == null);var inst_27176 = cljs.core.not.call(null,inst_27175);var state_27206__$1 = (function (){var statearr_27211 = state_27206;(statearr_27211[(9)] = inst_27174__$1);
return statearr_27211;
})();if(inst_27176)
{var statearr_27212_27239 = state_27206__$1;(statearr_27212_27239[(1)] = (5));
} else
{var statearr_27213_27240 = state_27206__$1;(statearr_27213_27240[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27207 === (15)))
{var inst_27196 = (state_27206[(2)]);var state_27206__$1 = state_27206;var statearr_27214_27241 = state_27206__$1;(statearr_27214_27241[(2)] = inst_27196);
(statearr_27214_27241[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27207 === (13)))
{var state_27206__$1 = state_27206;var statearr_27215_27242 = state_27206__$1;(statearr_27215_27242[(2)] = null);
(statearr_27215_27242[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27207 === (6)))
{var inst_27171 = (state_27206[(7)]);var inst_27192 = (inst_27171 > (0));var state_27206__$1 = state_27206;if(cljs.core.truth_(inst_27192))
{var statearr_27216_27243 = state_27206__$1;(statearr_27216_27243[(1)] = (12));
} else
{var statearr_27217_27244 = state_27206__$1;(statearr_27217_27244[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27207 === (3)))
{var inst_27204 = (state_27206[(2)]);var state_27206__$1 = state_27206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27206__$1,inst_27204);
} else
{if((state_val_27207 === (12)))
{var inst_27170 = (state_27206[(8)]);var inst_27194 = cljs.core.vec.call(null,inst_27170);var state_27206__$1 = state_27206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27206__$1,(15),out,inst_27194);
} else
{if((state_val_27207 === (2)))
{var state_27206__$1 = state_27206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27206__$1,(4),ch);
} else
{if((state_val_27207 === (11)))
{var inst_27186 = (state_27206[(2)]);var inst_27187 = (new Array(n));var inst_27170 = inst_27187;var inst_27171 = (0);var state_27206__$1 = (function (){var statearr_27218 = state_27206;(statearr_27218[(7)] = inst_27171);
(statearr_27218[(10)] = inst_27186);
(statearr_27218[(8)] = inst_27170);
return statearr_27218;
})();var statearr_27219_27245 = state_27206__$1;(statearr_27219_27245[(2)] = null);
(statearr_27219_27245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27207 === (9)))
{var inst_27170 = (state_27206[(8)]);var inst_27184 = cljs.core.vec.call(null,inst_27170);var state_27206__$1 = state_27206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27206__$1,(11),out,inst_27184);
} else
{if((state_val_27207 === (5)))
{var inst_27179 = (state_27206[(11)]);var inst_27171 = (state_27206[(7)]);var inst_27174 = (state_27206[(9)]);var inst_27170 = (state_27206[(8)]);var inst_27178 = (inst_27170[inst_27171] = inst_27174);var inst_27179__$1 = (inst_27171 + (1));var inst_27180 = (inst_27179__$1 < n);var state_27206__$1 = (function (){var statearr_27220 = state_27206;(statearr_27220[(11)] = inst_27179__$1);
(statearr_27220[(12)] = inst_27178);
return statearr_27220;
})();if(cljs.core.truth_(inst_27180))
{var statearr_27221_27246 = state_27206__$1;(statearr_27221_27246[(1)] = (8));
} else
{var statearr_27222_27247 = state_27206__$1;(statearr_27222_27247[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27207 === (14)))
{var inst_27199 = (state_27206[(2)]);var inst_27200 = cljs.core.async.close_BANG_.call(null,out);var state_27206__$1 = (function (){var statearr_27224 = state_27206;(statearr_27224[(13)] = inst_27199);
return statearr_27224;
})();var statearr_27225_27248 = state_27206__$1;(statearr_27225_27248[(2)] = inst_27200);
(statearr_27225_27248[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27207 === (10)))
{var inst_27190 = (state_27206[(2)]);var state_27206__$1 = state_27206;var statearr_27226_27249 = state_27206__$1;(statearr_27226_27249[(2)] = inst_27190);
(statearr_27226_27249[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27207 === (8)))
{var inst_27179 = (state_27206[(11)]);var inst_27170 = (state_27206[(8)]);var tmp27223 = inst_27170;var inst_27170__$1 = tmp27223;var inst_27171 = inst_27179;var state_27206__$1 = (function (){var statearr_27227 = state_27206;(statearr_27227[(7)] = inst_27171);
(statearr_27227[(8)] = inst_27170__$1);
return statearr_27227;
})();var statearr_27228_27250 = state_27206__$1;(statearr_27228_27250[(2)] = null);
(statearr_27228_27250[(1)] = (2));
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
});})(c__11297__auto___27236,out))
;return ((function (switch__11241__auto__,c__11297__auto___27236,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_27232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27232[(0)] = state_machine__11242__auto__);
(statearr_27232[(1)] = (1));
return statearr_27232;
});
var state_machine__11242__auto____1 = (function (state_27206){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_27206);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e27233){if((e27233 instanceof Object))
{var ex__11245__auto__ = e27233;var statearr_27234_27251 = state_27206;(statearr_27234_27251[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27206);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27233;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27252 = state_27206;
state_27206 = G__27252;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_27206){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_27206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___27236,out))
})();var state__11299__auto__ = (function (){var statearr_27235 = f__11298__auto__.call(null);(statearr_27235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___27236);
return statearr_27235;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___27236,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___27395 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___27395,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___27395,out){
return (function (state_27365){var state_val_27366 = (state_27365[(1)]);if((state_val_27366 === (7)))
{var inst_27361 = (state_27365[(2)]);var state_27365__$1 = state_27365;var statearr_27367_27396 = state_27365__$1;(statearr_27367_27396[(2)] = inst_27361);
(statearr_27367_27396[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27366 === (1)))
{var inst_27324 = [];var inst_27325 = inst_27324;var inst_27326 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_27365__$1 = (function (){var statearr_27368 = state_27365;(statearr_27368[(7)] = inst_27325);
(statearr_27368[(8)] = inst_27326);
return statearr_27368;
})();var statearr_27369_27397 = state_27365__$1;(statearr_27369_27397[(2)] = null);
(statearr_27369_27397[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27366 === (4)))
{var inst_27329 = (state_27365[(9)]);var inst_27329__$1 = (state_27365[(2)]);var inst_27330 = (inst_27329__$1 == null);var inst_27331 = cljs.core.not.call(null,inst_27330);var state_27365__$1 = (function (){var statearr_27370 = state_27365;(statearr_27370[(9)] = inst_27329__$1);
return statearr_27370;
})();if(inst_27331)
{var statearr_27371_27398 = state_27365__$1;(statearr_27371_27398[(1)] = (5));
} else
{var statearr_27372_27399 = state_27365__$1;(statearr_27372_27399[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27366 === (15)))
{var inst_27355 = (state_27365[(2)]);var state_27365__$1 = state_27365;var statearr_27373_27400 = state_27365__$1;(statearr_27373_27400[(2)] = inst_27355);
(statearr_27373_27400[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27366 === (13)))
{var state_27365__$1 = state_27365;var statearr_27374_27401 = state_27365__$1;(statearr_27374_27401[(2)] = null);
(statearr_27374_27401[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27366 === (6)))
{var inst_27325 = (state_27365[(7)]);var inst_27350 = inst_27325.length;var inst_27351 = (inst_27350 > (0));var state_27365__$1 = state_27365;if(cljs.core.truth_(inst_27351))
{var statearr_27375_27402 = state_27365__$1;(statearr_27375_27402[(1)] = (12));
} else
{var statearr_27376_27403 = state_27365__$1;(statearr_27376_27403[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27366 === (3)))
{var inst_27363 = (state_27365[(2)]);var state_27365__$1 = state_27365;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27365__$1,inst_27363);
} else
{if((state_val_27366 === (12)))
{var inst_27325 = (state_27365[(7)]);var inst_27353 = cljs.core.vec.call(null,inst_27325);var state_27365__$1 = state_27365;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27365__$1,(15),out,inst_27353);
} else
{if((state_val_27366 === (2)))
{var state_27365__$1 = state_27365;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27365__$1,(4),ch);
} else
{if((state_val_27366 === (11)))
{var inst_27329 = (state_27365[(9)]);var inst_27333 = (state_27365[(10)]);var inst_27343 = (state_27365[(2)]);var inst_27344 = [];var inst_27345 = inst_27344.push(inst_27329);var inst_27325 = inst_27344;var inst_27326 = inst_27333;var state_27365__$1 = (function (){var statearr_27377 = state_27365;(statearr_27377[(7)] = inst_27325);
(statearr_27377[(11)] = inst_27345);
(statearr_27377[(8)] = inst_27326);
(statearr_27377[(12)] = inst_27343);
return statearr_27377;
})();var statearr_27378_27404 = state_27365__$1;(statearr_27378_27404[(2)] = null);
(statearr_27378_27404[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27366 === (9)))
{var inst_27325 = (state_27365[(7)]);var inst_27341 = cljs.core.vec.call(null,inst_27325);var state_27365__$1 = state_27365;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27365__$1,(11),out,inst_27341);
} else
{if((state_val_27366 === (5)))
{var inst_27329 = (state_27365[(9)]);var inst_27326 = (state_27365[(8)]);var inst_27333 = (state_27365[(10)]);var inst_27333__$1 = f.call(null,inst_27329);var inst_27334 = cljs.core._EQ_.call(null,inst_27333__$1,inst_27326);var inst_27335 = cljs.core.keyword_identical_QMARK_.call(null,inst_27326,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_27336 = (inst_27334) || (inst_27335);var state_27365__$1 = (function (){var statearr_27379 = state_27365;(statearr_27379[(10)] = inst_27333__$1);
return statearr_27379;
})();if(cljs.core.truth_(inst_27336))
{var statearr_27380_27405 = state_27365__$1;(statearr_27380_27405[(1)] = (8));
} else
{var statearr_27381_27406 = state_27365__$1;(statearr_27381_27406[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27366 === (14)))
{var inst_27358 = (state_27365[(2)]);var inst_27359 = cljs.core.async.close_BANG_.call(null,out);var state_27365__$1 = (function (){var statearr_27383 = state_27365;(statearr_27383[(13)] = inst_27358);
return statearr_27383;
})();var statearr_27384_27407 = state_27365__$1;(statearr_27384_27407[(2)] = inst_27359);
(statearr_27384_27407[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27366 === (10)))
{var inst_27348 = (state_27365[(2)]);var state_27365__$1 = state_27365;var statearr_27385_27408 = state_27365__$1;(statearr_27385_27408[(2)] = inst_27348);
(statearr_27385_27408[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27366 === (8)))
{var inst_27325 = (state_27365[(7)]);var inst_27329 = (state_27365[(9)]);var inst_27333 = (state_27365[(10)]);var inst_27338 = inst_27325.push(inst_27329);var tmp27382 = inst_27325;var inst_27325__$1 = tmp27382;var inst_27326 = inst_27333;var state_27365__$1 = (function (){var statearr_27386 = state_27365;(statearr_27386[(7)] = inst_27325__$1);
(statearr_27386[(14)] = inst_27338);
(statearr_27386[(8)] = inst_27326);
return statearr_27386;
})();var statearr_27387_27409 = state_27365__$1;(statearr_27387_27409[(2)] = null);
(statearr_27387_27409[(1)] = (2));
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
});})(c__11297__auto___27395,out))
;return ((function (switch__11241__auto__,c__11297__auto___27395,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_27391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27391[(0)] = state_machine__11242__auto__);
(statearr_27391[(1)] = (1));
return statearr_27391;
});
var state_machine__11242__auto____1 = (function (state_27365){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_27365);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e27392){if((e27392 instanceof Object))
{var ex__11245__auto__ = e27392;var statearr_27393_27410 = state_27365;(statearr_27393_27410[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27365);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27392;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27411 = state_27365;
state_27365 = G__27411;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_27365){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_27365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___27395,out))
})();var state__11299__auto__ = (function (){var statearr_27394 = f__11298__auto__.call(null);(statearr_27394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___27395);
return statearr_27394;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___27395,out))
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
