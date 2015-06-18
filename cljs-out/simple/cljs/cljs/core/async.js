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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23388 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23388 = (function (f,fn_handler,meta23389){
this.f = f;
this.fn_handler = fn_handler;
this.meta23389 = meta23389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23388.cljs$lang$type = true;
cljs.core.async.t23388.cljs$lang$ctorStr = "cljs.core.async/t23388";
cljs.core.async.t23388.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23388");
});
cljs.core.async.t23388.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23390){var self__ = this;
var _23390__$1 = this;return self__.meta23389;
});
cljs.core.async.t23388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23390,meta23389__$1){var self__ = this;
var _23390__$1 = this;return (new cljs.core.async.t23388(self__.f,self__.fn_handler,meta23389__$1));
});
cljs.core.async.__GT_t23388 = (function __GT_t23388(f__$1,fn_handler__$1,meta23389){return (new cljs.core.async.t23388(f__$1,fn_handler__$1,meta23389));
});
}
return (new cljs.core.async.t23388(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23392 = buff;if(G__23392)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23392.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23392.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23392);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23392);
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
{var val_23393 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23393);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23393,ret){
return (function (){return fn1.call(null,val_23393);
});})(val_23393,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23394 = n;var x_23395 = (0);while(true){
if((x_23395 < n__4508__auto___23394))
{(a[x_23395] = (0));
{
var G__23396 = (x_23395 + (1));
x_23395 = G__23396;
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
var G__23397 = (i + (1));
i = G__23397;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23401 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23401 = (function (flag,alt_flag,meta23402){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23402 = meta23402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23401.cljs$lang$type = true;
cljs.core.async.t23401.cljs$lang$ctorStr = "cljs.core.async/t23401";
cljs.core.async.t23401.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23401");
});})(flag))
;
cljs.core.async.t23401.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23401.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23403){var self__ = this;
var _23403__$1 = this;return self__.meta23402;
});})(flag))
;
cljs.core.async.t23401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23403,meta23402__$1){var self__ = this;
var _23403__$1 = this;return (new cljs.core.async.t23401(self__.flag,self__.alt_flag,meta23402__$1));
});})(flag))
;
cljs.core.async.__GT_t23401 = ((function (flag){
return (function __GT_t23401(flag__$1,alt_flag__$1,meta23402){return (new cljs.core.async.t23401(flag__$1,alt_flag__$1,meta23402));
});})(flag))
;
}
return (new cljs.core.async.t23401(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23407 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23407 = (function (cb,flag,alt_handler,meta23408){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23408 = meta23408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23407.cljs$lang$type = true;
cljs.core.async.t23407.cljs$lang$ctorStr = "cljs.core.async/t23407";
cljs.core.async.t23407.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23407");
});
cljs.core.async.t23407.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23409){var self__ = this;
var _23409__$1 = this;return self__.meta23408;
});
cljs.core.async.t23407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23409,meta23408__$1){var self__ = this;
var _23409__$1 = this;return (new cljs.core.async.t23407(self__.cb,self__.flag,self__.alt_handler,meta23408__$1));
});
cljs.core.async.__GT_t23407 = (function __GT_t23407(cb__$1,flag__$1,alt_handler__$1,meta23408){return (new cljs.core.async.t23407(cb__$1,flag__$1,alt_handler__$1,meta23408));
});
}
return (new cljs.core.async.t23407(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23410_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23410_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23411_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23411_SHARP_,port], null));
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
var G__23412 = (i + (1));
i = G__23412;
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
var alts_BANG___delegate = function (ports,p__23413){var map__23415 = p__23413;var map__23415__$1 = ((cljs.core.seq_QMARK_.call(null,map__23415))?cljs.core.apply.call(null,cljs.core.hash_map,map__23415):map__23415);var opts = map__23415__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23413 = null;if (arguments.length > 1) {
  p__23413 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23413);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23416){
var ports = cljs.core.first(arglist__23416);
var p__23413 = cljs.core.rest(arglist__23416);
return alts_BANG___delegate(ports,p__23413);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23511 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23511){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23511){
return (function (state_23487){var state_val_23488 = (state_23487[(1)]);if((state_val_23488 === (7)))
{var inst_23483 = (state_23487[(2)]);var state_23487__$1 = state_23487;var statearr_23489_23512 = state_23487__$1;(statearr_23489_23512[(2)] = inst_23483);
(statearr_23489_23512[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23488 === (1)))
{var state_23487__$1 = state_23487;var statearr_23490_23513 = state_23487__$1;(statearr_23490_23513[(2)] = null);
(statearr_23490_23513[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23488 === (4)))
{var inst_23466 = (state_23487[(7)]);var inst_23466__$1 = (state_23487[(2)]);var inst_23467 = (inst_23466__$1 == null);var state_23487__$1 = (function (){var statearr_23491 = state_23487;(statearr_23491[(7)] = inst_23466__$1);
return statearr_23491;
})();if(cljs.core.truth_(inst_23467))
{var statearr_23492_23514 = state_23487__$1;(statearr_23492_23514[(1)] = (5));
} else
{var statearr_23493_23515 = state_23487__$1;(statearr_23493_23515[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23488 === (13)))
{var state_23487__$1 = state_23487;var statearr_23494_23516 = state_23487__$1;(statearr_23494_23516[(2)] = null);
(statearr_23494_23516[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23488 === (6)))
{var inst_23466 = (state_23487[(7)]);var state_23487__$1 = state_23487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23487__$1,(11),to,inst_23466);
} else
{if((state_val_23488 === (3)))
{var inst_23485 = (state_23487[(2)]);var state_23487__$1 = state_23487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23487__$1,inst_23485);
} else
{if((state_val_23488 === (12)))
{var state_23487__$1 = state_23487;var statearr_23495_23517 = state_23487__$1;(statearr_23495_23517[(2)] = null);
(statearr_23495_23517[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23488 === (2)))
{var state_23487__$1 = state_23487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23487__$1,(4),from);
} else
{if((state_val_23488 === (11)))
{var inst_23476 = (state_23487[(2)]);var state_23487__$1 = state_23487;if(cljs.core.truth_(inst_23476))
{var statearr_23496_23518 = state_23487__$1;(statearr_23496_23518[(1)] = (12));
} else
{var statearr_23497_23519 = state_23487__$1;(statearr_23497_23519[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23488 === (9)))
{var state_23487__$1 = state_23487;var statearr_23498_23520 = state_23487__$1;(statearr_23498_23520[(2)] = null);
(statearr_23498_23520[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23488 === (5)))
{var state_23487__$1 = state_23487;if(cljs.core.truth_(close_QMARK_))
{var statearr_23499_23521 = state_23487__$1;(statearr_23499_23521[(1)] = (8));
} else
{var statearr_23500_23522 = state_23487__$1;(statearr_23500_23522[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23488 === (14)))
{var inst_23481 = (state_23487[(2)]);var state_23487__$1 = state_23487;var statearr_23501_23523 = state_23487__$1;(statearr_23501_23523[(2)] = inst_23481);
(statearr_23501_23523[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23488 === (10)))
{var inst_23473 = (state_23487[(2)]);var state_23487__$1 = state_23487;var statearr_23502_23524 = state_23487__$1;(statearr_23502_23524[(2)] = inst_23473);
(statearr_23502_23524[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23488 === (8)))
{var inst_23470 = cljs.core.async.close_BANG_.call(null,to);var state_23487__$1 = state_23487;var statearr_23503_23525 = state_23487__$1;(statearr_23503_23525[(2)] = inst_23470);
(statearr_23503_23525[(1)] = (10));
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
});})(c__9125__auto___23511))
;return ((function (switch__9110__auto__,c__9125__auto___23511){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23507 = [null,null,null,null,null,null,null,null];(statearr_23507[(0)] = state_machine__9111__auto__);
(statearr_23507[(1)] = (1));
return statearr_23507;
});
var state_machine__9111__auto____1 = (function (state_23487){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23487);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23508){if((e23508 instanceof Object))
{var ex__9114__auto__ = e23508;var statearr_23509_23526 = state_23487;(statearr_23509_23526[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23487);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23508;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23527 = state_23487;
state_23487 = G__23527;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23487){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23511))
})();var state__9127__auto__ = (function (){var statearr_23510 = f__9126__auto__.call(null);(statearr_23510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23511);
return statearr_23510;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23511))
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
return (function (p__23711){var vec__23712 = p__23711;var v = cljs.core.nth.call(null,vec__23712,(0),null);var p = cljs.core.nth.call(null,vec__23712,(1),null);var job = vec__23712;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___23894 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23894,res,vec__23712,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23894,res,vec__23712,v,p,job,jobs,results){
return (function (state_23717){var state_val_23718 = (state_23717[(1)]);if((state_val_23718 === (2)))
{var inst_23714 = (state_23717[(2)]);var inst_23715 = cljs.core.async.close_BANG_.call(null,res);var state_23717__$1 = (function (){var statearr_23719 = state_23717;(statearr_23719[(7)] = inst_23714);
return statearr_23719;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23717__$1,inst_23715);
} else
{if((state_val_23718 === (1)))
{var state_23717__$1 = state_23717;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23717__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___23894,res,vec__23712,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___23894,res,vec__23712,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23723 = [null,null,null,null,null,null,null,null];(statearr_23723[(0)] = state_machine__9111__auto__);
(statearr_23723[(1)] = (1));
return statearr_23723;
});
var state_machine__9111__auto____1 = (function (state_23717){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23717);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23724){if((e23724 instanceof Object))
{var ex__9114__auto__ = e23724;var statearr_23725_23895 = state_23717;(statearr_23725_23895[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23717);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23724;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23896 = state_23717;
state_23717 = G__23896;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23717){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23894,res,vec__23712,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23726 = f__9126__auto__.call(null);(statearr_23726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23894);
return statearr_23726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23894,res,vec__23712,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23727){var vec__23728 = p__23727;var v = cljs.core.nth.call(null,vec__23728,(0),null);var p = cljs.core.nth.call(null,vec__23728,(1),null);var job = vec__23728;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___23897 = n;var __23898 = (0);while(true){
if((__23898 < n__4508__auto___23897))
{var G__23729_23899 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23729_23899) {
case "async":
var c__9125__auto___23901 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23898,c__9125__auto___23901,G__23729_23899,n__4508__auto___23897,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23898,c__9125__auto___23901,G__23729_23899,n__4508__auto___23897,jobs,results,process,async){
return (function (state_23742){var state_val_23743 = (state_23742[(1)]);if((state_val_23743 === (7)))
{var inst_23738 = (state_23742[(2)]);var state_23742__$1 = state_23742;var statearr_23744_23902 = state_23742__$1;(statearr_23744_23902[(2)] = inst_23738);
(statearr_23744_23902[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23743 === (6)))
{var state_23742__$1 = state_23742;var statearr_23745_23903 = state_23742__$1;(statearr_23745_23903[(2)] = null);
(statearr_23745_23903[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23743 === (5)))
{var state_23742__$1 = state_23742;var statearr_23746_23904 = state_23742__$1;(statearr_23746_23904[(2)] = null);
(statearr_23746_23904[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23743 === (4)))
{var inst_23732 = (state_23742[(2)]);var inst_23733 = async.call(null,inst_23732);var state_23742__$1 = state_23742;if(cljs.core.truth_(inst_23733))
{var statearr_23747_23905 = state_23742__$1;(statearr_23747_23905[(1)] = (5));
} else
{var statearr_23748_23906 = state_23742__$1;(statearr_23748_23906[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23743 === (3)))
{var inst_23740 = (state_23742[(2)]);var state_23742__$1 = state_23742;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23742__$1,inst_23740);
} else
{if((state_val_23743 === (2)))
{var state_23742__$1 = state_23742;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23742__$1,(4),jobs);
} else
{if((state_val_23743 === (1)))
{var state_23742__$1 = state_23742;var statearr_23749_23907 = state_23742__$1;(statearr_23749_23907[(2)] = null);
(statearr_23749_23907[(1)] = (2));
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
});})(__23898,c__9125__auto___23901,G__23729_23899,n__4508__auto___23897,jobs,results,process,async))
;return ((function (__23898,switch__9110__auto__,c__9125__auto___23901,G__23729_23899,n__4508__auto___23897,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23753 = [null,null,null,null,null,null,null];(statearr_23753[(0)] = state_machine__9111__auto__);
(statearr_23753[(1)] = (1));
return statearr_23753;
});
var state_machine__9111__auto____1 = (function (state_23742){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23742);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23754){if((e23754 instanceof Object))
{var ex__9114__auto__ = e23754;var statearr_23755_23908 = state_23742;(statearr_23755_23908[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23742);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23754;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23909 = state_23742;
state_23742 = G__23909;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23742){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23898,switch__9110__auto__,c__9125__auto___23901,G__23729_23899,n__4508__auto___23897,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23756 = f__9126__auto__.call(null);(statearr_23756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23901);
return statearr_23756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23898,c__9125__auto___23901,G__23729_23899,n__4508__auto___23897,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___23910 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23898,c__9125__auto___23910,G__23729_23899,n__4508__auto___23897,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23898,c__9125__auto___23910,G__23729_23899,n__4508__auto___23897,jobs,results,process,async){
return (function (state_23769){var state_val_23770 = (state_23769[(1)]);if((state_val_23770 === (7)))
{var inst_23765 = (state_23769[(2)]);var state_23769__$1 = state_23769;var statearr_23771_23911 = state_23769__$1;(statearr_23771_23911[(2)] = inst_23765);
(statearr_23771_23911[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (6)))
{var state_23769__$1 = state_23769;var statearr_23772_23912 = state_23769__$1;(statearr_23772_23912[(2)] = null);
(statearr_23772_23912[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (5)))
{var state_23769__$1 = state_23769;var statearr_23773_23913 = state_23769__$1;(statearr_23773_23913[(2)] = null);
(statearr_23773_23913[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (4)))
{var inst_23759 = (state_23769[(2)]);var inst_23760 = process.call(null,inst_23759);var state_23769__$1 = state_23769;if(cljs.core.truth_(inst_23760))
{var statearr_23774_23914 = state_23769__$1;(statearr_23774_23914[(1)] = (5));
} else
{var statearr_23775_23915 = state_23769__$1;(statearr_23775_23915[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (3)))
{var inst_23767 = (state_23769[(2)]);var state_23769__$1 = state_23769;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23769__$1,inst_23767);
} else
{if((state_val_23770 === (2)))
{var state_23769__$1 = state_23769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23769__$1,(4),jobs);
} else
{if((state_val_23770 === (1)))
{var state_23769__$1 = state_23769;var statearr_23776_23916 = state_23769__$1;(statearr_23776_23916[(2)] = null);
(statearr_23776_23916[(1)] = (2));
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
});})(__23898,c__9125__auto___23910,G__23729_23899,n__4508__auto___23897,jobs,results,process,async))
;return ((function (__23898,switch__9110__auto__,c__9125__auto___23910,G__23729_23899,n__4508__auto___23897,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23780 = [null,null,null,null,null,null,null];(statearr_23780[(0)] = state_machine__9111__auto__);
(statearr_23780[(1)] = (1));
return statearr_23780;
});
var state_machine__9111__auto____1 = (function (state_23769){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23769);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23781){if((e23781 instanceof Object))
{var ex__9114__auto__ = e23781;var statearr_23782_23917 = state_23769;(statearr_23782_23917[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23769);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23781;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23918 = state_23769;
state_23769 = G__23918;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23769){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23898,switch__9110__auto__,c__9125__auto___23910,G__23729_23899,n__4508__auto___23897,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23783 = f__9126__auto__.call(null);(statearr_23783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23910);
return statearr_23783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23898,c__9125__auto___23910,G__23729_23899,n__4508__auto___23897,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__23919 = (__23898 + (1));
__23898 = G__23919;
continue;
}
} else
{}
break;
}
var c__9125__auto___23920 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23920,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23920,jobs,results,process,async){
return (function (state_23805){var state_val_23806 = (state_23805[(1)]);if((state_val_23806 === (9)))
{var inst_23798 = (state_23805[(2)]);var state_23805__$1 = (function (){var statearr_23807 = state_23805;(statearr_23807[(7)] = inst_23798);
return statearr_23807;
})();var statearr_23808_23921 = state_23805__$1;(statearr_23808_23921[(2)] = null);
(statearr_23808_23921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23806 === (8)))
{var inst_23791 = (state_23805[(8)]);var inst_23796 = (state_23805[(2)]);var state_23805__$1 = (function (){var statearr_23809 = state_23805;(statearr_23809[(9)] = inst_23796);
return statearr_23809;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23805__$1,(9),results,inst_23791);
} else
{if((state_val_23806 === (7)))
{var inst_23801 = (state_23805[(2)]);var state_23805__$1 = state_23805;var statearr_23810_23922 = state_23805__$1;(statearr_23810_23922[(2)] = inst_23801);
(statearr_23810_23922[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23806 === (6)))
{var inst_23791 = (state_23805[(8)]);var inst_23786 = (state_23805[(10)]);var inst_23791__$1 = cljs.core.async.chan.call(null,(1));var inst_23792 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23793 = [inst_23786,inst_23791__$1];var inst_23794 = (new cljs.core.PersistentVector(null,2,(5),inst_23792,inst_23793,null));var state_23805__$1 = (function (){var statearr_23811 = state_23805;(statearr_23811[(8)] = inst_23791__$1);
return statearr_23811;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23805__$1,(8),jobs,inst_23794);
} else
{if((state_val_23806 === (5)))
{var inst_23789 = cljs.core.async.close_BANG_.call(null,jobs);var state_23805__$1 = state_23805;var statearr_23812_23923 = state_23805__$1;(statearr_23812_23923[(2)] = inst_23789);
(statearr_23812_23923[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23806 === (4)))
{var inst_23786 = (state_23805[(10)]);var inst_23786__$1 = (state_23805[(2)]);var inst_23787 = (inst_23786__$1 == null);var state_23805__$1 = (function (){var statearr_23813 = state_23805;(statearr_23813[(10)] = inst_23786__$1);
return statearr_23813;
})();if(cljs.core.truth_(inst_23787))
{var statearr_23814_23924 = state_23805__$1;(statearr_23814_23924[(1)] = (5));
} else
{var statearr_23815_23925 = state_23805__$1;(statearr_23815_23925[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23806 === (3)))
{var inst_23803 = (state_23805[(2)]);var state_23805__$1 = state_23805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23805__$1,inst_23803);
} else
{if((state_val_23806 === (2)))
{var state_23805__$1 = state_23805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23805__$1,(4),from);
} else
{if((state_val_23806 === (1)))
{var state_23805__$1 = state_23805;var statearr_23816_23926 = state_23805__$1;(statearr_23816_23926[(2)] = null);
(statearr_23816_23926[(1)] = (2));
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
});})(c__9125__auto___23920,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___23920,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23820 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23820[(0)] = state_machine__9111__auto__);
(statearr_23820[(1)] = (1));
return statearr_23820;
});
var state_machine__9111__auto____1 = (function (state_23805){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23805);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23821){if((e23821 instanceof Object))
{var ex__9114__auto__ = e23821;var statearr_23822_23927 = state_23805;(statearr_23822_23927[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23805);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23821;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23928 = state_23805;
state_23805 = G__23928;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23805){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23920,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23823 = f__9126__auto__.call(null);(statearr_23823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23920);
return statearr_23823;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23920,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23861){var state_val_23862 = (state_23861[(1)]);if((state_val_23862 === (7)))
{var inst_23857 = (state_23861[(2)]);var state_23861__$1 = state_23861;var statearr_23863_23929 = state_23861__$1;(statearr_23863_23929[(2)] = inst_23857);
(statearr_23863_23929[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23862 === (20)))
{var state_23861__$1 = state_23861;var statearr_23864_23930 = state_23861__$1;(statearr_23864_23930[(2)] = null);
(statearr_23864_23930[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23862 === (1)))
{var state_23861__$1 = state_23861;var statearr_23865_23931 = state_23861__$1;(statearr_23865_23931[(2)] = null);
(statearr_23865_23931[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23862 === (4)))
{var inst_23826 = (state_23861[(7)]);var inst_23826__$1 = (state_23861[(2)]);var inst_23827 = (inst_23826__$1 == null);var state_23861__$1 = (function (){var statearr_23866 = state_23861;(statearr_23866[(7)] = inst_23826__$1);
return statearr_23866;
})();if(cljs.core.truth_(inst_23827))
{var statearr_23867_23932 = state_23861__$1;(statearr_23867_23932[(1)] = (5));
} else
{var statearr_23868_23933 = state_23861__$1;(statearr_23868_23933[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23862 === (15)))
{var inst_23839 = (state_23861[(8)]);var state_23861__$1 = state_23861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23861__$1,(18),to,inst_23839);
} else
{if((state_val_23862 === (21)))
{var inst_23852 = (state_23861[(2)]);var state_23861__$1 = state_23861;var statearr_23869_23934 = state_23861__$1;(statearr_23869_23934[(2)] = inst_23852);
(statearr_23869_23934[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23862 === (13)))
{var inst_23854 = (state_23861[(2)]);var state_23861__$1 = (function (){var statearr_23870 = state_23861;(statearr_23870[(9)] = inst_23854);
return statearr_23870;
})();var statearr_23871_23935 = state_23861__$1;(statearr_23871_23935[(2)] = null);
(statearr_23871_23935[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23862 === (6)))
{var inst_23826 = (state_23861[(7)]);var state_23861__$1 = state_23861;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23861__$1,(11),inst_23826);
} else
{if((state_val_23862 === (17)))
{var inst_23847 = (state_23861[(2)]);var state_23861__$1 = state_23861;if(cljs.core.truth_(inst_23847))
{var statearr_23872_23936 = state_23861__$1;(statearr_23872_23936[(1)] = (19));
} else
{var statearr_23873_23937 = state_23861__$1;(statearr_23873_23937[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23862 === (3)))
{var inst_23859 = (state_23861[(2)]);var state_23861__$1 = state_23861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23861__$1,inst_23859);
} else
{if((state_val_23862 === (12)))
{var inst_23836 = (state_23861[(10)]);var state_23861__$1 = state_23861;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23861__$1,(14),inst_23836);
} else
{if((state_val_23862 === (2)))
{var state_23861__$1 = state_23861;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23861__$1,(4),results);
} else
{if((state_val_23862 === (19)))
{var state_23861__$1 = state_23861;var statearr_23874_23938 = state_23861__$1;(statearr_23874_23938[(2)] = null);
(statearr_23874_23938[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23862 === (11)))
{var inst_23836 = (state_23861[(2)]);var state_23861__$1 = (function (){var statearr_23875 = state_23861;(statearr_23875[(10)] = inst_23836);
return statearr_23875;
})();var statearr_23876_23939 = state_23861__$1;(statearr_23876_23939[(2)] = null);
(statearr_23876_23939[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23862 === (9)))
{var state_23861__$1 = state_23861;var statearr_23877_23940 = state_23861__$1;(statearr_23877_23940[(2)] = null);
(statearr_23877_23940[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23862 === (5)))
{var state_23861__$1 = state_23861;if(cljs.core.truth_(close_QMARK_))
{var statearr_23878_23941 = state_23861__$1;(statearr_23878_23941[(1)] = (8));
} else
{var statearr_23879_23942 = state_23861__$1;(statearr_23879_23942[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23862 === (14)))
{var inst_23839 = (state_23861[(8)]);var inst_23841 = (state_23861[(11)]);var inst_23839__$1 = (state_23861[(2)]);var inst_23840 = (inst_23839__$1 == null);var inst_23841__$1 = cljs.core.not.call(null,inst_23840);var state_23861__$1 = (function (){var statearr_23880 = state_23861;(statearr_23880[(8)] = inst_23839__$1);
(statearr_23880[(11)] = inst_23841__$1);
return statearr_23880;
})();if(inst_23841__$1)
{var statearr_23881_23943 = state_23861__$1;(statearr_23881_23943[(1)] = (15));
} else
{var statearr_23882_23944 = state_23861__$1;(statearr_23882_23944[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23862 === (16)))
{var inst_23841 = (state_23861[(11)]);var state_23861__$1 = state_23861;var statearr_23883_23945 = state_23861__$1;(statearr_23883_23945[(2)] = inst_23841);
(statearr_23883_23945[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23862 === (10)))
{var inst_23833 = (state_23861[(2)]);var state_23861__$1 = state_23861;var statearr_23884_23946 = state_23861__$1;(statearr_23884_23946[(2)] = inst_23833);
(statearr_23884_23946[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23862 === (18)))
{var inst_23844 = (state_23861[(2)]);var state_23861__$1 = state_23861;var statearr_23885_23947 = state_23861__$1;(statearr_23885_23947[(2)] = inst_23844);
(statearr_23885_23947[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23862 === (8)))
{var inst_23830 = cljs.core.async.close_BANG_.call(null,to);var state_23861__$1 = state_23861;var statearr_23886_23948 = state_23861__$1;(statearr_23886_23948[(2)] = inst_23830);
(statearr_23886_23948[(1)] = (10));
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
var state_machine__9111__auto____0 = (function (){var statearr_23890 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23890[(0)] = state_machine__9111__auto__);
(statearr_23890[(1)] = (1));
return statearr_23890;
});
var state_machine__9111__auto____1 = (function (state_23861){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23861);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23891){if((e23891 instanceof Object))
{var ex__9114__auto__ = e23891;var statearr_23892_23949 = state_23861;(statearr_23892_23949[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23861);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23891;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23950 = state_23861;
state_23861 = G__23950;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23861){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23893 = f__9126__auto__.call(null);(statearr_23893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23893;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___24051 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24051,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24051,tc,fc){
return (function (state_24026){var state_val_24027 = (state_24026[(1)]);if((state_val_24027 === (7)))
{var inst_24022 = (state_24026[(2)]);var state_24026__$1 = state_24026;var statearr_24028_24052 = state_24026__$1;(statearr_24028_24052[(2)] = inst_24022);
(statearr_24028_24052[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24027 === (1)))
{var state_24026__$1 = state_24026;var statearr_24029_24053 = state_24026__$1;(statearr_24029_24053[(2)] = null);
(statearr_24029_24053[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24027 === (4)))
{var inst_24003 = (state_24026[(7)]);var inst_24003__$1 = (state_24026[(2)]);var inst_24004 = (inst_24003__$1 == null);var state_24026__$1 = (function (){var statearr_24030 = state_24026;(statearr_24030[(7)] = inst_24003__$1);
return statearr_24030;
})();if(cljs.core.truth_(inst_24004))
{var statearr_24031_24054 = state_24026__$1;(statearr_24031_24054[(1)] = (5));
} else
{var statearr_24032_24055 = state_24026__$1;(statearr_24032_24055[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24027 === (13)))
{var state_24026__$1 = state_24026;var statearr_24033_24056 = state_24026__$1;(statearr_24033_24056[(2)] = null);
(statearr_24033_24056[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24027 === (6)))
{var inst_24003 = (state_24026[(7)]);var inst_24009 = p.call(null,inst_24003);var state_24026__$1 = state_24026;if(cljs.core.truth_(inst_24009))
{var statearr_24034_24057 = state_24026__$1;(statearr_24034_24057[(1)] = (9));
} else
{var statearr_24035_24058 = state_24026__$1;(statearr_24035_24058[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24027 === (3)))
{var inst_24024 = (state_24026[(2)]);var state_24026__$1 = state_24026;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24026__$1,inst_24024);
} else
{if((state_val_24027 === (12)))
{var state_24026__$1 = state_24026;var statearr_24036_24059 = state_24026__$1;(statearr_24036_24059[(2)] = null);
(statearr_24036_24059[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24027 === (2)))
{var state_24026__$1 = state_24026;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24026__$1,(4),ch);
} else
{if((state_val_24027 === (11)))
{var inst_24003 = (state_24026[(7)]);var inst_24013 = (state_24026[(2)]);var state_24026__$1 = state_24026;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24026__$1,(8),inst_24013,inst_24003);
} else
{if((state_val_24027 === (9)))
{var state_24026__$1 = state_24026;var statearr_24037_24060 = state_24026__$1;(statearr_24037_24060[(2)] = tc);
(statearr_24037_24060[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24027 === (5)))
{var inst_24006 = cljs.core.async.close_BANG_.call(null,tc);var inst_24007 = cljs.core.async.close_BANG_.call(null,fc);var state_24026__$1 = (function (){var statearr_24038 = state_24026;(statearr_24038[(8)] = inst_24006);
return statearr_24038;
})();var statearr_24039_24061 = state_24026__$1;(statearr_24039_24061[(2)] = inst_24007);
(statearr_24039_24061[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24027 === (14)))
{var inst_24020 = (state_24026[(2)]);var state_24026__$1 = state_24026;var statearr_24040_24062 = state_24026__$1;(statearr_24040_24062[(2)] = inst_24020);
(statearr_24040_24062[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24027 === (10)))
{var state_24026__$1 = state_24026;var statearr_24041_24063 = state_24026__$1;(statearr_24041_24063[(2)] = fc);
(statearr_24041_24063[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24027 === (8)))
{var inst_24015 = (state_24026[(2)]);var state_24026__$1 = state_24026;if(cljs.core.truth_(inst_24015))
{var statearr_24042_24064 = state_24026__$1;(statearr_24042_24064[(1)] = (12));
} else
{var statearr_24043_24065 = state_24026__$1;(statearr_24043_24065[(1)] = (13));
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
});})(c__9125__auto___24051,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___24051,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24047 = [null,null,null,null,null,null,null,null,null];(statearr_24047[(0)] = state_machine__9111__auto__);
(statearr_24047[(1)] = (1));
return statearr_24047;
});
var state_machine__9111__auto____1 = (function (state_24026){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24026);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24048){if((e24048 instanceof Object))
{var ex__9114__auto__ = e24048;var statearr_24049_24066 = state_24026;(statearr_24049_24066[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24026);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24048;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24067 = state_24026;
state_24026 = G__24067;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24026){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24051,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_24050 = f__9126__auto__.call(null);(statearr_24050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24051);
return statearr_24050;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24051,tc,fc))
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
return (function (state_24114){var state_val_24115 = (state_24114[(1)]);if((state_val_24115 === (7)))
{var inst_24110 = (state_24114[(2)]);var state_24114__$1 = state_24114;var statearr_24116_24132 = state_24114__$1;(statearr_24116_24132[(2)] = inst_24110);
(statearr_24116_24132[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24115 === (6)))
{var inst_24103 = (state_24114[(7)]);var inst_24100 = (state_24114[(8)]);var inst_24107 = f.call(null,inst_24100,inst_24103);var inst_24100__$1 = inst_24107;var state_24114__$1 = (function (){var statearr_24117 = state_24114;(statearr_24117[(8)] = inst_24100__$1);
return statearr_24117;
})();var statearr_24118_24133 = state_24114__$1;(statearr_24118_24133[(2)] = null);
(statearr_24118_24133[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24115 === (5)))
{var inst_24100 = (state_24114[(8)]);var state_24114__$1 = state_24114;var statearr_24119_24134 = state_24114__$1;(statearr_24119_24134[(2)] = inst_24100);
(statearr_24119_24134[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24115 === (4)))
{var inst_24103 = (state_24114[(7)]);var inst_24103__$1 = (state_24114[(2)]);var inst_24104 = (inst_24103__$1 == null);var state_24114__$1 = (function (){var statearr_24120 = state_24114;(statearr_24120[(7)] = inst_24103__$1);
return statearr_24120;
})();if(cljs.core.truth_(inst_24104))
{var statearr_24121_24135 = state_24114__$1;(statearr_24121_24135[(1)] = (5));
} else
{var statearr_24122_24136 = state_24114__$1;(statearr_24122_24136[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24115 === (3)))
{var inst_24112 = (state_24114[(2)]);var state_24114__$1 = state_24114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24114__$1,inst_24112);
} else
{if((state_val_24115 === (2)))
{var state_24114__$1 = state_24114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24114__$1,(4),ch);
} else
{if((state_val_24115 === (1)))
{var inst_24100 = init;var state_24114__$1 = (function (){var statearr_24123 = state_24114;(statearr_24123[(8)] = inst_24100);
return statearr_24123;
})();var statearr_24124_24137 = state_24114__$1;(statearr_24124_24137[(2)] = null);
(statearr_24124_24137[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24128 = [null,null,null,null,null,null,null,null,null];(statearr_24128[(0)] = state_machine__9111__auto__);
(statearr_24128[(1)] = (1));
return statearr_24128;
});
var state_machine__9111__auto____1 = (function (state_24114){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24114);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24129){if((e24129 instanceof Object))
{var ex__9114__auto__ = e24129;var statearr_24130_24138 = state_24114;(statearr_24130_24138[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24114);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24129;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24139 = state_24114;
state_24114 = G__24139;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24114){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24131 = f__9126__auto__.call(null);(statearr_24131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24131;
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
return (function (state_24213){var state_val_24214 = (state_24213[(1)]);if((state_val_24214 === (7)))
{var inst_24195 = (state_24213[(2)]);var state_24213__$1 = state_24213;var statearr_24215_24238 = state_24213__$1;(statearr_24215_24238[(2)] = inst_24195);
(statearr_24215_24238[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24214 === (1)))
{var inst_24189 = cljs.core.seq.call(null,coll);var inst_24190 = inst_24189;var state_24213__$1 = (function (){var statearr_24216 = state_24213;(statearr_24216[(7)] = inst_24190);
return statearr_24216;
})();var statearr_24217_24239 = state_24213__$1;(statearr_24217_24239[(2)] = null);
(statearr_24217_24239[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24214 === (4)))
{var inst_24190 = (state_24213[(7)]);var inst_24193 = cljs.core.first.call(null,inst_24190);var state_24213__$1 = state_24213;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24213__$1,(7),ch,inst_24193);
} else
{if((state_val_24214 === (13)))
{var inst_24207 = (state_24213[(2)]);var state_24213__$1 = state_24213;var statearr_24218_24240 = state_24213__$1;(statearr_24218_24240[(2)] = inst_24207);
(statearr_24218_24240[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24214 === (6)))
{var inst_24198 = (state_24213[(2)]);var state_24213__$1 = state_24213;if(cljs.core.truth_(inst_24198))
{var statearr_24219_24241 = state_24213__$1;(statearr_24219_24241[(1)] = (8));
} else
{var statearr_24220_24242 = state_24213__$1;(statearr_24220_24242[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24214 === (3)))
{var inst_24211 = (state_24213[(2)]);var state_24213__$1 = state_24213;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24213__$1,inst_24211);
} else
{if((state_val_24214 === (12)))
{var state_24213__$1 = state_24213;var statearr_24221_24243 = state_24213__$1;(statearr_24221_24243[(2)] = null);
(statearr_24221_24243[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24214 === (2)))
{var inst_24190 = (state_24213[(7)]);var state_24213__$1 = state_24213;if(cljs.core.truth_(inst_24190))
{var statearr_24222_24244 = state_24213__$1;(statearr_24222_24244[(1)] = (4));
} else
{var statearr_24223_24245 = state_24213__$1;(statearr_24223_24245[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24214 === (11)))
{var inst_24204 = cljs.core.async.close_BANG_.call(null,ch);var state_24213__$1 = state_24213;var statearr_24224_24246 = state_24213__$1;(statearr_24224_24246[(2)] = inst_24204);
(statearr_24224_24246[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24214 === (9)))
{var state_24213__$1 = state_24213;if(cljs.core.truth_(close_QMARK_))
{var statearr_24225_24247 = state_24213__$1;(statearr_24225_24247[(1)] = (11));
} else
{var statearr_24226_24248 = state_24213__$1;(statearr_24226_24248[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24214 === (5)))
{var inst_24190 = (state_24213[(7)]);var state_24213__$1 = state_24213;var statearr_24227_24249 = state_24213__$1;(statearr_24227_24249[(2)] = inst_24190);
(statearr_24227_24249[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24214 === (10)))
{var inst_24209 = (state_24213[(2)]);var state_24213__$1 = state_24213;var statearr_24228_24250 = state_24213__$1;(statearr_24228_24250[(2)] = inst_24209);
(statearr_24228_24250[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24214 === (8)))
{var inst_24190 = (state_24213[(7)]);var inst_24200 = cljs.core.next.call(null,inst_24190);var inst_24190__$1 = inst_24200;var state_24213__$1 = (function (){var statearr_24229 = state_24213;(statearr_24229[(7)] = inst_24190__$1);
return statearr_24229;
})();var statearr_24230_24251 = state_24213__$1;(statearr_24230_24251[(2)] = null);
(statearr_24230_24251[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24234 = [null,null,null,null,null,null,null,null];(statearr_24234[(0)] = state_machine__9111__auto__);
(statearr_24234[(1)] = (1));
return statearr_24234;
});
var state_machine__9111__auto____1 = (function (state_24213){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24213);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24235){if((e24235 instanceof Object))
{var ex__9114__auto__ = e24235;var statearr_24236_24252 = state_24213;(statearr_24236_24252[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24213);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24235;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24253 = state_24213;
state_24213 = G__24253;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24213){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24237 = f__9126__auto__.call(null);(statearr_24237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24237;
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
cljs.core.async.Mux = (function (){var obj24255 = {};return obj24255;
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
cljs.core.async.Mult = (function (){var obj24257 = {};return obj24257;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24479 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24479 = (function (cs,ch,mult,meta24480){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24480 = meta24480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24479.cljs$lang$type = true;
cljs.core.async.t24479.cljs$lang$ctorStr = "cljs.core.async/t24479";
cljs.core.async.t24479.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24479");
});})(cs))
;
cljs.core.async.t24479.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24479.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24479.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24479.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24479.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24479.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24481){var self__ = this;
var _24481__$1 = this;return self__.meta24480;
});})(cs))
;
cljs.core.async.t24479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24481,meta24480__$1){var self__ = this;
var _24481__$1 = this;return (new cljs.core.async.t24479(self__.cs,self__.ch,self__.mult,meta24480__$1));
});})(cs))
;
cljs.core.async.__GT_t24479 = ((function (cs){
return (function __GT_t24479(cs__$1,ch__$1,mult__$1,meta24480){return (new cljs.core.async.t24479(cs__$1,ch__$1,mult__$1,meta24480));
});})(cs))
;
}
return (new cljs.core.async.t24479(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24700 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24700,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24700,cs,m,dchan,dctr,done){
return (function (state_24612){var state_val_24613 = (state_24612[(1)]);if((state_val_24613 === (7)))
{var inst_24608 = (state_24612[(2)]);var state_24612__$1 = state_24612;var statearr_24614_24701 = state_24612__$1;(statearr_24614_24701[(2)] = inst_24608);
(statearr_24614_24701[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (20)))
{var inst_24513 = (state_24612[(7)]);var inst_24523 = cljs.core.first.call(null,inst_24513);var inst_24524 = cljs.core.nth.call(null,inst_24523,(0),null);var inst_24525 = cljs.core.nth.call(null,inst_24523,(1),null);var state_24612__$1 = (function (){var statearr_24615 = state_24612;(statearr_24615[(8)] = inst_24524);
return statearr_24615;
})();if(cljs.core.truth_(inst_24525))
{var statearr_24616_24702 = state_24612__$1;(statearr_24616_24702[(1)] = (22));
} else
{var statearr_24617_24703 = state_24612__$1;(statearr_24617_24703[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (27)))
{var inst_24484 = (state_24612[(9)]);var inst_24553 = (state_24612[(10)]);var inst_24560 = (state_24612[(11)]);var inst_24555 = (state_24612[(12)]);var inst_24560__$1 = cljs.core._nth.call(null,inst_24553,inst_24555);var inst_24561 = cljs.core.async.put_BANG_.call(null,inst_24560__$1,inst_24484,done);var state_24612__$1 = (function (){var statearr_24618 = state_24612;(statearr_24618[(11)] = inst_24560__$1);
return statearr_24618;
})();if(cljs.core.truth_(inst_24561))
{var statearr_24619_24704 = state_24612__$1;(statearr_24619_24704[(1)] = (30));
} else
{var statearr_24620_24705 = state_24612__$1;(statearr_24620_24705[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (1)))
{var state_24612__$1 = state_24612;var statearr_24621_24706 = state_24612__$1;(statearr_24621_24706[(2)] = null);
(statearr_24621_24706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (24)))
{var inst_24513 = (state_24612[(7)]);var inst_24530 = (state_24612[(2)]);var inst_24531 = cljs.core.next.call(null,inst_24513);var inst_24493 = inst_24531;var inst_24494 = null;var inst_24495 = (0);var inst_24496 = (0);var state_24612__$1 = (function (){var statearr_24622 = state_24612;(statearr_24622[(13)] = inst_24496);
(statearr_24622[(14)] = inst_24494);
(statearr_24622[(15)] = inst_24495);
(statearr_24622[(16)] = inst_24530);
(statearr_24622[(17)] = inst_24493);
return statearr_24622;
})();var statearr_24623_24707 = state_24612__$1;(statearr_24623_24707[(2)] = null);
(statearr_24623_24707[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (39)))
{var state_24612__$1 = state_24612;var statearr_24627_24708 = state_24612__$1;(statearr_24627_24708[(2)] = null);
(statearr_24627_24708[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (4)))
{var inst_24484 = (state_24612[(9)]);var inst_24484__$1 = (state_24612[(2)]);var inst_24485 = (inst_24484__$1 == null);var state_24612__$1 = (function (){var statearr_24628 = state_24612;(statearr_24628[(9)] = inst_24484__$1);
return statearr_24628;
})();if(cljs.core.truth_(inst_24485))
{var statearr_24629_24709 = state_24612__$1;(statearr_24629_24709[(1)] = (5));
} else
{var statearr_24630_24710 = state_24612__$1;(statearr_24630_24710[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (15)))
{var inst_24496 = (state_24612[(13)]);var inst_24494 = (state_24612[(14)]);var inst_24495 = (state_24612[(15)]);var inst_24493 = (state_24612[(17)]);var inst_24509 = (state_24612[(2)]);var inst_24510 = (inst_24496 + (1));var tmp24624 = inst_24494;var tmp24625 = inst_24495;var tmp24626 = inst_24493;var inst_24493__$1 = tmp24626;var inst_24494__$1 = tmp24624;var inst_24495__$1 = tmp24625;var inst_24496__$1 = inst_24510;var state_24612__$1 = (function (){var statearr_24631 = state_24612;(statearr_24631[(18)] = inst_24509);
(statearr_24631[(13)] = inst_24496__$1);
(statearr_24631[(14)] = inst_24494__$1);
(statearr_24631[(15)] = inst_24495__$1);
(statearr_24631[(17)] = inst_24493__$1);
return statearr_24631;
})();var statearr_24632_24711 = state_24612__$1;(statearr_24632_24711[(2)] = null);
(statearr_24632_24711[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (21)))
{var inst_24534 = (state_24612[(2)]);var state_24612__$1 = state_24612;var statearr_24636_24712 = state_24612__$1;(statearr_24636_24712[(2)] = inst_24534);
(statearr_24636_24712[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (31)))
{var inst_24560 = (state_24612[(11)]);var inst_24564 = done.call(null,null);var inst_24565 = cljs.core.async.untap_STAR_.call(null,m,inst_24560);var state_24612__$1 = (function (){var statearr_24637 = state_24612;(statearr_24637[(19)] = inst_24564);
return statearr_24637;
})();var statearr_24638_24713 = state_24612__$1;(statearr_24638_24713[(2)] = inst_24565);
(statearr_24638_24713[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (32)))
{var inst_24552 = (state_24612[(20)]);var inst_24554 = (state_24612[(21)]);var inst_24553 = (state_24612[(10)]);var inst_24555 = (state_24612[(12)]);var inst_24567 = (state_24612[(2)]);var inst_24568 = (inst_24555 + (1));var tmp24633 = inst_24552;var tmp24634 = inst_24554;var tmp24635 = inst_24553;var inst_24552__$1 = tmp24633;var inst_24553__$1 = tmp24635;var inst_24554__$1 = tmp24634;var inst_24555__$1 = inst_24568;var state_24612__$1 = (function (){var statearr_24639 = state_24612;(statearr_24639[(20)] = inst_24552__$1);
(statearr_24639[(22)] = inst_24567);
(statearr_24639[(21)] = inst_24554__$1);
(statearr_24639[(10)] = inst_24553__$1);
(statearr_24639[(12)] = inst_24555__$1);
return statearr_24639;
})();var statearr_24640_24714 = state_24612__$1;(statearr_24640_24714[(2)] = null);
(statearr_24640_24714[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (40)))
{var inst_24580 = (state_24612[(23)]);var inst_24584 = done.call(null,null);var inst_24585 = cljs.core.async.untap_STAR_.call(null,m,inst_24580);var state_24612__$1 = (function (){var statearr_24641 = state_24612;(statearr_24641[(24)] = inst_24584);
return statearr_24641;
})();var statearr_24642_24715 = state_24612__$1;(statearr_24642_24715[(2)] = inst_24585);
(statearr_24642_24715[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (33)))
{var inst_24571 = (state_24612[(25)]);var inst_24573 = cljs.core.chunked_seq_QMARK_.call(null,inst_24571);var state_24612__$1 = state_24612;if(inst_24573)
{var statearr_24643_24716 = state_24612__$1;(statearr_24643_24716[(1)] = (36));
} else
{var statearr_24644_24717 = state_24612__$1;(statearr_24644_24717[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (13)))
{var inst_24503 = (state_24612[(26)]);var inst_24506 = cljs.core.async.close_BANG_.call(null,inst_24503);var state_24612__$1 = state_24612;var statearr_24645_24718 = state_24612__$1;(statearr_24645_24718[(2)] = inst_24506);
(statearr_24645_24718[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (22)))
{var inst_24524 = (state_24612[(8)]);var inst_24527 = cljs.core.async.close_BANG_.call(null,inst_24524);var state_24612__$1 = state_24612;var statearr_24646_24719 = state_24612__$1;(statearr_24646_24719[(2)] = inst_24527);
(statearr_24646_24719[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (36)))
{var inst_24571 = (state_24612[(25)]);var inst_24575 = cljs.core.chunk_first.call(null,inst_24571);var inst_24576 = cljs.core.chunk_rest.call(null,inst_24571);var inst_24577 = cljs.core.count.call(null,inst_24575);var inst_24552 = inst_24576;var inst_24553 = inst_24575;var inst_24554 = inst_24577;var inst_24555 = (0);var state_24612__$1 = (function (){var statearr_24647 = state_24612;(statearr_24647[(20)] = inst_24552);
(statearr_24647[(21)] = inst_24554);
(statearr_24647[(10)] = inst_24553);
(statearr_24647[(12)] = inst_24555);
return statearr_24647;
})();var statearr_24648_24720 = state_24612__$1;(statearr_24648_24720[(2)] = null);
(statearr_24648_24720[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (41)))
{var inst_24571 = (state_24612[(25)]);var inst_24587 = (state_24612[(2)]);var inst_24588 = cljs.core.next.call(null,inst_24571);var inst_24552 = inst_24588;var inst_24553 = null;var inst_24554 = (0);var inst_24555 = (0);var state_24612__$1 = (function (){var statearr_24649 = state_24612;(statearr_24649[(20)] = inst_24552);
(statearr_24649[(21)] = inst_24554);
(statearr_24649[(10)] = inst_24553);
(statearr_24649[(27)] = inst_24587);
(statearr_24649[(12)] = inst_24555);
return statearr_24649;
})();var statearr_24650_24721 = state_24612__$1;(statearr_24650_24721[(2)] = null);
(statearr_24650_24721[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (43)))
{var state_24612__$1 = state_24612;var statearr_24651_24722 = state_24612__$1;(statearr_24651_24722[(2)] = null);
(statearr_24651_24722[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (29)))
{var inst_24596 = (state_24612[(2)]);var state_24612__$1 = state_24612;var statearr_24652_24723 = state_24612__$1;(statearr_24652_24723[(2)] = inst_24596);
(statearr_24652_24723[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (44)))
{var inst_24605 = (state_24612[(2)]);var state_24612__$1 = (function (){var statearr_24653 = state_24612;(statearr_24653[(28)] = inst_24605);
return statearr_24653;
})();var statearr_24654_24724 = state_24612__$1;(statearr_24654_24724[(2)] = null);
(statearr_24654_24724[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (6)))
{var inst_24544 = (state_24612[(29)]);var inst_24543 = cljs.core.deref.call(null,cs);var inst_24544__$1 = cljs.core.keys.call(null,inst_24543);var inst_24545 = cljs.core.count.call(null,inst_24544__$1);var inst_24546 = cljs.core.reset_BANG_.call(null,dctr,inst_24545);var inst_24551 = cljs.core.seq.call(null,inst_24544__$1);var inst_24552 = inst_24551;var inst_24553 = null;var inst_24554 = (0);var inst_24555 = (0);var state_24612__$1 = (function (){var statearr_24655 = state_24612;(statearr_24655[(20)] = inst_24552);
(statearr_24655[(30)] = inst_24546);
(statearr_24655[(21)] = inst_24554);
(statearr_24655[(10)] = inst_24553);
(statearr_24655[(29)] = inst_24544__$1);
(statearr_24655[(12)] = inst_24555);
return statearr_24655;
})();var statearr_24656_24725 = state_24612__$1;(statearr_24656_24725[(2)] = null);
(statearr_24656_24725[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (28)))
{var inst_24552 = (state_24612[(20)]);var inst_24571 = (state_24612[(25)]);var inst_24571__$1 = cljs.core.seq.call(null,inst_24552);var state_24612__$1 = (function (){var statearr_24657 = state_24612;(statearr_24657[(25)] = inst_24571__$1);
return statearr_24657;
})();if(inst_24571__$1)
{var statearr_24658_24726 = state_24612__$1;(statearr_24658_24726[(1)] = (33));
} else
{var statearr_24659_24727 = state_24612__$1;(statearr_24659_24727[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (25)))
{var inst_24554 = (state_24612[(21)]);var inst_24555 = (state_24612[(12)]);var inst_24557 = (inst_24555 < inst_24554);var inst_24558 = inst_24557;var state_24612__$1 = state_24612;if(cljs.core.truth_(inst_24558))
{var statearr_24660_24728 = state_24612__$1;(statearr_24660_24728[(1)] = (27));
} else
{var statearr_24661_24729 = state_24612__$1;(statearr_24661_24729[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (34)))
{var state_24612__$1 = state_24612;var statearr_24662_24730 = state_24612__$1;(statearr_24662_24730[(2)] = null);
(statearr_24662_24730[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (17)))
{var state_24612__$1 = state_24612;var statearr_24663_24731 = state_24612__$1;(statearr_24663_24731[(2)] = null);
(statearr_24663_24731[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (3)))
{var inst_24610 = (state_24612[(2)]);var state_24612__$1 = state_24612;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24612__$1,inst_24610);
} else
{if((state_val_24613 === (12)))
{var inst_24539 = (state_24612[(2)]);var state_24612__$1 = state_24612;var statearr_24664_24732 = state_24612__$1;(statearr_24664_24732[(2)] = inst_24539);
(statearr_24664_24732[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (2)))
{var state_24612__$1 = state_24612;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24612__$1,(4),ch);
} else
{if((state_val_24613 === (23)))
{var state_24612__$1 = state_24612;var statearr_24665_24733 = state_24612__$1;(statearr_24665_24733[(2)] = null);
(statearr_24665_24733[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (35)))
{var inst_24594 = (state_24612[(2)]);var state_24612__$1 = state_24612;var statearr_24666_24734 = state_24612__$1;(statearr_24666_24734[(2)] = inst_24594);
(statearr_24666_24734[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (19)))
{var inst_24513 = (state_24612[(7)]);var inst_24517 = cljs.core.chunk_first.call(null,inst_24513);var inst_24518 = cljs.core.chunk_rest.call(null,inst_24513);var inst_24519 = cljs.core.count.call(null,inst_24517);var inst_24493 = inst_24518;var inst_24494 = inst_24517;var inst_24495 = inst_24519;var inst_24496 = (0);var state_24612__$1 = (function (){var statearr_24667 = state_24612;(statearr_24667[(13)] = inst_24496);
(statearr_24667[(14)] = inst_24494);
(statearr_24667[(15)] = inst_24495);
(statearr_24667[(17)] = inst_24493);
return statearr_24667;
})();var statearr_24668_24735 = state_24612__$1;(statearr_24668_24735[(2)] = null);
(statearr_24668_24735[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (11)))
{var inst_24493 = (state_24612[(17)]);var inst_24513 = (state_24612[(7)]);var inst_24513__$1 = cljs.core.seq.call(null,inst_24493);var state_24612__$1 = (function (){var statearr_24669 = state_24612;(statearr_24669[(7)] = inst_24513__$1);
return statearr_24669;
})();if(inst_24513__$1)
{var statearr_24670_24736 = state_24612__$1;(statearr_24670_24736[(1)] = (16));
} else
{var statearr_24671_24737 = state_24612__$1;(statearr_24671_24737[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (9)))
{var inst_24541 = (state_24612[(2)]);var state_24612__$1 = state_24612;var statearr_24672_24738 = state_24612__$1;(statearr_24672_24738[(2)] = inst_24541);
(statearr_24672_24738[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (5)))
{var inst_24491 = cljs.core.deref.call(null,cs);var inst_24492 = cljs.core.seq.call(null,inst_24491);var inst_24493 = inst_24492;var inst_24494 = null;var inst_24495 = (0);var inst_24496 = (0);var state_24612__$1 = (function (){var statearr_24673 = state_24612;(statearr_24673[(13)] = inst_24496);
(statearr_24673[(14)] = inst_24494);
(statearr_24673[(15)] = inst_24495);
(statearr_24673[(17)] = inst_24493);
return statearr_24673;
})();var statearr_24674_24739 = state_24612__$1;(statearr_24674_24739[(2)] = null);
(statearr_24674_24739[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (14)))
{var state_24612__$1 = state_24612;var statearr_24675_24740 = state_24612__$1;(statearr_24675_24740[(2)] = null);
(statearr_24675_24740[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (45)))
{var inst_24602 = (state_24612[(2)]);var state_24612__$1 = state_24612;var statearr_24676_24741 = state_24612__$1;(statearr_24676_24741[(2)] = inst_24602);
(statearr_24676_24741[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (26)))
{var inst_24544 = (state_24612[(29)]);var inst_24598 = (state_24612[(2)]);var inst_24599 = cljs.core.seq.call(null,inst_24544);var state_24612__$1 = (function (){var statearr_24677 = state_24612;(statearr_24677[(31)] = inst_24598);
return statearr_24677;
})();if(inst_24599)
{var statearr_24678_24742 = state_24612__$1;(statearr_24678_24742[(1)] = (42));
} else
{var statearr_24679_24743 = state_24612__$1;(statearr_24679_24743[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (16)))
{var inst_24513 = (state_24612[(7)]);var inst_24515 = cljs.core.chunked_seq_QMARK_.call(null,inst_24513);var state_24612__$1 = state_24612;if(inst_24515)
{var statearr_24680_24744 = state_24612__$1;(statearr_24680_24744[(1)] = (19));
} else
{var statearr_24681_24745 = state_24612__$1;(statearr_24681_24745[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (38)))
{var inst_24591 = (state_24612[(2)]);var state_24612__$1 = state_24612;var statearr_24682_24746 = state_24612__$1;(statearr_24682_24746[(2)] = inst_24591);
(statearr_24682_24746[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (30)))
{var state_24612__$1 = state_24612;var statearr_24683_24747 = state_24612__$1;(statearr_24683_24747[(2)] = null);
(statearr_24683_24747[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (10)))
{var inst_24496 = (state_24612[(13)]);var inst_24494 = (state_24612[(14)]);var inst_24502 = cljs.core._nth.call(null,inst_24494,inst_24496);var inst_24503 = cljs.core.nth.call(null,inst_24502,(0),null);var inst_24504 = cljs.core.nth.call(null,inst_24502,(1),null);var state_24612__$1 = (function (){var statearr_24684 = state_24612;(statearr_24684[(26)] = inst_24503);
return statearr_24684;
})();if(cljs.core.truth_(inst_24504))
{var statearr_24685_24748 = state_24612__$1;(statearr_24685_24748[(1)] = (13));
} else
{var statearr_24686_24749 = state_24612__$1;(statearr_24686_24749[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (18)))
{var inst_24537 = (state_24612[(2)]);var state_24612__$1 = state_24612;var statearr_24687_24750 = state_24612__$1;(statearr_24687_24750[(2)] = inst_24537);
(statearr_24687_24750[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (42)))
{var state_24612__$1 = state_24612;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24612__$1,(45),dchan);
} else
{if((state_val_24613 === (37)))
{var inst_24484 = (state_24612[(9)]);var inst_24571 = (state_24612[(25)]);var inst_24580 = (state_24612[(23)]);var inst_24580__$1 = cljs.core.first.call(null,inst_24571);var inst_24581 = cljs.core.async.put_BANG_.call(null,inst_24580__$1,inst_24484,done);var state_24612__$1 = (function (){var statearr_24688 = state_24612;(statearr_24688[(23)] = inst_24580__$1);
return statearr_24688;
})();if(cljs.core.truth_(inst_24581))
{var statearr_24689_24751 = state_24612__$1;(statearr_24689_24751[(1)] = (39));
} else
{var statearr_24690_24752 = state_24612__$1;(statearr_24690_24752[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (8)))
{var inst_24496 = (state_24612[(13)]);var inst_24495 = (state_24612[(15)]);var inst_24498 = (inst_24496 < inst_24495);var inst_24499 = inst_24498;var state_24612__$1 = state_24612;if(cljs.core.truth_(inst_24499))
{var statearr_24691_24753 = state_24612__$1;(statearr_24691_24753[(1)] = (10));
} else
{var statearr_24692_24754 = state_24612__$1;(statearr_24692_24754[(1)] = (11));
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
});})(c__9125__auto___24700,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24700,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24696[(0)] = state_machine__9111__auto__);
(statearr_24696[(1)] = (1));
return statearr_24696;
});
var state_machine__9111__auto____1 = (function (state_24612){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24612);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24697){if((e24697 instanceof Object))
{var ex__9114__auto__ = e24697;var statearr_24698_24755 = state_24612;(statearr_24698_24755[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24612);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24697;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24756 = state_24612;
state_24612 = G__24756;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24612){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24700,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24699 = f__9126__auto__.call(null);(statearr_24699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24700);
return statearr_24699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24700,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24758 = {};return obj24758;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24759){var map__24764 = p__24759;var map__24764__$1 = ((cljs.core.seq_QMARK_.call(null,map__24764))?cljs.core.apply.call(null,cljs.core.hash_map,map__24764):map__24764);var opts = map__24764__$1;var statearr_24765_24768 = state;(statearr_24765_24768[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24764,map__24764__$1,opts){
return (function (val){var statearr_24766_24769 = state;(statearr_24766_24769[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24764,map__24764__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24767_24770 = state;(statearr_24767_24770[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24759 = null;if (arguments.length > 3) {
  p__24759 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24759);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24771){
var state = cljs.core.first(arglist__24771);
arglist__24771 = cljs.core.next(arglist__24771);
var cont_block = cljs.core.first(arglist__24771);
arglist__24771 = cljs.core.next(arglist__24771);
var ports = cljs.core.first(arglist__24771);
var p__24759 = cljs.core.rest(arglist__24771);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24759);
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
;var m = (function (){if(typeof cljs.core.async.t24891 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24891 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24892){
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
this.meta24892 = meta24892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24891.cljs$lang$type = true;
cljs.core.async.t24891.cljs$lang$ctorStr = "cljs.core.async/t24891";
cljs.core.async.t24891.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24891");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24891.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24891.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24891.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24891.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24891.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24891.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24891.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24891.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24893){var self__ = this;
var _24893__$1 = this;return self__.meta24892;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24893,meta24892__$1){var self__ = this;
var _24893__$1 = this;return (new cljs.core.async.t24891(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24892__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24891 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24891(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24892){return (new cljs.core.async.t24891(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24892));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24891(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___25010 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24963){var state_val_24964 = (state_24963[(1)]);if((state_val_24964 === (7)))
{var inst_24907 = (state_24963[(7)]);var inst_24912 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24907);var state_24963__$1 = state_24963;var statearr_24965_25011 = state_24963__$1;(statearr_24965_25011[(2)] = inst_24912);
(statearr_24965_25011[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (20)))
{var inst_24922 = (state_24963[(8)]);var state_24963__$1 = state_24963;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24963__$1,(23),out,inst_24922);
} else
{if((state_val_24964 === (1)))
{var inst_24897 = (state_24963[(9)]);var inst_24897__$1 = calc_state.call(null);var inst_24898 = cljs.core.seq_QMARK_.call(null,inst_24897__$1);var state_24963__$1 = (function (){var statearr_24966 = state_24963;(statearr_24966[(9)] = inst_24897__$1);
return statearr_24966;
})();if(inst_24898)
{var statearr_24967_25012 = state_24963__$1;(statearr_24967_25012[(1)] = (2));
} else
{var statearr_24968_25013 = state_24963__$1;(statearr_24968_25013[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (24)))
{var inst_24915 = (state_24963[(10)]);var inst_24907 = inst_24915;var state_24963__$1 = (function (){var statearr_24969 = state_24963;(statearr_24969[(7)] = inst_24907);
return statearr_24969;
})();var statearr_24970_25014 = state_24963__$1;(statearr_24970_25014[(2)] = null);
(statearr_24970_25014[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (4)))
{var inst_24897 = (state_24963[(9)]);var inst_24903 = (state_24963[(2)]);var inst_24904 = cljs.core.get.call(null,inst_24903,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24905 = cljs.core.get.call(null,inst_24903,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24906 = cljs.core.get.call(null,inst_24903,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_24907 = inst_24897;var state_24963__$1 = (function (){var statearr_24971 = state_24963;(statearr_24971[(11)] = inst_24906);
(statearr_24971[(12)] = inst_24905);
(statearr_24971[(7)] = inst_24907);
(statearr_24971[(13)] = inst_24904);
return statearr_24971;
})();var statearr_24972_25015 = state_24963__$1;(statearr_24972_25015[(2)] = null);
(statearr_24972_25015[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (15)))
{var state_24963__$1 = state_24963;var statearr_24973_25016 = state_24963__$1;(statearr_24973_25016[(2)] = null);
(statearr_24973_25016[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (21)))
{var inst_24915 = (state_24963[(10)]);var inst_24907 = inst_24915;var state_24963__$1 = (function (){var statearr_24974 = state_24963;(statearr_24974[(7)] = inst_24907);
return statearr_24974;
})();var statearr_24975_25017 = state_24963__$1;(statearr_24975_25017[(2)] = null);
(statearr_24975_25017[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (13)))
{var inst_24959 = (state_24963[(2)]);var state_24963__$1 = state_24963;var statearr_24976_25018 = state_24963__$1;(statearr_24976_25018[(2)] = inst_24959);
(statearr_24976_25018[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (22)))
{var inst_24957 = (state_24963[(2)]);var state_24963__$1 = state_24963;var statearr_24977_25019 = state_24963__$1;(statearr_24977_25019[(2)] = inst_24957);
(statearr_24977_25019[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (6)))
{var inst_24961 = (state_24963[(2)]);var state_24963__$1 = state_24963;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24963__$1,inst_24961);
} else
{if((state_val_24964 === (25)))
{var state_24963__$1 = state_24963;var statearr_24978_25020 = state_24963__$1;(statearr_24978_25020[(2)] = null);
(statearr_24978_25020[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (17)))
{var inst_24937 = (state_24963[(14)]);var state_24963__$1 = state_24963;var statearr_24979_25021 = state_24963__$1;(statearr_24979_25021[(2)] = inst_24937);
(statearr_24979_25021[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (3)))
{var inst_24897 = (state_24963[(9)]);var state_24963__$1 = state_24963;var statearr_24980_25022 = state_24963__$1;(statearr_24980_25022[(2)] = inst_24897);
(statearr_24980_25022[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (12)))
{var inst_24923 = (state_24963[(15)]);var inst_24918 = (state_24963[(16)]);var inst_24937 = (state_24963[(14)]);var inst_24937__$1 = inst_24918.call(null,inst_24923);var state_24963__$1 = (function (){var statearr_24981 = state_24963;(statearr_24981[(14)] = inst_24937__$1);
return statearr_24981;
})();if(cljs.core.truth_(inst_24937__$1))
{var statearr_24982_25023 = state_24963__$1;(statearr_24982_25023[(1)] = (17));
} else
{var statearr_24983_25024 = state_24963__$1;(statearr_24983_25024[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (2)))
{var inst_24897 = (state_24963[(9)]);var inst_24900 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24897);var state_24963__$1 = state_24963;var statearr_24984_25025 = state_24963__$1;(statearr_24984_25025[(2)] = inst_24900);
(statearr_24984_25025[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (23)))
{var inst_24948 = (state_24963[(2)]);var state_24963__$1 = state_24963;if(cljs.core.truth_(inst_24948))
{var statearr_24985_25026 = state_24963__$1;(statearr_24985_25026[(1)] = (24));
} else
{var statearr_24986_25027 = state_24963__$1;(statearr_24986_25027[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (19)))
{var inst_24945 = (state_24963[(2)]);var state_24963__$1 = state_24963;if(cljs.core.truth_(inst_24945))
{var statearr_24987_25028 = state_24963__$1;(statearr_24987_25028[(1)] = (20));
} else
{var statearr_24988_25029 = state_24963__$1;(statearr_24988_25029[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (11)))
{var inst_24922 = (state_24963[(8)]);var inst_24928 = (inst_24922 == null);var state_24963__$1 = state_24963;if(cljs.core.truth_(inst_24928))
{var statearr_24989_25030 = state_24963__$1;(statearr_24989_25030[(1)] = (14));
} else
{var statearr_24990_25031 = state_24963__$1;(statearr_24990_25031[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (9)))
{var inst_24915 = (state_24963[(10)]);var inst_24915__$1 = (state_24963[(2)]);var inst_24916 = cljs.core.get.call(null,inst_24915__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24917 = cljs.core.get.call(null,inst_24915__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24918 = cljs.core.get.call(null,inst_24915__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_24963__$1 = (function (){var statearr_24991 = state_24963;(statearr_24991[(16)] = inst_24918);
(statearr_24991[(10)] = inst_24915__$1);
(statearr_24991[(17)] = inst_24917);
return statearr_24991;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_24963__$1,(10),inst_24916);
} else
{if((state_val_24964 === (5)))
{var inst_24907 = (state_24963[(7)]);var inst_24910 = cljs.core.seq_QMARK_.call(null,inst_24907);var state_24963__$1 = state_24963;if(inst_24910)
{var statearr_24992_25032 = state_24963__$1;(statearr_24992_25032[(1)] = (7));
} else
{var statearr_24993_25033 = state_24963__$1;(statearr_24993_25033[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (14)))
{var inst_24923 = (state_24963[(15)]);var inst_24930 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24923);var state_24963__$1 = state_24963;var statearr_24994_25034 = state_24963__$1;(statearr_24994_25034[(2)] = inst_24930);
(statearr_24994_25034[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (26)))
{var inst_24953 = (state_24963[(2)]);var state_24963__$1 = state_24963;var statearr_24995_25035 = state_24963__$1;(statearr_24995_25035[(2)] = inst_24953);
(statearr_24995_25035[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (16)))
{var inst_24933 = (state_24963[(2)]);var inst_24934 = calc_state.call(null);var inst_24907 = inst_24934;var state_24963__$1 = (function (){var statearr_24996 = state_24963;(statearr_24996[(7)] = inst_24907);
(statearr_24996[(18)] = inst_24933);
return statearr_24996;
})();var statearr_24997_25036 = state_24963__$1;(statearr_24997_25036[(2)] = null);
(statearr_24997_25036[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (10)))
{var inst_24923 = (state_24963[(15)]);var inst_24922 = (state_24963[(8)]);var inst_24921 = (state_24963[(2)]);var inst_24922__$1 = cljs.core.nth.call(null,inst_24921,(0),null);var inst_24923__$1 = cljs.core.nth.call(null,inst_24921,(1),null);var inst_24924 = (inst_24922__$1 == null);var inst_24925 = cljs.core._EQ_.call(null,inst_24923__$1,change);var inst_24926 = (inst_24924) || (inst_24925);var state_24963__$1 = (function (){var statearr_24998 = state_24963;(statearr_24998[(15)] = inst_24923__$1);
(statearr_24998[(8)] = inst_24922__$1);
return statearr_24998;
})();if(cljs.core.truth_(inst_24926))
{var statearr_24999_25037 = state_24963__$1;(statearr_24999_25037[(1)] = (11));
} else
{var statearr_25000_25038 = state_24963__$1;(statearr_25000_25038[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (18)))
{var inst_24923 = (state_24963[(15)]);var inst_24918 = (state_24963[(16)]);var inst_24917 = (state_24963[(17)]);var inst_24940 = cljs.core.empty_QMARK_.call(null,inst_24918);var inst_24941 = inst_24917.call(null,inst_24923);var inst_24942 = cljs.core.not.call(null,inst_24941);var inst_24943 = (inst_24940) && (inst_24942);var state_24963__$1 = state_24963;var statearr_25001_25039 = state_24963__$1;(statearr_25001_25039[(2)] = inst_24943);
(statearr_25001_25039[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24964 === (8)))
{var inst_24907 = (state_24963[(7)]);var state_24963__$1 = state_24963;var statearr_25002_25040 = state_24963__$1;(statearr_25002_25040[(2)] = inst_24907);
(statearr_25002_25040[(1)] = (9));
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
});})(c__9125__auto___25010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___25010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25006[(0)] = state_machine__9111__auto__);
(statearr_25006[(1)] = (1));
return statearr_25006;
});
var state_machine__9111__auto____1 = (function (state_24963){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24963);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25007){if((e25007 instanceof Object))
{var ex__9114__auto__ = e25007;var statearr_25008_25041 = state_24963;(statearr_25008_25041[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24963);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25007;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25042 = state_24963;
state_24963 = G__25042;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24963){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_25009 = f__9126__auto__.call(null);(statearr_25009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25010);
return statearr_25009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25044 = {};return obj25044;
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
return (function (p1__25045_SHARP_){if(cljs.core.truth_(p1__25045_SHARP_.call(null,topic)))
{return p1__25045_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25045_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25168 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25168 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25169){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25169 = meta25169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25168.cljs$lang$type = true;
cljs.core.async.t25168.cljs$lang$ctorStr = "cljs.core.async/t25168";
cljs.core.async.t25168.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25168");
});})(mults,ensure_mult))
;
cljs.core.async.t25168.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25168.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25168.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25168.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25168.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25168.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25168.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25170){var self__ = this;
var _25170__$1 = this;return self__.meta25169;
});})(mults,ensure_mult))
;
cljs.core.async.t25168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25170,meta25169__$1){var self__ = this;
var _25170__$1 = this;return (new cljs.core.async.t25168(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25169__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25168 = ((function (mults,ensure_mult){
return (function __GT_t25168(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25169){return (new cljs.core.async.t25168(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25169));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25168(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25290 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25290,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25290,mults,ensure_mult,p){
return (function (state_25242){var state_val_25243 = (state_25242[(1)]);if((state_val_25243 === (7)))
{var inst_25238 = (state_25242[(2)]);var state_25242__$1 = state_25242;var statearr_25244_25291 = state_25242__$1;(statearr_25244_25291[(2)] = inst_25238);
(statearr_25244_25291[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (20)))
{var state_25242__$1 = state_25242;var statearr_25245_25292 = state_25242__$1;(statearr_25245_25292[(2)] = null);
(statearr_25245_25292[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (1)))
{var state_25242__$1 = state_25242;var statearr_25246_25293 = state_25242__$1;(statearr_25246_25293[(2)] = null);
(statearr_25246_25293[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (24)))
{var inst_25221 = (state_25242[(7)]);var inst_25230 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25221);var state_25242__$1 = state_25242;var statearr_25247_25294 = state_25242__$1;(statearr_25247_25294[(2)] = inst_25230);
(statearr_25247_25294[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (4)))
{var inst_25173 = (state_25242[(8)]);var inst_25173__$1 = (state_25242[(2)]);var inst_25174 = (inst_25173__$1 == null);var state_25242__$1 = (function (){var statearr_25248 = state_25242;(statearr_25248[(8)] = inst_25173__$1);
return statearr_25248;
})();if(cljs.core.truth_(inst_25174))
{var statearr_25249_25295 = state_25242__$1;(statearr_25249_25295[(1)] = (5));
} else
{var statearr_25250_25296 = state_25242__$1;(statearr_25250_25296[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (15)))
{var inst_25215 = (state_25242[(2)]);var state_25242__$1 = state_25242;var statearr_25251_25297 = state_25242__$1;(statearr_25251_25297[(2)] = inst_25215);
(statearr_25251_25297[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (21)))
{var inst_25235 = (state_25242[(2)]);var state_25242__$1 = (function (){var statearr_25252 = state_25242;(statearr_25252[(9)] = inst_25235);
return statearr_25252;
})();var statearr_25253_25298 = state_25242__$1;(statearr_25253_25298[(2)] = null);
(statearr_25253_25298[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (13)))
{var inst_25197 = (state_25242[(10)]);var inst_25199 = cljs.core.chunked_seq_QMARK_.call(null,inst_25197);var state_25242__$1 = state_25242;if(inst_25199)
{var statearr_25254_25299 = state_25242__$1;(statearr_25254_25299[(1)] = (16));
} else
{var statearr_25255_25300 = state_25242__$1;(statearr_25255_25300[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (22)))
{var inst_25227 = (state_25242[(2)]);var state_25242__$1 = state_25242;if(cljs.core.truth_(inst_25227))
{var statearr_25256_25301 = state_25242__$1;(statearr_25256_25301[(1)] = (23));
} else
{var statearr_25257_25302 = state_25242__$1;(statearr_25257_25302[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (6)))
{var inst_25221 = (state_25242[(7)]);var inst_25173 = (state_25242[(8)]);var inst_25223 = (state_25242[(11)]);var inst_25221__$1 = topic_fn.call(null,inst_25173);var inst_25222 = cljs.core.deref.call(null,mults);var inst_25223__$1 = cljs.core.get.call(null,inst_25222,inst_25221__$1);var state_25242__$1 = (function (){var statearr_25258 = state_25242;(statearr_25258[(7)] = inst_25221__$1);
(statearr_25258[(11)] = inst_25223__$1);
return statearr_25258;
})();if(cljs.core.truth_(inst_25223__$1))
{var statearr_25259_25303 = state_25242__$1;(statearr_25259_25303[(1)] = (19));
} else
{var statearr_25260_25304 = state_25242__$1;(statearr_25260_25304[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (25)))
{var inst_25232 = (state_25242[(2)]);var state_25242__$1 = state_25242;var statearr_25261_25305 = state_25242__$1;(statearr_25261_25305[(2)] = inst_25232);
(statearr_25261_25305[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (17)))
{var inst_25197 = (state_25242[(10)]);var inst_25206 = cljs.core.first.call(null,inst_25197);var inst_25207 = cljs.core.async.muxch_STAR_.call(null,inst_25206);var inst_25208 = cljs.core.async.close_BANG_.call(null,inst_25207);var inst_25209 = cljs.core.next.call(null,inst_25197);var inst_25183 = inst_25209;var inst_25184 = null;var inst_25185 = (0);var inst_25186 = (0);var state_25242__$1 = (function (){var statearr_25262 = state_25242;(statearr_25262[(12)] = inst_25186);
(statearr_25262[(13)] = inst_25184);
(statearr_25262[(14)] = inst_25183);
(statearr_25262[(15)] = inst_25185);
(statearr_25262[(16)] = inst_25208);
return statearr_25262;
})();var statearr_25263_25306 = state_25242__$1;(statearr_25263_25306[(2)] = null);
(statearr_25263_25306[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (3)))
{var inst_25240 = (state_25242[(2)]);var state_25242__$1 = state_25242;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25242__$1,inst_25240);
} else
{if((state_val_25243 === (12)))
{var inst_25217 = (state_25242[(2)]);var state_25242__$1 = state_25242;var statearr_25264_25307 = state_25242__$1;(statearr_25264_25307[(2)] = inst_25217);
(statearr_25264_25307[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (2)))
{var state_25242__$1 = state_25242;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25242__$1,(4),ch);
} else
{if((state_val_25243 === (23)))
{var state_25242__$1 = state_25242;var statearr_25265_25308 = state_25242__$1;(statearr_25265_25308[(2)] = null);
(statearr_25265_25308[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (19)))
{var inst_25173 = (state_25242[(8)]);var inst_25223 = (state_25242[(11)]);var inst_25225 = cljs.core.async.muxch_STAR_.call(null,inst_25223);var state_25242__$1 = state_25242;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25242__$1,(22),inst_25225,inst_25173);
} else
{if((state_val_25243 === (11)))
{var inst_25183 = (state_25242[(14)]);var inst_25197 = (state_25242[(10)]);var inst_25197__$1 = cljs.core.seq.call(null,inst_25183);var state_25242__$1 = (function (){var statearr_25266 = state_25242;(statearr_25266[(10)] = inst_25197__$1);
return statearr_25266;
})();if(inst_25197__$1)
{var statearr_25267_25309 = state_25242__$1;(statearr_25267_25309[(1)] = (13));
} else
{var statearr_25268_25310 = state_25242__$1;(statearr_25268_25310[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (9)))
{var inst_25219 = (state_25242[(2)]);var state_25242__$1 = state_25242;var statearr_25269_25311 = state_25242__$1;(statearr_25269_25311[(2)] = inst_25219);
(statearr_25269_25311[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (5)))
{var inst_25180 = cljs.core.deref.call(null,mults);var inst_25181 = cljs.core.vals.call(null,inst_25180);var inst_25182 = cljs.core.seq.call(null,inst_25181);var inst_25183 = inst_25182;var inst_25184 = null;var inst_25185 = (0);var inst_25186 = (0);var state_25242__$1 = (function (){var statearr_25270 = state_25242;(statearr_25270[(12)] = inst_25186);
(statearr_25270[(13)] = inst_25184);
(statearr_25270[(14)] = inst_25183);
(statearr_25270[(15)] = inst_25185);
return statearr_25270;
})();var statearr_25271_25312 = state_25242__$1;(statearr_25271_25312[(2)] = null);
(statearr_25271_25312[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (14)))
{var state_25242__$1 = state_25242;var statearr_25275_25313 = state_25242__$1;(statearr_25275_25313[(2)] = null);
(statearr_25275_25313[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (16)))
{var inst_25197 = (state_25242[(10)]);var inst_25201 = cljs.core.chunk_first.call(null,inst_25197);var inst_25202 = cljs.core.chunk_rest.call(null,inst_25197);var inst_25203 = cljs.core.count.call(null,inst_25201);var inst_25183 = inst_25202;var inst_25184 = inst_25201;var inst_25185 = inst_25203;var inst_25186 = (0);var state_25242__$1 = (function (){var statearr_25276 = state_25242;(statearr_25276[(12)] = inst_25186);
(statearr_25276[(13)] = inst_25184);
(statearr_25276[(14)] = inst_25183);
(statearr_25276[(15)] = inst_25185);
return statearr_25276;
})();var statearr_25277_25314 = state_25242__$1;(statearr_25277_25314[(2)] = null);
(statearr_25277_25314[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (10)))
{var inst_25186 = (state_25242[(12)]);var inst_25184 = (state_25242[(13)]);var inst_25183 = (state_25242[(14)]);var inst_25185 = (state_25242[(15)]);var inst_25191 = cljs.core._nth.call(null,inst_25184,inst_25186);var inst_25192 = cljs.core.async.muxch_STAR_.call(null,inst_25191);var inst_25193 = cljs.core.async.close_BANG_.call(null,inst_25192);var inst_25194 = (inst_25186 + (1));var tmp25272 = inst_25184;var tmp25273 = inst_25183;var tmp25274 = inst_25185;var inst_25183__$1 = tmp25273;var inst_25184__$1 = tmp25272;var inst_25185__$1 = tmp25274;var inst_25186__$1 = inst_25194;var state_25242__$1 = (function (){var statearr_25278 = state_25242;(statearr_25278[(12)] = inst_25186__$1);
(statearr_25278[(13)] = inst_25184__$1);
(statearr_25278[(14)] = inst_25183__$1);
(statearr_25278[(15)] = inst_25185__$1);
(statearr_25278[(17)] = inst_25193);
return statearr_25278;
})();var statearr_25279_25315 = state_25242__$1;(statearr_25279_25315[(2)] = null);
(statearr_25279_25315[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (18)))
{var inst_25212 = (state_25242[(2)]);var state_25242__$1 = state_25242;var statearr_25280_25316 = state_25242__$1;(statearr_25280_25316[(2)] = inst_25212);
(statearr_25280_25316[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (8)))
{var inst_25186 = (state_25242[(12)]);var inst_25185 = (state_25242[(15)]);var inst_25188 = (inst_25186 < inst_25185);var inst_25189 = inst_25188;var state_25242__$1 = state_25242;if(cljs.core.truth_(inst_25189))
{var statearr_25281_25317 = state_25242__$1;(statearr_25281_25317[(1)] = (10));
} else
{var statearr_25282_25318 = state_25242__$1;(statearr_25282_25318[(1)] = (11));
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
});})(c__9125__auto___25290,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25290,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25286[(0)] = state_machine__9111__auto__);
(statearr_25286[(1)] = (1));
return statearr_25286;
});
var state_machine__9111__auto____1 = (function (state_25242){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25242);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25287){if((e25287 instanceof Object))
{var ex__9114__auto__ = e25287;var statearr_25288_25319 = state_25242;(statearr_25288_25319[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25242);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25287;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25320 = state_25242;
state_25242 = G__25320;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25242){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25290,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25289 = f__9126__auto__.call(null);(statearr_25289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25290);
return statearr_25289;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25290,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9125__auto___25457 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25457,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25457,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25427){var state_val_25428 = (state_25427[(1)]);if((state_val_25428 === (7)))
{var state_25427__$1 = state_25427;var statearr_25429_25458 = state_25427__$1;(statearr_25429_25458[(2)] = null);
(statearr_25429_25458[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25428 === (1)))
{var state_25427__$1 = state_25427;var statearr_25430_25459 = state_25427__$1;(statearr_25430_25459[(2)] = null);
(statearr_25430_25459[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25428 === (4)))
{var inst_25391 = (state_25427[(7)]);var inst_25393 = (inst_25391 < cnt);var state_25427__$1 = state_25427;if(cljs.core.truth_(inst_25393))
{var statearr_25431_25460 = state_25427__$1;(statearr_25431_25460[(1)] = (6));
} else
{var statearr_25432_25461 = state_25427__$1;(statearr_25432_25461[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25428 === (15)))
{var inst_25423 = (state_25427[(2)]);var state_25427__$1 = state_25427;var statearr_25433_25462 = state_25427__$1;(statearr_25433_25462[(2)] = inst_25423);
(statearr_25433_25462[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25428 === (13)))
{var inst_25416 = cljs.core.async.close_BANG_.call(null,out);var state_25427__$1 = state_25427;var statearr_25434_25463 = state_25427__$1;(statearr_25434_25463[(2)] = inst_25416);
(statearr_25434_25463[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25428 === (6)))
{var state_25427__$1 = state_25427;var statearr_25435_25464 = state_25427__$1;(statearr_25435_25464[(2)] = null);
(statearr_25435_25464[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25428 === (3)))
{var inst_25425 = (state_25427[(2)]);var state_25427__$1 = state_25427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25427__$1,inst_25425);
} else
{if((state_val_25428 === (12)))
{var inst_25413 = (state_25427[(8)]);var inst_25413__$1 = (state_25427[(2)]);var inst_25414 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25413__$1);var state_25427__$1 = (function (){var statearr_25436 = state_25427;(statearr_25436[(8)] = inst_25413__$1);
return statearr_25436;
})();if(cljs.core.truth_(inst_25414))
{var statearr_25437_25465 = state_25427__$1;(statearr_25437_25465[(1)] = (13));
} else
{var statearr_25438_25466 = state_25427__$1;(statearr_25438_25466[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25428 === (2)))
{var inst_25390 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25391 = (0);var state_25427__$1 = (function (){var statearr_25439 = state_25427;(statearr_25439[(9)] = inst_25390);
(statearr_25439[(7)] = inst_25391);
return statearr_25439;
})();var statearr_25440_25467 = state_25427__$1;(statearr_25440_25467[(2)] = null);
(statearr_25440_25467[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25428 === (11)))
{var inst_25391 = (state_25427[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25427,(10),Object,null,(9));var inst_25400 = chs__$1.call(null,inst_25391);var inst_25401 = done.call(null,inst_25391);var inst_25402 = cljs.core.async.take_BANG_.call(null,inst_25400,inst_25401);var state_25427__$1 = state_25427;var statearr_25441_25468 = state_25427__$1;(statearr_25441_25468[(2)] = inst_25402);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25427__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25428 === (9)))
{var inst_25391 = (state_25427[(7)]);var inst_25404 = (state_25427[(2)]);var inst_25405 = (inst_25391 + (1));var inst_25391__$1 = inst_25405;var state_25427__$1 = (function (){var statearr_25442 = state_25427;(statearr_25442[(10)] = inst_25404);
(statearr_25442[(7)] = inst_25391__$1);
return statearr_25442;
})();var statearr_25443_25469 = state_25427__$1;(statearr_25443_25469[(2)] = null);
(statearr_25443_25469[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25428 === (5)))
{var inst_25411 = (state_25427[(2)]);var state_25427__$1 = (function (){var statearr_25444 = state_25427;(statearr_25444[(11)] = inst_25411);
return statearr_25444;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25427__$1,(12),dchan);
} else
{if((state_val_25428 === (14)))
{var inst_25413 = (state_25427[(8)]);var inst_25418 = cljs.core.apply.call(null,f,inst_25413);var state_25427__$1 = state_25427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25427__$1,(16),out,inst_25418);
} else
{if((state_val_25428 === (16)))
{var inst_25420 = (state_25427[(2)]);var state_25427__$1 = (function (){var statearr_25445 = state_25427;(statearr_25445[(12)] = inst_25420);
return statearr_25445;
})();var statearr_25446_25470 = state_25427__$1;(statearr_25446_25470[(2)] = null);
(statearr_25446_25470[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25428 === (10)))
{var inst_25395 = (state_25427[(2)]);var inst_25396 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25427__$1 = (function (){var statearr_25447 = state_25427;(statearr_25447[(13)] = inst_25395);
return statearr_25447;
})();var statearr_25448_25471 = state_25427__$1;(statearr_25448_25471[(2)] = inst_25396);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25427__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25428 === (8)))
{var inst_25409 = (state_25427[(2)]);var state_25427__$1 = state_25427;var statearr_25449_25472 = state_25427__$1;(statearr_25449_25472[(2)] = inst_25409);
(statearr_25449_25472[(1)] = (5));
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
});})(c__9125__auto___25457,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25457,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25453[(0)] = state_machine__9111__auto__);
(statearr_25453[(1)] = (1));
return statearr_25453;
});
var state_machine__9111__auto____1 = (function (state_25427){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25427);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25454){if((e25454 instanceof Object))
{var ex__9114__auto__ = e25454;var statearr_25455_25473 = state_25427;(statearr_25455_25473[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25427);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25454;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25474 = state_25427;
state_25427 = G__25474;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25427){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25457,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25456 = f__9126__auto__.call(null);(statearr_25456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25457);
return statearr_25456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25457,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25582 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25582,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25582,out){
return (function (state_25558){var state_val_25559 = (state_25558[(1)]);if((state_val_25559 === (7)))
{var inst_25537 = (state_25558[(7)]);var inst_25538 = (state_25558[(8)]);var inst_25537__$1 = (state_25558[(2)]);var inst_25538__$1 = cljs.core.nth.call(null,inst_25537__$1,(0),null);var inst_25539 = cljs.core.nth.call(null,inst_25537__$1,(1),null);var inst_25540 = (inst_25538__$1 == null);var state_25558__$1 = (function (){var statearr_25560 = state_25558;(statearr_25560[(7)] = inst_25537__$1);
(statearr_25560[(9)] = inst_25539);
(statearr_25560[(8)] = inst_25538__$1);
return statearr_25560;
})();if(cljs.core.truth_(inst_25540))
{var statearr_25561_25583 = state_25558__$1;(statearr_25561_25583[(1)] = (8));
} else
{var statearr_25562_25584 = state_25558__$1;(statearr_25562_25584[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (1)))
{var inst_25529 = cljs.core.vec.call(null,chs);var inst_25530 = inst_25529;var state_25558__$1 = (function (){var statearr_25563 = state_25558;(statearr_25563[(10)] = inst_25530);
return statearr_25563;
})();var statearr_25564_25585 = state_25558__$1;(statearr_25564_25585[(2)] = null);
(statearr_25564_25585[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (4)))
{var inst_25530 = (state_25558[(10)]);var state_25558__$1 = state_25558;return cljs.core.async.ioc_alts_BANG_.call(null,state_25558__$1,(7),inst_25530);
} else
{if((state_val_25559 === (6)))
{var inst_25554 = (state_25558[(2)]);var state_25558__$1 = state_25558;var statearr_25565_25586 = state_25558__$1;(statearr_25565_25586[(2)] = inst_25554);
(statearr_25565_25586[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (3)))
{var inst_25556 = (state_25558[(2)]);var state_25558__$1 = state_25558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25558__$1,inst_25556);
} else
{if((state_val_25559 === (2)))
{var inst_25530 = (state_25558[(10)]);var inst_25532 = cljs.core.count.call(null,inst_25530);var inst_25533 = (inst_25532 > (0));var state_25558__$1 = state_25558;if(cljs.core.truth_(inst_25533))
{var statearr_25567_25587 = state_25558__$1;(statearr_25567_25587[(1)] = (4));
} else
{var statearr_25568_25588 = state_25558__$1;(statearr_25568_25588[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (11)))
{var inst_25530 = (state_25558[(10)]);var inst_25547 = (state_25558[(2)]);var tmp25566 = inst_25530;var inst_25530__$1 = tmp25566;var state_25558__$1 = (function (){var statearr_25569 = state_25558;(statearr_25569[(10)] = inst_25530__$1);
(statearr_25569[(11)] = inst_25547);
return statearr_25569;
})();var statearr_25570_25589 = state_25558__$1;(statearr_25570_25589[(2)] = null);
(statearr_25570_25589[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (9)))
{var inst_25538 = (state_25558[(8)]);var state_25558__$1 = state_25558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25558__$1,(11),out,inst_25538);
} else
{if((state_val_25559 === (5)))
{var inst_25552 = cljs.core.async.close_BANG_.call(null,out);var state_25558__$1 = state_25558;var statearr_25571_25590 = state_25558__$1;(statearr_25571_25590[(2)] = inst_25552);
(statearr_25571_25590[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (10)))
{var inst_25550 = (state_25558[(2)]);var state_25558__$1 = state_25558;var statearr_25572_25591 = state_25558__$1;(statearr_25572_25591[(2)] = inst_25550);
(statearr_25572_25591[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (8)))
{var inst_25537 = (state_25558[(7)]);var inst_25530 = (state_25558[(10)]);var inst_25539 = (state_25558[(9)]);var inst_25538 = (state_25558[(8)]);var inst_25542 = (function (){var c = inst_25539;var v = inst_25538;var vec__25535 = inst_25537;var cs = inst_25530;return ((function (c,v,vec__25535,cs,inst_25537,inst_25530,inst_25539,inst_25538,state_val_25559,c__9125__auto___25582,out){
return (function (p1__25475_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25475_SHARP_);
});
;})(c,v,vec__25535,cs,inst_25537,inst_25530,inst_25539,inst_25538,state_val_25559,c__9125__auto___25582,out))
})();var inst_25543 = cljs.core.filterv.call(null,inst_25542,inst_25530);var inst_25530__$1 = inst_25543;var state_25558__$1 = (function (){var statearr_25573 = state_25558;(statearr_25573[(10)] = inst_25530__$1);
return statearr_25573;
})();var statearr_25574_25592 = state_25558__$1;(statearr_25574_25592[(2)] = null);
(statearr_25574_25592[(1)] = (2));
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
});})(c__9125__auto___25582,out))
;return ((function (switch__9110__auto__,c__9125__auto___25582,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25578 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25578[(0)] = state_machine__9111__auto__);
(statearr_25578[(1)] = (1));
return statearr_25578;
});
var state_machine__9111__auto____1 = (function (state_25558){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25558);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25579){if((e25579 instanceof Object))
{var ex__9114__auto__ = e25579;var statearr_25580_25593 = state_25558;(statearr_25580_25593[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25579;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25594 = state_25558;
state_25558 = G__25594;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25558){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25582,out))
})();var state__9127__auto__ = (function (){var statearr_25581 = f__9126__auto__.call(null);(statearr_25581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25582);
return statearr_25581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25582,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25687 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25687,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25687,out){
return (function (state_25664){var state_val_25665 = (state_25664[(1)]);if((state_val_25665 === (7)))
{var inst_25646 = (state_25664[(7)]);var inst_25646__$1 = (state_25664[(2)]);var inst_25647 = (inst_25646__$1 == null);var inst_25648 = cljs.core.not.call(null,inst_25647);var state_25664__$1 = (function (){var statearr_25666 = state_25664;(statearr_25666[(7)] = inst_25646__$1);
return statearr_25666;
})();if(inst_25648)
{var statearr_25667_25688 = state_25664__$1;(statearr_25667_25688[(1)] = (8));
} else
{var statearr_25668_25689 = state_25664__$1;(statearr_25668_25689[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25665 === (1)))
{var inst_25641 = (0);var state_25664__$1 = (function (){var statearr_25669 = state_25664;(statearr_25669[(8)] = inst_25641);
return statearr_25669;
})();var statearr_25670_25690 = state_25664__$1;(statearr_25670_25690[(2)] = null);
(statearr_25670_25690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25665 === (4)))
{var state_25664__$1 = state_25664;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25664__$1,(7),ch);
} else
{if((state_val_25665 === (6)))
{var inst_25659 = (state_25664[(2)]);var state_25664__$1 = state_25664;var statearr_25671_25691 = state_25664__$1;(statearr_25671_25691[(2)] = inst_25659);
(statearr_25671_25691[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25665 === (3)))
{var inst_25661 = (state_25664[(2)]);var inst_25662 = cljs.core.async.close_BANG_.call(null,out);var state_25664__$1 = (function (){var statearr_25672 = state_25664;(statearr_25672[(9)] = inst_25661);
return statearr_25672;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25664__$1,inst_25662);
} else
{if((state_val_25665 === (2)))
{var inst_25641 = (state_25664[(8)]);var inst_25643 = (inst_25641 < n);var state_25664__$1 = state_25664;if(cljs.core.truth_(inst_25643))
{var statearr_25673_25692 = state_25664__$1;(statearr_25673_25692[(1)] = (4));
} else
{var statearr_25674_25693 = state_25664__$1;(statearr_25674_25693[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25665 === (11)))
{var inst_25641 = (state_25664[(8)]);var inst_25651 = (state_25664[(2)]);var inst_25652 = (inst_25641 + (1));var inst_25641__$1 = inst_25652;var state_25664__$1 = (function (){var statearr_25675 = state_25664;(statearr_25675[(10)] = inst_25651);
(statearr_25675[(8)] = inst_25641__$1);
return statearr_25675;
})();var statearr_25676_25694 = state_25664__$1;(statearr_25676_25694[(2)] = null);
(statearr_25676_25694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25665 === (9)))
{var state_25664__$1 = state_25664;var statearr_25677_25695 = state_25664__$1;(statearr_25677_25695[(2)] = null);
(statearr_25677_25695[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25665 === (5)))
{var state_25664__$1 = state_25664;var statearr_25678_25696 = state_25664__$1;(statearr_25678_25696[(2)] = null);
(statearr_25678_25696[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25665 === (10)))
{var inst_25656 = (state_25664[(2)]);var state_25664__$1 = state_25664;var statearr_25679_25697 = state_25664__$1;(statearr_25679_25697[(2)] = inst_25656);
(statearr_25679_25697[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25665 === (8)))
{var inst_25646 = (state_25664[(7)]);var state_25664__$1 = state_25664;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25664__$1,(11),out,inst_25646);
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
});})(c__9125__auto___25687,out))
;return ((function (switch__9110__auto__,c__9125__auto___25687,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25683 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25683[(0)] = state_machine__9111__auto__);
(statearr_25683[(1)] = (1));
return statearr_25683;
});
var state_machine__9111__auto____1 = (function (state_25664){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25664);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25684){if((e25684 instanceof Object))
{var ex__9114__auto__ = e25684;var statearr_25685_25698 = state_25664;(statearr_25685_25698[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25664);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25684;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25699 = state_25664;
state_25664 = G__25699;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25664){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25687,out))
})();var state__9127__auto__ = (function (){var statearr_25686 = f__9126__auto__.call(null);(statearr_25686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25687);
return statearr_25686;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25687,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25707 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25707 = (function (ch,f,map_LT_,meta25708){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25708 = meta25708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25707.cljs$lang$type = true;
cljs.core.async.t25707.cljs$lang$ctorStr = "cljs.core.async/t25707";
cljs.core.async.t25707.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25707");
});
cljs.core.async.t25707.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25707.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25707.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25707.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25710 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25710 = (function (fn1,_,meta25708,ch,f,map_LT_,meta25711){
this.fn1 = fn1;
this._ = _;
this.meta25708 = meta25708;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25711 = meta25711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25710.cljs$lang$type = true;
cljs.core.async.t25710.cljs$lang$ctorStr = "cljs.core.async/t25710";
cljs.core.async.t25710.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25710");
});})(___$1))
;
cljs.core.async.t25710.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25700_SHARP_){return f1.call(null,(((p1__25700_SHARP_ == null))?null:self__.f.call(null,p1__25700_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25710.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25712){var self__ = this;
var _25712__$1 = this;return self__.meta25711;
});})(___$1))
;
cljs.core.async.t25710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25712,meta25711__$1){var self__ = this;
var _25712__$1 = this;return (new cljs.core.async.t25710(self__.fn1,self__._,self__.meta25708,self__.ch,self__.f,self__.map_LT_,meta25711__$1));
});})(___$1))
;
cljs.core.async.__GT_t25710 = ((function (___$1){
return (function __GT_t25710(fn1__$1,___$2,meta25708__$1,ch__$2,f__$2,map_LT___$2,meta25711){return (new cljs.core.async.t25710(fn1__$1,___$2,meta25708__$1,ch__$2,f__$2,map_LT___$2,meta25711));
});})(___$1))
;
}
return (new cljs.core.async.t25710(fn1,___$1,self__.meta25708,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25707.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25707.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25707.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25709){var self__ = this;
var _25709__$1 = this;return self__.meta25708;
});
cljs.core.async.t25707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25709,meta25708__$1){var self__ = this;
var _25709__$1 = this;return (new cljs.core.async.t25707(self__.ch,self__.f,self__.map_LT_,meta25708__$1));
});
cljs.core.async.__GT_t25707 = (function __GT_t25707(ch__$1,f__$1,map_LT___$1,meta25708){return (new cljs.core.async.t25707(ch__$1,f__$1,map_LT___$1,meta25708));
});
}
return (new cljs.core.async.t25707(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25716 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25716 = (function (ch,f,map_GT_,meta25717){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25717 = meta25717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25716.cljs$lang$type = true;
cljs.core.async.t25716.cljs$lang$ctorStr = "cljs.core.async/t25716";
cljs.core.async.t25716.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25716");
});
cljs.core.async.t25716.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25716.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25716.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25716.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25716.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25716.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25718){var self__ = this;
var _25718__$1 = this;return self__.meta25717;
});
cljs.core.async.t25716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25718,meta25717__$1){var self__ = this;
var _25718__$1 = this;return (new cljs.core.async.t25716(self__.ch,self__.f,self__.map_GT_,meta25717__$1));
});
cljs.core.async.__GT_t25716 = (function __GT_t25716(ch__$1,f__$1,map_GT___$1,meta25717){return (new cljs.core.async.t25716(ch__$1,f__$1,map_GT___$1,meta25717));
});
}
return (new cljs.core.async.t25716(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25722 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25722 = (function (ch,p,filter_GT_,meta25723){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25723 = meta25723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25722.cljs$lang$type = true;
cljs.core.async.t25722.cljs$lang$ctorStr = "cljs.core.async/t25722";
cljs.core.async.t25722.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25722");
});
cljs.core.async.t25722.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25722.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25722.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25722.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25722.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25722.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25722.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25724){var self__ = this;
var _25724__$1 = this;return self__.meta25723;
});
cljs.core.async.t25722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25724,meta25723__$1){var self__ = this;
var _25724__$1 = this;return (new cljs.core.async.t25722(self__.ch,self__.p,self__.filter_GT_,meta25723__$1));
});
cljs.core.async.__GT_t25722 = (function __GT_t25722(ch__$1,p__$1,filter_GT___$1,meta25723){return (new cljs.core.async.t25722(ch__$1,p__$1,filter_GT___$1,meta25723));
});
}
return (new cljs.core.async.t25722(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25807 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25807,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25807,out){
return (function (state_25786){var state_val_25787 = (state_25786[(1)]);if((state_val_25787 === (7)))
{var inst_25782 = (state_25786[(2)]);var state_25786__$1 = state_25786;var statearr_25788_25808 = state_25786__$1;(statearr_25788_25808[(2)] = inst_25782);
(statearr_25788_25808[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25787 === (1)))
{var state_25786__$1 = state_25786;var statearr_25789_25809 = state_25786__$1;(statearr_25789_25809[(2)] = null);
(statearr_25789_25809[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25787 === (4)))
{var inst_25768 = (state_25786[(7)]);var inst_25768__$1 = (state_25786[(2)]);var inst_25769 = (inst_25768__$1 == null);var state_25786__$1 = (function (){var statearr_25790 = state_25786;(statearr_25790[(7)] = inst_25768__$1);
return statearr_25790;
})();if(cljs.core.truth_(inst_25769))
{var statearr_25791_25810 = state_25786__$1;(statearr_25791_25810[(1)] = (5));
} else
{var statearr_25792_25811 = state_25786__$1;(statearr_25792_25811[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25787 === (6)))
{var inst_25768 = (state_25786[(7)]);var inst_25773 = p.call(null,inst_25768);var state_25786__$1 = state_25786;if(cljs.core.truth_(inst_25773))
{var statearr_25793_25812 = state_25786__$1;(statearr_25793_25812[(1)] = (8));
} else
{var statearr_25794_25813 = state_25786__$1;(statearr_25794_25813[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25787 === (3)))
{var inst_25784 = (state_25786[(2)]);var state_25786__$1 = state_25786;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25786__$1,inst_25784);
} else
{if((state_val_25787 === (2)))
{var state_25786__$1 = state_25786;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25786__$1,(4),ch);
} else
{if((state_val_25787 === (11)))
{var inst_25776 = (state_25786[(2)]);var state_25786__$1 = state_25786;var statearr_25795_25814 = state_25786__$1;(statearr_25795_25814[(2)] = inst_25776);
(statearr_25795_25814[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25787 === (9)))
{var state_25786__$1 = state_25786;var statearr_25796_25815 = state_25786__$1;(statearr_25796_25815[(2)] = null);
(statearr_25796_25815[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25787 === (5)))
{var inst_25771 = cljs.core.async.close_BANG_.call(null,out);var state_25786__$1 = state_25786;var statearr_25797_25816 = state_25786__$1;(statearr_25797_25816[(2)] = inst_25771);
(statearr_25797_25816[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25787 === (10)))
{var inst_25779 = (state_25786[(2)]);var state_25786__$1 = (function (){var statearr_25798 = state_25786;(statearr_25798[(8)] = inst_25779);
return statearr_25798;
})();var statearr_25799_25817 = state_25786__$1;(statearr_25799_25817[(2)] = null);
(statearr_25799_25817[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25787 === (8)))
{var inst_25768 = (state_25786[(7)]);var state_25786__$1 = state_25786;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25786__$1,(11),out,inst_25768);
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
});})(c__9125__auto___25807,out))
;return ((function (switch__9110__auto__,c__9125__auto___25807,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25803 = [null,null,null,null,null,null,null,null,null];(statearr_25803[(0)] = state_machine__9111__auto__);
(statearr_25803[(1)] = (1));
return statearr_25803;
});
var state_machine__9111__auto____1 = (function (state_25786){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25786);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25804){if((e25804 instanceof Object))
{var ex__9114__auto__ = e25804;var statearr_25805_25818 = state_25786;(statearr_25805_25818[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25786);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25804;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25819 = state_25786;
state_25786 = G__25819;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25786){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25807,out))
})();var state__9127__auto__ = (function (){var statearr_25806 = f__9126__auto__.call(null);(statearr_25806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25807);
return statearr_25806;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25807,out))
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
return (function (state_25985){var state_val_25986 = (state_25985[(1)]);if((state_val_25986 === (7)))
{var inst_25981 = (state_25985[(2)]);var state_25985__$1 = state_25985;var statearr_25987_26028 = state_25985__$1;(statearr_25987_26028[(2)] = inst_25981);
(statearr_25987_26028[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (20)))
{var inst_25951 = (state_25985[(7)]);var inst_25962 = (state_25985[(2)]);var inst_25963 = cljs.core.next.call(null,inst_25951);var inst_25937 = inst_25963;var inst_25938 = null;var inst_25939 = (0);var inst_25940 = (0);var state_25985__$1 = (function (){var statearr_25988 = state_25985;(statearr_25988[(8)] = inst_25937);
(statearr_25988[(9)] = inst_25938);
(statearr_25988[(10)] = inst_25962);
(statearr_25988[(11)] = inst_25940);
(statearr_25988[(12)] = inst_25939);
return statearr_25988;
})();var statearr_25989_26029 = state_25985__$1;(statearr_25989_26029[(2)] = null);
(statearr_25989_26029[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (1)))
{var state_25985__$1 = state_25985;var statearr_25990_26030 = state_25985__$1;(statearr_25990_26030[(2)] = null);
(statearr_25990_26030[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (4)))
{var inst_25926 = (state_25985[(13)]);var inst_25926__$1 = (state_25985[(2)]);var inst_25927 = (inst_25926__$1 == null);var state_25985__$1 = (function (){var statearr_25991 = state_25985;(statearr_25991[(13)] = inst_25926__$1);
return statearr_25991;
})();if(cljs.core.truth_(inst_25927))
{var statearr_25992_26031 = state_25985__$1;(statearr_25992_26031[(1)] = (5));
} else
{var statearr_25993_26032 = state_25985__$1;(statearr_25993_26032[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (15)))
{var state_25985__$1 = state_25985;var statearr_25997_26033 = state_25985__$1;(statearr_25997_26033[(2)] = null);
(statearr_25997_26033[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (21)))
{var state_25985__$1 = state_25985;var statearr_25998_26034 = state_25985__$1;(statearr_25998_26034[(2)] = null);
(statearr_25998_26034[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (13)))
{var inst_25937 = (state_25985[(8)]);var inst_25938 = (state_25985[(9)]);var inst_25940 = (state_25985[(11)]);var inst_25939 = (state_25985[(12)]);var inst_25947 = (state_25985[(2)]);var inst_25948 = (inst_25940 + (1));var tmp25994 = inst_25937;var tmp25995 = inst_25938;var tmp25996 = inst_25939;var inst_25937__$1 = tmp25994;var inst_25938__$1 = tmp25995;var inst_25939__$1 = tmp25996;var inst_25940__$1 = inst_25948;var state_25985__$1 = (function (){var statearr_25999 = state_25985;(statearr_25999[(14)] = inst_25947);
(statearr_25999[(8)] = inst_25937__$1);
(statearr_25999[(9)] = inst_25938__$1);
(statearr_25999[(11)] = inst_25940__$1);
(statearr_25999[(12)] = inst_25939__$1);
return statearr_25999;
})();var statearr_26000_26035 = state_25985__$1;(statearr_26000_26035[(2)] = null);
(statearr_26000_26035[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (22)))
{var state_25985__$1 = state_25985;var statearr_26001_26036 = state_25985__$1;(statearr_26001_26036[(2)] = null);
(statearr_26001_26036[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (6)))
{var inst_25926 = (state_25985[(13)]);var inst_25935 = f.call(null,inst_25926);var inst_25936 = cljs.core.seq.call(null,inst_25935);var inst_25937 = inst_25936;var inst_25938 = null;var inst_25939 = (0);var inst_25940 = (0);var state_25985__$1 = (function (){var statearr_26002 = state_25985;(statearr_26002[(8)] = inst_25937);
(statearr_26002[(9)] = inst_25938);
(statearr_26002[(11)] = inst_25940);
(statearr_26002[(12)] = inst_25939);
return statearr_26002;
})();var statearr_26003_26037 = state_25985__$1;(statearr_26003_26037[(2)] = null);
(statearr_26003_26037[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (17)))
{var inst_25951 = (state_25985[(7)]);var inst_25955 = cljs.core.chunk_first.call(null,inst_25951);var inst_25956 = cljs.core.chunk_rest.call(null,inst_25951);var inst_25957 = cljs.core.count.call(null,inst_25955);var inst_25937 = inst_25956;var inst_25938 = inst_25955;var inst_25939 = inst_25957;var inst_25940 = (0);var state_25985__$1 = (function (){var statearr_26004 = state_25985;(statearr_26004[(8)] = inst_25937);
(statearr_26004[(9)] = inst_25938);
(statearr_26004[(11)] = inst_25940);
(statearr_26004[(12)] = inst_25939);
return statearr_26004;
})();var statearr_26005_26038 = state_25985__$1;(statearr_26005_26038[(2)] = null);
(statearr_26005_26038[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (3)))
{var inst_25983 = (state_25985[(2)]);var state_25985__$1 = state_25985;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25985__$1,inst_25983);
} else
{if((state_val_25986 === (12)))
{var inst_25971 = (state_25985[(2)]);var state_25985__$1 = state_25985;var statearr_26006_26039 = state_25985__$1;(statearr_26006_26039[(2)] = inst_25971);
(statearr_26006_26039[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (2)))
{var state_25985__$1 = state_25985;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25985__$1,(4),in$);
} else
{if((state_val_25986 === (23)))
{var inst_25979 = (state_25985[(2)]);var state_25985__$1 = state_25985;var statearr_26007_26040 = state_25985__$1;(statearr_26007_26040[(2)] = inst_25979);
(statearr_26007_26040[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (19)))
{var inst_25966 = (state_25985[(2)]);var state_25985__$1 = state_25985;var statearr_26008_26041 = state_25985__$1;(statearr_26008_26041[(2)] = inst_25966);
(statearr_26008_26041[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (11)))
{var inst_25937 = (state_25985[(8)]);var inst_25951 = (state_25985[(7)]);var inst_25951__$1 = cljs.core.seq.call(null,inst_25937);var state_25985__$1 = (function (){var statearr_26009 = state_25985;(statearr_26009[(7)] = inst_25951__$1);
return statearr_26009;
})();if(inst_25951__$1)
{var statearr_26010_26042 = state_25985__$1;(statearr_26010_26042[(1)] = (14));
} else
{var statearr_26011_26043 = state_25985__$1;(statearr_26011_26043[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (9)))
{var inst_25973 = (state_25985[(2)]);var inst_25974 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25985__$1 = (function (){var statearr_26012 = state_25985;(statearr_26012[(15)] = inst_25973);
return statearr_26012;
})();if(cljs.core.truth_(inst_25974))
{var statearr_26013_26044 = state_25985__$1;(statearr_26013_26044[(1)] = (21));
} else
{var statearr_26014_26045 = state_25985__$1;(statearr_26014_26045[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (5)))
{var inst_25929 = cljs.core.async.close_BANG_.call(null,out);var state_25985__$1 = state_25985;var statearr_26015_26046 = state_25985__$1;(statearr_26015_26046[(2)] = inst_25929);
(statearr_26015_26046[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (14)))
{var inst_25951 = (state_25985[(7)]);var inst_25953 = cljs.core.chunked_seq_QMARK_.call(null,inst_25951);var state_25985__$1 = state_25985;if(inst_25953)
{var statearr_26016_26047 = state_25985__$1;(statearr_26016_26047[(1)] = (17));
} else
{var statearr_26017_26048 = state_25985__$1;(statearr_26017_26048[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (16)))
{var inst_25969 = (state_25985[(2)]);var state_25985__$1 = state_25985;var statearr_26018_26049 = state_25985__$1;(statearr_26018_26049[(2)] = inst_25969);
(statearr_26018_26049[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25986 === (10)))
{var inst_25938 = (state_25985[(9)]);var inst_25940 = (state_25985[(11)]);var inst_25945 = cljs.core._nth.call(null,inst_25938,inst_25940);var state_25985__$1 = state_25985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25985__$1,(13),out,inst_25945);
} else
{if((state_val_25986 === (18)))
{var inst_25951 = (state_25985[(7)]);var inst_25960 = cljs.core.first.call(null,inst_25951);var state_25985__$1 = state_25985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25985__$1,(20),out,inst_25960);
} else
{if((state_val_25986 === (8)))
{var inst_25940 = (state_25985[(11)]);var inst_25939 = (state_25985[(12)]);var inst_25942 = (inst_25940 < inst_25939);var inst_25943 = inst_25942;var state_25985__$1 = state_25985;if(cljs.core.truth_(inst_25943))
{var statearr_26019_26050 = state_25985__$1;(statearr_26019_26050[(1)] = (10));
} else
{var statearr_26020_26051 = state_25985__$1;(statearr_26020_26051[(1)] = (11));
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
var state_machine__9111__auto____0 = (function (){var statearr_26024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26024[(0)] = state_machine__9111__auto__);
(statearr_26024[(1)] = (1));
return statearr_26024;
});
var state_machine__9111__auto____1 = (function (state_25985){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25985);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26025){if((e26025 instanceof Object))
{var ex__9114__auto__ = e26025;var statearr_26026_26052 = state_25985;(statearr_26026_26052[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25985);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26025;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26053 = state_25985;
state_25985 = G__26053;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25985){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_26027 = f__9126__auto__.call(null);(statearr_26027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_26027;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26150 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26150,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26150,out){
return (function (state_26125){var state_val_26126 = (state_26125[(1)]);if((state_val_26126 === (7)))
{var inst_26120 = (state_26125[(2)]);var state_26125__$1 = state_26125;var statearr_26127_26151 = state_26125__$1;(statearr_26127_26151[(2)] = inst_26120);
(statearr_26127_26151[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26126 === (1)))
{var inst_26102 = null;var state_26125__$1 = (function (){var statearr_26128 = state_26125;(statearr_26128[(7)] = inst_26102);
return statearr_26128;
})();var statearr_26129_26152 = state_26125__$1;(statearr_26129_26152[(2)] = null);
(statearr_26129_26152[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26126 === (4)))
{var inst_26105 = (state_26125[(8)]);var inst_26105__$1 = (state_26125[(2)]);var inst_26106 = (inst_26105__$1 == null);var inst_26107 = cljs.core.not.call(null,inst_26106);var state_26125__$1 = (function (){var statearr_26130 = state_26125;(statearr_26130[(8)] = inst_26105__$1);
return statearr_26130;
})();if(inst_26107)
{var statearr_26131_26153 = state_26125__$1;(statearr_26131_26153[(1)] = (5));
} else
{var statearr_26132_26154 = state_26125__$1;(statearr_26132_26154[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26126 === (6)))
{var state_26125__$1 = state_26125;var statearr_26133_26155 = state_26125__$1;(statearr_26133_26155[(2)] = null);
(statearr_26133_26155[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26126 === (3)))
{var inst_26122 = (state_26125[(2)]);var inst_26123 = cljs.core.async.close_BANG_.call(null,out);var state_26125__$1 = (function (){var statearr_26134 = state_26125;(statearr_26134[(9)] = inst_26122);
return statearr_26134;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26125__$1,inst_26123);
} else
{if((state_val_26126 === (2)))
{var state_26125__$1 = state_26125;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26125__$1,(4),ch);
} else
{if((state_val_26126 === (11)))
{var inst_26105 = (state_26125[(8)]);var inst_26114 = (state_26125[(2)]);var inst_26102 = inst_26105;var state_26125__$1 = (function (){var statearr_26135 = state_26125;(statearr_26135[(7)] = inst_26102);
(statearr_26135[(10)] = inst_26114);
return statearr_26135;
})();var statearr_26136_26156 = state_26125__$1;(statearr_26136_26156[(2)] = null);
(statearr_26136_26156[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26126 === (9)))
{var inst_26105 = (state_26125[(8)]);var state_26125__$1 = state_26125;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26125__$1,(11),out,inst_26105);
} else
{if((state_val_26126 === (5)))
{var inst_26105 = (state_26125[(8)]);var inst_26102 = (state_26125[(7)]);var inst_26109 = cljs.core._EQ_.call(null,inst_26105,inst_26102);var state_26125__$1 = state_26125;if(inst_26109)
{var statearr_26138_26157 = state_26125__$1;(statearr_26138_26157[(1)] = (8));
} else
{var statearr_26139_26158 = state_26125__$1;(statearr_26139_26158[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26126 === (10)))
{var inst_26117 = (state_26125[(2)]);var state_26125__$1 = state_26125;var statearr_26140_26159 = state_26125__$1;(statearr_26140_26159[(2)] = inst_26117);
(statearr_26140_26159[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26126 === (8)))
{var inst_26102 = (state_26125[(7)]);var tmp26137 = inst_26102;var inst_26102__$1 = tmp26137;var state_26125__$1 = (function (){var statearr_26141 = state_26125;(statearr_26141[(7)] = inst_26102__$1);
return statearr_26141;
})();var statearr_26142_26160 = state_26125__$1;(statearr_26142_26160[(2)] = null);
(statearr_26142_26160[(1)] = (2));
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
});})(c__9125__auto___26150,out))
;return ((function (switch__9110__auto__,c__9125__auto___26150,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26146 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26146[(0)] = state_machine__9111__auto__);
(statearr_26146[(1)] = (1));
return statearr_26146;
});
var state_machine__9111__auto____1 = (function (state_26125){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26125);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26147){if((e26147 instanceof Object))
{var ex__9114__auto__ = e26147;var statearr_26148_26161 = state_26125;(statearr_26148_26161[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26125);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26147;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26162 = state_26125;
state_26125 = G__26162;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26125){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26150,out))
})();var state__9127__auto__ = (function (){var statearr_26149 = f__9126__auto__.call(null);(statearr_26149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26150);
return statearr_26149;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26150,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26297 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26297,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26297,out){
return (function (state_26267){var state_val_26268 = (state_26267[(1)]);if((state_val_26268 === (7)))
{var inst_26263 = (state_26267[(2)]);var state_26267__$1 = state_26267;var statearr_26269_26298 = state_26267__$1;(statearr_26269_26298[(2)] = inst_26263);
(statearr_26269_26298[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26268 === (1)))
{var inst_26230 = (new Array(n));var inst_26231 = inst_26230;var inst_26232 = (0);var state_26267__$1 = (function (){var statearr_26270 = state_26267;(statearr_26270[(7)] = inst_26231);
(statearr_26270[(8)] = inst_26232);
return statearr_26270;
})();var statearr_26271_26299 = state_26267__$1;(statearr_26271_26299[(2)] = null);
(statearr_26271_26299[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26268 === (4)))
{var inst_26235 = (state_26267[(9)]);var inst_26235__$1 = (state_26267[(2)]);var inst_26236 = (inst_26235__$1 == null);var inst_26237 = cljs.core.not.call(null,inst_26236);var state_26267__$1 = (function (){var statearr_26272 = state_26267;(statearr_26272[(9)] = inst_26235__$1);
return statearr_26272;
})();if(inst_26237)
{var statearr_26273_26300 = state_26267__$1;(statearr_26273_26300[(1)] = (5));
} else
{var statearr_26274_26301 = state_26267__$1;(statearr_26274_26301[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26268 === (15)))
{var inst_26257 = (state_26267[(2)]);var state_26267__$1 = state_26267;var statearr_26275_26302 = state_26267__$1;(statearr_26275_26302[(2)] = inst_26257);
(statearr_26275_26302[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26268 === (13)))
{var state_26267__$1 = state_26267;var statearr_26276_26303 = state_26267__$1;(statearr_26276_26303[(2)] = null);
(statearr_26276_26303[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26268 === (6)))
{var inst_26232 = (state_26267[(8)]);var inst_26253 = (inst_26232 > (0));var state_26267__$1 = state_26267;if(cljs.core.truth_(inst_26253))
{var statearr_26277_26304 = state_26267__$1;(statearr_26277_26304[(1)] = (12));
} else
{var statearr_26278_26305 = state_26267__$1;(statearr_26278_26305[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26268 === (3)))
{var inst_26265 = (state_26267[(2)]);var state_26267__$1 = state_26267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26267__$1,inst_26265);
} else
{if((state_val_26268 === (12)))
{var inst_26231 = (state_26267[(7)]);var inst_26255 = cljs.core.vec.call(null,inst_26231);var state_26267__$1 = state_26267;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26267__$1,(15),out,inst_26255);
} else
{if((state_val_26268 === (2)))
{var state_26267__$1 = state_26267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26267__$1,(4),ch);
} else
{if((state_val_26268 === (11)))
{var inst_26247 = (state_26267[(2)]);var inst_26248 = (new Array(n));var inst_26231 = inst_26248;var inst_26232 = (0);var state_26267__$1 = (function (){var statearr_26279 = state_26267;(statearr_26279[(7)] = inst_26231);
(statearr_26279[(10)] = inst_26247);
(statearr_26279[(8)] = inst_26232);
return statearr_26279;
})();var statearr_26280_26306 = state_26267__$1;(statearr_26280_26306[(2)] = null);
(statearr_26280_26306[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26268 === (9)))
{var inst_26231 = (state_26267[(7)]);var inst_26245 = cljs.core.vec.call(null,inst_26231);var state_26267__$1 = state_26267;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26267__$1,(11),out,inst_26245);
} else
{if((state_val_26268 === (5)))
{var inst_26231 = (state_26267[(7)]);var inst_26240 = (state_26267[(11)]);var inst_26232 = (state_26267[(8)]);var inst_26235 = (state_26267[(9)]);var inst_26239 = (inst_26231[inst_26232] = inst_26235);var inst_26240__$1 = (inst_26232 + (1));var inst_26241 = (inst_26240__$1 < n);var state_26267__$1 = (function (){var statearr_26281 = state_26267;(statearr_26281[(11)] = inst_26240__$1);
(statearr_26281[(12)] = inst_26239);
return statearr_26281;
})();if(cljs.core.truth_(inst_26241))
{var statearr_26282_26307 = state_26267__$1;(statearr_26282_26307[(1)] = (8));
} else
{var statearr_26283_26308 = state_26267__$1;(statearr_26283_26308[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26268 === (14)))
{var inst_26260 = (state_26267[(2)]);var inst_26261 = cljs.core.async.close_BANG_.call(null,out);var state_26267__$1 = (function (){var statearr_26285 = state_26267;(statearr_26285[(13)] = inst_26260);
return statearr_26285;
})();var statearr_26286_26309 = state_26267__$1;(statearr_26286_26309[(2)] = inst_26261);
(statearr_26286_26309[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26268 === (10)))
{var inst_26251 = (state_26267[(2)]);var state_26267__$1 = state_26267;var statearr_26287_26310 = state_26267__$1;(statearr_26287_26310[(2)] = inst_26251);
(statearr_26287_26310[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26268 === (8)))
{var inst_26231 = (state_26267[(7)]);var inst_26240 = (state_26267[(11)]);var tmp26284 = inst_26231;var inst_26231__$1 = tmp26284;var inst_26232 = inst_26240;var state_26267__$1 = (function (){var statearr_26288 = state_26267;(statearr_26288[(7)] = inst_26231__$1);
(statearr_26288[(8)] = inst_26232);
return statearr_26288;
})();var statearr_26289_26311 = state_26267__$1;(statearr_26289_26311[(2)] = null);
(statearr_26289_26311[(1)] = (2));
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
});})(c__9125__auto___26297,out))
;return ((function (switch__9110__auto__,c__9125__auto___26297,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26293[(0)] = state_machine__9111__auto__);
(statearr_26293[(1)] = (1));
return statearr_26293;
});
var state_machine__9111__auto____1 = (function (state_26267){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26267);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26294){if((e26294 instanceof Object))
{var ex__9114__auto__ = e26294;var statearr_26295_26312 = state_26267;(statearr_26295_26312[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26267);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26294;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26313 = state_26267;
state_26267 = G__26313;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26267){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26297,out))
})();var state__9127__auto__ = (function (){var statearr_26296 = f__9126__auto__.call(null);(statearr_26296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26297);
return statearr_26296;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26297,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26456 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26456,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26456,out){
return (function (state_26426){var state_val_26427 = (state_26426[(1)]);if((state_val_26427 === (7)))
{var inst_26422 = (state_26426[(2)]);var state_26426__$1 = state_26426;var statearr_26428_26457 = state_26426__$1;(statearr_26428_26457[(2)] = inst_26422);
(statearr_26428_26457[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (1)))
{var inst_26385 = [];var inst_26386 = inst_26385;var inst_26387 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26426__$1 = (function (){var statearr_26429 = state_26426;(statearr_26429[(7)] = inst_26386);
(statearr_26429[(8)] = inst_26387);
return statearr_26429;
})();var statearr_26430_26458 = state_26426__$1;(statearr_26430_26458[(2)] = null);
(statearr_26430_26458[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (4)))
{var inst_26390 = (state_26426[(9)]);var inst_26390__$1 = (state_26426[(2)]);var inst_26391 = (inst_26390__$1 == null);var inst_26392 = cljs.core.not.call(null,inst_26391);var state_26426__$1 = (function (){var statearr_26431 = state_26426;(statearr_26431[(9)] = inst_26390__$1);
return statearr_26431;
})();if(inst_26392)
{var statearr_26432_26459 = state_26426__$1;(statearr_26432_26459[(1)] = (5));
} else
{var statearr_26433_26460 = state_26426__$1;(statearr_26433_26460[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (15)))
{var inst_26416 = (state_26426[(2)]);var state_26426__$1 = state_26426;var statearr_26434_26461 = state_26426__$1;(statearr_26434_26461[(2)] = inst_26416);
(statearr_26434_26461[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (13)))
{var state_26426__$1 = state_26426;var statearr_26435_26462 = state_26426__$1;(statearr_26435_26462[(2)] = null);
(statearr_26435_26462[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (6)))
{var inst_26386 = (state_26426[(7)]);var inst_26411 = inst_26386.length;var inst_26412 = (inst_26411 > (0));var state_26426__$1 = state_26426;if(cljs.core.truth_(inst_26412))
{var statearr_26436_26463 = state_26426__$1;(statearr_26436_26463[(1)] = (12));
} else
{var statearr_26437_26464 = state_26426__$1;(statearr_26437_26464[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (3)))
{var inst_26424 = (state_26426[(2)]);var state_26426__$1 = state_26426;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26426__$1,inst_26424);
} else
{if((state_val_26427 === (12)))
{var inst_26386 = (state_26426[(7)]);var inst_26414 = cljs.core.vec.call(null,inst_26386);var state_26426__$1 = state_26426;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26426__$1,(15),out,inst_26414);
} else
{if((state_val_26427 === (2)))
{var state_26426__$1 = state_26426;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26426__$1,(4),ch);
} else
{if((state_val_26427 === (11)))
{var inst_26390 = (state_26426[(9)]);var inst_26394 = (state_26426[(10)]);var inst_26404 = (state_26426[(2)]);var inst_26405 = [];var inst_26406 = inst_26405.push(inst_26390);var inst_26386 = inst_26405;var inst_26387 = inst_26394;var state_26426__$1 = (function (){var statearr_26438 = state_26426;(statearr_26438[(11)] = inst_26406);
(statearr_26438[(7)] = inst_26386);
(statearr_26438[(8)] = inst_26387);
(statearr_26438[(12)] = inst_26404);
return statearr_26438;
})();var statearr_26439_26465 = state_26426__$1;(statearr_26439_26465[(2)] = null);
(statearr_26439_26465[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (9)))
{var inst_26386 = (state_26426[(7)]);var inst_26402 = cljs.core.vec.call(null,inst_26386);var state_26426__$1 = state_26426;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26426__$1,(11),out,inst_26402);
} else
{if((state_val_26427 === (5)))
{var inst_26390 = (state_26426[(9)]);var inst_26394 = (state_26426[(10)]);var inst_26387 = (state_26426[(8)]);var inst_26394__$1 = f.call(null,inst_26390);var inst_26395 = cljs.core._EQ_.call(null,inst_26394__$1,inst_26387);var inst_26396 = cljs.core.keyword_identical_QMARK_.call(null,inst_26387,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26397 = (inst_26395) || (inst_26396);var state_26426__$1 = (function (){var statearr_26440 = state_26426;(statearr_26440[(10)] = inst_26394__$1);
return statearr_26440;
})();if(cljs.core.truth_(inst_26397))
{var statearr_26441_26466 = state_26426__$1;(statearr_26441_26466[(1)] = (8));
} else
{var statearr_26442_26467 = state_26426__$1;(statearr_26442_26467[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (14)))
{var inst_26419 = (state_26426[(2)]);var inst_26420 = cljs.core.async.close_BANG_.call(null,out);var state_26426__$1 = (function (){var statearr_26444 = state_26426;(statearr_26444[(13)] = inst_26419);
return statearr_26444;
})();var statearr_26445_26468 = state_26426__$1;(statearr_26445_26468[(2)] = inst_26420);
(statearr_26445_26468[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (10)))
{var inst_26409 = (state_26426[(2)]);var state_26426__$1 = state_26426;var statearr_26446_26469 = state_26426__$1;(statearr_26446_26469[(2)] = inst_26409);
(statearr_26446_26469[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (8)))
{var inst_26390 = (state_26426[(9)]);var inst_26394 = (state_26426[(10)]);var inst_26386 = (state_26426[(7)]);var inst_26399 = inst_26386.push(inst_26390);var tmp26443 = inst_26386;var inst_26386__$1 = tmp26443;var inst_26387 = inst_26394;var state_26426__$1 = (function (){var statearr_26447 = state_26426;(statearr_26447[(7)] = inst_26386__$1);
(statearr_26447[(8)] = inst_26387);
(statearr_26447[(14)] = inst_26399);
return statearr_26447;
})();var statearr_26448_26470 = state_26426__$1;(statearr_26448_26470[(2)] = null);
(statearr_26448_26470[(1)] = (2));
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
});})(c__9125__auto___26456,out))
;return ((function (switch__9110__auto__,c__9125__auto___26456,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26452[(0)] = state_machine__9111__auto__);
(statearr_26452[(1)] = (1));
return statearr_26452;
});
var state_machine__9111__auto____1 = (function (state_26426){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26426);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26453){if((e26453 instanceof Object))
{var ex__9114__auto__ = e26453;var statearr_26454_26471 = state_26426;(statearr_26454_26471[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26426);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26453;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26472 = state_26426;
state_26426 = G__26472;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26426){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26456,out))
})();var state__9127__auto__ = (function (){var statearr_26455 = f__9126__auto__.call(null);(statearr_26455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26456);
return statearr_26455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26456,out))
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
