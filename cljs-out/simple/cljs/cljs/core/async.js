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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24325 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24325 = (function (f,fn_handler,meta24326){
this.f = f;
this.fn_handler = fn_handler;
this.meta24326 = meta24326;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24325.cljs$lang$type = true;
cljs.core.async.t24325.cljs$lang$ctorStr = "cljs.core.async/t24325";
cljs.core.async.t24325.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24325");
});
cljs.core.async.t24325.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24325.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24325.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24327){var self__ = this;
var _24327__$1 = this;return self__.meta24326;
});
cljs.core.async.t24325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24327,meta24326__$1){var self__ = this;
var _24327__$1 = this;return (new cljs.core.async.t24325(self__.f,self__.fn_handler,meta24326__$1));
});
cljs.core.async.__GT_t24325 = (function __GT_t24325(f__$1,fn_handler__$1,meta24326){return (new cljs.core.async.t24325(f__$1,fn_handler__$1,meta24326));
});
}
return (new cljs.core.async.t24325(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24329 = buff;if(G__24329)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__24329.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24329.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24329);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24329);
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
{var val_24330 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24330);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24330,ret){
return (function (){return fn1.call(null,val_24330);
});})(val_24330,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___24331 = n;var x_24332 = (0);while(true){
if((x_24332 < n__4508__auto___24331))
{(a[x_24332] = (0));
{
var G__24333 = (x_24332 + (1));
x_24332 = G__24333;
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
var G__24334 = (i + (1));
i = G__24334;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24338 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24338 = (function (flag,alt_flag,meta24339){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24339 = meta24339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24338.cljs$lang$type = true;
cljs.core.async.t24338.cljs$lang$ctorStr = "cljs.core.async/t24338";
cljs.core.async.t24338.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24338");
});})(flag))
;
cljs.core.async.t24338.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24340){var self__ = this;
var _24340__$1 = this;return self__.meta24339;
});})(flag))
;
cljs.core.async.t24338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24340,meta24339__$1){var self__ = this;
var _24340__$1 = this;return (new cljs.core.async.t24338(self__.flag,self__.alt_flag,meta24339__$1));
});})(flag))
;
cljs.core.async.__GT_t24338 = ((function (flag){
return (function __GT_t24338(flag__$1,alt_flag__$1,meta24339){return (new cljs.core.async.t24338(flag__$1,alt_flag__$1,meta24339));
});})(flag))
;
}
return (new cljs.core.async.t24338(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24344 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24344 = (function (cb,flag,alt_handler,meta24345){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24345 = meta24345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24344.cljs$lang$type = true;
cljs.core.async.t24344.cljs$lang$ctorStr = "cljs.core.async/t24344";
cljs.core.async.t24344.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24344");
});
cljs.core.async.t24344.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24346){var self__ = this;
var _24346__$1 = this;return self__.meta24345;
});
cljs.core.async.t24344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24346,meta24345__$1){var self__ = this;
var _24346__$1 = this;return (new cljs.core.async.t24344(self__.cb,self__.flag,self__.alt_handler,meta24345__$1));
});
cljs.core.async.__GT_t24344 = (function __GT_t24344(cb__$1,flag__$1,alt_handler__$1,meta24345){return (new cljs.core.async.t24344(cb__$1,flag__$1,alt_handler__$1,meta24345));
});
}
return (new cljs.core.async.t24344(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24347_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24347_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24348_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24348_SHARP_,port], null));
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
var G__24349 = (i + (1));
i = G__24349;
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
var alts_BANG___delegate = function (ports,p__24350){var map__24352 = p__24350;var map__24352__$1 = ((cljs.core.seq_QMARK_.call(null,map__24352))?cljs.core.apply.call(null,cljs.core.hash_map,map__24352):map__24352);var opts = map__24352__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24350 = null;if (arguments.length > 1) {
  p__24350 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24350);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24353){
var ports = cljs.core.first(arglist__24353);
var p__24350 = cljs.core.rest(arglist__24353);
return alts_BANG___delegate(ports,p__24350);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11297__auto___24448 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___24448){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___24448){
return (function (state_24424){var state_val_24425 = (state_24424[(1)]);if((state_val_24425 === (7)))
{var inst_24420 = (state_24424[(2)]);var state_24424__$1 = state_24424;var statearr_24426_24449 = state_24424__$1;(statearr_24426_24449[(2)] = inst_24420);
(statearr_24426_24449[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24425 === (1)))
{var state_24424__$1 = state_24424;var statearr_24427_24450 = state_24424__$1;(statearr_24427_24450[(2)] = null);
(statearr_24427_24450[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24425 === (4)))
{var inst_24403 = (state_24424[(7)]);var inst_24403__$1 = (state_24424[(2)]);var inst_24404 = (inst_24403__$1 == null);var state_24424__$1 = (function (){var statearr_24428 = state_24424;(statearr_24428[(7)] = inst_24403__$1);
return statearr_24428;
})();if(cljs.core.truth_(inst_24404))
{var statearr_24429_24451 = state_24424__$1;(statearr_24429_24451[(1)] = (5));
} else
{var statearr_24430_24452 = state_24424__$1;(statearr_24430_24452[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24425 === (13)))
{var state_24424__$1 = state_24424;var statearr_24431_24453 = state_24424__$1;(statearr_24431_24453[(2)] = null);
(statearr_24431_24453[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24425 === (6)))
{var inst_24403 = (state_24424[(7)]);var state_24424__$1 = state_24424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24424__$1,(11),to,inst_24403);
} else
{if((state_val_24425 === (3)))
{var inst_24422 = (state_24424[(2)]);var state_24424__$1 = state_24424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24424__$1,inst_24422);
} else
{if((state_val_24425 === (12)))
{var state_24424__$1 = state_24424;var statearr_24432_24454 = state_24424__$1;(statearr_24432_24454[(2)] = null);
(statearr_24432_24454[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24425 === (2)))
{var state_24424__$1 = state_24424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24424__$1,(4),from);
} else
{if((state_val_24425 === (11)))
{var inst_24413 = (state_24424[(2)]);var state_24424__$1 = state_24424;if(cljs.core.truth_(inst_24413))
{var statearr_24433_24455 = state_24424__$1;(statearr_24433_24455[(1)] = (12));
} else
{var statearr_24434_24456 = state_24424__$1;(statearr_24434_24456[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24425 === (9)))
{var state_24424__$1 = state_24424;var statearr_24435_24457 = state_24424__$1;(statearr_24435_24457[(2)] = null);
(statearr_24435_24457[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24425 === (5)))
{var state_24424__$1 = state_24424;if(cljs.core.truth_(close_QMARK_))
{var statearr_24436_24458 = state_24424__$1;(statearr_24436_24458[(1)] = (8));
} else
{var statearr_24437_24459 = state_24424__$1;(statearr_24437_24459[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24425 === (14)))
{var inst_24418 = (state_24424[(2)]);var state_24424__$1 = state_24424;var statearr_24438_24460 = state_24424__$1;(statearr_24438_24460[(2)] = inst_24418);
(statearr_24438_24460[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24425 === (10)))
{var inst_24410 = (state_24424[(2)]);var state_24424__$1 = state_24424;var statearr_24439_24461 = state_24424__$1;(statearr_24439_24461[(2)] = inst_24410);
(statearr_24439_24461[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24425 === (8)))
{var inst_24407 = cljs.core.async.close_BANG_.call(null,to);var state_24424__$1 = state_24424;var statearr_24440_24462 = state_24424__$1;(statearr_24440_24462[(2)] = inst_24407);
(statearr_24440_24462[(1)] = (10));
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
});})(c__11297__auto___24448))
;return ((function (switch__11241__auto__,c__11297__auto___24448){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24444 = [null,null,null,null,null,null,null,null];(statearr_24444[(0)] = state_machine__11242__auto__);
(statearr_24444[(1)] = (1));
return statearr_24444;
});
var state_machine__11242__auto____1 = (function (state_24424){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24424);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24445){if((e24445 instanceof Object))
{var ex__11245__auto__ = e24445;var statearr_24446_24463 = state_24424;(statearr_24446_24463[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24424);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24445;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24464 = state_24424;
state_24424 = G__24464;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24424){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___24448))
})();var state__11299__auto__ = (function (){var statearr_24447 = f__11298__auto__.call(null);(statearr_24447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24448);
return statearr_24447;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___24448))
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
return (function (p__24648){var vec__24649 = p__24648;var v = cljs.core.nth.call(null,vec__24649,(0),null);var p = cljs.core.nth.call(null,vec__24649,(1),null);var job = vec__24649;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__11297__auto___24831 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___24831,res,vec__24649,v,p,job,jobs,results){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___24831,res,vec__24649,v,p,job,jobs,results){
return (function (state_24654){var state_val_24655 = (state_24654[(1)]);if((state_val_24655 === (2)))
{var inst_24651 = (state_24654[(2)]);var inst_24652 = cljs.core.async.close_BANG_.call(null,res);var state_24654__$1 = (function (){var statearr_24656 = state_24654;(statearr_24656[(7)] = inst_24651);
return statearr_24656;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24654__$1,inst_24652);
} else
{if((state_val_24655 === (1)))
{var state_24654__$1 = state_24654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24654__$1,(2),res,v);
} else
{return null;
}
}
});})(c__11297__auto___24831,res,vec__24649,v,p,job,jobs,results))
;return ((function (switch__11241__auto__,c__11297__auto___24831,res,vec__24649,v,p,job,jobs,results){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24660 = [null,null,null,null,null,null,null,null];(statearr_24660[(0)] = state_machine__11242__auto__);
(statearr_24660[(1)] = (1));
return statearr_24660;
});
var state_machine__11242__auto____1 = (function (state_24654){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24654);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24661){if((e24661 instanceof Object))
{var ex__11245__auto__ = e24661;var statearr_24662_24832 = state_24654;(statearr_24662_24832[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24654);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24661;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24833 = state_24654;
state_24654 = G__24833;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24654){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___24831,res,vec__24649,v,p,job,jobs,results))
})();var state__11299__auto__ = (function (){var statearr_24663 = f__11298__auto__.call(null);(statearr_24663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24831);
return statearr_24663;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___24831,res,vec__24649,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24664){var vec__24665 = p__24664;var v = cljs.core.nth.call(null,vec__24665,(0),null);var p = cljs.core.nth.call(null,vec__24665,(1),null);var job = vec__24665;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24834 = n;var __24835 = (0);while(true){
if((__24835 < n__4508__auto___24834))
{var G__24666_24836 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24666_24836) {
case "async":
var c__11297__auto___24838 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24835,c__11297__auto___24838,G__24666_24836,n__4508__auto___24834,jobs,results,process,async){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (__24835,c__11297__auto___24838,G__24666_24836,n__4508__auto___24834,jobs,results,process,async){
return (function (state_24679){var state_val_24680 = (state_24679[(1)]);if((state_val_24680 === (7)))
{var inst_24675 = (state_24679[(2)]);var state_24679__$1 = state_24679;var statearr_24681_24839 = state_24679__$1;(statearr_24681_24839[(2)] = inst_24675);
(statearr_24681_24839[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24680 === (6)))
{var state_24679__$1 = state_24679;var statearr_24682_24840 = state_24679__$1;(statearr_24682_24840[(2)] = null);
(statearr_24682_24840[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24680 === (5)))
{var state_24679__$1 = state_24679;var statearr_24683_24841 = state_24679__$1;(statearr_24683_24841[(2)] = null);
(statearr_24683_24841[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24680 === (4)))
{var inst_24669 = (state_24679[(2)]);var inst_24670 = async.call(null,inst_24669);var state_24679__$1 = state_24679;if(cljs.core.truth_(inst_24670))
{var statearr_24684_24842 = state_24679__$1;(statearr_24684_24842[(1)] = (5));
} else
{var statearr_24685_24843 = state_24679__$1;(statearr_24685_24843[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24680 === (3)))
{var inst_24677 = (state_24679[(2)]);var state_24679__$1 = state_24679;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24679__$1,inst_24677);
} else
{if((state_val_24680 === (2)))
{var state_24679__$1 = state_24679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24679__$1,(4),jobs);
} else
{if((state_val_24680 === (1)))
{var state_24679__$1 = state_24679;var statearr_24686_24844 = state_24679__$1;(statearr_24686_24844[(2)] = null);
(statearr_24686_24844[(1)] = (2));
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
});})(__24835,c__11297__auto___24838,G__24666_24836,n__4508__auto___24834,jobs,results,process,async))
;return ((function (__24835,switch__11241__auto__,c__11297__auto___24838,G__24666_24836,n__4508__auto___24834,jobs,results,process,async){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24690 = [null,null,null,null,null,null,null];(statearr_24690[(0)] = state_machine__11242__auto__);
(statearr_24690[(1)] = (1));
return statearr_24690;
});
var state_machine__11242__auto____1 = (function (state_24679){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24679);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24691){if((e24691 instanceof Object))
{var ex__11245__auto__ = e24691;var statearr_24692_24845 = state_24679;(statearr_24692_24845[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24679);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24691;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24846 = state_24679;
state_24679 = G__24846;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24679){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(__24835,switch__11241__auto__,c__11297__auto___24838,G__24666_24836,n__4508__auto___24834,jobs,results,process,async))
})();var state__11299__auto__ = (function (){var statearr_24693 = f__11298__auto__.call(null);(statearr_24693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24838);
return statearr_24693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(__24835,c__11297__auto___24838,G__24666_24836,n__4508__auto___24834,jobs,results,process,async))
);

break;
case "compute":
var c__11297__auto___24847 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24835,c__11297__auto___24847,G__24666_24836,n__4508__auto___24834,jobs,results,process,async){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (__24835,c__11297__auto___24847,G__24666_24836,n__4508__auto___24834,jobs,results,process,async){
return (function (state_24706){var state_val_24707 = (state_24706[(1)]);if((state_val_24707 === (7)))
{var inst_24702 = (state_24706[(2)]);var state_24706__$1 = state_24706;var statearr_24708_24848 = state_24706__$1;(statearr_24708_24848[(2)] = inst_24702);
(statearr_24708_24848[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24707 === (6)))
{var state_24706__$1 = state_24706;var statearr_24709_24849 = state_24706__$1;(statearr_24709_24849[(2)] = null);
(statearr_24709_24849[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24707 === (5)))
{var state_24706__$1 = state_24706;var statearr_24710_24850 = state_24706__$1;(statearr_24710_24850[(2)] = null);
(statearr_24710_24850[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24707 === (4)))
{var inst_24696 = (state_24706[(2)]);var inst_24697 = process.call(null,inst_24696);var state_24706__$1 = state_24706;if(cljs.core.truth_(inst_24697))
{var statearr_24711_24851 = state_24706__$1;(statearr_24711_24851[(1)] = (5));
} else
{var statearr_24712_24852 = state_24706__$1;(statearr_24712_24852[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24707 === (3)))
{var inst_24704 = (state_24706[(2)]);var state_24706__$1 = state_24706;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24706__$1,inst_24704);
} else
{if((state_val_24707 === (2)))
{var state_24706__$1 = state_24706;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24706__$1,(4),jobs);
} else
{if((state_val_24707 === (1)))
{var state_24706__$1 = state_24706;var statearr_24713_24853 = state_24706__$1;(statearr_24713_24853[(2)] = null);
(statearr_24713_24853[(1)] = (2));
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
});})(__24835,c__11297__auto___24847,G__24666_24836,n__4508__auto___24834,jobs,results,process,async))
;return ((function (__24835,switch__11241__auto__,c__11297__auto___24847,G__24666_24836,n__4508__auto___24834,jobs,results,process,async){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24717 = [null,null,null,null,null,null,null];(statearr_24717[(0)] = state_machine__11242__auto__);
(statearr_24717[(1)] = (1));
return statearr_24717;
});
var state_machine__11242__auto____1 = (function (state_24706){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24706);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24718){if((e24718 instanceof Object))
{var ex__11245__auto__ = e24718;var statearr_24719_24854 = state_24706;(statearr_24719_24854[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24706);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24718;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24855 = state_24706;
state_24706 = G__24855;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24706){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(__24835,switch__11241__auto__,c__11297__auto___24847,G__24666_24836,n__4508__auto___24834,jobs,results,process,async))
})();var state__11299__auto__ = (function (){var statearr_24720 = f__11298__auto__.call(null);(statearr_24720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24847);
return statearr_24720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(__24835,c__11297__auto___24847,G__24666_24836,n__4508__auto___24834,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24856 = (__24835 + (1));
__24835 = G__24856;
continue;
}
} else
{}
break;
}
var c__11297__auto___24857 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___24857,jobs,results,process,async){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___24857,jobs,results,process,async){
return (function (state_24742){var state_val_24743 = (state_24742[(1)]);if((state_val_24743 === (9)))
{var inst_24735 = (state_24742[(2)]);var state_24742__$1 = (function (){var statearr_24744 = state_24742;(statearr_24744[(7)] = inst_24735);
return statearr_24744;
})();var statearr_24745_24858 = state_24742__$1;(statearr_24745_24858[(2)] = null);
(statearr_24745_24858[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24743 === (8)))
{var inst_24728 = (state_24742[(8)]);var inst_24733 = (state_24742[(2)]);var state_24742__$1 = (function (){var statearr_24746 = state_24742;(statearr_24746[(9)] = inst_24733);
return statearr_24746;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24742__$1,(9),results,inst_24728);
} else
{if((state_val_24743 === (7)))
{var inst_24738 = (state_24742[(2)]);var state_24742__$1 = state_24742;var statearr_24747_24859 = state_24742__$1;(statearr_24747_24859[(2)] = inst_24738);
(statearr_24747_24859[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24743 === (6)))
{var inst_24723 = (state_24742[(10)]);var inst_24728 = (state_24742[(8)]);var inst_24728__$1 = cljs.core.async.chan.call(null,(1));var inst_24729 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24730 = [inst_24723,inst_24728__$1];var inst_24731 = (new cljs.core.PersistentVector(null,2,(5),inst_24729,inst_24730,null));var state_24742__$1 = (function (){var statearr_24748 = state_24742;(statearr_24748[(8)] = inst_24728__$1);
return statearr_24748;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24742__$1,(8),jobs,inst_24731);
} else
{if((state_val_24743 === (5)))
{var inst_24726 = cljs.core.async.close_BANG_.call(null,jobs);var state_24742__$1 = state_24742;var statearr_24749_24860 = state_24742__$1;(statearr_24749_24860[(2)] = inst_24726);
(statearr_24749_24860[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24743 === (4)))
{var inst_24723 = (state_24742[(10)]);var inst_24723__$1 = (state_24742[(2)]);var inst_24724 = (inst_24723__$1 == null);var state_24742__$1 = (function (){var statearr_24750 = state_24742;(statearr_24750[(10)] = inst_24723__$1);
return statearr_24750;
})();if(cljs.core.truth_(inst_24724))
{var statearr_24751_24861 = state_24742__$1;(statearr_24751_24861[(1)] = (5));
} else
{var statearr_24752_24862 = state_24742__$1;(statearr_24752_24862[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24743 === (3)))
{var inst_24740 = (state_24742[(2)]);var state_24742__$1 = state_24742;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24742__$1,inst_24740);
} else
{if((state_val_24743 === (2)))
{var state_24742__$1 = state_24742;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24742__$1,(4),from);
} else
{if((state_val_24743 === (1)))
{var state_24742__$1 = state_24742;var statearr_24753_24863 = state_24742__$1;(statearr_24753_24863[(2)] = null);
(statearr_24753_24863[(1)] = (2));
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
});})(c__11297__auto___24857,jobs,results,process,async))
;return ((function (switch__11241__auto__,c__11297__auto___24857,jobs,results,process,async){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24757 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24757[(0)] = state_machine__11242__auto__);
(statearr_24757[(1)] = (1));
return statearr_24757;
});
var state_machine__11242__auto____1 = (function (state_24742){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24742);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24758){if((e24758 instanceof Object))
{var ex__11245__auto__ = e24758;var statearr_24759_24864 = state_24742;(statearr_24759_24864[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24742);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24758;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24865 = state_24742;
state_24742 = G__24865;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24742){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___24857,jobs,results,process,async))
})();var state__11299__auto__ = (function (){var statearr_24760 = f__11298__auto__.call(null);(statearr_24760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24857);
return statearr_24760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___24857,jobs,results,process,async))
);
var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,jobs,results,process,async){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,jobs,results,process,async){
return (function (state_24798){var state_val_24799 = (state_24798[(1)]);if((state_val_24799 === (7)))
{var inst_24794 = (state_24798[(2)]);var state_24798__$1 = state_24798;var statearr_24800_24866 = state_24798__$1;(statearr_24800_24866[(2)] = inst_24794);
(statearr_24800_24866[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24799 === (20)))
{var state_24798__$1 = state_24798;var statearr_24801_24867 = state_24798__$1;(statearr_24801_24867[(2)] = null);
(statearr_24801_24867[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24799 === (1)))
{var state_24798__$1 = state_24798;var statearr_24802_24868 = state_24798__$1;(statearr_24802_24868[(2)] = null);
(statearr_24802_24868[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24799 === (4)))
{var inst_24763 = (state_24798[(7)]);var inst_24763__$1 = (state_24798[(2)]);var inst_24764 = (inst_24763__$1 == null);var state_24798__$1 = (function (){var statearr_24803 = state_24798;(statearr_24803[(7)] = inst_24763__$1);
return statearr_24803;
})();if(cljs.core.truth_(inst_24764))
{var statearr_24804_24869 = state_24798__$1;(statearr_24804_24869[(1)] = (5));
} else
{var statearr_24805_24870 = state_24798__$1;(statearr_24805_24870[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24799 === (15)))
{var inst_24776 = (state_24798[(8)]);var state_24798__$1 = state_24798;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24798__$1,(18),to,inst_24776);
} else
{if((state_val_24799 === (21)))
{var inst_24789 = (state_24798[(2)]);var state_24798__$1 = state_24798;var statearr_24806_24871 = state_24798__$1;(statearr_24806_24871[(2)] = inst_24789);
(statearr_24806_24871[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24799 === (13)))
{var inst_24791 = (state_24798[(2)]);var state_24798__$1 = (function (){var statearr_24807 = state_24798;(statearr_24807[(9)] = inst_24791);
return statearr_24807;
})();var statearr_24808_24872 = state_24798__$1;(statearr_24808_24872[(2)] = null);
(statearr_24808_24872[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24799 === (6)))
{var inst_24763 = (state_24798[(7)]);var state_24798__$1 = state_24798;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24798__$1,(11),inst_24763);
} else
{if((state_val_24799 === (17)))
{var inst_24784 = (state_24798[(2)]);var state_24798__$1 = state_24798;if(cljs.core.truth_(inst_24784))
{var statearr_24809_24873 = state_24798__$1;(statearr_24809_24873[(1)] = (19));
} else
{var statearr_24810_24874 = state_24798__$1;(statearr_24810_24874[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24799 === (3)))
{var inst_24796 = (state_24798[(2)]);var state_24798__$1 = state_24798;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24798__$1,inst_24796);
} else
{if((state_val_24799 === (12)))
{var inst_24773 = (state_24798[(10)]);var state_24798__$1 = state_24798;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24798__$1,(14),inst_24773);
} else
{if((state_val_24799 === (2)))
{var state_24798__$1 = state_24798;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24798__$1,(4),results);
} else
{if((state_val_24799 === (19)))
{var state_24798__$1 = state_24798;var statearr_24811_24875 = state_24798__$1;(statearr_24811_24875[(2)] = null);
(statearr_24811_24875[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24799 === (11)))
{var inst_24773 = (state_24798[(2)]);var state_24798__$1 = (function (){var statearr_24812 = state_24798;(statearr_24812[(10)] = inst_24773);
return statearr_24812;
})();var statearr_24813_24876 = state_24798__$1;(statearr_24813_24876[(2)] = null);
(statearr_24813_24876[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24799 === (9)))
{var state_24798__$1 = state_24798;var statearr_24814_24877 = state_24798__$1;(statearr_24814_24877[(2)] = null);
(statearr_24814_24877[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24799 === (5)))
{var state_24798__$1 = state_24798;if(cljs.core.truth_(close_QMARK_))
{var statearr_24815_24878 = state_24798__$1;(statearr_24815_24878[(1)] = (8));
} else
{var statearr_24816_24879 = state_24798__$1;(statearr_24816_24879[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24799 === (14)))
{var inst_24778 = (state_24798[(11)]);var inst_24776 = (state_24798[(8)]);var inst_24776__$1 = (state_24798[(2)]);var inst_24777 = (inst_24776__$1 == null);var inst_24778__$1 = cljs.core.not.call(null,inst_24777);var state_24798__$1 = (function (){var statearr_24817 = state_24798;(statearr_24817[(11)] = inst_24778__$1);
(statearr_24817[(8)] = inst_24776__$1);
return statearr_24817;
})();if(inst_24778__$1)
{var statearr_24818_24880 = state_24798__$1;(statearr_24818_24880[(1)] = (15));
} else
{var statearr_24819_24881 = state_24798__$1;(statearr_24819_24881[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24799 === (16)))
{var inst_24778 = (state_24798[(11)]);var state_24798__$1 = state_24798;var statearr_24820_24882 = state_24798__$1;(statearr_24820_24882[(2)] = inst_24778);
(statearr_24820_24882[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24799 === (10)))
{var inst_24770 = (state_24798[(2)]);var state_24798__$1 = state_24798;var statearr_24821_24883 = state_24798__$1;(statearr_24821_24883[(2)] = inst_24770);
(statearr_24821_24883[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24799 === (18)))
{var inst_24781 = (state_24798[(2)]);var state_24798__$1 = state_24798;var statearr_24822_24884 = state_24798__$1;(statearr_24822_24884[(2)] = inst_24781);
(statearr_24822_24884[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24799 === (8)))
{var inst_24767 = cljs.core.async.close_BANG_.call(null,to);var state_24798__$1 = state_24798;var statearr_24823_24885 = state_24798__$1;(statearr_24823_24885[(2)] = inst_24767);
(statearr_24823_24885[(1)] = (10));
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
var state_machine__11242__auto____0 = (function (){var statearr_24827 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24827[(0)] = state_machine__11242__auto__);
(statearr_24827[(1)] = (1));
return statearr_24827;
});
var state_machine__11242__auto____1 = (function (state_24798){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24798);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24828){if((e24828 instanceof Object))
{var ex__11245__auto__ = e24828;var statearr_24829_24886 = state_24798;(statearr_24829_24886[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24798);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24828;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24887 = state_24798;
state_24798 = G__24887;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24798){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,jobs,results,process,async))
})();var state__11299__auto__ = (function (){var statearr_24830 = f__11298__auto__.call(null);(statearr_24830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_24830;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11297__auto___24988 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___24988,tc,fc){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___24988,tc,fc){
return (function (state_24963){var state_val_24964 = (state_24963[(1)]);if((state_val_24964 === (7)))
{var inst_24959 = (state_24963[(2)]);var state_24963__$1 = state_24963;var statearr_24965_24989 = state_24963__$1;(statearr_24965_24989[(2)] = inst_24959);
(statearr_24965_24989[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (1)))
{var state_24963__$1 = state_24963;var statearr_24966_24990 = state_24963__$1;(statearr_24966_24990[(2)] = null);
(statearr_24966_24990[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (4)))
{var inst_24940 = (state_24963[(7)]);var inst_24940__$1 = (state_24963[(2)]);var inst_24941 = (inst_24940__$1 == null);var state_24963__$1 = (function (){var statearr_24967 = state_24963;(statearr_24967[(7)] = inst_24940__$1);
return statearr_24967;
})();if(cljs.core.truth_(inst_24941))
{var statearr_24968_24991 = state_24963__$1;(statearr_24968_24991[(1)] = (5));
} else
{var statearr_24969_24992 = state_24963__$1;(statearr_24969_24992[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (13)))
{var state_24963__$1 = state_24963;var statearr_24970_24993 = state_24963__$1;(statearr_24970_24993[(2)] = null);
(statearr_24970_24993[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (6)))
{var inst_24940 = (state_24963[(7)]);var inst_24946 = p.call(null,inst_24940);var state_24963__$1 = state_24963;if(cljs.core.truth_(inst_24946))
{var statearr_24971_24994 = state_24963__$1;(statearr_24971_24994[(1)] = (9));
} else
{var statearr_24972_24995 = state_24963__$1;(statearr_24972_24995[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (3)))
{var inst_24961 = (state_24963[(2)]);var state_24963__$1 = state_24963;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24963__$1,inst_24961);
} else
{if((state_val_24964 === (12)))
{var state_24963__$1 = state_24963;var statearr_24973_24996 = state_24963__$1;(statearr_24973_24996[(2)] = null);
(statearr_24973_24996[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (2)))
{var state_24963__$1 = state_24963;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24963__$1,(4),ch);
} else
{if((state_val_24964 === (11)))
{var inst_24940 = (state_24963[(7)]);var inst_24950 = (state_24963[(2)]);var state_24963__$1 = state_24963;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24963__$1,(8),inst_24950,inst_24940);
} else
{if((state_val_24964 === (9)))
{var state_24963__$1 = state_24963;var statearr_24974_24997 = state_24963__$1;(statearr_24974_24997[(2)] = tc);
(statearr_24974_24997[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (5)))
{var inst_24943 = cljs.core.async.close_BANG_.call(null,tc);var inst_24944 = cljs.core.async.close_BANG_.call(null,fc);var state_24963__$1 = (function (){var statearr_24975 = state_24963;(statearr_24975[(8)] = inst_24943);
return statearr_24975;
})();var statearr_24976_24998 = state_24963__$1;(statearr_24976_24998[(2)] = inst_24944);
(statearr_24976_24998[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (14)))
{var inst_24957 = (state_24963[(2)]);var state_24963__$1 = state_24963;var statearr_24977_24999 = state_24963__$1;(statearr_24977_24999[(2)] = inst_24957);
(statearr_24977_24999[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (10)))
{var state_24963__$1 = state_24963;var statearr_24978_25000 = state_24963__$1;(statearr_24978_25000[(2)] = fc);
(statearr_24978_25000[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (8)))
{var inst_24952 = (state_24963[(2)]);var state_24963__$1 = state_24963;if(cljs.core.truth_(inst_24952))
{var statearr_24979_25001 = state_24963__$1;(statearr_24979_25001[(1)] = (12));
} else
{var statearr_24980_25002 = state_24963__$1;(statearr_24980_25002[(1)] = (13));
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
});})(c__11297__auto___24988,tc,fc))
;return ((function (switch__11241__auto__,c__11297__auto___24988,tc,fc){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24984 = [null,null,null,null,null,null,null,null,null];(statearr_24984[(0)] = state_machine__11242__auto__);
(statearr_24984[(1)] = (1));
return statearr_24984;
});
var state_machine__11242__auto____1 = (function (state_24963){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24963);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24985){if((e24985 instanceof Object))
{var ex__11245__auto__ = e24985;var statearr_24986_25003 = state_24963;(statearr_24986_25003[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24963);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24985;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25004 = state_24963;
state_24963 = G__25004;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24963){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___24988,tc,fc))
})();var state__11299__auto__ = (function (){var statearr_24987 = f__11298__auto__.call(null);(statearr_24987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24988);
return statearr_24987;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___24988,tc,fc))
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
return (function (state_25051){var state_val_25052 = (state_25051[(1)]);if((state_val_25052 === (7)))
{var inst_25047 = (state_25051[(2)]);var state_25051__$1 = state_25051;var statearr_25053_25069 = state_25051__$1;(statearr_25053_25069[(2)] = inst_25047);
(statearr_25053_25069[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25052 === (6)))
{var inst_25037 = (state_25051[(7)]);var inst_25040 = (state_25051[(8)]);var inst_25044 = f.call(null,inst_25037,inst_25040);var inst_25037__$1 = inst_25044;var state_25051__$1 = (function (){var statearr_25054 = state_25051;(statearr_25054[(7)] = inst_25037__$1);
return statearr_25054;
})();var statearr_25055_25070 = state_25051__$1;(statearr_25055_25070[(2)] = null);
(statearr_25055_25070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25052 === (5)))
{var inst_25037 = (state_25051[(7)]);var state_25051__$1 = state_25051;var statearr_25056_25071 = state_25051__$1;(statearr_25056_25071[(2)] = inst_25037);
(statearr_25056_25071[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25052 === (4)))
{var inst_25040 = (state_25051[(8)]);var inst_25040__$1 = (state_25051[(2)]);var inst_25041 = (inst_25040__$1 == null);var state_25051__$1 = (function (){var statearr_25057 = state_25051;(statearr_25057[(8)] = inst_25040__$1);
return statearr_25057;
})();if(cljs.core.truth_(inst_25041))
{var statearr_25058_25072 = state_25051__$1;(statearr_25058_25072[(1)] = (5));
} else
{var statearr_25059_25073 = state_25051__$1;(statearr_25059_25073[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25052 === (3)))
{var inst_25049 = (state_25051[(2)]);var state_25051__$1 = state_25051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25051__$1,inst_25049);
} else
{if((state_val_25052 === (2)))
{var state_25051__$1 = state_25051;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25051__$1,(4),ch);
} else
{if((state_val_25052 === (1)))
{var inst_25037 = init;var state_25051__$1 = (function (){var statearr_25060 = state_25051;(statearr_25060[(7)] = inst_25037);
return statearr_25060;
})();var statearr_25061_25074 = state_25051__$1;(statearr_25061_25074[(2)] = null);
(statearr_25061_25074[(1)] = (2));
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
var state_machine__11242__auto____0 = (function (){var statearr_25065 = [null,null,null,null,null,null,null,null,null];(statearr_25065[(0)] = state_machine__11242__auto__);
(statearr_25065[(1)] = (1));
return statearr_25065;
});
var state_machine__11242__auto____1 = (function (state_25051){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_25051);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e25066){if((e25066 instanceof Object))
{var ex__11245__auto__ = e25066;var statearr_25067_25075 = state_25051;(statearr_25067_25075[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25051);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25066;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25076 = state_25051;
state_25051 = G__25076;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_25051){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_25051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_25068 = f__11298__auto__.call(null);(statearr_25068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_25068;
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
return (function (state_25150){var state_val_25151 = (state_25150[(1)]);if((state_val_25151 === (7)))
{var inst_25132 = (state_25150[(2)]);var state_25150__$1 = state_25150;var statearr_25152_25175 = state_25150__$1;(statearr_25152_25175[(2)] = inst_25132);
(statearr_25152_25175[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25151 === (1)))
{var inst_25126 = cljs.core.seq.call(null,coll);var inst_25127 = inst_25126;var state_25150__$1 = (function (){var statearr_25153 = state_25150;(statearr_25153[(7)] = inst_25127);
return statearr_25153;
})();var statearr_25154_25176 = state_25150__$1;(statearr_25154_25176[(2)] = null);
(statearr_25154_25176[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25151 === (4)))
{var inst_25127 = (state_25150[(7)]);var inst_25130 = cljs.core.first.call(null,inst_25127);var state_25150__$1 = state_25150;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25150__$1,(7),ch,inst_25130);
} else
{if((state_val_25151 === (13)))
{var inst_25144 = (state_25150[(2)]);var state_25150__$1 = state_25150;var statearr_25155_25177 = state_25150__$1;(statearr_25155_25177[(2)] = inst_25144);
(statearr_25155_25177[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25151 === (6)))
{var inst_25135 = (state_25150[(2)]);var state_25150__$1 = state_25150;if(cljs.core.truth_(inst_25135))
{var statearr_25156_25178 = state_25150__$1;(statearr_25156_25178[(1)] = (8));
} else
{var statearr_25157_25179 = state_25150__$1;(statearr_25157_25179[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25151 === (3)))
{var inst_25148 = (state_25150[(2)]);var state_25150__$1 = state_25150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25150__$1,inst_25148);
} else
{if((state_val_25151 === (12)))
{var state_25150__$1 = state_25150;var statearr_25158_25180 = state_25150__$1;(statearr_25158_25180[(2)] = null);
(statearr_25158_25180[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25151 === (2)))
{var inst_25127 = (state_25150[(7)]);var state_25150__$1 = state_25150;if(cljs.core.truth_(inst_25127))
{var statearr_25159_25181 = state_25150__$1;(statearr_25159_25181[(1)] = (4));
} else
{var statearr_25160_25182 = state_25150__$1;(statearr_25160_25182[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25151 === (11)))
{var inst_25141 = cljs.core.async.close_BANG_.call(null,ch);var state_25150__$1 = state_25150;var statearr_25161_25183 = state_25150__$1;(statearr_25161_25183[(2)] = inst_25141);
(statearr_25161_25183[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25151 === (9)))
{var state_25150__$1 = state_25150;if(cljs.core.truth_(close_QMARK_))
{var statearr_25162_25184 = state_25150__$1;(statearr_25162_25184[(1)] = (11));
} else
{var statearr_25163_25185 = state_25150__$1;(statearr_25163_25185[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25151 === (5)))
{var inst_25127 = (state_25150[(7)]);var state_25150__$1 = state_25150;var statearr_25164_25186 = state_25150__$1;(statearr_25164_25186[(2)] = inst_25127);
(statearr_25164_25186[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25151 === (10)))
{var inst_25146 = (state_25150[(2)]);var state_25150__$1 = state_25150;var statearr_25165_25187 = state_25150__$1;(statearr_25165_25187[(2)] = inst_25146);
(statearr_25165_25187[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25151 === (8)))
{var inst_25127 = (state_25150[(7)]);var inst_25137 = cljs.core.next.call(null,inst_25127);var inst_25127__$1 = inst_25137;var state_25150__$1 = (function (){var statearr_25166 = state_25150;(statearr_25166[(7)] = inst_25127__$1);
return statearr_25166;
})();var statearr_25167_25188 = state_25150__$1;(statearr_25167_25188[(2)] = null);
(statearr_25167_25188[(1)] = (2));
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
var state_machine__11242__auto____0 = (function (){var statearr_25171 = [null,null,null,null,null,null,null,null];(statearr_25171[(0)] = state_machine__11242__auto__);
(statearr_25171[(1)] = (1));
return statearr_25171;
});
var state_machine__11242__auto____1 = (function (state_25150){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_25150);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e25172){if((e25172 instanceof Object))
{var ex__11245__auto__ = e25172;var statearr_25173_25189 = state_25150;(statearr_25173_25189[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25150);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25172;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25190 = state_25150;
state_25150 = G__25190;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_25150){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_25150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_25174 = f__11298__auto__.call(null);(statearr_25174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_25174;
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
cljs.core.async.Mux = (function (){var obj25192 = {};return obj25192;
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
cljs.core.async.Mult = (function (){var obj25194 = {};return obj25194;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25416 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25416 = (function (cs,ch,mult,meta25417){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25417 = meta25417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25416.cljs$lang$type = true;
cljs.core.async.t25416.cljs$lang$ctorStr = "cljs.core.async/t25416";
cljs.core.async.t25416.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25416");
});})(cs))
;
cljs.core.async.t25416.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25416.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25416.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25416.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25416.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25416.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25416.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25418){var self__ = this;
var _25418__$1 = this;return self__.meta25417;
});})(cs))
;
cljs.core.async.t25416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25418,meta25417__$1){var self__ = this;
var _25418__$1 = this;return (new cljs.core.async.t25416(self__.cs,self__.ch,self__.mult,meta25417__$1));
});})(cs))
;
cljs.core.async.__GT_t25416 = ((function (cs){
return (function __GT_t25416(cs__$1,ch__$1,mult__$1,meta25417){return (new cljs.core.async.t25416(cs__$1,ch__$1,mult__$1,meta25417));
});})(cs))
;
}
return (new cljs.core.async.t25416(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11297__auto___25637 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___25637,cs,m,dchan,dctr,done){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___25637,cs,m,dchan,dctr,done){
return (function (state_25549){var state_val_25550 = (state_25549[(1)]);if((state_val_25550 === (7)))
{var inst_25545 = (state_25549[(2)]);var state_25549__$1 = state_25549;var statearr_25551_25638 = state_25549__$1;(statearr_25551_25638[(2)] = inst_25545);
(statearr_25551_25638[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (20)))
{var inst_25450 = (state_25549[(7)]);var inst_25460 = cljs.core.first.call(null,inst_25450);var inst_25461 = cljs.core.nth.call(null,inst_25460,(0),null);var inst_25462 = cljs.core.nth.call(null,inst_25460,(1),null);var state_25549__$1 = (function (){var statearr_25552 = state_25549;(statearr_25552[(8)] = inst_25461);
return statearr_25552;
})();if(cljs.core.truth_(inst_25462))
{var statearr_25553_25639 = state_25549__$1;(statearr_25553_25639[(1)] = (22));
} else
{var statearr_25554_25640 = state_25549__$1;(statearr_25554_25640[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (27)))
{var inst_25421 = (state_25549[(9)]);var inst_25490 = (state_25549[(10)]);var inst_25492 = (state_25549[(11)]);var inst_25497 = (state_25549[(12)]);var inst_25497__$1 = cljs.core._nth.call(null,inst_25490,inst_25492);var inst_25498 = cljs.core.async.put_BANG_.call(null,inst_25497__$1,inst_25421,done);var state_25549__$1 = (function (){var statearr_25555 = state_25549;(statearr_25555[(12)] = inst_25497__$1);
return statearr_25555;
})();if(cljs.core.truth_(inst_25498))
{var statearr_25556_25641 = state_25549__$1;(statearr_25556_25641[(1)] = (30));
} else
{var statearr_25557_25642 = state_25549__$1;(statearr_25557_25642[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (1)))
{var state_25549__$1 = state_25549;var statearr_25558_25643 = state_25549__$1;(statearr_25558_25643[(2)] = null);
(statearr_25558_25643[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (24)))
{var inst_25450 = (state_25549[(7)]);var inst_25467 = (state_25549[(2)]);var inst_25468 = cljs.core.next.call(null,inst_25450);var inst_25430 = inst_25468;var inst_25431 = null;var inst_25432 = (0);var inst_25433 = (0);var state_25549__$1 = (function (){var statearr_25559 = state_25549;(statearr_25559[(13)] = inst_25433);
(statearr_25559[(14)] = inst_25432);
(statearr_25559[(15)] = inst_25431);
(statearr_25559[(16)] = inst_25430);
(statearr_25559[(17)] = inst_25467);
return statearr_25559;
})();var statearr_25560_25644 = state_25549__$1;(statearr_25560_25644[(2)] = null);
(statearr_25560_25644[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (39)))
{var state_25549__$1 = state_25549;var statearr_25564_25645 = state_25549__$1;(statearr_25564_25645[(2)] = null);
(statearr_25564_25645[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (4)))
{var inst_25421 = (state_25549[(9)]);var inst_25421__$1 = (state_25549[(2)]);var inst_25422 = (inst_25421__$1 == null);var state_25549__$1 = (function (){var statearr_25565 = state_25549;(statearr_25565[(9)] = inst_25421__$1);
return statearr_25565;
})();if(cljs.core.truth_(inst_25422))
{var statearr_25566_25646 = state_25549__$1;(statearr_25566_25646[(1)] = (5));
} else
{var statearr_25567_25647 = state_25549__$1;(statearr_25567_25647[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (15)))
{var inst_25433 = (state_25549[(13)]);var inst_25432 = (state_25549[(14)]);var inst_25431 = (state_25549[(15)]);var inst_25430 = (state_25549[(16)]);var inst_25446 = (state_25549[(2)]);var inst_25447 = (inst_25433 + (1));var tmp25561 = inst_25432;var tmp25562 = inst_25431;var tmp25563 = inst_25430;var inst_25430__$1 = tmp25563;var inst_25431__$1 = tmp25562;var inst_25432__$1 = tmp25561;var inst_25433__$1 = inst_25447;var state_25549__$1 = (function (){var statearr_25568 = state_25549;(statearr_25568[(13)] = inst_25433__$1);
(statearr_25568[(14)] = inst_25432__$1);
(statearr_25568[(18)] = inst_25446);
(statearr_25568[(15)] = inst_25431__$1);
(statearr_25568[(16)] = inst_25430__$1);
return statearr_25568;
})();var statearr_25569_25648 = state_25549__$1;(statearr_25569_25648[(2)] = null);
(statearr_25569_25648[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (21)))
{var inst_25471 = (state_25549[(2)]);var state_25549__$1 = state_25549;var statearr_25573_25649 = state_25549__$1;(statearr_25573_25649[(2)] = inst_25471);
(statearr_25573_25649[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (31)))
{var inst_25497 = (state_25549[(12)]);var inst_25501 = done.call(null,null);var inst_25502 = cljs.core.async.untap_STAR_.call(null,m,inst_25497);var state_25549__$1 = (function (){var statearr_25574 = state_25549;(statearr_25574[(19)] = inst_25501);
return statearr_25574;
})();var statearr_25575_25650 = state_25549__$1;(statearr_25575_25650[(2)] = inst_25502);
(statearr_25575_25650[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (32)))
{var inst_25491 = (state_25549[(20)]);var inst_25490 = (state_25549[(10)]);var inst_25489 = (state_25549[(21)]);var inst_25492 = (state_25549[(11)]);var inst_25504 = (state_25549[(2)]);var inst_25505 = (inst_25492 + (1));var tmp25570 = inst_25491;var tmp25571 = inst_25490;var tmp25572 = inst_25489;var inst_25489__$1 = tmp25572;var inst_25490__$1 = tmp25571;var inst_25491__$1 = tmp25570;var inst_25492__$1 = inst_25505;var state_25549__$1 = (function (){var statearr_25576 = state_25549;(statearr_25576[(20)] = inst_25491__$1);
(statearr_25576[(10)] = inst_25490__$1);
(statearr_25576[(21)] = inst_25489__$1);
(statearr_25576[(11)] = inst_25492__$1);
(statearr_25576[(22)] = inst_25504);
return statearr_25576;
})();var statearr_25577_25651 = state_25549__$1;(statearr_25577_25651[(2)] = null);
(statearr_25577_25651[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (40)))
{var inst_25517 = (state_25549[(23)]);var inst_25521 = done.call(null,null);var inst_25522 = cljs.core.async.untap_STAR_.call(null,m,inst_25517);var state_25549__$1 = (function (){var statearr_25578 = state_25549;(statearr_25578[(24)] = inst_25521);
return statearr_25578;
})();var statearr_25579_25652 = state_25549__$1;(statearr_25579_25652[(2)] = inst_25522);
(statearr_25579_25652[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (33)))
{var inst_25508 = (state_25549[(25)]);var inst_25510 = cljs.core.chunked_seq_QMARK_.call(null,inst_25508);var state_25549__$1 = state_25549;if(inst_25510)
{var statearr_25580_25653 = state_25549__$1;(statearr_25580_25653[(1)] = (36));
} else
{var statearr_25581_25654 = state_25549__$1;(statearr_25581_25654[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (13)))
{var inst_25440 = (state_25549[(26)]);var inst_25443 = cljs.core.async.close_BANG_.call(null,inst_25440);var state_25549__$1 = state_25549;var statearr_25582_25655 = state_25549__$1;(statearr_25582_25655[(2)] = inst_25443);
(statearr_25582_25655[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (22)))
{var inst_25461 = (state_25549[(8)]);var inst_25464 = cljs.core.async.close_BANG_.call(null,inst_25461);var state_25549__$1 = state_25549;var statearr_25583_25656 = state_25549__$1;(statearr_25583_25656[(2)] = inst_25464);
(statearr_25583_25656[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (36)))
{var inst_25508 = (state_25549[(25)]);var inst_25512 = cljs.core.chunk_first.call(null,inst_25508);var inst_25513 = cljs.core.chunk_rest.call(null,inst_25508);var inst_25514 = cljs.core.count.call(null,inst_25512);var inst_25489 = inst_25513;var inst_25490 = inst_25512;var inst_25491 = inst_25514;var inst_25492 = (0);var state_25549__$1 = (function (){var statearr_25584 = state_25549;(statearr_25584[(20)] = inst_25491);
(statearr_25584[(10)] = inst_25490);
(statearr_25584[(21)] = inst_25489);
(statearr_25584[(11)] = inst_25492);
return statearr_25584;
})();var statearr_25585_25657 = state_25549__$1;(statearr_25585_25657[(2)] = null);
(statearr_25585_25657[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (41)))
{var inst_25508 = (state_25549[(25)]);var inst_25524 = (state_25549[(2)]);var inst_25525 = cljs.core.next.call(null,inst_25508);var inst_25489 = inst_25525;var inst_25490 = null;var inst_25491 = (0);var inst_25492 = (0);var state_25549__$1 = (function (){var statearr_25586 = state_25549;(statearr_25586[(20)] = inst_25491);
(statearr_25586[(10)] = inst_25490);
(statearr_25586[(27)] = inst_25524);
(statearr_25586[(21)] = inst_25489);
(statearr_25586[(11)] = inst_25492);
return statearr_25586;
})();var statearr_25587_25658 = state_25549__$1;(statearr_25587_25658[(2)] = null);
(statearr_25587_25658[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (43)))
{var state_25549__$1 = state_25549;var statearr_25588_25659 = state_25549__$1;(statearr_25588_25659[(2)] = null);
(statearr_25588_25659[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (29)))
{var inst_25533 = (state_25549[(2)]);var state_25549__$1 = state_25549;var statearr_25589_25660 = state_25549__$1;(statearr_25589_25660[(2)] = inst_25533);
(statearr_25589_25660[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (44)))
{var inst_25542 = (state_25549[(2)]);var state_25549__$1 = (function (){var statearr_25590 = state_25549;(statearr_25590[(28)] = inst_25542);
return statearr_25590;
})();var statearr_25591_25661 = state_25549__$1;(statearr_25591_25661[(2)] = null);
(statearr_25591_25661[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (6)))
{var inst_25481 = (state_25549[(29)]);var inst_25480 = cljs.core.deref.call(null,cs);var inst_25481__$1 = cljs.core.keys.call(null,inst_25480);var inst_25482 = cljs.core.count.call(null,inst_25481__$1);var inst_25483 = cljs.core.reset_BANG_.call(null,dctr,inst_25482);var inst_25488 = cljs.core.seq.call(null,inst_25481__$1);var inst_25489 = inst_25488;var inst_25490 = null;var inst_25491 = (0);var inst_25492 = (0);var state_25549__$1 = (function (){var statearr_25592 = state_25549;(statearr_25592[(20)] = inst_25491);
(statearr_25592[(10)] = inst_25490);
(statearr_25592[(30)] = inst_25483);
(statearr_25592[(21)] = inst_25489);
(statearr_25592[(11)] = inst_25492);
(statearr_25592[(29)] = inst_25481__$1);
return statearr_25592;
})();var statearr_25593_25662 = state_25549__$1;(statearr_25593_25662[(2)] = null);
(statearr_25593_25662[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (28)))
{var inst_25508 = (state_25549[(25)]);var inst_25489 = (state_25549[(21)]);var inst_25508__$1 = cljs.core.seq.call(null,inst_25489);var state_25549__$1 = (function (){var statearr_25594 = state_25549;(statearr_25594[(25)] = inst_25508__$1);
return statearr_25594;
})();if(inst_25508__$1)
{var statearr_25595_25663 = state_25549__$1;(statearr_25595_25663[(1)] = (33));
} else
{var statearr_25596_25664 = state_25549__$1;(statearr_25596_25664[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (25)))
{var inst_25491 = (state_25549[(20)]);var inst_25492 = (state_25549[(11)]);var inst_25494 = (inst_25492 < inst_25491);var inst_25495 = inst_25494;var state_25549__$1 = state_25549;if(cljs.core.truth_(inst_25495))
{var statearr_25597_25665 = state_25549__$1;(statearr_25597_25665[(1)] = (27));
} else
{var statearr_25598_25666 = state_25549__$1;(statearr_25598_25666[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (34)))
{var state_25549__$1 = state_25549;var statearr_25599_25667 = state_25549__$1;(statearr_25599_25667[(2)] = null);
(statearr_25599_25667[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (17)))
{var state_25549__$1 = state_25549;var statearr_25600_25668 = state_25549__$1;(statearr_25600_25668[(2)] = null);
(statearr_25600_25668[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (3)))
{var inst_25547 = (state_25549[(2)]);var state_25549__$1 = state_25549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25549__$1,inst_25547);
} else
{if((state_val_25550 === (12)))
{var inst_25476 = (state_25549[(2)]);var state_25549__$1 = state_25549;var statearr_25601_25669 = state_25549__$1;(statearr_25601_25669[(2)] = inst_25476);
(statearr_25601_25669[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (2)))
{var state_25549__$1 = state_25549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25549__$1,(4),ch);
} else
{if((state_val_25550 === (23)))
{var state_25549__$1 = state_25549;var statearr_25602_25670 = state_25549__$1;(statearr_25602_25670[(2)] = null);
(statearr_25602_25670[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (35)))
{var inst_25531 = (state_25549[(2)]);var state_25549__$1 = state_25549;var statearr_25603_25671 = state_25549__$1;(statearr_25603_25671[(2)] = inst_25531);
(statearr_25603_25671[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (19)))
{var inst_25450 = (state_25549[(7)]);var inst_25454 = cljs.core.chunk_first.call(null,inst_25450);var inst_25455 = cljs.core.chunk_rest.call(null,inst_25450);var inst_25456 = cljs.core.count.call(null,inst_25454);var inst_25430 = inst_25455;var inst_25431 = inst_25454;var inst_25432 = inst_25456;var inst_25433 = (0);var state_25549__$1 = (function (){var statearr_25604 = state_25549;(statearr_25604[(13)] = inst_25433);
(statearr_25604[(14)] = inst_25432);
(statearr_25604[(15)] = inst_25431);
(statearr_25604[(16)] = inst_25430);
return statearr_25604;
})();var statearr_25605_25672 = state_25549__$1;(statearr_25605_25672[(2)] = null);
(statearr_25605_25672[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (11)))
{var inst_25450 = (state_25549[(7)]);var inst_25430 = (state_25549[(16)]);var inst_25450__$1 = cljs.core.seq.call(null,inst_25430);var state_25549__$1 = (function (){var statearr_25606 = state_25549;(statearr_25606[(7)] = inst_25450__$1);
return statearr_25606;
})();if(inst_25450__$1)
{var statearr_25607_25673 = state_25549__$1;(statearr_25607_25673[(1)] = (16));
} else
{var statearr_25608_25674 = state_25549__$1;(statearr_25608_25674[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (9)))
{var inst_25478 = (state_25549[(2)]);var state_25549__$1 = state_25549;var statearr_25609_25675 = state_25549__$1;(statearr_25609_25675[(2)] = inst_25478);
(statearr_25609_25675[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (5)))
{var inst_25428 = cljs.core.deref.call(null,cs);var inst_25429 = cljs.core.seq.call(null,inst_25428);var inst_25430 = inst_25429;var inst_25431 = null;var inst_25432 = (0);var inst_25433 = (0);var state_25549__$1 = (function (){var statearr_25610 = state_25549;(statearr_25610[(13)] = inst_25433);
(statearr_25610[(14)] = inst_25432);
(statearr_25610[(15)] = inst_25431);
(statearr_25610[(16)] = inst_25430);
return statearr_25610;
})();var statearr_25611_25676 = state_25549__$1;(statearr_25611_25676[(2)] = null);
(statearr_25611_25676[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (14)))
{var state_25549__$1 = state_25549;var statearr_25612_25677 = state_25549__$1;(statearr_25612_25677[(2)] = null);
(statearr_25612_25677[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (45)))
{var inst_25539 = (state_25549[(2)]);var state_25549__$1 = state_25549;var statearr_25613_25678 = state_25549__$1;(statearr_25613_25678[(2)] = inst_25539);
(statearr_25613_25678[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (26)))
{var inst_25481 = (state_25549[(29)]);var inst_25535 = (state_25549[(2)]);var inst_25536 = cljs.core.seq.call(null,inst_25481);var state_25549__$1 = (function (){var statearr_25614 = state_25549;(statearr_25614[(31)] = inst_25535);
return statearr_25614;
})();if(inst_25536)
{var statearr_25615_25679 = state_25549__$1;(statearr_25615_25679[(1)] = (42));
} else
{var statearr_25616_25680 = state_25549__$1;(statearr_25616_25680[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (16)))
{var inst_25450 = (state_25549[(7)]);var inst_25452 = cljs.core.chunked_seq_QMARK_.call(null,inst_25450);var state_25549__$1 = state_25549;if(inst_25452)
{var statearr_25617_25681 = state_25549__$1;(statearr_25617_25681[(1)] = (19));
} else
{var statearr_25618_25682 = state_25549__$1;(statearr_25618_25682[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (38)))
{var inst_25528 = (state_25549[(2)]);var state_25549__$1 = state_25549;var statearr_25619_25683 = state_25549__$1;(statearr_25619_25683[(2)] = inst_25528);
(statearr_25619_25683[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (30)))
{var state_25549__$1 = state_25549;var statearr_25620_25684 = state_25549__$1;(statearr_25620_25684[(2)] = null);
(statearr_25620_25684[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (10)))
{var inst_25433 = (state_25549[(13)]);var inst_25431 = (state_25549[(15)]);var inst_25439 = cljs.core._nth.call(null,inst_25431,inst_25433);var inst_25440 = cljs.core.nth.call(null,inst_25439,(0),null);var inst_25441 = cljs.core.nth.call(null,inst_25439,(1),null);var state_25549__$1 = (function (){var statearr_25621 = state_25549;(statearr_25621[(26)] = inst_25440);
return statearr_25621;
})();if(cljs.core.truth_(inst_25441))
{var statearr_25622_25685 = state_25549__$1;(statearr_25622_25685[(1)] = (13));
} else
{var statearr_25623_25686 = state_25549__$1;(statearr_25623_25686[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (18)))
{var inst_25474 = (state_25549[(2)]);var state_25549__$1 = state_25549;var statearr_25624_25687 = state_25549__$1;(statearr_25624_25687[(2)] = inst_25474);
(statearr_25624_25687[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (42)))
{var state_25549__$1 = state_25549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25549__$1,(45),dchan);
} else
{if((state_val_25550 === (37)))
{var inst_25421 = (state_25549[(9)]);var inst_25508 = (state_25549[(25)]);var inst_25517 = (state_25549[(23)]);var inst_25517__$1 = cljs.core.first.call(null,inst_25508);var inst_25518 = cljs.core.async.put_BANG_.call(null,inst_25517__$1,inst_25421,done);var state_25549__$1 = (function (){var statearr_25625 = state_25549;(statearr_25625[(23)] = inst_25517__$1);
return statearr_25625;
})();if(cljs.core.truth_(inst_25518))
{var statearr_25626_25688 = state_25549__$1;(statearr_25626_25688[(1)] = (39));
} else
{var statearr_25627_25689 = state_25549__$1;(statearr_25627_25689[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25550 === (8)))
{var inst_25433 = (state_25549[(13)]);var inst_25432 = (state_25549[(14)]);var inst_25435 = (inst_25433 < inst_25432);var inst_25436 = inst_25435;var state_25549__$1 = state_25549;if(cljs.core.truth_(inst_25436))
{var statearr_25628_25690 = state_25549__$1;(statearr_25628_25690[(1)] = (10));
} else
{var statearr_25629_25691 = state_25549__$1;(statearr_25629_25691[(1)] = (11));
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
});})(c__11297__auto___25637,cs,m,dchan,dctr,done))
;return ((function (switch__11241__auto__,c__11297__auto___25637,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_25633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25633[(0)] = state_machine__11242__auto__);
(statearr_25633[(1)] = (1));
return statearr_25633;
});
var state_machine__11242__auto____1 = (function (state_25549){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_25549);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e25634){if((e25634 instanceof Object))
{var ex__11245__auto__ = e25634;var statearr_25635_25692 = state_25549;(statearr_25635_25692[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25549);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25634;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25693 = state_25549;
state_25549 = G__25693;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_25549){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_25549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___25637,cs,m,dchan,dctr,done))
})();var state__11299__auto__ = (function (){var statearr_25636 = f__11298__auto__.call(null);(statearr_25636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___25637);
return statearr_25636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___25637,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25695 = {};return obj25695;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25696){var map__25701 = p__25696;var map__25701__$1 = ((cljs.core.seq_QMARK_.call(null,map__25701))?cljs.core.apply.call(null,cljs.core.hash_map,map__25701):map__25701);var opts = map__25701__$1;var statearr_25702_25705 = state;(statearr_25702_25705[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__25701,map__25701__$1,opts){
return (function (val){var statearr_25703_25706 = state;(statearr_25703_25706[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25701,map__25701__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25704_25707 = state;(statearr_25704_25707[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25696 = null;if (arguments.length > 3) {
  p__25696 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25696);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25708){
var state = cljs.core.first(arglist__25708);
arglist__25708 = cljs.core.next(arglist__25708);
var cont_block = cljs.core.first(arglist__25708);
arglist__25708 = cljs.core.next(arglist__25708);
var ports = cljs.core.first(arglist__25708);
var p__25696 = cljs.core.rest(arglist__25708);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25696);
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
;var m = (function (){if(typeof cljs.core.async.t25828 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25828 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25829){
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
this.meta25829 = meta25829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25828.cljs$lang$type = true;
cljs.core.async.t25828.cljs$lang$ctorStr = "cljs.core.async/t25828";
cljs.core.async.t25828.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25828");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25828.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25828.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25828.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25828.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25828.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25828.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25828.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25830){var self__ = this;
var _25830__$1 = this;return self__.meta25829;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25830,meta25829__$1){var self__ = this;
var _25830__$1 = this;return (new cljs.core.async.t25828(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25829__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25828 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25828(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25829){return (new cljs.core.async.t25828(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25829));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25828(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11297__auto___25947 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___25947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___25947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25900){var state_val_25901 = (state_25900[(1)]);if((state_val_25901 === (7)))
{var inst_25844 = (state_25900[(7)]);var inst_25849 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25844);var state_25900__$1 = state_25900;var statearr_25902_25948 = state_25900__$1;(statearr_25902_25948[(2)] = inst_25849);
(statearr_25902_25948[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (20)))
{var inst_25859 = (state_25900[(8)]);var state_25900__$1 = state_25900;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25900__$1,(23),out,inst_25859);
} else
{if((state_val_25901 === (1)))
{var inst_25834 = (state_25900[(9)]);var inst_25834__$1 = calc_state.call(null);var inst_25835 = cljs.core.seq_QMARK_.call(null,inst_25834__$1);var state_25900__$1 = (function (){var statearr_25903 = state_25900;(statearr_25903[(9)] = inst_25834__$1);
return statearr_25903;
})();if(inst_25835)
{var statearr_25904_25949 = state_25900__$1;(statearr_25904_25949[(1)] = (2));
} else
{var statearr_25905_25950 = state_25900__$1;(statearr_25905_25950[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (24)))
{var inst_25852 = (state_25900[(10)]);var inst_25844 = inst_25852;var state_25900__$1 = (function (){var statearr_25906 = state_25900;(statearr_25906[(7)] = inst_25844);
return statearr_25906;
})();var statearr_25907_25951 = state_25900__$1;(statearr_25907_25951[(2)] = null);
(statearr_25907_25951[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (4)))
{var inst_25834 = (state_25900[(9)]);var inst_25840 = (state_25900[(2)]);var inst_25841 = cljs.core.get.call(null,inst_25840,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25842 = cljs.core.get.call(null,inst_25840,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25843 = cljs.core.get.call(null,inst_25840,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25844 = inst_25834;var state_25900__$1 = (function (){var statearr_25908 = state_25900;(statearr_25908[(11)] = inst_25843);
(statearr_25908[(12)] = inst_25842);
(statearr_25908[(13)] = inst_25841);
(statearr_25908[(7)] = inst_25844);
return statearr_25908;
})();var statearr_25909_25952 = state_25900__$1;(statearr_25909_25952[(2)] = null);
(statearr_25909_25952[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (15)))
{var state_25900__$1 = state_25900;var statearr_25910_25953 = state_25900__$1;(statearr_25910_25953[(2)] = null);
(statearr_25910_25953[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (21)))
{var inst_25852 = (state_25900[(10)]);var inst_25844 = inst_25852;var state_25900__$1 = (function (){var statearr_25911 = state_25900;(statearr_25911[(7)] = inst_25844);
return statearr_25911;
})();var statearr_25912_25954 = state_25900__$1;(statearr_25912_25954[(2)] = null);
(statearr_25912_25954[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (13)))
{var inst_25896 = (state_25900[(2)]);var state_25900__$1 = state_25900;var statearr_25913_25955 = state_25900__$1;(statearr_25913_25955[(2)] = inst_25896);
(statearr_25913_25955[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (22)))
{var inst_25894 = (state_25900[(2)]);var state_25900__$1 = state_25900;var statearr_25914_25956 = state_25900__$1;(statearr_25914_25956[(2)] = inst_25894);
(statearr_25914_25956[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (6)))
{var inst_25898 = (state_25900[(2)]);var state_25900__$1 = state_25900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25900__$1,inst_25898);
} else
{if((state_val_25901 === (25)))
{var state_25900__$1 = state_25900;var statearr_25915_25957 = state_25900__$1;(statearr_25915_25957[(2)] = null);
(statearr_25915_25957[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (17)))
{var inst_25874 = (state_25900[(14)]);var state_25900__$1 = state_25900;var statearr_25916_25958 = state_25900__$1;(statearr_25916_25958[(2)] = inst_25874);
(statearr_25916_25958[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (3)))
{var inst_25834 = (state_25900[(9)]);var state_25900__$1 = state_25900;var statearr_25917_25959 = state_25900__$1;(statearr_25917_25959[(2)] = inst_25834);
(statearr_25917_25959[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (12)))
{var inst_25874 = (state_25900[(14)]);var inst_25855 = (state_25900[(15)]);var inst_25860 = (state_25900[(16)]);var inst_25874__$1 = inst_25855.call(null,inst_25860);var state_25900__$1 = (function (){var statearr_25918 = state_25900;(statearr_25918[(14)] = inst_25874__$1);
return statearr_25918;
})();if(cljs.core.truth_(inst_25874__$1))
{var statearr_25919_25960 = state_25900__$1;(statearr_25919_25960[(1)] = (17));
} else
{var statearr_25920_25961 = state_25900__$1;(statearr_25920_25961[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (2)))
{var inst_25834 = (state_25900[(9)]);var inst_25837 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25834);var state_25900__$1 = state_25900;var statearr_25921_25962 = state_25900__$1;(statearr_25921_25962[(2)] = inst_25837);
(statearr_25921_25962[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (23)))
{var inst_25885 = (state_25900[(2)]);var state_25900__$1 = state_25900;if(cljs.core.truth_(inst_25885))
{var statearr_25922_25963 = state_25900__$1;(statearr_25922_25963[(1)] = (24));
} else
{var statearr_25923_25964 = state_25900__$1;(statearr_25923_25964[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (19)))
{var inst_25882 = (state_25900[(2)]);var state_25900__$1 = state_25900;if(cljs.core.truth_(inst_25882))
{var statearr_25924_25965 = state_25900__$1;(statearr_25924_25965[(1)] = (20));
} else
{var statearr_25925_25966 = state_25900__$1;(statearr_25925_25966[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (11)))
{var inst_25859 = (state_25900[(8)]);var inst_25865 = (inst_25859 == null);var state_25900__$1 = state_25900;if(cljs.core.truth_(inst_25865))
{var statearr_25926_25967 = state_25900__$1;(statearr_25926_25967[(1)] = (14));
} else
{var statearr_25927_25968 = state_25900__$1;(statearr_25927_25968[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (9)))
{var inst_25852 = (state_25900[(10)]);var inst_25852__$1 = (state_25900[(2)]);var inst_25853 = cljs.core.get.call(null,inst_25852__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25854 = cljs.core.get.call(null,inst_25852__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25855 = cljs.core.get.call(null,inst_25852__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25900__$1 = (function (){var statearr_25928 = state_25900;(statearr_25928[(15)] = inst_25855);
(statearr_25928[(10)] = inst_25852__$1);
(statearr_25928[(17)] = inst_25854);
return statearr_25928;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25900__$1,(10),inst_25853);
} else
{if((state_val_25901 === (5)))
{var inst_25844 = (state_25900[(7)]);var inst_25847 = cljs.core.seq_QMARK_.call(null,inst_25844);var state_25900__$1 = state_25900;if(inst_25847)
{var statearr_25929_25969 = state_25900__$1;(statearr_25929_25969[(1)] = (7));
} else
{var statearr_25930_25970 = state_25900__$1;(statearr_25930_25970[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (14)))
{var inst_25860 = (state_25900[(16)]);var inst_25867 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25860);var state_25900__$1 = state_25900;var statearr_25931_25971 = state_25900__$1;(statearr_25931_25971[(2)] = inst_25867);
(statearr_25931_25971[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (26)))
{var inst_25890 = (state_25900[(2)]);var state_25900__$1 = state_25900;var statearr_25932_25972 = state_25900__$1;(statearr_25932_25972[(2)] = inst_25890);
(statearr_25932_25972[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (16)))
{var inst_25870 = (state_25900[(2)]);var inst_25871 = calc_state.call(null);var inst_25844 = inst_25871;var state_25900__$1 = (function (){var statearr_25933 = state_25900;(statearr_25933[(7)] = inst_25844);
(statearr_25933[(18)] = inst_25870);
return statearr_25933;
})();var statearr_25934_25973 = state_25900__$1;(statearr_25934_25973[(2)] = null);
(statearr_25934_25973[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (10)))
{var inst_25859 = (state_25900[(8)]);var inst_25860 = (state_25900[(16)]);var inst_25858 = (state_25900[(2)]);var inst_25859__$1 = cljs.core.nth.call(null,inst_25858,(0),null);var inst_25860__$1 = cljs.core.nth.call(null,inst_25858,(1),null);var inst_25861 = (inst_25859__$1 == null);var inst_25862 = cljs.core._EQ_.call(null,inst_25860__$1,change);var inst_25863 = (inst_25861) || (inst_25862);var state_25900__$1 = (function (){var statearr_25935 = state_25900;(statearr_25935[(8)] = inst_25859__$1);
(statearr_25935[(16)] = inst_25860__$1);
return statearr_25935;
})();if(cljs.core.truth_(inst_25863))
{var statearr_25936_25974 = state_25900__$1;(statearr_25936_25974[(1)] = (11));
} else
{var statearr_25937_25975 = state_25900__$1;(statearr_25937_25975[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (18)))
{var inst_25855 = (state_25900[(15)]);var inst_25860 = (state_25900[(16)]);var inst_25854 = (state_25900[(17)]);var inst_25877 = cljs.core.empty_QMARK_.call(null,inst_25855);var inst_25878 = inst_25854.call(null,inst_25860);var inst_25879 = cljs.core.not.call(null,inst_25878);var inst_25880 = (inst_25877) && (inst_25879);var state_25900__$1 = state_25900;var statearr_25938_25976 = state_25900__$1;(statearr_25938_25976[(2)] = inst_25880);
(statearr_25938_25976[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (8)))
{var inst_25844 = (state_25900[(7)]);var state_25900__$1 = state_25900;var statearr_25939_25977 = state_25900__$1;(statearr_25939_25977[(2)] = inst_25844);
(statearr_25939_25977[(1)] = (9));
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
});})(c__11297__auto___25947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11241__auto__,c__11297__auto___25947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_25943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25943[(0)] = state_machine__11242__auto__);
(statearr_25943[(1)] = (1));
return statearr_25943;
});
var state_machine__11242__auto____1 = (function (state_25900){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_25900);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e25944){if((e25944 instanceof Object))
{var ex__11245__auto__ = e25944;var statearr_25945_25978 = state_25900;(statearr_25945_25978[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25900);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25944;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25979 = state_25900;
state_25900 = G__25979;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_25900){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_25900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___25947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11299__auto__ = (function (){var statearr_25946 = f__11298__auto__.call(null);(statearr_25946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___25947);
return statearr_25946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___25947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25981 = {};return obj25981;
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
return (function (p1__25982_SHARP_){if(cljs.core.truth_(p1__25982_SHARP_.call(null,topic)))
{return p1__25982_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25982_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26105 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26105 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26106){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26106 = meta26106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26105.cljs$lang$type = true;
cljs.core.async.t26105.cljs$lang$ctorStr = "cljs.core.async/t26105";
cljs.core.async.t26105.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26105");
});})(mults,ensure_mult))
;
cljs.core.async.t26105.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26105.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26105.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26105.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26105.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26105.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26107){var self__ = this;
var _26107__$1 = this;return self__.meta26106;
});})(mults,ensure_mult))
;
cljs.core.async.t26105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26107,meta26106__$1){var self__ = this;
var _26107__$1 = this;return (new cljs.core.async.t26105(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26106__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26105 = ((function (mults,ensure_mult){
return (function __GT_t26105(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26106){return (new cljs.core.async.t26105(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26106));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26105(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11297__auto___26227 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___26227,mults,ensure_mult,p){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___26227,mults,ensure_mult,p){
return (function (state_26179){var state_val_26180 = (state_26179[(1)]);if((state_val_26180 === (7)))
{var inst_26175 = (state_26179[(2)]);var state_26179__$1 = state_26179;var statearr_26181_26228 = state_26179__$1;(statearr_26181_26228[(2)] = inst_26175);
(statearr_26181_26228[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (20)))
{var state_26179__$1 = state_26179;var statearr_26182_26229 = state_26179__$1;(statearr_26182_26229[(2)] = null);
(statearr_26182_26229[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (1)))
{var state_26179__$1 = state_26179;var statearr_26183_26230 = state_26179__$1;(statearr_26183_26230[(2)] = null);
(statearr_26183_26230[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (24)))
{var inst_26158 = (state_26179[(7)]);var inst_26167 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26158);var state_26179__$1 = state_26179;var statearr_26184_26231 = state_26179__$1;(statearr_26184_26231[(2)] = inst_26167);
(statearr_26184_26231[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (4)))
{var inst_26110 = (state_26179[(8)]);var inst_26110__$1 = (state_26179[(2)]);var inst_26111 = (inst_26110__$1 == null);var state_26179__$1 = (function (){var statearr_26185 = state_26179;(statearr_26185[(8)] = inst_26110__$1);
return statearr_26185;
})();if(cljs.core.truth_(inst_26111))
{var statearr_26186_26232 = state_26179__$1;(statearr_26186_26232[(1)] = (5));
} else
{var statearr_26187_26233 = state_26179__$1;(statearr_26187_26233[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (15)))
{var inst_26152 = (state_26179[(2)]);var state_26179__$1 = state_26179;var statearr_26188_26234 = state_26179__$1;(statearr_26188_26234[(2)] = inst_26152);
(statearr_26188_26234[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (21)))
{var inst_26172 = (state_26179[(2)]);var state_26179__$1 = (function (){var statearr_26189 = state_26179;(statearr_26189[(9)] = inst_26172);
return statearr_26189;
})();var statearr_26190_26235 = state_26179__$1;(statearr_26190_26235[(2)] = null);
(statearr_26190_26235[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (13)))
{var inst_26134 = (state_26179[(10)]);var inst_26136 = cljs.core.chunked_seq_QMARK_.call(null,inst_26134);var state_26179__$1 = state_26179;if(inst_26136)
{var statearr_26191_26236 = state_26179__$1;(statearr_26191_26236[(1)] = (16));
} else
{var statearr_26192_26237 = state_26179__$1;(statearr_26192_26237[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (22)))
{var inst_26164 = (state_26179[(2)]);var state_26179__$1 = state_26179;if(cljs.core.truth_(inst_26164))
{var statearr_26193_26238 = state_26179__$1;(statearr_26193_26238[(1)] = (23));
} else
{var statearr_26194_26239 = state_26179__$1;(statearr_26194_26239[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (6)))
{var inst_26160 = (state_26179[(11)]);var inst_26110 = (state_26179[(8)]);var inst_26158 = (state_26179[(7)]);var inst_26158__$1 = topic_fn.call(null,inst_26110);var inst_26159 = cljs.core.deref.call(null,mults);var inst_26160__$1 = cljs.core.get.call(null,inst_26159,inst_26158__$1);var state_26179__$1 = (function (){var statearr_26195 = state_26179;(statearr_26195[(11)] = inst_26160__$1);
(statearr_26195[(7)] = inst_26158__$1);
return statearr_26195;
})();if(cljs.core.truth_(inst_26160__$1))
{var statearr_26196_26240 = state_26179__$1;(statearr_26196_26240[(1)] = (19));
} else
{var statearr_26197_26241 = state_26179__$1;(statearr_26197_26241[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (25)))
{var inst_26169 = (state_26179[(2)]);var state_26179__$1 = state_26179;var statearr_26198_26242 = state_26179__$1;(statearr_26198_26242[(2)] = inst_26169);
(statearr_26198_26242[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (17)))
{var inst_26134 = (state_26179[(10)]);var inst_26143 = cljs.core.first.call(null,inst_26134);var inst_26144 = cljs.core.async.muxch_STAR_.call(null,inst_26143);var inst_26145 = cljs.core.async.close_BANG_.call(null,inst_26144);var inst_26146 = cljs.core.next.call(null,inst_26134);var inst_26120 = inst_26146;var inst_26121 = null;var inst_26122 = (0);var inst_26123 = (0);var state_26179__$1 = (function (){var statearr_26199 = state_26179;(statearr_26199[(12)] = inst_26122);
(statearr_26199[(13)] = inst_26120);
(statearr_26199[(14)] = inst_26123);
(statearr_26199[(15)] = inst_26121);
(statearr_26199[(16)] = inst_26145);
return statearr_26199;
})();var statearr_26200_26243 = state_26179__$1;(statearr_26200_26243[(2)] = null);
(statearr_26200_26243[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (3)))
{var inst_26177 = (state_26179[(2)]);var state_26179__$1 = state_26179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26179__$1,inst_26177);
} else
{if((state_val_26180 === (12)))
{var inst_26154 = (state_26179[(2)]);var state_26179__$1 = state_26179;var statearr_26201_26244 = state_26179__$1;(statearr_26201_26244[(2)] = inst_26154);
(statearr_26201_26244[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (2)))
{var state_26179__$1 = state_26179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26179__$1,(4),ch);
} else
{if((state_val_26180 === (23)))
{var state_26179__$1 = state_26179;var statearr_26202_26245 = state_26179__$1;(statearr_26202_26245[(2)] = null);
(statearr_26202_26245[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (19)))
{var inst_26160 = (state_26179[(11)]);var inst_26110 = (state_26179[(8)]);var inst_26162 = cljs.core.async.muxch_STAR_.call(null,inst_26160);var state_26179__$1 = state_26179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26179__$1,(22),inst_26162,inst_26110);
} else
{if((state_val_26180 === (11)))
{var inst_26120 = (state_26179[(13)]);var inst_26134 = (state_26179[(10)]);var inst_26134__$1 = cljs.core.seq.call(null,inst_26120);var state_26179__$1 = (function (){var statearr_26203 = state_26179;(statearr_26203[(10)] = inst_26134__$1);
return statearr_26203;
})();if(inst_26134__$1)
{var statearr_26204_26246 = state_26179__$1;(statearr_26204_26246[(1)] = (13));
} else
{var statearr_26205_26247 = state_26179__$1;(statearr_26205_26247[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (9)))
{var inst_26156 = (state_26179[(2)]);var state_26179__$1 = state_26179;var statearr_26206_26248 = state_26179__$1;(statearr_26206_26248[(2)] = inst_26156);
(statearr_26206_26248[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (5)))
{var inst_26117 = cljs.core.deref.call(null,mults);var inst_26118 = cljs.core.vals.call(null,inst_26117);var inst_26119 = cljs.core.seq.call(null,inst_26118);var inst_26120 = inst_26119;var inst_26121 = null;var inst_26122 = (0);var inst_26123 = (0);var state_26179__$1 = (function (){var statearr_26207 = state_26179;(statearr_26207[(12)] = inst_26122);
(statearr_26207[(13)] = inst_26120);
(statearr_26207[(14)] = inst_26123);
(statearr_26207[(15)] = inst_26121);
return statearr_26207;
})();var statearr_26208_26249 = state_26179__$1;(statearr_26208_26249[(2)] = null);
(statearr_26208_26249[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (14)))
{var state_26179__$1 = state_26179;var statearr_26212_26250 = state_26179__$1;(statearr_26212_26250[(2)] = null);
(statearr_26212_26250[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (16)))
{var inst_26134 = (state_26179[(10)]);var inst_26138 = cljs.core.chunk_first.call(null,inst_26134);var inst_26139 = cljs.core.chunk_rest.call(null,inst_26134);var inst_26140 = cljs.core.count.call(null,inst_26138);var inst_26120 = inst_26139;var inst_26121 = inst_26138;var inst_26122 = inst_26140;var inst_26123 = (0);var state_26179__$1 = (function (){var statearr_26213 = state_26179;(statearr_26213[(12)] = inst_26122);
(statearr_26213[(13)] = inst_26120);
(statearr_26213[(14)] = inst_26123);
(statearr_26213[(15)] = inst_26121);
return statearr_26213;
})();var statearr_26214_26251 = state_26179__$1;(statearr_26214_26251[(2)] = null);
(statearr_26214_26251[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (10)))
{var inst_26122 = (state_26179[(12)]);var inst_26120 = (state_26179[(13)]);var inst_26123 = (state_26179[(14)]);var inst_26121 = (state_26179[(15)]);var inst_26128 = cljs.core._nth.call(null,inst_26121,inst_26123);var inst_26129 = cljs.core.async.muxch_STAR_.call(null,inst_26128);var inst_26130 = cljs.core.async.close_BANG_.call(null,inst_26129);var inst_26131 = (inst_26123 + (1));var tmp26209 = inst_26122;var tmp26210 = inst_26120;var tmp26211 = inst_26121;var inst_26120__$1 = tmp26210;var inst_26121__$1 = tmp26211;var inst_26122__$1 = tmp26209;var inst_26123__$1 = inst_26131;var state_26179__$1 = (function (){var statearr_26215 = state_26179;(statearr_26215[(12)] = inst_26122__$1);
(statearr_26215[(13)] = inst_26120__$1);
(statearr_26215[(14)] = inst_26123__$1);
(statearr_26215[(15)] = inst_26121__$1);
(statearr_26215[(17)] = inst_26130);
return statearr_26215;
})();var statearr_26216_26252 = state_26179__$1;(statearr_26216_26252[(2)] = null);
(statearr_26216_26252[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (18)))
{var inst_26149 = (state_26179[(2)]);var state_26179__$1 = state_26179;var statearr_26217_26253 = state_26179__$1;(statearr_26217_26253[(2)] = inst_26149);
(statearr_26217_26253[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26180 === (8)))
{var inst_26122 = (state_26179[(12)]);var inst_26123 = (state_26179[(14)]);var inst_26125 = (inst_26123 < inst_26122);var inst_26126 = inst_26125;var state_26179__$1 = state_26179;if(cljs.core.truth_(inst_26126))
{var statearr_26218_26254 = state_26179__$1;(statearr_26218_26254[(1)] = (10));
} else
{var statearr_26219_26255 = state_26179__$1;(statearr_26219_26255[(1)] = (11));
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
});})(c__11297__auto___26227,mults,ensure_mult,p))
;return ((function (switch__11241__auto__,c__11297__auto___26227,mults,ensure_mult,p){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26223[(0)] = state_machine__11242__auto__);
(statearr_26223[(1)] = (1));
return statearr_26223;
});
var state_machine__11242__auto____1 = (function (state_26179){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26179);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26224){if((e26224 instanceof Object))
{var ex__11245__auto__ = e26224;var statearr_26225_26256 = state_26179;(statearr_26225_26256[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26224;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26257 = state_26179;
state_26179 = G__26257;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26179){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___26227,mults,ensure_mult,p))
})();var state__11299__auto__ = (function (){var statearr_26226 = f__11298__auto__.call(null);(statearr_26226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___26227);
return statearr_26226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___26227,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11297__auto___26394 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___26394,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___26394,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26364){var state_val_26365 = (state_26364[(1)]);if((state_val_26365 === (7)))
{var state_26364__$1 = state_26364;var statearr_26366_26395 = state_26364__$1;(statearr_26366_26395[(2)] = null);
(statearr_26366_26395[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26365 === (1)))
{var state_26364__$1 = state_26364;var statearr_26367_26396 = state_26364__$1;(statearr_26367_26396[(2)] = null);
(statearr_26367_26396[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26365 === (4)))
{var inst_26328 = (state_26364[(7)]);var inst_26330 = (inst_26328 < cnt);var state_26364__$1 = state_26364;if(cljs.core.truth_(inst_26330))
{var statearr_26368_26397 = state_26364__$1;(statearr_26368_26397[(1)] = (6));
} else
{var statearr_26369_26398 = state_26364__$1;(statearr_26369_26398[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26365 === (15)))
{var inst_26360 = (state_26364[(2)]);var state_26364__$1 = state_26364;var statearr_26370_26399 = state_26364__$1;(statearr_26370_26399[(2)] = inst_26360);
(statearr_26370_26399[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26365 === (13)))
{var inst_26353 = cljs.core.async.close_BANG_.call(null,out);var state_26364__$1 = state_26364;var statearr_26371_26400 = state_26364__$1;(statearr_26371_26400[(2)] = inst_26353);
(statearr_26371_26400[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26365 === (6)))
{var state_26364__$1 = state_26364;var statearr_26372_26401 = state_26364__$1;(statearr_26372_26401[(2)] = null);
(statearr_26372_26401[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26365 === (3)))
{var inst_26362 = (state_26364[(2)]);var state_26364__$1 = state_26364;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26364__$1,inst_26362);
} else
{if((state_val_26365 === (12)))
{var inst_26350 = (state_26364[(8)]);var inst_26350__$1 = (state_26364[(2)]);var inst_26351 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26350__$1);var state_26364__$1 = (function (){var statearr_26373 = state_26364;(statearr_26373[(8)] = inst_26350__$1);
return statearr_26373;
})();if(cljs.core.truth_(inst_26351))
{var statearr_26374_26402 = state_26364__$1;(statearr_26374_26402[(1)] = (13));
} else
{var statearr_26375_26403 = state_26364__$1;(statearr_26375_26403[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26365 === (2)))
{var inst_26327 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26328 = (0);var state_26364__$1 = (function (){var statearr_26376 = state_26364;(statearr_26376[(7)] = inst_26328);
(statearr_26376[(9)] = inst_26327);
return statearr_26376;
})();var statearr_26377_26404 = state_26364__$1;(statearr_26377_26404[(2)] = null);
(statearr_26377_26404[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26365 === (11)))
{var inst_26328 = (state_26364[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26364,(10),Object,null,(9));var inst_26337 = chs__$1.call(null,inst_26328);var inst_26338 = done.call(null,inst_26328);var inst_26339 = cljs.core.async.take_BANG_.call(null,inst_26337,inst_26338);var state_26364__$1 = state_26364;var statearr_26378_26405 = state_26364__$1;(statearr_26378_26405[(2)] = inst_26339);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26364__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26365 === (9)))
{var inst_26328 = (state_26364[(7)]);var inst_26341 = (state_26364[(2)]);var inst_26342 = (inst_26328 + (1));var inst_26328__$1 = inst_26342;var state_26364__$1 = (function (){var statearr_26379 = state_26364;(statearr_26379[(7)] = inst_26328__$1);
(statearr_26379[(10)] = inst_26341);
return statearr_26379;
})();var statearr_26380_26406 = state_26364__$1;(statearr_26380_26406[(2)] = null);
(statearr_26380_26406[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26365 === (5)))
{var inst_26348 = (state_26364[(2)]);var state_26364__$1 = (function (){var statearr_26381 = state_26364;(statearr_26381[(11)] = inst_26348);
return statearr_26381;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26364__$1,(12),dchan);
} else
{if((state_val_26365 === (14)))
{var inst_26350 = (state_26364[(8)]);var inst_26355 = cljs.core.apply.call(null,f,inst_26350);var state_26364__$1 = state_26364;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26364__$1,(16),out,inst_26355);
} else
{if((state_val_26365 === (16)))
{var inst_26357 = (state_26364[(2)]);var state_26364__$1 = (function (){var statearr_26382 = state_26364;(statearr_26382[(12)] = inst_26357);
return statearr_26382;
})();var statearr_26383_26407 = state_26364__$1;(statearr_26383_26407[(2)] = null);
(statearr_26383_26407[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26365 === (10)))
{var inst_26332 = (state_26364[(2)]);var inst_26333 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26364__$1 = (function (){var statearr_26384 = state_26364;(statearr_26384[(13)] = inst_26332);
return statearr_26384;
})();var statearr_26385_26408 = state_26364__$1;(statearr_26385_26408[(2)] = inst_26333);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26364__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26365 === (8)))
{var inst_26346 = (state_26364[(2)]);var state_26364__$1 = state_26364;var statearr_26386_26409 = state_26364__$1;(statearr_26386_26409[(2)] = inst_26346);
(statearr_26386_26409[(1)] = (5));
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
});})(c__11297__auto___26394,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11241__auto__,c__11297__auto___26394,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26390[(0)] = state_machine__11242__auto__);
(statearr_26390[(1)] = (1));
return statearr_26390;
});
var state_machine__11242__auto____1 = (function (state_26364){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26364);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26391){if((e26391 instanceof Object))
{var ex__11245__auto__ = e26391;var statearr_26392_26410 = state_26364;(statearr_26392_26410[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26364);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26391;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26411 = state_26364;
state_26364 = G__26411;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26364){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___26394,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11299__auto__ = (function (){var statearr_26393 = f__11298__auto__.call(null);(statearr_26393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___26394);
return statearr_26393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___26394,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___26519 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___26519,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___26519,out){
return (function (state_26495){var state_val_26496 = (state_26495[(1)]);if((state_val_26496 === (7)))
{var inst_26475 = (state_26495[(7)]);var inst_26474 = (state_26495[(8)]);var inst_26474__$1 = (state_26495[(2)]);var inst_26475__$1 = cljs.core.nth.call(null,inst_26474__$1,(0),null);var inst_26476 = cljs.core.nth.call(null,inst_26474__$1,(1),null);var inst_26477 = (inst_26475__$1 == null);var state_26495__$1 = (function (){var statearr_26497 = state_26495;(statearr_26497[(7)] = inst_26475__$1);
(statearr_26497[(9)] = inst_26476);
(statearr_26497[(8)] = inst_26474__$1);
return statearr_26497;
})();if(cljs.core.truth_(inst_26477))
{var statearr_26498_26520 = state_26495__$1;(statearr_26498_26520[(1)] = (8));
} else
{var statearr_26499_26521 = state_26495__$1;(statearr_26499_26521[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26496 === (1)))
{var inst_26466 = cljs.core.vec.call(null,chs);var inst_26467 = inst_26466;var state_26495__$1 = (function (){var statearr_26500 = state_26495;(statearr_26500[(10)] = inst_26467);
return statearr_26500;
})();var statearr_26501_26522 = state_26495__$1;(statearr_26501_26522[(2)] = null);
(statearr_26501_26522[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26496 === (4)))
{var inst_26467 = (state_26495[(10)]);var state_26495__$1 = state_26495;return cljs.core.async.ioc_alts_BANG_.call(null,state_26495__$1,(7),inst_26467);
} else
{if((state_val_26496 === (6)))
{var inst_26491 = (state_26495[(2)]);var state_26495__$1 = state_26495;var statearr_26502_26523 = state_26495__$1;(statearr_26502_26523[(2)] = inst_26491);
(statearr_26502_26523[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26496 === (3)))
{var inst_26493 = (state_26495[(2)]);var state_26495__$1 = state_26495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26495__$1,inst_26493);
} else
{if((state_val_26496 === (2)))
{var inst_26467 = (state_26495[(10)]);var inst_26469 = cljs.core.count.call(null,inst_26467);var inst_26470 = (inst_26469 > (0));var state_26495__$1 = state_26495;if(cljs.core.truth_(inst_26470))
{var statearr_26504_26524 = state_26495__$1;(statearr_26504_26524[(1)] = (4));
} else
{var statearr_26505_26525 = state_26495__$1;(statearr_26505_26525[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26496 === (11)))
{var inst_26467 = (state_26495[(10)]);var inst_26484 = (state_26495[(2)]);var tmp26503 = inst_26467;var inst_26467__$1 = tmp26503;var state_26495__$1 = (function (){var statearr_26506 = state_26495;(statearr_26506[(11)] = inst_26484);
(statearr_26506[(10)] = inst_26467__$1);
return statearr_26506;
})();var statearr_26507_26526 = state_26495__$1;(statearr_26507_26526[(2)] = null);
(statearr_26507_26526[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26496 === (9)))
{var inst_26475 = (state_26495[(7)]);var state_26495__$1 = state_26495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26495__$1,(11),out,inst_26475);
} else
{if((state_val_26496 === (5)))
{var inst_26489 = cljs.core.async.close_BANG_.call(null,out);var state_26495__$1 = state_26495;var statearr_26508_26527 = state_26495__$1;(statearr_26508_26527[(2)] = inst_26489);
(statearr_26508_26527[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26496 === (10)))
{var inst_26487 = (state_26495[(2)]);var state_26495__$1 = state_26495;var statearr_26509_26528 = state_26495__$1;(statearr_26509_26528[(2)] = inst_26487);
(statearr_26509_26528[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26496 === (8)))
{var inst_26475 = (state_26495[(7)]);var inst_26476 = (state_26495[(9)]);var inst_26467 = (state_26495[(10)]);var inst_26474 = (state_26495[(8)]);var inst_26479 = (function (){var c = inst_26476;var v = inst_26475;var vec__26472 = inst_26474;var cs = inst_26467;return ((function (c,v,vec__26472,cs,inst_26475,inst_26476,inst_26467,inst_26474,state_val_26496,c__11297__auto___26519,out){
return (function (p1__26412_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26412_SHARP_);
});
;})(c,v,vec__26472,cs,inst_26475,inst_26476,inst_26467,inst_26474,state_val_26496,c__11297__auto___26519,out))
})();var inst_26480 = cljs.core.filterv.call(null,inst_26479,inst_26467);var inst_26467__$1 = inst_26480;var state_26495__$1 = (function (){var statearr_26510 = state_26495;(statearr_26510[(10)] = inst_26467__$1);
return statearr_26510;
})();var statearr_26511_26529 = state_26495__$1;(statearr_26511_26529[(2)] = null);
(statearr_26511_26529[(1)] = (2));
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
});})(c__11297__auto___26519,out))
;return ((function (switch__11241__auto__,c__11297__auto___26519,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26515 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26515[(0)] = state_machine__11242__auto__);
(statearr_26515[(1)] = (1));
return statearr_26515;
});
var state_machine__11242__auto____1 = (function (state_26495){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26495);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26516){if((e26516 instanceof Object))
{var ex__11245__auto__ = e26516;var statearr_26517_26530 = state_26495;(statearr_26517_26530[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26516;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26531 = state_26495;
state_26495 = G__26531;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26495){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___26519,out))
})();var state__11299__auto__ = (function (){var statearr_26518 = f__11298__auto__.call(null);(statearr_26518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___26519);
return statearr_26518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___26519,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___26624 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___26624,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___26624,out){
return (function (state_26601){var state_val_26602 = (state_26601[(1)]);if((state_val_26602 === (7)))
{var inst_26583 = (state_26601[(7)]);var inst_26583__$1 = (state_26601[(2)]);var inst_26584 = (inst_26583__$1 == null);var inst_26585 = cljs.core.not.call(null,inst_26584);var state_26601__$1 = (function (){var statearr_26603 = state_26601;(statearr_26603[(7)] = inst_26583__$1);
return statearr_26603;
})();if(inst_26585)
{var statearr_26604_26625 = state_26601__$1;(statearr_26604_26625[(1)] = (8));
} else
{var statearr_26605_26626 = state_26601__$1;(statearr_26605_26626[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26602 === (1)))
{var inst_26578 = (0);var state_26601__$1 = (function (){var statearr_26606 = state_26601;(statearr_26606[(8)] = inst_26578);
return statearr_26606;
})();var statearr_26607_26627 = state_26601__$1;(statearr_26607_26627[(2)] = null);
(statearr_26607_26627[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26602 === (4)))
{var state_26601__$1 = state_26601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26601__$1,(7),ch);
} else
{if((state_val_26602 === (6)))
{var inst_26596 = (state_26601[(2)]);var state_26601__$1 = state_26601;var statearr_26608_26628 = state_26601__$1;(statearr_26608_26628[(2)] = inst_26596);
(statearr_26608_26628[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26602 === (3)))
{var inst_26598 = (state_26601[(2)]);var inst_26599 = cljs.core.async.close_BANG_.call(null,out);var state_26601__$1 = (function (){var statearr_26609 = state_26601;(statearr_26609[(9)] = inst_26598);
return statearr_26609;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26601__$1,inst_26599);
} else
{if((state_val_26602 === (2)))
{var inst_26578 = (state_26601[(8)]);var inst_26580 = (inst_26578 < n);var state_26601__$1 = state_26601;if(cljs.core.truth_(inst_26580))
{var statearr_26610_26629 = state_26601__$1;(statearr_26610_26629[(1)] = (4));
} else
{var statearr_26611_26630 = state_26601__$1;(statearr_26611_26630[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26602 === (11)))
{var inst_26578 = (state_26601[(8)]);var inst_26588 = (state_26601[(2)]);var inst_26589 = (inst_26578 + (1));var inst_26578__$1 = inst_26589;var state_26601__$1 = (function (){var statearr_26612 = state_26601;(statearr_26612[(10)] = inst_26588);
(statearr_26612[(8)] = inst_26578__$1);
return statearr_26612;
})();var statearr_26613_26631 = state_26601__$1;(statearr_26613_26631[(2)] = null);
(statearr_26613_26631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26602 === (9)))
{var state_26601__$1 = state_26601;var statearr_26614_26632 = state_26601__$1;(statearr_26614_26632[(2)] = null);
(statearr_26614_26632[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26602 === (5)))
{var state_26601__$1 = state_26601;var statearr_26615_26633 = state_26601__$1;(statearr_26615_26633[(2)] = null);
(statearr_26615_26633[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26602 === (10)))
{var inst_26593 = (state_26601[(2)]);var state_26601__$1 = state_26601;var statearr_26616_26634 = state_26601__$1;(statearr_26616_26634[(2)] = inst_26593);
(statearr_26616_26634[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26602 === (8)))
{var inst_26583 = (state_26601[(7)]);var state_26601__$1 = state_26601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26601__$1,(11),out,inst_26583);
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
});})(c__11297__auto___26624,out))
;return ((function (switch__11241__auto__,c__11297__auto___26624,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26620 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26620[(0)] = state_machine__11242__auto__);
(statearr_26620[(1)] = (1));
return statearr_26620;
});
var state_machine__11242__auto____1 = (function (state_26601){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26601);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26621){if((e26621 instanceof Object))
{var ex__11245__auto__ = e26621;var statearr_26622_26635 = state_26601;(statearr_26622_26635[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26601);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26621;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26636 = state_26601;
state_26601 = G__26636;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26601){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___26624,out))
})();var state__11299__auto__ = (function (){var statearr_26623 = f__11298__auto__.call(null);(statearr_26623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___26624);
return statearr_26623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___26624,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26644 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26644 = (function (ch,f,map_LT_,meta26645){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26645 = meta26645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26644.cljs$lang$type = true;
cljs.core.async.t26644.cljs$lang$ctorStr = "cljs.core.async/t26644";
cljs.core.async.t26644.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26644");
});
cljs.core.async.t26644.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t26644.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26647 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26647 = (function (fn1,_,meta26645,ch,f,map_LT_,meta26648){
this.fn1 = fn1;
this._ = _;
this.meta26645 = meta26645;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26648 = meta26648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26647.cljs$lang$type = true;
cljs.core.async.t26647.cljs$lang$ctorStr = "cljs.core.async/t26647";
cljs.core.async.t26647.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26647");
});})(___$1))
;
cljs.core.async.t26647.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26637_SHARP_){return f1.call(null,(((p1__26637_SHARP_ == null))?null:self__.f.call(null,p1__26637_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26649){var self__ = this;
var _26649__$1 = this;return self__.meta26648;
});})(___$1))
;
cljs.core.async.t26647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26649,meta26648__$1){var self__ = this;
var _26649__$1 = this;return (new cljs.core.async.t26647(self__.fn1,self__._,self__.meta26645,self__.ch,self__.f,self__.map_LT_,meta26648__$1));
});})(___$1))
;
cljs.core.async.__GT_t26647 = ((function (___$1){
return (function __GT_t26647(fn1__$1,___$2,meta26645__$1,ch__$2,f__$2,map_LT___$2,meta26648){return (new cljs.core.async.t26647(fn1__$1,___$2,meta26645__$1,ch__$2,f__$2,map_LT___$2,meta26648));
});})(___$1))
;
}
return (new cljs.core.async.t26647(fn1,___$1,self__.meta26645,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t26644.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26644.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26646){var self__ = this;
var _26646__$1 = this;return self__.meta26645;
});
cljs.core.async.t26644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26646,meta26645__$1){var self__ = this;
var _26646__$1 = this;return (new cljs.core.async.t26644(self__.ch,self__.f,self__.map_LT_,meta26645__$1));
});
cljs.core.async.__GT_t26644 = (function __GT_t26644(ch__$1,f__$1,map_LT___$1,meta26645){return (new cljs.core.async.t26644(ch__$1,f__$1,map_LT___$1,meta26645));
});
}
return (new cljs.core.async.t26644(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26653 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26653 = (function (ch,f,map_GT_,meta26654){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26654 = meta26654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26653.cljs$lang$type = true;
cljs.core.async.t26653.cljs$lang$ctorStr = "cljs.core.async/t26653";
cljs.core.async.t26653.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26653");
});
cljs.core.async.t26653.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t26653.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26653.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26655){var self__ = this;
var _26655__$1 = this;return self__.meta26654;
});
cljs.core.async.t26653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26655,meta26654__$1){var self__ = this;
var _26655__$1 = this;return (new cljs.core.async.t26653(self__.ch,self__.f,self__.map_GT_,meta26654__$1));
});
cljs.core.async.__GT_t26653 = (function __GT_t26653(ch__$1,f__$1,map_GT___$1,meta26654){return (new cljs.core.async.t26653(ch__$1,f__$1,map_GT___$1,meta26654));
});
}
return (new cljs.core.async.t26653(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26659 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26659 = (function (ch,p,filter_GT_,meta26660){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26660 = meta26660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26659.cljs$lang$type = true;
cljs.core.async.t26659.cljs$lang$ctorStr = "cljs.core.async/t26659";
cljs.core.async.t26659.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26659");
});
cljs.core.async.t26659.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t26659.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26659.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26659.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26661){var self__ = this;
var _26661__$1 = this;return self__.meta26660;
});
cljs.core.async.t26659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26661,meta26660__$1){var self__ = this;
var _26661__$1 = this;return (new cljs.core.async.t26659(self__.ch,self__.p,self__.filter_GT_,meta26660__$1));
});
cljs.core.async.__GT_t26659 = (function __GT_t26659(ch__$1,p__$1,filter_GT___$1,meta26660){return (new cljs.core.async.t26659(ch__$1,p__$1,filter_GT___$1,meta26660));
});
}
return (new cljs.core.async.t26659(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___26744 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___26744,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___26744,out){
return (function (state_26723){var state_val_26724 = (state_26723[(1)]);if((state_val_26724 === (7)))
{var inst_26719 = (state_26723[(2)]);var state_26723__$1 = state_26723;var statearr_26725_26745 = state_26723__$1;(statearr_26725_26745[(2)] = inst_26719);
(statearr_26725_26745[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26724 === (1)))
{var state_26723__$1 = state_26723;var statearr_26726_26746 = state_26723__$1;(statearr_26726_26746[(2)] = null);
(statearr_26726_26746[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26724 === (4)))
{var inst_26705 = (state_26723[(7)]);var inst_26705__$1 = (state_26723[(2)]);var inst_26706 = (inst_26705__$1 == null);var state_26723__$1 = (function (){var statearr_26727 = state_26723;(statearr_26727[(7)] = inst_26705__$1);
return statearr_26727;
})();if(cljs.core.truth_(inst_26706))
{var statearr_26728_26747 = state_26723__$1;(statearr_26728_26747[(1)] = (5));
} else
{var statearr_26729_26748 = state_26723__$1;(statearr_26729_26748[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26724 === (6)))
{var inst_26705 = (state_26723[(7)]);var inst_26710 = p.call(null,inst_26705);var state_26723__$1 = state_26723;if(cljs.core.truth_(inst_26710))
{var statearr_26730_26749 = state_26723__$1;(statearr_26730_26749[(1)] = (8));
} else
{var statearr_26731_26750 = state_26723__$1;(statearr_26731_26750[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26724 === (3)))
{var inst_26721 = (state_26723[(2)]);var state_26723__$1 = state_26723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26723__$1,inst_26721);
} else
{if((state_val_26724 === (2)))
{var state_26723__$1 = state_26723;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26723__$1,(4),ch);
} else
{if((state_val_26724 === (11)))
{var inst_26713 = (state_26723[(2)]);var state_26723__$1 = state_26723;var statearr_26732_26751 = state_26723__$1;(statearr_26732_26751[(2)] = inst_26713);
(statearr_26732_26751[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26724 === (9)))
{var state_26723__$1 = state_26723;var statearr_26733_26752 = state_26723__$1;(statearr_26733_26752[(2)] = null);
(statearr_26733_26752[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26724 === (5)))
{var inst_26708 = cljs.core.async.close_BANG_.call(null,out);var state_26723__$1 = state_26723;var statearr_26734_26753 = state_26723__$1;(statearr_26734_26753[(2)] = inst_26708);
(statearr_26734_26753[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26724 === (10)))
{var inst_26716 = (state_26723[(2)]);var state_26723__$1 = (function (){var statearr_26735 = state_26723;(statearr_26735[(8)] = inst_26716);
return statearr_26735;
})();var statearr_26736_26754 = state_26723__$1;(statearr_26736_26754[(2)] = null);
(statearr_26736_26754[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26724 === (8)))
{var inst_26705 = (state_26723[(7)]);var state_26723__$1 = state_26723;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26723__$1,(11),out,inst_26705);
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
});})(c__11297__auto___26744,out))
;return ((function (switch__11241__auto__,c__11297__auto___26744,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26740 = [null,null,null,null,null,null,null,null,null];(statearr_26740[(0)] = state_machine__11242__auto__);
(statearr_26740[(1)] = (1));
return statearr_26740;
});
var state_machine__11242__auto____1 = (function (state_26723){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26723);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26741){if((e26741 instanceof Object))
{var ex__11245__auto__ = e26741;var statearr_26742_26755 = state_26723;(statearr_26742_26755[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26723);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26741;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26756 = state_26723;
state_26723 = G__26756;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26723){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___26744,out))
})();var state__11299__auto__ = (function (){var statearr_26743 = f__11298__auto__.call(null);(statearr_26743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___26744);
return statearr_26743;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___26744,out))
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
return (function (state_26922){var state_val_26923 = (state_26922[(1)]);if((state_val_26923 === (7)))
{var inst_26918 = (state_26922[(2)]);var state_26922__$1 = state_26922;var statearr_26924_26965 = state_26922__$1;(statearr_26924_26965[(2)] = inst_26918);
(statearr_26924_26965[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (20)))
{var inst_26888 = (state_26922[(7)]);var inst_26899 = (state_26922[(2)]);var inst_26900 = cljs.core.next.call(null,inst_26888);var inst_26874 = inst_26900;var inst_26875 = null;var inst_26876 = (0);var inst_26877 = (0);var state_26922__$1 = (function (){var statearr_26925 = state_26922;(statearr_26925[(8)] = inst_26875);
(statearr_26925[(9)] = inst_26876);
(statearr_26925[(10)] = inst_26874);
(statearr_26925[(11)] = inst_26877);
(statearr_26925[(12)] = inst_26899);
return statearr_26925;
})();var statearr_26926_26966 = state_26922__$1;(statearr_26926_26966[(2)] = null);
(statearr_26926_26966[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (1)))
{var state_26922__$1 = state_26922;var statearr_26927_26967 = state_26922__$1;(statearr_26927_26967[(2)] = null);
(statearr_26927_26967[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (4)))
{var inst_26863 = (state_26922[(13)]);var inst_26863__$1 = (state_26922[(2)]);var inst_26864 = (inst_26863__$1 == null);var state_26922__$1 = (function (){var statearr_26928 = state_26922;(statearr_26928[(13)] = inst_26863__$1);
return statearr_26928;
})();if(cljs.core.truth_(inst_26864))
{var statearr_26929_26968 = state_26922__$1;(statearr_26929_26968[(1)] = (5));
} else
{var statearr_26930_26969 = state_26922__$1;(statearr_26930_26969[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (15)))
{var state_26922__$1 = state_26922;var statearr_26934_26970 = state_26922__$1;(statearr_26934_26970[(2)] = null);
(statearr_26934_26970[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (21)))
{var state_26922__$1 = state_26922;var statearr_26935_26971 = state_26922__$1;(statearr_26935_26971[(2)] = null);
(statearr_26935_26971[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (13)))
{var inst_26875 = (state_26922[(8)]);var inst_26876 = (state_26922[(9)]);var inst_26874 = (state_26922[(10)]);var inst_26877 = (state_26922[(11)]);var inst_26884 = (state_26922[(2)]);var inst_26885 = (inst_26877 + (1));var tmp26931 = inst_26875;var tmp26932 = inst_26876;var tmp26933 = inst_26874;var inst_26874__$1 = tmp26933;var inst_26875__$1 = tmp26931;var inst_26876__$1 = tmp26932;var inst_26877__$1 = inst_26885;var state_26922__$1 = (function (){var statearr_26936 = state_26922;(statearr_26936[(8)] = inst_26875__$1);
(statearr_26936[(9)] = inst_26876__$1);
(statearr_26936[(14)] = inst_26884);
(statearr_26936[(10)] = inst_26874__$1);
(statearr_26936[(11)] = inst_26877__$1);
return statearr_26936;
})();var statearr_26937_26972 = state_26922__$1;(statearr_26937_26972[(2)] = null);
(statearr_26937_26972[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (22)))
{var state_26922__$1 = state_26922;var statearr_26938_26973 = state_26922__$1;(statearr_26938_26973[(2)] = null);
(statearr_26938_26973[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (6)))
{var inst_26863 = (state_26922[(13)]);var inst_26872 = f.call(null,inst_26863);var inst_26873 = cljs.core.seq.call(null,inst_26872);var inst_26874 = inst_26873;var inst_26875 = null;var inst_26876 = (0);var inst_26877 = (0);var state_26922__$1 = (function (){var statearr_26939 = state_26922;(statearr_26939[(8)] = inst_26875);
(statearr_26939[(9)] = inst_26876);
(statearr_26939[(10)] = inst_26874);
(statearr_26939[(11)] = inst_26877);
return statearr_26939;
})();var statearr_26940_26974 = state_26922__$1;(statearr_26940_26974[(2)] = null);
(statearr_26940_26974[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (17)))
{var inst_26888 = (state_26922[(7)]);var inst_26892 = cljs.core.chunk_first.call(null,inst_26888);var inst_26893 = cljs.core.chunk_rest.call(null,inst_26888);var inst_26894 = cljs.core.count.call(null,inst_26892);var inst_26874 = inst_26893;var inst_26875 = inst_26892;var inst_26876 = inst_26894;var inst_26877 = (0);var state_26922__$1 = (function (){var statearr_26941 = state_26922;(statearr_26941[(8)] = inst_26875);
(statearr_26941[(9)] = inst_26876);
(statearr_26941[(10)] = inst_26874);
(statearr_26941[(11)] = inst_26877);
return statearr_26941;
})();var statearr_26942_26975 = state_26922__$1;(statearr_26942_26975[(2)] = null);
(statearr_26942_26975[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (3)))
{var inst_26920 = (state_26922[(2)]);var state_26922__$1 = state_26922;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26922__$1,inst_26920);
} else
{if((state_val_26923 === (12)))
{var inst_26908 = (state_26922[(2)]);var state_26922__$1 = state_26922;var statearr_26943_26976 = state_26922__$1;(statearr_26943_26976[(2)] = inst_26908);
(statearr_26943_26976[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (2)))
{var state_26922__$1 = state_26922;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26922__$1,(4),in$);
} else
{if((state_val_26923 === (23)))
{var inst_26916 = (state_26922[(2)]);var state_26922__$1 = state_26922;var statearr_26944_26977 = state_26922__$1;(statearr_26944_26977[(2)] = inst_26916);
(statearr_26944_26977[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (19)))
{var inst_26903 = (state_26922[(2)]);var state_26922__$1 = state_26922;var statearr_26945_26978 = state_26922__$1;(statearr_26945_26978[(2)] = inst_26903);
(statearr_26945_26978[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (11)))
{var inst_26888 = (state_26922[(7)]);var inst_26874 = (state_26922[(10)]);var inst_26888__$1 = cljs.core.seq.call(null,inst_26874);var state_26922__$1 = (function (){var statearr_26946 = state_26922;(statearr_26946[(7)] = inst_26888__$1);
return statearr_26946;
})();if(inst_26888__$1)
{var statearr_26947_26979 = state_26922__$1;(statearr_26947_26979[(1)] = (14));
} else
{var statearr_26948_26980 = state_26922__$1;(statearr_26948_26980[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (9)))
{var inst_26910 = (state_26922[(2)]);var inst_26911 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26922__$1 = (function (){var statearr_26949 = state_26922;(statearr_26949[(15)] = inst_26910);
return statearr_26949;
})();if(cljs.core.truth_(inst_26911))
{var statearr_26950_26981 = state_26922__$1;(statearr_26950_26981[(1)] = (21));
} else
{var statearr_26951_26982 = state_26922__$1;(statearr_26951_26982[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (5)))
{var inst_26866 = cljs.core.async.close_BANG_.call(null,out);var state_26922__$1 = state_26922;var statearr_26952_26983 = state_26922__$1;(statearr_26952_26983[(2)] = inst_26866);
(statearr_26952_26983[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (14)))
{var inst_26888 = (state_26922[(7)]);var inst_26890 = cljs.core.chunked_seq_QMARK_.call(null,inst_26888);var state_26922__$1 = state_26922;if(inst_26890)
{var statearr_26953_26984 = state_26922__$1;(statearr_26953_26984[(1)] = (17));
} else
{var statearr_26954_26985 = state_26922__$1;(statearr_26954_26985[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (16)))
{var inst_26906 = (state_26922[(2)]);var state_26922__$1 = state_26922;var statearr_26955_26986 = state_26922__$1;(statearr_26955_26986[(2)] = inst_26906);
(statearr_26955_26986[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26923 === (10)))
{var inst_26875 = (state_26922[(8)]);var inst_26877 = (state_26922[(11)]);var inst_26882 = cljs.core._nth.call(null,inst_26875,inst_26877);var state_26922__$1 = state_26922;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26922__$1,(13),out,inst_26882);
} else
{if((state_val_26923 === (18)))
{var inst_26888 = (state_26922[(7)]);var inst_26897 = cljs.core.first.call(null,inst_26888);var state_26922__$1 = state_26922;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26922__$1,(20),out,inst_26897);
} else
{if((state_val_26923 === (8)))
{var inst_26876 = (state_26922[(9)]);var inst_26877 = (state_26922[(11)]);var inst_26879 = (inst_26877 < inst_26876);var inst_26880 = inst_26879;var state_26922__$1 = state_26922;if(cljs.core.truth_(inst_26880))
{var statearr_26956_26987 = state_26922__$1;(statearr_26956_26987[(1)] = (10));
} else
{var statearr_26957_26988 = state_26922__$1;(statearr_26957_26988[(1)] = (11));
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
var state_machine__11242__auto____0 = (function (){var statearr_26961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26961[(0)] = state_machine__11242__auto__);
(statearr_26961[(1)] = (1));
return statearr_26961;
});
var state_machine__11242__auto____1 = (function (state_26922){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26922);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26962){if((e26962 instanceof Object))
{var ex__11245__auto__ = e26962;var statearr_26963_26989 = state_26922;(statearr_26963_26989[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26922);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26962;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26990 = state_26922;
state_26922 = G__26990;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26922){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_26964 = f__11298__auto__.call(null);(statearr_26964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_26964;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___27087 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___27087,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___27087,out){
return (function (state_27062){var state_val_27063 = (state_27062[(1)]);if((state_val_27063 === (7)))
{var inst_27057 = (state_27062[(2)]);var state_27062__$1 = state_27062;var statearr_27064_27088 = state_27062__$1;(statearr_27064_27088[(2)] = inst_27057);
(statearr_27064_27088[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27063 === (1)))
{var inst_27039 = null;var state_27062__$1 = (function (){var statearr_27065 = state_27062;(statearr_27065[(7)] = inst_27039);
return statearr_27065;
})();var statearr_27066_27089 = state_27062__$1;(statearr_27066_27089[(2)] = null);
(statearr_27066_27089[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27063 === (4)))
{var inst_27042 = (state_27062[(8)]);var inst_27042__$1 = (state_27062[(2)]);var inst_27043 = (inst_27042__$1 == null);var inst_27044 = cljs.core.not.call(null,inst_27043);var state_27062__$1 = (function (){var statearr_27067 = state_27062;(statearr_27067[(8)] = inst_27042__$1);
return statearr_27067;
})();if(inst_27044)
{var statearr_27068_27090 = state_27062__$1;(statearr_27068_27090[(1)] = (5));
} else
{var statearr_27069_27091 = state_27062__$1;(statearr_27069_27091[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27063 === (6)))
{var state_27062__$1 = state_27062;var statearr_27070_27092 = state_27062__$1;(statearr_27070_27092[(2)] = null);
(statearr_27070_27092[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27063 === (3)))
{var inst_27059 = (state_27062[(2)]);var inst_27060 = cljs.core.async.close_BANG_.call(null,out);var state_27062__$1 = (function (){var statearr_27071 = state_27062;(statearr_27071[(9)] = inst_27059);
return statearr_27071;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27062__$1,inst_27060);
} else
{if((state_val_27063 === (2)))
{var state_27062__$1 = state_27062;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27062__$1,(4),ch);
} else
{if((state_val_27063 === (11)))
{var inst_27042 = (state_27062[(8)]);var inst_27051 = (state_27062[(2)]);var inst_27039 = inst_27042;var state_27062__$1 = (function (){var statearr_27072 = state_27062;(statearr_27072[(7)] = inst_27039);
(statearr_27072[(10)] = inst_27051);
return statearr_27072;
})();var statearr_27073_27093 = state_27062__$1;(statearr_27073_27093[(2)] = null);
(statearr_27073_27093[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27063 === (9)))
{var inst_27042 = (state_27062[(8)]);var state_27062__$1 = state_27062;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27062__$1,(11),out,inst_27042);
} else
{if((state_val_27063 === (5)))
{var inst_27042 = (state_27062[(8)]);var inst_27039 = (state_27062[(7)]);var inst_27046 = cljs.core._EQ_.call(null,inst_27042,inst_27039);var state_27062__$1 = state_27062;if(inst_27046)
{var statearr_27075_27094 = state_27062__$1;(statearr_27075_27094[(1)] = (8));
} else
{var statearr_27076_27095 = state_27062__$1;(statearr_27076_27095[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27063 === (10)))
{var inst_27054 = (state_27062[(2)]);var state_27062__$1 = state_27062;var statearr_27077_27096 = state_27062__$1;(statearr_27077_27096[(2)] = inst_27054);
(statearr_27077_27096[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27063 === (8)))
{var inst_27039 = (state_27062[(7)]);var tmp27074 = inst_27039;var inst_27039__$1 = tmp27074;var state_27062__$1 = (function (){var statearr_27078 = state_27062;(statearr_27078[(7)] = inst_27039__$1);
return statearr_27078;
})();var statearr_27079_27097 = state_27062__$1;(statearr_27079_27097[(2)] = null);
(statearr_27079_27097[(1)] = (2));
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
});})(c__11297__auto___27087,out))
;return ((function (switch__11241__auto__,c__11297__auto___27087,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_27083 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27083[(0)] = state_machine__11242__auto__);
(statearr_27083[(1)] = (1));
return statearr_27083;
});
var state_machine__11242__auto____1 = (function (state_27062){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_27062);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e27084){if((e27084 instanceof Object))
{var ex__11245__auto__ = e27084;var statearr_27085_27098 = state_27062;(statearr_27085_27098[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27062);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27084;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27099 = state_27062;
state_27062 = G__27099;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_27062){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_27062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___27087,out))
})();var state__11299__auto__ = (function (){var statearr_27086 = f__11298__auto__.call(null);(statearr_27086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___27087);
return statearr_27086;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___27087,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___27234 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___27234,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___27234,out){
return (function (state_27204){var state_val_27205 = (state_27204[(1)]);if((state_val_27205 === (7)))
{var inst_27200 = (state_27204[(2)]);var state_27204__$1 = state_27204;var statearr_27206_27235 = state_27204__$1;(statearr_27206_27235[(2)] = inst_27200);
(statearr_27206_27235[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27205 === (1)))
{var inst_27167 = (new Array(n));var inst_27168 = inst_27167;var inst_27169 = (0);var state_27204__$1 = (function (){var statearr_27207 = state_27204;(statearr_27207[(7)] = inst_27168);
(statearr_27207[(8)] = inst_27169);
return statearr_27207;
})();var statearr_27208_27236 = state_27204__$1;(statearr_27208_27236[(2)] = null);
(statearr_27208_27236[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27205 === (4)))
{var inst_27172 = (state_27204[(9)]);var inst_27172__$1 = (state_27204[(2)]);var inst_27173 = (inst_27172__$1 == null);var inst_27174 = cljs.core.not.call(null,inst_27173);var state_27204__$1 = (function (){var statearr_27209 = state_27204;(statearr_27209[(9)] = inst_27172__$1);
return statearr_27209;
})();if(inst_27174)
{var statearr_27210_27237 = state_27204__$1;(statearr_27210_27237[(1)] = (5));
} else
{var statearr_27211_27238 = state_27204__$1;(statearr_27211_27238[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27205 === (15)))
{var inst_27194 = (state_27204[(2)]);var state_27204__$1 = state_27204;var statearr_27212_27239 = state_27204__$1;(statearr_27212_27239[(2)] = inst_27194);
(statearr_27212_27239[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27205 === (13)))
{var state_27204__$1 = state_27204;var statearr_27213_27240 = state_27204__$1;(statearr_27213_27240[(2)] = null);
(statearr_27213_27240[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27205 === (6)))
{var inst_27169 = (state_27204[(8)]);var inst_27190 = (inst_27169 > (0));var state_27204__$1 = state_27204;if(cljs.core.truth_(inst_27190))
{var statearr_27214_27241 = state_27204__$1;(statearr_27214_27241[(1)] = (12));
} else
{var statearr_27215_27242 = state_27204__$1;(statearr_27215_27242[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27205 === (3)))
{var inst_27202 = (state_27204[(2)]);var state_27204__$1 = state_27204;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27204__$1,inst_27202);
} else
{if((state_val_27205 === (12)))
{var inst_27168 = (state_27204[(7)]);var inst_27192 = cljs.core.vec.call(null,inst_27168);var state_27204__$1 = state_27204;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27204__$1,(15),out,inst_27192);
} else
{if((state_val_27205 === (2)))
{var state_27204__$1 = state_27204;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27204__$1,(4),ch);
} else
{if((state_val_27205 === (11)))
{var inst_27184 = (state_27204[(2)]);var inst_27185 = (new Array(n));var inst_27168 = inst_27185;var inst_27169 = (0);var state_27204__$1 = (function (){var statearr_27216 = state_27204;(statearr_27216[(7)] = inst_27168);
(statearr_27216[(8)] = inst_27169);
(statearr_27216[(10)] = inst_27184);
return statearr_27216;
})();var statearr_27217_27243 = state_27204__$1;(statearr_27217_27243[(2)] = null);
(statearr_27217_27243[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27205 === (9)))
{var inst_27168 = (state_27204[(7)]);var inst_27182 = cljs.core.vec.call(null,inst_27168);var state_27204__$1 = state_27204;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27204__$1,(11),out,inst_27182);
} else
{if((state_val_27205 === (5)))
{var inst_27168 = (state_27204[(7)]);var inst_27169 = (state_27204[(8)]);var inst_27177 = (state_27204[(11)]);var inst_27172 = (state_27204[(9)]);var inst_27176 = (inst_27168[inst_27169] = inst_27172);var inst_27177__$1 = (inst_27169 + (1));var inst_27178 = (inst_27177__$1 < n);var state_27204__$1 = (function (){var statearr_27218 = state_27204;(statearr_27218[(12)] = inst_27176);
(statearr_27218[(11)] = inst_27177__$1);
return statearr_27218;
})();if(cljs.core.truth_(inst_27178))
{var statearr_27219_27244 = state_27204__$1;(statearr_27219_27244[(1)] = (8));
} else
{var statearr_27220_27245 = state_27204__$1;(statearr_27220_27245[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27205 === (14)))
{var inst_27197 = (state_27204[(2)]);var inst_27198 = cljs.core.async.close_BANG_.call(null,out);var state_27204__$1 = (function (){var statearr_27222 = state_27204;(statearr_27222[(13)] = inst_27197);
return statearr_27222;
})();var statearr_27223_27246 = state_27204__$1;(statearr_27223_27246[(2)] = inst_27198);
(statearr_27223_27246[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27205 === (10)))
{var inst_27188 = (state_27204[(2)]);var state_27204__$1 = state_27204;var statearr_27224_27247 = state_27204__$1;(statearr_27224_27247[(2)] = inst_27188);
(statearr_27224_27247[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27205 === (8)))
{var inst_27168 = (state_27204[(7)]);var inst_27177 = (state_27204[(11)]);var tmp27221 = inst_27168;var inst_27168__$1 = tmp27221;var inst_27169 = inst_27177;var state_27204__$1 = (function (){var statearr_27225 = state_27204;(statearr_27225[(7)] = inst_27168__$1);
(statearr_27225[(8)] = inst_27169);
return statearr_27225;
})();var statearr_27226_27248 = state_27204__$1;(statearr_27226_27248[(2)] = null);
(statearr_27226_27248[(1)] = (2));
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
});})(c__11297__auto___27234,out))
;return ((function (switch__11241__auto__,c__11297__auto___27234,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_27230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27230[(0)] = state_machine__11242__auto__);
(statearr_27230[(1)] = (1));
return statearr_27230;
});
var state_machine__11242__auto____1 = (function (state_27204){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_27204);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e27231){if((e27231 instanceof Object))
{var ex__11245__auto__ = e27231;var statearr_27232_27249 = state_27204;(statearr_27232_27249[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27204);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27231;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27250 = state_27204;
state_27204 = G__27250;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_27204){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_27204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___27234,out))
})();var state__11299__auto__ = (function (){var statearr_27233 = f__11298__auto__.call(null);(statearr_27233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___27234);
return statearr_27233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___27234,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___27393 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___27393,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___27393,out){
return (function (state_27363){var state_val_27364 = (state_27363[(1)]);if((state_val_27364 === (7)))
{var inst_27359 = (state_27363[(2)]);var state_27363__$1 = state_27363;var statearr_27365_27394 = state_27363__$1;(statearr_27365_27394[(2)] = inst_27359);
(statearr_27365_27394[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27364 === (1)))
{var inst_27322 = [];var inst_27323 = inst_27322;var inst_27324 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_27363__$1 = (function (){var statearr_27366 = state_27363;(statearr_27366[(7)] = inst_27324);
(statearr_27366[(8)] = inst_27323);
return statearr_27366;
})();var statearr_27367_27395 = state_27363__$1;(statearr_27367_27395[(2)] = null);
(statearr_27367_27395[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27364 === (4)))
{var inst_27327 = (state_27363[(9)]);var inst_27327__$1 = (state_27363[(2)]);var inst_27328 = (inst_27327__$1 == null);var inst_27329 = cljs.core.not.call(null,inst_27328);var state_27363__$1 = (function (){var statearr_27368 = state_27363;(statearr_27368[(9)] = inst_27327__$1);
return statearr_27368;
})();if(inst_27329)
{var statearr_27369_27396 = state_27363__$1;(statearr_27369_27396[(1)] = (5));
} else
{var statearr_27370_27397 = state_27363__$1;(statearr_27370_27397[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27364 === (15)))
{var inst_27353 = (state_27363[(2)]);var state_27363__$1 = state_27363;var statearr_27371_27398 = state_27363__$1;(statearr_27371_27398[(2)] = inst_27353);
(statearr_27371_27398[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27364 === (13)))
{var state_27363__$1 = state_27363;var statearr_27372_27399 = state_27363__$1;(statearr_27372_27399[(2)] = null);
(statearr_27372_27399[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27364 === (6)))
{var inst_27323 = (state_27363[(8)]);var inst_27348 = inst_27323.length;var inst_27349 = (inst_27348 > (0));var state_27363__$1 = state_27363;if(cljs.core.truth_(inst_27349))
{var statearr_27373_27400 = state_27363__$1;(statearr_27373_27400[(1)] = (12));
} else
{var statearr_27374_27401 = state_27363__$1;(statearr_27374_27401[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27364 === (3)))
{var inst_27361 = (state_27363[(2)]);var state_27363__$1 = state_27363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27363__$1,inst_27361);
} else
{if((state_val_27364 === (12)))
{var inst_27323 = (state_27363[(8)]);var inst_27351 = cljs.core.vec.call(null,inst_27323);var state_27363__$1 = state_27363;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27363__$1,(15),out,inst_27351);
} else
{if((state_val_27364 === (2)))
{var state_27363__$1 = state_27363;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27363__$1,(4),ch);
} else
{if((state_val_27364 === (11)))
{var inst_27327 = (state_27363[(9)]);var inst_27331 = (state_27363[(10)]);var inst_27341 = (state_27363[(2)]);var inst_27342 = [];var inst_27343 = inst_27342.push(inst_27327);var inst_27323 = inst_27342;var inst_27324 = inst_27331;var state_27363__$1 = (function (){var statearr_27375 = state_27363;(statearr_27375[(11)] = inst_27341);
(statearr_27375[(7)] = inst_27324);
(statearr_27375[(12)] = inst_27343);
(statearr_27375[(8)] = inst_27323);
return statearr_27375;
})();var statearr_27376_27402 = state_27363__$1;(statearr_27376_27402[(2)] = null);
(statearr_27376_27402[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27364 === (9)))
{var inst_27323 = (state_27363[(8)]);var inst_27339 = cljs.core.vec.call(null,inst_27323);var state_27363__$1 = state_27363;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27363__$1,(11),out,inst_27339);
} else
{if((state_val_27364 === (5)))
{var inst_27327 = (state_27363[(9)]);var inst_27331 = (state_27363[(10)]);var inst_27324 = (state_27363[(7)]);var inst_27331__$1 = f.call(null,inst_27327);var inst_27332 = cljs.core._EQ_.call(null,inst_27331__$1,inst_27324);var inst_27333 = cljs.core.keyword_identical_QMARK_.call(null,inst_27324,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_27334 = (inst_27332) || (inst_27333);var state_27363__$1 = (function (){var statearr_27377 = state_27363;(statearr_27377[(10)] = inst_27331__$1);
return statearr_27377;
})();if(cljs.core.truth_(inst_27334))
{var statearr_27378_27403 = state_27363__$1;(statearr_27378_27403[(1)] = (8));
} else
{var statearr_27379_27404 = state_27363__$1;(statearr_27379_27404[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27364 === (14)))
{var inst_27356 = (state_27363[(2)]);var inst_27357 = cljs.core.async.close_BANG_.call(null,out);var state_27363__$1 = (function (){var statearr_27381 = state_27363;(statearr_27381[(13)] = inst_27356);
return statearr_27381;
})();var statearr_27382_27405 = state_27363__$1;(statearr_27382_27405[(2)] = inst_27357);
(statearr_27382_27405[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27364 === (10)))
{var inst_27346 = (state_27363[(2)]);var state_27363__$1 = state_27363;var statearr_27383_27406 = state_27363__$1;(statearr_27383_27406[(2)] = inst_27346);
(statearr_27383_27406[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27364 === (8)))
{var inst_27327 = (state_27363[(9)]);var inst_27331 = (state_27363[(10)]);var inst_27323 = (state_27363[(8)]);var inst_27336 = inst_27323.push(inst_27327);var tmp27380 = inst_27323;var inst_27323__$1 = tmp27380;var inst_27324 = inst_27331;var state_27363__$1 = (function (){var statearr_27384 = state_27363;(statearr_27384[(14)] = inst_27336);
(statearr_27384[(7)] = inst_27324);
(statearr_27384[(8)] = inst_27323__$1);
return statearr_27384;
})();var statearr_27385_27407 = state_27363__$1;(statearr_27385_27407[(2)] = null);
(statearr_27385_27407[(1)] = (2));
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
});})(c__11297__auto___27393,out))
;return ((function (switch__11241__auto__,c__11297__auto___27393,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_27389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27389[(0)] = state_machine__11242__auto__);
(statearr_27389[(1)] = (1));
return statearr_27389;
});
var state_machine__11242__auto____1 = (function (state_27363){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_27363);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e27390){if((e27390 instanceof Object))
{var ex__11245__auto__ = e27390;var statearr_27391_27408 = state_27363;(statearr_27391_27408[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27363);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27390;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27409 = state_27363;
state_27363 = G__27409;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_27363){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_27363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___27393,out))
})();var state__11299__auto__ = (function (){var statearr_27392 = f__11298__auto__.call(null);(statearr_27392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___27393);
return statearr_27392;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___27393,out))
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
